---
name: staff-scheduler
description: >
  Create optimized retail staff schedules based on traffic patterns, labor budgets, and compliance requirements.
  This skill should be used when the user asks to "create a staff schedule", "plan shifts",
  "optimize labor costs", "schedule employees", "staffing plan", "shift coverage",
  "labor budget", "peak hour staffing", or needs help with retail workforce scheduling.
version: 0.1.0
---

# Staff Scheduler

Build labor-optimized retail schedules that match staffing levels to customer traffic while controlling costs and maintaining compliance.

## Scheduling Methodology

### Step 1: Determine Traffic-Based Demand

Map staffing needs to hourly traffic patterns:

- **Peak hours** (top 20% traffic): Staff at 100% of optimal ratio (e.g., 1 associate per 15 customers).
- **Shoulder hours** (middle 40%): Staff at 70% of peak ratio.
- **Off-peak hours** (bottom 40%): Minimum coverage — 1 manager + 1 associate per zone, or 2 total for small stores.

Use the formula: `Required staff = (Expected hourly traffic × Service time per customer) / 60 minutes`

### Step 2: Apply Labor Budget Constraints

Calculate the weekly labor budget:
- **Target labor cost percentage**: Typically 10–15% of revenue for specialty retail, 8–12% for general merchandise.
- **Available hours** = Weekly labor budget / Average hourly wage (blended rate including benefits load).
- **Distribute hours**: Allocate 60% to peak periods, 25% to shoulder, 15% to off-peak.

### Step 3: Build the Schedule Grid

Create a grid with 30-minute or 1-hour blocks across operating hours:

1. Place mandatory coverage first (opening manager, closing manager, key holder).
2. Layer peak-hour staff over high-traffic blocks.
3. Stagger start times to avoid everyone arriving/leaving simultaneously.
4. Build in 30-minute overlap at shift changes for handoff.

### Step 4: Compliance and Fairness Checks

Verify all schedules against:

- **Predictive scheduling laws** (where applicable): 14-day advance notice, premium pay for last-minute changes.
- **Break requirements**: Typically 30-minute unpaid break for shifts over 6 hours; 10-minute paid break every 4 hours.
- **Overtime thresholds**: Flag any employee approaching 40 hours/week (or local threshold).
- **Minor labor restrictions**: Reduced hours, no late shifts for employees under 18.
- **Fair distribution**: Equitable rotation of desirable shifts (weekday mornings) and less desirable shifts (weekend evenings, holidays).
- **Consecutive days**: Avoid scheduling more than 6 consecutive days.

## Schedule Output Format

Present schedules as a weekly grid:

```
| Time     | Mon      | Tue      | Wed      | Thu      | Fri      | Sat      | Sun      |
|----------|----------|----------|----------|----------|----------|----------|----------|
| 9:00 AM  | Alice(O) | Bob(O)   | Alice(O) | Carol(O) | Bob(O)   | Alice(O) | Carol(O) |
| 10:00 AM | Alice    | Bob,Dave | Alice    | Carol    | Bob,Dave | Alice,Ed | Carol,Ed |
| ...      | ...      | ...      | ...      | ...      | ...      | ...      | ...      |
```

Legend: (O) = Opening, (C) = Closing, (K) = Key holder

Include a summary section with:
- Total hours per employee
- Total weekly labor cost
- Labor cost as % of projected revenue
- Overtime alerts
- Coverage gaps (if any)

## Labor Cost Optimization Tactics

- **Split shifts**: During mid-day lulls, send associates home and bring them back for evening rush (where legal and practical).
- **Cross-training**: Train associates across departments to flex coverage without adding headcount.
- **Part-time mix**: Maintain a 60/40 or 70/30 full-time to part-time ratio for scheduling flexibility.
- **On-call shifts**: Designate 1–2 on-call associates for weekends/events (comply with local on-call pay laws).
- **Seasonal temp pool**: Build a pre-screened roster of seasonal workers 6 weeks before peak seasons.

## Additional Resources

Consult `references/scheduling-patterns.md` for shift pattern templates, holiday staffing multipliers, and common retail traffic curves by store type.
