---
description: Daily review briefing — new reviews, sentiment snapshot, and response queue
allowed-tools: Read, Write, Bash, WebSearch, mcp__86003877-f856-411d-a979-63f674ece88f__facebook_get_posts, mcp__86003877-f856-411d-a979-63f674ece88f__facebook_get_comments, mcp__b5dee7a2-4079-4fcf-b3cb-28b350b27889__x_search_posts, mcp__fa8e9f3c-3328-4059-a272-c7a9b1f268e0__gmail_search_messages
---

Generate a daily review briefing for the user's business. Gather data from all connected sources and present an actionable overview.

## Steps

1. **New Reviews** — Check for recent reviews and feedback across connected platforms:
   - Search email for review notification alerts from Google, Yelp, or other platforms
   - Check Facebook page for recent reviews and comments
   - Search X for brand mentions that could contain feedback
   - Summarize each new review: platform, rating, key sentiment, response status

2. **Sentiment Snapshot** — Quick analysis of recent reviews:
   - Overall trend: improving, stable, or declining
   - Top positive theme this week
   - Top concern this week
   - Any emerging issues to watch

3. **Response Queue** — Identify reviews needing responses:
   - Flag any unanswered negative reviews (URGENT)
   - Flag any unanswered positive reviews older than 3 days
   - For each, draft a quick response outline

4. **Action Items** — Based on the data, recommend 3-5 specific actions:
   - Reviews to respond to (with priority order)
   - Review solicitation opportunities
   - Reputation risks to address
   - Positive trends to amplify

## Output Format

```
📋 DAILY REVIEW BRIEF — [Today's Date]

⭐ NEW REVIEWS
[Summary of any new reviews found, with ratings and key sentiment]

📊 SENTIMENT SNAPSHOT
Overall trend: [improving/stable/declining]
Positive theme: [theme]
Concern to watch: [theme]

💬 RESPONSE QUEUE
🔴 Urgent: [unanswered negative reviews]
🟡 Pending: [unanswered positive/mixed reviews]

✅ TODAY'S ACTION ITEMS
1. [Most urgent action]
2. [Second priority]
3. [Third priority]
```

If a platform isn't connected, skip it and note which connections could provide a fuller picture.
