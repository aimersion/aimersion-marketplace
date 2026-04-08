---
description: Search for relevant job opportunities based on your profile and target roles
argument-hint: [job title, location, preferences]
allowed-tools: WebSearch, Read, Write
---

Start a targeted job search using the job-finder skill.

Parse the user's search criteria from `$ARGUMENTS`. Accept any format:
- "Senior PM, remote, SaaS, $180k+"
- "Marketing Director in Austin TX"  
- "I'm a data engineer with 5 years exp looking for startup roles"

If no arguments provided, ask for:
1. Target role title(s)
2. Location preference (remote / hybrid / city)
3. Compensation target
4. Industry preferences

Then:
1. Use the job-finder skill to search across LinkedIn, Indeed, Greenhouse, and niche boards
2. Score each role 1-10 across fit, company quality, compensation, and winability
3. Present results organized by priority tier (A-List / Strong / Reach)
4. For each A-List role, show a direct apply link + recommended next steps

Output format from job-finder skill — organized, actionable, ready to act on today.
