---
name: job-finder
description: >
  Find relevant job postings across multiple sources based on the user's target role, skills, location, and preferences.
  Trigger this skill when the user says "find me jobs", "search for jobs", "what jobs are out there", "find openings",
  "look for positions", "find roles", "job hunt", "find opportunities", or asks to start a job search.
  Also trigger when the user provides their background and asks what they should apply for.
version: 1.0.0
---

# Job Finder

Search, filter, and score job postings that match the user's profile. The goal is quality over quantity — find roles the user can genuinely win, not spray and pray.

## Candidate Profile — Collect Upfront

Before searching, gather (or read from context):

- **Target role(s)**: Job titles they want (e.g., "Senior Product Manager", "Head of Marketing")
- **Industry preferences**: Preferred sectors and ones to avoid
- **Location**: Remote / hybrid / on-site, preferred metros
- **Compensation target**: Minimum acceptable base salary
- **Experience level**: Years of experience, seniority expectations
- **Must-haves**: Non-negotiables (remote-only, equity, specific tech stack, etc.)
- **Deal-breakers**: Company types or roles to skip
- **Resume/background**: What they've done (for match scoring)

If the user hasn't provided these, ask for them before searching. Store the profile for use across all other skills.

## Search Strategy

### Primary Job Sources (search in this order)

1. **LinkedIn Jobs** — `linkedin.com/jobs/search/?keywords=[title]&location=[location]`
2. **Indeed** — `indeed.com/jobs?q=[title]&l=[location]`
3. **Greenhouse / Lever boards** — Direct ATS postings, often less competitive
4. **Company career pages** — For target companies identified via company-researcher skill
5. **Wellfound (AngelList)** — Startups, equity-heavy roles
6. **Glassdoor** — Good for salary data alongside listings
7. **Niche boards by function**:
   - Tech: levels.fyi, BuiltIn, Dice
   - Marketing: MarketingHire, Demand Gen Report jobs
   - Finance: eFinancialCareers, Selby Jennings
   - Healthcare: Health eCareers, Doximity
   - Legal: BCG Attorney Search, Above the Law jobs
   - Sales: SalesHeads, RepVue jobs
   - Design: Dribbble jobs, AIGA

### Search Query Construction

Build targeted queries, not generic ones:

```
Good: "VP of Product" + "B2B SaaS" + "Series B" + "remote"
Bad: "product manager jobs"
```

Use boolean search where supported:
- Title variations: `("Product Manager" OR "PM" OR "Head of Product")`
- Exclude noise: `-intern -contract -staffing agency`
- Target company stage: `"Series A" OR "Series B" OR "growth stage"`

### Search Scope

Run 3-5 searches with variations:
1. Exact target title + location
2. Title variants + remote
3. Function keywords + industry
4. Seniority level variations (Senior / Lead / Director / Head of)
5. Company-specific searches for target companies

## Job Scoring Framework

Score each posting 1-10 across these dimensions:

### Role Fit (40% of score)
- Title match to target (exact / close / stretch)
- Responsibilities match candidate's actual experience
- Required skills vs candidate's skill set (% match)
- Seniority level alignment

### Company Quality (25% of score)
- Funding stage / financial health / revenue
- Company size vs candidate's sweet spot
- Industry trajectory (growing / stable / declining)
- Reputation (Glassdoor rating, press coverage)

### Compensation Fit (20% of score)
- Salary range vs target (use Levels.fyi, Glassdoor, Payscale to estimate if not listed)
- Total comp (equity, bonus, benefits)
- Location cost-of-living adjustment for on-site roles

### Winability (15% of score)
- Application volume (recently posted = fewer applicants)
- Referral potential (any connections at company?)
- ATS vs direct apply (direct = faster response)
- Specific requirements vs candidate's background

### Priority Tiers

| Score | Tier | Action |
|-------|------|--------|
| 8-10  | A-List | Apply within 24 hours, full tailoring |
| 6-7   | Strong | Apply within 48 hours, moderate tailoring |
| 4-5   | Reach | Apply opportunistically, light tailoring |
| 1-3   | Skip | Don't apply — time better spent elsewhere |

## Output Format

Present findings as a structured job board:

```
JOB SEARCH RESULTS — [Date]
Searched: [titles] in [locations]
Found: [X] postings | A-List: [X] | Strong: [X] | Reach: [X]

━━━ A-LIST (Apply Today) ━━━━━━━━━━━━━━━━━━━━━━

[1] Senior Product Manager — Acme Corp
    Score: 9.2/10 | Posted: 2 days ago | Remote
    Salary: $160-185k + equity | Series B ($40M raised)
    Why strong: Exact title match, your SaaS/PLG background is perfect,
                only 47 applicants, direct Greenhouse apply
    Apply: https://boards.greenhouse.io/acme/jobs/...
    Actions: [Tailor Resume] [Write Cover Letter] [Research Company]

[2] Head of Product — TechStart Inc
    Score: 8.8/10 | Posted: 1 day ago | NYC Hybrid
    ...

━━━ STRONG MATCHES ━━━━━━━━━━━━━━━━━━━━━━━━━━━
...

━━━ SUMMARY ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Recommended daily application target: 3-5 A-List roles
Next search refresh: In 48 hours (new postings appear daily)
```

## Search Cadence

- **Daily**: New postings on LinkedIn, Indeed
- **Weekly**: Company career pages for target employers
- **Ongoing**: Alert setup — recommend user set up job alerts for top queries
- **After each application**: Remove from queue, update pipeline tracker

## Alert Setup Instructions

Guide the user to set up job alerts on:
1. LinkedIn: Search → "Set Alert" → Daily digest
2. Indeed: Search → "Get new jobs for this search" email
3. Google: `[job title] jobs site:lever.co OR site:greenhouse.io` — set Google Alert

## Integration Points

- After finding a role → hand to **resume-tailor** and **company-researcher**
- After researching company → hand to **cover-letter-writer**
- After applying → hand to **pipeline-tracker**
- For target companies → hand to **outreach-engine**
