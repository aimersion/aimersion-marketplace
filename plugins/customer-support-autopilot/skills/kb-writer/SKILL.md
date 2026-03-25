---
name: kb-writer
description: >
  Create knowledge base articles from resolved support issues. This skill should be used when the user asks to
  "write a KB article", "create a help article", "document this solution", "add to the knowledge base",
  "write a how-to guide", "create an FAQ", "turn this ticket into documentation", or needs help
  converting resolved support issues into reusable self-service content.
version: 0.1.0
---

# KB Writer

Create clear, searchable knowledge base articles from resolved support issues, product features, or common questions.

## Article Creation Process

1. **Identify the topic** — extract the core question or problem from the source material (ticket, conversation, feature docs).
2. **Determine article type** — how-to, troubleshooting, FAQ, or reference.
3. **Draft the article** following the structure for that type.
4. **Optimize for search** — write a clear title, add keywords, create a concise summary.
5. **Review for completeness** — ensure the article stands alone without requiring prior context.

## Article Types

### How-To Guide
For step-by-step instructions to accomplish a task.

Structure:
- **Title**: "How to [action]" format
- **Summary**: 1–2 sentences describing what this guide covers
- **Prerequisites**: What the reader needs before starting
- **Steps**: Numbered, specific, one action per step
- **Expected Result**: What success looks like
- **Related Articles**: Links to adjacent topics

### Troubleshooting Guide
For diagnosing and resolving problems.

Structure:
- **Title**: Problem statement or error message
- **Symptoms**: What the user observes
- **Cause**: Brief explanation of why this happens
- **Solution**: Step-by-step fix (primary solution first, alternatives below)
- **Prevention**: How to avoid this in the future
- **Still Need Help?**: When to contact support

### FAQ Entry
For quick answers to common questions.

Structure:
- **Question**: Written as the customer would ask it
- **Answer**: Direct answer first, then supporting details
- **Related Questions**: Cross-links

### Reference Article
For product specifications, limits, or feature documentation.

Structure:
- **Title**: Descriptive feature or concept name
- **Overview**: What it is and why it matters
- **Details**: Specifications, limits, behavior
- **Examples**: Real-world usage scenarios
- **Limitations**: Known constraints or edge cases

## Writing Guidelines

- **Write for scanning** — use headers, bullet points, and short paragraphs. Most readers scan, not read.
- **Use the customer's language** — avoid internal jargon. Write the way customers describe the problem, not the way engineers do.
- **Be specific** — "Click the gear icon in the top-right corner" beats "Go to settings."
- **One topic per article** — if an article covers multiple problems, split it.
- **Include search keywords** — think about what the customer would type into the help center search bar.
- **Test the steps** — every instruction should be verifiable.

## Title Optimization

Good titles are:
- Specific: "How to export data as CSV" not "Exporting data"
- Customer-phrased: "Why am I getting a 403 error?" not "403 Access Denied Error Resolution"
- Action-oriented for how-tos: "How to..." or "Set up..."
- Problem-oriented for troubleshooting: "Fix..." or the error message itself

## Output Format

```
**Article Type**: [How-To / Troubleshooting / FAQ / Reference]
**Title**: [Optimized title]
**Search Keywords**: [comma-separated terms]

---

[Full article content in markdown]

---

**Source**: [Ticket #, conversation, or feature request that prompted this article]
**Review Status**: Draft — ready for team review
```

## Reference Material

For article templates and style guide details, see `references/article-templates.md`.
