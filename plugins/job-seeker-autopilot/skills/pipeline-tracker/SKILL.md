---
name: pipeline-tracker
description: >
  Track, manage, and optimize a job search pipeline. Trigger when the user says "track my applications",
  "update my pipeline", "what jobs am I waiting on", "follow up on my applications", "where am I in
  the process", "what's the status of my applications", "manage my job search", "show my pipeline",
  or any request to organize and monitor the state of active job applications.
version: 1.0.0
---

# Pipeline Tracker

Manage a job search like a sales pipeline — with stages, follow-up triggers, conversion metrics, and weekly reviews. Most job seekers lose track of where they are with dozens of companies. This skill keeps everything organized and ensures no opportunity falls through the cracks.

## Pipeline Stages

```
PROSPECTING  ->  APPLIED  ->  RECRUITER SCREEN  ->  INTERVIEWING  ->  FINAL ROUND  ->  OFFER  ->  CLOSED
     |               |               |                    |               |             |           |
  Found role    Submitted        Passed screen        Active loop      Finals done   Received   Win/Loss
  Not applied   + outreach       Got call back        interviews       waiting...    negotiating decided
```

### Stage Definitions

| Stage | Definition | Average time in stage |
|-------|------------|----------------------|
| **Prospecting** | Role identified, application in progress | 0-2 days |
| **Applied** | Application submitted, waiting for response | 5-14 days |
| **Recruiter Screen** | Phone/video screen scheduled or completed | 3-7 days |
| **Interviewing** | Active interview process with HM/team | 1-3 weeks |
| **Final Round** | Last round interview(s) completed, awaiting decision | 3-14 days |
| **Offer** | Offer received, negotiating or deciding | 3-7 days |
| **Closed — Won** | Accepted and signed | Done |
| **Closed — Lost** | Rejected or withdrew | Track reason |

## Pipeline Data to Track

For each application, maintain:

```
Company:            [Name]
Role:               [Exact title]
Posted:             [Date posted]
Applied:            [Date applied]
Apply method:       [Greenhouse / Lever / Workday / Direct / Referral]
Salary range:       [Posted or estimated]
Stage:              [Current pipeline stage]
Next action:        [What to do next]
Next action date:   [When to do it]
HM/Recruiter:       [Name + LinkedIn if known]
Interview dates:    [Log each one]
Notes:              [Key things learned, specific people met, what impressed them]
Score:              [A-list / Strong / Reach]
Referral:           [Name if referred in]
```

## Weekly Pipeline Review

Run this every Monday morning (or Sunday night):

### 1. Stage Count Review

```
PIPELINE SNAPSHOT — Week of [Date]

ACTIVE PIPELINE:
  Prospecting:     [X] roles (ready to apply this week)
  Applied:         [X] roles (awaiting response)
  Recruiter Screen:[X] scheduled / [X] completed this week
  Interviewing:    [X] active processes
  Final Round:     [X] waiting on decisions
  Offer Stage:     [X] active offers

ACTIVITY THIS WEEK:
  Applications submitted:  [X]
  Outreach messages sent:  [X]
  Interviews completed:    [X]
  Offers received:         [X]

CONVERSION METRICS:
  Applied -> Recruiter Screen rate: [X]% (benchmark: 10-20%)
  Recruiter -> Interview rate:      [X]% (benchmark: 40-60%)
  Interview -> Final round rate:    [X]% (benchmark: 30-50%)
  Final -> Offer rate:              [X]% (benchmark: 20-40%)
```

### 2. Follow-Up Queue

Identify every application that needs action:

```
FOLLOW-UP NEEDED TODAY:

OVERDUE (follow up immediately):
  - [Company] [Role]: Applied [X days ago], no response — send follow-up email
  - [Company] [Role]: Recruiter screen done [X days ago], no update — check in

DUE THIS WEEK:
  - [Company] [Role]: Applied [date], due to follow up [date]
  - [Company] [Role]: Awaiting offer decision since [date] — decision deadline approaching

INTERVIEWS SCHEDULED:
  - [Company] [Role]: [Interview type] on [Date] at [Time] with [Person]
    Prep needed: [What to do before]
```

### 3. Pipeline Health Assessment

Analyze and flag:

- **Thin pipeline**: Fewer than 5 active applications = need to apply more
- **Stuck pipeline**: Applications in "Applied" for 14+ days = increase follow-up / outreach
- **No response pattern**: If recruiter screen rate is below 10% = resume needs work or roles are too senior
- **Dropping out late**: If losing at Final Round stage = interview prep needed
- **Salary misalignment**: Consistent offers below target = recalibrate expectations or strengthen positioning

### 4. Weekly Priorities

Set 3 priorities for the coming week:
1. [Highest leverage action — usually interviews > applications > outreach]
2. [Follow-ups due this week]
3. [New applications to submit]

## Follow-Up Automation Templates

**5-day follow-up (applied, no response):**
```
Subject: [Role Title] Application — [Your Name]

Hi [Recruiter/HR name or "Hiring Team"],

I wanted to follow up on my application for [Role Title] submitted on [date].
I remain very interested in the opportunity and would welcome the chance
to discuss further.

Please let me know if you need anything additional from me.

Best,
[Name]
```

**Post-interview follow-up (awaiting feedback):**
```
Subject: Following up — [Role Title] interview on [date]

Hi [Name],

I wanted to follow up on our conversation on [date]. I really enjoyed
learning about [specific thing from interview] and remain very excited
about this opportunity.

Please don't hesitate to let me know if you need any additional information
from my end.

[Name]
```

**Offer deadline extension request:**
```
Subject: [Role Title] Offer — Request for Brief Extension

Hi [Name],

Thank you again for the offer — I'm genuinely excited about the opportunity.
I'm in the process of wrapping up a few other conversations and want to
give this the proper consideration it deserves.

Would it be possible to have until [date — ask for 3-5 more days] to
give you my final answer? I want to be fully committed when I say yes.

[Name]
```

## Rejection Handling

When a rejection comes in:

1. **Log it**: Stage when rejected, reason if given
2. **Respond graciously**:
```
Hi [Name] — thank you for letting me know. I'm disappointed but I appreciate
you closing the loop. I have a lot of respect for [Company] and hope our
paths cross again down the road. Best of luck with the search.
```

3. **Request feedback** (optional, recruiter screens / early rounds only):
```
If you're able to share any feedback on my application or candidacy,
I'd genuinely appreciate it — always looking to improve.
```

4. **Stay in network**: Connect on LinkedIn if not already. Circumstances change.

5. **Analyze pattern**: After 5+ rejections at a specific stage, flag it and diagnose:
   - Rejected before screen: Resume/keyword problem
   - Rejected at recruiter screen: Positioning or salary misalignment
   - Rejected at HM interview: Storytelling or role fit
   - Rejected at final: Culture, comp, internal candidate

## Offer Negotiation Tracker

When an offer arrives:

```
OFFER RECEIVED — [Company] [Role]
Date received:      [Date]
Decision deadline:  [Date]
Offer details:
  Base salary:      $[X]
  Bonus target:     $[X] ([X]%)
  Equity:           [X] shares / options over [X] years (est. value $[X])
  Benefits value:   ~$[X]/year
  Total comp est:   $[X]
  Start date:       [Date]

My targets:
  Base target:      $[X]
  Minimum base:     $[X] (never disclose this)
  Total comp target:$[X]

Gap to close:       $[X] in [component]
Negotiation lever:  [What to ask for — base / signing / equity / start date]
```

**Negotiation script:**
```
"Thank you so much for the offer — I'm genuinely excited about the role 
and the team. I do want to be upfront that the base is below what I was 
targeting. Based on my research and the scope of the role, I was expecting 
something closer to $[X]. Is there flexibility there?"
```

Rule: Always counter. 85% of offers have flexibility. The worst they can say is no.

## Dashboard Output

When user asks "show my pipeline" or "where do I stand":

```
JOB SEARCH DASHBOARD — [Date]

STATUS: [Active / Passive / Offer stage / Winding down]

PIPELINE SUMMARY:
  Total applications:     [X]
  Active in process:      [X]
  Awaiting response:      [X]
  Offers:                 [X active]
  
THIS WEEK:
  Applied:                [X]
  Responses received:     [X]  
  Interviews:             [X]
  
CONVERSION:
  Response rate:          [X]%
  Screen -> Interview:    [X]%
  
URGENT:
  [List anything needing action today]
  
UPCOMING:
  [Interview schedule for next 7 days]
```
