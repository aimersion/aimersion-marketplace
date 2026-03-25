---
name: post-launch-analyzer
description: >
  Run structured post-launch retrospectives with KPI dashboards, cohort analysis,
  and 30-60-90 day improvement plans. This skill should be used when the user asks to
  "analyze my launch", "post-launch review", "launch retrospective", "how did my launch
  go", "launch metrics analysis", "what went wrong with my launch", "post-launch report",
  "launch performance review", "launch KPIs", or needs help evaluating the results of a
  product launch. Also trigger when someone mentions "launch retro", "post-mortem",
  "launch data analysis", "launch debrief", or "what should I do after launch".
version: 2.0.0
---

# Post-Launch Analyzer

Run structured post-launch analysis that turns launch data into actionable insights. Most teams skip this step — the ones that don't capture 2-3x more value and avoid repeating mistakes on future launches.

## Why Post-Launch Analysis Matters

80% of product launches by 2025 require significant changes after initial rollout. The teams that systematically analyze what happened, why, and what to do next are the ones that build compounding launch expertise. Every launch should make the next one better.

## Gathering Context

Before running analysis, understand:

1. **What launched** — product name, type, launch date
2. **What were the goals** — specific targets for signups, revenue, engagement, etc.
3. **What happened** — actual numbers vs. targets
4. **What data is available** — analytics dashboards, email stats, social metrics, revenue data, customer feedback
5. **How long ago** — just launched (real-time), 1 week post, 1 month post?

If the user has ~~email, ~~X, ~~LinkedIn, or ~~Facebook connected, pull actual engagement data to enrich the analysis.

## The Post-Launch Analysis Framework

### Step 1: Metric Collection (The Numbers)

Organize metrics into four categories:

**Growth Metrics:**
- Total signups / purchases / backers
- Daily signup velocity (plot the curve)
- Traffic sources and attribution
- Conversion rate by channel
- Cost per acquisition (CAC)

**Engagement Metrics:**
- Activation rate (% who completed key first action)
- Feature adoption rates
- Session duration / usage frequency
- Email open rates and CTR during launch sequence
- Social media engagement (likes, comments, shares, reach)

**Retention Metrics:**
- Day 1, Day 7, Day 30 retention rates
- Churn rate (for subscription products)
- Repeat purchase rate (for e-commerce)
- Stickiness ratio (DAU/MAU)

**Financial Metrics:**
- Revenue generated
- Average order value / ARPU
- Customer Lifetime Value estimate
- LTV:CAC ratio
- Gross margin

### Step 2: Goal vs. Actual Analysis

Create a scorecard comparing targets to results:

```
| Metric                  | Target    | Actual    | % of Target | Status |
|-------------------------|-----------|-----------|-------------|--------|
| Launch week signups     | 1,000     | 847       | 84.7%       | Amber  |
| Email list conversion   | 25%       | 31%       | 124%        | Green  |
| Launch day revenue      | $10,000   | $7,200    | 72%         | Red    |
| Social media reach      | 50,000    | 62,000    | 124%        | Green  |
| Support ticket volume   | <50       | 127       | 254%        | Red    |
```

**Status definitions:**
- Green: ≥100% of target
- Amber: 75-99% of target
- Red: <75% of target

### Step 3: Structured Retrospective

Run through these question categories with the user:

**What Worked (Continue Doing):**
- Which channels drove the most conversions?
- Which content pieces got the most engagement?
- What feedback were customers most positive about?
- Which team processes ran smoothly?

**What Didn't Work (Stop Doing):**
- Where did you spend time/money without results?
- Which assumptions proved wrong?
- What bottlenecks appeared during execution?
- Which channels underperformed expectations?

**What Was Missing (Start Doing):**
- What did customers ask for that you didn't anticipate?
- What processes would have helped?
- What data do you wish you'd been tracking?
- What partnerships or channels should you have included?

**What Surprised You:**
- Unexpected positive outcomes
- Unexpected negative outcomes
- Customer behavior you didn't predict
- External factors that affected the launch

### Step 4: Root Cause Analysis

For each Red metric, dig into why:

1. **State the gap:** "We targeted 1,000 signups but got 847 (153 short)"
2. **Identify contributing factors:** List 3-5 possible reasons
3. **Rank by impact:** Which factor likely had the biggest effect?
4. **Identify the root cause:** Keep asking "why?" until you reach the actionable root
5. **Define the fix:** Specific action to prevent this in future launches

### Step 5: Customer Feedback Synthesis

Consolidate feedback from all sources:
- Support tickets (volume, categories, sentiment)
- Social media comments and mentions
- Review sites (if applicable)
- Direct customer emails
- Survey responses (if conducted)

**Feedback categorization:**
- **Feature requests:** Things customers want that don't exist yet
- **Bug reports:** Things that are broken
- **Confusion points:** Things that work but customers don't understand
- **Praise signals:** What customers love (double down on these)

Prioritize using: **Impact = (Frequency × Severity) ÷ Effort to Fix**

### Step 6: 30-60-90 Day Action Plan

Based on the analysis, create a prioritized improvement plan:

**Days 1-30 (Immediate):**
- Fix critical bugs and confusion points
- Respond to all customer feedback
- Optimize top-performing acquisition channel
- Send post-launch nurture emails to non-converters
- Publish customer success stories

**Days 31-60 (Optimization):**
- Implement top 3 feature requests
- A/B test messaging based on customer language
- Expand to second-best acquisition channel
- Build retargeting campaigns for launch visitors who didn't convert
- Run customer satisfaction survey (NPS)

**Days 61-90 (Scaling):**
- Launch referral program based on happy customer signals
- Create case studies from early success stories
- Develop evergreen acquisition funnel
- Document launch playbook for next product
- Set goals for next launch based on learnings

## Output Format

Present the analysis as:

```
# Post-Launch Analysis: [Product Name]
## Launch Date: [Date] | Analysis Date: [Date]

### Executive Summary
[3-4 sentences: What launched, how it performed vs. goals, top insight]

### Scorecard
[Goal vs. Actual table with Red/Amber/Green status]

### What Worked
[Bulleted list of wins with supporting data]

### What Didn't Work
[Bulleted list of misses with root cause analysis]

### Customer Feedback Themes
[Top 5 themes with frequency and priority]

### Root Cause Analysis
[For each Red metric: gap → factors → root cause → fix]

### 30-60-90 Day Action Plan
[Prioritized action items by timeframe]

### Learnings for Next Launch
[3-5 key takeaways to carry forward]
```

## References

See `references/analysis-frameworks.md` for KPI benchmark data, retrospective facilitation guides, and reporting templates.
