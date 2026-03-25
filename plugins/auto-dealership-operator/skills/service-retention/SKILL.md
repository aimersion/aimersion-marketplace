---
name: service-retention
description: >
  Drive service department retention with declined service follow-ups, maintenance reminders, and recall notifications for car dealerships. This skill should be used when the user asks to "follow up on declined service", "send maintenance reminders", "recall notification", "service retention campaign", "bring customers back to service", "service reminder email", "declined repair follow-up", "customer retention for service", or needs help keeping customers coming back to the dealership service department.
version: 0.1.0
---

# Service Retention

Maximize service department revenue and customer retention through proactive communication, declined service follow-up, and lifecycle maintenance reminders.

## Declined Service Follow-Up

When a customer declines recommended service during a visit, they are a high-value follow-up target. They already trust the dealership enough to come in — they just need a nudge.

### Follow-Up Cadence for Declined Services

| Timing | Channel | Message Focus |
|--------|---------|---------------|
| Same day | Text | "Thanks for visiting today. Quick reminder about the {service} we discussed — happy to answer any questions." |
| Day 3 | Email | Educational — explain why the service matters, consequences of deferring |
| Day 7 | Phone call | Personal outreach, offer to schedule at their convenience |
| Day 14 | Email | Offer a limited-time incentive (10-15% off, or bundled discount) |
| Day 30 | Text | Final touch — "Just checking in, the offer on your {service} is still available" |

### Prioritization by Service Type

Prioritize declined service follow-ups by safety and revenue impact:

1. **Safety-critical** (immediate follow-up): Brakes, tires, steering, suspension, safety recalls
2. **Reliability-critical** (follow up within 3 days): Timing belt, transmission service, coolant system
3. **Maintenance** (follow up within 7 days): Fluid changes, filters, alignments
4. **Preventive/Cosmetic** (follow up within 14 days): Paint protection, interior treatments, accessories

## Maintenance Reminder System

### Mileage-Based Reminders

Set up reminders based on manufacturer-recommended intervals:

- **Every 5,000 miles**: Oil change, tire rotation, multi-point inspection
- **Every 15,000 miles**: Cabin air filter, engine air filter, brake inspection
- **Every 30,000 miles**: Transmission fluid, coolant flush, spark plugs (varies)
- **Every 60,000 miles**: Timing belt (if applicable), major brake service, suspension check

### Time-Based Reminders

For customers who drive less, trigger on time intervals:

- **Every 6 months**: Oil change reminder (even if mileage isn't reached)
- **Annually**: State inspection reminder (where applicable), battery test, A/C check (pre-summer)
- **Seasonally**: Tire changeover (winter/summer), wiper blades, coolant check

### Reminder Message Structure

Every reminder should include:
1. Customer's name and vehicle (year/make/model)
2. Specific service due and why it matters
3. Easy scheduling link or phone number
4. Current special offer (if applicable)
5. Estimated time and cost transparency

## Recall Notifications

### Process for Recall Outreach
1. Match affected VINs against customer database
2. Segment by recall severity (safety vs. non-safety)
3. Send initial notification via preferred channel
4. Follow up non-responders at 7, 14, and 30 days
5. Safety recalls: attempt phone contact within 48 hours

### Recall Message Requirements
- State the recall clearly and factually
- Emphasize the repair is FREE and performed by factory-trained technicians
- Provide specific scheduling instructions
- Never create unnecessary panic — be factual and helpful
- Include NHTSA recall number for reference

## Retention Metrics

Track these KPIs:
- **Customer retention rate**: % of sold customers who return for service within 12 months (target: 60%+)
- **Declined service recapture rate**: % of declined services completed within 90 days (target: 25-35%)
- **Service absorption rate**: Service dept gross profit as % of total dealership overhead (target: 80%+)
- **Customer pay ROs per month**: Trend vs. prior year
- **Average RO amount**: Track and grow through declined service recapture

For detailed message templates and seasonal campaign playbooks, see `references/retention-playbooks.md`.
