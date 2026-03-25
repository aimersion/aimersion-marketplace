---
description: Draft responses for all pending unanswered reviews
allowed-tools: Read, Write, Bash, WebSearch, mcp__86003877-f856-411d-a979-63f674ece88f__facebook_get_posts, mcp__86003877-f856-411d-a979-63f674ece88f__facebook_get_comments, mcp__86003877-f856-411d-a979-63f674ece88f__facebook_reply_to_comment, mcp__fa8e9f3c-3328-4059-a272-c7a9b1f268e0__gmail_search_messages
---

Draft professional responses for all pending unanswered customer reviews.

## Steps

1. **Gather unanswered reviews** — Check all available sources for reviews without responses:
   - Facebook page comments and reviews
   - Email notifications from review platforms
   - Any reviews the user provides directly

2. **Prioritize the queue** — Order by urgency:
   - 1-2 star reviews (respond first)
   - 3 star mixed reviews (respond second)
   - 4-5 star positive reviews (respond third)
   - Within each tier, oldest first

3. **Draft each response** using the review-responder skill's framework:
   - Classify the review (sentiment, issue category)
   - Select the appropriate response template
   - Personalize with specifics from their review
   - Adapt tone for the platform

4. **Present all drafts** for user approval before posting:
   - Show the original review alongside each draft response
   - Note the response strategy used for each
   - Ask the user to approve, modify, or skip each one

5. **Post approved responses** — After user confirms, post to the platforms where tools are connected

## Output Format

For each review, present:

```
---
REVIEW #[N] — [Platform] — [Star Rating] ⭐
Posted: [date]

Original review:
"[Review text]"

Draft response:
"[Your drafted response]"

Strategy: [Brief note on approach used]
Action: [Approve / Edit / Skip]
---
```

After all drafts are presented, ask: "Shall I post the approved responses?"
