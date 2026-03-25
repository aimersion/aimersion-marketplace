---
name: satisfaction-monitor
description: >
  Track customer satisfaction trends and flag at-risk accounts. This skill should be used when the user asks to
  "check customer satisfaction", "review CSAT scores", "analyze NPS trends", "find at-risk accounts",
  "which customers are unhappy", "satisfaction report", "churn risk analysis", or needs help identifying
  patterns in customer feedback, sentiment, and engagement signals.
version: 0.1.0
---

# Satisfaction Monitor

Track customer satisfaction trends, identify at-risk accounts, and surface actionable insights from support interactions.

## Satisfaction Signals

Monitor these signals to assess customer health:

### Quantitative Metrics

| Metric | Healthy | Warning | Critical |
|--------|---------|---------|----------|
| CSAT Score | > 4.0 / 5 | 3.0–4.0 | < 3.0 |
| NPS | > 30 | 0–30 | < 0 |
| First Response Time | Within SLA | 1–2x SLA | > 2x SLA |
| Resolution Time | Within SLA | 1–2x SLA | > 2x SLA |
| Ticket Volume (per account) | Stable or declining | 25%+ increase | 50%+ increase |
| Reopen Rate | < 10% | 10–20% | > 20% |

### Qualitative Signals

Watch for these in ticket content and customer communications:

- **Churn language**: "cancel", "looking at alternatives", "not worth it", "switching to [competitor]"
- **Escalation fatigue**: "I've contacted support 3 times about this", "this is still not fixed"
- **Sentiment shift**: previously positive customer becoming terse or formal
- **Executive involvement**: C-suite or VP reaching out directly on support issues
- **Social media mentions**: negative posts about the product
- **Reduced engagement**: fewer logins, declining usage metrics

## At-Risk Account Assessment

When analyzing an account, evaluate across these dimensions:

### Risk Score Framework

| Dimension | Weight | Scoring |
|-----------|--------|---------|
| Recent CSAT / NPS | 30% | 1 (critical) to 5 (healthy) |
| Ticket volume trend | 20% | 1 (spiking) to 5 (stable/declining) |
| Unresolved issues | 20% | 1 (multiple P1/P2 open) to 5 (none) |
| Sentiment analysis | 15% | 1 (angry/threatening churn) to 5 (positive) |
| Engagement trend | 15% | 1 (declining rapidly) to 5 (growing) |

**Overall Health**:
- **4.0–5.0**: Healthy — maintain current engagement
- **3.0–3.9**: Monitor — proactive outreach recommended
- **2.0–2.9**: At Risk — escalate to account management
- **< 2.0**: Critical — executive intervention needed

## Trend Analysis

When reviewing satisfaction trends, examine:

1. **Time-based patterns** — are scores declining week-over-week or month-over-month?
2. **Issue-based patterns** — is dissatisfaction concentrated around specific features or issue types?
3. **Segment patterns** — are certain customer tiers or plans disproportionately affected?
4. **Agent patterns** — are resolution rates or CSAT scores varying significantly by agent?
5. **Product release correlation** — did satisfaction change after a recent release?

## Output Formats

### Individual Account Health Check

```
**Account**: [Name]
**Plan/Tier**: [details]
**Health Score**: [X.X / 5.0] — [Healthy / Monitor / At Risk / Critical]

**Key Metrics**:
- CSAT (last 30 days): [score]
- Open Tickets: [count] ([P1/P2 count] high priority)
- Ticket Trend: [stable / increasing / decreasing]
- Last Interaction: [date]

**Risk Signals**:
- [Signal 1]
- [Signal 2]

**Recommended Action**: [specific next step]
```

### Team Satisfaction Report

```
**Period**: [date range]

**Overall Metrics**:
- Avg CSAT: [score] ([trend])
- Avg NPS: [score] ([trend])
- Avg First Response: [time] (SLA: [target])
- Avg Resolution: [time] (SLA: [target])

**At-Risk Accounts**: [count]
- [Account 1]: [brief reason]
- [Account 2]: [brief reason]

**Top Issues Driving Dissatisfaction**:
1. [Issue] — [count] tickets, avg CSAT [score]
2. [Issue] — [count] tickets, avg CSAT [score]

**Recommendations**:
1. [Action item]
2. [Action item]
```

## Reference Material

For detailed metric definitions and benchmark data, see `references/metrics-guide.md`.
