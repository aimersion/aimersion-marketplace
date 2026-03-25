---
name: cost-analyzer
description: >
  Analyze fleet costs including total cost of ownership, fuel efficiency tracking, and repair cost trends. This skill should be used when the user asks to "analyze fleet costs", "total cost of ownership", "TCO analysis", "fuel efficiency report", "repair cost trends", "cost per mile", "fleet budget", "vehicle operating costs", "compare fleet costs", "which vehicles cost the most", or needs help understanding and optimizing fleet expenses.
version: 0.1.0
---

# Cost Analyzer

Track, analyze, and optimize fleet operating costs with total cost of ownership analysis, fuel efficiency metrics, and repair trend identification.

## Total Cost of Ownership (TCO) Framework

### TCO Components

**Fixed Costs** (incurred regardless of usage):
- Vehicle acquisition/lease payments
- Insurance premiums
- Registration and licensing fees
- Depreciation (for owned vehicles)
- Parking/storage costs
- Permits and certifications

**Variable Costs** (increase with usage):
- Fuel
- Preventive maintenance
- Repairs (unscheduled)
- Tires
- Tolls
- Wash/cleaning

**Administrative Costs**:
- Fleet management software/tools
- Telematics systems
- Driver management and training
- Compliance and regulatory costs
- Accident management

### TCO Calculation

**Per-Vehicle Annual TCO**:
`TCO = Acquisition Cost (Amortized) + Insurance + Fuel + Maintenance + Repairs + Tires + Registration + Admin Allocation`

**Cost Per Mile**:
`CPM = Annual TCO / Annual Miles Driven`

### TCO Benchmarks by Vehicle Type

| Vehicle Type | Annual TCO Range | Cost Per Mile |
|-------------|-----------------|---------------|
| Compact sedan | $6,000-9,000 | $0.35-0.50 |
| Midsize sedan | $7,500-11,000 | $0.40-0.55 |
| Pickup truck (1/2 ton) | $10,000-15,000 | $0.50-0.70 |
| Cargo van | $12,000-18,000 | $0.55-0.75 |
| Class 6 medium truck | $18,000-28,000 | $0.65-1.00 |
| Class 8 tractor | $35,000-55,000 | $0.80-1.50 |

*Ranges vary significantly by mileage, region, and vehicle age.*

## Fuel Efficiency Analysis

### Tracking Metrics
- **MPG per vehicle**: Calculated from fuel purchases and odometer readings
- **Cost per gallon trend**: Track fuel price changes over time
- **Fuel cost per mile**: Gallons consumed × price / miles driven
- **Fleet average MPG**: Total miles / total gallons across all vehicles

### Fuel Efficiency Red Flags
- Vehicle consistently 15%+ below EPA rating — investigate maintenance issues
- Sudden drop in MPG — check tire pressure, air filter, O2 sensor, fuel injectors
- Driver-specific high fuel consumption — may indicate aggressive driving habits

### Fuel Cost Reduction Strategies
- Right-size vehicles to task (don't use a truck when a van will do)
- Driver behavior training (smooth acceleration, speed management)
- Telematics-based idle time reduction
- Route optimization to reduce total miles
- Consider hybrid/EV for appropriate use cases
- Fuel card programs for discounts and tracking

## Repair Cost Trend Analysis

### Cost Categories to Track
- **Scheduled maintenance**: PM services (predictable, budgetable)
- **Unscheduled repairs**: Breakdowns and unexpected failures
- **Accident repairs**: Collision and incident damage
- **Tires**: Replacement and repair
- **Recall/warranty**: Manufacturer-covered repairs

### Trend Indicators

**Increasing repair costs per vehicle may signal**:
- Vehicle aging beyond optimal replacement point
- Inadequate PM program (deferred maintenance catching up)
- Driver abuse or operating conditions
- Parts quality issues from previous repairs

**Per-vehicle repair cost threshold**:
When annual unscheduled repair costs exceed 50% of the vehicle's annual depreciation, evaluate replacement.

### Reporting Framework

Monthly cost report should include:
1. Total fleet operating cost (month and YTD)
2. Cost per mile (fleet average and per vehicle)
3. Fuel cost summary (gallons, cost, average price)
4. Maintenance/repair breakdown (scheduled vs. unscheduled)
5. Top 5 highest-cost vehicles with trend
6. Budget variance (actual vs. planned)
7. Actionable recommendations

For detailed report templates and cost calculation worksheets, see `references/cost-templates.md`.
