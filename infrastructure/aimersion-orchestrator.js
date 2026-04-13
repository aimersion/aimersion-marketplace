#!/usr/bin/env node
/**
 * AIMERSION AGENT ORCHESTRATOR
 * Runs scheduled Claude agent sessions for clients
 * 
 * Usage:
 *   node orchestrator.js --client zizo --job monday_report
 *   node orchestrator.js --client zizo --job content_calendar
 *   node orchestrator.js --list-jobs
 * 
 * Add to crontab:
 *   0 6 * * 1  node /path/to/orchestrator.js --client zizo --job monday_report
 *   0 8 * * 1  node /path/to/orchestrator.js --client zizo --job content_calendar
 *   0 7 * * *  node /path/to/orchestrator.js --client zizo --job trigger_scan
 *   0 9 * * 2  node /path/to/orchestrator.js --client zizo --job outreach_draft
 */

const { spawnSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// ============================================================
// CONFIG
// ============================================================

const CLAUDE_BIN = '/opt/homebrew/bin/claude';
const MARKETPLACE_DIR = `${process.env.HOME}/aimersion-marketplace/plugins`;
const LOG_DIR = `${process.env.HOME}/aimersion-logs`;
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;

// ============================================================
// JOB DEFINITIONS
// Each job knows which plugin to load and what prompt to run
// ============================================================

const JOB_DEFINITIONS = {

  monday_report: {
    plugin: 'marketing-revenue-intelligence',
    description: 'Weekly CMO intelligence report — what worked, what did not, what to focus on',
    prompt: (ctx) => `
You are running the weekly marketing intelligence report for ${ctx.client_name}.

ICP: ${ctx.icp_summary}
Week ending: ${ctx.week_ending}

Using the weekly-intelligence-report skill, generate a complete weekly marketing report covering:
1. MQL performance vs goal
2. Channel breakdown (paid, organic, LinkedIn, email)
3. Top 3 wins, top 3 flags
4. Next week priorities

Then format the report as a Slack message with clear sections.
Post it to the #marketing-ops Slack channel using the Slack webhook.
Flag any accounts with Tier 1 buying signals for immediate sales follow-up.

Be specific. Use real numbers if available. If data is missing, say so explicitly.
    `.trim(),
    requires_approval: false,   // report posts automatically
    output_destination: 'slack',
  },

  content_calendar: {
    plugin: 'demand-gen-operator',
    description: 'Generate full week of content — 15+ pieces across all channels',
    prompt: (ctx) => `
You are building the content calendar for ${ctx.client_name} for the week of ${ctx.week_starting}.

COMPANY: ${ctx.product}
ICP: ${ctx.icp_summary}
MESSAGING PILLARS: ${JSON.stringify(ctx.messaging_pillars)}
THIS WEEK'S THEME: ${ctx.weekly_theme || ctx.primary_pain}
BRAND VOICE: Direct, confident, pain-led. Lead with the cost of inaction.

CRITICAL INSTRUCTIONS:
- Output ONLY the content pieces below. No summary tables. No preambles. No "I'll now write..."
- Use EXACTLY these section headers so the parser can find each piece
- Write every piece in full — complete and ready to publish

## 1. LINKEDIN POSTS (Monday–Friday)

### MONDAY, ${ctx.week_starting} — [Hook title]
[Full post — 150-300 words, ready to copy-paste to LinkedIn]

### TUESDAY — [Hook title]  
[Full post]

### WEDNESDAY — [Hook title]
[Full post]

### THURSDAY — [Hook title]
[Full post — MOFU, reference a specific outcome]

### FRIDAY — [Hook title]
[Full post — BOFU, reference the guarantee or ROI]

## 2. TUESDAY BLOG POST

**Title:** [SEO-optimized title targeting: call center attrition, employee gamification, or contact center performance]
**Meta description:** [155 chars]

[Full 1,500+ word blog post — complete, publish-ready]

## 3. THURSDAY EMAIL TO LIST

**Subject line:** [Subject]
**Preview text:** [Preview]

[Full email body — complete, ready to send]

## 4. LINKEDIN AD COPY — 2 VARIANTS

### Variant A — Pain-Led
**Intro text:** [1 line hook]
**Body:** [3-4 sentences]
**Headline:** [5 words max]
**CTA:** Learn More

### Variant B — Outcome-Led
**Intro text:** [1 line hook]
**Body:** [3-4 sentences]
**Headline:** [5 words max]
**CTA:** Book a Demo

## 5. 60-SECOND VIDEO SCRIPT

**Title:** "[Script title]"
**Format:** Talking head to camera
**Audience:** Directors/VPs of Operations at call centers

[0:00–0:10] [Opening line]
[0:10–0:25] [Problem]
[0:25–0:45] [Solution]
[0:45–0:55] [Proof]
[0:55–1:00] [CTA]

Output all 10 pieces now. Start immediately with ## 1. LINKEDIN POSTS
    `.trim(),
    requires_approval: true,
    output_destination: 'approval_queue',
  },

  trigger_scan: {
    plugin: 'linkedin-demand-gen',
    description: 'Scan for buying signals across ICP accounts — flag Tier 1 for immediate outreach',
    prompt: (ctx) => `
You are running the daily buying signal scan for ${ctx.client_name}.

ICP accounts to monitor: ${ctx.tier_a_accounts || 'Use ICP criteria: ' + ctx.icp_summary}

Using the sales-trigger-monitor skill and trigger-report command:

1. Identify any Tier 1 signals (leadership changes, funding, active evaluation signals) 
   for accounts matching our ICP in the last 24 hours
2. Identify any Tier 2 signals (content engagement, new hires in target function)
3. For each Tier 1 account: draft a personalized outreach message using the outreach-sequencer skill

Output:
- Tier 1 accounts: name, signal, recommended action, draft outreach message
- Tier 2 accounts: name, signal, recommended nurture action
- Count of total signals identified

Flag all Tier 1 signals to Slack #sales-signals channel immediately.
    `.trim(),
    requires_approval: true,    // outreach needs approval before sending
    output_destination: 'approval_queue',
  },

  outreach_draft: {
    plugin: 'linkedin-demand-gen',
    description: 'Draft personalized LinkedIn outreach sequences for approved Tier 1 accounts',
    prompt: (ctx) => `
You are drafting LinkedIn outreach sequences for ${ctx.client_name}.

Accounts queued for outreach: ${ctx.pending_outreach_accounts || 'Check approval queue for approved trigger_scan signals'}

Using the outreach-sequencer skill and draft-outreach command:

For each account:
1. Write a personalized connection request (under 300 chars, no pitch)
2. Write Message 2 (post-connection, references their specific signal)
3. Write Message 3 (follow-up if no reply after 5 days)

Personalize each sequence to the specific trigger signal identified.
Do not use generic templates.

Output: Complete 3-message sequence per account, clearly labeled.
    `.trim(),
    requires_approval: true,
    output_destination: 'approval_queue',
  },

  paid_performance: {
    plugin: 'paid-acquisition-operator',
    description: 'Weekly paid acquisition review — CPL analysis and budget reallocation',
    prompt: (ctx) => `
You are running the weekly paid acquisition review for ${ctx.client_name}.

Week: ${ctx.week_ending}
Budget: ${ctx.paid_budget || 'Review available campaign data'}

Using the performance-analyzer skill and performance-report command:

1. Analyze CPL by campaign vs benchmark
2. Identify top performers (scale) and underperformers (pause/kill)
3. Build budget reallocation recommendation
4. List next week's top 3 paid priorities

Output a crisp performance report in the weekly-report format.
Flag any campaign that needs immediate action (pausing a burning campaign, etc.).
    `.trim(),
    requires_approval: false,
    output_destination: 'slack',
  },

  icp_refresh: {
    plugin: 'demand-gen-operator',
    description: 'Monthly ICP refinement — update segments from win/loss data',
    prompt: (ctx) => `
You are doing the monthly ICP refresh for ${ctx.client_name}.

Current ICP: ${ctx.icp_summary}
Recent wins: ${ctx.recent_wins || 'Not provided — use available context'}
Recent losses: ${ctx.recent_losses || 'Not provided — use available context'}

Using the icp-intelligence skill:

1. Analyze the current ICP definition for gaps
2. Identify any patterns from win/loss context
3. Update the pain-point database with any new signals
4. Propose updated messaging pillars if warranted
5. Flag any new account scoring adjustments

Output: Updated ICP card + recommended messaging updates.
This output updates the client config in the database.
    `.trim(),
    requires_approval: true,
    output_destination: 'approval_queue',
  },
};

// ============================================================
// CLIENT CONTEXT LOADER
// Loads client config from Supabase to hydrate prompts
// ============================================================

async function loadClientContext(clientSlug) {
  // In production: fetch from Supabase
  // For now: load from local config files
  const configPath = path.join(
    process.env.HOME,
    'aimersion-clients',
    clientSlug,
    'context.json'
  );

  if (fs.existsSync(configPath)) {
    return JSON.parse(fs.readFileSync(configPath, 'utf8'));
  }

  // Fallback defaults
  return {
    client_name: clientSlug.toUpperCase(),
    icp_summary: 'B2B SaaS companies, 200-1000 employees, targeting VP Sales and VP Marketing',
    messaging_pillars: 'Revenue efficiency, pipeline predictability, team performance',
    primary_pain: 'Revenue team efficiency and pipeline predictability',
    week_ending: new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    week_starting: new Date(Date.now() + 86400000).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    paid_budget: '$15,000/month',
    tier_a_accounts: null,
    pending_outreach_accounts: null,
    recent_wins: null,
    recent_losses: null,
  };
}

// ============================================================
// SESSION LOGGER
// Writes to local log file + Supabase (when connected)
// ============================================================

function logSession(clientSlug, jobName, status, output, error = null) {
  if (!fs.existsSync(LOG_DIR)) {
    fs.mkdirSync(LOG_DIR, { recursive: true });
  }

  const logFile = path.join(LOG_DIR, `${clientSlug}-${jobName}.log`);
  const entry = {
    timestamp: new Date().toISOString(),
    client: clientSlug,
    job: jobName,
    status,
    output_length: output ? output.length : 0,
    error: error || null,
  };

  fs.appendFileSync(logFile, JSON.stringify(entry) + '\n');

  if (status === 'completed') {
    // Save full output to dated file
    const outputFile = path.join(
      LOG_DIR,
      `${clientSlug}-${jobName}-${new Date().toISOString().split('T')[0]}.txt`
    );
    fs.writeFileSync(outputFile, output);
    console.log(`Output saved: ${outputFile}`);
  }
}

// ============================================================
// SLACK NOTIFIER
// Posts output to client Slack channel
// ============================================================

async function postToSlack(webhookUrl, text, jobName) {
  if (!webhookUrl) {
    console.log('No Slack webhook configured — skipping Slack post');
    return;
  }

  const payload = {
    blocks: [
      {
        type: 'header',
        text: {
          type: 'plain_text',
          text: `🤖 Aimersion: ${jobName.replace(/_/g, ' ').toUpperCase()}`,
        }
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: text.substring(0, 3000), // Slack block limit
        }
      },
      {
        type: 'context',
        elements: [{
          type: 'mrkdwn',
          text: `Generated ${new Date().toLocaleDateString()} by Aimersion AI`,
        }]
      }
    ]
  };

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    console.log('Posted to Slack');
  } else {
    console.error('Slack post failed:', response.status);
  }
}


// ============================================================
// CONTENT CALENDAR PARSER
// Parses Claude output into individual pieces for approval queue
// ============================================================

function parseContentCalendar(text) {
  const pieces = [];
  
  // Normalize line endings
  text = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  
  // Split into chunks on ## boundaries
  const chunks = text.split(/\n(?=## [0-9]+\.)/);
  
  for (const chunk of chunks) {
    const lines = chunk.split('\n');
    const header = lines[0].trim();
    
    // ## 1. LinkedIn Posts — split on ### day headers
    if (/^## 1\./i.test(header) || /LINKEDIN POSTS/i.test(header)) {
      const dayParts = chunk.split(/\n(?=### )/);
      for (const part of dayParts) {
        const partLines = part.split('\n');
        const h = partLines[0].trim();
        if (!h.startsWith('###')) continue;
        const title = h.replace(/^###\s*/, '').trim();
        if (!/MONDAY|TUESDAY|WEDNESDAY|THURSDAY|FRIDAY/i.test(title)) continue;
        const body = partLines.slice(1)
          .filter(l => !l.match(/^\*\*Funnel stage/i) && !l.match(/^\*\*Pillar/i) && !l.match(/^---+$/))
          .join('\n').trim();
        if (body.length < 80) continue;
        const day = (title.match(/MONDAY|TUESDAY|WEDNESDAY|THURSDAY|FRIDAY/i) || [''])[0].toUpperCase();
        const funnel = {FRIDAY:'bofu', THURSDAY:'mofu'}[day] || 'tofu';
        pieces.push({ type: 'linkedin_post', title, body: body.substring(0, 4000), day, funnel_stage: funnel, pillar: '' });
      }
    }
    // ## 2. Blog
    else if (/^## 2\./i.test(header) || /BLOG POST/i.test(header)) {
      const tm = chunk.match(/\*\*Title:\*\*\s*([^\n]+)/i);
      pieces.push({ type: 'blog_post', title: tm ? tm[1].trim() : 'Blog post', body: chunk.substring(0, 8000).trim(), day: 'Tuesday', funnel_stage: 'mofu', pillar: '' });
    }
    // ## 3. Email
    else if (/^## 3\./i.test(header) || /EMAIL/i.test(header)) {
      const sm = chunk.match(/\*\*Subject line:\*\*\s*([^\n]+)/i);
      pieces.push({ type: 'email', title: sm ? 'Email: ' + sm[1].trim() : 'Thursday email', body: chunk.substring(0, 5000).trim(), day: 'Thursday', funnel_stage: 'mofu', pillar: '' });
    }
    // ## 4. Ad copy
    else if (/^## 4\./i.test(header) || /AD COPY/i.test(header)) {
      pieces.push({ type: 'ad_copy', title: 'LinkedIn Ad Copy — 2 variants', body: chunk.substring(0, 4000).trim(), day: 'Ongoing', funnel_stage: 'mofu', pillar: '' });
    }
    // ## 5. Video
    else if (/^## 5\./i.test(header) || /VIDEO/i.test(header)) {
      const tm = chunk.match(/\*\*Title:\*\*\s*["\'"]?([^\"\n]+)/i);
      pieces.push({ type: 'video_script', title: tm ? 'Video: ' + tm[1].trim() : '60-second video script', body: chunk.substring(0, 4000).trim(), day: 'Flexible', funnel_stage: 'tofu', pillar: '' });
    }
  }

  // Fallback: if no ## sections found, try ### day headers directly
  if (pieces.length === 0) {
    const dayParts = text.split(/\n(?=### (?:MONDAY|TUESDAY|WEDNESDAY|THURSDAY|FRIDAY))/i);
    for (const part of dayParts) {
      const lines = part.split('\n');
      const h = lines[0].trim();
      if (!h.startsWith('###')) continue;
      const title = h.replace(/^###\s*/, '').trim();
      const body = lines.slice(1).filter(l => !l.match(/^\*\*Funnel|^\*\*Pillar|^---/i)).join('\n').trim();
      if (body.length < 80) continue;
      const day = (title.match(/MONDAY|TUESDAY|WEDNESDAY|THURSDAY|FRIDAY/i)||[''])[0].toUpperCase();
      pieces.push({ type: 'linkedin_post', title, body: body.substring(0, 4000), day, funnel_stage: 'tofu', pillar: '' });
    }
  }

  return pieces;
}


async function runJob(clientSlug, jobName) {
  const job = JOB_DEFINITIONS[jobName];
  if (!job) {
    console.error(`Unknown job: ${jobName}`);
    console.log('Available jobs:', Object.keys(JOB_DEFINITIONS).join(', '));
    process.exit(1);
  }

  console.log(`\n${'='.repeat(60)}`);
  console.log(`AIMERSION AGENT: ${clientSlug.toUpperCase()} / ${jobName}`);
  console.log(`Plugin: ${job.plugin}`);
  console.log(`Started: ${new Date().toISOString()}`);
  console.log('='.repeat(60));

  // Load client context
  const ctx = await loadClientContext(clientSlug);
  const prompt = job.prompt(ctx);
  const pluginDir = path.join(MARKETPLACE_DIR, job.plugin);

  if (!fs.existsSync(pluginDir)) {
    console.error(`Plugin not found: ${pluginDir}`);
    console.error('Run: cd ~/aimersion-marketplace && git pull');
    process.exit(1);
  }

  // Create working directory for this client session
  const workDir = `/tmp/aimersion-${clientSlug}-${jobName}`;
  if (!fs.existsSync(workDir)) fs.mkdirSync(workDir, { recursive: true });

  logSession(clientSlug, jobName, 'started', null);

  try {
    console.log('\nRunning Claude agent...\n');

    // Run Claude Code — pass prompt via stdin to avoid all shell escaping issues
    const proc = spawnSync(
      CLAUDE_BIN,
      ['--plugin-dir', pluginDir, '--print', '-'],
      {
        cwd: workDir,
        input: prompt,
        timeout: 600000,
        maxBuffer: 10 * 1024 * 1024,
        encoding: 'utf8',
        env: { ...process.env, TERM: 'dumb', NO_COLOR: '1' },
      }
    );

    if (proc.error) throw proc.error;
    if (proc.status !== 0) throw new Error(proc.stderr || `Claude exited with code ${proc.status}`);

    const result = proc.stdout;

    console.log('\nAgent completed. Output preview:');
    console.log(result.substring(0, 500) + '...\n');

    logSession(clientSlug, jobName, 'completed', result);

    // Write session to Supabase if configured
    if (SUPABASE_URL && SUPABASE_SERVICE_KEY) {
      try {
        const { createClient } = require('@supabase/supabase-js');
        const sb = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);
        const { data: clientRow } = await sb.from('clients').select('id').eq('slug', clientSlug).single();
        if (clientRow) {
          await sb.from('agent_sessions').insert({
            client_id: clientRow.id,
            session_type: jobName,
            trigger_type: 'cron',
            status: 'completed',
            plugin_used: job.plugin,
            output_raw: result.substring(0, 10000),
            started_at: new Date().toISOString(),
            completed_at: new Date().toISOString(),
          });
          console.log('Session logged to Supabase');
          // If requires approval, write to approval_queue too
          if (job.requires_approval) {
            // Parse content_calendar into individual pieces
            if (jobName === 'content_calendar') {
              const pieces = parseContentCalendar(result);
              for (const piece of pieces) {
                await sb.from('approval_queue').insert({
                  client_id: clientRow.id,
                  content_type: piece.type,
                  content_data: { title: piece.title, body: piece.body, day: piece.day, pillar: piece.pillar, funnel_stage: piece.funnel_stage },
                  status: 'pending',
                });
              }
              console.log(`Added ${pieces.length} content pieces to approval_queue in Supabase`);
            } else {
              await sb.from('approval_queue').insert({
                client_id: clientRow.id,
                content_type: jobName,
                content_data: { title: jobName.replace(/_/g,' ') + ' — ' + new Date().toLocaleDateString(), body: result.substring(0, 5000) },
                status: 'pending',
              });
              console.log('Added to approval_queue in Supabase');
            }
          }
        }
      } catch(e) {
        console.log('Supabase write skipped:', e.message);
      }
    }

    // Route output based on destination
    if (job.output_destination === 'slack') {
      await postToSlack(ctx.slack_webhook, result, jobName);
    } else if (job.output_destination === 'approval_queue') {
      // Save to approval queue file for human review
      const queueFile = path.join(LOG_DIR, `${clientSlug}-approval-queue.jsonl`);
      const queueEntry = {
        id: Date.now().toString(),
        client: clientSlug,
        job: jobName,
        content_type: jobName,
        content: result,
        status: 'pending',
        created_at: new Date().toISOString(),
      };
      fs.appendFileSync(queueFile, JSON.stringify(queueEntry) + '\n');
      console.log(`Added to approval queue: ${queueFile}`);

      // Notify via Slack that review is needed
      await postToSlack(
        ctx.slack_webhook,
        `📋 *${jobName.replace(/_/g, ' ')} is ready for review*\n\nContent has been queued and needs your approval before publishing.\n\nReview at: https://aimersion.ai/clients/${clientSlug}/approvals`,
        'Approval Needed'
      );
    }

    console.log(`\n✅ Job completed: ${clientSlug}/${jobName}`);
    console.log(`Duration: ${Math.round((Date.now() - new Date(ctx.started_at || Date.now()).getTime()) / 1000)}s`);

  } catch (error) {
    logSession(clientSlug, jobName, 'failed', null, error.message);
    console.error(`\n❌ Job failed: ${error.message}`);

    // Alert via Slack on failure
    await postToSlack(
      ctx.slack_webhook,
      `⚠️ Agent job failed: *${jobName}*\n\nError: ${error.message}\n\nManual review required.`,
      'Job Failed'
    );

    process.exit(1);
  }
}

// ============================================================
// CLI INTERFACE
// ============================================================

const args = process.argv.slice(2);

if (args.includes('--list-jobs')) {
  console.log('\nAvailable jobs:');
  Object.entries(JOB_DEFINITIONS).forEach(([name, def]) => {
    console.log(`  ${name.padEnd(20)} ${def.description}`);
  });
  process.exit(0);
}

const clientIdx = args.indexOf('--client');
const jobIdx = args.indexOf('--job');

if (clientIdx === -1 || jobIdx === -1) {
  console.log('Usage: node orchestrator.js --client <slug> --job <job_name>');
  console.log('       node orchestrator.js --list-jobs');
  process.exit(1);
}

const clientSlug = args[clientIdx + 1];
const jobName = args[jobIdx + 1];

runJob(clientSlug, jobName).catch(console.error);
