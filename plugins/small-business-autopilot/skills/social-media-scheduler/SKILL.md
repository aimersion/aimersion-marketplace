---
name: social-media-scheduler
description: >
  Generate and schedule social media content across X (Twitter), LinkedIn, and Facebook
  with platform-specific formatting. This skill should be used when the user asks to
  "create social posts", "draft social media content", "schedule posts", "plan social
  media", "write tweets", "create LinkedIn posts", "draft Facebook posts", or needs
  help with any social media content creation and publishing workflow.
version: 1.0.0
---

# Social Media Scheduler

Generate platform-optimized social media content and publish it through connected social accounts.

## Core Workflow

1. **Understand the brief** — topic, audience, tone, and call-to-action
2. **Draft platform-specific versions** — adapt the message for each platform's format and audience
3. **Present for review** — show all drafts grouped by platform with character counts
4. **Publish or queue** — post immediately or note scheduling preferences

## Platform Formatting Rules

### X (Twitter)
- Hard limit: 280 characters
- Front-load the hook in the first line
- Use 1–3 relevant hashtags at the end (not inline)
- Thread format for longer content: lead tweet hooks, subsequent tweets deliver value
- Avoid links in the main text when possible — add as a reply
- Tone: punchy, conversational, opinionated

### LinkedIn
- Optimal length: 1,200–1,500 characters (long-form performs best)
- Open with a bold first line — this is the "above the fold" hook before "see more"
- Use line breaks liberally for readability (single-sentence paragraphs)
- End with a question or clear CTA to drive comments
- 3–5 hashtags at the bottom
- Tone: professional but personal, thought-leadership oriented

### Facebook
- Optimal length: 100–250 characters for engagement, up to 500 for storytelling
- Lead with emotion or a question
- Emojis are acceptable and increase engagement
- Include a clear CTA (link, comment prompt, share request)
- Hashtags: 1–2 maximum, or none
- Tone: warm, community-oriented, conversational

## Content Pillars for Small Businesses

When the user hasn't specified a topic, suggest content from these proven pillars:

- **Educational** — tips, how-tos, industry insights (40% of content)
- **Behind-the-scenes** — team stories, process, day-in-the-life (20%)
- **Social proof** — testimonials, case studies, results (20%)
- **Promotional** — offers, launches, events (15%)
- **Engagement** — polls, questions, trending topics (5%)

## Publishing

Use the connected ~~social media tools to publish content:
- For X: use the X posting tool to create posts
- For LinkedIn: use the LinkedIn posting tool to create posts (personal or company page)
- For Facebook: use the Facebook posting tool to publish to the business page

Always confirm with the user before publishing. Present a final summary:
```
Platform: [X / LinkedIn / Facebook]
Content: [full text]
Character count: [n]
```

Wait for explicit approval before posting.

## Weekly Content Calendar

When planning a full week, structure content across the week:

| Day | Platform Focus | Content Type |
|-----|---------------|--------------|
| Monday | LinkedIn | Thought leadership / industry insight |
| Tuesday | X + Facebook | Educational tip / how-to |
| Wednesday | LinkedIn | Behind-the-scenes / team story |
| Thursday | X + Facebook | Social proof / testimonial |
| Friday | All platforms | Engagement post / weekend CTA |

Adjust based on the user's industry and audience behavior.

## Detailed References

For platform algorithm tips and engagement optimization, see `references/platform-playbook.md`.
