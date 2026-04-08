---
name: application-submitter
description: >
  Manage and execute the full job application process for a specific role. Trigger when the user says
  "apply to this job", "submit my application", "help me apply", "walk me through applying",
  "apply for me", "complete this application", or when they're ready to submit after preparing
  their resume and cover letter. This skill orchestrates the end-to-end application workflow.
version: 1.0.0
---

# Application Submitter

Orchestrate and execute the complete application process for a job — from first click to submitted confirmation. The goal is to apply fast (within hours of a posting going live), correctly (no errors, complete submissions), and strategically (using every channel available, not just the ATS).

## The Multi-Channel Application Strategy

Never apply through just one channel. A full application has 3-4 simultaneous tracks:

```
Track 1: Formal ATS Application    — Required, but often not sufficient
Track 2: Direct Recruiter Outreach — Contact the recruiter directly on LinkedIn
Track 3: Hiring Manager Signal     — Brief message or connection to the HM
Track 4: Referral Activation       — Check your network for anyone at the company
```

## Pre-Application Checklist

Before submitting, verify these are ready:

- [ ] Resume tailored to this specific role (via resume-tailor skill)
- [ ] Cover letter written (via cover-letter-writer skill)
- [ ] Company researched (via company-researcher skill)
- [ ] LinkedIn profile updated to match resume keywords
- [ ] Portfolio/work samples ready if role requires them
- [ ] References identified (don't need to contact yet, just know who)
- [ ] Salary expectations ready (target + floor, never go below floor)
- [ ] Availability to start (standard: 2 weeks, unless negotiating)

## Track 1: ATS Application

### Identify the ATS

Most companies use one of these — each has quirks:

| ATS | URL Pattern | Notes |
|-----|-------------|-------|
| Greenhouse | boards.greenhouse.io | Most common for startups/scaleups |
| Lever | jobs.lever.co | Common for tech companies |
| Workday | [company].wd5.myworkdayjobs.com | Enterprise/Fortune 500 |
| iCIMS | careers-[company].icims.com | Mid-market |
| BambooHR | [company].bamboohr.com | SMBs |
| Taleo (Oracle) | [company].taleo.net | Large enterprises |
| SmartRecruiters | jobs.smartrecruiters.com | Growing companies |
| Ashby | jobs.ashbyhq.com | Modern startups |

### ATS Submission Best Practices

**Resume upload:**
- Upload as `.docx` for Workday, Greenhouse (better parsing)
- Use `.pdf` for Lever, Ashby (clean render)
- Always upload the file AND copy-paste text if prompted — don't rely on parsing alone

**Form fields:**
- Every field is required unless marked optional — complete them all
- "Desired salary": Enter a range or say "competitive/market rate" if the field allows text; enter target number if it forces a number
- "How did you hear about us?": If through a referral, always name them
- Custom questions: These are pre-screening — answer specifically, not generically (treat each as a mini cover letter)
- LinkedIn URL: Keep updated and consistent with resume
- Portfolio/GitHub/work samples: Always include if relevant

**Confirmation:**
- Screenshot or save the application confirmation with date/time
- Note the job ID/requisition number
- Add to pipeline tracker immediately after submitting

### Optimizing for ATS Scoring

The ATS scores your resume for keyword match before a human sees it. Ensure:
- All required skills from JD appear in your resume at least once
- Job title from JD appears in your summary or experience section
- Years of experience match (don't undersell or leave ambiguous)
- Degree requirements met (if not, note in cover letter or application)

## Track 2: LinkedIn Recruiter Outreach

**Find the recruiter:**
1. Search LinkedIn: `[Company Name] recruiter` or `[Company Name] talent acquisition`
2. Check if there's a recruiter listed on the job posting itself
3. Look at who posted the job on LinkedIn

**Message template (under 300 chars — LinkedIn limit for most InMail):**

```
Hi [Name] — I just submitted my application for [Role Title]. 
I have [X years / specific credential directly matching JD]. 
Happy to send additional context if helpful. 

[Your name]
```

**Timing**: Send within 2 hours of submitting the ATS application. Being the first applicant AND the first to reach out directly doubles your visibility.

**Connection note (if sending connection request):**
```
Hi [Name] — I applied for [Role] today. My background in [1 specific 
thing] maps well to what you're building. Happy to connect.
```

## Track 3: Hiring Manager Outreach

This is the highest-leverage move most applicants skip. Find the hiring manager and send a brief, professional signal.

**Find the HM:**
- Job posting may list who the role reports to
- Search LinkedIn: `[Company] + [Department Head title]`
- Example: "Acme Corp" + "VP of Marketing" for a marketing manager role

**HM message template:**
```
Hi [Name] — I just applied for the [Role] on your team. I noticed [specific 
thing about their work/company — from research]. My background in [most 
relevant experience — 1 sentence] made this feel like a strong fit. 
Not trying to circumvent the process — just wanted to put a name 
to the application. Best, [Your name]
```

**Only do this if:**
- You have a genuine connection point (their work, their company's product, etc.)
- The role is important enough to invest this time
- The message is concise and non-pushy

## Track 4: Referral Activation

Referrals increase interview rate by 5-10x. Before submitting, check:

1. **LinkedIn**: Search `[Company Name]` → see who in your connections works there
2. **2nd degree**: Who do you know who knows someone at the company?
3. **Alumni networks**: Same college or previous company connections
4. **Slack communities**: Relevant professional Slacks often have company channels

**Referral request message:**
```
Hey [Name] — hope you're doing well! I'm applying for [Role] at [Company] 
and noticed you work there. Would you be willing to pass along my resume 
internally or give me any insight on the team/process? No pressure at all 
if it's not a fit — I just wanted to ask since the role looks great.

Here's a quick summary of my background: [2-3 sentences].

[Resume attached]
```

## Application Batching — Scale Strategy

For high-volume application periods (job search sprint mode):

**Daily target by search phase:**
- Week 1-2 (active search): 5-10 applications/day
- Ongoing: 2-3 applications/day minimum to keep pipeline full

**Batching workflow:**
1. Morning (30 min): Find 5-10 new roles using job-finder
2. Midday (2 hours): Tailor resume + cover letter for top 3 A-list roles
3. Afternoon (1 hour): Submit applications, send recruiter/HM messages
4. Evening (30 min): Follow up on pending applications, update pipeline

**Quality vs quantity:**
- A-list roles (score 8-10): Full tailoring, all 4 tracks
- Strong roles (score 6-7): Tailored resume + cover letter, recruiter outreach
- Reach roles (score 4-5): Light tailoring, ATS only

## Post-Submission Actions

Immediately after submitting:

1. **Log in pipeline tracker**: Date, role, company, ATS link, status = "Applied"
2. **Set follow-up reminder**: 5-7 business days if no response
3. **Connect with recruiter on LinkedIn** (if not already messaged)
4. **Bookmark job posting**: They often take down postings after closing — save the full JD
5. **Note application details**: Any custom questions you answered, salary stated

## Follow-Up Protocol

**5-7 days after applying — no response:**
```
Subject: [Role Title] Application — [Your Name]

Hi [Recruiter name],

I wanted to follow up on my application for [Role Title] submitted 
on [date]. I remain very interested in the opportunity and happy 
to provide any additional information.

Best,
[Name]
```

**2 weeks — still no response:**
One final check-in, then move on. Don't follow up more than twice.

## Application Volume Tracking

Report to user after each batch:
```
APPLICATION BATCH SUMMARY — [Date]
Applied today:     [X] roles
Total this week:   [X] roles
Total this month:  [X] roles
Pipeline health:
  Applied:         [X]
  Recruiter screen:[X]
  Interviewing:    [X]
  Offer:           [X]
  Rejected:        [X]

Recommended: Send [X] follow-ups today for applications from [date range]
```
