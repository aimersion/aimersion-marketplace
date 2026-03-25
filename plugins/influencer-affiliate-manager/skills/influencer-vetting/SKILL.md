---
name: influencer-vetting
description: >
  Vet influencers and creators for brand partnerships by analyzing audience authenticity,
  engagement quality, brand safety, and content fit. This skill should be used when the user
  asks to "vet an influencer", "check for fake followers", "evaluate a creator", "is this
  influencer legit", "influencer audit", "creator analysis", "check engagement rate",
  "review influencer profile", "influencer due diligence", or needs help deciding whether
  a specific creator is worth partnering with. Also trigger when evaluating influencer lists,
  comparing creators, or building a shortlist for a campaign.
---

# Influencer Vetting

Evaluate creators systematically before committing budget. The goal is to separate genuine
influence from inflated vanity metrics, protecting the brand from fraud while identifying
creators whose audience genuinely aligns with campaign objectives.

## Why Thorough Vetting Matters

Approximately 15-20% of social media followers are estimated to be fake or bot accounts.
Influencers with genuine audiences see 3-5x higher conversion rates than those with
inflated follower counts. A $10,000 spend on a creator with 40% fake followers is
effectively $4,000 wasted — and the "real" impressions may still be low-quality.

## Vetting Framework: The 7-Point Creator Scorecard

Score each dimension 1-5. A creator needs a minimum average of 3.5 to be recommended.

### 1. Audience Authenticity (Weight: 25%)

Check for signs of purchased followers or bot engagement:

**Red flags (score 1-2):**
- Follower spikes of 5,000+ in a single day without a viral moment
- Comment-to-like ratio near 0% (real accounts typically show 1-5%)
- Generic one-word or emoji-only comments from the same accounts
- Followers concentrated in countries unrelated to the creator's content language
- Sudden engagement spikes uncorrelated with content quality

**Green flags (score 4-5):**
- Steady, organic growth visible in historical charts
- Comments include questions, stories, disagreements (sentiment variety)
- Follower geography matches the creator's content language and brand's target market
- Engagement patterns correlate with content posting schedule

### 2. Engagement Rate Quality (Weight: 20%)

Calculate: (likes + comments + shares + saves) ÷ follower count × 100

Compare against platform and tier benchmarks. Read `references/engagement-benchmarks.md`
for the full benchmark table.

**Quick reference — healthy engagement by tier:**
- Nano (1K-10K): 4-8% Instagram, 6-12% TikTok
- Micro (10K-100K): 2-5% Instagram, 4-8% TikTok
- Mid (100K-500K): 1.5-3% Instagram, 3-6% TikTok
- Macro (500K-1M): 1-2% Instagram, 2-4% TikTok
- Mega (1M+): 0.5-1.5% Instagram, 1-3% TikTok

Engagement significantly above these ranges warrants scrutiny for engagement pods or
bot activity. Significantly below suggests inactive or low-quality audience.

### 3. Content Quality & Brand Alignment (Weight: 20%)

Review the last 20-30 posts for:
- Production value consistent with what the brand expects
- Authentic voice vs. overly scripted promotional tone
- Existing branded content quality and disclosure compliance
- Content themes that naturally align with the brand's category
- Audience response to sponsored vs. organic content (engagement gap)

A large engagement gap between sponsored and organic posts (>50% drop) suggests the
audience doesn't trust the creator's recommendations.

### 4. Audience Demographics Match (Weight: 15%)

Verify the creator's audience demographics align with the brand's target:
- Age distribution
- Gender split
- Geographic concentration (country, state/region, city)
- Interest affinities
- Income indicators (where available)

A creator with 1M followers but only 5% in the brand's target market delivers
an effective audience of 50K — price accordingly.

### 5. Brand Safety (Weight: 10%)

Scan for reputational risk:
- History of controversial statements or behavior
- Past brand partnership conflicts or public disputes
- Content that conflicts with the brand's values
- Association with polarizing figures or movements
- Any legal issues, lawsuits, or FTC violations

### 6. Past Campaign Performance (Weight: 5%)

If available, review the creator's track record:
- Previous brand partnership results (ask for case studies)
- Testimonials from other brand partners
- Consistency of delivery (on-time, on-brief)
- Willingness to provide performance data

### 7. Professionalism & Communication (Weight: 5%)

Evaluate during initial outreach:
- Response time and communication quality
- Willingness to share analytics and audience data
- Understanding of FTC disclosure requirements
- Flexibility on content revisions and approval workflows

## Output Format

Present the vetting assessment as a structured scorecard:

```
## Creator Vetting Report: [Creator Name]

**Platform:** [Platform] | **Followers:** [Count] | **Avg. Engagement:** [Rate]%

### Scorecard

| Dimension               | Score (1-5) | Weight | Weighted |
|-------------------------|-------------|--------|----------|
| Audience Authenticity   |             | 25%    |          |
| Engagement Quality      |             | 20%    |          |
| Content & Brand Fit     |             | 20%    |          |
| Demographics Match      |             | 15%    |          |
| Brand Safety            |             | 10%    |          |
| Past Performance        |             | 5%     |          |
| Professionalism         |             | 5%     |          |
| **WEIGHTED TOTAL**      |             |        | **/5.0** |

### Recommendation
[APPROVE / CONDITIONAL / REJECT] — [1-2 sentence rationale]

### Key Findings
- [Finding 1]
- [Finding 2]
- [Finding 3]

### Risk Factors
- [Risk 1 with mitigation suggestion]

### Suggested Rate Range
Based on tier, engagement, and audience quality: $[low] - $[high] per [deliverable type]
```

## Comparing Multiple Creators

When evaluating a shortlist, present a comparison matrix showing all candidates
side-by-side with their scores, then rank by weighted total. Include a
"value score" calculated as: weighted total ÷ estimated cost per engagement.
