---
name: route-optimizer
description: >
  Plan daily service routes for landscaping and lawn care crews to minimize drive time and maximize
  jobs per day. This skill should be used when the user asks to "plan routes", "optimize my schedule",
  "order my stops", "daily route", "minimize drive time", "route my crews",
  "efficient route", "schedule maintenance visits", or needs help sequencing landscaping
  service appointments geographically for maximum efficiency.
version: 0.1.0
---

# Route Optimizer

Plan efficient daily service routes that minimize drive time and maximize billable hours.

## Route Planning Workflow

1. **List all scheduled properties** — address, service type, estimated duration
2. **Group by geography** — cluster nearby properties into route zones
3. **Sequence within zones** — order stops to minimize backtracking
4. **Balance crew loads** — distribute work evenly across available crews
5. **Account for constraints** — time windows, gate codes, special requirements
6. **Build in buffer** — travel time, equipment refueling, unexpected delays
7. **Generate route sheets** — per-crew daily itinerary

## Route Organization Strategies

### Geographic Zoning
Divide service area into zones based on:
- **Quadrants** — NW, NE, SW, SE of your service area
- **Neighborhoods** — group customers by subdivision or community
- **Distance rings** — inner, middle, outer rings from your shop
- **Natural boundaries** — highways, rivers, railroads as zone dividers

### Day-of-Week Assignment
Assign zones to specific days for consistency:
- Monday: Zone A (north side)
- Tuesday: Zone B (east side)
- Wednesday: Zone C (south side)
- Thursday: Zone D (west side)
- Friday: Overflow, rain makeup days, installs, special projects

### Route Sequencing Rules
- Start with the property farthest from the shop, work back
- Or: start closest, loop outward, return (depends on crew preference)
- Avoid crossing your own path (no backtracking)
- Schedule tight-access properties during off-peak traffic times
- Group properties with shared gate codes or HOA access
- Place properties with specific time requirements first/last as needed

## Route Efficiency Metrics

Track these to measure route performance:
- **Drive time ratio** — drive time / total work hours (target: <20%)
- **Properties per day** — number of stops completed
- **Revenue per route day** — total billings per crew per day
- **Fuel cost per route** — track and optimize

## Property Service Time Estimates

| Property Type | Mow + Edge + Blow | Full Service* |
|--------------|-------------------|---------------|
| Small lot (<5,000 SF lawn) | 15-25 min | 30-45 min |
| Medium lot (5,000-10,000 SF) | 25-40 min | 45-75 min |
| Large lot (10,000-20,000 SF) | 40-60 min | 60-120 min |
| Estate (20,000+ SF) | 60-120 min | 2-4 hours |
| Commercial (office park) | 1-3 hours | 2-5 hours |
| HOA common areas | 2-6 hours | 4-8+ hours |

*Full service = mow, edge, blow, trim hedges, weed beds, check irrigation*

## Crew Capacity Planning

| Crew Size | Properties/Day (Residential) | Notes |
|-----------|-------------------------------|-------|
| 1-person | 8-12 small/medium | Solo operator |
| 2-person | 12-18 small/medium | Most efficient for residential |
| 3-person | 16-24 small/medium | Large residentials or light commercial |
| 4+ person | 20-30+ or commercial | Commercial and large estate |

*Adjust for: service scope, property size, terrain difficulty, season (spring growth = slower)*

## Route Sheet Contents

For each crew, provide:
- **Crew members and vehicle**
- **Route sequence** (numbered stops)
- **Per-stop details**: address, customer name, gate code/access, service scope, estimated time, special notes
- **Total estimated hours**
- **Equipment needed** (any special requirements per stop)
- **Fuel/supply stop** (if needed mid-route)

## Output Formats
- **Daily route sheet** — per-crew itinerary with all details
- **Weekly route plan** — all crews, all days at a glance
- **Route map** — sequenced addresses for GPS loading
- **Capacity analysis** — current load vs. available capacity for new customers
