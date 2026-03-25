---
name: bdc-assistant
description: >
  Manage Business Development Center (BDC) operations for car dealerships with appointment setting templates, follow-up cadences, and performance tracking. This skill should be used when the user asks to "set an appointment", "BDC template", "appointment confirmation", "show rate improvement", "BDC scripts", "appointment reminder", "no-show follow-up", "BDC performance metrics", or needs help running an effective dealership BDC operation.
version: 0.1.0
---

# BDC Assistant

Optimize Business Development Center operations to maximize appointment setting, show rates, and conversion.

## Appointment Setting Framework

### Appointment Types
- **Sales appointment**: Vehicle-specific — customer coming to see a particular car
- **Service appointment**: Maintenance or repair — customer booking a service visit
- **Test drive appointment**: Experience-focused — customer wants to drive before deciding
- **Trade-in appraisal**: Customer wants their vehicle evaluated
- **Finance consultation**: Customer pre-approved or wants to discuss payment options

### Setting the Appointment

Follow this structure when confirming any appointment:

1. **Confirm vehicle/service interest**: "Just to confirm, you'd like to see the 2024 Toyota Camry SE, correct?"
2. **Offer specific times**: Give 2-3 options — "Would tomorrow at 10 AM or 2 PM work better?"
3. **Gather key info**: Name, phone, email, trade-in (if applicable)
4. **Set expectations**: "When you arrive, ask for [Rep Name]. They'll have the vehicle pulled up and ready for you."
5. **Confirm communication preference**: Text, email, or phone for reminders

### Show Rate Optimization

Average dealership show rate: 50-60%. Target: 70%+.

Tactics to improve show rates:
- **Immediate confirmation**: Send text + email within 2 minutes of booking
- **Personal video**: Rep sends a 30-second personal video greeting (raises show rate 15-20%)
- **Day-before reminder**: Call or text 24 hours before
- **Day-of reminder**: Text morning of appointment
- **Value reinforcement**: Mention a specific benefit in each reminder ("The Camry you're coming to see just got detailed — it looks amazing")
- **Easy rescheduling**: Always offer to reschedule instead of cancel

### No-Show Follow-Up

When a customer misses an appointment:

| Timing | Action |
|--------|--------|
| 15 min after | Text: "Hi {Name}, we have the {Vehicle} ready for you! Are you on your way?" |
| 1 hour after | Call: Check in, offer to reschedule |
| Next day | Text: No pressure reschedule offer |
| Day 3 | Email: New angle — updated inventory or incentive |
| Day 7 | Final outreach: "Door is always open" message |

## BDC Performance Metrics

Track these KPIs daily/weekly/monthly:

- **Calls made / Calls connected**: Target 80+ calls/day per rep, 30%+ connect rate
- **Appointments set**: Target 8-12 per rep per day
- **Show rate**: Target 70%+ of set appointments
- **Sold from appointment**: Target 25-30% close rate on shows
- **Average response time**: Target under 5 minutes for internet leads
- **Outbound call-to-appointment ratio**: Benchmark 15:1 to 20:1

## Templates

### Appointment Confirmation (Text)
"Hi {Name}! Your appointment is confirmed for {Date} at {Time} with {Rep} at {Dealership}. We'll have the {Vehicle} ready for you. Reply to this text anytime with questions! — {BDC Rep Name}"

### Day-Before Reminder (Text)
"Hey {Name}! Just a reminder about your appointment tomorrow at {Time}. {Rep} is looking forward to meeting you. Need to reschedule? Just reply here. See you tomorrow! 🚗"

### Day-Of Reminder (Text)
"Good morning {Name}! See you today at {Time}! Ask for {Rep} when you arrive. We're at {Address}. Text me if you need directions!"

For detailed BDC call scripts and manager escalation protocols, see `references/bdc-operations.md`.
