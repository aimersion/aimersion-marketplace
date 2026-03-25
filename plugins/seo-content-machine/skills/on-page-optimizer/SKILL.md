---
name: on-page-optimizer
description: >
  Audit pages for on-page SEO including schema markup, Core Web Vitals, E-E-A-T signals, internal linking topology,
  and featured snippet eligibility. This skill should be used when the user asks to "audit a page", "SEO audit",
  "check SEO", "optimize this page", "on-page SEO", "improve rankings", "fix SEO issues", "technical SEO check",
  "page optimization", "schema markup audit", "why isn't my page ranking", or needs help identifying and fixing
  on-page SEO problems.
version: 2.0.0
---

# On-Page Optimizer

Audit web pages and deliver prioritized, actionable recommendations based on what actually moves rankings — not a generic checklist of 50 items that treats a missing alt tag the same as a search intent mismatch.

## Philosophy: Diagnose Before Prescribing

Most SEO audits produce a laundry list of minor issues while missing the one thing that actually matters. Before checking any technical detail, answer the fundamental question:

**Does this page deserve to rank for its target keyword?**

Check: Is the content format correct for the SERP? Is the content comprehensive enough? Does it have unique value? If the answer to any of these is "no," no amount of title tag optimization will help. Diagnose the strategic problem first, then get into technical details.

## Audit Process

### Phase 1: Strategic Assessment

Before examining any HTML, answer these questions:

1. **What is the target keyword?** (Ask the user or infer from the page content)
2. **What does the SERP look like?** Search for the target keyword. What content formats rank? What SERP features appear?
3. **Does this page match the SERP intent?** If Google shows comparison tables and this page is a narrative essay, that is the #1 problem — everything else is secondary.
4. **How does this page compare to what ranks?** Is it more or less comprehensive? More or less current? Better or worse structured?

**Score: Search Intent Alignment (0-100)**
- 100: Perfect format match, comparable or better depth than top results
- 75: Right format, but gaps in depth or coverage
- 50: Partially matching format with significant gaps
- 25: Wrong format or severely lacking
- 0: Completely misaligned with SERP intent

If this score is below 50, the primary recommendation should be content restructuring or rewriting — not meta tag tweaks.

### Phase 2: Technical On-Page Audit

Fetch the page and evaluate:

**Title Tag**
- Present and unique?
- Length: 50-60 characters (flag if outside range)
- Primary keyword present? Position? (First 5 words is ideal)
- Compelling for CTR? (Would you click this over competitors?)
- Does it match the page's actual content?

**Meta Description**
- Present?
- Length: 150-160 characters
- Primary keyword included naturally?
- Contains unique value proposition (not just topic description)?
- Includes implicit or explicit CTA?
- Different from every other page's meta description?

**URL Structure**
- Short (under 60 characters path)?
- Contains target keyword?
- Hyphens (not underscores)?
- No unnecessary parameters, session IDs, or deep nesting?
- No dates in URL for evergreen content?

**Heading Hierarchy**
- Exactly one H1?
- H1 contains primary keyword?
- H1 aligns with title tag and search intent?
- Logical H2/H3 hierarchy (no skipped levels)?
- H2s contain secondary keywords where natural?
- Headings are descriptive and scannable (not just "Introduction," "Section 1")?

**Content Quality**
- Word count (compare to top-ranking competitors, not an arbitrary number)
- Primary keyword in first 100 words?
- Content depth: Does it cover the topic as thoroughly as the top results?
- Unique value: What does this page offer that competitors don't?
- Readability: Short paragraphs, active voice, accessible language
- Freshness: When was this last updated? Is the information current?

**E-E-A-T Signals**
- Author byline with name and credentials?
- Author page/bio linked?
- Date published and date modified visible?
- Citations to authoritative sources?
- First-hand experience or original data present?
- Transparent methodology for any claims?

**Internal Linking**
- Number of internal links (minimum 3, ideal 5-8 for a 2,000-word post)
- Anchor text quality (descriptive vs. generic)
- Links to relevant, high-value pages?
- Part of a topic cluster with proper hub-spoke linking?
- Orphan page check: Is this page linked FROM other pages on the site?

**External Linking**
- Links to authoritative, relevant sources?
- No broken external links?
- Appropriate nofollow on sponsored/untrusted links?
- Not linking to direct competitors?

**Image Optimization**
- All images have descriptive alt text?
- Alt text is keyword-relevant where natural?
- File names are descriptive (not IMG_1234.jpg)?
- Images are appropriately sized (not 5MB hero images)?
- At least one relevant image per 500 words?

### Phase 3: Schema Markup Audit

Check for existing structured data and recommend additions:

**Check for:**
- Article/BlogPosting schema (with author, dates, publisher)
- FAQ schema (if the page answers questions)
- BreadcrumbList schema (for site navigation context)
- Organization schema (on homepage/about page)
- Product schema (for product pages — with price, availability, reviews)
- LocalBusiness schema (for local pages — with NAP, hours, service area)
- HowTo schema (for tutorial content)
- VideoObject schema (if page contains video)

**For each missing schema type that applies, provide:**
- The specific JSON-LD code to implement
- Where in the page head to place it
- Expected impact on search visibility

### Phase 4: Featured Snippet Eligibility

Assess whether this page could capture featured snippets:

1. Does the target keyword trigger a featured snippet? (Check the SERP)
2. What type? (Paragraph, list, table, video)
3. Who currently owns the snippet?
4. Is the snippet beatable? (Weak content, outdated, from low-authority source?)

**If snippet opportunity exists:**
- Identify the specific question or query
- Recommend the exact content format needed (40-60 word paragraph, numbered list, comparison table)
- Specify where in the page to place the optimized content
- Note: Position in top 10 is typically required before Google considers you for a snippet

### Phase 5: Content Decay Check

If the page is more than 6 months old:
- Has traffic declined from its peak? (Ask user to check Google Search Console)
- Are there newer competitor pages ranking above it?
- Does the content reference outdated statistics, tools, or practices?
- Has the search landscape changed (new SERP features, changed intent)?

**If decay is detected:**
- Recommend specific sections to update
- Identify new keywords or subtopics to add
- Suggest structural changes to match evolved SERP intent
- Note: Cosmetic updates (changing a date) do not reverse decay — substantive improvements are required

### Phase 6: Scoring and Prioritization

Score across these categories:

| Category | Weight | What It Measures |
|----------|--------|-----------------|
| Search Intent Alignment | 25% | Does the content format and depth match the SERP? |
| Content Quality & E-E-A-T | 25% | Depth, uniqueness, authority signals, freshness |
| Technical On-Page | 20% | Title, meta, headings, URL, images |
| Internal Linking | 15% | Link quality, quantity, anchor text, cluster structure |
| Schema & Structured Data | 10% | Appropriate schema implemented correctly |
| Featured Snippet Readiness | 5% | Optimized for snippet capture where applicable |

**Overall Score Interpretation:**
- 85-100: Strong — minor optimizations only
- 70-84: Good — a few high-impact fixes will help
- 50-69: Needs work — significant optimizations required
- Below 50: Major issues — consider rewrite or restructure

### Phase 7: Prioritized Recommendations

**Critical (blocking rankings — fix immediately):**
- Search intent mismatch (wrong content format)
- Missing or broken H1/title tag
- Thin content (significantly shorter than competitors)
- No indexing (noindex tag, canonicalization issues)

**High Priority (significant ranking impact — fix this week):**
- Weak title tag or meta description
- Missing E-E-A-T signals (no author, no dates, no citations)
- Poor heading structure
- Missing schema markup
- Content gaps vs. top competitors

**Medium Priority (incremental improvement — fix this month):**
- Internal linking improvements
- Image optimization
- Featured snippet optimization
- Content freshness updates
- Readability improvements

**Low Priority (polish — nice to have):**
- URL optimization (only if not requiring a redirect)
- Additional external citations
- Advanced schema types
- Minor content expansions

## Output Format

1. **Executive Summary** (3-5 sentences: overall health, biggest issue, biggest opportunity)
2. **SEO Score Card** — Overall score + category breakdown with brief explanations
3. **Critical & High Priority Issues** — Specific problems with specific fix instructions
4. **Quick Wins** — Top 3 changes that will have the most impact for the least effort
5. **Competitor Comparison** — How this page stacks up vs. top 3 ranking pages
6. **Rewritten Elements** — Optimized title tag, meta description, H1
7. **Schema Markup** — JSON-LD code blocks for recommended schemas
8. **Featured Snippet Strategy** — Specific snippet target with optimized content format
9. **Content Refresh Recommendations** — If applicable, specific sections to update with what information

## Additional Resources

Consult `references/on-page-checklist.md` for the complete technical audit checklist, schema markup templates, and scoring rubrics.
