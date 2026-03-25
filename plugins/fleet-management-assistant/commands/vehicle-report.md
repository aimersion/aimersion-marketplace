---
description: Generate a detailed report on a specific vehicle
argument-hint: [vehicle unit number or description]
---

Generate a comprehensive lifecycle report for a specific fleet vehicle.

Ask the user for:
- Vehicle identification (unit number, year/make/model, VIN)
- Current odometer reading
- Acquisition details (date, cost, method)
- Current repair/maintenance concerns (if any)

Generate a complete vehicle lifecycle report using the vehicle-lifecycle and cost-analyzer skills:

1. **Vehicle profile**: Year, make, model, VIN, acquisition date, acquisition cost, current mileage
2. **Depreciation status**: Current estimated value, total depreciation, book value
3. **Cost history**: Total lifetime operating costs broken down by fuel, maintenance, and repairs
4. **Cost per mile**: Lifetime and current-year CPM with trend
5. **Maintenance history**: Summary of all PM services and repairs performed
6. **Reliability score**: Unscheduled breakdowns, downtime days, come-back repairs
7. **Replacement analysis**: Is this vehicle past its optimal replacement point? Calculate the economic crossover and recommend keep/monitor/replace
8. **Disposal estimate**: If replacement is recommended, estimate residual value and best disposal channel

This report should give the fleet manager everything they need to make an informed keep-or-replace decision for this specific vehicle.
