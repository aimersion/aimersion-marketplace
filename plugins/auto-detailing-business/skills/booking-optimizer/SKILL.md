---
name: booking-optimizer
description: >
  Optimize scheduling for auto detailing businesses by service duration, buffer times, and capacity planning. This skill should be used when the user asks to "optimize my schedule", "plan my day", "booking strategy", "schedule optimization", "fit more appointments", "buffer times between jobs", "how many cars can I detail per day", "scheduling efficiency", or needs help maximizing their detailing schedule and reducing downtime.
version: 0.1.0
---

# Booking Optimizer

Maximize daily revenue by optimizing appointment scheduling around service durations, buffer times, and resource constraints.

## Service Duration Matrix

### Standard Time Blocks

| Service | Duration | Buffer | Total Block |
|---------|----------|--------|-------------|
| Express Wash | 30-45 min | 15 min | 1 hour |
| Standard Detail | 2-3 hours | 30 min | 3.5 hours |
| Premium Detail | 4-6 hours | 30 min | 6.5 hours |
| Ultimate/Correction | 8-12 hours | 30 min | Full day |
| Ceramic Coating | 4-8 hours | 60 min (cure) | Full day |

### Buffer Time Rules
- **Minimum 15 minutes** between express services (cleanup, prep next area)
- **30 minutes** between standard+ details (cleanup, quality check, photo documentation)
- **60 minutes** after ceramic coatings (curing, final inspection)
- **Add 15-30 minutes** for first-time customers (walk-around, condition assessment)

## Daily Schedule Optimization

### Single-Bay / Solo Operator
Maximize revenue by structuring the day:

**Option A: One Premium + Fill**
- 8:00 AM — Premium Detail (4-6 hrs)
- 2:30 PM — Express Wash
- 3:30 PM — Express Wash
- Revenue potential: $275 + $49 + $49 = $373

**Option B: Two Standards**
- 8:00 AM — Standard Detail (2.5 hrs)
- 11:00 AM — Standard Detail (2.5 hrs)
- 2:00 PM — Express Wash
- 3:00 PM — Express Wash
- Revenue potential: $149 + $149 + $49 + $49 = $396

**Option C: All Express (Volume)**
- 6-7 express services throughout the day
- Revenue potential: $49 × 7 = $343
- Higher volume, lower per-job profit, more wear on operator

### Multi-Bay / Team Scheduling

Stagger start times:
- Bay 1: Large jobs (Premium/Ultimate) — full-day bookings
- Bay 2: Standard details — 2 per day
- Bay 3: Express services — fill gaps and walk-ins

Assign techs by skill level:
- Senior detailers: Paint correction, ceramic coating
- Mid-level: Full details, interior deep cleaning
- Junior: Express washes, basic maintenance, prep work

### Mobile Detailing Schedule

Factor in drive time between locations:
- **Maximum 4-5 appointments per day** (with travel)
- **Route by geography**: Cluster appointments by area
- **Morning start**: 7:30-8:00 AM first appointment
- **Buffer travel time**: 30-45 minutes between locations
- **Last appointment**: Must finish by business hours end

## Capacity Planning

### Weekly Revenue Targets

Calculate maximum weekly capacity:
`Max Weekly Revenue = (Appointments per Day × Average Revenue per Appointment × Working Days per Week)`

For a solo operator working 5 days:
- Conservative: 3 appointments/day × $150 avg × 5 days = $2,250/week
- Optimized: 4 appointments/day × $175 avg × 5 days = $3,500/week

### Seasonal Adjustments
- **Spring (March-May)**: Peak booking season — extend hours, hire temporary help
- **Summer (June-Aug)**: Strong demand, but heat limits outdoor work — adjust schedule for early AM or covered work
- **Fall (Sep-Nov)**: Moderate — push pre-winter protection packages
- **Winter (Dec-Feb)**: Slower in most markets — focus on interior details, memberships, fleet accounts

## Booking Rules

### Policies to Implement
- **48-hour cancellation policy**: Protect revenue from no-shows
- **Deposit for Premium+ services**: 25-50% deposit secures the appointment
- **Condition assessment clause**: "Final pricing confirmed after in-person vehicle assessment"
- **Peak pricing**: Consider 10-15% premium for Saturday appointments or rush requests

For daily schedule templates and capacity calculators, see `references/scheduling-templates.md`.
