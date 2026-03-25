---
name: chemical-calculator
description: >
  Calculate chemical dosing for swimming pools based on pool volume, current water
  test readings, and target levels. This skill should be used when the user asks to
  "calculate chemicals", "dose my pool", "balance water chemistry", "fix chlorine levels",
  "adjust pH", "treat algae", "shock a pool", or needs help determining how much of
  any pool chemical to add.
version: 0.1.0
---

# Chemical Calculator

Calculate precise chemical dosing for swimming pools and spas based on current water readings, pool volume, and target chemistry levels.

## Inputs Needed

1. **Pool volume** (gallons) — or pool dimensions to calculate it
2. **Current readings** from water test:
   - Free chlorine (FC) in ppm
   - pH
   - Total alkalinity (TA) in ppm
   - Calcium hardness (CH) in ppm
   - Cyanuric acid (CYA/stabilizer) in ppm
   - Salt level (ppm) — if salt chlorine generator
3. **Pool type**: chlorine, saltwater, bromine
4. **Surface type**: plaster, pebble, vinyl, fiberglass

## Target Ranges

| Parameter | Minimum | Ideal | Maximum |
|---|---|---|---|
| Free Chlorine | 1.0 ppm | 2.0-4.0 ppm | 5.0 ppm |
| pH | 7.2 | 7.4-7.6 | 7.8 |
| Total Alkalinity | 80 ppm | 100-120 ppm | 120 ppm |
| Calcium Hardness (plaster) | 200 ppm | 250-350 ppm | 400 ppm |
| Calcium Hardness (vinyl/fiberglass) | 150 ppm | 175-225 ppm | 250 ppm |
| Cyanuric Acid | 30 ppm | 40-60 ppm | 80 ppm |
| Salt (SWG pools) | 2700 ppm | 3200-3400 ppm | 3600 ppm |

## Volume Calculation

If the user provides dimensions instead of volume, calculate:

- **Rectangular**: Length x Width x Average Depth x 7.5 = gallons
- **Round**: Diameter x Diameter x Average Depth x 5.9 = gallons
- **Oval**: Long Diameter x Short Diameter x Average Depth x 5.9 = gallons
- **Freeform**: Estimate as rectangle at 85% of bounding dimensions

## Dosing Reference

See `references/dosing-tables.md` for complete chemical dosing rates per 10,000 gallons.

## Calculation Process

1. Calculate pool volume if not provided
2. Determine the gap between current reading and target for each parameter
3. Look up dosing rate for the appropriate chemical
4. Calculate: `(pool volume / 10,000) x dosing rate x gap = amount to add`
5. Round to practical measurements (nearest ounce, pound, or cup)
6. Present dosing order — always adjust in this sequence:
   1. Total alkalinity first
   2. pH second
   3. Calcium hardness third
   4. Chlorine / sanitizer fourth
   5. CYA / stabilizer last

## Output Format

Present results as a clear action list:

```
POOL: [Customer name] — [Volume] gallons ([pool type])

Current → Target:
  FC:  [current] → [target] ppm
  pH:  [current] → [target]
  TA:  [current] → [target] ppm
  CH:  [current] → [target] ppm
  CYA: [current] → [target] ppm

DOSING PLAN (add in this order):
1. [Chemical name] — [Amount] [unit]
   Purpose: [what it adjusts]

2. [Chemical name] — [Amount] [unit]
   Purpose: [what it adjusts]

NOTES:
- [Any special instructions, wait times, or warnings]
```

## Safety Warnings

Always include these when relevant:
- Never mix chemicals — add one at a time with circulation running
- Wait 15-30 minutes between chemical additions
- Shock treatment: keep swimmers out until FC drops below 5 ppm
- Muriatic acid: add to water, never water to acid; ventilate area
- Calcium hypochlorite: pre-dissolve in a bucket before adding to pool
