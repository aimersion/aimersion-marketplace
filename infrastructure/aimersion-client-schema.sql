-- ============================================================
-- AIMERSION CLIENT DATA LAYER
-- Supabase schema for multi-client AI agent orchestration
-- ============================================================

-- Enable UUID extension
create extension if not exists "pgcrypto";

-- ============================================================
-- CLIENTS
-- One row per client (ZIZO, Simplified Pools, etc.)
-- ============================================================
create table clients (
  id            uuid primary key default gen_random_uuid(),
  name          text not null,                    -- "ZIZO"
  slug          text not null unique,             -- "zizo" (used in cron job paths)
  tier          text not null default 'growth',   -- starter | growth | revenue_os | enterprise
  status        text not null default 'active',   -- active | paused | churned
  slack_webhook text,                             -- incoming webhook for reports
  timezone      text default 'America/Chicago',
  created_at    timestamptz default now(),
  updated_at    timestamptz default now()
);

-- ============================================================
-- CLIENT TOKENS
-- One row per client per MCP service
-- Your MCP server reads this to route API calls to right account
-- ============================================================
create table client_tokens (
  id            uuid primary key default gen_random_uuid(),
  client_id     uuid references clients(id) on delete cascade,
  service       text not null,   -- linkedin | google | outlook | facebook | x | hubspot | slack
  token_type    text not null,   -- access_token | refresh_token | api_key | webhook_url
  token_value   text not null,   -- encrypted in prod (use Supabase Vault)
  expires_at    timestamptz,     -- null = never expires
  scope         text,            -- oauth scopes granted
  active        boolean default true,
  created_at    timestamptz default now(),
  unique(client_id, service, token_type)
);

-- ============================================================
-- CLIENT CONFIG
-- Per-client ICP, messaging pillars, brand voice, etc.
-- Claude reads this at the start of every agent session
-- ============================================================
create table client_config (
  id            uuid primary key default gen_random_uuid(),
  client_id     uuid references clients(id) on delete cascade,
  config_type   text not null,   -- icp | messaging | brand_voice | content_calendar | competitors
  config_data   jsonb not null,  -- flexible — varies by type
  version       int default 1,
  active        boolean default true,
  created_at    timestamptz default now(),
  updated_at    timestamptz default now(),
  unique(client_id, config_type)
);

-- Example config_data for ICP:
-- {
--   "segments": [
--     { "name": "VP Sales 200-1000 SaaS", "titles": ["VP Sales", "Director of Sales"], 
--       "industries": ["Computer Software"], "size": "201-1000",
--       "pains": ["ramp time", "pipeline predictability", "rep attrition"] }
--   ],
--   "messaging_pillars": ["reduce ramp 40%", "predictable pipeline", "AE efficiency"],
--   "exclusions": ["staffing firms", "under 50 employees"]
-- }

-- ============================================================
-- AGENT SESSIONS
-- Every cron job / manual run creates a session
-- This is the heartbeat of the system
-- ============================================================
create table agent_sessions (
  id              uuid primary key default gen_random_uuid(),
  client_id       uuid references clients(id),
  session_type    text not null,     -- weekly_report | content_calendar | outreach_draft | trigger_scan | landing_audit
  trigger_type    text not null,     -- cron | manual | webhook | approval
  status          text default 'queued',  -- queued | running | awaiting_approval | approved | published | failed
  plugin_used     text,              -- which plugin ran: demand-gen-operator, linkedin-demand-gen, etc.
  prompt_sent     text,              -- the actual prompt sent to Claude
  output_raw      text,              -- Claude's full response
  output_parsed   jsonb,             -- structured version of output
  error_message   text,
  tokens_used     int,
  cost_usd        numeric(8,4),
  started_at      timestamptz,
  completed_at    timestamptz,
  created_at      timestamptz default now()
);

-- ============================================================
-- APPROVAL QUEUE
-- Human-in-the-loop for content before it publishes
-- ============================================================
create table approval_queue (
  id              uuid primary key default gen_random_uuid(),
  client_id       uuid references clients(id),
  session_id      uuid references agent_sessions(id),
  content_type    text not null,   -- linkedin_post | email | outreach_message | report
  content_data    jsonb not null,  -- the actual content + metadata
  status          text default 'pending',  -- pending | approved | rejected | edited
  reviewer_notes  text,
  approved_at     timestamptz,
  approved_by     text,            -- email of whoever approved
  publish_at      timestamptz,     -- scheduled publish time
  published_at    timestamptz,
  created_at      timestamptz default now()
);

-- Example content_data for linkedin_post:
-- {
--   "text": "Most B2B sales teams are generating pipeline that will never close...",
--   "platform": "linkedin",
--   "account": "company_page",
--   "media_url": null,
--   "scheduled_for": "2026-04-14T14:00:00Z"
-- }

-- ============================================================
-- CONTENT PERFORMANCE
-- Track published content — feed back into future sessions
-- ============================================================
create table content_performance (
  id              uuid primary key default gen_random_uuid(),
  client_id       uuid references clients(id),
  approval_id     uuid references approval_queue(id),
  platform        text not null,    -- linkedin | email | google_ads | x
  content_type    text not null,    -- post | email | ad | article
  published_at    timestamptz,
  metrics         jsonb,            -- impressions, clicks, engagements, replies, leads
  mql_count       int default 0,    -- MQLs attributable to this content
  pipeline_value  numeric(12,2),    -- $ pipeline influenced
  synced_at       timestamptz,      -- when metrics were last pulled
  created_at      timestamptz default now()
);

-- ============================================================
-- LEAD SIGNALS
-- Buying signals detected for ICP accounts
-- linkedin-demand-gen trigger monitoring feeds this
-- ============================================================
create table lead_signals (
  id              uuid primary key default gen_random_uuid(),
  client_id       uuid references clients(id),
  account_name    text not null,
  contact_name    text,
  contact_title   text,
  signal_type     text not null,    -- job_change | funding | hiring | content_engagement | pain_stated
  signal_detail   text,             -- "Raised Series B $25M" / "Posted about ramp time challenges"
  signal_url      text,
  priority_tier   int,              -- 1=act today, 2=this week, 3=nurture
  action_taken    text,             -- outreach_sent | connection_request | noted
  session_id      uuid references agent_sessions(id),
  detected_at     timestamptz default now(),
  actioned_at     timestamptz
);

-- ============================================================
-- CRON SCHEDULE
-- What runs when for each client
-- ============================================================
create table cron_schedule (
  id              uuid primary key default gen_random_uuid(),
  client_id       uuid references clients(id),
  job_name        text not null,           -- monday_report | content_calendar | trigger_scan | outreach_draft
  cron_expression text not null,           -- "0 6 * * 1" (Monday 6am)
  plugin          text not null,           -- which plugin to invoke
  prompt_template text not null,           -- prompt with {client_name}, {icp}, {week} placeholders
  requires_approval boolean default true,  -- does output need human sign-off before publishing?
  active          boolean default true,
  last_run_at     timestamptz,
  next_run_at     timestamptz,
  created_at      timestamptz default now(),
  unique(client_id, job_name)
);

-- ============================================================
-- INDEXES for performance
-- ============================================================
create index idx_sessions_client on agent_sessions(client_id, created_at desc);
create index idx_sessions_status on agent_sessions(status);
create index idx_approval_pending on approval_queue(client_id, status) where status = 'pending';
create index idx_signals_priority on lead_signals(client_id, priority_tier, detected_at desc);
create index idx_performance_client on content_performance(client_id, published_at desc);

-- ============================================================
-- ROW LEVEL SECURITY
-- Each client can only see their own data
-- ============================================================
alter table clients enable row level security;
alter table client_tokens enable row level security;
alter table client_config enable row level security;
alter table agent_sessions enable row level security;
alter table approval_queue enable row level security;
alter table content_performance enable row level security;
alter table lead_signals enable row level security;
alter table cron_schedule enable row level security;

-- ============================================================
-- SEED: ZIZO client example
-- ============================================================
-- insert into clients (name, slug, tier, slack_webhook, timezone)
-- values ('ZIZO', 'zizo', 'revenue_os', 'https://hooks.slack.com/...', 'America/New_York');
