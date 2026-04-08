---
description: Generate personalized outreach messages for recruiters, hiring managers, and network contacts
argument-hint: [person name/company, outreach type, any context]
allowed-tools: WebSearch, Read, Write
---

Generate targeted outreach messages to create job opportunities through direct networking.

Parse outreach target from `$ARGUMENTS`:
- "recruiter at [Company]" — recruiter outreach
- "hiring manager [Name] at [Company]" — HM message
- "[Name] who works at [Company], we went to [School] together" — warm network
- "cold outreach to [Company]" — proactive company approach
- "batch: 10 recruiters in [industry]" — bulk outreach generation

Use the outreach-engine skill to:

1. **Identify the right message type** based on relationship and goal
2. **Generate a personalized message** using any context provided:
   - Company research (via company-researcher if needed)
   - Candidate's relevant background
   - Any shared connections or context
3. **Produce 3 variations** of the message — different tones (formal / conversational / brief)
4. **Write the follow-up** — what to send if no response in 5 days
5. **For batch outreach** — generate a base template + personalization formula for sending at volume

Output:
```
OUTREACH MESSAGE — [Target] at [Company]
Type: [Recruiter / HM / Network / Cold]

VERSION 1 (Conversational):
[Message]

VERSION 2 (Formal):
[Message]

VERSION 3 (Ultra-brief):
[Message]

FOLLOW-UP (send day 5 if no response):
[Follow-up message]

SUBJECT LINE (if emailing):
[Subject]
```
