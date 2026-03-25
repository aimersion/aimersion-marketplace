---
name: content-decay-manager
description: >
  Detect content decay, prioritize refreshes, and manage the content lifecycle for maximum SEO ROI. This skill should be
  used when the user asks to "refresh old content", "content decay", "why is my traffic declining", "update old posts",
  "content audit", "which posts need updating", "declining rankings", "content lifecycle", "page losing traffic",
  "content refresh strategy", "annual content audit", or needs help identifying and fixing content that has lost rankings or traffic.
version: 2.0.0
---

# Content Decay Manager

Content decay is the single most underappreciated problem in SEO. Most teams publish 100% new content while their best-performing pages silently lose rankings. Refreshing decaying content is almost always higher-ROI than publishing new content — a page that once ranked has proven domain trust and backlinks that a new page must earn from scratch.

## What Is Content Decay and Why It Matters

Content decay occurs when a page's search rankings, traffic, or engagement declines over time. It happens because:

1. **Competitors publish better content.** Someone writes a more comprehensive, more current version of your page.
2. **Information becomes outdated.** Statistics, tool recommendations, best practices, and regulations change.
3. **Search intent evolves.** Google's understanding of what searchers want for a keyword shifts over time.
4. **SERP features change.** AI Overviews, featured snippets, or other features may now occupy space that used to go to organic results.
5. **Internal competition (cannibalization).** Your newer content may be competing with the original page.

## Detection Framework

### Signals of Content Decay (check in this order)

**Ranking signals (highest confidence):**
- Page dropped from top 5 to positions 6-20 for its primary keyword
- Page lost a featured snippet it previously held
- Page dropped out of top 20 entirely
- Multiple keywords for the same page declining simultaneously

**Traffic signals:**
- Organic sessions declined 20%+ from peak (compare same month year-over-year to account for seasonality)
- Click-through rate declined even if rankings are stable (competitors improved their titles/snippets)
- Impressions stable but clicks declining (CTR decay — your title/description is no longer competitive)

**Engagement signals (lower confidence but useful):**
- Bounce rate increased significantly
- Time on page decreased
- Conversion rate declined

**Content age signals:**
- Published more than 12 months ago and never updated
- Contains statistics, examples, or tool recommendations older than 18 months
- References years, events, or contexts that are no longer current
- Uses "2023" or "2024" in the title or content body

### How to Triage Without Google Search Console

If the user does not have GSC data available, you can still assess decay risk:

1. Search for the page's primary keyword — where does it rank now? Does it appear in top 20?
2. Check the SERP — are there newer, better results above it?
3. Read the page content — is any information outdated?
4. Check the publish date — older than 12 months with no updates?
5. Look for a "last updated" date — if absent, that is itself a problem

## Content Refresh Decision Framework

Not every decaying page should be refreshed. Use this framework:

### Step 1: Is the page worth saving?

| Question | If YES | If NO |
|----------|--------|-------|
| Did this page ever rank in the top 10? | Worth refreshing — it has proven ranking ability | Skip unless it targets a high-value keyword |
| Does it have backlinks from external sites? | Definitely worth refreshing — backlinks are hard to earn | Lower priority |
| Does the target keyword still have search demand? | Worth investing in | Consider redirecting to a better page |
| Is the keyword still relevant to the business? | Proceed with refresh | Deprioritize or archive |

### Step 2: What kind of refresh does it need?

**Light refresh (1-2 hours):**
- Update outdated statistics and examples
- Fix broken links
- Update the year in title/content if applicable
- Add/improve meta description
- Add 1-2 new internal links to recent content
- Update "last modified" date

**Medium refresh (half day):**
- All of the above, plus:
- Add 1-2 new sections covering subtopics competitors added
- Improve heading structure for featured snippet capture
- Add or update schema markup
- Improve internal linking
- Add new images or visual elements

**Heavy refresh (full day or more):**
- All of the above, plus:
- Restructure the entire post to match evolved SERP intent
- Add significant new content (500-1,500 words of new substance)
- Add original data, examples, or case studies
- Rewrite introduction and conclusion
- Add FAQ section targeting PAA questions
- Create supporting content if a cluster gap exists

**Complete rewrite:**
- The topic/keyword is still valuable but the existing content is unsalvageable
- Keep the same URL (preserve backlinks and existing authority)
- Rewrite from scratch following the blog-writer skill methodology
- Submit updated URL to Google Search Console for recrawling

### Step 3: What must NOT be done?

- **Do NOT just change the date.** Google detects cosmetic updates without substantive improvement. This can actually accelerate decay.
- **Do NOT add filler to increase word count.** Every addition must provide genuine information gain.
- **Do NOT change the URL.** The existing URL has accumulated authority. A new URL starts from zero.
- **Do NOT remove content that is still relevant.** Only remove or replace — never just cut.

## Content Audit Methodology

### Quarterly Mini-Audit (30-60 minutes)
Focus on your top 20 performing pages:
1. Check current ranking positions for their primary keywords
2. Flag any that have dropped 3+ positions since last check
3. Prioritize the flagged pages for refresh
4. Check if any have outdated information

### Annual Full Audit (half day to full day)
Review every content page on the site:

For each page, classify into one of five buckets:

| Bucket | Criteria | Action |
|--------|----------|--------|
| **Keep** | Ranking well, traffic stable or growing, information current | No action needed |
| **Refresh** | Was ranking well but declining, or information outdated | Schedule content refresh |
| **Consolidate** | Multiple thin pages on similar topics, or pages cannibalizing each other | Merge into one definitive page, 301 redirect others |
| **Repurpose** | Good content but wrong format or targeting wrong keyword | Restructure for better keyword/intent alignment |
| **Archive** | No traffic, no rankings, no backlinks, topic no longer relevant | Remove from site (or noindex), redirect URL to related page |

### Cannibalization Detection

Two or more pages targeting the same keyword will compete with each other and weaken both. Signs:

- Rankings for a keyword fluctuate between two different URLs
- Two pages rank for the same keyword but neither breaks into top 5
- A newer page displaced an older page that was performing better

**Resolution:**
1. Decide which page should be the canonical version
2. Merge the best content from both pages into the canonical URL
3. 301 redirect the retired URL to the canonical URL
4. Update internal links to point to the canonical URL

## Edge Case: Content Types That Decay Differently

### Evergreen content (guides, tutorials, how-tos)
- Decays slowly over 12-24 months
- Usually fixable with a medium refresh
- Priority: refresh every 12 months proactively

### Time-sensitive content (news, trends, predictions, "best of [year]")
- Decays rapidly after the time context passes
- Options: update for the new year, or let it naturally age out
- Recommendation: plan annual updates for "best of" and "in [year]" posts

### Statistical/data-driven content
- Decays when statistics become outdated (often 6-12 months)
- Fix: replace old statistics with current ones
- Pro tip: use multiple sources so you have options when one source updates

### Product/tool reviews and comparisons
- Decays when products change, prices change, or new competitors emerge
- Need review every 6 months minimum
- Highest priority for refresh — these are often conversion pages

### Local SEO content
- Decays when local information changes (hours, locations, regulations)
- Also affected by Google Maps/Business Profile changes
- Review quarterly for accuracy

## Output Format

### Content Decay Report

1. **Executive Summary** — How many pages audited, how many show decay signals, estimated traffic at risk, top priorities

2. **Decay Severity Table**

| Page URL | Primary Keyword | Current Rank | Peak Rank | Decay Severity | Refresh Type | Priority |
|----------|----------------|-------------|-----------|---------------|-------------|----------|

3. **Top 5 Refresh Priorities** — For each:
   - Current state (ranking, traffic trend, what is outdated)
   - Specific refresh recommendations (what to add, update, restructure)
   - Expected impact (ranking recovery potential)
   - Effort estimate

4. **Cannibalization Issues** — Pages competing with each other, with resolution plan

5. **Content Retirement Recommendations** — Pages to consolidate or archive

6. **Refresh Calendar** — Schedule of when each refresh should happen over the next quarter

7. **Prevention Plan** — Proactive schedule for regular content reviews to prevent future decay

## Additional Resources

Consult `references/content-decay-playbook.md` for the complete decay detection checklist, refresh templates, and audit scoring methodology.
