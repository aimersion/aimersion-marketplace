---
name: company-researcher
description: >
  Research a company deeply before applying or interviewing. Trigger when the user says
  "research this company", "tell me about [Company]", "what do I need to know about [Company]",
  "research [Company] before my interview", "is [Company] a good place to work", or when
  preparing to tailor an application or prep for an interview at a specific company.
version: 1.0.0
---

# Company Researcher

Build a complete intelligence brief on a target company. Use this before writing any application material, and again before every interview. The goal: know more about them than most of their employees do.

## Inputs

- **Company name** + website
- **Purpose**: Application prep / Interview prep / Due diligence / Target list building
- **Role applied for** (affects what to focus on)

## Research Framework

### 1. Business Fundamentals

**What they do:**
- Core product/service in one sentence (their words, not their marketing copy)
- Primary customer: Who buys, who uses, who pays
- Business model: SaaS / marketplace / services / hardware / ads
- Revenue model: Subscription / usage / transaction / project

**Scale:**
- Company size (employees — use LinkedIn, Crunchbase)
- Revenue estimates (Crunchbase, PitchBook, press releases, Glassdoor)
- Customer count / ARR (if public or disclosed)
- Geographic footprint

**Sources**: Company website, About page, Crunchbase, LinkedIn company page, CB Insights

---

### 2. Financial Health & Stage

**Funding (private companies):**
- Total raised, latest round amount + date
- Lead investors — who are they? (tier 1 VC = different pressure than PE)
- Runway estimate (last round size / burn estimate — look for headcount signals)
- Last valuation if disclosed

**Public companies:**
- Recent earnings trends
- Stock performance 1Y
- Key financial metrics from most recent 10-K/10-Q

**Health signals:**
- Headcount growth (LinkedIn: "See all employees" → filter by join date)
- Are they hiring broadly or selectively? (look at all open roles)
- Layoff history (check Layoffs.fyi, tech news)
- Key executive changes (leadership turnover is a major signal)

**Sources**: Crunchbase, PitchBook, LinkedIn, Glassdoor, SEC EDGAR (public), Layoffs.fyi

---

### 3. Product & Market Position

**Product:**
- What problem does it solve?
- Key features / differentiators
- Recent product news (launches, updates, deprecations)
- Product direction (read their blog, release notes, changelog)

**Market:**
- Industry / category they compete in
- Market size estimates
- Tailwinds or headwinds in this space
- Competitive set (who else does this? how do they differentiate?)

**Competitive intel:**
- G2, Capterra, Trustpilot reviews — what customers say vs competitors
- Their positioning vs top 3 competitors
- What competitors say they're winning/losing on

**Sources**: Company blog, G2, Capterra, competitor websites, industry analyst reports

---

### 4. Culture & Work Environment

**Leadership:**
- CEO background and style (search their interviews, tweets/posts, conference talks)
- Leadership team stability (how long have key execs been there?)
- Founder-led vs professionally managed?
- Any controversies or press about leadership

**Culture:**
- Glassdoor rating + trend (improving or declining?)
- Top recurring themes in positive reviews
- Top recurring themes in negative reviews
- Work-life balance signals
- DEI reputation

**Interview process:**
- Typical process length and stages (check Glassdoor, Blind, Reddit r/[company])
- Common interview questions for this role (Glassdoor interview section)
- Difficulty rating
- Any known take-home projects

**Sources**: Glassdoor, LinkedIn, Blind, Reddit, Twitter/X, the CEO's personal posts

---

### 5. Recent News & Events

Search for in the last 6 months:

- **Funding news**: New rounds, acquisitions, IPO filings
- **Product launches**: What they've shipped recently
- **Partnership announcements**: Key integrations or GTM partnerships
- **Customer wins**: Major customer announcements
- **Leadership changes**: New C-suite, board additions
- **Press coverage**: TechCrunch, Forbes, WSJ, industry publications
- **Controversies**: Data breaches, lawsuits, regulatory issues

This is the gold mine for cover letters and interviews — reference something specific and recent.

---

### 6. The Role Context

Research specifically for the role being applied for:

- **Team size**: How big is the team this role joins?
- **Reporting structure**: Who does this role report to? Research that person.
- **Recent hires**: Similar roles filled recently — what backgrounds?
- **Open headcount**: Is this role part of a big expansion or backfill?
- **Role history**: How long has it been posted? (Long = hard to fill = high bar or internal issues)
- **The hiring manager**: LinkedIn profile, posts, what they care about

---

## Output Format

```
COMPANY BRIEF — [Company Name]
Prepared for: [Role] application / [Interview type] interview
Date: [Date]

━━━ THE 30-SECOND VERSION ━━━━━━━━━━━━━━━━━━━
[3-4 sentence summary: what they do, stage, key signal for the candidate]

━━━ BUSINESS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Product:     [one line]
Customers:   [who they serve]
Model:       [how they make money]
Employees:   [X] (LinkedIn)
Raised:      $[X]M total | Last round: $[X]M [Series] ([date])
Investors:   [key names]
Revenue:     ~$[X]M ARR (estimated) or [confirmed if public]
Health:      [Hiring / Stable / Contracting] — [evidence]

━━━ RECENT NEWS (USE IN COVER LETTER) ━━━━━━━
1. [Date]: [News item + why it matters for this role]
2. [Date]: [News item]
3. [Date]: [News item]

━━━ CULTURE SIGNALS ━━━━━━━━━━━━━━━━━━━━━━━━
Glassdoor:   [X]/5 ([X] reviews, trending [up/down/flat])
Pros:        [top 2-3 recurring themes]
Cons:        [top 2-3 recurring themes]
CEO approval:[X]%
Red flags:   [anything concerning — or "None identified"]

━━━ INTERVIEW INTEL ━━━━━━━━━━━━━━━━━━━━━━━━
Process:     [stages — recruiter screen > hiring manager > panel > ...]
Timeline:    ~[X] weeks typically
Difficulty:  [Easy/Medium/Hard] (Glassdoor)
Common Qs:   [top 3-5 questions reported for this role]
Take-home:   [Yes/No — if yes, what type]

━━━ TALKING POINTS (USE IN INTERVIEW) ━━━━━━━
- [Company initiative + how your background maps to it]
- [Recent news + intelligent question to ask about it]
- [Culture value + example of how you've demonstrated it]
- [Challenge the company faces + how you'd approach it]

━━━ RED FLAGS TO PROBE ━━━━━━━━━━━━━━━━━━━━━
- [Anything from reviews/news worth asking about diplomatically]

━━━ QUESTIONS TO ASK THEM ━━━━━━━━━━━━━━━━━━
1. [Specific, informed question about the business]
2. [Question about the team/role showing research]
3. [Question about growth trajectory based on funding news]
```

## Quick Research Mode

If time is limited (< 30 min before interview), prioritize:
1. Recent news (15 min)
2. Glassdoor culture/interview reviews (5 min)
3. Hiring manager LinkedIn (5 min)
4. One smart question to ask (5 min)
