---
name: response-drafter
description: >
  Draft professional, empathetic customer support responses. This skill should be used when the user asks to
  "draft a response", "reply to this ticket", "write a customer email", "respond to this issue",
  "help me reply to this customer", or needs assistance composing customer-facing messages that are
  empathetic, clear, and solution-oriented.
version: 0.1.0
---

# Response Drafter

Draft professional, empathetic customer-facing responses adapted to the situation, urgency, and channel.

## Response Principles

1. **Lead with empathy** — acknowledge the customer's frustration or situation before jumping to solutions.
2. **Be specific** — reference the exact issue, don't use vague language like "the problem you mentioned."
3. **Own the issue** — use "we" language for company responsibility, never blame the customer or another team.
4. **Provide next steps** — always tell the customer exactly what happens next and when.
5. **Match the tone** — formal for enterprise, conversational for SMB, urgent for P1/P2 issues.

## Response Framework

Every response should follow this structure (adapt length to situation):

### 1. Acknowledgment (1–2 sentences)
- Name the issue specifically
- Validate the customer's experience
- Express appropriate urgency

### 2. Context / Explanation (1–3 sentences)
- Briefly explain what happened (if known)
- Avoid overly technical jargon unless the customer is technical
- Never speculate — if the cause is unknown, say so

### 3. Resolution / Next Steps (1–3 sentences)
- State what has been done or will be done
- Provide a timeline or expected follow-up
- Offer a workaround if the fix isn't immediate

### 4. Closing (1 sentence)
- Invite follow-up questions
- Reaffirm commitment to helping

## Tone Calibration

| Situation | Tone | Style |
|-----------|------|-------|
| P1/P2 Critical | Urgent, direct, minimal filler | Short sentences, frequent updates, skip pleasantries |
| Bug Report | Empathetic, solution-focused | Acknowledge impact, provide timeline |
| How-To Question | Friendly, instructive | Step-by-step, offer additional resources |
| Feature Request | Appreciative, transparent | Thank them, explain product process, no false promises |
| Billing Issue | Professional, precise | Exact amounts, dates, clear resolution |
| Angry Customer | Calm, validating, non-defensive | Extra empathy, avoid corporate jargon, offer concrete action |
| VIP / Enterprise | Polished, proactive | Reference their account context, offer direct escalation path |

## Anti-Patterns to Avoid

- "I understand your frustration" without specific acknowledgment (too generic)
- "Unfortunately..." as a sentence opener (sets negative tone)
- Blaming the customer: "If you had..." or "You need to..."
- Passing the buck: "That's not our team's responsibility"
- Empty promises: "This will never happen again"
- Robotic language: "Your ticket has been received and is being processed"
- Excessive apology without action

## Channel Adaptation

**Email**: Full structure, complete sentences, sign-off with name and title.

**Live Chat**: Shorter paragraphs, break information into multiple messages, use more conversational tone.

**In-App / Help Center**: Concise, link to relevant documentation, focus on self-service resolution.

## Output Format

Present the drafted response with:

```
**Channel**: [Email / Chat / In-App]
**Tone**: [Urgent / Empathetic / Friendly / Professional]
**Response**:

[The drafted response text]

---
**Internal Notes**: [Any context, caveats, or follow-up actions for the support agent]
```

## Reference Material

For response templates by scenario, see `references/response-templates.md`.
