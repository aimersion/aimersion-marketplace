---
name: keyword-researcher
description: >
  Research keywords with SERP-validated volume, difficulty, and intent analysis. This skill should be used when the user asks to
  "find keywords", "keyword research", "search volume for", "keyword difficulty", "keyword ideas",
  "what keywords should I target", "keyword opportunities", "long-tail keywords", "topic clusters",
  "content gap keywords", "competitor keywords", or needs help identifying SEO keyword targets for content creation.
version: 2.0.0
---

# Keyword Researcher

Research and analyze keywords using real SERP data, not guesswork. Every recommendation must be grounded in what actually ranks, what SERP features appear, and what content formats Google rewards for each query. This is not a volume estimator — it is a strategic keyword intelligence tool.

## Critical Principle: SERP-First Research

Most keyword tools fail because they treat keywords as spreadsheet rows with volume and difficulty numbers. That is not how SEO works. The SERP itself is the source of truth. For every keyword worth targeting, you must understand:

1. **What content format wins** — Is Google showing how-to guides, listicles, product pages, videos, or tools? If the top 5 results are all comparison tables and you write a narrative essay, you will not rank.
2. **Who ranks and why** — Are the top results from massive authority sites (Wikipedia, Forbes) or from smaller niche sites? This tells you the real difficulty, not a number from a tool.
3. **What SERP features appear** — Featured snippets, People Also Ask, video carousels, local packs, shopping results, AI Overviews. Each feature changes the strategy.
4. **What is the actual click opportunity** — Some high-volume keywords have near-zero clicks because AI Overviews or featured snippets satisfy the query entirely. Volume without clicks is vanity.

## Research Process

### 1. Seed Keyword Expansion

Take the user's topic or seed keyword and generate variations using these methods:

**Question mining:**
- Search Google for the seed keyword and extract every "People Also Ask" question
- Use patterns: "how to [topic]", "what is [topic]", "why does [topic]", "[topic] vs [alternative]"
- Look for "People Also Search For" suggestions at bottom of SERP

**Modifier stacking:**
- Comparison: vs, alternative to, compared to, better than, or
- Intent qualifiers: best, top, free, cheap, enterprise, for startups, for small business
- Temporal: 2026, latest, new, updated, current
- Action: buy, pricing, demo, trial, download, template, checklist, calculator
- Problem: fix, solve, troubleshoot, why isn't, not working
- Audience: for beginners, for developers, for marketers, for [specific role]

**Competitor keyword mining:**
- Search for the user's main competitors and note what keywords their content targets
- Look at competitor blog categories, navigation, and internal linking to find their keyword strategy
- Identify keywords where competitors rank positions 4-20 (vulnerable positions)

**Reddit and forum mining:**
- Search Reddit for the topic: `site:reddit.com [topic]`
- Extract the actual language real people use when asking about this topic
- These often reveal long-tail keywords and pain points that tools miss entirely

### 2. Search Intent Classification

Classify every keyword into intent categories, but go deeper than the basic four:

| Intent | Signals | Content Format | Conversion Potential |
|--------|---------|---------------|---------------------|
| **Informational - Learn** | "what is", "how does", "guide", "explained" | Guides, explainers, tutorials | Low (top of funnel) |
| **Informational - Do** | "how to", "steps to", "tutorial", "set up" | Step-by-step tutorials, walkthroughs | Medium (shows active need) |
| **Commercial Investigation** | "best", "vs", "review", "comparison", "top" | Comparison posts, reviews, roundups | High (evaluating options) |
| **Transactional** | "buy", "pricing", "demo", "trial", "signup" | Landing pages, pricing pages, product pages | Highest |
| **Navigational** | Brand names, specific product names | Brand pages (usually not worth targeting unless it's your brand) | N/A |

**Critical: Validate intent by checking the SERP.** Do not guess. If someone searches "CRM software" and Google shows 8 comparison pages, the intent is Commercial Investigation even though the query has no comparison modifiers.

### 3. SERP-Validated Difficulty Assessment

Forget arbitrary 1-100 scores. Assess real difficulty by examining who actually ranks:

**Easy (target with content alone):**
- Top results include forums, small blogs, outdated content (2+ years old)
- No major authority sites in top 5
- Thin content ranking (under 1,000 words)
- Few or no SERP features competing for clicks

**Medium (need strong content + basic authority):**
- Mix of authority sites and smaller sites in top 10
- Content quality varies — some strong, some weak
- Some SERP features present
- Your domain has comparable authority to sites ranking in positions 5-10

**Hard (need authority + links + exceptional content):**
- Top 5 dominated by high-authority sites (DR 70+)
- All top results are comprehensive, well-optimized, frequently updated
- Multiple SERP features reducing organic click opportunity
- Featured snippets owned by strong competitors

**Not Worth It (for now):**
- Top 10 is all Wikipedia, government sites, or massive brands
- AI Overview completely answers the query with zero click-through
- The keyword has search volume but near-zero click opportunity

### 4. Volume and Click Opportunity Estimation

Since we cannot access paid tool APIs, estimate volume through proxy signals:

- **Google autocomplete aggressiveness** — Keywords that autocomplete after 2-3 characters have high volume
- **Number of results** — More indexed results generally correlates with higher volume
- **Ad presence** — If Google shows ads, there is commercial volume
- **SERP feature density** — More features = more volume (Google only adds features for popular queries)
- **Related searches count** — More related searches = broader topic with more volume

**Rate as:** Very High / High / Medium / Low / Very Low

**Always note click opportunity separately.** A keyword with "High volume" but an AI Overview that fully answers the query has "Low click opportunity."

### 5. Topic Cluster Architecture

Group keywords into clusters that map to a hub-and-spoke content architecture:

**Pillar page (hub):** Targets the broadest keyword in the cluster. Comprehensive (3,000-5,000 words). Links to every spoke.

**Supporting posts (spokes):** Each targets a specific long-tail keyword. More focused (1,500-2,500 words). Links back to the pillar page and cross-links to sibling posts.

**For each cluster, define:**
- The pillar keyword and page format
- 4-8 supporting keywords with specific content recommendations
- The internal linking structure
- The recommended publishing sequence (pillar first, then spokes over 4-8 weeks)
- One "money keyword" in the cluster (the transactional or commercial intent keyword the cluster ultimately serves)

### 6. Keyword Prioritization Matrix

Score each keyword/cluster using this framework:

| Factor | Weight | How to Score |
|--------|--------|-------------|
| Business relevance | 30% | How directly does this keyword relate to the user's product/service? |
| Click opportunity | 25% | After SERP features and AI Overviews, do people actually click organic results? |
| Difficulty | 20% | Can you realistically rank with your current authority? |
| Conversion potential | 15% | Is the searcher likely to become a customer? |
| Content gap | 10% | Do you already have content for this keyword, or is it greenfield? |

**Priority tiers:**
- **Tier 1 — Do This Month:** High business relevance + achievable difficulty + good click opportunity
- **Tier 2 — Do This Quarter:** Good opportunity but needs more effort or authority building
- **Tier 3 — Strategic Backlog:** Hard keywords to build toward over 6-12 months
- **Skip:** Low relevance, no click opportunity, or unrealistic difficulty

## Output Format

### Keyword Intelligence Report

1. **Executive Summary** (3-5 sentences)
   - Total keywords analyzed, key opportunities found, recommended strategy in one paragraph

2. **Primary Keywords Table**

| Keyword | Intent | Est. Volume | Click Opportunity | Difficulty | SERP Features | Priority |
|---------|--------|------------|-------------------|-----------|---------------|----------|

3. **Topic Clusters**
   For each cluster:
   - Pillar keyword and recommended page title
   - Supporting keywords with content format recommendations
   - Internal linking plan
   - Publishing sequence

4. **Quick Wins** (top 5)
   Keywords where you can rank fastest with the least effort. Include specific content recommendations for each.

5. **Featured Snippet Opportunities**
   Keywords where a featured snippet exists and is winnable (current snippet is weak, outdated, or from a low-authority source).

6. **Strategic Recommendations**
   - Which clusters to build first and why
   - Content format recommendations backed by SERP analysis
   - Timeline expectations (realistic, not optimistic)
   - What to avoid (keywords that look attractive but have no click opportunity)

## What Separates Good Keyword Research From Bad

**Bad keyword research:** A spreadsheet of keywords with volume and difficulty numbers, sorted by "opportunity score." No SERP analysis. No content format guidance. No realistic assessment of what it takes to rank.

**Good keyword research:** Every recommendation backed by "here is what currently ranks and why." Clear content format guidance. Honest about difficulty. Identifies the actual click opportunity. Groups keywords into actionable clusters with publishing plans.

## Additional Resources

Consult `references/keyword-frameworks.md` for detailed scoring rubrics, SERP analysis templates, and clustering methodologies.
