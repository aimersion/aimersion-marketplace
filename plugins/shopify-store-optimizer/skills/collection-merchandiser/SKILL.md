---
name: collection-merchandiser
description: >
  Optimize Shopify collection pages for conversions — product sorting strategies, visual merchandising,
  filtering, cross-sell/upsell placement, and collection page SEO. Use this skill when the user asks to
  "organize collections", "merchandising strategy", "sort products", "collection page optimization",
  "improve category pages", "cross-sell strategy", "upsell strategy", "product recommendations",
  "frequently bought together", "collection SEO", or anything about how products are displayed,
  sorted, and recommended across the store. Also trigger when users mention poor collection page
  performance, low browse-to-cart rates, or wanting to improve product discovery.
version: 2.0.0
---

# Collection Merchandiser

Optimize how products are displayed, sorted, filtered, and recommended across Shopify collection pages to maximize browse-to-cart conversion and average order value.

## Why This Matters

Collection pages are where browsing becomes buying. Smart merchandising — putting the right products in front of the right shoppers — can increase revenue per visitor without any additional traffic. Product recommendations alone drive 31% of ecommerce revenue. Cross-sell and upsell strategies increase AOV by 15-30%.

## Collection Page Optimization Framework

### 1. Product Sorting Strategy

**Default sort order matters.** Most shoppers won't change the sort — they browse what's shown first.

**Recommended Sort Strategies:**
- **Bestsellers first** (default for most collections) — proven demand, social proof
- **New arrivals first** (for returning customers or fashion) — creates freshness
- **Margin-weighted** (for profit optimization) — blend of sales velocity and margin
- **Seasonal relevance** — promote seasonally relevant items to top positions

**Manual Merchandising Rules:**
1. First 4-8 products visible without scrolling should be your strongest converters
2. Mix price points in the visible grid (don't cluster all expensive items together)
3. Place new arrivals among bestsellers (gives them visibility without displacing proven winners)
4. Move out-of-stock items to the bottom or hide them entirely
5. Rotate featured positions weekly to prevent staleness

### 2. Visual Merchandising

**Product Grid Layout:**
- Desktop: 3-4 products per row (4 for larger catalogs)
- Mobile: 2 products per row (single column for high-AOV items)
- Consistent image dimensions and styling across the grid
- White space between products prevents visual overwhelm

**Product Card Elements (in priority order):**
1. Product image (lifestyle preferred over plain white)
2. Product name (concise, descriptive)
3. Price (with sale price if applicable — show savings)
4. Star rating + review count (even "4.8 ★ (127)" is enough)
5. "New" or "Bestseller" badges (sparingly — max 20% of products)
6. Quick-add button or variant selector (reduces clicks to cart)

**Color and Badge Strategy:**
- "Sale" badge: Red or contrasting color
- "New" badge: Green or brand accent color
- "Bestseller" badge: Gold or warm color
- "Low stock" badge: Orange (creates urgency authentically)
- Never badge more than 20% of products — it loses impact

### 3. Filtering & Search

**Essential Filters (by product type):**
- Apparel: Size, Color, Price, Style, Occasion
- Electronics: Price, Brand, Features, Compatibility
- Beauty: Skin type, Concern, Ingredient, Price
- Home: Room, Style, Color, Price, Material

**Filter UX Best Practices:**
- Show filter counts (how many products match)
- Allow multi-select within filter groups
- Keep applied filters visible and easy to remove
- Mobile: Use a slide-out filter panel, not inline filters
- Limit to 5-8 filter groups maximum
- Most-used filters appear first

**Search Optimization:**
- Autocomplete with product images
- Typo tolerance ("blak shirt" → "black shirt")
- Synonym handling ("sofa" = "couch")
- Show trending searches for inspiration
- "No results" page should suggest alternatives, not dead-end

### 4. Cross-Sell & Upsell Strategy

**Cross-sell (complementary products):** Increases AOV by 15-30%

**Where to place cross-sells:**
- Product page: "Frequently bought together" section (below description)
- Cart page: "Complete the look" or "Don't forget" section
- Post-purchase: "Based on your order" email (14-30 days after)
- Checkout: "Add for just $X more" (low-friction add)

**Cross-sell Rules:**
- Recommend 2-4 complementary products (not more — decision paralysis)
- Price cross-sell items at 20-40% of the main product price
- Show savings if bought as bundle ("Save $15 when you add this")
- Use purchase data to determine "frequently bought together" pairings

**Upsell (higher-value alternative):**

**Where to place upsells:**
- Product page: "Upgrade to [Premium Version]" with comparison
- Cart page: "Want the bigger size? Only $X more"
- Collection page: Display premium option adjacent to standard

**Upsell Rules:**
- Upsell item should be 20-50% more expensive (not 2x)
- Clearly show what additional value the upgrade provides
- Use a comparison table for feature differences
- Don't push upgrades aggressively — it's a suggestion, not a redirect

### 5. Product Recommendation Logic

Recommendations drive 31% of ecommerce revenue. Use multiple algorithms:

**Algorithm Types:**
| Algorithm | When to Use | Placement |
|---|---|---|
| Frequently Bought Together | Product pages, cart | "Complete the look" |
| Similar Items | Product pages | "You may also like" |
| Trending/Popular | Homepage, empty states | "Trending now" |
| Recently Viewed | All pages (returning visitors) | Footer or sidebar |
| Personalized | Homepage (logged-in users) | "Picked for you" |
| New Arrivals | Collection pages, homepage | "Just dropped" |

**Recommendation Placement by Page:**
- **Homepage:** Trending, New Arrivals, Recently Viewed
- **Product Page:** Frequently Bought Together, Similar Items
- **Cart Page:** Cross-sells, "People also bought"
- **Empty Cart:** Bestsellers, Trending
- **404 Page:** Bestsellers, Search bar
- **Post-Purchase:** Complementary products, replenishment items

### 6. Collection Page SEO

**Title Tag:** "[Collection Name] — [Benefit or Brand] | [Store Name]" (50-60 chars)
**Meta Description:** Describe the collection with primary keyword, product count, and CTA (150-160 chars)

**SEO Technical:**
- Canonical tags on filtered/sorted page variations (prevent duplicate content)
- Noindex paginated pages beyond page 1 (or use rel=next/prev)
- Descriptive collection description (100-300 words) above or below product grid
- Schema markup for collection (ItemList schema)
- Internal links between related collections
- Breadcrumb navigation

**URL Structure:**
- Clean URLs: `/collections/mens-shirts` not `/collections/mens-shirts?sort=price&filter=blue`
- Avoid Shopify tag pages creating duplicate thin content
- If using tags for filtering, noindex tag combination pages

## Merchandising Calendar

Update merchandising weekly at minimum:

| When | Action |
|---|---|
| Monday | Review last week's collection performance, adjust sort order |
| Before promotion | Move promoted products to top positions |
| New product launch | Feature in first 4-8 grid positions for 1-2 weeks |
| Seasonal change | Rotate seasonal products to prominent positions |
| Low stock | Move to bottom or add "Almost Gone" badge |
| Out of stock | Hide from collection or move to very bottom |

## Deliverable Format

When creating a merchandising strategy, present:

```
COLLECTION: [Name]
PRODUCTS: [Count]
CURRENT SORT: [How it's sorted now]

RECOMMENDED SORT STRATEGY: [Explanation]

TOP 8 GRID POSITIONS:
1. [Product] — [Why this position]
2-8. [Continue]

FILTER RECOMMENDATIONS:
[Which filters to add/remove]

CROSS-SELL PAIRINGS:
[Product A] → [Recommended cross-sells]
[Product B] → [Recommended cross-sells]

SEO RECOMMENDATIONS:
[Title tag, meta description, collection description]

BADGE STRATEGY:
[Which products get which badges]
```
