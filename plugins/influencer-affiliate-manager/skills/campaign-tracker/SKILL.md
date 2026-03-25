---
name: campaign-tracker
description: >
  Track influencer and affiliate campaign performance with ROI calculation, attribution
  modeling, and actionable reporting. This skill should be used when the user asks to
  "track campaign performance", "measure influencer ROI", "campaign report", "how did
  my influencer campaign do", "calculate ROAS", "attribution for influencer spend",
  "campaign analytics", "influencer KPIs", "track conversions from influencers",
  "campaign dashboard", or needs help measuring, reporting on, or optimizing the
  performance of influencer or affiliate marketing campaigns. Also use when setting up
  tracking infrastructure (UTMs, promo codes, pixels) before a campaign launches.
---

# Campaign Tracker

Measure what matters in influencer and affiliate campaigns. Move beyond vanity metrics
to track genuine business impact, attribute conversions accurately, and generate
reports that justify (or redirect) spend.

## Why Measurement Is Hard (and What to Do About It)

The average ROI for influencer marketing is $5.20 per $1 spent, but this average hides
enormous variance. Without proper tracking infrastructure, brands either over-attribute
(counting sales that would have happened anyway) or under-attribute (missing the halo
effect of awareness campaigns). The goal is honest, defensible measurement.

## Pre-Campaign: Tracking Infrastructure Setup

Before any content goes live, establish tracking for every creator:

### Required Tracking Elements

1. **Unique UTM Links per Creator**
   - Format: `?utm_source=influencer&utm_medium=[platform]&utm_campaign=[campaign-name]&utm_content=[creator-handle]`
   - Use a URL shortener or branded link service for clean sharing
   - Track via Google Analytics 4 or equivalent

2. **Unique Promo Codes per Creator**
   - Format: [CREATORNAME] or [CREATORNAME15] (with discount %)
   - Track in ecommerce platform (Shopify, WooCommerce, etc.)
   - Set expiration dates aligned with campaign windows

3. **Affiliate Tracking Links** (if using affiliate model)
   - Set up through affiliate platform (Impact, Refersion, PartnerStack, etc.)
   - Configure attribution windows (typical: 30-day click, 1-day view)
   - Enable cross-device tracking where available

4. **Landing Pages** (for high-budget campaigns)
   - Dedicated landing pages per creator or per campaign
   - Track page-level conversion rates independently

### Attribution Windows

| Campaign Type     | Click Window | View Window | Rationale                          |
|-------------------|-------------|-------------|-------------------------------------|
| Impulse Purchase  | 7 days      | 1 day       | Short decision cycle                |
| Considered Purchase| 30 days    | 7 days      | Research and comparison phase       |
| B2B / SaaS        | 60 days     | 14 days     | Long sales cycles                   |
| Subscription      | 30 days     | 7 days      | Trial periods factor in             |

## Campaign KPI Framework

Organize metrics into three tiers based on campaign objectives.

### Tier 1: Awareness KPIs (Top of Funnel)
- **Impressions**: Total content views across all placements
- **Reach**: Unique accounts that saw the content
- **Video Views**: Completion rates at 25%, 50%, 75%, 100%
- **CPM**: Cost per 1,000 impressions — benchmark: $5-20 for Instagram, $8-25 for TikTok
- **Share of Voice**: Brand mentions relative to competitors during campaign period
- **Brand Lift**: Pre/post survey measuring awareness, consideration, favorability

### Tier 2: Engagement KPIs (Middle of Funnel)
- **Engagement Rate**: (likes + comments + shares + saves) ÷ impressions × 100
- **CPE**: Cost per engagement — benchmark: $0.10-$1.00
- **Click-Through Rate**: Link clicks ÷ impressions × 100
- **CPC**: Cost per click — benchmark: $0.50-$5.00
- **Save Rate**: Saves ÷ impressions (indicates high purchase intent)
- **Comment Sentiment**: Positive/negative/neutral ratio in comments

### Tier 3: Conversion KPIs (Bottom of Funnel)
- **Conversions**: Sales, sign-ups, downloads attributed to influencer content
- **Conversion Rate**: Conversions ÷ clicks × 100
- **CPA**: Cost per acquisition — varies heavily by industry
- **ROAS**: Revenue attributed ÷ total influencer spend
- **iROAS**: Incremental ROAS — isolates revenue that wouldn't have happened otherwise
- **Customer Lifetime Value**: Average LTV of influencer-acquired customers vs. other channels
- **New Customer %**: Percentage of influencer-driven purchases from first-time buyers

## Attribution Models

Read `references/attribution-models.md` for detailed implementation of each model.

**Quick guide to choosing a model:**

| Model              | Best For                        | Complexity |
|--------------------|---------------------------------|------------|
| Last-Click         | Simple ecommerce campaigns      | Low        |
| First-Touch        | Awareness-focused campaigns     | Low        |
| Linear             | Multi-touch campaigns           | Medium     |
| Time-Decay         | Long consideration periods      | Medium     |
| Marketing Mix Model| Enterprise, multi-channel       | High       |
| Incrementality     | Proving true influencer impact   | High       |

## Report Templates

### Quick Campaign Summary (Weekly Check-In)

```
## [Campaign Name] — Week [N] Update

**Period:** [Date Range] | **Budget Spent:** $[amount] of $[total]

### Headlines
- [Top metric movement]
- [Creator highlight or concern]
- [Action item for next week]

### Top-Line Metrics
| Metric        | This Week | Cumulative | Target | On Track? |
|---------------|-----------|------------|--------|-----------|
| Impressions   |           |            |        |           |
| Engagements   |           |            |        |           |
| Clicks        |           |            |        |           |
| Conversions   |           |            |        |           |
| ROAS          |           |            |        |           |

### Creator Leaderboard (Top 5 by [primary KPI])
| Creator | [Primary KPI] | Spend | Efficiency |
|---------|---------------|-------|------------|
```

### Full Campaign Report (Post-Campaign)

```
## [Campaign Name] — Final Report

### Executive Summary
[2-3 sentences: objective, result, key takeaway]

### Campaign Overview
- Objective: [awareness / engagement / conversion / hybrid]
- Duration: [start] to [end]
- Total Budget: $[amount]
- Creators Activated: [count]
- Total Deliverables: [count] across [platforms]

### Performance vs. Objectives
| KPI              | Target    | Actual    | % of Target | Industry Avg |
|------------------|-----------|-----------|-------------|--------------|
| [KPI 1]          |           |           |             |              |

### Creator Performance Breakdown
[Table ranking all creators by primary KPI with spend, efficiency metrics]

### Content Performance
- Top-performing content: [description + metrics]
- Content themes that resonated: [list]
- Content that underperformed: [description + hypothesis for why]

### ROI Analysis
- Total Spend: $[amount]
- Attributed Revenue: $[amount]
- ROAS: [X]x
- Estimated iROAS: [X]x
- CPA: $[amount]
- CPM: $[amount]

### Recommendations for Next Campaign
1. [Recommendation with supporting data]
2. [Recommendation with supporting data]
3. [Recommendation with supporting data]

### Creators to Re-Engage / Drop
- Re-engage: [names + rationale]
- Consider dropping: [names + rationale]
```

## Real-Time Monitoring Triggers

Flag these situations for immediate attention during active campaigns:
- Creator engagement drops >40% from their baseline
- Negative comment sentiment exceeds 20% on sponsored content
- Click-to-conversion rate drops below 0.5% (possible bot traffic)
- Content is posted without proper FTC disclosure
- Creator posts competitor content during exclusivity window
