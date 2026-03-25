---
description: Generate a dealership inventory health report
argument-hint: [optional: specific concerns or vehicle details]
---

Generate a comprehensive inventory health report for the dealership.

Ask the user for their current inventory data if not already provided. This can include:
- Total unit count (new and used separately)
- Average days on lot
- Number of aged units (60+ days)
- Any specific vehicles of concern

Then produce a structured inventory report with these sections:

1. **Inventory Snapshot**: Total units, new/used split, average DOL, aged unit count
2. **Aging Analysis**: Break down units by DOL bucket (0-30, 31-45, 46-60, 61-90, 90+) with recommended actions per bucket
3. **Carrying Cost Estimate**: Calculate estimated monthly carrying cost for aged inventory using standard floorplan rates
4. **Action Items**: Top 5 priority actions ranked by financial impact — which vehicles to price-cut, which to wholesale, which to feature in advertising
5. **Market Position**: Compare pricing strategy to market benchmarks

If the user provides specific vehicle details (year, make, model, mileage, current price, days on lot), provide a vehicle-level pricing recommendation with market comparison.

Use the inventory-analyzer skill for detailed methodology and benchmarks. Present the report in a clean, executive-summary format that a dealer principal or general manager can act on immediately.
