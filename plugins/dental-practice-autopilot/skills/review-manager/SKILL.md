---
name: review-manager
description: >
  Manage and respond to online patient reviews on Google, Yelp, and
  Healthgrades while maintaining HIPAA compliance. This skill should be used
  when the user asks to "respond to a review", "manage online reviews",
  "handle a bad review", "negative review response", "Google review",
  "Yelp review", "Healthgrades review", "online reputation", "review strategy",
  "get more reviews", or needs help with any online reputation management.
version: 1.0.0
---

# Review Manager

Respond to patient reviews professionally while maintaining HIPAA compliance, and build a strategy for generating positive reviews.

## Why Reviews Matter for Dental Practices

- 77% of patients use online reviews as the first step in finding a new dentist
- A one-star increase in Yelp rating correlates with a 5-9% increase in revenue
- Practices with 50+ Google reviews and a 4.5+ rating dominate local search
- The most recent 10 reviews carry disproportionate weight in patient decisions
- Responding to reviews (positive and negative) increases the likelihood of new reviews by 12%

## HIPAA Rules for Review Responses

This is non-negotiable. Violating HIPAA in a review response can result in fines from $100 to $50,000 per violation.

**Never:**
- Confirm or deny that someone is a patient
- Reference any treatment, diagnosis, appointment, or billing detail
- Share any Protected Health Information (PHI), even if the reviewer shared it first
- Say "We treated you on [date]" or "Your procedure went well"
- Reference the reviewer's insurance status, payment history, or account balance

**Even if the patient:**
- Named their specific procedure in the review
- Shared photos of their dental work
- Gave detailed (and incorrect) clinical information
- Was publicly unfair or dishonest

The practice CANNOT disclose PHI in response, period. The patient waiving their own privacy does not waive the practice's obligation.

**Safe response language:**
- "Thank you for your feedback"
- "We take all concerns seriously"
- "We'd love to discuss this further — please call our office"
- "Our team strives to provide the best experience for everyone"
- Generic references to practice values, policies, and standards

## Response Strategy by Rating

### 5 Stars
- Thank them warmly and specifically (reference what they praised without adding PHI)
- Reinforce the positive ("Our team works hard to create a comfortable experience")
- Keep it brief (2-3 sentences)
- Respond within 24 hours

### 4 Stars
- Thank them genuinely
- If they mentioned an area for improvement, acknowledge it generally
- Invite them back
- 2-3 sentences

### 3 Stars
- Thank them for the honest feedback
- Acknowledge the mixed experience without being defensive
- Invite them to share more detail privately ("Please call us at [number] so we can make it right")
- 3-4 sentences

### 2 Stars
- Express genuine concern
- Acknowledge the disappointment without admitting fault on specifics
- Offer to resolve privately
- 3-5 sentences
- Respond within 12-24 hours

### 1 Star
- Stay calm and professional — this response is for future patients reading it, not just the reviewer
- Express empathy ("We're sorry to hear about your experience")
- Take the conversation offline ("We'd like to understand what happened — please contact [name] directly at [number/email]")
- Show you take feedback seriously
- Do NOT get defensive, argue facts, or point out inaccuracies
- 3-5 sentences
- Respond within 12 hours

## Building a Review Generation System

### The Ask Strategy
- Ask patients who had a positive experience ("Would you mind sharing your experience on Google? It helps other patients find us")
- Best timing: immediately after a compliment, successful treatment, or expressed satisfaction
- Never incentivize reviews (Google and Yelp prohibit this; FTC rules apply)
- Make it easy: text/email a direct link to your Google review page

### Automated Review Request Flow
1. Patient completes appointment
2. Within 1-2 hours: text/email with satisfaction check ("How was your visit today?")
3. If positive response: send direct Google review link
4. If negative response: route to office manager for service recovery (don't send to Google)
5. Follow up once after 3 days if no action taken

## Reference Files

- **`references/review-response-examples.md`** — Example responses for common review scenarios
