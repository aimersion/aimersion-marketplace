---
name: staff-scheduler
description: >
  Manage car wash staffing with peak hour scheduling, training checklists, and labor optimization. This skill should be used when the user asks to "schedule staff", "peak hour staffing", "create a schedule", "training checklist", "new hire training", "staff coverage", "labor costs", "how many employees do I need", "staffing plan", "employee scheduling", or needs help optimizing labor at their car wash.
version: 0.1.0
---

# Staff Scheduler

Optimize car wash staffing to match demand patterns, control labor costs, and maintain quality service.

## Staffing Models by Car Wash Type

### Express Tunnel (No Interior)
- **Minimum crew**: 3-4 per shift (loader, exit attendant, floater/greeter)
- **Peak crew**: 5-7 (add loaders, exit wipers, traffic director)
- **Manager on site**: Always during peak hours

### Full-Service (Tunnel + Interior)
- **Minimum crew**: 6-8 per shift (tunnel ops + interior crew)
- **Peak crew**: 10-15 (scale interior crew to volume)
- **Manager on site**: Always

### Self-Serve / Automatic Bay
- **Minimum crew**: 1-2 (attendant + maintenance coverage)
- **Peak crew**: 2-3 (add maintenance/customer assistance)

## Peak Hour Patterns

### Daily Volume Distribution (Typical Express Tunnel)

| Time Block | Volume % | Staffing Level |
|-----------|----------|---------------|
| 7:00-9:00 AM | 10% | Minimum |
| 9:00-11:00 AM | 20% | Building |
| 11:00 AM-1:00 PM | 25% | Peak |
| 1:00-3:00 PM | 20% | Peak |
| 3:00-5:00 PM | 15% | Winding down |
| 5:00-7:00 PM | 10% | Minimum |

### Weekly Volume Distribution

| Day | Relative Volume | Staffing Priority |
|-----|----------------|------------------|
| Monday | Low (70%) | Minimum + maintenance tasks |
| Tuesday | Low-Medium (80%) | Moderate |
| Wednesday | Medium (90%) | Moderate |
| Thursday | Medium (95%) | Moderate |
| Friday | High (110%) | Full staff |
| Saturday | Highest (130%) | Maximum staff — all hands |
| Sunday | Medium-High (100%) | Full staff |

*Percentages are relative to weekly average daily volume*

### Seasonal Adjustments
- **Spring**: +20-30% volume — increase staffing March-May
- **Summer**: +10-15% — maintain strong staffing
- **Fall**: -10% — reduce slightly
- **Winter**: -20-30% in cold markets — reduce accordingly

## Schedule Building Process

### Step 1: Forecast Daily Volume
- Use prior year same-week data as baseline
- Adjust for weather forecast (+/- 15-25%)
- Adjust for season and any promotions running
- Holiday weekends: typically -20% (people traveling)

### Step 2: Calculate Labor Need
`Staff needed = Projected car count / Cars per labor hour per position`

Rules of thumb:
- **Loader**: 1 per lane, can handle 60-80 cars/hour (tunnel speed dependent)
- **Exit wiper**: 1 per 50-60 cars/hour
- **Greeter/cashier**: 1 per 70-80 cars/hour
- **Interior crew** (full-service): 1 per 8-12 cars/hour (depending on service level)

### Step 3: Build the Schedule
- Schedule core team for full shifts (8 hours)
- Use part-time employees to cover peak hours (11 AM-3 PM)
- Cross-train all employees to flex between positions
- Always have one "floater" during peak who can fill any gap
- Schedule one person overlap during shift changes

## Labor Cost Management

### Target Labor Cost Percentages
- **Express tunnel**: 18-25% of revenue
- **Full-service**: 30-40% of revenue
- **Self-serve**: 8-12% of revenue

### Cost Control Tactics
- Cross-training allows smaller total headcount
- Split shifts for peak coverage without full-day pay
- Stagger start times (not everyone at 8 AM)
- Flex scheduled workers home early on slow days (with agreement)
- Incentive programs tied to volume (team bonus for high-count days)

## Training Checklists

### New Hire — Day 1
- Company orientation and safety overview
- Tour of facility and equipment
- Emergency procedures (equipment shut-off, chemical spills)
- Chemical safety / SDS locations
- Customer service expectations
- Uniform and grooming standards
- Position-specific training begins

### Position-Specific Training

**Loader/Greeter**:
- Vehicle guide-on procedure
- Antenna/mirror/wiper prep
- Upsell script and membership pitch
- Payment processing
- Handling customer concerns

**Exit Attendant/Wiper**:
- Drying technique (no scratching, streak-free)
- Quality inspection points
- Customer delivery and thank-you
- Re-wash identification and handling

**Interior Crew** (Full-Service):
- Vacuum technique and coverage
- Dashboard/console wiping standards
- Window cleaning (interior)
- Floor mat handling
- Interior detailing add-on execution

For schedule templates and training documentation, see `references/staff-operations.md`.
