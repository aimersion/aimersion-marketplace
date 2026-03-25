---
description: Analyze water test results and recommend chemical adjustments
argument-hint: [FC pH TA CH CYA volume]
allowed-tools: Read, Write
---

Analyze pool water test results and generate a precise chemical dosing plan.

Parse the provided readings from `$ARGUMENTS`. The user may provide readings in various formats — numbers separated by spaces, a comma-separated list, or labeled values like "FC 2.0 pH 7.8 TA 90". Be flexible in parsing.

Expected readings (ask for any that are missing):
- **FC** (Free Chlorine) in ppm
- **pH**
- **TA** (Total Alkalinity) in ppm
- **CH** (Calcium Hardness) in ppm
- **CYA** (Cyanuric Acid / Stabilizer) in ppm
- **Pool volume** in gallons (or dimensions to calculate it)

Optional readings the user may include:
- Salt level (ppm) — for saltwater pools
- Phosphates (ppb)
- Combined chlorine / total chlorine

Also ask for:
- **Pool type**: chlorine, saltwater, or bromine
- **Surface type**: plaster, pebble, vinyl, or fiberglass (affects calcium hardness targets)

Use the chemical-calculator skill to:

1. Compare each reading against the target ranges
2. Calculate the exact amount of each chemical needed
3. Order the dosing steps correctly (TA → pH → CH → Chlorine → CYA)
4. Include safety notes for any chemicals being added

Present results in this format:

```
WATER TEST ANALYSIS
Pool: [Customer/Pool info] — [Volume] gallons ([Type])

READINGS vs TARGETS:
  FC:  [Current] → [Target] ppm  [✓ OK / ⚠ Adjust]
  pH:  [Current] → [Target]      [✓ OK / ⚠ Adjust]
  TA:  [Current] → [Target] ppm  [✓ OK / ⚠ Adjust]
  CH:  [Current] → [Target] ppm  [✓ OK / ⚠ Adjust]
  CYA: [Current] → [Target] ppm  [✓ OK / ⚠ Adjust]

DOSING PLAN (add in this order):
1. [Chemical] — [Amount] [unit]
   Adjusts: [Parameter] from [current] to [target]

2. [Chemical] — [Amount] [unit]
   Adjusts: [Parameter] from [current] to [target]

SAFETY NOTES:
• [Relevant safety reminders]
• Wait 15-30 min between additions with pump running

NEXT TEST: Retest in [timeframe] to verify adjustments
```

If all readings are in range, confirm that and suggest when to retest.
