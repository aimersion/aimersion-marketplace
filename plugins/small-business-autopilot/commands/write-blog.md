---
description: Draft an SEO-optimized blog post on a topic
argument-hint: "<topic or keyword>"
---

Write a complete, SEO-optimized blog post for the user's small business.

## Steps

1. **Define the topic** — Use "$ARGUMENTS" as the topic/keyword. If not provided, ask:
   - What topic should the blog post cover?
   - Who is the target reader?
   - What action should the reader take after reading?
   - Any specific keywords to target?

2. **Load the content-writer skill** for SEO writing guidelines and blog structure.

3. **Keyword research** — Search the web for:
   - What questions people ask about this topic
   - What the top-ranking articles cover
   - Related keywords and subtopics to include
   - Angles that aren't well covered yet

4. **Propose an outline** — Present the blog structure for approval:
   - Title (with primary keyword)
   - H2 section headings
   - Key points per section
   - Estimated word count
   - Wait for user approval before writing

5. **Write the full post** — Following SEO best practices:
   - Primary keyword in title, first paragraph, one H2, and naturally throughout
   - Short paragraphs (2–4 sentences)
   - Subheadings every 200–300 words
   - Actionable advice with examples
   - 1,200–2,000 words unless the user specifies otherwise

6. **Deliver with metadata**:

```
📝 BLOG POST

Title: [title]
Target keyword: [primary keyword]
Secondary keywords: [list]
Word count: [n]
Meta title: [50-60 chars]
Meta description: [150-160 chars]
Suggested URL slug: [/slug]

---

[Full blog post content]

---

INTERNAL LINK SUGGESTIONS:
- [Link this phrase] → [page on their site]

IMAGE SUGGESTIONS:
- Hero image: [description]
- Section image: [description for key section]
```

7. **Run the SEO checklist** from `references/seo-checklist.md` against the finished post and note any items to address.
