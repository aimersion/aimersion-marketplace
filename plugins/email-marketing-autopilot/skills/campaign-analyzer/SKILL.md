---
name: campaign-analyzer
description: >
  Analyze email campaign performance and suggest optimizations.
  This skill should be used when the user asks to "analyze my email campaign", "email performance report",
  "campaign metrics", "why are my open rates low", "improve click rates", "email analytics",
  "campaign results", "email ROI", "deliverability issues", or needs help interpreting email
  marketing data and finding opportunities to improve.
version: 2.0.0
---

# Email Campaign Analyzer

Analyze email campaign performance against real 2025-2026 benchmarks, diagnose problems with structured decision trees, and deliver prioritized recommendations grounded in specific data.

## Critical Context: Apple Mail Privacy Protection (MPP)

Before analyzing ANY open rate data, acknowledge the MPP reality:

- **Apple Mail holds ~55-60% of email client market share** (as of 2025)
- **Mail Privacy Protection pre-loads tracking pixels**, counting emails as "opened" even when unread
- This inflates open rates by 20-75% depending on your audience's Apple Mail share

**How to adjust:**
1. Ask the user what percentage of their subscribers use Apple Mail (most ESPs report this)
2. If unknown, assume 50-55% Apple Mail share for consumer lists, 40-45% for B2B
3. **Adjusted open rate formula:** `Reported opens - (Apple Mail % × Total delivered × 0.85)` / `Non-Apple delivered`
4. **Better metric:** Focus on Click-to-Open Rate (CTOR) and Click-Through Rate (CTR) as primary engagement indicators
5. Open rate trends within your own list are still useful — compare to YOUR baseline, not industry averages

## Analysis Framework

### 1. Gather Campaign Data

Request these metrics in order of importance:

**Tier 1 — Essential (request always):**
| Metric | Formula | Why It Matters |
|--------|---------|----------------|
| Send volume | Total emails sent | Baseline for all calculations |
| Delivery rate | Delivered / Sent | Infrastructure health indicator |
| Bounce rate | (Hard + Soft bounces) / Sent | List quality signal |
| Click-through rate (CTR) | Unique clicks / Delivered | Most reliable engagement metric post-MPP |
| Unsubscribe rate | Unsubscribes / Delivered | Content-audience fit |
| Spam complaint rate | Complaints / Delivered | Reputation risk — most critical single metric |

**Tier 2 — Important (request if available):**
| Metric | Formula | Why It Matters |
|--------|---------|----------------|
| Open rate | Unique opens / Delivered | Directional with MPP caveat |
| Click-to-open rate (CTOR) | Unique clicks / Unique opens | Content quality signal (best metric for content effectiveness) |
| Conversion rate | Conversions / Delivered | Business impact |
| Revenue per email (RPE) | Total revenue / Emails sent | ROI metric |

**Tier 3 — Advanced (request for deep analysis):**
- Revenue per click, device breakdown, time-to-open distribution
- Segment-level metrics, link-level click maps
- Domain-level delivery rates (Gmail vs. Outlook vs. Yahoo)

### 2. Benchmark Against Updated Standards

**2025-2026 Benchmarks by Business Type:**

| Metric | B2B SaaS | Ecommerce | Media/Publishing | Professional Services |
|--------|----------|-----------|------------------|---------------------|
| Open rate* | 22-30% | 18-25% | 25-35% | 20-28% |
| CTR | 2.5-4% | 2-3.5% | 4-7% | 2-3.5% |
| CTOR | 10-18% | 8-14% | 12-20% | 10-15% |
| Unsubscribe | 0.1-0.3% | 0.15-0.3% | 0.05-0.15% | 0.1-0.25% |
| Bounce rate | 0.5-2% | 1-3% | 0.3-1.5% | 0.5-2% |
| Spam complaints | <0.05% | <0.08% | <0.03% | <0.05% |

*Open rates are MPP-inflated. Real engagement is likely 30-50% lower.

**Benchmark by Email Type:**

| Email Type | Avg. Open Rate* | Avg. CTR | Avg. CTOR |
|------------|----------------|----------|-----------|
| Welcome email | 50-60% | 10-14% | 20-28% |
| Cart abandonment | 45-50% | 8-10% | 18-22% |
| Newsletter | 25-35% | 3-5% | 10-15% |
| Promotional | 18-25% | 1.5-3% | 8-12% |
| Re-engagement | 12-18% | 1-3% | 8-15% |
| Transactional | 60-80% | 8-12% | 15-20% |

### 3. Diagnostic Decision Trees

Work through these in order based on what metrics indicate:

#### Problem: Low Click-Through Rate (CTR < 1.5%)

```
Is delivery rate > 95%?
├── NO → Deliverability problem (see Deliverability Doctor skill)
└── YES → Are opens reasonable (>15% reported)?
    ├── NO → Subject line / sender reputation problem
    │   ├── Check: From name recognizable?
    │   ├── Check: Subject lines match content?
    │   └── Check: Send time optimized?
    └── YES → Content or CTA problem (CTOR is low)
        ├── Check: Is there ONE clear CTA above the fold?
        ├── Check: Does content deliver on subject line promise?
        ├── Check: Is email scannable? (short paragraphs, headers, bullets)
        ├── Check: CTA button vs. text link? (buttons get 28% more clicks)
        └── Check: Mobile rendering — is the CTA thumb-friendly?
```

#### Problem: High Unsubscribe Rate (> 0.3%)

```
Is this a new list or recent list growth?
├── YES → Expectation mismatch at signup
│   ├── Check: What did the signup form promise?
│   ├── Check: Welcome email set frequency expectations?
│   └── Check: First emails deliver on the signup promise?
└── NO → Ongoing content or frequency issue
    ├── Is frequency > 3x/week?
    │   ├── YES → Likely over-mailing. Test reducing frequency.
    │   └── NO → Content relevance issue
    │       ├── Check: Are you segmenting? (unsegmented = irrelevant to most)
    │       ├── Check: Has content quality declined? Compare to earlier campaigns.
    │       └── Check: Are you sending value or just selling?
    └── Did unsubscribes spike on a specific send?
        ├── YES → Review that specific email for tone, offer, or controversy
        └── NO → Gradual list fatigue — implement preference center
```

#### Problem: High Spam Complaints (> 0.05%)

**This is the highest-priority problem.** Spam complaints directly damage sender reputation and deliverability for ALL your emails.

```
Is complaint rate > 0.1%?
├── YES → URGENT. Pause non-critical sends. Investigate immediately.
│   ├── Check: Are you emailing purchased/rented lists? (Stop immediately)
│   ├── Check: Is unsubscribe link working and easy to find?
│   ├── Check: Are unsubscribes being honored promptly?
│   └── Check: Is "From" name/address matching what subscribers signed up for?
└── NO (0.05-0.1%) → Warning zone
    ├── Check: Are you emailing inactive subscribers? (>90 days no engagement)
    ├── Check: Did you recently change sending frequency or content type?
    └── Check: Is the email clearly from your brand? (design, tone, from name)
```

#### Problem: Revenue Declining Despite Stable Engagement

```
Are conversion rates stable?
├── YES → Traffic/revenue attribution issue
│   ├── Check: UTM parameters on all links?
│   ├── Check: Attribution window matching your analytics?
│   └── Check: Landing pages still optimized?
└── NO → Conversion rate has dropped
    ├── Check: Has the offer changed?
    ├── Check: Has the audience mix shifted? (more new subscribers = lower conversion)
    ├── Check: Landing page performance (page speed, mobile UX, form length)
    └── Check: Competitive landscape — are alternatives more compelling now?
```

### 4. Trend Analysis

When multiple campaigns are available (4+ sends minimum), analyze:

- **Metric trajectory**: Plot key metrics over 8-12 weeks. Are they improving, declining, or flat?
- **Content performance patterns**: Which topics, formats, or CTAs correlate with higher engagement?
- **Segment divergence**: Are certain segments improving while others decline? (often hidden by averages)
- **Day/time patterns**: Does Tuesday at 10am consistently outperform Thursday at 2pm?
- **Seasonal adjustments**: Account for known dips (January sluggishness, summer slowdowns, holiday spikes)
- **List growth impact**: Rapid list growth often temporarily depresses engagement rates (new subscribers haven't formed the email habit yet)

### 5. Revenue Attribution Framework

For ecommerce or revenue-generating emails:

| Metric | Healthy Range | Calculation |
|--------|--------------|-------------|
| Revenue per email sent (RPE) | $0.05-0.25 (ecomm), $0.10-0.50 (SaaS) | Total attributed revenue / emails sent |
| Revenue per click | $1-5 (ecomm), $5-20 (SaaS) | Total attributed revenue / unique clicks |
| Email channel % of total revenue | 15-30% (ecomm), 5-15% (SaaS) | Email revenue / total revenue |
| Cost per acquisition (email) | Varies by LTV | ESP cost + labor / new customers from email |

### 6. Generate Recommendations

For EVERY finding, provide:

1. **Observation**: Specific number and context ("CTR dropped from 3.2% to 1.8% over the last 4 sends")
2. **Diagnosis**: Root cause based on the diagnostic tree ("CTA was below the fold in the last 3 emails, and the button color didn't contrast on mobile")
3. **Recommendation**: Exact change to make ("Move the primary CTA button above the fold. Use a contrasting color. Test button text 'Get My Report' vs. 'Download Now'")
4. **Expected impact**: Quantified range ("Expect CTR to recover to 2.5-3.5% range based on similar fixes")
5. **Priority**: High / Medium / Low with effort estimate (Quick Win, Moderate Effort, Major Project)
6. **How to measure**: What metric to watch and over what time period

### 7. Output Format

1. **Executive summary** — 2-3 sentences on campaign health. Lead with the most important finding.
2. **MPP-adjusted metrics note** — Acknowledge open rate inflation if relevant
3. **Metrics dashboard** — All key metrics with benchmark labels (Below Average / Average / Good / Excellent) and trend arrows
4. **Top 3-5 findings** — Ranked by business impact, not just metric size
5. **Prioritized recommendations** — Each with the 6-part structure above
6. **Quick wins** — 1-2 changes that can be implemented in the next send
7. **Next A/B test** — Specific test hypothesis based on the analysis

**Critical rule:** Every recommendation MUST reference a specific number from the user's data. Zero generic advice. If you don't have enough data to make a specific recommendation, say what additional data would be needed.
