---
name: data-storyteller
description: >
  This skill should be used when the user asks to "turn data into a story",
  "write an executive presentation", "present findings to leadership", "make data
  compelling", "structure insights for a client", "create a narrative around data",
  "write an insight summary", or needs help communicating analytical results to
  non-technical audiences.
version: 0.1.0
---

# Data Storytelling

The art and science of communicating data findings as compelling narratives that drive action.

## The Core Principle

Data without narrative is just numbers. A data story answers three questions:
1. **What happened?** (the finding)
2. **Why does it matter?** (the so-what)
3. **What should we do?** (the recommendation)

## The Data Story Framework

### SCR: Situation → Complication → Resolution

Every great data story follows this structure:

**Situation:** Establish shared context. What was the world like before the analysis? This should be undeniable to the audience.

**Complication:** Introduce the finding that disrupts the status quo. This is the insight — the thing that changes what the audience thought they knew.

**Resolution:** Provide a clear path forward. The recommendation that follows directly from the complication.

**Example:**
- Situation: "We've been growing 15% month-over-month for the past year."
- Complication: "But our data shows that 80% of that growth is coming from a single customer segment that's starting to churn at twice the rate of others."
- Resolution: "We need to immediately launch a retention program for this segment while diversifying our acquisition strategy."

## The Pyramid Principle

Lead with the conclusion, support with evidence. (Inverse of scientific papers.)

```
HEADLINE: The single most important takeaway (1 sentence)
├── Supporting Point 1 (with data)
├── Supporting Point 2 (with data)
└── Supporting Point 3 (with data)
    ├── Detail
    └── Detail
```

**Wrong:** "We analyzed 6 months of customer data across 14 segments and found..."
**Right:** "We're losing $2M annually to preventable churn — and we know exactly who's at risk."

## Translating Data to Business Language

| Data Language | Business Language |
|---------------|------------------|
| "Statistical significance p<0.05" | "We're confident this isn't random" |
| "Correlation coefficient 0.82" | "These two things move together reliably" |
| "95th percentile response time 4.2s" | "1 in 20 customers waits over 4 seconds" |
| "Cohort retention dropped 12pp" | "Customers who joined in Q3 are leaving faster" |
| "Standard deviation of $450" | "Results vary by about $450 either way" |

## Visualization for Storytelling

Choose charts based on the story they tell, not the data they display:

**To show change over time:** Line chart with annotation on the inflection point
**To show ranking:** Horizontal bar chart, sorted, top-to-bottom
**To show part-to-whole:** Stacked bar or treemap (not pie)
**To show correlation:** Scatter plot with regression line
**To show distribution:** Histogram with mean/median marked
**To show comparison:** Side-by-side bars with delta labels

**Annotation is the storyteller's superpower:** Add text directly on charts at the key moment. "Pricing change" on the date it happened. "Goal line" on the target. "This customer segment" with an arrow on the scatter plot.

## Executive Presentation Structure (10-Slide Formula)

1. **The headline** — your SCR in three sentences
2. **Business context** — why this analysis was needed
3. **Methodology** (optional, 1 slide, often in appendix)
4. **Finding 1** — with supporting chart
5. **Finding 2** — with supporting chart
6. **Finding 3** — with supporting chart
7. **The so-what** — implications of these findings together
8. **Recommendations** — 2-4 specific actions
9. **Next steps** — owners, timeline, dependencies
10. **Appendix** — backup slides for anticipated questions

## Handling Uncertainty

Never hide uncertainty — acknowledge and frame it:

- "Based on the data available, the most likely explanation is..."
- "We have high confidence in X. We're less certain about Y because..."
- "This finding is directionally correct; we recommend validating with [additional data]."
- "Absence of evidence is not evidence of absence — we need [data] to be certain."

## Reference Files

- **`references/storytelling-frameworks.md`** — narrative templates, presentation outlines, slide-by-slide guides
