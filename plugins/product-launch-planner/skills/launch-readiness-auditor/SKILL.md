---
name: launch-readiness-auditor
description: >
  Score launch readiness across 8 critical dimensions, identify gaps, and generate a
  prioritized fix-it list before going live. This skill should be used when the user asks
  to "audit my launch", "am I ready to launch", "launch readiness check", "launch
  checklist", "pre-launch audit", "what am I missing for launch", "launch go/no-go
  decision", "launch risk assessment", or needs help evaluating whether their product
  is ready to launch. Also trigger when someone mentions "launch review", "launch
  preparation check", "ready to ship", or "should I launch yet".
version: 2.0.0
---

# Launch Readiness Auditor

Score your launch readiness across 8 critical dimensions and get a prioritized fix-it list. 95% of launches fail — this skill helps you identify and close the gaps that cause failure before you go live.

## Why Launch Readiness Matters

The most common failure pattern isn't a bad product — it's launching before you're ready. Teams skip external testing (72% of failed products), launch without customer support preparation (>50% of failures involve internal misalignment), and announce dates before they can deliver. This audit catches those gaps.

## The 8-Dimension Readiness Framework

Score each dimension on a 1-5 scale based on the user's responses:

### Dimension 1: Product Readiness (Weight: 20%)
- Is the core product/service complete and functional?
- Has it been tested by external users (not just internal team)?
- Are critical bugs fixed and known issues documented?
- Is the onboarding/first-use experience smooth?
- Is there a rollback plan if something breaks?

**Scoring:**
- 5: Extensively tested with 20+ external users, all critical issues resolved
- 4: Tested with 10-20 external users, minor issues remaining
- 3: Tested with <10 users or only internal testing complete
- 2: Minimal testing, significant known issues
- 1: Not tested externally, major features incomplete

### Dimension 2: Market Validation (Weight: 15%)
- Have you validated demand with real customers (not friends/family)?
- Do you have evidence of willingness to pay at your price point?
- Can you articulate why someone would choose you over alternatives?
- Do you know who your early adopters are specifically?

**Scoring:**
- 5: 20+ customer interviews, validated willingness to pay, clear differentiation
- 4: 10-20 customer conversations, strong positive signals
- 3: Some customer feedback, general interest but not validated pricing
- 2: Assumptions based on market research, no direct customer validation
- 1: No customer validation, building on assumptions

### Dimension 3: Audience & Distribution (Weight: 15%)
- Do you have an email list or audience to launch to?
- Do you have a plan to drive traffic/awareness on launch day?
- Are your distribution channels set up and tested?
- Do you have partnerships or affiliates ready to promote?

**Scoring:**
- 5: 3,000+ engaged email subscribers, multiple traffic sources confirmed
- 4: 1,000-3,000 subscribers, 2+ traffic sources planned
- 3: 500-1,000 subscribers, 1 primary traffic source
- 2: <500 subscribers, relying on organic/hope marketing
- 1: No audience built, no distribution plan

### Dimension 4: Messaging & Positioning (Weight: 10%)
- Is your value proposition clear and tested with target customers?
- Do you have consistent messaging across all channels?
- Are your product descriptions/listings optimized?
- Have you A/B tested headlines or messaging?

**Scoring:**
- 5: Messaging tested with customers, A/B tested, consistent across channels
- 4: Clear messaging reviewed by target customers, consistent across channels
- 3: Messaging drafted but not externally tested
- 2: Basic messaging exists but inconsistent across channels
- 1: No clear messaging or positioning

### Dimension 5: Pricing & Monetization (Weight: 10%)
- Is pricing finalized and competitive?
- Have you validated willingness to pay?
- Is your billing/payment system set up and tested?
- Do you have a launch pricing strategy (early bird, tiers, etc.)?

**Scoring:**
- 5: Pricing validated with customers, billing tested, launch pricing strategy set
- 4: Pricing competitive, billing working, basic launch offer planned
- 3: Pricing set but not validated, billing functional
- 2: Pricing uncertain, billing partially set up
- 1: No pricing decided, billing not ready

### Dimension 6: Content & Marketing Assets (Weight: 10%)
- Are launch emails written and loaded?
- Is social media content created and scheduled?
- Are product images/videos professional quality?
- Is your landing page / product page live and optimized?
- Do you have a press release or PR plan?

**Scoring:**
- 5: All assets created, loaded, scheduled, and tested
- 4: Most assets ready, minor items remaining
- 3: Key assets (emails, landing page) ready, social/PR incomplete
- 2: Some assets started, most incomplete
- 1: Minimal content created

### Dimension 7: Operations & Support (Weight: 10%)
- Is customer support ready to handle inquiries?
- Are FAQ and help documentation written?
- Is your team briefed on the product and launch plan?
- Are fulfillment/delivery systems tested?
- Do you have escalation procedures for issues?

**Scoring:**
- 5: Support team trained, documentation complete, fulfillment tested, escalation paths set
- 4: Support ready, basic documentation, fulfillment working
- 3: Support aware but not trained, documentation partial
- 2: Minimal support preparation
- 1: No support readiness

### Dimension 8: Analytics & Measurement (Weight: 10%)
- Are analytics tracking installed and working?
- Have you defined success metrics with specific targets?
- Is your monitoring dashboard set up?
- Do you have a plan for post-launch analysis?

**Scoring:**
- 5: Full analytics, defined KPIs with targets, real-time dashboard, analysis plan
- 4: Analytics installed, KPIs defined, basic monitoring
- 3: Analytics installed, general goals but no specific targets
- 2: Basic analytics only, no defined success metrics
- 1: No analytics or measurement plan

## Running the Audit

Walk through each dimension with the user. For each one:
1. Ask 2-3 probing questions to understand their current state
2. Score the dimension based on their responses
3. Note specific gaps and risks

Don't ask all 40+ questions — use conversation to efficiently assess each area.

## Calculating the Readiness Score

**Weighted Score = Σ (Dimension Score × Weight)**

| Score Range | Rating | Recommendation |
|-------------|--------|---------------|
| 4.5-5.0 | Launch Ready | Go! Minor polish only needed |
| 3.5-4.4 | Nearly Ready | Fix the gaps flagged below, launch within 1-2 weeks |
| 2.5-3.4 | Significant Gaps | Address critical items before launching, expect 2-4 week delay |
| 1.5-2.4 | Not Ready | Major preparation needed, reassess launch timeline |
| 1.0-1.4 | Critical | Fundamental gaps — step back and build foundation first |

## Output Format

```
# Launch Readiness Audit: [Product Name]
## Target Launch Date: [Date]
## Overall Score: [X.X] / 5.0 — [Rating]

### Dimension Scores

| Dimension | Score | Weight | Weighted | Status |
|-----------|-------|--------|----------|--------|
| Product Readiness | [1-5] | 20% | [n] | [emoji] |
| Market Validation | [1-5] | 15% | [n] | [emoji] |
| Audience & Distribution | [1-5] | 15% | [n] | [emoji] |
| Messaging & Positioning | [1-5] | 10% | [n] | [emoji] |
| Pricing & Monetization | [1-5] | 10% | [n] | [emoji] |
| Content & Marketing | [1-5] | 10% | [n] | [emoji] |
| Operations & Support | [1-5] | 10% | [n] | [emoji] |
| Analytics & Measurement | [1-5] | 10% | [n] | [emoji] |
| **TOTAL** | | **100%** | **[X.X]** | |

### Critical Gaps (Fix Before Launch)
[Items scoring 1-2 that must be addressed]

### Important Gaps (Fix Within Launch Week)
[Items scoring 3 that should be improved]

### Strengths (Leverage These)
[Items scoring 4-5 that are working well]

### Prioritized Fix-It List
1. [Highest impact gap] — [Specific action] — [Estimated time]
2. [Second gap] — [Specific action] — [Estimated time]
3. [Third gap] — [Specific action] — [Estimated time]
[Continue...]

### Recommendation
[Go / Delay / Restructure — with specific reasoning]
[If delay: recommended new timeline and what to do in the interim]
```

## References

See `references/readiness-checklists.md` for detailed checklists by product type and common launch failure patterns to watch for.
