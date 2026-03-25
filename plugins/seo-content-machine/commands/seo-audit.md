---
description: Audit a page for on-page SEO including schema, E-E-A-T, snippets, and content decay
argument-hint: [url]
allowed-tools: WebSearch, WebFetch, Read, Write
---

Run a comprehensive on-page SEO audit for the URL: $ARGUMENTS

Follow the on-page-optimizer skill methodology. Complete these steps:

1. **Strategic assessment first (before any technical checks):**
   - Identify the target keyword (from the page content or ask the user)
   - Search for that keyword and analyze the SERP
   - Does this page's format match what Google rewards? (If top results are comparison tables and this is a narrative, that is the #1 problem)
   - How does this page compare to the top 3 results in depth and quality?
   - Score: Search Intent Alignment (0-100)

2. **Fetch the page** and extract: title tag, meta description, headings, body content, links, images, and any existing schema markup.

3. **Run the full technical audit:**
   - Title tag (length, keyword position, compelling for CTR)
   - Meta description (length, keyword, unique value prop, CTA)
   - URL structure (clean, keyword-rich, no parameters)
   - Heading hierarchy (one H1, logical H2/H3, keywords in headings)
   - Content quality (word count vs. competitors, keyword placement, readability, uniqueness)
   - E-E-A-T signals (author byline, dates, citations, experience signals, methodology transparency)
   - Internal links (count, anchor text quality, relevance, cluster connections)
   - External links (authority, functional, relevant)
   - Images (alt text, file names, sizing)

4. **Schema markup audit:**
   - What schema is currently implemented?
   - What schema is missing? (Article, FAQ, BreadcrumbList, Product, LocalBusiness, HowTo)
   - Provide JSON-LD code for each recommended schema type

5. **Featured snippet assessment:**
   - Does the target keyword trigger a snippet?
   - What type (paragraph, list, table)?
   - Is the current snippet beatable?
   - Specific optimization recommendations with content format

6. **Content decay check (if page is 6+ months old):**
   - Is the information current?
   - Have competitors published newer, better content?
   - Has the SERP landscape changed?
   - Specific refresh recommendations if decay detected

7. **Score the page** across all categories:
   - Search Intent Alignment (25%)
   - Content Quality & E-E-A-T (25%)
   - Technical On-Page (20%)
   - Internal Linking (15%)
   - Schema & Structured Data (10%)
   - Featured Snippet Readiness (5%)

8. **Generate prioritized recommendations:**
   - Critical (blocking rankings — fix immediately)
   - High priority (significant impact — fix this week)
   - Medium priority (incremental — fix this month)
   - Low priority (polish — nice to have)

Present as: executive summary, SEO scorecard, prioritized issues, quick wins, competitor comparison, rewritten meta elements (title, description, H1), schema markup code, featured snippet strategy, and content refresh recommendations. Save as a markdown file.
