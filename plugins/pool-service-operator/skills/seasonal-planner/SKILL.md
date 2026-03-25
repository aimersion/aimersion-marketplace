---
name: seasonal-planner
description: >
  Plan seasonal pool transitions including winterization, spring startup, and
  mid-season maintenance schedules. This skill should be used when the user asks
  to "winterize a pool", "open a pool for spring", "close a pool", "plan seasonal
  maintenance", "spring startup checklist", "prepare for winter", or needs help
  with any seasonal pool transition tasks.
version: 0.1.0
---

# Seasonal Planner

Plan and manage seasonal transitions for pool service operations — winterization (closing), spring startup (opening), and mid-season maintenance milestones.

## Inputs Needed

- **Climate zone**: Freeze risk (hard freeze, light freeze, no freeze)
- **Pool type**: In-ground vs above-ground; chlorine vs saltwater
- **Equipment list**: Pump, filter type (DE/cartridge/sand), heater, salt cell, automation, water features
- **Customer tier**: Full service, chemical-only, or seasonal-only

## Winterization (Pool Closing) Checklist

Perform in this order:

### 1. Water Chemistry (1-2 days before closing)
- Balance pH to 7.2-7.6
- Adjust TA to 80-120 ppm
- Raise calcium hardness to 200-350 ppm
- Shock to 10 ppm FC
- Add winterizing algaecide per label
- Add metal sequestrant if applicable

### 2. Equipment Preparation
- Remove and clean all baskets (skimmer, pump)
- Backwash or clean filter thoroughly
- Remove drain plugs from pump, filter, heater, and chlorinator
- Blow out plumbing lines with air compressor (set to 30-40 PSI)
- Add pool antifreeze to lines (in freeze zones only)
- Disconnect and store salt cell (if SWG)
- Remove ladders, handrails, and accessories
- Lubricate o-rings and gaskets with silicone lubricant

### 3. Water Level
- **Mesh cover**: Lower water 12-18 inches below tile line
- **Solid cover**: Lower water 3-6 inches below skimmer
- **No cover**: Lower water 6 inches below skimmer

### 4. Cover Installation
- Clean and inspect cover for damage
- Install cover with water bags, clips, or cable/winch
- Ensure cover is taut with no large sagging areas

### 5. Final Documentation
- Record closing date, chemical readings, and equipment condition
- Note any repairs needed for spring
- Photograph equipment pad and pool for reference

## Spring Startup (Pool Opening) Checklist

See `references/spring-startup-detail.md` for the expanded step-by-step procedure.

**Summary sequence:**
1. Remove and clean cover; store properly
2. Restore water level to mid-skimmer
3. Reinstall drain plugs, ladders, accessories
4. Prime and start pump; check for leaks
5. Inspect and start filter
6. Reconnect salt cell, heater, automation
7. Test water chemistry and dose accordingly
8. Run system 24 hours, retest, adjust
9. Vacuum and brush pool
10. Document opening readings and equipment status

## Mid-Season Maintenance Milestones

### Monthly
- Inspect and clean filter (backwash or hose off cartridges)
- Check pump basket and skimmer weir operation
- Inspect visible plumbing for leaks
- Verify timer/automation schedules

### Quarterly
- Full water chemistry panel (including metals and phosphates)
- Inspect salt cell for scale buildup (SWG pools)
- Check pool surface for staining or etching
- Inspect deck equipment (diving board, slide, rails) for safety

### Annually
- Professional equipment inspection
- Replace worn gaskets and o-rings
- Assess filter media condition (replace DE grids/cartridges per schedule)
- Evaluate energy efficiency (pump age, variable speed upgrade)

## Scheduling Guidance

Recommend scheduling seasonal services in this window:

| Service | Timing | Notes |
|---|---|---|
| Winterization | After last swim + before first hard freeze | Typically Oct-Nov (cold climates) |
| Spring opening | 2-4 weeks before desired swim date | Typically Mar-May |
| Mid-season checkup | 6-8 weeks into swim season | Catches problems early |

## Output Format

Present seasonal plans as a checklist the tech can follow on-site:

```
SEASONAL SERVICE: [Opening / Closing / Mid-Season Check]
Customer: [Name] — [Address]
Pool: [Volume] gal, [type], [surface]
Equipment: [Summary]
Date: [Scheduled date]

PRE-VISIT PREP:
[ ] [Items to bring / parts to order]

ON-SITE CHECKLIST:
[ ] Step 1: [Description]
[ ] Step 2: [Description]
...

POST-VISIT:
[ ] Record readings: FC___ pH___ TA___ CH___ CYA___
[ ] Note repairs needed: ___
[ ] Schedule follow-up if needed: ___
```
