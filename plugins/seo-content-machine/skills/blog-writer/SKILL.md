---
name: blog-writer
description: >
  Write SEO-optimized long-form blog posts with content briefs, E-E-A-T signals, schema markup, and featured snippet optimization.
  This skill should be used when the user asks to "write a blog post", "draft an article", "create SEO content",
  "write a post targeting [keyword]", "blog post about", "long-form content", "SEO article", "content brief",
  or needs help creating optimized written content.
version: 2.0.0
---

# Blog Writer

Write content that actually ranks — not content that checks SEO boxes but reads like it was written by a keyword-stuffing machine. Every post must earn its ranking by being the best answer to the searcher's question while being technically optimized for search engines.

## The Difference Between Content That Ranks and Content That Doesn't

Content fails to rank for three reasons, in order of frequency:

1. **Search intent mismatch.** You wrote a 3,000-word guide but the SERP shows comparison tables. Format matters more than word count.
2. **No information gain.** Your content says the same things as every other result. Google has no reason to rank it. If you cannot identify what makes your piece better, more complete, or more useful than what already ranks, do not publish.
3. **Weak authority signals.** No author byline, no original data, no first-hand experience, no citations. Google's E-E-A-T framework is not optional — it determines whether your content is trusted.

## Writing Process

### Phase 1: Content Brief (Before Writing a Single Word)

**This is the most important step.** Create a content brief that a freelance writer could follow to produce a ranking article. The brief must include:

**Target Keyword & Intent:**
- Primary keyword and confirmed search intent (validated by checking the SERP, not guessing)
- 3-5 secondary keywords to include naturally
- 2-3 question-based keywords (from "People Also Ask") to answer explicitly in the content

**SERP Analysis Summary:**
- What content format wins (listicle, how-to, guide, comparison, etc.)
- Average word count of top 3 results
- What the top 3 results cover (key topics/sections)
- What they miss (your opportunity to add value)
- SERP features present (featured snippet format, PAA questions, video carousel)

**Content Angle:**
- What makes this piece different from what already ranks?
- What original insight, data, experience, or perspective are you adding?
- If you cannot answer this, reconsider whether to write the piece

**Outline with Required Sections:**
- H1 (contains primary keyword, matches search intent)
- H2/H3 structure mapped out
- For each section: 2-3 bullet points on what to cover
- Specify where to include the primary keyword, secondary keywords, and PAA answers

**E-E-A-T Requirements:**
- Who is the author, and what is their relevant expertise?
- What first-hand experience or original data can be included?
- What authoritative sources will be cited?

### Phase 2: SEO Metadata

**Meta Title (50-60 characters):**
- Primary keyword within the first 4-5 words
- Include a compelling element: number, year, power word ("Complete", "Proven", "Step-by-Step"), or clear benefit
- Test: Would you click this over the other titles on page 1?

**Meta Description (150-160 characters):**
- Summarize the unique value of the post (not just the topic, but why YOUR piece)
- Include primary keyword naturally
- End with implicit or explicit call to action
- Include a differentiator ("with real examples", "based on our data", "step-by-step")

**URL Slug:**
- 3-5 words, hyphenated, lowercase
- Contains primary keyword
- No dates (unless the content is time-bound by nature, like "2026 predictions")
- No stop words

### Phase 3: Writing the Post

**Introduction (100-150 words):**
- Open with a hook: a surprising statistic, a common pain point, a provocative claim, or a relatable scenario
- State the problem the reader has
- Promise what they will learn or achieve by reading
- Include the primary keyword in the first 100 words
- Do NOT start with a dictionary definition. Do NOT start with "In today's fast-paced world..."

**Body Structure:**
- Use H2 for major sections, H3 for subsections. Never skip levels (H2 → H4).
- Each H2 section should be independently valuable (someone skimming should get value from any single section)
- Include secondary keywords in H2 headings where natural — but never force them
- Target word count based on SERP analysis (match or beat the top results, but only with substance)

**Paragraph Style:**
- 2-4 sentences per paragraph. One-sentence paragraphs for emphasis.
- Active voice (80%+)
- Concrete examples, specific numbers, and real scenarios — not abstract advice
- Every claim backed by either data, experience, or citation

**Featured Snippet Optimization:**
- For definition queries: Include a concise 40-60 word definition immediately after the relevant H2
- For list queries: Use numbered or bulleted lists with clear, parallel structure
- For comparison queries: Use comparison tables
- For "how to" queries: Use numbered step lists with clear, actionable steps

**Content That Demonstrates E-E-A-T:**
- Include real examples from the author's or company's experience
- Reference original data, case studies, or experiments when available
- Cite authoritative external sources (link to primary sources, not other blog posts)
- Include author byline with relevant credentials in the metadata
- Add "Last updated: [date]" metadata — Google rewards freshness signals
- Use specific numbers and results, not vague claims ("increased traffic 47%" not "significantly increased traffic")

**Internal Linking Strategy:**
- Link to 3-5 related pages using descriptive anchor text
- Every supporting post links back to its pillar page
- Link to conversion pages (product, pricing, demo) where naturally relevant — no forced CTAs mid-sentence
- Place the most important internal link in the first 1/3 of the post (gets more crawler and user attention)

**External Linking:**
- Link to 2-4 authoritative sources (industry studies, official documentation, research papers)
- Link to primary sources, not secondhand blog posts
- Open external links in new tab
- Do NOT link to direct competitors' blog posts

### Phase 4: Post-Writing SEO Checklist

Run through every item:

- [ ] Primary keyword in: meta title, H1, first 100 words, at least one H2, meta description, URL slug, conclusion
- [ ] Secondary keywords distributed naturally (not clustered in one section)
- [ ] PAA questions answered explicitly with clear heading + concise answer
- [ ] Internal links: 3-5, descriptive anchor text, relevant targets
- [ ] External links: 2-4, authoritative sources, open in new tab
- [ ] No orphan sections (every section links to or from another)
- [ ] Image alt text: descriptive, keyword-relevant where natural (not "keyword-keyword-keyword.jpg")
- [ ] Readability: Flesch 60+ (use short sentences, simple words, active voice)
- [ ] Mobile-friendly formatting: short paragraphs, no wide tables, readable at small screen widths
- [ ] Schema markup recommendation included (see below)

### Phase 5: Schema Markup Recommendations

For every blog post, recommend the appropriate JSON-LD schema:

**Every post should have:**
- `Article` or `BlogPosting` schema with: headline, author (with name and url), datePublished, dateModified, image, publisher

**If the post answers questions:**
- `FAQPage` schema for explicitly answered questions (note: Google now only shows FAQ rich results for authoritative government and health sites, but the structured data still helps AI systems cite your content)

**If the post is a how-to:**
- `HowTo` schema with steps (note: Google deprecated HowTo rich results, but the structured data helps AI Overviews and other AI systems extract your content for citation)

**If the post is a listicle or review:**
- Consider `ItemList` schema

**Provide the actual JSON-LD code block** the user can paste into their page head.

## Output Format

Deliver the blog post as a complete markdown document with:

1. **Content Brief** at the top (target keyword, intent, SERP summary, content angle, E-E-A-T notes)
2. **SEO Metadata Block** (meta title, meta description, slug, primary/secondary keywords, recommended schema type)
3. **Full Article** in markdown with proper heading hierarchy
4. **Schema Markup Code** (JSON-LD block ready to implement)
5. **Internal Link Suggestions** with recommended anchor text
6. **Image Placement Notes** with alt text suggestions
7. **Featured Snippet Targets** — specific PAA questions this post is optimized to capture

## Content Quality Standards

- Write in the user's brand voice (ask if not specified)
- Every section must teach something specific or answer a specific question — no padding
- Include at least one specific example, case study, data point, or original insight per major section
- Avoid: "In conclusion," "As we've discussed," "It's important to note that," "In today's digital landscape"
- Test: If you remove a section and the post is still complete, that section did not need to exist

## Special Content Types

### E-Commerce Product Content
- Focus on buyer keywords (transactional intent)
- Include Product schema markup
- Emphasize unique value propositions, not just features
- Add comparison elements if the keyword has commercial investigation intent

### Local SEO Content
- Include location-specific keywords naturally
- Recommend LocalBusiness schema
- Reference local landmarks, neighborhoods, or regional details
- Include NAP (Name, Address, Phone) consistency reminders

### Programmatic SEO Templates
- When the user needs content at scale (e.g., "[Service] in [City]" pages)
- Design a template with variable fields
- Ensure each generated page has enough unique, valuable content to avoid thin content penalties
- Include unique data points per page (local statistics, specific examples, regional information)

## Additional Resources

Consult `references/seo-writing-guide.md` for content templates, keyword density guidelines, E-E-A-T checklist, and schema markup examples.
