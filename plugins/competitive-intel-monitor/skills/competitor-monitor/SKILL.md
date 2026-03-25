---
name: competitor-monitor
description: >
  Research competitors and generate actionable competitive intelligence briefs with strategic
  recommendations. This skill should be used when the user asks to "research competitors",
  "competitive analysis", "what are my competitors doing", "competitor intel", "monitor competitors",
  "competitive brief", "competitor research", "who are we competing against", "competitive landscape",
  or needs insight into competitor positioning, messaging, strategy, recent moves, or market activity.
  Also trigger when the user mentions a specific company name and wants to understand their competitive
  position, or when preparing for board meetings, strategy sessions, or quarterly planning that
  involves competitive context. Even if the user doesn't say "competitive" explicitly — if they're
  asking about another company's strategy, product, or market position, this skill applies.
version: 2.0.0
---

# Competitor Monitor

Research competitors and synthesize actionable competitive intelligence. The goal is signal, not noise — every finding should connect to a "so what" and a "now what."

## Philosophy: Intelligence, Not Information

The #1 complaint about CI tools is drowning in data without actionable insight. Every piece of intelligence you surface should pass the **So-What Test**:

1. **What happened?** (the fact)
2. **Why does it matter?** (the impact on the user's business)
3. **What should they do about it?** (the recommended action)

If you can't answer all three, it's information, not intelligence. Don't include it.

## Core Workflow

### Step 1: Scope the Intelligence Request

Before researching, clarify:
- **Which competitors?** Confirm the list (suggest focusing on top 3-5 that appear in most competitive deals)
- **What's the context?** Are they preparing for a specific deal, a strategy session, a board meeting, or ongoing monitoring?
- **What decisions will this inform?** Positioning changes? Product roadmap? Pricing? Sales enablement?

The context determines depth and focus. A pre-deal brief is different from a quarterly strategic review.

### Step 2: Multi-Source Research

For each competitor, investigate systematically across these dimensions. Use web search as the primary engine, supplemented by connected social tools.

#### Company & Product Intelligence
- Website: headline value proposition, key messaging changes, new feature announcements
- Product pages: feature set, packaging, target personas
- Job postings: reveal strategic priorities (hiring ML engineers = AI push; hiring enterprise sales = moving upmarket)
- Press releases and news: funding, partnerships, acquisitions, executive changes
- Tech stack signals: integration pages, partner ecosystems, API documentation

#### Go-to-Market Intelligence
- Pricing (if publicly available): tiers, value metrics, discounting signals
- Sales approach: self-serve vs. sales-led, free trial availability, demo requirements
- Content strategy: blog topics, publishing cadence, lead magnets, webinar themes
- Event presence: conferences, sponsorships, speaking engagements
- Customer case studies: which verticals, company sizes, and use cases they highlight

#### Social & Sentiment Intelligence
- Search X for recent posts from/about the competitor — look for product launches, complaints, praise
- Check LinkedIn for content themes, engagement levels, thought leadership angles, hiring velocity
- Review Facebook for customer engagement patterns and sentiment
- Look for review sites (G2, Capterra, TrustRadius) for customer praise and complaints
- Search for community discussions (Reddit, forums) about the competitor

#### Strategic Signals
- Funding and financial health indicators
- Leadership changes and what they signal about direction
- Partnership announcements and ecosystem plays
- Patent filings or research publications
- Geographic expansion signals

### Step 3: Pattern Analysis

Don't just list facts — synthesize patterns:

- **Positioning convergence/divergence**: Are competitors moving toward or away from your user's positioning?
- **Investment signals**: Where are competitors doubling down? (headcount, product areas, markets)
- **Vulnerability windows**: Recent leadership changes, product pivots, or customer complaints that create openings
- **Emerging threats**: New entrants, adjacent players expanding into the space, or technology shifts

### Step 4: Deliver the Brief

Use the structure below. Adapt depth based on context — a quick pre-deal check needs 1 page, a quarterly review needs 5-10.

## Intelligence Brief Structure

```
# Competitive Intelligence Brief
Date: [date]
Prepared for: [user's business]
Context: [what decision this informs]
Confidence Level: [High/Medium/Low based on source quality]

## Executive Summary
[3-5 sentences: the most important things to know RIGHT NOW. Lead with the
most actionable insight, not background.]

## Competitor Profiles

### [Competitor 1]
**One-Line Positioning**: [how they describe themselves]
**Target Buyer**: [who they're selling to]
**Key Differentiators**: [what they claim sets them apart]

**Recent Moves** (last 30-90 days):
- [Move 1]: [What happened] → [Why it matters] → [What to do about it]
- [Move 2]: [What happened] → [Why it matters] → [What to do about it]

**Strengths** (be honest — underestimating competitors loses deals):
- [Strength with specific evidence]

**Vulnerabilities** (where they're exposed):
- [Vulnerability with specific evidence]

**Customer Sentiment** (from reviews, social, community):
- Top praise: [what customers love]
- Top complaints: [what customers hate — these are your opportunities]

### [Competitor 2]
[Same structure]

## Comparative Landscape

| Dimension | Your Business | Competitor 1 | Competitor 2 | Competitor 3 |
|-----------|--------------|-------------|-------------|-------------|
| Positioning | | | | |
| Target segment | | | | |
| Pricing model | | | | |
| Key strength | | | | |
| Key vulnerability | | | | |
| Recent momentum | ↑/→/↓ | ↑/→/↓ | ↑/→/↓ | ↑/→/↓ |

## Strategic Opportunities
[2-3 specific opportunities the user can act on, each with:
- The opportunity
- Why now (what competitive dynamic creates the window)
- Suggested action with timeline]

## Threats to Watch
[1-2 competitive moves or market shifts that could impact the user,
with early warning indicators to monitor]

## Recommended Actions (Prioritized)
[3-5 specific, time-bound actions ranked by impact and urgency]
1. **[Action]** — [Why] — [Timeline: This week / This month / This quarter]
2. ...

## Intelligence Gaps
[What we couldn't determine and how to fill the gaps]

## Sources & Confidence
[List key sources with dates. Flag any intelligence that's >90 days old
as potentially stale.]
```

## Ongoing Monitoring Framework

For users who want regular competitive tracking, suggest monitoring these signals on a weekly/monthly cadence:

**Weekly Signals** (high-velocity, catch fast):
- New blog posts, product announcements, social media campaigns
- Pricing or packaging changes
- Customer reviews and sentiment shifts
- Job postings (especially leadership and new function hires)

**Monthly Signals** (strategic, requires deeper analysis):
- Content strategy shifts and messaging evolution
- Market positioning changes
- Partnership and integration announcements
- Competitive win/loss patterns from deal data

**Quarterly Signals** (landscape-level, inform strategy):
- Market share movement estimates
- Funding, M&A, and financial health changes
- Technology and platform shifts
- Regulatory or macro-environmental changes

## Quality Standards

- **Source everything**: Every claim should trace back to a source with a date
- **Flag staleness**: If the best available information is >90 days old, say so explicitly
- **Distinguish fact from inference**: "They launched X" is fact; "This suggests they're pivoting to Y" is inference — label accordingly
- **Be honest about gaps**: Saying "we don't know" is more valuable than speculation presented as fact
- **Competitive empathy**: Describe competitor strengths accurately — sales reps who underestimate competitors lose deals

## References

For deeper frameworks, read:
- `references/analysis-frameworks.md` — Porter's Five Forces, SWOT, Strategic Group Analysis, Positioning Maps
- For battlecard creation, use the `battlecard-builder` skill
- For win/loss analysis, use the `win-loss-analyzer` skill
- For pricing deep-dives, use the `pricing-intelligence` skill
- For market trend scanning, use the `market-trend-analyzer` skill
