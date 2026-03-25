---
name: compensation-benchmarking
description: Benchmark compensation against market data for any role, level, and location — with base salary, equity, bonus, and total comp percentile bands, geographic adjustments, and company-stage context. Use this skill when someone asks "what should we pay", "comp benchmark", "market rate for", "salary range for", "is this offer competitive", "are we paying fairly", "pay equity", "compensation band", or needs help with any compensation question. Also trigger when someone is deciding on salary ranges for a new role or reviewing existing comp bands.
---

# Compensation Benchmarking

Benchmark compensation so you can make competitive offers without overpaying. At a 50-person company, every dollar of payroll matters — but underpaying means losing candidates to larger competitors.

## Total Compensation Framework

### Components
| Component | What It Covers | How to Benchmark |
|-----------|---------------|-----------------|
| **Base salary** | Annual cash compensation | Percentile bands by role, level, location |
| **Equity** | RSUs, ISOs, NSOs | % of total comp; varies dramatically by stage |
| **Signing bonus** | One-time cash | Typically 5-15% of base; used to close competitive offers |
| **Annual bonus** | Target bonus (% of base) | 0-20% for ICs; 10-30% for managers; 20-50% for execs |
| **Benefits** | Health, 401k, PTO | Valued at $15-30K/year for most employees |
| **Perks** | Learning, wellness, remote stipend | $2-8K/year typically |

### Key Variables

**Role and Function:** Engineering, sales, marketing, operations, finance, design, etc. Functions have very different market rates.

**Level:** Junior/Associate, Mid, Senior, Staff/Principal, Director, VP, C-level. The jump between levels is typically 15-25% in base.

**Location:** Geographic adjustments matter less than they used to (remote work), but still significant:
- SF/NYC: 100% (baseline)
- Seattle/Boston/LA: 90-95%
- Austin/Denver/Chicago: 80-90%
- Mid-tier cities: 70-85%
- Rural/low-cost: 65-80%
- International: Varies dramatically by country

**Company Stage:**
| Stage | Base Pay | Equity | Total Comp Strategy |
|-------|---------|--------|---------------------|
| Pre-seed/Seed | Below market | High equity (0.1-2%) | Equity-heavy, lower base |
| Series A/B | At or slightly below market | Moderate equity (0.05-0.5%) | Balance base and equity |
| Series C+ / Growth | At market | Lower equity % but higher value | Competitive base, meaningful equity |
| Public / Late stage | At or above market | RSUs (smaller %) | Cash-heavy, equity as supplement |

## Data Sources

**With ~~compensation data connected:**
- Pull verified benchmarks from Pave, Radford, or Levels.fyi
- Compare your bands against real-time market data

**Without connectors (standalone):**
- Use web research: Levels.fyi, Glassdoor, Payscale, salary.com
- Cross-reference multiple sources (no single source is reliable alone)
- Always note data freshness and limitations
- Ask the user if they have internal comp data to compare against

## Output Format

```markdown
## Compensation Benchmark: [Role] — [Level]
**Location:** [City/Remote] | **Company Stage:** [Stage]

### Market Data (Percentile Bands)
| Percentile | Base Salary | Equity (Annual) | Total Comp |
|-----------|-------------|-----------------|------------|
| 25th | $[X] | $[X] | $[X] |
| 50th (median) | $[X] | $[X] | $[X] |
| 75th | $[X] | $[X] | $[X] |
| 90th | $[X] | $[X] | $[X] |

**Data Sources:** [List sources and freshness]
**Location Adjustment:** [Applied multiplier]

### Recommendation
**Target positioning:** [25th/50th/75th] percentile
**Suggested range:** $[X] - $[Y] base
**Rationale:** [Why this positioning makes sense for your company]

### Context
- [How this compares to your current bands]
- [Retention risk considerations]
- [Equity vs. cash tradeoff analysis for your stage]
```

## Pay Equity Analysis

When asked to review internal pay equity:
1. Compare compensation across employees at the same level and role
2. Flag disparities >10% that aren't explained by tenure, performance, or geography
3. Check for demographic patterns (if data available)
4. Recommend specific adjustments with cost estimates
5. Note: Pay equity is a legal and ethical obligation, not just a nice-to-have
