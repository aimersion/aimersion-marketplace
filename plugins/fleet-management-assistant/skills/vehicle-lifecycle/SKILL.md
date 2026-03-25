---
name: vehicle-lifecycle
description: >
  Manage the full vehicle lifecycle from acquisition planning through depreciation tracking to optimal disposal timing. This skill should be used when the user asks to "plan vehicle purchases", "replacement cycle", "depreciation tracking", "when to replace a vehicle", "fleet acquisition plan", "vehicle disposal", "optimal replacement timing", "fleet renewal strategy", "buy vs. lease analysis", "vehicle lifecycle cost", or needs help making fleet acquisition, retention, and disposal decisions.
version: 0.1.0
---

# Vehicle Lifecycle

Optimize fleet composition and timing through data-driven acquisition, depreciation tracking, and disposal decisions.

## Acquisition Planning

### Needs Assessment
Before acquiring any vehicle, evaluate:
1. **Mission requirement**: What job does this vehicle perform? What are the minimum specs?
2. **Utilization forecast**: Expected annual mileage and duty cycle
3. **Duration of need**: Temporary (lease) or long-term (purchase)?
4. **Total fleet composition**: How does this vehicle fit the overall fleet plan?
5. **Budget impact**: Capital expenditure vs. operating expense (buy vs. lease)

### Buy vs. Lease Analysis

**Advantages of Buying**:
- No mileage restrictions
- Build equity / residual value
- Customize freely
- Lower long-term cost for high-mileage vehicles
- Depreciation tax benefits

**Advantages of Leasing**:
- Lower upfront cost (preserve capital)
- Predictable monthly expense
- Always drive newer vehicles
- Maintenance often included
- Easier fleet refresh cycles
- Off-balance-sheet (operating lease)

**Decision framework**:
- Annual mileage >20,000 → Lean toward purchasing
- Vehicle needed <3 years → Lean toward leasing
- Customization required → Purchase
- Cash flow constrained → Lease
- Resale market strong for vehicle type → Purchase

### Acquisition Timing

Best times to purchase fleet vehicles:
- **End of quarter** (March, June, September, December): Dealer volume incentives
- **End of model year** (Aug-Oct): Outgoing model discounts
- **Fleet-specific incentives**: Check manufacturer fleet programs (Chrysler AAFES, Ford Fleet, GM Fleet)
- **Auction opportunities**: Off-lease vehicles at 2-3 year mark (best value for used fleet)

## Depreciation Tracking

### Depreciation Methods

**Straight-Line** (simplest):
`Annual Depreciation = (Acquisition Cost - Residual Value) / Useful Life in Years`

**Declining Balance** (accelerated, more realistic):
Year 1: 20-25% of value
Year 2: 15-18% of remaining
Year 3-5: 10-15% per year
Year 6+: Minimal (approaching floor value)

### Typical Depreciation Curves

| Vehicle Type | Year 1 | Year 3 | Year 5 | Year 7 |
|-------------|--------|--------|--------|--------|
| Compact sedan | -22% | -45% | -58% | -68% |
| Midsize sedan | -25% | -48% | -62% | -72% |
| Pickup truck | -18% | -38% | -50% | -60% |
| Full-size SUV | -20% | -42% | -55% | -65% |
| Cargo van | -22% | -45% | -60% | -70% |
| Class 6 truck | -15% | -35% | -48% | -58% |

*Actual depreciation varies significantly by make, model, condition, and market.*

### Factors Affecting Residual Value
- **Positive**: Popular model, low mileage, good maintenance records, desirable color, in-demand body style
- **Negative**: High mileage, accident history, discontinued model, poor maintenance, commercial use wear

## Optimal Replacement Timing

### The Replacement Decision Matrix

Replace a vehicle when ANY of these conditions are met:

1. **Economic crossover**: Annual repair costs exceed 50% of annual depreciation
2. **Reliability threshold**: 3+ unscheduled breakdowns in 12 months
3. **Safety concerns**: Structural or safety-system issues requiring major repair
4. **Mission capability**: Vehicle no longer meets operational requirements
5. **Regulatory compliance**: Emissions or safety standards can't be met economically
6. **Optimal resale window**: Before rapid depreciation phase (typically year 3-5 for light duty)

### Fleet Replacement Cycle Guidelines

| Vehicle Type | Optimal Cycle | Mileage Trigger |
|-------------|--------------|-----------------|
| Compact/midsize sedan | 3-5 years | 80,000-120,000 miles |
| Pickup truck (light duty) | 5-7 years | 100,000-150,000 miles |
| Cargo van | 5-7 years | 100,000-150,000 miles |
| SUV | 4-6 years | 80,000-120,000 miles |
| Medium truck (Class 6) | 7-10 years | 200,000-300,000 miles |
| Heavy truck (Class 8) | 5-7 years | 400,000-700,000 miles |

## Disposal Strategy

### Disposal Channels (Highest to Lowest Return)
1. **Private sale**: Highest value but most effort and time
2. **Dealer trade-in**: Good value on fleet-spec vehicles, convenient
3. **Fleet auction** (Manheim, ADESA): Competitive market pricing, quick
4. **Online marketplace** (commercial): Broader audience
5. **Wholesale/salvage**: Last resort for high-mileage or damaged vehicles

### Pre-Disposal Preparation
- Remove company decals, logos, and GPS/telematics equipment
- Clean interior and exterior (basic detail)
- Compile maintenance records (increases buyer confidence and value)
- Ensure clear title
- Deregister from fleet insurance

For lifecycle planning templates and financial models, see `references/lifecycle-models.md`.
