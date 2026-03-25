---
name: market-trend-analyzer
description: >
  Scan for market trends, technology shifts, and competitive landscape changes that affect
  strategic positioning. This skill should be used when the user asks to "scan for market
  trends", "market analysis", "industry trends", "what's happening in our market", "market
  landscape", "competitive landscape", "industry outlook", "market shifts", "emerging threats",
  "technology trends", "macro trends", "market scan", "PEST analysis", or needs to understand
  broad market dynamics, emerging competitors, technology shifts, or regulatory changes affecting
  their competitive position. Also trigger when someone is preparing for strategic planning,
  board meetings, or investor updates that require market context. If the user asks about
  general market conditions, industry direction, or "what's changing", this skill applies.
version: 2.0.0
---

# Market Trend Analyzer

Scan the competitive landscape for macro and micro trends that should inform strategic decisions. This skill focuses on trends that actually change competitive dynamics — not generic industry news.

## Philosophy: Trends That Matter

A useful trend analysis answers: "What is changing, why, and what should we do about it?" Most market trend content is filler — vague observations like "AI is growing" without connecting to specific competitive implications. Every trend surfaced should have a clear "so what" for the user's business.

## Analysis Workflow

### Step 1: Define the Scope

Before scanning, understand what the user needs:
- **Industry/market**: What specific market or segment?
- **Time horizon**: Near-term (6 months), medium-term (1-2 years), or long-term (3-5 years)?
- **Decision context**: What strategic decision will this inform?
- **Known competitors**: Who are the current players to track?

### Step 2: Multi-Framework Scanning

Use multiple frameworks to ensure comprehensive coverage. Not every framework applies to every market — select the most relevant ones.

#### PEST Analysis (Macro-Environmental Trends)

| Factor | What to Look For | Competitive Implications |
|--------|-----------------|------------------------|
| **Political** | Regulation, trade policy, government spending, data sovereignty requirements | Creates barriers or opens doors; compliance as competitive advantage |
| **Economic** | Interest rates, funding environment, customer budget cycles, M&A activity | Affects buying behavior, competitor financial health, market consolidation |
| **Social** | Buyer behavior shifts, workforce changes, demographic trends, remote work | Changes how customers buy and what they value |
| **Technological** | New platforms, AI/ML advances, infrastructure shifts, open-source movement | Creates disruption opportunities and threats |

#### Porter's Five Forces (Industry Structure Shifts)

For each force, assess whether it's strengthening or weakening:

- **Direct rivalry**: Getting more or less intense? New competitors entering? Consolidation happening?
- **New entrants**: Are barriers to entry rising or falling? Is the market attractive enough to attract new players?
- **Substitutes**: Are new alternatives emerging? (Including AI-powered substitutes, DIY tools, or "do nothing")
- **Supplier power**: Are key platform dependencies changing? (API changes, pricing shifts, policy updates)
- **Buyer power**: Are customers getting more or less informed? More or fewer options?

#### Competitive Landscape Dynamics

Track these specific competitive signals:

**Market structure changes:**
- M&A activity (who's acquiring whom and why)
- Funding rounds (who's getting capital and at what valuation)
- Market entries (new competitors from adjacent markets)
- Market exits (companies shutting down, pivoting, or being acquired)

**Positioning shifts:**
- Competitors moving upmarket or downmarket
- New category creation attempts
- Messaging shifts that signal strategic changes
- Platform vs. point-solution evolution

**Technology shifts:**
- New capabilities enabled by technology changes
- Open-source alternatives emerging
- API/platform changes affecting the ecosystem
- AI/automation changing the competitive basis

### Step 3: Trend Impact Assessment

For each significant trend, assess using this framework:

| Dimension | Assessment |
|-----------|-----------|
| **Certainty** | How confident are we this trend is real? (High/Medium/Low) |
| **Timeframe** | When will this meaningfully impact the market? (Now/6mo/1-2yr/3-5yr) |
| **Magnitude** | How big is the potential impact? (Transformative/Significant/Moderate/Minor) |
| **Direction** | Is this an opportunity or threat for the user? (Or both) |
| **Actionability** | Can the user respond to this? How? |

### Step 4: Strategic Implications

Connect trends to specific strategic implications:

- **Positioning**: Does this trend require repositioning?
- **Product**: Does this create new requirements or make existing features less relevant?
- **Go-to-market**: Does this change how customers buy or what channels work?
- **Pricing**: Does this affect pricing power or model viability?
- **Competitive**: Does this help or hurt specific competitors?

### Step 5: Deliver the Analysis

## Market Trend Report Structure

```
# Market Trend Analysis: [Industry/Market]
Date: [date]
Time horizon: [near/medium/long-term]
Context: [what decision this informs]

## Executive Summary
[5-7 sentences: The 2-3 most important trends and their strategic
implications. Lead with what requires action, not background.]

## Macro-Environmental Trends (PEST)

### Political & Regulatory
[Trend]: [What's happening] → [Impact on competitive landscape]
**Certainty**: High/Med/Low | **Timeframe**: [when] | **Action needed**: [yes/no/monitor]

### Economic
[Trend]: [What's happening] → [Impact on competitive landscape]
**Certainty**: High/Med/Low | **Timeframe**: [when] | **Action needed**: [yes/no/monitor]

### Social & Behavioral
[Trend]: [What's happening] → [Impact on competitive landscape]
**Certainty**: High/Med/Low | **Timeframe**: [when] | **Action needed**: [yes/no/monitor]

### Technological
[Trend]: [What's happening] → [Impact on competitive landscape]
**Certainty**: High/Med/Low | **Timeframe**: [when] | **Action needed**: [yes/no/monitor]

## Competitive Landscape Shifts

### Market Structure
[M&A, funding, entries, exits — what's changed and what it means]

### Positioning Movement
[Who's repositioning and why — what does it tell us about market direction?]

### Emerging Competitors
[New entrants to watch, with assessment of their potential threat level]

## Industry Forces Assessment

| Force | Current State | Direction | Implication |
|-------|--------------|-----------|-------------|
| Direct rivalry | [Low/Med/High] | [↑/→/↓] | [what it means] |
| New entrants | [Low/Med/High] | [↑/→/↓] | [what it means] |
| Substitutes | [Low/Med/High] | [↑/→/↓] | [what it means] |
| Supplier power | [Low/Med/High] | [↑/→/↓] | [what it means] |
| Buyer power | [Low/Med/High] | [↑/→/↓] | [what it means] |

## Trend Impact Matrix

| Trend | Certainty | Timeframe | Magnitude | Opportunity or Threat |
|-------|-----------|-----------|-----------|----------------------|
| [Trend 1] | High | Now | Significant | Opportunity |
| [Trend 2] | Medium | 6 months | Transformative | Threat |
| [Trend 3] | High | 1-2 years | Moderate | Both |

## Strategic Implications

### Must Act Now
[Trends requiring immediate response — with specific recommended actions]

### Plan for Next Quarter
[Trends to build into planning — with preparation steps]

### Monitor Closely
[Trends that could become critical — with early warning indicators]

### Background Awareness
[Trends worth knowing but not yet requiring action]

## Recommended Actions (Prioritized)
1. **[Action]** — [Why now] — [Expected outcome]
2. **[Action]** — [Why now] — [Expected outcome]
3. **[Action]** — [Why now] — [Expected outcome]

## Intelligence Gaps
[What we couldn't determine and suggested next steps to fill gaps]

## Sources
[List key sources with dates and reliability assessment]
```

## Ongoing Monitoring

For continuous market awareness, suggest this monitoring cadence:

**Weekly** (15-minute scan):
- Industry news and competitor announcements
- Funding and M&A activity
- New product launches in the space

**Monthly** (1-hour review):
- Technology trend developments
- Competitive positioning changes
- Customer behavior shifts
- New entrant assessment

**Quarterly** (half-day deep dive):
- Full PEST update
- Porter's Five Forces reassessment
- Competitive landscape map refresh
- Strategic implications review for leadership

## References

See `references/trend-monitoring-sources.md` for recommended monitoring sources by industry and signal type.
