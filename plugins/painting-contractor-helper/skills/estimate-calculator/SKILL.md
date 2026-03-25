---
name: estimate-calculator
description: >
  Calculate painting job estimates with square footage calculators, paint quantity estimators, and
  labor rates. This skill should be used when the user asks to "estimate a paint job",
  "price painting", "calculate paint needed", "quote a painting project", "bid a paint job",
  "how much paint do I need", "painting estimate", "cost to paint", or needs help generating
  cost estimates for residential or commercial painting work.
version: 0.1.0
---

# Estimate Calculator

Generate accurate painting estimates with square footage calculations, material quantities, and labor pricing.

## Estimation Workflow

1. **Measure or estimate square footage** — walls, ceilings, trim, doors, exterior surfaces
2. **Assess surface condition** — new, previously painted, damaged, textured
3. **Determine prep requirements** — washing, scraping, priming, patching, caulking
4. **Select paint quality** — economy, mid-grade, premium
5. **Calculate paint quantity** — SF / coverage rate x number of coats + waste
6. **Calculate labor hours** — based on surface type, condition, and access
7. **Add materials** — primer, caulk, tape, plastic, sandpaper, brushes/rollers
8. **Apply overhead and profit**

## Square Footage Calculation

### Interior Walls
- Wall SF = perimeter (feet) x ceiling height (feet)
- Subtract: windows (15 SF each average), doors (21 SF each average)
- Standard room example: 12x14 room, 8ft ceilings = (52 x 8) - (2 windows x 15) - (1 door x 21) = 365 SF

### Interior Ceilings
- Ceiling SF = room length x room width
- Textured ceilings: add 10-15% for additional material

### Interior Trim
- Base molding: room perimeter in linear feet
- Crown molding: room perimeter in linear feet
- Door casings: approximately 17 LF per door
- Window casings: approximately 12 LF per window

### Exterior
- Wall SF: measure each wall face (height x width) minus windows and doors
- Soffits and fascia: linear feet x width
- Trim: linear feet
- Decks/porches: SF of floor + railing LF

## Paint Coverage Rates

| Surface | Coverage (SF/gallon) | Notes |
|---------|---------------------|-------|
| Smooth drywall | 350-400 | Standard interior |
| Textured drywall | 250-350 | Orange peel, knockdown |
| New drywall (primed) | 350-400 | After primer |
| New drywall (unprimed) | 200-300 | Soaks in more |
| Wood trim | 350-400 | Smooth, primed |
| Exterior siding (smooth) | 350-400 | Vinyl, Hardie |
| Exterior siding (rough) | 200-300 | Cedar, stucco |
| Exterior stucco | 150-250 | Very porous |
| Concrete/block | 150-250 | Porous, may need block filler |
| Cabinets | 300-350 | Multiple thin coats |

## Labor Rate Reference

| Task | Production Rate | Notes |
|------|----------------|-------|
| Interior walls (roll/brush) | 150-250 SF/hr | Per coat, smooth walls |
| Interior walls (spray) | 400-800 SF/hr | Per coat, new construction |
| Interior ceiling (roll) | 100-200 SF/hr | Per coat |
| Trim (brush) | 50-100 LF/hr | Per coat |
| Exterior walls (brush/roll) | 100-200 SF/hr | Per coat |
| Exterior walls (spray) | 300-600 SF/hr | Per coat |
| Cabinet painting | 2-4 hours per cabinet | Prep + prime + 2 coats |
| Prep — washing | 200-400 SF/hr | Pressure washing exterior |
| Prep — scraping | 50-150 SF/hr | Depends on condition |
| Prep — patching | 10-30 patches/hr | Small nail holes to large repairs |
| Prep — caulking | 100-200 LF/hr | Windows, trim, joints |
| Prep — taping/masking | 100-200 LF/hr | Edges, trim, fixtures |

## Pricing Structure

### Per-Square-Foot Ranges (labor + material, per coat)
| Surface | Budget | Mid-Range | Premium |
|---------|--------|-----------|---------|
| Interior walls | $1.50-2.50 | $2.50-4.00 | $4.00-6.00 |
| Interior ceiling | $1.50-2.50 | $2.50-4.00 | $4.00-6.00 |
| Exterior (per SF) | $2.00-3.50 | $3.50-5.50 | $5.50-8.00+ |
| Cabinet (per LF of face) | $30-50 | $50-80 | $80-120+ |

### Paint Material Pricing
| Grade | Cost/Gallon | Use Case |
|-------|------------|----------|
| Economy | $20-30 | Rental units, touch-ups |
| Mid-grade | $35-55 | Standard residential |
| Premium | $55-80 | High-end residential, durability |
| Ultra-premium | $80-120+ | Cabinet/trim finishes, specialties |

## Output Formats
- **Detailed estimate** — line-item breakdown with material quantities (.xlsx)
- **Customer proposal** — professional presentation document (.docx or .pdf)
- **Quick budget** — per-room or per-SF range for initial conversations
- **Material shopping list** — paint quantities and supplies needed
