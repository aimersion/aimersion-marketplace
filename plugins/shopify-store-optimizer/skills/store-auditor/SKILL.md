---
name: store-auditor
description: >
  Run a comprehensive Shopify store audit covering speed, UX, checkout, SEO, conversion rate,
  analytics, and mobile experience. Generates a prioritized action plan with benchmarks.
  Use this skill when the user asks to "audit my store", "check my Shopify site", "store health check",
  "why are my conversions low", "conversion rate audit", "site audit", "what's wrong with my store",
  "Shopify store review", "improve my store", or anything involving evaluating a Shopify store's
  performance against best practices. Also trigger when users share their store URL and want feedback,
  or mention their conversion rate is below 2%.
version: 2.0.0
---

# Shopify Store Auditor

Run a systematic store audit that identifies the highest-impact fixes and generates a prioritized action plan. This isn't a generic checklist — it's ordered by conversion impact so merchants fix what matters most first.

## Why This Matters

Most stores underperform not because of traffic, but because of fixable UX and conversion problems. The average Shopify store converts at 1.5-2.5%, but top stores hit 4-5%+. The difference is usually a handful of specific, fixable issues. This audit finds them.

## Audit Workflow

1. **Gather Context** — Store URL, current conversion rate, monthly traffic, primary product category, biggest concern
2. **Run Audit** — Systematically evaluate each area against benchmarks
3. **Score** — Rate each area on a 1-5 scale
4. **Prioritize** — Rank fixes by conversion impact × implementation ease
5. **Deliver** — Present findings with specific, actionable recommendations

## Audit Areas (in Priority Order)

### 1. Page Speed & Core Web Vitals

**Why first:** A 1-second delay cuts conversions by 7%. Speed affects every visitor.

**Benchmarks:**
- LCP (Largest Contentful Paint): < 2.5 seconds
- CLS (Cumulative Layout Shift): < 0.1
- INP (Interaction to Next Paint): < 200ms
- Overall load time: < 3 seconds on mobile

**Common Shopify Speed Killers:**
- Uncompressed product images (should be 70-100KB each)
- Too many apps injecting scripts (audit app list — remove unused)
- Render-blocking CSS/JS from apps
- No lazy loading on below-fold images
- Heavy theme with unused features
- No CDN optimization

**Check:** Run the store URL through PageSpeed Insights and report scores.

### 2. Mobile Experience

**Why second:** 60-65% of Shopify traffic is mobile, but mobile converts 30-50% worse than desktop.

**Check these on mobile:**
- Does the Add to Cart button appear without scrolling?
- Are tap targets at least 44x44px?
- Is there a sticky Add to Cart bar on scroll?
- Can you complete checkout without zooming?
- Do images load quickly on 4G?
- Is the navigation thumb-friendly?
- Does the site have horizontal scrolling (it shouldn't)?

### 3. Checkout Optimization

**Why third:** 70% of shoppers abandon at checkout. Small fixes here = big revenue gains.

**Check:**
- Is Shop Pay enabled? (72% conversion increase vs. regular checkout)
- Are express options available? (Apple Pay, Google Pay, PayPal)
- Is guest checkout enabled? (Forcing account creation = major abandonment cause)
- How many form fields? (Fewer = better)
- Are shipping costs visible before checkout? (Surprise costs = #1 abandonment reason)
- Is there a one-page checkout option?

**Benchmark:** Shop Pay users complete checkout at 1.72x the rate of guest checkout. Returning Shop Pay users hit ~90% completion vs. 30-45% for guest checkout.

### 4. Product Pages

**Check against the product page audit checklist** in the product-page-optimizer skill, or use `references/audit-checklist.md`.

Key questions:
- Do descriptions lead with benefits or features?
- Are there 5+ product images per product?
- Is social proof (reviews/ratings) visible above the fold?
- Is the CTA button the most prominent element on the page?
- Are trust signals (guarantee, shipping, returns) placed near the CTA?

### 5. Homepage & Navigation

**Homepage (visitors form opinions in 0.05 seconds):**
- Is the value proposition clear before scrolling?
- Is there a clear primary CTA?
- Are bestsellers/featured products visible?
- Is the hero image compelling and fast-loading?
- Is there social proof on the homepage?

**Navigation:**
- Maximum 5-7 top-level categories
- Can visitors find any product in 3 clicks or less?
- Is the search bar prominent and functional?
- Does search handle typos and synonyms?
- Are breadcrumbs implemented?

### 6. Trust & Social Proof

**Check:**
- Customer reviews enabled and displayed? (Products with reviews convert 270% better)
- Star ratings visible on collection pages?
- Trust badges near checkout?
- Clear return/refund policy?
- Contact information easily findable?
- SSL certificate active?
- Physical address or "About Us" with real team photos?

### 7. SEO & Technical

**Check:**
- Unique title tags and meta descriptions per page?
- Product schema markup implemented?
- Sitemap.xml submitted to Google Search Console?
- No duplicate content issues (common with Shopify tags/filters)?
- Image alt text on all product images?
- Blog with regular content?
- Internal linking between products and collections?
- 404 page customized with navigation?

### 8. Email Capture & Retention

**Check:**
- Email popup or signup form present?
- Incentive for signup (discount, free shipping)?
- Abandoned cart email flow active?
- Welcome series active?
- Post-purchase flow active?
- Are repeat customers getting different messaging than new customers?

**Benchmark:** ~30% email reachable rate is target. Three-email sequences produce 6.5x more revenue than single emails.

### 9. Analytics Setup

**Check:**
- Google Analytics 4 properly installed?
- Conversion funnel tracking (view → add to cart → checkout → purchase)?
- Facebook/Meta Pixel installed?
- Server-side tracking implemented? (Better data quality)
- UTM parameters used consistently in marketing?

## Scoring Template

Rate each area 1-5:

```
SHOPIFY STORE AUDIT REPORT
Store: [URL]
Date: [Date]
Auditor: Claude (Aimersion AI)

SCORES (1-5):
┌─────────────────────────┬───────┬──────────┐
│ Area                    │ Score │ Priority │
├─────────────────────────┼───────┼──────────┤
│ Page Speed              │  /5   │ Critical │
│ Mobile Experience       │  /5   │ Critical │
│ Checkout Optimization   │  /5   │ Critical │
│ Product Pages           │  /5   │ High     │
│ Homepage & Navigation   │  /5   │ High     │
│ Trust & Social Proof    │  /5   │ High     │
│ SEO & Technical         │  /5   │ Medium   │
│ Email Capture           │  /5   │ Medium   │
│ Analytics Setup         │  /5   │ Medium   │
├─────────────────────────┼───────┼──────────┤
│ OVERALL                 │  /45  │          │
└─────────────────────────┴───────┴──────────┘

CONVERSION RATE BENCHMARKS:
• Your category average: [X%]
• Top 20% in your category: [X%]
• Top 10% across ecommerce: 4.7%+

TOP 5 PRIORITY FIXES:
1. [Highest impact fix with specific instructions]
2. [Second priority]
3. [Third priority]
4. [Fourth priority]
5. [Fifth priority]

ESTIMATED IMPACT:
[Projected conversion improvement if top 5 fixes are implemented]
```

## Industry Conversion Rate Benchmarks

Use these to contextualize the store's performance:

| Industry | Average CR | Top 20% | Top 10% |
|---|---|---|---|
| Food & Beverage | 6.11% | 8%+ | 10%+ |
| Health/Beauty | 2-3% | 4%+ | 5%+ |
| Fashion/Apparel | 1.5-2.5% | 3%+ | 4%+ |
| Home & Garden | 1.5-2% | 3%+ | 4%+ |
| Electronics | 1-1.5% | 2.5%+ | 3.5%+ |
| Luxury/Jewelry | 1.19% | 2%+ | 3%+ |

**AOV Impact on CR:**
- AOV under $50: Expect 3-4% CR
- AOV $50-200: Expect 2-2.5% CR
- AOV $200-500: Expect 1.5-2% CR
- AOV over $500: Expect 0.8-1.2% CR

## References

For the detailed product page audit checklist, see the product-page-optimizer skill's `references/product-page-audit.md`.
