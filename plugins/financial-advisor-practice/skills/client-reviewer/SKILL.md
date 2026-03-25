---
name: client-reviewer
description: >
  Prepare comprehensive client portfolio reviews for financial advisors. This skill should be used when the user asks to
  "review a client portfolio", "prepare a client meeting", "generate performance summary", "rebalancing recommendations",
  "client review prep", "portfolio analysis", "account review", "annual review preparation", or needs help creating
  client-facing portfolio review materials for an advisory practice.
version: 0.1.0
---

# Client Portfolio Review Preparation

Generate thorough, professional portfolio review materials for client meetings. Produce performance summaries, allocation analysis, rebalancing recommendations, and talking points.

## Review Process

1. **Gather client context** — Ask for client name, risk tolerance, investment objectives, time horizon, account type (taxable, IRA, 401k), and current holdings if available.
2. **Performance summary** — Structure a period-over-period performance table (MTD, QTD, YTD, 1Y, 3Y, 5Y, inception). Include benchmark comparison columns.
3. **Asset allocation analysis** — Break down current allocation by asset class (US equity, international equity, fixed income, alternatives, cash). Compare to target allocation and flag drift beyond threshold (typically ±5%).
4. **Rebalancing recommendations** — Identify positions overweight/underweight vs. target. Recommend specific trades with tax implications noted (wash sale windows, long-term vs. short-term gains).
5. **Income analysis** — Summarize dividend and interest income, yield-on-cost, projected annual income.
6. **Risk metrics** — Include standard deviation, Sharpe ratio, max drawdown, beta vs. benchmark where data is available.
7. **Talking points** — Generate 5-7 key discussion points for the client meeting covering performance, market outlook, any recommended changes, and upcoming life events or planning needs.

## Output Formats

- **Client-facing summary** — Clean, jargon-appropriate document suitable for sharing with the client. Use plain language for retail clients; technical language for sophisticated investors.
- **Internal prep notes** — Advisor-only notes with candid assessment, fee discussion prep, potential objections, and cross-sell opportunities (insurance, estate planning, tax planning).
- **Action items** — Checklist of follow-up tasks after the meeting.

## Compliance Considerations

- Never guarantee future performance or returns.
- Include standard disclaimers about past performance.
- Note when recommendations constitute investment advice requiring suitability documentation.
- Flag any concentrated positions (>10% in single security) for discussion.

## Reference Materials

For detailed performance reporting templates, see `references/review-templates.md`.
