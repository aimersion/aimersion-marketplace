---
name: pricing-intelligence
description: >
  Research and analyze competitor pricing, packaging, and monetization strategies. This skill
  should be used when the user asks to "research competitor pricing", "pricing intelligence",
  "compare pricing", "what do competitors charge", "pricing analysis", "pricing strategy",
  "how should we price", "competitor pricing page", "pricing tiers", "pricing comparison",
  "value metric analysis", or needs to understand how competitors monetize, package their products,
  or position on price. Also trigger when someone is preparing pricing changes, evaluating
  their own pricing strategy, or needs to understand the pricing landscape in their market.
  Even if the user just mentions a competitor and asks about their pricing or packaging model,
  this skill applies.
version: 2.0.0
---

# Pricing Intelligence

Research and analyze competitor pricing strategies to inform your own pricing decisions and arm sales teams with pricing-specific competitive intelligence.

## Why Pricing Intelligence Is Hard

Unlike product features or messaging, pricing is the competitor data point most likely to be hidden, misleading, or contextual. Public pricing pages show list prices, not what customers actually pay. Enterprise pricing is almost always negotiated. Discounting practices are invisible from the outside.

This means pricing intelligence requires triangulation — combining multiple signals to build a picture, rather than trusting any single data point.

## Pricing Research Workflow

### Step 1: Scope the Analysis

Clarify what the user needs:
- **Comparison**: "How does our pricing compare to [competitor]?"
- **Market map**: "What's the pricing landscape in our space?"
- **Strategic input**: "We're considering a pricing change — what should we know?"
- **Sales enablement**: "How do we handle pricing objections against [competitor]?"

### Step 2: Gather Pricing Data

Research across multiple sources to triangulate:

#### Primary Sources (Highest Confidence)
- **Pricing pages**: Tier names, prices, feature sets per tier, billing frequency
- **Pricing calculators**: If available, model different scenarios
- **Free trial/freemium**: What's included, limitations, upgrade triggers
- **Published case studies**: Sometimes reference deal sizes or price points

#### Secondary Sources (Medium Confidence)
- **G2/Capterra reviews**: Reviewers sometimes mention pricing
- **Job postings**: Sales compensation ranges can signal deal sizes
- **Press releases**: Funding announcements sometimes reference revenue/pricing
- **Analyst reports**: Industry reports may include pricing benchmarks

#### Tertiary Sources (Lower Confidence — Note Accordingly)
- **Community discussions**: Reddit, forums, social media mentions of pricing
- **Sales intelligence**: If the user has CRM data with competitive pricing notes
- **Win/loss interview data**: Buyers sometimes share pricing details from evaluations

### Step 3: Analyze the Pricing Model

Structure the analysis around these dimensions:

#### Pricing Architecture

| Element | Description | Why It Matters |
|---------|-------------|----------------|
| **Value metric** | What unit do they charge on? (per user, per transaction, per GB, flat fee) | Reveals who their ideal customer is and how they scale revenue |
| **Tier structure** | How many tiers? What differentiates them? | Shows market segmentation strategy |
| **Billing model** | Monthly, annual, multi-year? Annual discount %? | Indicates cash flow strategy and lock-in approach |
| **Entry point** | Free tier, free trial, demo-required? | Reveals go-to-market motion (PLG vs. sales-led) |
| **Expansion model** | How do customers grow into higher spend? | Shows land-and-expand strategy |

#### Pricing Positioning

Map where each competitor sits:

```
                    Premium
                       |
                       |
    Niche ─────────────┼─────────────── Broad
                       |
                       |
                    Budget
```

#### Feature-to-Tier Mapping

| Feature | Their Free | Their Mid | Their Top | Our Equivalent |
|---------|-----------|-----------|-----------|----------------|
| [Feature 1] | ❌ | ✅ | ✅ | [which tier] |
| [Feature 2] | ✅ (limited) | ✅ | ✅ | [which tier] |
| [Feature 3] | ❌ | ❌ | ✅ | [which tier] |

### Step 4: Strategic Analysis

Go beyond data to insight:

#### Value Metric Analysis
- What are they charging for, and does it align with the value customers receive?
- Is there a mismatch between their value metric and what buyers actually care about? (This is an opportunity)
- How does their value metric affect price perception at different scales?

#### Price Anchoring
- What's their "anchor" price — the one designed to make another option look reasonable?
- Do they use decoy pricing (a tier designed to push customers to a specific option)?
- How does their pricing page layout influence perception?

#### Discounting Signals
- Do they offer annual discounts? How steep? (Large discounts = pressure to close annual)
- Have they changed pricing recently? (Price increases = confidence; decreases = pressure)
- Do they have a startup/nonprofit program? (Indicates willingness to discount for market share)

#### Total Cost of Ownership
- What hidden costs exist beyond the list price? (Implementation, training, integrations, overages)
- How does the TCO compare at different scales? (SMB, mid-market, enterprise)
- Are there usage-based components that create unpredictable bills?

### Step 5: Deliver the Analysis

## Pricing Intelligence Report Structure

```
# Pricing Intelligence: [Competitor Name]
Date: [date]
Data freshness: [date of most recent pricing data]
Confidence: [High/Medium/Low — based on source quality]

## Summary
[3 sentences: Their pricing model, how it compares to yours, and the key
strategic implication]

## Pricing Overview

### Their Model
**Value metric**: [per user/per transaction/flat/etc.]
**Tiers**: [tier names and price points if known]
**Billing**: [monthly/annual/both — annual discount if known]
**Entry point**: [free tier/trial/demo-required]

### Side-by-Side Comparison

| Dimension | Us | Them | Advantage |
|-----------|-----|------|-----------|
| Entry price | $X/mo | $Y/mo | [who wins and why] |
| Mid-tier | $X/mo | $Y/mo | [who wins and why] |
| Enterprise | Custom | Custom | [what we know] |
| Value metric | [ours] | [theirs] | [implications] |
| Annual discount | X% | Y% | [implications] |

### Feature-Tier Mapping
[Table showing which features appear at which tier for each competitor]

## Strategic Analysis

### Where We Win on Pricing
[Scenarios/segments where our pricing is advantageous]

### Where They Win on Pricing
[Scenarios/segments where their pricing is advantageous — be honest]

### TCO Comparison
[Total cost of ownership analysis at 3 scales: small, medium, large customer]

### Pricing Trend
[Any recent changes, direction of movement, signals of future changes]

## Sales Implications

### When Price Comes Up
[Specific talk tracks for common pricing scenarios]

**"They're cheaper"**: [Response with value framing]
**"Can you match their price?"**: [Response with differentiation]
**"Your pricing is confusing"**: [Response with simplification]

### Negotiation Intelligence
[What we know about their discounting behavior and deal structure]

## Recommendations
[2-3 specific, actionable pricing-related recommendations]

## Data Sources & Confidence
[List sources with dates and confidence levels]
```

## Pricing Monitoring Cadence

Competitive pricing changes less frequently than content or messaging, but changes are high-impact:

- **Monthly**: Quick check of pricing pages for changes in tiers, prices, or packaging
- **Quarterly**: Deeper analysis incorporating win/loss pricing feedback and market trends
- **Annually**: Full pricing landscape review with strategic recommendations

## References

See `references/pricing-frameworks.md` for additional pricing analysis frameworks and value metric evaluation methods.
