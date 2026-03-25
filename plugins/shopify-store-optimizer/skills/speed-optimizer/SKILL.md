---
name: speed-optimizer
description: >
  Diagnose and fix Shopify store speed issues — image optimization, app bloat reduction, theme optimization,
  lazy loading, Core Web Vitals, and mobile performance. Use this skill when the user asks to "speed up
  my store", "fix slow loading", "optimize page speed", "Core Web Vitals", "image compression",
  "reduce app bloat", "theme optimization", "lazy loading", "LCP", "CLS", "improve mobile speed",
  or anything about making their Shopify store load faster. Also trigger when users mention poor
  PageSpeed scores, slow mobile experience, or when a store audit reveals speed issues.
version: 2.0.0
---

# Shopify Speed Optimizer

Diagnose and fix the specific issues making a Shopify store slow. Speed is the #1 conversion killer — a 1-second delay costs 7% in conversions. Sites loading in 1 second convert at 3x the rate of sites loading in 5 seconds.

## Why This Matters

Page speed affects everything: conversion rate, SEO rankings, bounce rate, customer satisfaction. And Shopify stores have specific speed challenges that generic advice doesn't address — app bloat, Liquid rendering, unoptimized themes, and large product image libraries.

## Core Web Vitals Targets

| Metric | Target | What It Measures |
|---|---|---|
| LCP (Largest Contentful Paint) | < 2.5 seconds | How fast the main content loads |
| CLS (Cumulative Layout Shift) | < 0.1 | How much the page layout shifts during load |
| INP (Interaction to Next Paint) | < 200ms | How fast the page responds to clicks/taps |

**How to check:** Run the store URL through Google PageSpeed Insights. Report both mobile and desktop scores.

## Speed Diagnosis Workflow

1. **Measure** — Run PageSpeed Insights, note scores and specific issues
2. **Identify** — Categorize issues by impact (image, app, theme, code)
3. **Prioritize** — Fix highest-impact issues first
4. **Implement** — Apply fixes in order
5. **Verify** — Re-run PageSpeed Insights to confirm improvements

## The 6 Shopify Speed Killers (In Order of Impact)

### 1. Unoptimized Images (Usually the Biggest Problem)

**The problem:** Product images uploaded at full resolution (3-5MB each) without compression.

**Fix checklist:**
- [ ] Compress all product images to 70-100KB without visible quality loss
- [ ] Use WebP format (Shopify serves this automatically if you upload JPG/PNG)
- [ ] Maximum dimensions: 2048x2048px (Shopify's max display)
- [ ] Use descriptive file names (blue-cotton-shirt.jpg not IMG_4532.jpg)
- [ ] Enable lazy loading for all images below the fold
- [ ] Use `loading="lazy"` attribute on image tags
- [ ] Hero/above-fold images: preload with `fetchpriority="high"`
- [ ] Remove EXIF/metadata from images before upload

**Image Size Guide:**
| Image Type | Max File Size | Max Dimensions |
|---|---|---|
| Hero banner | 150KB | 1920x800px |
| Product main | 100KB | 1024x1024px |
| Product thumbnail | 30KB | 400x400px |
| Collection banner | 120KB | 1200x400px |
| Logo | 20KB | 400x100px |

### 2. App Bloat (The Silent Killer)

**The problem:** Each app injects its own JavaScript and CSS. 10+ apps can add 1-3 seconds to load time.

**Fix checklist:**
- [ ] Audit every installed app — list them all
- [ ] For each app, answer: "Does this directly drive revenue?" If no, consider removing.
- [ ] Uninstall unused apps (uninstalling ≠ just disabling — leftover code may remain)
- [ ] After uninstalling, check theme code for leftover app snippets
- [ ] Test site speed after each app removal to quantify impact
- [ ] For essential apps, check if they offer "load on specific pages only" options

**App Audit Questions:**
1. When did I last use this app?
2. Does this app have a free alternative built into my theme?
3. Can I replace 3 apps with 1 that does everything?
4. Is this app loading on ALL pages or just where it's needed?

**Common app bloat offenders:**
- Pop-up/notification apps that load on every page
- Chat widgets that load heavy scripts globally
- Review apps that inject scripts on non-product pages
- Analytics apps duplicating what GA4 already tracks
- Abandoned cart apps with heavy client-side tracking

### 3. Theme Optimization

**The problem:** Heavy themes with unused features, unoptimized Liquid code, and excessive CSS.

**Fix checklist:**
- [ ] Use a lightweight, well-optimized theme (Dawn, Sense, or reputable premium theme)
- [ ] Disable unused theme sections and features
- [ ] Remove unused fonts (each font family adds 50-200KB)
- [ ] Limit to 2 font families maximum
- [ ] Use system fonts where possible (fastest option)
- [ ] Minimize custom CSS (combine and minify)
- [ ] Remove unused JavaScript from theme files

### 4. Third-Party Scripts

**The problem:** External scripts (analytics, pixels, chat, social) block rendering.

**Fix checklist:**
- [ ] Load third-party scripts asynchronously (`async` or `defer` attributes)
- [ ] Delay non-critical scripts until after page interaction
- [ ] Use Google Tag Manager to manage all tracking scripts
- [ ] Audit and remove redundant tracking (do you need 3 analytics tools?)
- [ ] Move scripts to footer where possible
- [ ] Consider server-side tracking for analytics (better data, less client load)

### 5. Render-Blocking Resources

**The problem:** CSS and JavaScript files that prevent the page from rendering until they load.

**Fix checklist:**
- [ ] Inline critical CSS (the CSS needed for above-the-fold content)
- [ ] Defer non-critical CSS with `media="print"` trick or dynamic loading
- [ ] Add `defer` to non-essential JavaScript tags
- [ ] Preload critical resources: fonts, hero image, main CSS
- [ ] Use `<link rel="preconnect">` for third-party domains

### 6. Shopify-Specific Optimizations

- [ ] Use Shopify's built-in image CDN (automatic, but verify images use it)
- [ ] Enable browser caching headers (Shopify handles most, but verify for custom code)
- [ ] Reduce Liquid template complexity (avoid deeply nested loops)
- [ ] Use section rendering API for dynamic content (avoids full page reloads)
- [ ] Minimize use of metafield lookups in loops (expensive operation)
- [ ] Preload critical fonts with `font-display: swap`

## Quick Wins (Do These First)

These typically take under an hour and have immediate impact:

1. **Compress images** — Use Shopify's built-in image editor or an image optimization app
2. **Remove 2-3 unused apps** — Uninstall completely, check for leftover code
3. **Enable lazy loading** — Most modern Shopify themes have this built in
4. **Reduce fonts** — Switch to system fonts or limit to 2 web fonts
5. **Defer non-critical scripts** — Move to footer, add `defer` attribute

## Speed Testing Protocol

After making changes, test properly:

1. **Clear cache** before testing (browser cache and Shopify cache)
2. **Test mobile first** (that's where most traffic is)
3. **Run 3 tests** and average the results (scores vary between runs)
4. **Test key pages:** Homepage, top product page, top collection page, cart page
5. **Compare against baseline** (document before/after)
6. **Monitor over 1 week** (some improvements take time to reflect in field data)

## Deliverable Format

```
SPEED AUDIT REPORT
Store: [URL]
Date: [Date]

CURRENT SCORES:
• Mobile PageSpeed: [X/100]
• Desktop PageSpeed: [X/100]
• LCP: [X seconds]
• CLS: [X]
• INP: [X ms]

TOP ISSUES FOUND:
1. [Issue] — Impact: [High/Medium/Low] — Fix: [Specific action]
2. [Continue...]

RECOMMENDED FIX ORDER:
[Numbered list in priority order]

ESTIMATED IMPROVEMENT:
[Expected score improvement after fixes]

APP AUDIT:
[List of apps with keep/remove recommendation for each]
```
