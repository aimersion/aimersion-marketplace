---
name: mql-attribution
description: >
  Identify which channels, content, and campaigns actually generate qualified pipeline.
  This skill should be used when the user asks to "what's driving our MQLs", "marketing
  attribution analysis", "which content converts to pipeline", "where do our leads come from",
  "content-to-pipeline attribution", "which channels have the best ROI", or needs to connect
  marketing activities to pipeline and revenue so they can invest in what works and stop
  funding what doesn't.
version: 1.0.0
---

# MQL Attribution

Connect marketing activities to pipeline outcomes — invest in what generates revenue.

## The Attribution Problem

B2B buying journeys involve 7-10+ touchpoints over weeks or months. Single-touch attribution (first-touch or last-touch) misses most of this journey and systematically undercredits awareness channels while overcrediting bottom-funnel ones.

## Attribution Models

| Model | Credits | Good for | Problem |
|---|---|---|---|
| First-touch | 100% to first channel | Understanding awareness sources | Undercredits nurture content |
| Last-touch | 100% to final touchpoint | Understanding what closes | Overcredits branded search, demo pages |
| Linear | Equal credit all touchpoints | Simple multi-touch view | Treats all touchpoints equally |
| W-shaped | 30% first, 30% MQL creation, 30% opp creation, 10% distributed | **B2B best practice** | Requires proper CRM tracking |

**Recommended for B2B:** W-shaped attribution. It balances credit for awareness (creates interest) and conversion (drives action).

## Building Your Attribution System

### Step 1: UTM Standardization

Every marketing touchpoint needs consistent UTMs:

```
utm_source: [traffic source]
  linkedin / google / email / organic / direct / podcast / event

utm_medium: [channel type]
  paid / organic / email / social / referral / cpc

utm_campaign: [standardized campaign name]
  q2-demand-gen / ebook-ramp-efficiency / webinar-june / nurture-sequence-1

utm_content: [specific ad or post]
  ad-pain-v1 / newsletter-week-23 / post-contrarian-take

utm_term: [keyword — Google Search only]
```

Rule: Never launch a campaign without UTMs. Retroactive attribution is impossible.

### Step 2: MQL Scoring Model

Define MQL explicitly — not "a lead marketing thinks is good":

```
Auto-MQL (any of these instantly qualifies):
- Demo requested
- Free trial started
- Pricing page visited AND [X other criteria met]

Scored MQL (must reach [50] points):

Firmographic (0-40 points):
  Company size in ICP range: +10
  Industry in target list: +15
  Title matches buyer profile: +10
  Geography in target region: +5

Behavioral (0-60 points):
  Visited pricing page: +20
  Downloaded gated content: +10
  Attended webinar: +15
  Opened 3+ emails in sequence: +5
  Visited site 3+ times: +10
  Engaged with LinkedIn content: +5

Disqualifiers (remove from MQL regardless of score):
  Competitor domain
  Student/educational email
  Title clearly outside ICP
  Company size clearly outside ICP
```

### Step 3: Content-to-Pipeline Tracking

For every MQL, capture in CRM:
- First touch source (UTM — captured at first form fill, never overwrite)
- MQL conversion source (what triggered MQL status)
- All content consumed before MQL (page visits, downloads, webinars)
- Days from first touch to MQL
- Days from MQL to opportunity created
- Did the opportunity close?

Over time, this reveals: which content pieces appear most in closed-won journeys.

## Attribution Analysis

### Monthly Channel Attribution Report

```
Channel | Spend | MQLs | Opps | Pipeline $ | Closed $ | CAC
---|---|---|---|---|---|---
LinkedIn Paid | | | | | |
Google Search | | | | | |
Organic/SEO | | | | | |
Email | | | | | |
Webinar | | | | | |
Referral | | | | | |
```

### The Metric That Drives Decisions

**Cost per pipeline dollar = Channel Spend ÷ Pipeline Generated**

A channel generating $100K in pipeline for $5K in spend (20x) beats one generating $200K for $40K (5x) every time. Use this for budget allocation, not CPL alone.

### Content Attribution Report

```
Asset | Views | MQL Touches | Opp Touches | Pipeline Influenced
---|---|---|---|---
[Guide name] | | | |
[Webinar recording] | | | |
[Blog post] | | | |
```

"Touches" = asset appeared in a closed-won customer journey.

## Common Attribution Mistakes

**Mistake 1: Wrong time period credit**
A webinar lead from Q1 that closes in Q3 should count — but credit pipeline when it's created, not when the original touchpoint happened.

**Mistake 2: Form fills as success**
A downloaded ebook is not pipeline. Track the full chain: MQL → SQL → Opp → Closed-Won.

**Mistake 3: Ignoring assisted conversions**
A channel that consistently appears in the middle of winning journeys is valuable even if never first or last touch.

**Mistake 4: The dark funnel**
Podcasts, events, word-of-mouth, and communities create demand that converts via direct or branded search. These are undervalued because they're hard to attribute. Survey new customers: "How did you first hear about us?"
