---
name: sequence-builder
description: >
  Design multi-email drip sequences for any goal (welcome, nurture, re-engage, onboarding, upsell, win-back, cart abandonment).
  This skill should be used when the user asks to "create an email sequence", "build a drip campaign",
  "design a welcome series", "write a nurture flow", "re-engagement emails", "onboarding sequence",
  "email drip", "automated email series", "cart abandonment flow", "win-back campaign",
  or needs help planning a multi-touch email workflow.
version: 2.0.0
---

# Email Sequence Builder

Design complete multi-email drip sequences with proven timing, branching logic, and full email copy. Every timing recommendation is backed by conversion data.

## Workflow

### 1. Define the Sequence Goal

Identify the primary objective and business type before writing. The business type changes everything about timing and content:

**Sequence Types with Proven Performance Data:**

| Sequence Type | Avg. Open Rate | Avg. CTR | Revenue Impact |
|---------------|---------------|----------|----------------|
| Welcome series | 50-60% (email 1) | 14.3% | Sets lifetime engagement baseline |
| Cart abandonment | 45-50% | 8-10% | Recovers 5-15% of abandoned carts |
| Browse abandonment | 35-40% | 3-5% | 2-5% conversion on reminded products |
| Post-purchase | 40-50% | 5-8% | 20-30% repeat purchase lift |
| Re-engagement | 12-18% | 1-3% | Saves 5-10% of at-risk subscribers |
| Nurture (B2B) | 20-30% | 2-4% | 20% shorter sales cycles |
| Onboarding (SaaS) | 40-60% | 8-12% | 25-40% trial-to-paid improvement |
| Win-back | 10-15% | 1-2% | Last chance before sunset |

### 2. Proven Sequence Templates

#### Welcome Series (3-5 emails)

The single most important sequence. Welcome emails get 4x more opens and 5x more clicks than regular campaigns.

**Template — SaaS/B2B:**
| Email | Timing | Purpose | Subject Line Formula |
|-------|--------|---------|---------------------|
| #1 | Immediate (< 5 min) | Deliver promised value + set expectations | "Welcome — here's your [lead magnet]" |
| #2 | Day 1 | Quick win — show ONE feature that solves their pain | "The first thing to try in [Product]" |
| #3 | Day 3 | Social proof — case study or testimonial | "How [Company] achieved [Result]" |
| #4 | Day 5 | Address top objection + invite to next step | "The #1 question we get about [Topic]" |
| #5 | Day 7 | Clear CTA — trial, demo, purchase, depending on funnel | "[First Name], ready for [next step]?" |

**Template — Ecommerce:**
| Email | Timing | Purpose | Subject Line Formula |
|-------|--------|---------|---------------------|
| #1 | Immediate | Welcome + discount code (if offered) | "Welcome! Here's your [X]% off" |
| #2 | Day 2 | Brand story + bestsellers | "Why we started [Brand] (+ what to shop first)" |
| #3 | Day 4 | Social proof — UGC, reviews, customer photos | "See what [X,000]+ customers are saying" |
| #4 | Day 7 | Discount reminder (if unused) OR category education | "Your [X]% off expires soon" |

**Template — Media/Newsletter:**
| Email | Timing | Purpose | Subject Line Formula |
|-------|--------|---------|---------------------|
| #1 | Immediate | Thank you + best-of content | "You're in — start with our best" |
| #2 | Day 2 | Set expectations (frequency, topics, what to expect) | "What to expect every [day]" |
| #3 | Day 5 | Ask for engagement (reply, whitelist, preference center) | "Quick favor to make sure you see us" |

#### Cart Abandonment (3 emails)

Timing is everything. The 45-90 minute window for email #1 is critical — sending earlier risks messaging while they're still browsing; later risks losing the purchase intent.

| Email | Timing | Purpose | Key Elements |
|-------|--------|---------|-------------|
| #1 | 45-60 minutes after abandonment | Gentle reminder — no discount | Product image, "Still thinking it over?", link back to cart |
| #2 | 24 hours | Social proof + urgency | Customer reviews of abandoned items, stock/availability cues |
| #3 | 72 hours | Final push — incentive if margin allows | Small discount or free shipping, "Last chance" framing |

**Critical rules:**
- Never offer discounts in email #1 (trains customers to abandon for coupons)
- Include product images and names — don't make them remember what they left
- Suppress if they purchase between emails
- Mobile-optimized "Return to Cart" button is mandatory

#### Re-engagement / Win-back (3-4 emails)

Trigger: No opens or clicks in 60-90 days.

| Email | Timing | Purpose | Subject Line Formula |
|-------|--------|---------|---------------------|
| #1 | Day 0 | "We miss you" — remind them of value | "It's been a while, [First Name]" |
| #2 | Day 5 | Best content/offer — give them a reason to return | "Here's what you've been missing" |
| #3 | Day 10 | Direct ask — "Do you still want to hear from us?" | "Should we stop emailing you?" |
| #4 | Day 14 | Final notice — sunset warning | "Last email unless you click" |

**After email #4:** Move non-responders to suppression. This is non-negotiable for sender reputation. Keeping unengaged subscribers tanks your deliverability for the subscribers who DO want your emails.

#### Post-Purchase / Onboarding (SaaS) (5-7 emails)

| Email | Timing | Purpose |
|-------|--------|---------|
| #1 | Immediate | Order confirmation + what happens next |
| #2 | Day 1 | Getting started guide — first value moment |
| #3 | Day 3 | Feature spotlight — the thing most users miss |
| #4 | Day 7 | Check-in — "How's it going?" + support resources |
| #5 | Day 14 | Social proof + advanced tips |
| #6 | Day 21 | Upgrade/upsell (if on trial) OR cross-sell (if purchased) |
| #7 | Day 28 | Feedback request (NPS or review) |

### 3. Branching Logic

Build conditional paths based on subscriber behavior. The three essential branches:

**Opened but didn't click → Content problem**
- Send a follow-up with a different CTA or content angle
- Test: Was the content relevant? Was the CTA clear?

**Didn't open → Deliverability or subject line problem**
- Resend with a new subject line after 48 hours (one resend max)
- If still no open: flag for re-engagement segment

**Clicked but didn't convert → Landing page or offer problem**
- Send social proof / objection-handling follow-up
- Consider: Is the landing page mobile-friendly? Is the offer clear?

**Converted → Exit and transition**
- Immediately exit the current sequence
- Enroll in the appropriate next sequence (post-purchase, onboarding, etc.)

### 4. Email Copywriting Standards

**Opening hook rules:**
- NEVER open with "Hi [Name], I hope this email finds you well"
- NEVER open with "I wanted to reach out about..."
- DO open with: a question, a bold claim, a statistic, a story, or a direct benefit
- The first line appears in preview text — make it count

**Structure every email as:**
1. **Hook** (1-2 sentences): Why should I keep reading?
2. **Value** (2-4 short paragraphs): What's in it for me?
3. **CTA** (1 clear action): What do you want me to do right now?
4. **P.S.** (optional): Secondary CTA or social proof — P.S. lines get 79% readership

**Tone calibration by sequence type:**
- Welcome: Warm, excited, helpful
- Cart abandonment: Casual, helpful (NOT pushy or desperate)
- Re-engagement: Honest, direct, slightly vulnerable
- Onboarding: Confident, guiding, patient
- Nurture: Educational, generous, expert

**CTA button text rules:**
- Use first person: "Start My Trial" not "Start Your Trial" (31% higher CTR)
- Be specific: "Download the Guide" not "Click Here"
- One primary CTA per email. Secondary links in body are fine; one button.
- Button color should contrast with email background (obvious, but often wrong)

### 5. Compliance Requirements (Built In)

Every sequence MUST include:
- **Unsubscribe link**: One-click, functional, in every email (CAN-SPAM, GDPR)
- **Physical address**: Required by CAN-SPAM in every marketing email
- **Sender identification**: Accurate "From" name and email
- **Suppression checks**: Honor unsubscribes within 10 business days (CAN-SPAM) or immediately (best practice)
- **Frequency transparency**: Welcome email should set expectations ("You'll hear from us [X] times per [week/month]")

**GDPR-specific (EU/UK subscribers):**
- Consent must be explicit and documented (no pre-checked boxes)
- Include purpose of processing in signup form
- Provide easy access to preference center
- Honor data deletion requests within 30 days

### 6. Output Format

Present the complete sequence as:

1. **Sequence overview** — Goal, audience, entry trigger, exit conditions, total emails, estimated timeline
2. **Sequence map** — Visual timeline showing email send days, branch logic, and exit points
3. **Individual emails** — Each fully written:
   - Internal name (e.g., "Welcome #2 — Quick Win")
   - Subject line + A/B variant
   - Preview text (40-90 chars, adds info beyond subject)
   - Full body copy
   - CTA with button text and destination
   - Send timing (relative to trigger or previous email)
4. **Branch logic** — What happens if they open/don't open, click/don't click, convert
5. **Measurement plan** — Per-email metrics: open rate, CTR, CTOR, conversion rate, unsubscribe rate
6. **Expected benchmarks** — What "good" looks like for this sequence type

Default to the Aimersion AI brand voice: smart, approachable, technically credible, forward-looking. Adapt voice to match the user's brand if they provide guidelines.
