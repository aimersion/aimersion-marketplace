---
name: route-optimizer
description: >
  Plan daily service routes for pool technicians to minimize drive time and maximize
  jobs per day. This skill should be used when the user asks to "plan my route",
  "optimize my schedule", "order my stops", "minimize drive time", "route my techs",
  or needs help sequencing pool service appointments geographically.
version: 0.1.0
---

# Route Optimizer

Plan efficient daily service routes for pool technicians by sequencing stops to minimize total drive time and maximize jobs completed per day.

## Inputs Needed

Gather the following before building a route:

- **Job list**: Customer names, addresses, and service type for the day
- **Technician count**: How many techs are available
- **Start/end location**: Where techs begin and end their day (office, home, etc.)
- **Time constraints**: Any fixed-time appointments or customer availability windows
- **Service duration estimates**: Approximate time per job by service type

## Service Duration Defaults

Use these estimates unless the user provides overrides:

| Service Type | Duration |
|---|---|
| Weekly maintenance (chemical check + skim) | 20-30 min |
| Filter clean | 45-60 min |
| Green-to-clean recovery | 90-120 min |
| Equipment repair | 60-90 min |
| Opening/closing (seasonal) | 60-90 min |
| Tile/surface cleaning | 45-60 min |

## Route Planning Process

1. **Cluster stops geographically** — group nearby addresses into zones
2. **Assign clusters to technicians** — balance workload (total time) across available techs
3. **Sequence within clusters** — order stops to minimize backtracking using nearest-neighbor logic
4. **Honor time windows** — anchor fixed-time appointments first, then fill around them
5. **Add travel buffer** — include 10-15 minutes between stops for drive time and transition
6. **Validate feasibility** — confirm total estimated time fits within the work day (typically 8 hours)

## Output Format

Present the optimized route as a numbered schedule per technician:

```
TECH: [Name]
Start: [Start location] — [Time]

1. [Time] — [Customer Name], [Address]
   Service: [Type] | Est. duration: [X] min

2. [Time] — [Customer Name], [Address]
   Service: [Type] | Est. duration: [X] min

...

End: [End location] — [Estimated finish time]
Total stops: [N] | Estimated drive time: [X] min | Total day: [X] hrs
```

## Tips for the User

- Suggest grouping recurring weekly customers by geographic zone on the same day
- Flag any route that exceeds 8 hours so the user can reassign stops
- If addresses are vague, ask for ZIP codes or cross streets to improve clustering
- Recommend leaving 1-2 buffer slots for emergency/callback visits

## Reference Materials

For detailed geographic clustering strategies and multi-tech balancing, see `references/routing-strategies.md`.
