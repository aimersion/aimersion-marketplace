---
name: analytics-reporter
description: >
  Analyze social media performance metrics across X, LinkedIn, Facebook, and Instagram.
  This skill should be used when the user asks to "check social media stats", "analyze performance",
  "social media report", "how are my posts doing", "engagement metrics", "reach and impressions",
  "social analytics", or needs help understanding and reporting on social media performance data.
version: 0.1.0
---

# Analytics Reporter

Analyze and report on social media performance across platforms for Aimersion AI. Pull data from connected social accounts, interpret metrics, and provide actionable insights.

## Data Collection

Use available social media tools to gather performance data:

- **X**: Retrieve recent posts and their metrics (likes, retweets, replies, impressions) using X tools
- **LinkedIn**: Retrieve recent posts and engagement data using LinkedIn tools
- **Facebook**: Retrieve page insights, post performance, and engagement using Facebook tools
- **Instagram**: If connected, retrieve post metrics and engagement data

Always state the date range and data source for transparency.

## Key Metrics by Platform

### X (Twitter)
- **Impressions**: Total times a tweet was seen
- **Engagements**: Likes, retweets, replies, link clicks
- **Engagement rate**: Engagements / Impressions
- **Follower growth**: Net new followers in period

### LinkedIn
- **Impressions**: Post views
- **Reactions**: Likes, celebrates, supports, etc.
- **Comments**: Total comment count
- **Shares**: Reposts
- **Engagement rate**: (Reactions + Comments + Shares) / Impressions

### Facebook
- **Reach**: Unique people who saw content
- **Impressions**: Total views (including repeats)
- **Engagement**: Reactions, comments, shares, clicks
- **Page fans**: Total page likes/followers
- **Engagement rate**: Engagements / Reach

### Instagram
- **Reach**: Unique accounts that saw content
- **Impressions**: Total views
- **Engagement**: Likes, comments, saves, shares
- **Engagement rate**: Engagements / Reach

## Analysis Framework

1. **Gather data** — Pull recent posts and metrics from connected platforms
2. **Calculate key metrics** — Compute engagement rates, growth rates, top performers
3. **Identify patterns** — What content types, topics, or posting times performed best?
4. **Benchmark** — Compare current period vs. previous period; note trends
5. **Recommend actions** — Provide specific, actionable suggestions based on findings

## Report Structure

### Executive Summary
- 2-3 sentence overview of performance across platforms
- Highlight biggest win and biggest opportunity

### Platform Breakdown
For each active platform:
- Key metrics for the period
- Top performing post(s) with metrics
- Trend vs. previous period (up/down/stable)

### Content Analysis
- Which topics/themes drove the most engagement?
- Which formats performed best (text, link, visual, video)?
- Optimal posting times based on data

### Recommendations
- 3-5 specific, actionable next steps
- Prioritized by expected impact
- Tied to data findings (not generic advice)

## Output Format

Present reports in a clear, scannable format. Use tables for metric comparisons. Bold key numbers and percentages. Lead with insights, not raw data.

When data is unavailable for a platform, note it explicitly and focus analysis on available platforms.
