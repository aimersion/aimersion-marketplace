---
name: launch-timeline-builder
description: >
  Generate customized week-by-week product launch timelines with phase-specific tasks,
  dependencies, and milestones. Supports SaaS, e-commerce, DTC, Amazon, crowdfunding,
  and digital product launches. This skill should be used when the user asks to "plan a
  launch", "create a launch timeline", "build a launch schedule", "go-to-market plan",
  "launch roadmap", "launch checklist", "when should I start preparing for launch",
  "how long does a product launch take", or needs help organizing any product launch
  from pre-launch through post-launch phases. Also use when someone mentions "GTM strategy",
  "launch plan", "launch phases", or asks about launch timing.
version: 2.0.0
---

# Launch Timeline Builder

Generate research-backed, week-by-week launch timelines customized to the user's product type, market, and resources.

## Why This Matters

95% of product launches fail. The #1 tactical reason is insufficient planning — teams cram 6 months of work into 3-month timelines. This skill generates realistic timelines with proper lead times, based on data from thousands of launches.

## Gathering Context

Before generating a timeline, understand:

1. **Product type** — SaaS, physical product, e-commerce/Amazon, DTC brand, digital product (course/ebook), crowdfunding, mobile app
2. **Target launch date** — fixed date or flexible?
3. **Current stage** — idea, MVP built, beta tested, ready to ship?
4. **Team size** — solo founder, small team, full marketing department?
5. **Budget level** — bootstrapped, moderate, well-funded?
6. **Existing audience** — email list size, social following, customer base?

If the user hasn't provided this context, ask for it. Keep questions focused — don't overwhelm with a 20-question intake form.

## Timeline Architecture

Every launch follows three phases, but the duration and emphasis shifts by product type.

### Phase 1: Pre-Launch (70-80% of total effort)

This is where launches are won or lost. The pre-launch phase handles validation, audience building, content creation, and operational readiness.

### Phase 2: Launch Window (1-2 weeks)

The concentrated execution period. Everything built in pre-launch gets deployed simultaneously across all channels.

### Phase 3: Post-Launch (4-8 weeks)

Analysis, optimization, and momentum maintenance. Most teams abandon effort here — the ones that don't capture 2-3x more value.

## Generating the Timeline

Read `references/timeline-templates.md` for the specific week-by-week templates for each product type. Select the appropriate template based on the user's product type and customize it.

### Customization Rules

**If team is solo/small (1-3 people):**
- Extend timeline by 25-50% (more time per phase)
- Reduce parallel tasks — sequence things that a larger team would do simultaneously
- Prioritize: email list > social media > PR (solo founders get most ROI from email)

**If existing audience is large (5k+ email, 10k+ social):**
- Compress audience building phase by 2-3 weeks
- Shift effort to content creation and launch event planning
- Add audience segmentation and personalized launch sequences

**If budget is bootstrapped:**
- Remove paid advertising from pre-launch (shift to organic + partnerships)
- Add more time for manual outreach and content creation
- Focus on referral/ambassador programs over paid acquisition

**If launch date is fixed and tight (<6 weeks):**
- Use the compressed timeline variant
- Flag high-risk items that may not have enough lead time
- Recommend what to cut vs. what to keep

## Output Format

Present the timeline as a structured week-by-week plan:

```
# [Product Name] Launch Timeline
## Launch Date: [Date]
## Total Duration: [X] weeks

### Phase 1: Pre-Launch ([dates])

**Week [N]: [Phase Name]**
- [ ] Task 1 (Owner: [role])
- [ ] Task 2 (Owner: [role])
- [ ] Task 3 (Owner: [role])
> Milestone: [What should be done by end of this week]
> Dependencies: [What needs to happen before next week]

[Continue for each week...]

### Phase 2: Launch Window ([dates])
[Daily breakdown for launch week]

### Phase 3: Post-Launch ([dates])
[Weekly breakdown for 4-8 weeks]

---
## Critical Path Items
[List the 5-7 items that, if delayed, will delay the entire launch]

## Risk Register
[Top 3-5 risks with mitigation strategies]
```

If the user has ~~calendar connected, offer to create calendar events for major milestones.

## References

See `references/timeline-templates.md` for detailed week-by-week templates for each product type (SaaS, e-commerce, Amazon, DTC, crowdfunding, digital product).
