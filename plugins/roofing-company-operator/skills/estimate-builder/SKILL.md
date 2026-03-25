---
name: estimate-builder
description: >
  Build detailed roofing estimates with measurement templates and material calculators by roof type.
  This skill should be used when the user asks to "estimate a roof", "price a roof replacement",
  "calculate roofing materials", "roof measurement", "quote a roof", "bid a roofing job",
  "shingle estimate", "metal roof cost", or needs help generating cost estimates for roofing projects.
version: 0.1.0
---

# Estimate Builder

Generate accurate roofing estimates with material calculations and labor pricing.

## Estimation Workflow

1. **Gather measurements** — roof area in squares (1 square = 100 SF), pitch, complexity
2. **Determine scope** — repair, re-roof (overlay), or tear-off and replace
3. **Select material** — shingle type, metal, tile, flat roofing system
4. **Calculate materials** — shingles/panels, underlayment, flashing, ventilation, trim, nails/fasteners
5. **Calculate labor** — based on roof complexity, pitch, and access
6. **Add accessories** — drip edge, ice/water shield, ridge vent, pipe boots, step flashing
7. **Include waste factor** — 10-15% for standard, 15-20% for complex or cut-up roofs
8. **Add disposal** — dumpster and dump fees for tear-off
9. **Apply overhead and profit**

## Roof Measurement Basics

### Area Calculation
- Simple gable: length x width x pitch multiplier
- Complex: break into rectangular sections, add together
- **Pitch multipliers**: 4/12=1.054, 5/12=1.083, 6/12=1.118, 7/12=1.158, 8/12=1.202, 9/12=1.250, 10/12=1.302, 12/12=1.414

### Complexity Factors
- **Simple** (gable, hip): 1.0x labor
- **Moderate** (cross-gable, L-shape): 1.15-1.25x labor
- **Complex** (multiple valleys, dormers, steep pitch): 1.3-1.5x labor
- **Very steep** (12/12 and above): 1.5-2.0x labor (harness required)

## Material Pricing by Type

### Asphalt Shingles (per square, material only)
| Grade | Material Cost/SQ | Warranty |
|-------|-----------------|---------|
| 3-tab | $80-120 | 20-25 year |
| Architectural/dimensional | $100-180 | 30-lifetime |
| Premium/designer | $180-400 | Lifetime |
| Impact-resistant (Class 4) | $150-350 | Lifetime + hail discount |

### Metal Roofing (per square, material only)
| Type | Material Cost/SQ |
|------|-----------------|
| Exposed fastener (29-gauge) | $100-200 |
| Standing seam (26-gauge) | $300-600 |
| Metal shingle/shake | $350-700 |
| Copper | $800-1,500+ |

### Flat/Low-Slope (per square, material only)
| System | Material Cost/SQ |
|--------|-----------------|
| Modified bitumen (torch or peel-stick) | $150-300 |
| TPO membrane | $200-400 |
| EPDM rubber | $150-350 |
| PVC membrane | $250-500 |
| Built-up roofing (BUR) | $200-400 |

## Labor Pricing

| Task | Cost/SQ Range | Notes |
|------|--------------|-------|
| Tear-off (1 layer) | $50-100 | Higher for multiple layers |
| Tear-off (2+ layers) | $75-150 | |
| Install (asphalt shingles) | $60-150 | Pitch and complexity dependent |
| Install (metal standing seam) | $150-350 | |
| Install (flat/low-slope) | $100-250 | |
| Disposal (dumpster + dump) | $30-60/SQ | Or $350-600 per dumpster load |

## Standard Estimate Line Items

Every roof estimate should include:
- Tear-off and disposal (if applicable)
- Underlayment (synthetic or felt)
- Ice and water shield (eaves, valleys, penetrations)
- Drip edge (eaves and rakes)
- Starter strip
- Field shingles/panels
- Hip and ridge cap
- Valley material
- Step flashing and counter-flashing
- Pipe boots/penetration flashing
- Ridge ventilation
- Plywood/decking replacement (if needed, priced separately)
- Permit
- Dumpster and cleanup

## Output Formats
- **Detailed estimate** — line-item breakdown (.xlsx)
- **Customer proposal** — professional presentation with options (.docx or .pdf)
- **Insurance scope** — Xactimate-style line items for claim matching
- **Quick budget** — per-square range for initial conversations
