---
description: Generate headcount, attrition, diversity, or org health reports
argument-hint: "<report type — headcount, attrition, diversity, org health>"
---

# /people-report

Generate people analytics reports from your HR data. See the **people-analytics** skill for metric definitions, analysis frameworks, and benchmarks.

## Usage

```
/people-report $ARGUMENTS
```

## Report Types

**Headcount**: Current org snapshot — by team, location, level, tenure
**Attrition**: Turnover analysis — voluntary/involuntary, by team, trends, 90-day attrition
**Diversity**: Representation metrics — by level, team, pipeline, pay equity
**Org Health**: Span of control, management layers, team sizes, flight risk, single points of failure

## What I Need From You

Upload a CSV or describe your data. Helpful fields:
- Employee name/ID, department, team
- Title, level, location
- Start date, end date (if applicable)
- Manager, compensation (if relevant)
- Demographics (for diversity reports, if available)

## Output

```markdown
## People Report: [Type] — [Date]

### Executive Summary
[2-3 key takeaways in plain language]

### Key Metrics
| Metric | Value | Trend | Benchmark |
|--------|-------|-------|-----------|
| [Metric] | [Value] | [↑/↓/→] | [Industry] |

### Detailed Analysis
[Charts, tables, and narrative]

### Risk Areas
[Specific teams or trends that need attention]

### Recommendations
| Priority | Action | Owner | Timeline |
|----------|--------|-------|----------|
| 1 | [Specific action] | [Who] | [When] |

### Methodology
[How the numbers were calculated, any caveats]
```
