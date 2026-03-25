---
name: list-segmenter
description: >
  Recommend audience segmentation strategies based on subscriber behavior and attributes.
  This skill should be used when the user asks to "segment my list", "audience segmentation",
  "target specific subscribers", "personalize emails by segment", "create subscriber groups",
  "improve email targeting", "behavioral segmentation", or needs help dividing their email audience
  into meaningful groups for more relevant messaging.
version: 2.0.0
---

# List Segmentation Strategist

Design email segmentation strategies that measurably improve engagement, deliverability, and revenue. Segmented campaigns generate 50% more clicks and up to 760% more revenue than unsegmented sends.

## Critical Principle: Segmentation Without Different Content is Pointless

Every segment MUST receive materially different content. If two segments get the same email, merge them. Segmentation is not about creating groups — it's about sending different messages to different people based on what they care about and where they are.

## Step 1: Identify Business Type

Segmentation strategy varies dramatically by business type. Start here:

### Ecommerce Segmentation Playbook

**Tier 1 — Implement immediately (highest ROI):**

| Segment | Definition | Content Strategy | Expected Lift |
|---------|-----------|-----------------|---------------|
| **Cart abandoners** | Added to cart, didn't purchase (last 24-72 hrs) | Product reminder → social proof → incentive | 5-15% cart recovery |
| **Browse abandoners** | Viewed product page 2+ times, no cart add | "Still looking at [product]?" + alternatives | 2-5% conversion |
| **First-time buyers** | 1 purchase, last 30 days | Thank you → how to use → complementary products | 25% repeat purchase lift |
| **VIP/High-value** | Top 10% by lifetime spend OR 3+ purchases | Exclusive access, early sales, loyalty rewards | 20% higher AOV |
| **Win-back** | Purchased before, no purchase in 60-90 days | "We miss you" → best sellers → incentive | 5-10% reactivation |

**Tier 2 — Implement after Tier 1 is working:**

| Segment | Definition | Content Strategy |
|---------|-----------|-----------------|
| **Discount-only buyers** | Only purchase with coupon codes | Reduce discount frequency, increase perceived value |
| **Category affinity** | 2+ purchases or 5+ views in same category | Category-specific recommendations and launches |
| **Seasonal buyers** | Purchase pattern tied to seasons/holidays | Pre-season reminders, gift guides |
| **High AOV vs. Low AOV** | Above/below median order value | Premium products vs. value bundles |

### SaaS / B2B Segmentation Playbook

**Tier 1 — Implement immediately:**

| Segment | Definition | Content Strategy | Expected Lift |
|---------|-----------|-----------------|---------------|
| **Trial users (active)** | In trial, logged in last 7 days | Feature education, use case tips, upgrade nudges | 15-30% trial conversion |
| **Trial users (inactive)** | In trial, no login in 7+ days | "Need help getting started?" + quick-win tutorial | Recover 10-20% of stalled trials |
| **New customers (0-30 days)** | Recently converted | Onboarding sequence, setup guides, check-ins | 30% reduction in early churn |
| **Power users** | Top 20% by feature usage or login frequency | Advanced tips, beta access, referral asks | 2x referral rate |
| **At-risk customers** | Declining usage (30-day trend down >40%) | Proactive check-in, support offer, value reinforcement | 15-25% churn reduction |

**Tier 2:**

| Segment | Definition | Content Strategy |
|---------|-----------|-----------------|
| **By company size** | SMB vs. mid-market vs. enterprise | Different features, case studies, and pricing emphasis |
| **By role** | Decision-maker vs. end-user vs. admin | Strategic content vs. tactical how-to vs. admin guides |
| **By industry** | Cluster by NAICS or self-declared | Industry-specific case studies, templates, benchmarks |
| **Expansion-ready** | Approaching plan limits or using advanced features | Upgrade path education, ROI calculations |

### Media / Newsletter Segmentation Playbook

| Segment | Definition | Content Strategy |
|---------|-----------|-----------------|
| **New subscribers (0-14 days)** | Recently joined | Welcome sequence, best-of content, set expectations |
| **Highly engaged** | Opens/clicks 80%+ of emails | Exclusive content, early access, community invites |
| **Topic-specific** | Clicks concentrate on specific topics | Topic-focused digests or spin-off newsletters |
| **Fading** | Was engaged, declining opens/clicks over 30 days | Content refresh, feedback request, preference center nudge |
| **Referral sources** | Segment by how they found you | Tailor onboarding to their entry point context |

## Step 2: RFM Analysis (For Ecommerce)

RFM (Recency, Frequency, Monetary) is the most powerful ecommerce segmentation model:

| Score | Recency | Frequency | Monetary |
|-------|---------|-----------|----------|
| 5 | Last 7 days | 10+ purchases | Top 10% spend |
| 4 | 8-30 days | 5-9 purchases | Top 25% spend |
| 3 | 31-60 days | 3-4 purchases | Top 50% spend |
| 2 | 61-90 days | 2 purchases | Bottom 50% spend |
| 1 | 90+ days | 1 purchase | Bottom 25% spend |

**Key RFM segments to action:**

| RFM Score | Label | Strategy |
|-----------|-------|----------|
| 5-5-5 | Champions | Loyalty program, exclusive access, referral asks |
| 5-4-4 to 5-5-4 | Loyal | Upsell, new product launches, reviews |
| 5-1-1 to 5-2-2 | New Customers | Onboarding, second-purchase incentive |
| 3-3-3 to 4-4-4 | Potential Loyalists | Personalized recommendations, loyalty program invite |
| 1-1-1 to 2-2-2 | Lost/At-Risk | Win-back sequence → sunset if no response |

## Step 3: Engagement-Based Segmentation (Universal)

Every list, regardless of business type, should have engagement tiers:

| Segment | Definition | Strategy | Frequency |
|---------|-----------|----------|-----------|
| **Highly engaged** | Clicked in last 30 days | Full content calendar, upsells, beta offers | Up to 4x/week |
| **Engaged** | Opened in last 30 days, clicked in last 60 | Standard content, moderate promotional | 2-3x/week |
| **Cooling** | No click in 30-60 days | Re-engagement nudge, ask for preferences | 1x/week max |
| **Cold** | No open/click in 60-90 days | Win-back sequence (3-4 emails) | Sequence only |
| **Dead** | No engagement in 90+ days | Final re-permission email → suppress | One last email, then remove |

**Why engagement segmentation matters for deliverability:**
Gmail, Outlook, and Yahoo use recipient engagement to decide inbox placement. Sending to unengaged subscribers tells ISPs your emails aren't wanted, which hurts deliverability for your engaged subscribers too. Suppressing your bottom 20% of engagers can improve inbox placement for the remaining 80% by 10-20%.

## Step 4: Sunset Policy (Non-Negotiable)

Every list needs a sunset policy. This is the single most neglected practice in email marketing.

**Recommended sunset flow:**

```
Day 0: Subscriber hits 90-day no-engagement threshold
  → Enter re-engagement sequence (3-4 emails over 14 days)
Day 14: Did they engage with any re-engagement email?
  ├── YES → Return to active segments, reset engagement clock
  └── NO → Send final "Should we stop emailing you?" email
Day 21: Did they click the "Keep me subscribed" link?
  ├── YES → Return to active, monitor closely
  └── NO → Suppress. Remove from all marketing sends.
```

**Exception:** Customers with active subscriptions/accounts should get a longer runway (180 days) and a human-triggered check-in before sunsetting.

**What "suppress" means:** Move to a suppression list, NOT delete. You may need the record for:
- Preventing re-subscription without consent
- Legal compliance (GDPR right to object records)
- Transactional emails (order confirmations, account notices)

## Step 5: Compliance Considerations

### GDPR (EU/UK subscribers)
- Consent must be explicit, documented, and revocable
- Subscribers can request: what data you hold, correction, deletion, portability
- You cannot segment based on data the subscriber hasn't consented to you collecting
- Legitimate interest can apply to existing customers, but document your reasoning
- Pre-checked consent boxes are illegal

### CAN-SPAM (US subscribers)
- Opt-out must be honored within 10 business days
- Every email must include physical mailing address
- No misleading "From" names or subject lines
- Purchased lists are technically legal but practically disastrous for deliverability

### CCPA (California subscribers)
- Right to know what data is collected and how it's used
- Right to delete personal information
- Right to opt-out of data sales
- Must disclose data collection at or before the point of collection

### CASL (Canadian subscribers)
- Express consent required before sending commercial emails
- Consent records must be maintained
- Implied consent expires after 2 years of no business relationship

## Step 6: Build the Segmentation Plan

For each recommended segment, document:

1. **Segment name**: Clear label (used in ESP and internal comms)
2. **Definition**: Exact criteria with AND/OR logic (e.g., "Purchased in last 90 days AND clicked email in last 30 days AND order value > $50")
3. **Estimated size**: Percentage of total list
4. **Content strategy**: What type of content, what tone, what offers
5. **Frequency**: How often to email this segment (engaged = more; cooling = less)
6. **Exclusions**: Who should NOT be in this segment (e.g., exclude recent purchasers from cart abandon)
7. **Overlap rules**: What happens when someone qualifies for multiple segments (priority order)
8. **Entry/exit triggers**: How do subscribers move between segments
9. **Measurement**: A/B test plan comparing segmented vs. unsegmented sends

## Output Format

1. **Data audit summary** — What data is available and gaps to fill
2. **Business-type recommendation** — Which playbook applies
3. **Recommended segments** — 4-8 segments with full documentation per Step 6
4. **Implementation priority** — Ordered by expected impact (start with highest-ROI segments)
5. **Quick wins** — 2-3 segments creatable with existing data TODAY
6. **Sunset policy** — Specific thresholds and flow for this business
7. **Measurement plan** — Before/after metrics to prove segmentation ROI

## Key Principles

- Start with 3-4 segments, then refine. Over-segmentation with small lists (<5,000 per segment) hurts statistical reliability.
- Segment membership should be dynamic — subscribers move between segments as behavior changes.
- Test segmentation impact with a holdout group (10% of list gets the unsegmented version).
- Review and adjust segments quarterly. Customer behavior changes; your segments should too.
- The goal is not "more segments" — it's "more relevant emails for each subscriber."
