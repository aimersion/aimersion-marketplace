#!/bin/bash
# ============================================================
# AIMERSION ZIZO SETUP
# Run this once to configure the ZIZO client automation
# ============================================================

set -e

AIMERSION_DIR="$HOME/aimersion-clients/zizo"
LOG_DIR="$HOME/aimersion-logs"
ORCHESTRATOR="$HOME/Documents/aimersion/orchestrator.js"

echo "Setting up ZIZO client automation..."

# Create directories
mkdir -p "$AIMERSION_DIR"
mkdir -p "$LOG_DIR"

# Write ZIZO context config
cat > "$AIMERSION_DIR/context.json" << 'CONTEXT'
{
  "client_name": "ZIZO",
  "icp_summary": "B2B tech and services companies, 200-2000 employees, targeting VP/Director of Sales, VP/Director of Marketing, and CROs who are struggling with pipeline predictability, revenue team efficiency, and scaling sales performance",
  "messaging_pillars": [
    "Eliminate the guesswork — know exactly where revenue will come from",
    "Scale your team's performance without scaling headcount",
    "Turn your data into decisions before your competitors do"
  ],
  "primary_pain": "Revenue team efficiency and pipeline predictability",
  "competitors": ["Gong", "Clari", "Salesloft", "Outreach"],
  "slack_webhook": "PASTE_ZIZO_SLACK_WEBHOOK_HERE",
  "timezone": "America/New_York",
  "paid_budget": "$20,000/month",
  "tier_a_accounts": null,
  "recent_wins": null,
  "recent_losses": null
}
CONTEXT

echo "✅ ZIZO context config created: $AIMERSION_DIR/context.json"
echo ""
echo "NEXT STEP: Edit $AIMERSION_DIR/context.json and paste in the real Slack webhook"
echo ""

# Print crontab entries to add
echo "============================================================"
echo "ADD THESE TO CRONTAB (run: crontab -e)"
echo "============================================================"
echo ""
echo "# Aimersion — ZIZO Client Automation"
echo ""
echo "# Monday 6am ET — Weekly intelligence report (auto-posts to Slack)"
echo "0 6 * * 1  /opt/homebrew/bin/node $ORCHESTRATOR --client zizo --job monday_report >> $LOG_DIR/cron.log 2>&1"
echo ""
echo "# Monday 8am ET — Generate this week's content calendar (goes to approval queue)"
echo "0 8 * * 1  /opt/homebrew/bin/node $ORCHESTRATOR --client zizo --job content_calendar >> $LOG_DIR/cron.log 2>&1"
echo ""
echo "# Daily 7am ET — Scan for buying signals and Tier 1 opportunities"
echo "0 7 * * *  /opt/homebrew/bin/node $ORCHESTRATOR --client zizo --job trigger_scan >> $LOG_DIR/cron.log 2>&1"
echo ""
echo "# Tuesday 9am ET — Draft outreach for approved signals"
echo "0 9 * * 2  /opt/homebrew/bin/node $ORCHESTRATOR --client zizo --job outreach_draft >> $LOG_DIR/cron.log 2>&1"
echo ""
echo "# Friday 4pm ET — Paid acquisition weekly review"
echo "0 16 * * 5  /opt/homebrew/bin/node $ORCHESTRATOR --client zizo --job paid_performance >> $LOG_DIR/cron.log 2>&1"
echo ""
echo "# 1st of month, 7am ET — Monthly ICP refresh"
echo "0 7 1 * *  /opt/homebrew/bin/node $ORCHESTRATOR --client zizo --job icp_refresh >> $LOG_DIR/cron.log 2>&1"
echo ""
echo "============================================================"
echo "TEST A JOB MANUALLY:"
echo "  node $ORCHESTRATOR --client zizo --job monday_report"
echo "  node $ORCHESTRATOR --list-jobs"
echo "============================================================"
