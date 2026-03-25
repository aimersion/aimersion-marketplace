---
name: review-monitor
description: >
  Track review volume, ratings, response rates, and competitor review activity across
  platforms to maintain reputation health. This skill should be used when the user asks
  to "monitor reviews", "track our reviews", "review dashboard", "how are our reviews",
  "review stats", "compare our reviews to competitors", "review health check",
  "are we getting enough reviews", "review KPIs", or needs ongoing visibility into
  their business's review performance and competitive positioning.
version: 2.0.0
---

# Review Monitor

Track and report on review health metrics across platforms — volume, ratings, response rates, and competitive positioning — to maintain and improve online reputation.

## Core Workflow

1. **Gather current review data** — from connected platforms and user input
2. **Calculate health metrics** — volume, rating, response rate, trend
3. **Compare to benchmarks** — industry averages and competitor performance
4. **Identify action items** — unanswered reviews, rating dips, volume gaps
5. **Present the dashboard** — clear, actionable review health report

## Review Health Scorecard

Calculate and present these key metrics:

| Metric | How to Calculate | Health Threshold |
|--------|-----------------|-----------------|
| **Average Rating** | Mean of all ratings in period | Above industry average |
| **Review Volume** | New reviews per month | 6+ for small business |
| **Response Rate** | Reviews with owner response / total reviews | 90%+ excellent |
| **Response Time** | Average time from review post to response | <48h negative, <7d positive |
| **Rating Trend** | Current month avg vs. 3-month avg | Stable or improving |
| **Sentiment Ratio** | Positive reviews / total reviews | 80%+ healthy |

## Dashboard Report Format

```
# Review Health Dashboard
Period: [date range]
Generated: [date]

## Overall Score: [A/B/C/D/F]

## Key Metrics
⭐ Average Rating: [X.X] ([↑/↓/→] from last period)
📊 Reviews This Month: [X] ([↑/↓/→] from last period)
💬 Response Rate: [X]% ([X] of [Y] reviews answered)
⏱️ Avg Response Time: [X] days
📈 Rating Trend: [improving / stable / declining]

## Platform Breakdown
| Platform | Rating | Reviews (Month) | Response Rate |
|----------|--------|----------------|---------------|
| Google | [X.X] | [X] | [X]% |
| Yelp | [X.X] | [X] | [X]% |
| Facebook | [X.X] | [X] | [X]% |

## Action Items
🔴 [Urgent items — unanswered negative reviews, rating drops]
🟡 [Important items — low volume, response gaps]
🟢 [Opportunities — positive trends to amplify]

## Competitor Comparison (if data available)
| Business | Avg Rating | Monthly Volume | Response Rate |
|----------|-----------|---------------|---------------|
| Your Business | [X.X] | [X] | [X]% |
| [Competitor 1] | [X.X] | [X] | [X]% |
| [Competitor 2] | [X.X] | [X] | [X]% |
```

## Grading Rubric

| Grade | Criteria |
|-------|---------|
| **A** | Rating 4.5+, 10+ reviews/month, 90%+ response rate, improving trend |
| **B** | Rating 4.0-4.4, 6-9 reviews/month, 70-89% response rate, stable trend |
| **C** | Rating 3.5-3.9, 3-5 reviews/month, 50-69% response rate |
| **D** | Rating 3.0-3.4, 1-2 reviews/month, below 50% response rate |
| **F** | Rating below 3.0, or 0 reviews/month, or no responses to reviews |

## Competitive Monitoring

When the user provides competitor names, monitor:
- Their average ratings across platforms
- Their review volume trends
- How they respond to negative reviews (quality and speed)
- Common themes in their reviews (strengths and weaknesses)
- Any review patterns that suggest fake activity

## Alerts and Triggers

Flag these situations for immediate attention:
- Any new 1-star review (respond within 24 hours)
- Rating drops below a threshold (e.g., drops below 4.0)
- A week with zero new reviews (review solicitation needed)
- A competitor's rating surpasses yours
- A sudden spike in review volume (positive or negative)
- An unanswered review older than 7 days

## Data Sources

Pull data from:
- Facebook page reviews via connected ~~Facebook tools
- Social media mentions on X and LinkedIn
- Email alerts from Google My Business, Yelp, etc. (forwarded to ~~email)
- User-provided data (screenshots, manual input)
- Web search for public review data

## References

See the sentiment-analyzer skill's `references/sentiment-guide.md` for industry benchmarks and scoring methodology.
