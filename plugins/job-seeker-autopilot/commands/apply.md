---
description: Build a complete application package and apply to a specific job
argument-hint: [job URL or paste job description]
allowed-tools: WebSearch, Read, Write
---

Build a complete application package for a specific job and walk through the full multi-channel submission process.

Parse the job posting from `$ARGUMENTS` — accept a URL or pasted job description text.

Execute the full application workflow in sequence:

## Step 1: Research
Use the company-researcher skill to build a company brief. Pull:
- Recent news to use in cover letter
- Culture signals and Glassdoor data
- Interview process intel

## Step 2: Resume
Use the resume-tailor skill to:
- Analyze the JD for required keywords
- Show a gap analysis vs candidate's background
- Produce a tailored resume with tracked changes

## Step 3: Cover Letter
Use the cover-letter-writer skill to:
- Write a specific, compelling cover letter using company research
- Produce an email subject line
- Write a 30-word LinkedIn InMail version

## Step 4: Application Submission
Use the application-submitter skill to:
- Identify the ATS and submission method
- Walk through the full multi-channel strategy (ATS + recruiter message + HM signal + referral check)
- Produce ready-to-send recruiter and HM outreach messages

## Step 5: Pipeline Update
Log this application using the pipeline-tracker skill:
- Add to pipeline at "Applied" stage
- Set follow-up reminder for 5-7 business days
- Show current pipeline summary

## Output
Deliver a complete package:
```
APPLICATION PACKAGE — [Company] [Role]

[1] TAILORED RESUME (ready to upload)
[2] COVER LETTER (ready to submit)
[3] EMAIL SUBJECT LINE
[4] RECRUITER MESSAGE (send after submitting ATS)
[5] HIRING MANAGER MESSAGE (optional)
[6] ATS LINK + submission notes
[7] PIPELINE ENTRY logged
```
