---
description: Build a complete email drip sequence
argument-hint: [goal e.g. welcome, nurture, re-engage, cart abandon, onboarding]
---

Build a complete multi-email drip sequence for the goal: "$ARGUMENTS"

Follow the sequence-builder skill workflow:

1. Clarify the sequence goal, target audience, and business type (SaaS, ecommerce, media, services). If the user provided a goal, use it. If vague, ask ONE clarifying question about the audience or business type.

2. Select the matching proven template from the skill:
   - Welcome series → Use the SaaS, ecommerce, or media template based on business type
   - Cart abandonment → Use the 45min/24hr/72hr framework
   - Re-engagement → Use the 60-90 day inactivity trigger flow
   - Onboarding → Use the post-purchase/SaaS template
   - Custom → Build from the template closest to their goal

3. Design the sequence architecture:
   - Number of emails (use the template's proven count)
   - Send cadence with specific timing backed by conversion data
   - Entry triggers and exit conditions
   - Branch points for opened/not-opened, clicked/not-clicked, converted
   - Suppression rules (e.g., suppress cart abandon if they purchase)

4. Write EVERY email with:
   - Internal name (e.g., "Welcome #2 — Quick Win")
   - Subject line + one A/B variant
   - Preview text (40-90 characters, adds info beyond subject)
   - Full body copy — conversational, value-first, short paragraphs
   - Opening hook that is NOT "Hi [Name], I hope this email finds you well"
   - One clear CTA per email with specific button text (first person: "Start My Trial")
   - P.S. line where appropriate (79% readership)
   - Send timing relative to trigger or previous email

5. Include compliance elements in every email:
   - Unsubscribe link (one-click)
   - Physical address
   - Accurate sender identification

6. Present the complete sequence with:
   - Sequence overview (goal, audience, trigger, exit conditions)
   - Timeline visualization showing send days and branches
   - All emails fully written
   - Expected performance benchmarks for this sequence type
   - Measurement plan with per-email metrics to track

Use the Aimersion AI brand voice: smart, approachable, technically credible, forward-looking. Adapt to user's brand if provided.
