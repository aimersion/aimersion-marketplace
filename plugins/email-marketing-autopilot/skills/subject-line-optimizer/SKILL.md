---
name: subject-line-optimizer
description: >
  Generate and A/B test subject line variations for email campaigns.
  This skill should be used when the user asks to "write subject lines", "optimize my subject line",
  "A/B test subject lines", "improve open rates", "email subject ideas", "subject line variations",
  "headline options for email", or needs help crafting compelling email subject lines that drive opens.
version: 2.0.0
---

# Subject Line Optimizer

Generate high-performing email subject lines using 12 data-backed formulas. Every recommendation includes expected performance ranges and A/B test methodology.

## Important Context: Apple Mail Privacy Protection (MPP)

Since iOS 15 (Sept 2021), Apple Mail pre-loads tracking pixels, inflating open rates by 20-75% depending on your audience's Apple Mail share. This means:

- **Open rates are directionally useful, not absolute.** A 45% open rate with 60% Apple Mail users may represent ~25% real opens.
- **Compare open rates within your own list over time**, not to external benchmarks.
- **Click-through rate (CTR) is now the most reliable engagement metric** for subject line testing.
- When running A/B tests, **track both open rate AND click rate** — if open rates are similar but click rates differ, the subject line set different content expectations.

## Subject Line Generation Process

### 1. Gather Context

Before generating, understand:
- **Email type**: Campaign, automated, transactional, newsletter
- **Audience**: Prospects, customers, segment name, industry
- **Key message**: Single most important thing to communicate
- **Desired action**: What should happen after opening?
- **Sender context**: Are you a known sender or cold? (Known senders can be more creative; cold senders need clarity)

### 2. The 12 Data-Backed Formulas

Generate subject lines using these proven approaches. Performance data is from aggregate 2024-2025 studies:

| # | Formula | Avg. Lift vs. Generic | Example | Best For |
|---|---------|----------------------|---------|----------|
| 1 | **Curiosity Gap** — Open a loop | +22% opens | "The metric most marketers ignore" | Newsletters, content |
| 2 | **Specific Benefit** — What they gain | +18% opens | "Cut your bounce rate in half this week" | Product emails, tutorials |
| 3 | **Scarcity/Urgency** — Time pressure | +15-25% opens | "Ends tonight: 40% off all plans" | Promos, limited offers |
| 4 | **Question** — Engage by asking | +21% opens | "Is your welcome series costing you customers?" | Nurture, re-engagement |
| 5 | **Number/List** — Specificity signals value | +15% opens | "7 subject line mistakes killing your opens" | Educational content |
| 6 | **Behavioral Personalization** — Based on their actions | +26% opens | "Still thinking about [product name]?" | Cart abandon, browse abandon |
| 7 | **Social Proof** — Others validate | +12% opens | "Join 2,400+ marketers who read this weekly" | Newsletters, signups |
| 8 | **Contrarian** — Challenge beliefs | +19% opens | "Stop segmenting your email list (seriously)" | Thought leadership |
| 9 | **Direct/Clear** — No games, just value | +8% opens (but highest CTOR) | "March product update: 3 new features" | Product updates, announcements |
| 10 | **Story Hook** — Narrative opener | +17% opens | "We sent 50,000 emails last week. Here's what broke." | Case studies, learnings |
| 11 | **"Quick" / Low Commitment** — Reduce friction | +20% opens | "Quick question about your account" | B2B, surveys, check-ins |
| 12 | **Name-Drop Personalization** — First name or company | +10-14% opens | "[First Name], your Q1 report is ready" | Personalized sends, reports |

### 3. Length and Mobile Optimization

Subject line length directly impacts open rates:

| Length | Character Count | Mobile Visibility | Performance |
|--------|----------------|-------------------|-------------|
| Ultra-short | 1-20 chars | Full visibility everywhere | Works for known senders; too vague for cold |
| Short (ideal) | 21-40 chars | Full visibility on most devices | Highest overall open rates |
| Medium | 41-60 chars | Partially truncated on mobile | Good if the key info is front-loaded |
| Long | 60+ chars | Heavily truncated | Avoid — unless the first 40 chars stand alone |

**Rule:** Front-load the most important words. On mobile (60%+ of opens), only the first 30-35 characters show. "Your exclusive 40% discount" beats "We're excited to offer you an exclusive 40% discount."

### 4. Emoji Usage (Data-Backed)

Emojis in subject lines are polarizing. Here's what the data says:

- **B2C / ecommerce**: Single emoji can lift open rates 3-5% when brand-appropriate
- **B2B / professional**: Emojis decrease open rates by 5-13% and trigger spam filters more often
- **Newsletters**: One emoji as a visual anchor (e.g., a section marker) performs well
- **Cold email**: Never. Emojis signal mass blast and hurt deliverability.

**If using emojis:** One max. Place at the beginning or end, not mid-sentence. Test against no-emoji variant. Avoid: fire, money bags, sirens (spam-coded).

### 5. Spam Trigger Avoidance

Modern spam filters are sophisticated, but these patterns still hurt deliverability:

**High risk (avoid entirely):**
- ALL CAPS in subject lines
- Multiple exclamation marks (!!!)
- "FREE" in all caps
- "Act now", "Limited time", "Don't miss" (when combined with other triggers)
- Dollar signs with amounts ($$$, "Make $5,000")
- "100% guaranteed", "No obligation", "Risk-free"

**Medium risk (use carefully):**
- Single "free" in lowercase (okay in context: "free guide")
- Urgency words alone are fine — it's the combination with other triggers that flags
- Numbers are generally positive (specificity) unless they look like financial spam

**Low risk (safe to use):**
- Questions, personalization, curiosity gaps, story hooks
- Specific numbers ("7 tips", "3 new features")
- First-name merge tags

### 6. Scoring and Evaluation

Rate each subject line on these criteria (1-5 scale):

| Criterion | Weight | What to Check |
|-----------|--------|---------------|
| **Clarity** | 25% | Can a reader understand it in 2 seconds? |
| **Relevance** | 25% | Does it match what this specific audience cares about? |
| **Curiosity/Value** | 20% | Is there a compelling reason to open? |
| **Mobile-safe** | 15% | Does the key message survive truncation at 35 chars? |
| **Spam safety** | 10% | Free of trigger patterns? |
| **Brand fit** | 5% | Matches the sender's voice and tone? |

### 7. A/B Testing Methodology

**Minimum sample sizes for statistical significance:**

| List Size | Test Group | Winner Group | Min. Detectable Difference |
|-----------|-----------|--------------|---------------------------|
| 5,000 | 1,000 (500/500) | 4,000 | ~3-5% open rate difference |
| 10,000 | 2,000 (1,000/1,000) | 8,000 | ~2-3% difference |
| 25,000+ | 5,000 (2,500/2,500) | 20,000 | ~1-2% difference |
| Under 2,000 | Don't A/B test | Send best guess | Track over time instead |

**Test duration:** 2-4 hours for B2C, 4-8 hours for B2B (longer inbox check cycles).

**What to test (one variable at a time):**
1. Formula type (curiosity vs. benefit vs. question)
2. Length (short vs. medium)
3. Personalization (with name vs. without)
4. Emoji (with vs. without)
5. Preview text pairing

**What NOT to test simultaneously:** Don't change both the formula AND the length AND add personalization — you won't know what caused the difference.

### 8. Preview Text Pairing

For each recommended subject line, write preview text that:
- **Adds new information** (never repeats the subject line)
- **Continues the thought** (reads as a natural extension)
- **Includes a secondary hook** (additional reason to open)
- **Is 40-90 characters** (shorter gets padded with email body text)

**Example pairings:**
- Subject: "Your Q1 email report is ready" → Preview: "Open rates up, but one metric needs attention"
- Subject: "We're changing how pricing works" → Preview: "Good news — here's what it means for your plan"
- Subject: "7 welcome email mistakes" → Preview: "Number 4 costs most brands 23% of new subscribers"

### 9. Output Format

Present results as:

1. **12 subject line variations** — one per formula, with character count and category label
2. **Top 3 recommendations** — scored on the 6-criteria framework with reasoning
3. **Preview text pairings** — for each top 3
4. **A/B test plan** — which 2 to test, sample split based on list size, test duration, winner metric
5. **Send-time note** — if relevant to the content (urgency emails perform best morning; educational emails do well mid-week)

## Quick Reference: Subject Lines by Email Type

| Email Type | Best Formulas | Avoid |
|------------|--------------|-------|
| Newsletter | Curiosity, Number/List, Story | Urgency (unless truly time-bound) |
| Product update | Direct, Benefit, Number | Clickbait curiosity gaps |
| Promotion/sale | Urgency, Benefit, Social Proof | Vague curiosity with no payoff |
| Cart abandonment | Behavioral, Direct, Question | Hard-sell urgency in email #1 |
| Re-engagement | Question, Contrarian, Story | Guilt-tripping ("We miss you" is overused) |
| Transactional | Direct only | Anything that looks like marketing |
| Cold outreach | Quick/Low Commitment, Question | Emojis, urgency, "Free" |
