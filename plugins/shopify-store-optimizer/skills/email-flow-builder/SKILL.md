---
name: email-flow-builder
description: >
  Build complete Shopify email marketing flows — abandoned cart recovery sequences, post-purchase flows,
  welcome series, win-back campaigns, browse abandonment, and VIP/loyalty programs. Includes subject lines,
  timing, discount escalation strategies, and segmentation logic. Use this skill when the user asks to
  "create email flows", "abandoned cart emails", "post-purchase sequence", "welcome series",
  "win-back campaign", "email automation", "Klaviyo flows", "email templates for Shopify",
  "recover abandoned carts", "customer retention emails", or anything involving ecommerce email
  marketing sequences. Also trigger when users mention low email recovery rates, wanting to reduce
  cart abandonment, or needing to improve customer retention through email.
version: 2.0.0
---

# Email Flow Builder

Build high-converting email marketing flows for Shopify stores. Every flow includes timing, subject lines, content structure, discount strategy, and segmentation logic.

## Why This Matters

Email automation generates up to 30x more revenue per recipient than one-off campaigns. Abandoned cart recovery alone can recapture 5-15% of lost revenue. Multi-email welcome sequences generate 90% more revenue than single emails. Yet most Shopify stores either have no flows or use generic templates that underperform.

## Core Flows (Priority Order)

Build these flows in this order — each one compounds on the last:

1. **Abandoned Cart Recovery** — Recovers 5-15% of lost carts (highest immediate ROI)
2. **Welcome Series** — Converts new subscribers at 10-30% (captures first-time buyers)
3. **Post-Purchase Flow** — Drives reviews + repeat purchases (30x revenue per recipient)
4. **Browse Abandonment** — Recovers window shoppers ($3.09 revenue per email)
5. **Win-Back Campaign** — Reactivates lapsed customers (52% higher open rates when automated)
6. **VIP/Loyalty Program** — Maximizes lifetime value from best customers (1.8x higher ROI)

## Flow Templates

### 1. Abandoned Cart Recovery (3-Email Sequence)

**Trigger:** Customer adds items to cart but doesn't complete checkout

| Email | Timing | Subject Line | Content | Discount |
|-------|--------|-------------|---------|----------|
| 1 | 1 hour | "You left something behind" | Gentle reminder with product image, cart link | None |
| 2 | 24 hours | "Still thinking about [Product]?" | Value reinforcement, social proof, objection handling | Free shipping or 10% off (carts over $50) |
| 3 | 48-72 hours | "Last chance — your cart expires soon" | Urgency + strongest offer | 15-20% off (carts over $150) |

**Discount Escalation by Cart Value:**
- Under $50: No discount. Reminder + urgency only.
- $50-$150: Free shipping offer in email 2, 10% off in email 3
- Over $150: 10% off in email 2, 15-20% off in email 3 + personal outreach option

**Segmentation Logic:**
- First-time vs. returning customers (returning get shorter sequence)
- High-AOV carts get priority treatment and personal tone
- Repeat abandoners get different messaging (not the same sequence again)

**Key Metrics:** Open rate target 40-50%, recovery rate 5-15%, revenue per email sent

### 2. Welcome Series (4-Email Sequence)

**Trigger:** New email subscriber (popup, footer signup, checkout opt-in)

| Email | Timing | Subject Line | Content |
|-------|--------|-------------|---------|
| 1 | Immediately | "Welcome to [Brand] — here's what we're about" | Brand story, mission, what to expect, CTA to shop |
| 2 | 24 hours | "See what [X,000] customers love about us" | Bestseller showcase, star ratings, customer testimonials |
| 3 | 48 hours | "Your guide to [solving their problem]" | Educational content, product showcase, usage tips |
| 4 | 72 hours | "Your exclusive offer expires tonight" | 15-20% first-purchase discount with deadline |

**Incentive Progression:** No discount → Social proof → Education → Strongest offer with urgency

**Segmentation:** Different sequences for organic vs. paid acquisition sources. Paid traffic subscribers often need more trust-building.

**Key Metrics:** Open rate target 40-50%, click rate 10-15%, first-purchase conversion 10-30%

### 3. Post-Purchase Flow (5-Email Sequence)

**Trigger:** Customer completes purchase

| Email | Timing | Subject | Content |
|-------|--------|---------|---------|
| 1 | Immediately | "Order confirmed — here's what's next" | Order details, tracking info, what to expect |
| 2 | Shipping day | "Your [Product] is on its way!" | Tracking link, estimated delivery, excitement builder |
| 3 | 3-7 days post-delivery | "Quick tips to get the most from [Product]" | Usage tips, care instructions, educational content |
| 4 | 7-14 days post-delivery | "How's your [Product]? We'd love your feedback" | Review request with direct link, simple star rating CTA |
| 5 | 14-30 days | "Based on your purchase, you might love these" | Cross-sell recommendations, bundle offer, loyalty invite |

**Segmentation:** Different cross-sell recommendations by product category. First-time buyers get loyalty program invite. Repeat buyers get VIP tier upgrade offer.

**Key Metrics:** Order confirmation open rate 40-60%, review request response 1-3%, cross-sell conversion 2-5%

### 4. Browse Abandonment (1-2 Email Sequence)

**Trigger:** Customer views product page but doesn't add to cart (requires email identification)

| Email | Timing | Subject | Content |
|-------|--------|---------|---------|
| 1 | 2-4 hours | "Still browsing? Here's another look at [Product]" | Product image, benefits summary, social proof |
| 2 (optional) | 24 hours | "People who viewed [Product] also loved these" | Related product recommendations |

**Important:** Only send to identified visitors (logged in or previously captured email). Never discount in browse abandonment — save discounts for cart abandonment.

**Key Metrics:** Open rate 45-50%, click rate 5-10%, revenue per email ~$3.09

### 5. Win-Back Campaign (3-4 Email Sequence)

**Trigger:** Customer hasn't purchased in 60-180 days (adjust by product lifecycle)

| Email | Timing | Subject | Incentive |
|-------|--------|---------|-----------|
| 1 | Day 1 | "We miss you, [Name]!" | None — friendly check-in, new products showcase |
| 2 | Day 3-4 | "Here's what's new since your last visit" | Free shipping or 10% off |
| 3 | Day 7-10 | "A special offer just for you — 15% off" | 15-20% discount with 5-day deadline |
| 4 | Day 14-17 | "Last chance: your exclusive offer expires tonight" | Strongest offer (20-25% off) — final email |

**Segmentation by Inactivity:**
- 60 days inactive: Friendly nudge, no discount
- 90 days: 10-15% discount
- 6 months: 15-25% discount
- 12+ months: Strongest offer or sunset from list

**Key Metrics:** Open rate 30-40%, reactivation rate 5-10%

### 6. VIP/Loyalty Program Emails

**Trigger:** Customer reaches spending threshold or purchase frequency milestone

**Tier Structure (recommended):**
- Bronze: 2+ purchases or $100+ lifetime spend
- Silver: 5+ purchases or $500+ lifetime spend
- Gold: 10+ purchases or $1,000+ lifetime spend

**VIP Email Types:**
- Tier upgrade congratulations (with new perks listed)
- Early access to new products (24-48 hours before public)
- Exclusive discount codes (VIP-only offers)
- Birthday/anniversary rewards
- Surprise gifts at milestone orders

## Subject Line Best Practices

For all flows, follow these principles:

- **Personalize**: Use first name and/or product name
- **Keep short**: 30-50 characters for mobile preview
- **Create curiosity**: Questions and incomplete thoughts outperform statements
- **Test emoji sparingly**: One emoji max, test with vs. without
- **Avoid spam triggers**: No ALL CAPS, excessive punctuation, or "FREE!!!"

**High-performing patterns:**
- "[Name], you left something behind"
- "Still thinking about [Product]?"
- "Your exclusive offer expires at midnight"
- "Quick question about your [Product]"
- "We picked these just for you"

## Email Content Structure Template

Every email should follow this structure:

```
FROM: [Brand Name] (not a person's name for transactional flows)
SUBJECT: [30-50 chars, personalized]
PREVIEW TEXT: [40-90 chars, complements subject — not repeating it]

--- EMAIL BODY ---

[HERO IMAGE — Product photo or lifestyle image]

[HEADLINE — 5-10 words, benefit or curiosity driven]

[BODY — 50-100 words max. One clear message per email.]

[CTA BUTTON — Single, prominent, action-specific text]
  "Complete Your Purchase" / "Shop Now" / "Claim Your Offer"

[SUPPORTING CONTENT — Optional: testimonial, product details, or urgency element]

[FOOTER — Unsubscribe link, physical address, brand social links]
```

## Deliverable Format

When building flows, present each one as:

```
FLOW: [Flow Name]
TRIGGER: [What starts this flow]
AUDIENCE: [Who receives it]
EMAILS: [Number in sequence]

[Table with timing, subject, content, incentive for each email]

SEGMENTATION: [How to split audiences within this flow]
KEY METRICS: [What to measure for success]
PLATFORM NOTES: [Klaviyo/Shopify Email/Omnisend setup tips]
```

## References

For detailed email templates with full copy examples, read `references/email-templates.md`.
