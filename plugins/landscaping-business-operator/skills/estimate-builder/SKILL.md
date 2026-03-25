---
name: estimate-builder
description: >
  Create landscaping estimates for design proposals, installation projects, and maintenance contracts.
  This skill should be used when the user asks to "estimate a landscaping job", "price a lawn",
  "bid a landscape install", "maintenance contract pricing", "how much for a patio",
  "landscape proposal", "hardscape estimate", "quote a landscape project",
  or needs help generating pricing for landscaping services.
version: 0.1.0
---

# Estimate Builder

Generate landscaping estimates for maintenance contracts, installation projects, and design proposals.

## Estimate Categories

### 1. Maintenance Contracts (Recurring Revenue)

**Pricing Methods:**
- **Per-visit**: Price each visit based on property size and scope
- **Monthly flat rate**: Consistent monthly billing regardless of visit frequency
- **Annual contract**: Yearly price divided into monthly payments

**Maintenance Pricing Benchmarks:**

| Property Size | Mow/Edge/Blow (per visit) | Full Service (monthly) |
|--------------|--------------------------|----------------------|
| Small (<5,000 SF) | $30-50 | $120-200 |
| Medium (5,000-10,000 SF) | $45-75 | $180-350 |
| Large (10,000-20,000 SF) | $65-120 | $300-600 |
| Estate (20,000+ SF) | $100-250+ | $500-1,500+ |
| Commercial (per acre) | $150-400 | $600-1,800 |

### 2. Installation Estimates

**Softscape (Plants and Organic)**

| Item | Material Cost | Installed Cost | Notes |
|------|-------------|---------------|-------|
| Sod (per SF) | $0.30-0.80 | $1.00-2.50 | Depends on grass type |
| Seed (per 1,000 SF) | $30-80 | $100-250 | Including prep |
| Mulch (per cubic yard) | $25-50 | $65-120 | Delivered and spread |
| Trees (small 2-3") | $150-400 | $300-800 | Including planting |
| Trees (large 4-6") | $400-1,500 | $800-3,000 | Requires equipment |
| Shrubs (3-gallon) | $15-35 | $40-80 | Including planting |
| Shrubs (5-gallon) | $25-60 | $60-120 | Including planting |
| Perennials (1-gallon) | $6-15 | $15-30 | Including planting |
| Annuals (flat) | $15-30/flat | $3-6 per plant | Installed |

**Hardscape**

| Item | Material Cost/SF | Installed Cost/SF | Notes |
|------|-----------------|------------------|-------|
| Paver patio | $3-10 | $15-30 | Base prep included |
| Flagstone patio | $5-15 | $18-40 | Natural stone |
| Retaining wall (per face SF) | $8-25 | $25-60 | Height and material dependent |
| Concrete patio | $3-7 | $8-18 | Plain, stamped costs more |
| Stamped concrete | $8-15 | $15-30 | Pattern and color |
| Walkway (pavers) | $3-10 | $15-35 | Width and pattern |
| Fire pit | $200-800 | $1,500-5,000 | Kit vs. custom |
| Outdoor kitchen | varies | $5,000-30,000+ | Scope dependent |

**Irrigation**

| System Type | Cost per Zone | Total System |
|------------|--------------|-------------|
| Residential (6-8 zones) | $300-600 | $2,500-6,000 |
| Drip irrigation (beds) | $200-400/zone | $1,000-3,000 |
| Smart controller upgrade | — | $200-500 |
| Commercial (per acre) | — | $4,000-10,000 |

### 3. Design Proposals

Include with installation estimates:
- Conceptual design sketch or rendering
- Plant list with botanical and common names
- Material specifications
- Phased approach option (if budget is a concern)
- Maintenance requirements for new landscape

## Estimate Structure

1. **Project description** — scope narrative
2. **Site preparation** — demolition, grading, soil amendment
3. **Hardscape** — itemized by area
4. **Softscape** — plants, trees, mulch, sod/seed
5. **Irrigation** — if applicable
6. **Lighting** — landscape lighting
7. **Drainage** — if needed
8. **Delivery and equipment**
9. **Overhead and profit** (typically 20-35% markup)
10. **Warranty** — plant replacement guarantee (typically 1 year)

## Output Formats
- **Detailed estimate** — line-item breakdown (.xlsx)
- **Design proposal** — professional presentation with scope, pricing, and visuals (.docx or .pdf)
- **Maintenance contract** — recurring service agreement
- **Quick budget** — ballpark range for initial conversations
