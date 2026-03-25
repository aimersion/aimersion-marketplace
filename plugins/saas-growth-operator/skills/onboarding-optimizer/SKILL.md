---
name: onboarding-optimizer
description: >
  Optimize SaaS user onboarding flows for faster activation and higher retention. This skill should be used when the user asks about "onboarding flow", "user activation", "time-to-value", "product tour", "first-run experience", "welcome sequence", "activation rate", "onboarding emails", "user setup", "feature adoption", "getting started experience", or needs help designing, auditing, or improving how new users experience their product for the first time. Also trigger when discussing trial conversion, free-to-paid conversion, or new user drop-off.
---

# Onboarding Optimizer

Design and optimize SaaS onboarding experiences that drive activation and long-term retention.

## The Activation Framework

Onboarding success = getting users to their "aha moment" as fast as possible with minimum friction.

### Defining the Aha Moment

The aha moment is the point where a user first experiences the core value of the product. Examples:
- Slack: Sending and receiving first message in a team channel
- Dropbox: Saving a file and accessing it from another device
- Zoom: Completing first video call
- HubSpot: Importing contacts and sending first email

**How to identify yours:**
1. Compare behaviors of retained vs. churned users in first 7 days
2. Look for actions that correlate most strongly with 30/60/90-day retention
3. Test hypotheses: "Users who do X within Y days retain at Z% vs. baseline"

### Activation Metrics

**Primary metrics:**
- Activation rate: % of signups who reach the aha moment
- Time-to-value (TTV): Median time from signup to aha moment
- Onboarding completion rate: % who finish the setup flow

**Secondary metrics:**
- Setup step completion by step (funnel)
- Feature adoption breadth in first session
- Return rate within 24/48/72 hours
- Invite/share rate (viral coefficient)

### Onboarding Design Principles

1. **Progressive disclosure**: Show only what's needed now, reveal complexity later
2. **Quick wins**: Let users accomplish something meaningful within 2 minutes
3. **Guided, not gated**: Provide structure without blocking exploration
4. **Contextual education**: Teach features when they're relevant, not all upfront
5. **Celebrate progress**: Acknowledge milestones (first action, setup complete, first result)
6. **Remove decisions**: Default intelligently, don't ask users to configure before using

### Onboarding Flow Architecture

For detailed patterns and templates, read `references/activation-patterns.md`.

**The ideal flow (PLG):**
1. Signup (minimize fields: email + password, or SSO only)
2. Single qualifying question (role, use case, team size — pick ONE)
3. Personalized quick-start based on answer
4. Guided first action (reach the aha moment)
5. Expansion prompts (invite team, connect integrations, explore features)

**Common antipatterns to eliminate:**
- Requiring email verification before any product access
- Long setup wizards before showing value
- Feature tours that explain everything before the user has context
- Requiring credit card for trial start (reduces signups 60-80%)
- Blank-slate experience with no guidance

## Onboarding Channels

Effective onboarding spans multiple touchpoints:

**In-app:**
- Welcome modal or quick-start checklist
- Tooltips and hotspots on key features
- Progress indicator (setup 3/5 complete)
- Empty state designs that prompt first action

**Email:**
- Welcome email (immediate, warm, one clear CTA)
- Day 1: Setup completion prompt
- Day 3: Value reinforcement + case study
- Day 7: Feature highlight based on usage
- Day 14: Check-in for trial users

**Human touch (for higher-ACV products):**
- Automated CSM assignment based on plan/potential
- Kickoff call template
- Technical onboarding session
- 30-day check-in

## Output Guidelines

When designing or auditing onboarding:
- Map every step from signup to activation
- Identify and quantify friction at each step
- Benchmark TTV against product category
- Provide specific, implementable recommendations
- Include wireframe descriptions or flow diagrams where helpful
- Estimate impact of each recommendation on activation rate
