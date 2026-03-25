---
description: Generate a full week of social media content
argument-hint: "<topic or theme>"
---

Generate a complete week of social media content for the user's small business, covering X, LinkedIn, and Facebook.

## Steps

1. **Gather context** — Ask the user (if not provided via $ARGUMENTS):
   - What's the weekly theme or focus? (product launch, seasonal, educational, etc.)
   - Any specific promotions, events, or announcements to include?
   - Any topics to avoid?

   If the user provided a topic via "$ARGUMENTS", use that as the theme.

2. **Load the social-media-scheduler skill** for platform-specific formatting guidelines.

3. **Plan the week** using this content calendar:

   | Day | Platform | Content Type |
   |-----|----------|-------------|
   | Monday | LinkedIn | Thought leadership / industry insight |
   | Tuesday | X + Facebook | Educational tip / how-to |
   | Wednesday | LinkedIn | Behind-the-scenes / team story |
   | Thursday | X + Facebook | Social proof / customer story |
   | Friday | All platforms | Engagement post / weekend CTA |

4. **Draft all posts** — For each day:
   - Write the platform-specific version(s)
   - Include character counts
   - Add suggested hashtags
   - Note any images or media recommendations

5. **Present the full week** in a structured calendar format:

```
📅 SOCIAL MEDIA CONTENT PLAN — Week of [Date]
Theme: [theme]

--- MONDAY ---
📌 LinkedIn
[Full post text]
Characters: [n] | Hashtags: [list]
Image suggestion: [description]

--- TUESDAY ---
📌 X (Twitter)
[Full post text]
Characters: [n/280]

📌 Facebook
[Full post text]
Image suggestion: [description]

[Continue for all 5 days]
```

6. **Offer next steps** — Ask if the user wants to:
   - Publish any posts immediately
   - Adjust tone, topics, or scheduling
   - Add weekend bonus content
