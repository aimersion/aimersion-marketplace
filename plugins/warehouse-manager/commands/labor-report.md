---
description: Generate a labor productivity report
allowed-tools: Read, Write
---

## Instructions

Generate a comprehensive labor productivity report for a specified time period (shift, day, or week). Gather labor and productivity data, calculate metrics, and provide analysis and recommendations.

### Step 1: Gather Labor Data

For each associate (or work group), collect:

**Associate Information**:
- Name
- Employee ID
- Shift
- Primary work area (receiving, put-away, picking, packing, shipping, support)

**Hours Worked**:
- Shift date(s)
- Scheduled hours
- Actual hours worked (include breaks)
- Overtime hours (if any)
- Unplanned absences (AWOL) or early departure

**Productivity Data**:
- Activity performed (picking, packing, receiving, etc.)
- Volume processed (units, lines, cartons, pallets — matching activity)
- Quality metrics (errors, rework, damage)
- Equipment/system constraints (downtime, exceptions)

**Example Data**:
```
John Smith
- Shift: Day (8 AM–4:30 PM)
- Area: Picking
- Hours worked: 8.5 (includes 0.5 hr in meeting)
- Activity: Order picking
- Lines picked: 1,120 lines
- Errors: 2 wrong-item picks (corrected before ship)
```

### Step 2: Calculate Productivity % by Associate

Use the productivity formula:

$$\text{Productivity \%} = \frac{\text{Standard Hours Earned}}{\text{Actual Hours Worked}} \times 100$$

**Steps**:
1. Identify labor standard for the activity (lines/hour, units/hour, cartons/hour).
   - E.g., picking standard = 120 lines/hour = 0.0083 hours/line
2. Calculate standard hours earned:
   - Volume processed × labor standard
   - E.g., 1,120 lines × 0.0083 hr/line = 9.3 standard hours
3. Divide by actual hours worked:
   - Productivity = 9.3 / 8.5 = 109%

**Interpretation**:
- 100%+ = Exceeding standard (high performer)
- 85–100% = Meeting standard (acceptable)
- 75–85% = Slightly below (coaching opportunity)
- <75% = Significantly below (performance issue)

### Step 3: Rank Associates by Productivity

Create a ranked table:

| Rank | Associate | Shift | Area | Hours | Volume | Standard | Actual | Productivity % | Status |
|------|-----------|-------|------|-------|--------|----------|--------|--------|--------|
| 1 | Maria Garcia | Day | Picking | 8.0 | 1,200 | 10.0 | 8.0 | 125% | 🟢 Excellent |
| 2 | John Smith | Day | Picking | 8.5 | 1,120 | 9.3 | 8.5 | 109% | 🟢 High |
| 3 | James Lee | Day | Picking | 8.0 | 900 | 7.5 | 8.0 | 94% | 🟢 Acceptable |
| ... | ... | | | | | | | | |

**Top performers** (>105%): recognize and consider for team lead roles.
**Bottom quartile** (<80%): schedule coaching; investigate barriers.

### Step 4: Calculate Department-Level Productivity

For all associates in a department combined:

$$\text{Department Productivity \%} = \frac{\sum \text{Standard Hours (all associates)}}{\sum \text{Actual Hours (all associates)}} \times 100$$

**Example**: Picking department, day shift
- Total standard hours earned: 78.5 hours
- Total actual hours worked: 85.0 hours (including meetings, breaks)
- Department productivity: 78.5 / 85.0 = **92.4%** (meeting target of 85–95%)

**By Area Summary**:
| Area | Associates | Std Hours | Actual Hours | Productivity % | vs. Target | Status |
|------|-----------|-----------|---|---|---|---|
| **Receiving** | 3 | 21.5 | 22.0 | 97.7% | Target 85–95% | 🟢 Good |
| **Put-Away** | 2 | 14.2 | 15.0 | 94.7% | Target 85–95% | 🟢 Good |
| **Picking** | 6 | 56.8 | 61.0 | 93.1% | Target 90–100% | 🟢 Good |
| **Packing** | 4 | 32.0 | 35.0 | 91.4% | Target 85–100% | 🟢 Good |
| **Shipping** | 2 | 14.5 | 16.0 | 90.6% | Target 80–95% | 🟢 Good |
| **TOTAL** | 17 | 139.0 | 149.0 | **93.3%** | Target 85–95% | 🟢 Good |

### Step 5: Compare Period-Over-Period & vs. Target

Create trend analysis:

| Period | Picking Productivity | Packing Productivity | Overall | Trend |
|--------|-------|--------|---------|--------|
| **Week 1 (3/17–3/23)** | 90.2% | 88.5% | 89.3% | — |
| **Week 2 (3/24–3/30)** | 93.1% | 91.4% | 92.3% | ↑ Up |
| **Target** | 90–100% | 85–100% | 85–95% | — |
| **Variance** | +3.1% | +6.4% | +7.0% | ↑ Positive |

**Interpretation**: Department trending positive (up 3% week-over-week); likely due to labor-planning improvements and team morale.

### Step 6: Identify Top Performers

**Recognition Criteria**: >105% productivity (exceeding standard).

| Associate | Area | Productivity | Strength | Recognition |
|-----------|------|---------|----------|-------------|
| Maria Garcia | Picking | 125% | Speed + accuracy | Monthly bonus eligible |
| Sarah Johnson | Packing | 118% | Cartonization efficiency | Peer nomination |
| Mike Chen | Receiving | 112% | Quality focus; no errors | Shift lead consideration |

**Action**: Recognize publicly (team meeting, bulletin board); consider peer mentorship/training roles.

### Step 7: Flag Performance Issues

**Coaching Needed**: 70–85% productivity (indicates learnable gaps).

| Associate | Area | Productivity | Issue | Coaching Plan | Target |
|-----------|------|---------|-------|--------|--------|
| James Lee | Picking | 71% | Slotting confusion; time per location high | Pair with Maria (mentor); floor retraining; re-audit after 1 week | 85%+ by 4/7 |
| Angela Brown | Packing | 68% | New hire (week 2); carton size selection slow | Structured training; reduce order complexity; ramp plan | 80%+ by 4/15 |

**Action Items**:
1. Schedule 1:1 coaching session; set 1-week target (85%+).
2. Provide targeted retraining (process, equipment, system).
3. Assign peer mentor for shift-long pairing.
4. Re-measure in 1 week; escalate if no improvement to HR (potential performance issue).

### Step 8: Flag Overtime & Staffing Insights

**Overtime Analysis**:

| Associate | Scheduled Hours | Actual Hours | Overtime | Reason | Sustainable? |
|-----------|---|---|---|---|---|
| John Smith | 40 | 43 | 3 | Heavy volume wave | Temporary; one-time |
| Maria Garcia | 40 | 44 | 4 | Covered absence | Training new hire; not sustainable |
| James Lee | 40 | 40 | 0 | — | — |

**Summary**:
- Total OT this period: 7 hours (0.875 FTE)
- OT cost: 7 hrs × $30/hr (OT rate) = $210
- Root cause: Volume spike + 1 absence
- **Recommendation**: Expect normal volume next week; OT should normalize. Confirm staffing plan.

### Step 9: Absenteeism Summary

| Type | Count | Hours | Impact | Notes |
|------|-------|-------|--------|-------|
| **Planned leave** (vacation, comp) | 1 | 8 | Covered; staffed | John S. vacation 3/26 |
| **Medical/illness** | 1 | 8 | Covered; OT required | Angela B. flu; documented |
| **AWOL (no-call/no-show)** | 0 | 0 | None | Good adherence |
| **Unexcused late** | 0 | 0 | None | — |
| **Total absence rate** | 2 of 85 days | 16 of 680 hrs | 2.4% | Acceptable; <3% target |

---

## Output Format: Labor Productivity Report

### Header

**FACILITY**: [Warehouse name]
**PERIOD**: [Shift, day, or week covered]
**PREPARED BY**: [Your name/role]
**DATE PREPARED**: [Preparation date]

---

### EXECUTIVE SUMMARY

**Department Productivity**: __ % (vs. target __ %, variance __)
**Headcount**: __ FTE
**Period Trend**: [Improving / Stable / Declining]
**Key Highlight**: [One main insight, positive or concern]

---

### INDIVIDUAL PRODUCTIVITY TABLE

[Table ranked by productivity %; include status color indicator]

---

### DEPARTMENT SUMMARY BY AREA

[Area-by-area breakdown; table showing std/actual hours, productivity %]

---

### TOP PERFORMERS

**Recognition List** (>105% productivity):
1. [Name, area, %, strength] — Recommended action
2. [Name, area, %, strength] — Recommended action

---

### PERFORMANCE COACHING NEEDED

**Associates Below 80%**:

| Name | Area | Current | 1-Week Target | Coaching Plan | Owner |
|------|------|---------|-------|---|---|
| | | | | | |

**New Hire Ramp** (if applicable):
- [New hire name], started [date], current productivity [%], on track for [target date]?

---

### TREND ANALYSIS

**Week/Day Comparison**:
| Period | Productivity | Trend | Notes |
|--------|---------|--------|---|
| | | | |

**Month-to-Date**:
- Current month cumulative: __ %
- Prior month: __ %
- Variance: __ %
- Trajectory: [On target / Above / Below]

---

### STAFFING INSIGHTS

**Overtime Analysis**:
- Total OT this period: __ hours
- OT cost: $__
- Root cause: [volume, absence, other]
- **Recommendation**: [Increase headcount, adjust schedule, monitor, etc.]

**Absences**:
- Planned leave: __ %
- Illness/medical: __ %
- AWOL: 0 (good)
- **Absence rate**: __ % (target <3%)

---

### RECOMMENDATIONS & NEXT STEPS

1. **Immediate** (this week):
   - [Action], owner, deadline

2. **Short-term** (next 2 weeks):
   - [Action], owner, deadline

3. **Follow-up**:
   - Coaching sessions with [names] — target completion by [date]
   - Re-measure productivity — [names] next week
   - Monitor OT — adjust staffing if volume remains high

---

**Report Completed**: [Date, time]
**Distributed to**: [Managers, HR, leadership]
