---
description: Run your daily job search sprint — find, prep, apply, and follow up in one session
argument-hint: [optional: focus area or target applications today]
allowed-tools: WebSearch, Read, Write
---

Run a focused daily job search sprint. This command orchestrates your entire job search day.

Parse any focus hints from `$ARGUMENTS` (e.g., "focus on SaaS companies today" or "I have 2 hours").

## Daily Sprint Sequence

### Morning: Pipeline Review (10 minutes)
Use pipeline-tracker to:
- Show current pipeline snapshot
- Flag any applications needing follow-up today
- List scheduled interviews this week
- Identify applications that have gone cold (14+ days, no response)

### Midday: Find & Prep (60-90 minutes)
Use job-finder to:
- Run a fresh search for new postings (LinkedIn, Indeed, Greenhouse)
- Surface 3-5 new A-list opportunities posted in last 48 hours
- Show one role with full application prep (resume + cover letter) as the priority application

### Afternoon: Apply & Outreach (30-45 minutes)
For today's priority role:
- Show the complete application package (resume, cover letter, recruiter message)
- Generate outreach messages for 3-5 recruiters at target companies
- Show any follow-up emails due today

### End of Day: Log & Plan
- Update pipeline with today's activity
- Set tomorrow's priorities
- Show updated pipeline snapshot

## Output Format
```
DAILY SPRINT — [Date]

PIPELINE STATUS:
  Active: [X] | Interviews this week: [X] | Follow-ups due: [X]

FOLLOW-UPS DUE TODAY:
  [List any applications needing action]

TODAY'S PRIORITY APPLICATION:
  [Company] — [Role]
  [Full application package]

OUTREACH QUEUE:
  [3-5 recruiter/HM messages ready to send]

END-OF-DAY METRICS:
  Applied: [X] | Outreach sent: [X] | Interviews scheduled: [X]
```
