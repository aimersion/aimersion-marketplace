---
name: sentiment-analyzer
description: >
  Analyze customer review sentiment trends, identify recurring themes, and flag
  emerging issues before they become reputation crises. This skill should be used
  when the user asks to "analyze reviews", "what are customers saying", "review
  trends", "sentiment analysis", "customer feedback themes", "review insights",
  "what complaints are common", "feedback patterns", or needs help understanding
  the overall sentiment picture of their business reviews.
version: 2.0.0
---

# Sentiment Analyzer

Analyze customer reviews to extract actionable insights — sentiment trends, recurring themes, emerging issues, and competitive positioning.

## Why This Matters

Most sentiment analysis tools struggle with sarcasm, mixed emotions, and industry-specific context. This skill combines automated pattern recognition with structured human-readable analysis to surface what matters: what customers love, what they hate, and what's changing.

## Core Workflow

1. **Collect reviews** — gather recent reviews from available sources
2. **Classify each review** — sentiment, theme categories, urgency
3. **Identify patterns** — recurring issues, trending topics, seasonal effects
4. **Generate insights** — actionable recommendations from the data
5. **Present the analysis** — structured report with visualizations

## Sentiment Classification

### Multi-Dimensional Scoring

Don't reduce reviews to just positive/negative. Score on these dimensions:

| Dimension | Scale | What It Captures |
|-----------|-------|-----------------|
| **Overall Sentiment** | -5 to +5 | General emotional tone |
| **Service Satisfaction** | 1-5 | Staff, responsiveness, professionalism |
| **Product/Quality Satisfaction** | 1-5 | Core offering quality |
| **Value Perception** | 1-5 | Price-to-value ratio |
| **Likelihood to Return** | 1-5 | Inferred from language and context |

### Handling Sentiment Analysis Limitations

Be aware of these common pitfalls and compensate:

- **Sarcasm detection** — phrases like "Oh great, another delay" or "Really impressed by how they managed to mess this up" are negative despite positive words. Look for incongruence between stated experience and positive language.
- **Mixed sentiment** — "The food was amazing but the wait was terrible" requires splitting into separate sentiment scores for each aspect.
- **Cultural context** — direct vs. indirect communication styles affect how complaints are expressed. Some cultures understate negativity.
- **Star-text mismatch** — a 3-star review with glowing text may indicate a customer who "never gives 5 stars." A 4-star with complaints may indicate higher expectations.
- **Competitor mentions** — "Not as good as [Competitor]" vs. "Better than [Competitor]" carry important competitive intelligence.

## Theme Extraction

### Standard Theme Categories

Classify each review into one or more themes:

- **Staff & Service**: friendliness, professionalism, knowledge, responsiveness
- **Product/Service Quality**: core offering performance, reliability, consistency
- **Value & Pricing**: perceived value, price fairness, hidden costs
- **Wait & Timing**: speed of service, appointment availability, delivery times
- **Environment & Ambiance**: cleanliness, comfort, atmosphere, accessibility
- **Communication**: clarity, follow-up, transparency, responsiveness
- **Convenience**: location, hours, parking, online experience
- **Resolution**: how well issues were handled when things went wrong

### Emerging Theme Detection

Flag any theme that shows:
- 3+ mentions in the last 30 days that wasn't present before
- A sudden spike (2x+ the typical frequency for that theme)
- A reversal (previously positive theme turning negative or vice versa)

## Analysis Report Structure

Present findings in this format:

```
# Review Sentiment Analysis Report
Period: [date range]
Total reviews analyzed: [count]
Average rating: [X.X] stars (Trend: ↑/↓/→ vs. previous period)

## Sentiment Overview
- Positive reviews: [X]% ([count])
- Mixed reviews: [X]% ([count])
- Negative reviews: [X]% ([count])

## Top Strengths (What Customers Love)
1. [Theme] — mentioned [X] times, average sentiment [score]
   Representative quote: "[short excerpt]"
2. [Theme] — mentioned [X] times
3. [Theme] — mentioned [X] times

## Top Concerns (What Needs Attention)
1. [Theme] — mentioned [X] times, average sentiment [score]
   Representative quote: "[short excerpt]"
   Recommended action: [specific suggestion]
2. [Theme] — mentioned [X] times
3. [Theme] — mentioned [X] times

## Emerging Issues (New or Trending)
- [Issue]: First appeared [date], [X] mentions since. Trend: [escalating/stable]
  Risk level: [LOW/MEDIUM/HIGH]

## Competitive Mentions
- [Competitor] mentioned [X] times: [positive/negative context summary]

## Actionable Recommendations
1. [Most impactful action based on data]
2. [Second priority]
3. [Third priority]

## Response Gaps
- [X] reviews still unanswered
- Average response time: [days]
- Oldest unanswered review: [date]
```

## Data Sources

When connected tools are available, pull reviews from:
- Social media mentions (X, Facebook, LinkedIn) via connected ~~social media tools
- Email alerts from review platforms (forwarded to ~~email)
- Customer feedback shared directly by the user

When no tools are connected, ask the user to paste or describe recent reviews for analysis.

## References

See `references/sentiment-guide.md` for advanced sentiment scoring methodology and industry benchmarks.
