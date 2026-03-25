---
description: Daily marketing briefing with social stats and action items
allowed-tools: Read, Write, Bash, Grep, WebSearch, mcp__b5dee7a2-4079-4fcf-b3cb-28b350b27889__x_get_my_timeline, mcp__f1f28a54-a791-4777-b494-6340e4c7af7d__linkedin_get_my_posts, mcp__86003877-f856-411d-a979-63f674ece88f__facebook_get_posts, mcp__86003877-f856-411d-a979-63f674ece88f__facebook_get_page_insights, mcp__fa8e9f3c-3328-4059-a272-c7a9b1f268e0__gmail_search_messages, mcp__f5773182-1e91-4d48-8bde-f44e840a2614__gcal_list_events
---

Generate a daily marketing briefing for the user's small business. Gather data from all connected sources and present an actionable morning overview.

## Steps

1. **Social Media Recap** — Check recent posts across connected platforms:
   - Pull the last 5 posts from X and note engagement (likes, retweets, replies)
   - Pull the last 5 LinkedIn posts and note engagement
   - Pull the last 5 Facebook page posts and note likes, comments, shares
   - Highlight the top-performing post across all platforms
   - Flag any posts with unusually low engagement

2. **Email Check** — Search for any marketing-related emails from the last 24 hours:
   - Look for replies to campaigns, newsletter responses, or lead inquiries
   - Summarize any actionable items

3. **Today's Calendar** — Check for any marketing-related meetings or deadlines today

4. **Action Items** — Based on the data, recommend 3–5 specific actions for today:
   - Content to post or schedule
   - Engagement to respond to (comments, replies, DMs)
   - Leads to follow up with
   - Content to create or plan

## Output Format

Present the briefing in a clean, scannable format:

```
☀️ MORNING MARKETING BRIEF — [Today's Date]

📊 SOCIAL MEDIA SNAPSHOT
[Platform-by-platform summary with engagement highlights]

Top performer: [post summary + metrics]

📧 EMAIL & LEADS
[Summary of inbound activity]

📅 TODAY'S MARKETING CALENDAR
[Events, deadlines, scheduled posts]

✅ TODAY'S ACTION ITEMS
1. [Most important action]
2. [Second priority]
3. [Third priority]
[...]
```

If a platform isn't connected, skip it and note which platforms could be connected for a fuller picture.
