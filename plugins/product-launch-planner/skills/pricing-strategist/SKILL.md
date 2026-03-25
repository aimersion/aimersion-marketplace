---
name: pricing-strategist
description: >
  Build product launch pricing strategies using psychological frameworks including
  Van Westendorp, anchoring, tiered/decoy pricing, early bird structures, penetration
  vs. skimming, and competitive positioning. This skill should be used when the user
  asks to "price my product", "pricing strategy", "how much should I charge", "early
  bird pricing", "launch discount", "tiered pricing", "freemium pricing", "competitive
  pricing", "pricing psychology", "Van Westendorp", "price sensitivity", or needs help
  with any aspect of setting prices for a product launch. Also trigger when someone
  mentions "monetization strategy", "pricing page", "pricing tiers", or "willingness to pay".
version: 2.0.0
---

# Pricing Strategist

Build launch pricing strategies grounded in psychological research and real-world data. Price is the #1 lever for launch success — getting it wrong (too high kills adoption, too low kills margins and perceived quality) accounts for a significant share of launch failures.

## Gathering Context

Before recommending a pricing strategy, understand:

1. **Product type** — SaaS, physical product, digital product, service, marketplace
2. **Target customer** — consumer vs. business, price sensitivity level, budget range
3. **Competitive landscape** — who are the alternatives and what do they charge?
4. **Cost structure** — what are your unit costs / COGS / marginal costs?
5. **Launch goal** — maximize revenue, maximize adoption, capture market share, validate willingness to pay?
6. **Existing data** — any customer research, surveys, or beta pricing experiments?

## Pricing Strategy Selection

### Strategy 1: Penetration Pricing
**When to use:** Crowded market, need rapid adoption, network effects matter, you can afford lower margins initially.
- Launch 15-30% below competitor median price
- Plan price increases over 6-12 months as you build market share
- Example: Disney+ launched at $7.99 vs. Netflix's $13.99; raised to $13.99+ after building subscriber base
- Best for: SaaS, marketplace products, subscription services

### Strategy 2: Price Skimming
**When to use:** Truly differentiated product, strong brand, early adopters willing to pay premium.
- Launch at premium price, capturing high willingness-to-pay customers first
- Gradually lower price to reach broader market
- Example: Apple iPhone launches at $999+, older models drop to $699-$799
- Best for: Innovative hardware, luxury/premium brands, status products

### Strategy 3: Freemium / Free Trial
**When to use:** Product value increases with usage, low marginal cost, strong upgrade path.
- Free tier attracts users; premium features/limits drive conversion
- Target: 2-5% free-to-paid conversion rate (industry median)
- Key: Free tier must be genuinely useful but create natural upgrade triggers
- Best for: SaaS, mobile apps, developer tools

### Strategy 4: Early Bird / Tiered Launch Pricing
**When to use:** Building urgency during launch window, rewarding early adopters.
Read `references/pricing-frameworks.md` for the detailed tier structures and discount percentages.

### Strategy 5: Value-Based Pricing
**When to use:** Clear, quantifiable ROI for the customer.
- Price based on value delivered, not cost-plus
- If your product saves customers $10,000/year, pricing at $1,000-$2,000/year is compelling
- Requires understanding of customer economics

## Psychological Pricing Tactics

Apply these to any base strategy:

### Charm Pricing
- Prices ending in .99 are perceived as ~20% cheaper ($9.99 vs $10.00)
- Use for consumer products where price sensitivity is high
- Avoid for luxury/premium positioning (use round numbers instead: $50, $100)

### Anchoring
- Show the most expensive option first to make others seem reasonable
- Display "compare at" or original prices alongside launch prices
- Example: Show $1,000 annual plan first, then $99/month feels like a deal

### Decoy Pricing
- Add an intentionally less-attractive option to steer toward your target tier
- Classic example: Small $3.50, Medium $6.00, Large $6.50 → Large becomes obvious choice
- The decoy should be close in price to the target but clearly inferior in value

### Tiered Pricing (Good/Better/Best)
- Always offer 3 tiers — the middle tier typically gets 60-70% of purchases
- Price the middle tier at your target price point
- Make the jump from tier 1 to tier 2 feel like great value
- Make tier 3 clearly premium with 2-3 exclusive features

### Odd/Even Pricing
- Odd numbers ($47, $97, $197) signal value and deals
- Even numbers ($50, $100, $200) signal quality and premium
- Match to your positioning

## Competitive Pricing Analysis

When the user provides competitor data or asks for competitive pricing:

1. **Map the market:** List all alternatives with their pricing (including free alternatives)
2. **Position on the spectrum:** Where does the user's product sit in terms of features/quality?
3. **Find the gap:** Identify underserved price points where no strong competitor exists
4. **Recommend positioning:** Price 5-15% below the nearest competitor with similar features (for penetration) or 20-30% above (for premium positioning)

## Output Format

Present pricing recommendations as:

```
# Pricing Strategy: [Product Name]

## Recommended Strategy: [Strategy Name]

### Why This Strategy
[2-3 sentences explaining why this fits their product, market, and goals]

### Pricing Structure
[Specific prices with tiers, discounts, or progression]

### Psychological Tactics Applied
- [Tactic 1]: [How it's applied]
- [Tactic 2]: [How it's applied]

### Competitive Positioning
[How this pricing compares to alternatives]

### Launch Pricing Timeline
- Launch Day: [Price] (with [discount/structure])
- Week [X]: [Price change]
- Month [X]: [Full price or next phase]

### Metrics to Track
- Conversion rate by tier
- Average revenue per user
- Price sensitivity signals (cart abandonment at pricing page)

### Risks & Mitigations
- [Risk 1]: [Mitigation]
- [Risk 2]: [Mitigation]
```

## References

See `references/pricing-frameworks.md` for Van Westendorp methodology, early bird tier structures, and detailed pricing psychology examples.
