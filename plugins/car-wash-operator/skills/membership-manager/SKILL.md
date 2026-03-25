---
name: membership-manager
description: >
  Design and optimize unlimited wash membership plans with pricing tiers, retention strategies, and revenue forecasting for car wash businesses. This skill should be used when the user asks to "create a membership plan", "unlimited wash program", "membership pricing", "wash club", "monthly membership", "membership retention", "cancel saves", "membership revenue", "wash pass", "subscription car wash", or needs help building and managing a car wash membership program.
version: 0.1.0
---

# Membership Manager

Design, price, and optimize unlimited wash membership programs to build predictable recurring revenue.

## Membership Tier Design

### Tier Structure (3-4 Tiers)

**Tier 1: Basic / Bronze**
- Includes: Basic exterior wash (entry-level tunnel package)
- Target audience: Budget-conscious, frequent washers
- Price range: $19.99-29.99/month
- Value proposition: "Save after just 2 washes per month"

**Tier 2: Standard / Silver** ← Most Popular (target 50%+ of members here)
- Includes: Mid-tier wash (clear coat, wheel cleaning, underbody)
- Target audience: Regular customers who want a good wash
- Price range: $29.99-39.99/month
- Value proposition: "Our most popular — get the works for one low price"

**Tier 3: Premium / Gold**
- Includes: Top wash package (ceramic, tire shine, rain repellent, hot wax)
- Target audience: Car enthusiasts, pride-of-ownership customers
- Price range: $39.99-49.99/month
- Value proposition: "The best wash we offer — unlimited"

**Tier 4: Ultimate / Platinum** (Optional)
- Includes: Top wash + interior vacuum + mat cleaning
- Target audience: Full-service customers
- Price range: $49.99-69.99/month
- Value proposition: "Inside and out — the complete car care membership"

### Pricing Psychology
- **Anchor high**: Display Platinum first to make Gold look reasonable
- **Highlight middle tier**: Mark as "Most Popular" — drives selection
- **Show per-wash math**: "Regular price $15/wash × 4 = $60. Members pay just $29.99"
- **Family/multi-vehicle discounts**: $5-10 off each additional vehicle — increases retention

## Membership Economics

### Key Metrics

**Redemption rate**: Average washes per member per month
- Industry average: 3.2-4.5 washes/month
- Target for profitability: <4.0 (lower is more profitable per member)
- Seasonal variation: Higher in spring/summer, lower in winter

**Per-wash cost to deliver**: Calculate variable cost per car
- Water: $0.10-0.30
- Chemicals: $0.30-1.50 (varies by package level)
- Utilities: $0.15-0.30
- Labor (per car): $0.50-2.00
- Equipment wear: $0.10-0.25
- **Total variable cost per wash**: $1.15-4.35

**Profitability formula**:
`Monthly Profit per Member = Monthly Fee - (Variable Cost per Wash × Monthly Redemption Rate)`

Example: $34.99 fee - ($2.50 cost × 3.8 washes) = $34.99 - $9.50 = **$25.49 profit per member/month**

### Revenue Forecasting
- **Active members** × **Monthly fee** = Monthly recurring revenue (MRR)
- Account for churn: 5-8% monthly churn is typical
- Net growth = New members - Churned members
- Annual MRR projection: Account for seasonal enrollment patterns

## Retention Strategies

### Churn Prevention (Target: <6% Monthly Churn)

**Cancel save tactics** (when member requests cancellation):
1. Offer a "pause" (1-2 months hold) instead of cancel
2. Offer a tier downgrade (keep them as a member at lower tier)
3. Offer one free month to give them another chance
4. Ask why and address the specific concern
5. Last resort: Offer a reduced rate for 3 months

**Proactive retention**:
- Welcome message after signup (set expectations, explain value)
- Usage tracking — reach out to low-usage members before they cancel
- Birthday/anniversary perks
- Referral bonuses (give a month, get a month)
- Seasonal upgrades ("Try Premium for free this month!")

### Member Engagement
- Monthly newsletter with car care tips
- Member-only events or early access to new services
- Loyalty milestones (100th wash celebration)
- Seasonal contests or giveaways (members only)
- Social media shoutouts for loyal members

For detailed pricing calculators and cancel-save scripts, see `references/membership-operations.md`.
