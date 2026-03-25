---
description: Find overdue patients and create a recall outreach campaign
allowed-tools: Read, Write, Edit, Bash, WebSearch
argument-hint: [months-overdue]
---

Build a patient recall campaign to reactivate overdue patients. Target patients overdue by: $ARGUMENTS (default: 6+ months since last visit).

## Process

1. **Segment Overdue Patients** — Ask the user for their patient list or connect to their ~~practice management system. Categorize into tiers:
   - **Tier 1 (6-9 months overdue)** — Warm. Likely just forgot. Gentle reminder tone.
   - **Tier 2 (10-14 months overdue)** — Cooling. Need a reason to come back. Include incentive or urgency.
   - **Tier 3 (15-24 months overdue)** — Cold. "We miss you" campaign. Emphasize what's changed, new tech, special offer.
   - **Tier 4 (24+ months overdue)** — Win-back. Last-chance communication before marking inactive.

2. **For Each Tier, Generate:**

   **Text/SMS messages** (short, conversational, include booking link):
   - Initial outreach message
   - Follow-up if no response (3-5 days later)
   - Final attempt (7-10 days after follow-up)

   **Email messages** (warm, personal, from-the-doctor tone):
   - Subject line options (3 variations for A/B testing)
   - Email body with personal greeting, reason to visit, clear CTA
   - Include seasonal relevance when applicable (use remaining insurance benefits in Q4, new year fresh start in Q1, summer smile prep in Q2)

   **Phone call script** (for front desk team):
   - Opening line
   - Key talking points
   - Objection handling (too busy, no insurance, cost concerns, dental anxiety)
   - Booking the appointment
   - Closing

   **Postcard/mailer copy** (for Tier 3-4):
   - Headline, body copy, CTA
   - Special offer language if approved by the practice

3. **Compliance Notes** — Remind the user:
   - Check state regulations on patient communication after inactive periods
   - Include opt-out language in all electronic communications
   - HIPAA: Never include specific treatment details in postcards or unsecured emails
   - Track consent status before texting (TCPA compliance)

4. **Campaign Timeline** — Create a drip schedule showing which messages go out on which days for each tier.

5. **Tracking** — Provide a simple tracking spreadsheet template: patient name, tier, outreach date, method, response, appointment booked (Y/N), appointment kept (Y/N).

Tone throughout: warm, non-judgmental, zero guilt-tripping. The goal is to make it easy and appealing for patients to come back.
