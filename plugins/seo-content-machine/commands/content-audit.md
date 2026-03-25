---
description: Audit existing content for decay, cannibalization, and refresh opportunities
argument-hint: [site URL or list of page URLs]
allowed-tools: WebSearch, WebFetch, Read, Write
---

Run a content decay audit for: $ARGUMENTS

Follow the content-decay-manager skill methodology. Complete these steps:

1. **Identify pages to audit:**
   - If user provides specific URLs, audit those
   - If user provides a site URL, ask how many pages to audit and which are their top performers
   - Prioritize pages that: used to rank well, target valuable keywords, or are older than 12 months

2. **For each page, assess decay signals:**
   - Search for the page's primary keyword — where does it rank now?
   - Are newer/better competitor pages ranking above it?
   - Is the content information current or outdated?
   - Does it have schema markup? Author info? Updated dates?
   - Are internal links still relevant (or pointing to outdated/deleted pages)?

3. **Check for cannibalization:**
   - Are multiple pages from the same site targeting the same keyword?
   - Is Google showing different URLs from the site for the same query at different times?
   - Recommend consolidation if cannibalization is detected

4. **Classify each page:**
   - **Keep** — performing well, no action needed
   - **Light refresh** — minor updates (1-2 hours)
   - **Medium refresh** — add sections, update structure (half day)
   - **Heavy refresh** — major revision or restructure (full day)
   - **Consolidate** — merge with another page
   - **Archive** — retire and redirect

5. **Create specific refresh recommendations** for each page that needs work:
   - What specific information is outdated
   - What sections competitors have that this page lacks
   - What new PAA questions to target
   - Whether schema markup needs adding/updating
   - Internal links to add or update

6. **Build a refresh calendar:**
   - Prioritize by business impact (high-traffic or high-conversion pages first)
   - Schedule across the next quarter
   - Balance refreshes with new content production

7. **Set prevention measures:**
   - Recommend a quarterly review cadence
   - Identify pages most at risk of future decay
   - Suggest proactive update triggers (e.g., when a statistic source publishes new data)

Present as: executive summary, decay severity table, top 5 refresh priorities, cannibalization issues, retirement recommendations, refresh calendar, and prevention plan. Save as a markdown file.
