---
description: Generate optimized daily service routes for crews
allowed-tools: Read, Write, Edit
---

Generate optimized daily service routes.

1. Read the route-optimizer skill for routing methodology and capacity planning
2. Ask for: number of crews, list of properties with addresses and service scope, any priority stops or time constraints
3. Group properties by geographic proximity
4. Sequence stops within each route to minimize drive time (farthest first or nearest first based on preference)
5. Balance workload across crews based on estimated service times
6. Generate per-crew route sheets with: stop sequence, address, customer name, service scope, estimated time, gate codes, special notes
7. Calculate total estimated hours and properties per crew
8. Flag any capacity issues (overloaded routes or underutilized crews)
