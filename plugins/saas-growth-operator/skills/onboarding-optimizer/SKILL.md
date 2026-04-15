---
name: onboarding-optimizer
description: >
  Design and optimize SaaS onboarding flows to maximize activation, reduce time-to-value, 
  and prevent early churn. Use this skill when someone asks about "onboarding", "activation 
  rate", "time to value", "users not activating", "free trial conversion", "first week 
  experience", "aha moment", "onboarding flow", "onboarding emails", "new user experience", 
  or when free trial conversion or early churn is the problem. The first 30 days determine 
  whether a customer stays for 3 years or churns at renewal. This is where SaaS is won or lost.
version: 1.1.0
---

# Onboarding Optimizer

Design onboarding that turns signups into activated, retained customers — by getting 
users to their "aha moment" as fast as possible and removing every obstacle between 
signup and value.

## The Onboarding Framework

### Core Principle: Minimize Time to First Value

Onboarding has one job: get the user to experience the core value of your product before 
they lose momentum. Everything else is secondary.

**Define your activation metric first:**
- What is the specific action in your product that correlates with long-term retention?
- Examples: "User creates first project," "User sends first message to their team," "User imports first data set"
- This is your North Star for onboarding design

### Onboarding Audit Checklist

**First 5 minutes (critical):**
- [ ] Does the signup flow collect only essential info? (Every unnecessary field costs conversions)
- [ ] Does the user land in a context that makes immediate action obvious?
- [ ] Is there a clear "first step" that takes < 60 seconds to complete?
- [ ] Is the empty state helpful? (Empty dashboards kill activation — use starter templates, sample data, or guided prompts)
- [ ] Does the welcome email arrive within 2 minutes and point to a specific action?

**First 24 hours:**
- [ ] Is there a product tour that shows the path to value, not every feature?
- [ ] Are tooltips/walkthroughs contextual (appear when relevant) not forced upfront?
- [ ] Does the "Day 1" email address the most common first-day friction?
- [ ] Is there a visible progress indicator toward activation?

**First 7 days:**
- [ ] Are the Day 3 and Day 7 emails triggered by behavior, not just time?
- [ ] Do low-activity users get a different path than high-activity users?
- [ ] Is there a human touchpoint for high-value trial users?

**First 30 days:**
- [ ] Is there a clear milestone email when they hit the activation moment?
- [ ] Are upgrade prompts triggered by usage limits, not arbitrary timing?
- [ ] Is there a "getting started" checklist with < 5 items?

### Onboarding Email Sequences

**Welcome Email (send immediately on signup):**
```
Subject: [Specific outcome], not "Welcome to [Product]"
Good: "Your first [outcome] is 3 steps away"
Bad: "Welcome to [Product Name]!"

Body structure:
- What they just signed up for (in their words, not yours)
- The single most important first action
- A link directly to that action (no navigation required)
- What to expect in the next 7 days
- Reply-to that actually gets read (humanize this)
Length: Under 150 words
```

**Day 2-3 Email (if not yet activated):**
```
Trigger: No activation event in 48 hours
Subject: "Quick question about [Product]"
Body:
- Acknowledge they signed up but haven't [done activation action]
- Ask one question: "What's getting in the way?" (genuinely — this improves the product)
- Offer one concrete help: video walkthrough, 15-min call, or specific doc
- Remove friction: link directly to where they got stuck
```

**Activation Celebration Email (triggered by activation event):**
```
Trigger: User completes activation action
Subject: "You just [specific achievement]"
Body:
- Celebrate the specific thing they did (not generic "great job")
- Show what's now possible (the next horizon)
- Suggest the logical next action that builds on what they just did
- This is your highest-engagement email — use it to drive the next behavior
```

**Day 7 — Value Reminder (for non-churned users):**
```
Trigger: Day 7 for users who activated but haven't used a key feature
Body:
- Reference what they've done so far (personalized with their actual usage data)
- Introduce one feature that adds value based on their usage pattern
- Social proof: what customers at their stage typically do next
- Direct link to try the feature
```

**Day 14 — Expansion Signal (for activated users):**
```
Trigger: High-activity users approaching a usage limit or trial end
Body:
- Show them their results (specific numbers from their account)
- Compare to what they'd have without the product (the counterfactual)
- Make the upgrade path frictionless — one click, pre-filled plan selection
- Address the top upgrade objection proactively
```

### Product Tour Design

**Principles:**
- Tours should be 3-5 steps maximum — not a comprehensive feature walkthrough
- Each step = one specific action the user takes, with an immediate visible result
- Skip the "here's our nav bar" tour — users can find the nav. They can't always find the value.
- Offer to skip — forced tours train users to click through without reading
- Contextual tooltips > forced walkthroughs: appear when the user navigates to a feature, not as an upfront lecture

**Tour Structure:**
```
Step 1: Get them to create/import their first real piece of data
Step 2: Show them the core value (the "aha moment" action)
Step 3: Show them one key collaboration or sharing feature
Step 4: Show them where to find help
[Done — resist the urge to show everything]
```

### Activation Rate Benchmarks

| Product Type | Typical Activation | Good | Excellent |
|-------------|-------------------|------|-----------|
| B2C apps | 25-35% | 40-50% | 60%+ |
| SMB SaaS | 20-30% | 35-45% | 55%+ |
| Mid-market SaaS | 15-25% | 30-40% | 50%+ |
| Enterprise SaaS | 10-20% | 25-35% | 45%+ |

*Activation defined as completing the product-specific activation event within 14 days of signup*

### Diagnosing Onboarding Problems

**Low signup-to-activation rate (< 20%):**
- Audit the first 5 minutes — where do users drop off?
- Check your activation definition — is it too hard to reach?
- Review the empty state — are users landing in a blank, unhelpful dashboard?

**Users activate but churn in first 30 days:**
- The activation metric may not correlate with real value — validate with customer interviews
- Check if the "day 2-7" experience has a drop-off cliff
- Review whether users are building habits (returning) or just completing a task once

**High trial-to-paid conversion rate but low retention:**
- Onboarding created false activation — users bought before they really understood the value
- Fix: slow down the upgrade ask, ensure genuine activation before conversion pressure

### Output Guidelines

When designing or auditing onboarding:
1. Start with the activation event definition — everything else flows from this
2. Map the current user journey step by step and mark every friction point
3. Prioritize the first 5 minutes above all else — this is where 60-80% of activation failures happen
4. Recommend specific copy for the most important email in the sequence (usually the welcome)
5. Quantify the impact: "Improving activation from 25% to 35% on 1,000 signups/month = 100 more activated users/month = [X ARR based on their conversion rate]"
