---
name: resume-tailor
description: >
  Tailor and rewrite a resume specifically for a target job posting. Trigger when the user says
  "tailor my resume", "update my resume for this job", "rewrite my resume", "optimize my resume",
  "customize my resume for", "make my resume match", "adjust my resume", or provides a job posting
  and asks how to improve their resume. Also trigger when preparing to apply for a specific role.
version: 1.0.0
---

# Resume Tailor

Rewrite and optimize a resume to maximize ATS pass-through and human reviewer impact for a specific job posting. Every application should have a resume tailored to that exact role — generic resumes lose.

## What You Need

1. **The user's base resume** (paste text, upload file, or describe background)
2. **The target job posting** (URL or paste full JD)
3. **Any additional context**: Specific achievements, metrics, projects to highlight

If the user doesn't have a resume yet, use **Resume Builder** mode (see below).

## Analysis Phase — Before Writing

### Step 1: Parse the Job Description

Extract from the JD:
- **Required skills**: Hard requirements (must-have)
- **Preferred skills**: Nice-to-have
- **Keywords**: Technical terms, tools, methodologies, certifications
- **Role responsibilities**: What they'll actually do day-to-day
- **Success metrics**: How they'll measure performance
- **Company language**: Exact phrases they use (mirror these back)
- **Culture signals**: Adjectives used to describe ideal candidate

### Step 2: Gap Analysis

Compare JD requirements against candidate's resume:

```
KEYWORD MATCH ANALYSIS
Required Keywords Found:    [X/Y] — [list matched]
Required Keywords Missing:  [list] — can these be added honestly?
Preferred Keywords Found:   [X/Y]
ATS Score Estimate:         [X]% match

EXPERIENCE GAPS:
- [Gap 1] — Mitigation: [how to address or reframe]
- [Gap 2] — Mitigation: [how to address or reframe]

STRENGTHS TO EMPHASIZE:
- [Strength 1] — maps to JD requirement: [requirement]
```

### Step 3: Prioritize Achievements

Identify which of the candidate's achievements are most relevant and reorder/rewrite bullets to lead with the most impactful ones for this role.

## Resume Rewriting Rules

### ATS Optimization
- Use the **exact job title** from the posting somewhere in the resume (summary or most recent role)
- Mirror the company's language — if they say "growth marketing" don't say "demand gen" (unless adding both)
- Include every hard-required keyword naturally within bullet points
- Use standard section headers: Work Experience, Education, Skills — not creative names
- No tables, columns, headers/footers, text boxes — ATS can't parse them
- Standard fonts, no icons or graphics
- Save/submit as `.docx` or clean `.pdf` — specify which the ATS prefers

### Bullet Point Formula

Every bullet: **Action Verb + What You Did + How You Did It + Result/Impact**

```
WEAK:  "Responsible for managing the marketing team"
STRONG: "Led 6-person demand gen team to 3x pipeline from $2M to $6M in 18 months 
         by implementing account-based marketing across top 200 enterprise accounts"

WEAK:  "Worked on product launches"
STRONG: "Launched 4 enterprise product features on time and under budget, driving 
         23% increase in average contract value from $48k to $59k ARR"
```

Quantify everything possible:
- Revenue impact ($, %)
- Scale (users, customers, team size, markets)
- Efficiency gains (time saved, cost reduced)
- Growth metrics (MoM, YoY, before/after)
- Rankings (top X%, #1 in region, promoted in Y months)

### Summary/Profile Section

Write a 2-3 sentence summary that:
1. States their professional identity in the exact language of the target role
2. Leads with their most impressive, relevant credential
3. Ends with what they're known for/best at

```
Template:
"[Seniority] [exact target title] with [X] years driving [key result this company cares about] 
at [type of company they've worked at — match target company's stage/industry]. 
Known for [their signature skill/approach that matches JD requirements]."
```

### Skills Section

- List skills in order of JD priority (most required first)
- Include exact tool names from JD (Salesforce not CRM, HubSpot not Marketing Automation)
- Group logically: Technical Skills | Tools & Platforms | Certifications
- Remove skills not relevant to this role — keep it tight

### Work Experience Ordering

- Lead each role with the most JD-relevant bullet
- 4-6 bullets per role max (recent), 2-3 for older roles
- Older than 10 years: title, company, dates only — no bullets unless exceptional
- Career gaps: address in cover letter, not resume

## Resume Builder Mode (No Existing Resume)

If building from scratch, conduct a structured interview:

```
RESUME BUILDER INTAKE
"I'm going to ask you a series of questions to build your resume. 
Answer as specifically as possible — numbers and specifics always 
beat general statements."

1. Walk me through your last 3 roles — what was your title, company, 
   and the biggest thing you accomplished in each?

2. What are your 3-5 most impressive career achievements, in terms 
   of business impact? Give me numbers.

3. What tools, technologies, or methodologies are you strongest in?

4. Any awards, promotions faster than normal, notable projects, 
   publications, or speaking engagements?

5. Education, certifications, anything that differentiates you?
```

## Output

Deliver the tailored resume as:

1. **Full resume text** — ready to copy into a Word doc or resume builder
2. **Change log** — what was changed and why (so user understands)
3. **ATS keyword coverage** — which required keywords are now included
4. **Missing keywords flag** — required skills that couldn't be honestly added
5. **Suggested additions** — things to add if the user has them (certifications, etc.)

```
TAILORED RESUME — [Company] [Role]
ATS Match Score: [X]% (up from [Y]% baseline)
Keywords added: [list]

[FULL RESUME TEXT]

---
WHAT CHANGED:
- Summary rewritten to mirror "[exact phrase from JD]"  
- Bullet 3 at Acme Corp restructured to quantify impact
- Added "ABM" and "Outbound SDR management" keywords
- Moved SaaS experience to top of skills (JD priority)
```

## Version Control

Maintain a naming convention for the user:
`[LastName]_Resume_[Company]_[Role]_[Date].docx`

Recommend keeping a master "full" resume and generating tailored versions from it — never overwrite the master.
