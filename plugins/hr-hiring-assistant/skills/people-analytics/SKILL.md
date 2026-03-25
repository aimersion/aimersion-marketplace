---
name: people-analytics
description: Analyze workforce data — attrition trends, retention risk, diversity metrics, engagement signals, and productivity indicators — with executive-ready reports and specific action recommendations. Use this skill when someone asks about "attrition rate", "turnover analysis", "diversity metrics", "engagement data", "retention risk", "flight risk", "headcount report", "workforce analytics", "eNPS", "people data", or needs help understanding any workforce trend. Also trigger when someone uploads HR data (CSV, spreadsheet) and wants insights.
---

# People Analytics

Surface workforce insights that drive action. At a 50-person company, you don't need a data science team — you need the right metrics tracked consistently and someone to tell you what they mean.

## Key Metric Categories

### Retention & Attrition
| Metric | Formula | Healthy Benchmark | Action Threshold |
|--------|---------|-------------------|-----------------|
| Overall attrition | Departures / Avg headcount × 100 | 10-15% annual | >20% = crisis |
| Voluntary attrition | Voluntary departures / Avg headcount × 100 | 8-12% annual | >15% = investigate |
| Regrettable attrition | High-performer departures / Total departures | <30% of departures | >40% = retention problem |
| Average tenure | Mean months of employment | 24-36 months | <18 months = churn issue |
| 90-day attrition | Departures within 90 days / New hires × 100 | <10% | >15% = onboarding problem |

### Diversity & Inclusion
| Metric | What It Tells You | How to Measure |
|--------|-------------------|----------------|
| Representation by level | Where diversity exists (or doesn't) | % by demographic at each level |
| Pipeline diversity | Whether your funnel is inclusive | % by demographic at each hiring stage |
| Promotion equity | Whether advancement is fair | Promotion rates by demographic group |
| Pay equity | Whether compensation is fair | Pay gap analysis at same role/level |
| Inclusion index | Whether people feel they belong | Survey-based (belonging, psychological safety) |

### Engagement
| Signal | Data Source | What to Watch For |
|--------|-----------|-------------------|
| eNPS (Employee Net Promoter Score) | Pulse surveys | <20 = concerning; >40 = excellent |
| Survey participation rate | Survey tools | <70% = people don't trust the process |
| Manager effectiveness | 360 feedback, skip-levels | Wide variance = inconsistent management |
| Voluntary attrition by team | HRIS | One team 2x+ company average = manager issue |

### Productivity
| Metric | What It Tells You |
|--------|-------------------|
| Revenue per employee | Efficiency of the workforce |
| Time to productivity (new hires) | Onboarding effectiveness |
| Span of control | Manager leverage |

## Analysis Approach

1. **Understand the question** — What decision is this data informing?
2. **Identify data sources** — Upload, paste, or pull from ~~HRIS
3. **Analyze with context** — Numbers without context are dangerous (e.g., "20% attrition" means different things for a call center vs. engineering)
4. **Present findings clearly** — Executive summary first, then details
5. **Recommend specific actions** — Not just "improve retention" but "implement stay interviews for the 8 engineers in the platform team who've been at the company 2+ years"

## Report Template

```markdown
## People Analytics Report: [Type]
**Period:** [Date range] | **Prepared by:** [Name]

### Executive Summary
[2-3 key findings in plain language]

### Key Metrics
| Metric | Current | Prior Period | Trend | Benchmark |
|--------|---------|-------------|-------|-----------|
| [Metric] | [Value] | [Value] | [↑/↓/→] | [Industry benchmark] |

### Detailed Analysis
[Context-rich analysis with charts/tables as appropriate]

### Risk Areas
[Specific teams, roles, or trends that need attention]

### Recommendations
| Priority | Action | Owner | Timeline | Expected Impact |
|----------|--------|-------|----------|----------------|
| 1 | [Specific action] | [Who] | [When] | [What improves] |

### Methodology
[How numbers were calculated, data limitations, caveats]
```

## If Connectors Available

If **~~HRIS** is connected: Pull live data for real-time reporting without CSV uploads
If **~~chat** is connected: Share report summaries in leadership channels
