# Aimersion AI Marketing Agent System

A complete AI marketing automation stack — runs in the Claude desktop app on your Mac and generates a full week of B2B marketing content automatically.

## What It Does

Six automated agents handle your entire marketing system:

| Stage | Agent | What It Generates |
|-------|-------|-------------------|
| 1 | Signal Scan | Tier 1 buying signals from ICP accounts |
| 2 | Content Calendar | 10 publish-ready pieces/week (LinkedIn × 5, blog, email, ads, video) |
| 3 | Outreach Sequences | Personalized LinkedIn messages for hot signals |
| 3 | Paid Review | Ad performance analysis + budget recommendations |
| 6 | Weekly Report | CMO intelligence report — what worked, what didn't |
| 1 | ICP Refresh | Monthly ICP update from win/loss data |

Everything flows into a web dashboard at your Vercel URL where you can read, approve, and manage content.

## Quick Start

### Prerequisites
- Mac with [Claude Code](https://claude.ai/code) installed
- [Node.js](https://nodejs.org) 18+
- [Supabase](https://supabase.com) account (free tier works)
- [Vercel](https://vercel.com) account (free tier works)
- Anthropic API key (for direct API calls)

### 1. Clone this repo
```bash
git clone https://github.com/aimersion/aimersion-marketplace
cd aimersion-marketplace
```

### 2. Set up environment variables
Add these to your `~/.zprofile` (loads for all shells including cron):
```bash
echo 'export ANTHROPIC_API_KEY="your_key_here"' >> ~/.zprofile
echo 'export SUPABASE_URL="https://your-project.supabase.co"' >> ~/.zprofile
echo 'export SUPABASE_SERVICE_KEY="your_service_role_key"' >> ~/.zprofile
source ~/.zprofile
```

### 3. Set up Supabase database
1. Create a new Supabase project
2. Go to SQL Editor and run `infrastructure/aimersion-client-schema.sql`
3. Run `infrastructure/zizo-kb-seed.sql` to load the example ZIZO client

### 4. Create your client context file
```bash
mkdir -p ~/aimersion-clients/your-client
cp infrastructure/zizo-context.json ~/aimersion-clients/your-client/context.json
# Edit context.json with your client's details
```

### 5. Run your first agent
```bash
node infrastructure/aimersion-orchestrator.js --client your-client --job content_calendar
```

Output saves to `~/aimersion-logs/` and writes to Supabase automatically.

### 6. Deploy the dashboard (optional)
1. Fork `github.com/aimersion/marketingpro`
2. Import to Vercel
3. Set env vars: `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy — dashboard is live at your Vercel URL

### 7. Set up cron (optional — for fully automated runs)
```bash
# Edit crontab
crontab -e

# Add these lines:
0 8 * * 1  source ~/.zprofile && node ~/Documents/aimersion/orchestrator.js --client your-client --job content_calendar
0 6 * * 1  source ~/.zprofile && node ~/Documents/aimersion/orchestrator.js --client your-client --job monday_report
0 7 * * *  source ~/.zprofile && node ~/Documents/aimersion/orchestrator.js --client your-client --job trigger_scan
```

## Client Context File

The `context.json` file tells every agent who the client is and what to write about:

```json
{
  "client_name": "ZIZO",
  "product": "Employee performance management + gamification platform",
  "icp_summary": "Directors of Operations at call centers and collections agencies",
  "primary_pain": "High agent attrition and disengagement",
  "messaging_pillars": [
    "From Burnout to Buy-In",
    "Replace the spreadsheet",
    "Motivation that scales",
    "Prove ROI fast"
  ],
  "weekly_theme": "The real cost of call center attrition",
  "proof_points": {
    "attrition": "30% reduction",
    "productivity": "80-96% increase",
    "roi_timeline": "Under 90 days"
  }
}
```

Customize this for any B2B company and the agents will generate content that speaks directly to their ICP.

## Content Calendar Output Format

Each run generates content using this exact structure (required for the parser):

```
## 1. LINKEDIN POSTS (Monday-Friday)

### MONDAY — [Hook title]
[Full post text]

### TUESDAY — [Hook title]
[Full post text]

...

## 2. TUESDAY BLOG POST

**Title:** [SEO title]
[Full blog post]

## 3. THURSDAY EMAIL TO LIST

**Subject line:** [subject]
[Full email]

## 4. LINKEDIN AD COPY — 2 VARIANTS
...

## 5. 60-SECOND VIDEO SCRIPT
...
```

The orchestrator parses this into individual pieces and writes each one to the `approval_queue` table in Supabase. They appear in the dashboard under Approvals.

## Architecture

```
Mac Studio (your machine)
├── orchestrator.js          ← runs on cron or manually
├── ~/aimersion-clients/
│   └── your-client/
│       └── context.json     ← client knowledge base
└── ~/aimersion-logs/        ← all output saved here

Anthropic API
└── claude-opus-4-5          ← generates all content

Supabase
├── clients                  ← client registry
├── client_config            ← ICP, messaging, brand voice
├── agent_sessions           ← every run logged here
├── approval_queue           ← content pending review
└── (35 total tables)        ← full CRM + marketing schema

Vercel (Next.js dashboard)
└── marketingpro-wine.vercel.app
    ├── /dashboard           ← overview + metrics
    ├── /approvals           ← review and approve content
    ├── /agents              ← run history
    ├── /setup               ← trigger runs manually
    └── (8 total pages)
```

## Available Jobs

| Job | Plugin | Schedule | Approval needed |
|-----|--------|----------|-----------------|
| `content_calendar` | demand-gen-operator | Monday 8am | Yes |
| `monday_report` | marketing-revenue-intelligence | Monday 6am | No (auto) |
| `trigger_scan` | linkedin-demand-gen | Daily 7am | Yes |
| `outreach_draft` | linkedin-demand-gen | Tuesday 9am | Yes |
| `paid_performance` | paid-acquisition-operator | Friday 4pm | No (auto) |
| `icp_refresh` | demand-gen-operator | 1st of month | Yes |

## Using With Claude App (No Code Required)

You can run the demand-gen-operator plugin directly in the Claude app without any infrastructure:

1. In Claude, reference the plugin: `Use the demand-gen-operator skill`
2. Paste your client context
3. Ask: `Generate a full content calendar for the week of [date]`
4. Copy the output and paste into your content management system

The plugin skills are in `plugins/demand-gen-operator/skills/`.

## Seed Approvals Script

If you have existing log files and want to populate the approval queue:

```bash
source ~/.zprofile
curl -s https://raw.githubusercontent.com/aimersion/aimersion-marketplace/main/infrastructure/seed_approvals.js \
  -o /tmp/seed_approvals.js && node /tmp/seed_approvals.js
```

## License

MIT — use freely, customize for your clients.

Built by [Aimersion AI](https://aimersionagent.com) — DFW, Texas.
