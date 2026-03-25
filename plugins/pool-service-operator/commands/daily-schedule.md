---
description: Generate today's optimized service route and job list
allowed-tools: Read, Write
---

Generate an optimized daily service schedule for a pool service technician (or team).

Ask the user for the following information if not already provided:

1. **Today's job list** — customer names, addresses, and service type for each stop
2. **Number of technicians** available today
3. **Start location** (office address or tech's home)
4. **Any fixed-time appointments** (e.g., "Mrs. Johnson needs morning service before 10 AM")

Once gathered, use the route-optimizer skill to:

1. Cluster the stops geographically to minimize backtracking
2. Sequence stops within each cluster using nearest-neighbor logic
3. Anchor any fixed-time appointments first, then fill around them
4. Assign clusters to technicians if multiple techs are available, balancing total hours
5. Add 10-15 minute travel buffers between stops
6. Validate that each tech's route fits within an 8-hour workday

Present the final schedule in this format for each technician:

```
DAILY SCHEDULE — [Date]
TECH: [Name]
Start: [Location] — [Time]

1. [Time] — [Customer], [Address]
   Service: [Type] | Est: [Duration]

2. [Time] — [Customer], [Address]
   Service: [Type] | Est: [Duration]

[... all stops ...]

End: [Location] — [Est. finish]
Total stops: [N] | Est. drive time: [X] min | Total day: [X] hrs
```

If any route exceeds 8 hours, flag it and suggest which stop to move to another tech or reschedule.

Include a "NOTES" section at the bottom for any callbacks, rain contingencies, or special instructions.
