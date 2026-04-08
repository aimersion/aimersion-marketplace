---
description: Show your job search pipeline, follow-up queue, and weekly metrics
argument-hint: [optional: update, add, or specific company to update]
allowed-tools: Read, Write
---

Display and manage the current job search pipeline.

Parse any updates from `$ARGUMENTS`:
- "add [Company] [Role] [Stage]" — log a new application
- "update [Company] to [Stage]" — move an existing application
- "rejected by [Company]" — mark as closed/lost
- "offer from [Company] $[X]k" — log an offer
- No arguments: show full pipeline snapshot

Use the pipeline-tracker skill to:

1. **Show the dashboard** — all active applications by stage
2. **Flag urgent items** — anything needing action today
3. **Show follow-up queue** — emails to send, applications to check on
4. **Show weekly metrics** — application volume, response rates, conversion
5. **Pipeline health check** — identify any concerning patterns (too thin, stuck at a stage, etc.)
6. **Next priorities** — recommended actions for today

Output the full pipeline-tracker dashboard format.
