---
name: inventory-analyzer
description: >
  Analyze car dealership inventory health with days-on-lot tracking, pricing recommendations, and market comparisons. This skill should be used when the user asks to "analyze inventory", "check days on lot", "price a vehicle", "compare market prices", "aging inventory report", "stock turn analysis", "what should I price this car at", "which cars are sitting too long", or needs help optimizing their dealership's vehicle inventory and pricing strategy.
version: 0.1.0
---

# Inventory Analyzer

Analyze dealership vehicle inventory to optimize turn rates, pricing, and profitability.

## Core Analysis Framework

### Days-on-Lot (DOL) Tracking

Classify vehicles into aging buckets and recommend actions:

- **0-30 days**: Fresh stock — price at full market, prioritize in merchandising
- **31-45 days**: Watch list — review pricing against market, ensure quality photos/descriptions posted
- **46-60 days**: Action required — recommend price reduction of 3-5%, increase advertising spend, consider dealer trade
- **61-90 days**: Urgent — recommend aggressive price reduction of 8-12%, move to front-line prominent position, consider wholesale or auction
- **90+ days**: Critical — calculate total carrying cost, recommend wholesale exit strategy, flag for manager review

### Carrying Cost Calculation

Calculate the true daily cost of holding inventory:

- **Floorplan interest**: Typical rate $25-40/day per vehicle (varies by lender)
- **Insurance**: ~$2-5/day per vehicle
- **Lot space opportunity cost**: Varies by market
- **Depreciation**: Market-dependent, accelerates with age
- **Reconditioning carrying cost**: Amortize over expected hold period

Formula: `Total Carrying Cost = (Floorplan Daily Rate + Insurance Daily + Depreciation Rate) × Days on Lot`

### Pricing Recommendations

When recommending prices, consider these data points:

1. **Market comparison**: Compare to similar vehicles within 50/100/200 mile radius
2. **Condition adjustment**: Mileage, condition report, reconditioning invested
3. **Demand indicators**: Search volume, days-to-sell for similar vehicles in market
4. **Margin targets**: Front-end gross target minus any reconditioning cost
5. **Competitive position**: Price position relative to market (below/at/above)

### Inventory Mix Analysis

Evaluate the health of overall inventory composition:

- **New vs. Used ratio**: Benchmark against market norms
- **Price segment distribution**: Economy / Mid-range / Luxury / Premium mix
- **Body style mix**: Sedan, SUV, Truck, Crossover — match to local demand
- **Age distribution**: Percentage in each DOL bucket
- **Source mix**: Trade-ins, auction purchases, dealer trades, off-lease

## Report Formats

### Quick Snapshot
Provide a summary table: total units, average DOL, aged units count, estimated carrying cost, and top 5 action items.

### Full Inventory Report
Break down by new/used, then by aging bucket. Include vehicle-level detail for aged units. Summarize pricing recommendations. Calculate total monthly carrying costs.

### Vehicle-Specific Analysis
For individual VIN lookups: market position, comparable listings, recommended price, estimated days to sell, and profit projection.

## Reference Data

For detailed market comparison frameworks and seasonal adjustment factors, see `references/market-data-guide.md`.
