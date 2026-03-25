---
name: competitor-content-analyzer
description: >
  Analyze competitor content strategy, identify gaps, and build a differentiation plan. This skill should be used when the user asks to
  "analyze competitor content", "competitor analysis", "content gap analysis", "what are competitors writing about",
  "competitor blog analysis", "competitive content audit", "find content gaps", "content opportunities",
  "competitive intelligence", "who ranks for our keywords", or needs help understanding what competitors are publishing
  and where to differentiate.
version: 2.0.0
---

# Competitor Content Analyzer

Analyze what competitors publish, how well it performs, and — most importantly — where they are weak. The goal is not a report about competitors; it is an action plan for content that outranks them.

## Analysis Process

### 1. Competitor Identification

If the user does not specify competitors, identify them using two categories:

**Direct business competitors** — Companies selling similar products/services. Ask the user to name 3-5.

**Content competitors** — Sites that rank for the same keywords but may not be business rivals. These are often more important for content strategy because they are the pages you actually need to outrank.

To find content competitors:
- Search for 5-10 of the user's target keywords
- Note which domains appear repeatedly in top 10 results
- These are the content competitors to analyze, even if they are blogs, media sites, or directories

Aim for 3-5 competitors per analysis. More than 5 dilutes the analysis without adding insight.

### 2. Content Inventory & Publishing Analysis

For each competitor, use web search to assess:

**Publishing volume and velocity:**
- Approximate total content pages (check blog archive, sitemap)
- Current publishing frequency (note last 10 post dates)
- Is frequency increasing, stable, or declining?

**Content categories:**
- What are their main content pillars/categories?
- How many pieces per category?
- Which categories get the most investment?

**Content types:**
- Blog posts, guides, tutorials
- Case studies, whitepapers, reports
- Tools, calculators, templates
- Video content
- Webinars, podcasts
- Interactive content, data visualizations

**Freshness signals:**
- When was the most recent content published?
- Do they update/refresh old content? (Check for "updated" dates)
- How much of their content is older than 12 months?

### 3. Content Quality Deep Dive

For each competitor, analyze their top 5-10 content pieces (by ranking visibility):

| Dimension | What to Assess | What Matters |
|-----------|---------------|-------------|
| **Depth** | Word count, comprehensiveness, subtopic coverage | Are they thorough or surface-level? |
| **Originality** | Original data, unique frameworks, proprietary research | Do they say something new or rehash existing content? |
| **E-E-A-T** | Author credentials, citations, experience signals | Would Google consider them authoritative? |
| **Structure** | Heading hierarchy, TOC, scanability, visual elements | Is it easy to use and navigate? |
| **Technical SEO** | Title tags, meta descriptions, schema, internal linking | Are they optimized or leaving SEO on the table? |
| **Engagement** | Comments, social shares, backlink profile (if visible) | Does the audience engage with the content? |
| **Conversion** | CTAs, lead magnets, product integration | How do they turn readers into customers? |

**Rate each dimension 1-5 and calculate an overall quality score.**

### 4. Keyword & Topic Coverage Mapping

Build a topic coverage matrix:

```
| Keyword / Topic | Competitor A | Competitor B | Competitor C | Your Site | Gap Type |
|----------------|-------------|-------------|-------------|-----------|----------|
| [topic 1]      | Pillar page | Blog post   | —           | Blog post | FG       |
| [topic 2]      | —           | —           | Blog post   | —         | TG       |
| [topic 3]      | 2022 post   | —           | —           | —         | FR       |
| [topic 4]      | Thin 500w   | Thin 600w   | —           | —         | DG       |
```

**Gap Types:**
- **TG (Topic Gap):** Nobody covers this well — first-mover advantage
- **QG (Quality Gap):** Competitors cover it but poorly — create something better
- **FG (Format Gap):** Competitors use limited formats — add video, tools, templates, interactive elements
- **FR (Freshness Gap):** Competitor content is outdated — publish the definitive current version
- **DG (Depth Gap):** All coverage is shallow — create the comprehensive resource
- **AG (Angle Gap):** Competitors cover the topic but miss specific audiences, use cases, or perspectives
- **CG (Cluster Gap):** Competitors have scattered posts but no cohesive topic cluster — build the authoritative cluster

### 5. Competitor Strengths & Vulnerability Assessment

For each competitor, identify:

**Strengths (where they are hard to beat):**
- Topics where they have the most authority
- Content formats they excel at
- Backlink advantages on specific pages
- Brand recognition or trust advantages

**Vulnerabilities (where you can win):**
- Topics they cover poorly or not at all
- Outdated content they have not refreshed
- Missing content formats (e.g., no video, no tools, no templates)
- Weak technical SEO on otherwise good content
- Missing schema markup opportunities
- Content that is generic and lacks original insights
- Thin pages that rank on domain authority alone

### 6. Content Differentiation Strategy

For each identified opportunity, define how to differentiate:

**Data advantage:** Can you include original data, surveys, experiments, or analysis? This is the #1 differentiator. Original data earns backlinks and cannot be replicated by competitors.

**Depth advantage:** Can you cover the topic 3x more thoroughly? Not longer for the sake of length, but genuinely more comprehensive — more subtopics, more examples, more edge cases.

**Freshness advantage:** Is competitor content outdated? Publish the definitive 2026 version. Include the year in the title. Commit to quarterly updates.

**Format advantage:** Can you add what competitors lack? Comparison tables, calculators, templates, video walkthroughs, interactive elements, downloadable resources.

**Experience advantage:** Can you share first-hand experience that competitors cannot? Case studies, implementation stories, real results, lessons learned.

**Audience advantage:** Can you write for a specific audience that competitors ignore? (Beginners vs. experts, specific industries, specific company sizes)

### 7. Prioritized Action Plan

Rank opportunities using:

```
Priority Score = (Search Volume × Business Relevance × Competitive Weakness) / Effort
```

| Factor | Scale | Description |
|--------|-------|-------------|
| Search Volume | 1-5 | Estimated search demand |
| Business Relevance | 1-5 | How closely this relates to your product/service |
| Competitive Weakness | 1-5 | How beatable are current results (5 = wide open) |
| Effort | 1-5 | Resources needed to create winning content |

**Priority Tiers:**
- Score 15+: Do this first — high impact, beatable competition
- Score 8-14: Plan for this quarter
- Score 4-7: Add to backlog
- Score <4: Deprioritize or reconsider

## Output Format

1. **Competitor Overview** — Side-by-side comparison table (publishing volume, frequency, quality score, main topics, strengths, vulnerabilities)

2. **Topic Coverage Matrix** — Grid showing who covers what, with gap type annotations

3. **Top 10 Content Opportunities** — Ranked by priority score, each with:
   - Target keyword and search intent
   - Gap type (topic, quality, freshness, depth, format, angle)
   - Current best competitor result and its weakness
   - Recommended content format and angle
   - Differentiation strategy
   - Estimated effort

4. **Competitor Strength Map** — Where each competitor is strong and hard to beat (so you can avoid wasting effort)

5. **Action Plan** — Specific content pieces to create, with:
   - Suggested titles and target keywords
   - Recommended format and word count
   - How to differentiate from what currently ranks
   - Internal linking plan (which cluster does this belong to?)
   - Publishing priority and timeline

6. **Ongoing Monitoring Plan** — How to track competitor content changes (new publications, updates, new topics) and when to re-run this analysis

## Additional Resources

Consult `references/competitive-analysis-framework.md` for scoring rubrics, comparison templates, and differentiation strategy details.
