---
name: technician-productivity
description: >
  Track and optimize auto repair technician productivity with efficiency metrics, hours analysis, and training recommendations. This skill should be used when the user asks to "track tech hours", "technician efficiency", "productivity report", "tech performance metrics", "training needs assessment", "flat rate analysis", "technician utilization", "labor efficiency", "tech billable hours", or needs help measuring and improving their technicians' performance.
version: 0.1.0
---

# Technician Productivity

Track, analyze, and optimize technician performance to maximize shop output and profitability.

## Key Performance Metrics

### Efficiency (Productivity)
**Formula**: `Hours Billed (Flat Rate) / Hours Worked × 100`

| Rating | Efficiency | Meaning |
|--------|-----------|---------|
| Excellent | 120%+ | Beating book time consistently |
| Good | 100-119% | Meeting or exceeding book time |
| Average | 85-99% | Slightly below book time |
| Needs improvement | 70-84% | Missing book time significantly |
| Concerning | Below 70% | Investigate — training, tooling, or motivation issue |

### Proficiency (Utilization)
**Formula**: `Hours Billed / Hours Available × 100`

Measures how much of a tech's available time produces billable work:
- **Target**: 85%+ proficiency
- **Gap analysis**: Non-billable time = come-backs, waiting for parts, waiting for authorization, cleanup, training

### Effective Labor Rate
**Formula**: `Total Labor Revenue / Total Hours Billed`

Should be at or above the shop's posted door rate. If below, investigate discounts, warranty work, or under-billing.

## Performance Tracking Framework

### Daily Tracking
- Hours clocked in
- ROs completed
- Flat rate hours billed
- Come-backs (if any)
- Parts waitlist incidents

### Weekly Summary
- Total hours worked vs. hours billed
- Efficiency percentage
- Proficiency percentage
- Average RO size
- Customer satisfaction scores (if tracked)
- Come-back rate

### Monthly Review
- Trend analysis (improving, declining, stable)
- Comparison to shop average and top performer
- Training hours completed
- Certification progress
- Revenue generated per technician

## Diagnosing Productivity Issues

### Low Efficiency (Slow on Jobs)
Possible causes:
- Inadequate tooling — does the tech have the right specialty tools?
- Knowledge gap — specific vehicle types or systems causing delays?
- Diagnostic difficulty — spending too long on diagnosis?
- Workspace issues — bay layout, lift problems, parts access?

Interventions:
- Pair with high-efficiency tech for mentoring
- Invest in missing specialty tools (often pays back within weeks)
- Provide targeted training on weak areas
- Review diagnostic process — better scan tools, access to TSBs

### Low Proficiency (Not Enough Billable Work)
Possible causes:
- Insufficient car count — not enough work coming in
- Parts delays — waiting on orders
- Authorization delays — waiting on customer approval
- Uneven work distribution — some techs getting more/better jobs
- Excessive non-billable tasks (cleaning, organizing, meetings)

Interventions:
- Improve parts ordering process (stock common parts)
- Speed up customer authorization (text approvals)
- Balance work distribution through fair dispatching
- Separate non-billable tasks (hire porter/helper if volume justifies)

## Training Needs Assessment

### Competency Matrix

Track each tech's proficiency across service categories:

| Category | Skill Level |
|----------|------------|
| Oil/Lube/Filter | Basic |
| Brakes | Intermediate |
| Electrical/Diagnostic | Intermediate |
| Engine Mechanical | Advanced |
| Transmission | Intermediate |
| HVAC/A/C | Intermediate |
| Hybrid/EV | Requires training |
| ADAS Calibration | Requires training |
| Diesel | Varies |

Levels: Basic → Intermediate → Advanced → Master/Specialist

### Training Priorities (Industry Trends)
1. **ADAS calibration** — growing rapidly, high labor rate
2. **Hybrid/EV systems** — increasing market share
3. **Advanced diagnostics** — more electronics in modern vehicles
4. **GDI/turbo service** — specialized maintenance growing
5. **Telematics integration** — connected car diagnostics

### Certification Path
- ASE certifications (A1-A9, L1-L4) — industry standard
- Manufacturer-specific training — access to better diagnostic info
- EV/Hybrid safety certification — required for high-voltage work
- I-CAR for shops doing any structural or cosmetic work

For detailed report templates and benchmarking data, see `references/productivity-benchmarks.md`.
