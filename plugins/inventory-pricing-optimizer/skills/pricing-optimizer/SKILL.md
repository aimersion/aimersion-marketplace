---
name: pricing-optimizer
description: >
  Recommend pricing strategies using cost-plus, competitive, and value-based
  frameworks to maximize profit margins. This skill should be used when the user
  asks to "set prices", "pricing strategy", "am I charging enough", "price my
  products", "competitive pricing", "profit margins", "price optimization",
  "should I raise prices", "markdown strategy", "discount pricing", "value
  pricing", "cost-plus pricing", or needs help determining the right price
  for their products or services.
version: 2.0.0
---

# Pricing Optimizer

Analyze current pricing, benchmark against competitors, and recommend pricing strategies that maximize margins while remaining competitive.

## Why This Matters

Pricing is the single most powerful lever for profitability. A 1% price increase can boost profits by 8-11% (more than a 1% increase in volume, which only boosts profits by 3-4%). Yet most small businesses set prices by gut feel or simply matching competitors, leaving significant profit on the table.

## Core Workflow

1. **Gather pricing data** — current prices, costs, competitor prices
2. **Calculate current margins** — gross margin, markup, contribution margin
3. **Analyze pricing position** — where you sit vs. competitors and value
4. **Recommend strategy** — the right pricing framework for each product
5. **Model scenarios** — what happens to profit at different price points
6. **Present recommendations** — with clear rationale and expected impact

## Pricing Frameworks

### Framework 1: Cost-Plus Pricing

The simplest approach — calculate your costs and add a margin.

```
Selling Price = Total Cost × (1 + Markup %)

Total Cost = Product Cost + (Allocated Overhead per Unit)
```

**Industry Typical Markups:**
| Industry | Typical Markup | Resulting Margin |
|----------|---------------|-----------------|
| Retail (general) | 50-100% | 33-50% |
| Food/Restaurant | 200-300% | 67-75% |
| Clothing | 100-200% | 50-67% |
| Electronics | 30-50% | 23-33% |
| Services | 100-300% | 50-75% |
| Specialty/Luxury | 200-500% | 67-83% |

**When to use:** When costs are predictable, competition is limited, or as a pricing floor.
**Limitation:** Ignores what customers are willing to pay and what competitors charge.

### Framework 2: Competitive Pricing

Set prices relative to competitors.

```
Three positioning options:
- Below market: Price 5-15% under competitor average (volume strategy)
- At market: Match competitor pricing (parity strategy)
- Above market: Price 10-30% above competitors (premium strategy)
```

**When to use:** Commodity products, price-sensitive markets, or when competitors set customer expectations.

**How to research competitor prices:**
- Check competitor websites directly
- Visit their physical locations
- Use web search for "[competitor] + pricing" or "[product] + price"
- Ask customers what they've been quoted elsewhere
- Monitor competitor promotions and sales

### Framework 3: Value-Based Pricing

Price based on the value customers perceive, not what it costs you.

```
Value Price = Customer's Willingness to Pay

Determined by:
- What problem does it solve? (bigger problem = higher value)
- What alternatives exist? (fewer alternatives = higher value)
- What's the cost of NOT buying? (high cost = higher value)
- How unique is your offering? (more unique = higher value)
```

**When to use:** Differentiated products, expertise-based services, or when you solve a painful problem.
**Value signals:** Customers buy without negotiating, no price complaints in reviews, competitors charge more for similar products.

### Framework 4: Psychological Pricing

Use pricing psychology to influence perception.

| Tactic | Example | Why It Works |
|--------|---------|-------------|
| **Charm pricing** | $9.99 vs. $10.00 | Left-digit effect — $9 feels much less than $10 |
| **Prestige pricing** | $100 vs. $99.99 | Round numbers signal quality/premium |
| **Anchor pricing** | "Was $80, now $49" | Original price creates value perception |
| **Bundle pricing** | "3 for $25" (vs. $10 each) | Perceived savings drives higher purchase volume |
| **Tiered pricing** | Good/Better/Best | Middle tier sells most (compromise effect) |

### Framework 5: Dynamic/Markdown Pricing

Adjust prices based on demand, inventory, and time.

```
Markdown triggers:
- Seasonal products approaching end of season
- Overstock (more than 3 months of supply)
- Dead stock (zero sales in 60-90 days)
- Competitor price drops
- Demand declining below forecast

Markdown ladder:
Week 1-2: 10-15% off (test the market)
Week 3-4: 20-30% off (accelerate movement)
Week 5-6: 40-50% off (clear remaining stock)
Week 7+: 60-70% off or bundle/liquidate
```

## Margin Analysis

### Key Calculations

```
Gross Margin % = (Selling Price - Cost) / Selling Price × 100
Markup % = (Selling Price - Cost) / Cost × 100
Contribution Margin = Selling Price - Variable Costs
Break-even Units = Fixed Costs / Contribution Margin per Unit
```

**Margin vs. Markup Conversion:**

| Markup % | Gross Margin % |
|----------|---------------|
| 25% | 20% |
| 33% | 25% |
| 50% | 33% |
| 100% | 50% |
| 200% | 67% |
| 300% | 75% |

## Pricing Analysis Output Format

```
# Pricing Analysis Report
Date: [date]
Products analyzed: [X]

## Current Pricing Summary

| Product | Cost | Current Price | Margin % | Markup % | Status |
|---------|------|--------------|----------|----------|--------|
| [name] | $[X] | $[X] | [X]% | [X]% | [Under/At/Over market] |

## Competitive Positioning
[Where your prices sit vs. competitors]

## Recommendations

### Raise Prices (Margin Opportunity)
| Product | Current | Recommended | Impact |
|---------|---------|------------|--------|
| [name] | $[X] | $[X] | +$[X]/month profit |

### Lower Prices (Volume Opportunity)
| Product | Current | Recommended | Expected Volume Lift |
|---------|---------|------------|---------------------|
| [name] | $[X] | $[X] | +[X]% units |

### Markdown for Clearance
| Product | Current | Recommended | Reason |
|---------|---------|------------|--------|
| [name] | $[X] | $[X] | [overstock/seasonal/dead] |

## Profit Impact Summary
Current monthly profit: $[X]
Projected monthly profit after changes: $[X]
Change: +$[X] ([X]% improvement)
```

## References

See `references/pricing-frameworks.md` for detailed pricing strategy examples by industry.
