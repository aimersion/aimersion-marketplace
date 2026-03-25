---
name: patient-reactivation
description: >
  Find overdue dental patients and create recall campaigns to bring them back.
  This skill should be used when the user asks to "find overdue patients",
  "run a recall campaign", "reactivate patients", "patient recall",
  "bring back inactive patients", "who hasn't been in", "overdue hygiene patients",
  "lapsed patients", or needs help with any patient reactivation or recall strategy.
version: 1.0.0
---

# Patient Reactivation

Identify overdue patients, segment them by dormancy level, and create multi-channel recall campaigns.

## The Recall Problem in Dentistry

The average dental practice has a 15-20% patient attrition rate annually. A practice with 2,000 active patients loses 300-400 per year. The cost of acquiring a new patient ($200-400 in marketing) far exceeds the cost of reactivating a lapsed one ($10-50 in outreach). Reactivation is the highest-ROI marketing activity a dental practice can do.

## Patient Segmentation

### By Time Since Last Visit

| Tier | Time Since Visit | Status | Approach | Expected Reactivation Rate |
|------|-----------------|--------|----------|---------------------------|
| 1 | 6-9 months | Warm | Friendly reminder | 40-60% |
| 2 | 10-14 months | Cooling | Urgency + incentive | 20-35% |
| 3 | 15-24 months | Cold | Win-back campaign | 10-20% |
| 4 | 24+ months | Dormant | Last-chance outreach | 5-10% |

### By Patient Value

Prioritize outreach based on historical production:
- **High-value patients** (history of restorative, cosmetic, or implant work) — Personal phone call from the doctor
- **Hygiene-regular patients** (mainly prophy and periodic exams) — Automated recall sequence
- **Emergency-only patients** (only come in for pain) — Different messaging: emphasize prevention saves money and pain

### By Reason for Lapsing

When possible, tag patients with their likely reason:
- **Life change** — Moved, changed jobs, new insurance → Verify contact info first
- **Cost concern** — Previous unpaid balance, declined treatment → Lead with affordability options
- **Dental anxiety** — History of cancellations, noted fear → Lead with comfort and sedation options
- **Dissatisfaction** — Complaint history → Personal outreach from doctor or manager
- **Simply forgot** — No negative indicators → Simple reminder is enough

## Multi-Channel Outreach Sequence

For maximum effectiveness, layer channels over a 21-day period:

**Day 1:** Text/SMS (highest open rate: 98%)
**Day 3:** Email (second touchpoint, more detail)
**Day 7:** Second text if no response
**Day 10:** Phone call from front desk
**Day 14:** Second email with different angle or offer
**Day 21:** Postcard or handwritten note (for high-value patients)

Stop the sequence as soon as the patient responds or books.

## Messaging Frameworks

### The "We Miss You" Framework (Tier 1-2)
1. Personal greeting using first name
2. Mention it's been [X months] since their last visit
3. Express genuine concern for their dental health
4. Make booking easy (link, phone number, text-to-book)
5. Optional: mention what's new at the practice

### The "Fresh Start" Framework (Tier 3-4)
1. Acknowledge it's been a while — no judgment
2. Mention what's changed (new technology, comfort options, team members)
3. Special returning-patient offer (free exam, discounted cleaning, complimentary whitening)
4. Remove barriers (flexible scheduling, payment plans, sedation options)
5. Clear, simple call to action

### The "Insurance Reminder" Framework (Q4 specialty)
1. Remind them unused dental benefits expire December 31
2. Show what they're leaving on the table (average family wastes $1,000+ in unused dental benefits annually)
3. Urgency: limited appointments available before year-end
4. CTA: "Use your benefits before you lose them"

## Compliance Requirements

- **HIPAA**: Never include specific diagnoses, treatment history, or health information in postcards, unsecured emails, or text messages. Limit to general recall language.
- **TCPA**: Must have prior express consent to send marketing texts. Include opt-out mechanism in every text. Don't text before 8 AM or after 9 PM local time.
- **CAN-SPAM**: Include practice name and address, unsubscribe link in all marketing emails.
- **State dental board**: Some states restrict advertising specific prices or guarantees. Check local rules before including offers.

## Measuring Success

Track these KPIs for recall campaigns:
- Recall rate = Patients who booked / Patients contacted
- Show rate = Patients who kept appointment / Patients who booked
- Reactivation production = Revenue generated from reactivated patients within 12 months
- Cost per reactivation = Total campaign cost / Patients reactivated
- Target: 30% overall recall rate, cost per reactivation under $50

## Reference Files

- **`references/recall-message-templates.md`** — Ready-to-use message templates for each tier and channel
