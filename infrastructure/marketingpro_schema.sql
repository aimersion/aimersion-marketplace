-- ============================================================
-- AIMERSION MARKETINGPRO — COMPLETE SCHEMA
-- Aimersion agent layer + full CRM
-- Project: zdhwkctdqxkhnyrmovua (marketingpro)
-- ============================================================

create extension if not exists "pgcrypto";

-- ============================================================
-- AIMERSION LAYER
-- ============================================================

-- Clients (one per customer — ZIZO, Simplified Pools, etc.)
create table clients (
  id            uuid primary key default gen_random_uuid(),
  name          text not null,
  slug          text not null unique,
  tier          text not null default 'growth',   -- starter | growth | revenue_os | enterprise
  status        text not null default 'active',   -- active | paused | churned
  slack_webhook text,
  timezone      text default 'America/Chicago',
  created_at    timestamptz default now(),
  updated_at    timestamptz default now()
);

-- Per-client OAuth tokens / API keys for MCP servers
create table client_tokens (
  id            uuid primary key default gen_random_uuid(),
  client_id     uuid references clients(id) on delete cascade,
  service       text not null,   -- linkedin | google | outlook | facebook | x | hubspot | slack | crm
  token_type    text not null,   -- access_token | refresh_token | api_key | webhook_url
  token_value   text not null,
  expires_at    timestamptz,
  scope         text,
  active        boolean default true,
  created_at    timestamptz default now(),
  unique(client_id, service, token_type)
);

-- Per-client ICP, messaging, brand voice, competitors config
create table client_config (
  id            uuid primary key default gen_random_uuid(),
  client_id     uuid references clients(id) on delete cascade,
  config_type   text not null,   -- icp | messaging | brand_voice | content_calendar | competitors
  config_data   jsonb not null,
  version       int default 1,
  active        boolean default true,
  created_at    timestamptz default now(),
  updated_at    timestamptz default now(),
  unique(client_id, config_type)
);

-- Every cron/manual Claude agent run
create table agent_sessions (
  id              uuid primary key default gen_random_uuid(),
  client_id       uuid references clients(id),
  session_type    text not null,   -- weekly_report | content_calendar | outreach_draft | trigger_scan
  trigger_type    text not null,   -- cron | manual | webhook
  status          text default 'queued',   -- queued | running | awaiting_approval | approved | published | failed
  plugin_used     text,
  prompt_sent     text,
  output_raw      text,
  output_parsed   jsonb,
  error_message   text,
  tokens_used     int,
  cost_usd        numeric(8,4),
  started_at      timestamptz,
  completed_at    timestamptz,
  created_at      timestamptz default now()
);

-- Content that needs human sign-off before publishing
create table approval_queue (
  id              uuid primary key default gen_random_uuid(),
  client_id       uuid references clients(id),
  session_id      uuid references agent_sessions(id),
  content_type    text not null,   -- linkedin_post | email | outreach_message | report | ad_copy
  content_data    jsonb not null,
  status          text default 'pending',   -- pending | approved | rejected | edited
  reviewer_notes  text,
  approved_at     timestamptz,
  approved_by     text,
  publish_at      timestamptz,
  published_at    timestamptz,
  created_at      timestamptz default now()
);

-- Published content performance — feeds back into agent sessions
create table content_performance (
  id              uuid primary key default gen_random_uuid(),
  client_id       uuid references clients(id),
  approval_id     uuid references approval_queue(id),
  platform        text not null,   -- linkedin | email | google_ads | x | blog
  content_type    text not null,   -- post | email | ad | article
  published_at    timestamptz,
  metrics         jsonb,           -- impressions, clicks, engagements, replies, leads
  mql_count       int default 0,
  pipeline_value  numeric(12,2),
  synced_at       timestamptz,
  created_at      timestamptz default now()
);

-- Buying signals detected for ICP accounts
create table lead_signals (
  id              uuid primary key default gen_random_uuid(),
  client_id       uuid references clients(id),
  account_name    text not null,
  contact_name    text,
  contact_title   text,
  signal_type     text not null,   -- job_change | funding | hiring | content_engagement | pain_stated
  signal_detail   text,
  signal_url      text,
  priority_tier   int,             -- 1=act today, 2=this week, 3=nurture
  action_taken    text,
  session_id      uuid references agent_sessions(id),
  crm_contact_id  uuid,            -- linked to CRM once matched
  crm_account_id  uuid,
  detected_at     timestamptz default now(),
  actioned_at     timestamptz
);

-- What runs when for each client
create table cron_schedule (
  id                uuid primary key default gen_random_uuid(),
  client_id         uuid references clients(id),
  job_name          text not null,
  cron_expression   text not null,
  plugin            text not null,
  prompt_template   text not null,
  requires_approval boolean default true,
  active            boolean default true,
  last_run_at       timestamptz,
  next_run_at       timestamptz,
  created_at        timestamptz default now(),
  unique(client_id, job_name)
);

-- ============================================================
-- CRM LAYER
-- ============================================================

-- Companies / target accounts
create table crm_accounts (
  id                uuid primary key default gen_random_uuid(),
  client_id         uuid references clients(id),          -- which Aimersion client this belongs to
  name              text not null,
  domain            text,
  industry          text,
  employee_count    int,
  annual_revenue    numeric(15,2),
  hq_city           text,
  hq_state          text,
  hq_country        text default 'US',
  linkedin_url      text,
  website           text,
  icp_tier          text,          -- A | B | C (from ICP scoring)
  icp_score         int,           -- 1-10
  account_status    text default 'target',  -- target | engaged | customer | churned | disqualified
  owner             text,          -- sales rep name/email
  source            text,          -- how we found them: signal | inbound | referral | outbound | list
  tech_stack        jsonb,         -- ["HubSpot","Salesforce","Gong"]
  tags              text[],
  notes             text,
  last_activity_at  timestamptz,
  created_at        timestamptz default now(),
  updated_at        timestamptz default now()
);

-- People at accounts
create table crm_contacts (
  id                uuid primary key default gen_random_uuid(),
  client_id         uuid references clients(id),
  account_id        uuid references crm_accounts(id) on delete set null,
  first_name        text not null,
  last_name         text,
  email             text,
  phone             text,
  title             text,
  seniority         text,          -- C-Suite | VP | Director | Manager | IC
  department        text,          -- Sales | Marketing | HR | Finance | IT | Operations
  linkedin_url      text,
  contact_status    text default 'prospect',  -- prospect | mql | sql | opportunity | customer | churned
  mql_score         int default 0,
  is_buyer          boolean default false,    -- decision maker
  is_champion       boolean default false,    -- internal advocate
  is_blocker        boolean default false,
  source            text,
  owner             text,
  last_activity_at  timestamptz,
  opted_out         boolean default false,    -- email opt-out
  opted_out_at      timestamptz,
  created_at        timestamptz default now(),
  updated_at        timestamptz default now()
);

-- Deals / opportunities
create table crm_deals (
  id                uuid primary key default gen_random_uuid(),
  client_id         uuid references clients(id),
  account_id        uuid references crm_accounts(id),
  name              text not null,
  stage             text not null default 'prospecting',
  -- stages: prospecting | mql | discovery | demo | proposal | negotiation | closed_won | closed_lost
  amount            numeric(12,2),
  currency          text default 'USD',
  close_date        date,
  probability       int,           -- 0-100
  owner             text,
  source            text,          -- which marketing channel sourced this deal
  source_content_id uuid,          -- which content piece influenced this (references approval_queue)
  lost_reason       text,
  competitor        text,          -- who we lost to
  notes             text,
  is_marketing_sourced  boolean default false,
  is_marketing_influenced boolean default false,
  created_at        timestamptz default now(),
  updated_at        timestamptz default now(),
  closed_at         timestamptz
);

-- Junction: contacts involved in a deal
create table deal_contacts (
  deal_id     uuid references crm_deals(id) on delete cascade,
  contact_id  uuid references crm_contacts(id) on delete cascade,
  role        text,   -- champion | economic_buyer | technical_buyer | blocker | influencer
  primary     boolean default false,
  added_at    timestamptz default now(),
  primary key (deal_id, contact_id)
);

-- All touchpoints: calls, emails, LinkedIn DMs, meetings, etc.
create table crm_activities (
  id              uuid primary key default gen_random_uuid(),
  client_id       uuid references clients(id),
  account_id      uuid references crm_accounts(id),
  contact_id      uuid references crm_contacts(id),
  deal_id         uuid references crm_deals(id),
  activity_type   text not null,   -- email | call | linkedin_dm | linkedin_comment | meeting | demo | webinar | content_view | ad_click
  direction       text,            -- outbound | inbound
  subject         text,
  body            text,
  outcome         text,            -- replied | no_reply | meeting_booked | interested | not_interested | left_voicemail
  duration_mins   int,
  channel         text,            -- linkedin | email | phone | zoom | in_person
  performed_by    text,            -- rep name or 'aimersion_agent'
  session_id      uuid references agent_sessions(id),   -- if AI-generated
  approval_id     uuid references approval_queue(id),   -- if went through approval
  activity_at     timestamptz default now(),
  created_at      timestamptz default now()
);

-- Notes on accounts, contacts, or deals
create table crm_notes (
  id          uuid primary key default gen_random_uuid(),
  client_id   uuid references clients(id),
  account_id  uuid references crm_accounts(id),
  contact_id  uuid references crm_contacts(id),
  deal_id     uuid references crm_deals(id),
  body        text not null,
  note_type   text default 'general',   -- general | call_summary | meeting_notes | strategy | objection
  created_by  text,                     -- rep name or 'aimersion_agent'
  session_id  uuid references agent_sessions(id),
  created_at  timestamptz default now()
);

-- Track every stage change on a deal (pipeline velocity analytics)
create table deal_stage_history (
  id          uuid primary key default gen_random_uuid(),
  client_id   uuid references clients(id),
  deal_id     uuid references crm_deals(id) on delete cascade,
  from_stage  text,
  to_stage    text not null,
  changed_at  timestamptz default now(),
  changed_by  text,
  days_in_stage int    -- calculated: days spent in from_stage
);

-- MQL events — when and why a contact became an MQL
create table mql_events (
  id              uuid primary key default gen_random_uuid(),
  client_id       uuid references clients(id),
  contact_id      uuid references crm_contacts(id),
  account_id      uuid references crm_accounts(id),
  trigger_type    text not null,   -- score_threshold | demo_request | trial_signup | content_download | webinar_attend | manual
  trigger_detail  text,            -- e.g. "Downloaded Sales Efficiency Guide"
  mql_score       int,
  first_touch_source    text,      -- UTM source of very first visit
  first_touch_campaign  text,
  last_touch_source     text,      -- UTM source that converted them
  last_touch_campaign   text,
  content_path    jsonb,           -- array of content pieces consumed before MQL
  session_id      uuid references agent_sessions(id),
  signal_id       uuid references lead_signals(id),
  created_at      timestamptz default now()
);

-- Email sequences (drip campaigns)
create table email_sequences (
  id              uuid primary key default gen_random_uuid(),
  client_id       uuid references clients(id),
  name            text not null,
  description     text,
  sequence_type   text,    -- nurture | outbound | onboarding | re_engagement | post_webinar
  icp_segment     text,    -- which ICP this is for
  status          text default 'draft',   -- draft | active | paused | archived
  steps           jsonb,   -- [{day:0,subject:"...",body:"..."},{day:3,...}]
  created_at      timestamptz default now(),
  updated_at      timestamptz default now()
);

-- Contacts enrolled in a sequence
create table sequence_enrollments (
  id              uuid primary key default gen_random_uuid(),
  client_id       uuid references clients(id),
  sequence_id     uuid references email_sequences(id),
  contact_id      uuid references crm_contacts(id),
  status          text default 'active',   -- active | paused | completed | unsubscribed | replied | bounced
  current_step    int default 0,
  enrolled_at     timestamptz default now(),
  completed_at    timestamptz,
  replied_at      timestamptz,
  session_id      uuid references agent_sessions(id),
  unique(sequence_id, contact_id)
);

-- Individual sequence email send events
create table sequence_events (
  id              uuid primary key default gen_random_uuid(),
  client_id       uuid references clients(id),
  enrollment_id   uuid references sequence_enrollments(id),
  step_number     int not null,
  event_type      text not null,   -- sent | opened | clicked | replied | bounced | unsubscribed
  event_at        timestamptz default now(),
  metadata        jsonb            -- click URL, bounce reason, etc.
);

-- ============================================================
-- INDEXES
-- ============================================================

create index idx_accounts_client on crm_accounts(client_id, account_status);
create index idx_accounts_icp on crm_accounts(client_id, icp_tier, icp_score desc);
create index idx_contacts_client on crm_contacts(client_id, contact_status);
create index idx_contacts_account on crm_contacts(account_id);
create index idx_contacts_mql_score on crm_contacts(client_id, mql_score desc);
create index idx_deals_client on crm_deals(client_id, stage);
create index idx_deals_account on crm_deals(account_id);
create index idx_activities_contact on crm_activities(contact_id, activity_at desc);
create index idx_activities_account on crm_activities(account_id, activity_at desc);
create index idx_activities_deal on crm_activities(deal_id);
create index idx_mql_events_client on mql_events(client_id, created_at desc);
create index idx_mql_events_contact on mql_events(contact_id);
create index idx_sessions_client on agent_sessions(client_id, created_at desc);
create index idx_approval_pending on approval_queue(client_id, status) where status = 'pending';
create index idx_signals_priority on lead_signals(client_id, priority_tier, detected_at desc);
create index idx_performance_client on content_performance(client_id, published_at desc);
create index idx_seq_enrollments_contact on sequence_enrollments(contact_id, status);
create index idx_stage_history_deal on deal_stage_history(deal_id, changed_at desc);

-- ============================================================
-- FUNCTIONS
-- ============================================================

-- Auto-update updated_at on any table that has it
create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger trg_clients_updated before update on clients
  for each row execute function update_updated_at();
create trigger trg_client_config_updated before update on client_config
  for each row execute function update_updated_at();
create trigger trg_accounts_updated before update on crm_accounts
  for each row execute function update_updated_at();
create trigger trg_contacts_updated before update on crm_contacts
  for each row execute function update_updated_at();
create trigger trg_deals_updated before update on crm_deals
  for each row execute function update_updated_at();
create trigger trg_sequences_updated before update on email_sequences
  for each row execute function update_updated_at();

-- Auto-log deal stage changes
create or replace function log_deal_stage_change()
returns trigger as $$
begin
  if old.stage is distinct from new.stage then
    insert into deal_stage_history(client_id, deal_id, from_stage, to_stage, changed_by,
      days_in_stage)
    values (
      new.client_id,
      new.id,
      old.stage,
      new.stage,
      'system',
      extract(day from now() - old.updated_at)::int
    );
  end if;
  return new;
end;
$$ language plpgsql;

create trigger trg_deal_stage_log after update on crm_deals
  for each row execute function log_deal_stage_change();

-- Auto-update last_activity_at on accounts and contacts
create or replace function update_last_activity()
returns trigger as $$
begin
  if new.account_id is not null then
    update crm_accounts set last_activity_at = now(), updated_at = now()
    where id = new.account_id;
  end if;
  if new.contact_id is not null then
    update crm_contacts set last_activity_at = now(), updated_at = now()
    where id = new.contact_id;
  end if;
  return new;
end;
$$ language plpgsql;

create trigger trg_activity_last_touch after insert on crm_activities
  for each row execute function update_last_activity();

-- ============================================================
-- SEED: ZIZO client
-- ============================================================

insert into clients (name, slug, tier, timezone)
values ('ZIZO', 'zizo', 'revenue_os', 'America/New_York');

-- Seed ZIZO cron schedule
insert into cron_schedule (client_id, job_name, cron_expression, plugin, prompt_template, requires_approval)
select id, 'monday_report',    '0 6 * * 1', 'marketing-revenue-intelligence', 'Generate weekly intelligence report for {client_name}', false   from clients where slug='zizo';
insert into cron_schedule (client_id, job_name, cron_expression, plugin, prompt_template, requires_approval)
select id, 'content_calendar', '0 8 * * 1', 'demand-gen-operator',            'Generate full week content calendar for {client_name}',  true    from clients where slug='zizo';
insert into cron_schedule (client_id, job_name, cron_expression, plugin, prompt_template, requires_approval)
select id, 'trigger_scan',     '0 7 * * *', 'linkedin-demand-gen',            'Scan for buying signals for {client_name} ICP',           true    from clients where slug='zizo';
insert into cron_schedule (client_id, job_name, cron_expression, plugin, prompt_template, requires_approval)
select id, 'outreach_draft',   '0 9 * * 2', 'linkedin-demand-gen',            'Draft outreach sequences for approved signals',            true    from clients where slug='zizo';
insert into cron_schedule (client_id, job_name, cron_expression, plugin, prompt_template, requires_approval)
select id, 'paid_performance', '0 16 * * 5','paid-acquisition-operator',      'Weekly paid acquisition review for {client_name}',        false   from clients where slug='zizo';
insert into cron_schedule (client_id, job_name, cron_expression, plugin, prompt_template, requires_approval)
select id, 'icp_refresh',      '0 7 1 * *', 'demand-gen-operator',            'Monthly ICP refresh for {client_name}',                   true    from clients where slug='zizo';
