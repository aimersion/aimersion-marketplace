---
description: Analyze recent email campaign performance
---

Analyze email campaign performance and provide optimization recommendations.

Follow the campaign-analyzer skill workflow:

1. Ask the user to provide their campaign data. Request:

   **Essential (must have):**
   - Send volume
   - Click-through rate (CTR) — the most reliable metric post-Apple MPP
   - Unsubscribe rate
   - Bounce rate
   - Spam complaint rate

   **Important (request if available):**
   - Open rate (note: inflated by Apple Mail Privacy Protection)
   - Click-to-open rate (CTOR)
   - Conversion rate and/or revenue
   - Business type (SaaS, ecommerce, media, services)

   **For deeper analysis:**
   - Data from multiple recent campaigns (for trend analysis)
   - Segment-level breakdowns
   - Device breakdown
   - Domain-level delivery data

2. Once data is provided:
   - **Acknowledge Apple MPP** — note that open rates may be inflated 20-75% depending on Apple Mail share
   - **Benchmark every metric** against the 2025-2026 standards for their business type
   - Label each as Below Average / Average / Good / Excellent

3. Run the diagnostic decision trees:
   - Low CTR (<1.5%) → delivery check → subject line analysis → content/CTA diagnosis
   - High unsubscribes (>0.3%) → frequency check → relevance audit → expectation gap
   - High spam complaints (>0.05%) → URGENT flag → list source audit → unsubscribe mechanics
   - Revenue decline → conversion funnel check → audience mix analysis

4. If multiple campaigns provided, analyze trends:
   - 8-12 week metric trajectory
   - Content/topic performance patterns
   - Segment divergence (averages hide segment-level problems)
   - Day/time optimization opportunities

5. Deliver the report:
   - **Executive summary**: 2-3 sentences, lead with the most important finding
   - **MPP note**: Caveat on open rate reliability
   - **Metrics dashboard**: All metrics benchmarked with trend arrows
   - **Top 3-5 findings**: Ranked by business impact with specific numbers
   - **Prioritized recommendations**: Each with observation → diagnosis → specific action → expected impact → priority level → how to measure
   - **Quick wins**: 1-2 changes for the very next send
   - **Next A/B test**: Specific hypothesis based on this analysis

CRITICAL: Every recommendation must reference a specific number from the user's data. Zero generic advice. If data is insufficient, state what additional data is needed.
