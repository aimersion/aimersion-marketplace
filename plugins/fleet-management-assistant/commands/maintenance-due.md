---
description: Generate a maintenance due report for the fleet
argument-hint: [optional: specific vehicle or time period]
---

Generate a comprehensive maintenance due report showing upcoming, due, and overdue preventive maintenance and inspections.

Ask the user for:
- Fleet inventory details (or a subset of vehicles to check)
- Current odometer readings (if available)
- PM interval settings (or use standard intervals from the maintenance-scheduler skill)

Generate a prioritized maintenance report:

1. **Overdue items** (RED): Vehicles past their PM or inspection due date/mileage — immediate action needed
2. **Due within 30 days** (YELLOW): Vehicles approaching PM or inspection intervals — schedule now
3. **Upcoming** (GREEN): Vehicles on track with next service projected
4. **DOT inspection status**: Annual inspection expiration dates for all CMVs
5. **Action plan**: Recommended scheduling order to minimize downtime and optimize shop/vendor appointments

Format as a dashboard-style report with clear status indicators. Include estimated costs for upcoming maintenance based on typical PM costs by service level.

Use the maintenance-scheduler skill for PM interval standards, DOT requirements, and checklist templates.
