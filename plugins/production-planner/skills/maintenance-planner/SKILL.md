---
name: maintenance-planner
version: 0.1.0
description: This skill should be used when the user asks to 'plan maintenance', 'create a PM schedule', 'improve OEE', 'track equipment downtime', 'calculate MTBF', 'MTTR', 'TPM', 'total productive maintenance', 'preventive maintenance', 'predictive maintenance', or needs help managing equipment reliability and availability.
---

# Maintenance Planner

## Maintenance Types and Strategy

### Four Maintenance Approaches

**Reactive (Run to Failure)**
- Operate equipment until failure, then repair
- Pros: No PM cost; simple
- Cons: Unplanned downtime; emergency repairs expensive; safety risk; no predictability
- Use: Non-critical equipment with low downtime cost

**Preventive (Time-Based)**
- Perform maintenance at fixed intervals (hours, days, cycles)
- Pros: Planned downtime; reduces catastrophic failure; improves availability
- Cons: May maintain equipment that's still healthy; uses resources on non-failed units
- Use: Standard practice for most production equipment

**Predictive (Condition-Based)**
- Monitor equipment condition; intervene when degradation detected
- Techniques: Vibration analysis, thermal imaging, oil analysis, ultrasonic, electrical signature
- Pros: Optimized intervals; avoid unnecessary maintenance; maximize equipment life
- Cons: Requires monitoring equipment/expertise; higher initial investment
- Use: Critical equipment; high-value machines; expensive failure consequences

**Proactive (Root Cause Elimination)**
- Redesign process/equipment to eliminate root causes of failure
- Example: High-temperature bearing failures → upgrade bearing material
- Pros: Eliminates recurring problems; sustainable improvement
- Cons: Requires engineering; time-intensive
- Use: Chronic problem areas; lean/kaizen initiatives

**Best Practice**: Combine preventive (baseline), predictive (critical equipment), and proactive (problem elimination).

## Overall Equipment Effectiveness (OEE)

**OEE = Availability × Performance × Quality**

This metric quantifies equipment productivity and identifies improvement priorities.

### Components

**Availability** = (Operating Time / Planned Production Time) × 100
- Planned production time = total time minus scheduled stops (breaks, maintenance windows, shift changes)
- Operating time = actual run time
- Losses: Breakdowns, setup/changeover
- Target: ≥ 90%

**Performance** = (Ideal Cycle Time × Total Pieces Produced) / Operating Time × 100
- Ideal cycle time = theoretical minimum time per piece (machine specification)
- Total pieces = all output (good + defective)
- Losses: Reduced speed, minor stoppages, idling
- Target: ≥ 95%

**Quality** = (Good Pieces / Total Pieces Produced) × 100
- Good pieces = pass all inspections on first attempt
- Total pieces = all output
- Losses: Scrap, rework
- Target: ≥ 99%

**OEE = 0.90 × 0.95 × 0.99 = 0.85 = 85%** (World-class)

### Six Big Losses (Mapped to OEE)

| Loss | Type | OEE Metric | Impact | Example |
|------|------|---|---|---|
| Breakdowns | Failure | Availability | Unplanned stop | Bearing seizes |
| Setup/Adjustment | Changeover | Availability | Planned stop | Changeover 1 hour |
| Minor Stoppages | Jam, restart | Performance | Short interruptions | Part misalignment |
| Reduced Speed | Slow running | Performance | Below design speed | Worn belt reduces RPM |
| Start-up Defects | Ramp-up quality | Quality | High scrap initially | First 20 parts bad |
| Production Defects | Process issues | Quality | In-process defects | Dimensional drift |

**Action**: Prioritize losses by impact on OEE gap (Gap = 85% - Current OEE).

## Total Productive Maintenance (TPM) 8 Pillars

TPM is a system to maximize equipment uptime and zero defects through team engagement.

### 8 Pillars

1. **Autonomous Maintenance** (Operator-led, daily care)
   - Operators perform routine cleaning, inspection, lubrication
   - Detect abnormalities early
   - Empower operators as equipment stewards
   - Outcome: Reduce defects/breakdown frequency

2. **Planned Maintenance** (Preventive/Predictive)
   - Schedule PM by equipment criticality
   - Combine time-based + condition-based
   - Track effectiveness (MTBF, MTTR trends)
   - Outcome: Increase Availability pillar of OEE

3. **Quality Maintenance** (Zero defects)
   - Link equipment condition to product quality
   - Monitor thermal, vibration, electrical signatures
   - Adjust before quality impact
   - Outcome: Increase Quality pillar of OEE

4. **Focused Improvement** (Kaizen, Lean)
   - Prioritize high-loss equipment
   - Cross-functional teams; 5-day events
   - Eliminate root causes of failures
   - Outcome: Systemic improvement of OEE

5. **Early Equipment Management**
   - Design and procurement for reliability
   - Involve maintenance in equipment selection
   - Simplified, robust designs
   - Outcome: Lower life-cycle cost

6. **Training & Education**
   - Equip operators and maintenance staff with skills
   - Safety, technical, problem-solving training
   - Certification for high-risk tasks
   - Outcome: Safe, skilled workforce; reduced errors

7. **Safety, Health & Environment**
   - Zero accidents; zero environmental violations
   - Integrate safety into maintenance planning
   - PPE, lockout/tagout, incident investigation
   - Outcome: Safe operations; compliance

8. **TPM in Administration**
   - Extend TPM principles to support functions (planning, HR, IT)
   - Continuous improvement mindset across plant
   - Outcome: Holistic operational excellence

## Reliability Metrics

### Mean Time Between Failures (MTBF)
**MTBF = Total Operating Time / Number of Failures**

Example:
- Equipment ran 2,000 hours, failed 4 times
- MTBF = 2,000 / 4 = 500 hours
- On average, expect a failure every 500 hours

**Trend**: MTBF increasing = improving reliability. MTBF constant/decreasing = chronic problem or wear-out phase.

### Mean Time To Repair (MTTR)
**MTTR = Total Repair Time / Number of Repairs**

Example:
- 4 failures, total 12 hours repair
- MTTR = 12 / 4 = 3 hours
- On average, repairs take 3 hours

**Trend**: MTTR decreasing = improving maintenance efficiency (better diagnostics, spare parts availability, technician skill).

### Availability
**Availability = MTBF / (MTBF + MTTR) × 100**

Example:
- MTBF = 500 hours, MTTR = 3 hours
- Availability = 500 / 503 × 100 = 99.4%

Improvement lever: Increase MTBF (reduce failures) or decrease MTTR (faster repairs).

## Equipment Criticality Ranking

Prioritize maintenance investments on critical equipment. Rank by composite score:

| Equipment | Safety Impact (0-10) | Production Impact (0-10) | Repair Cost (0-10) | Failure Frequency (0-10) | **Total Score** | Priority |
|---|---|---|---|---|---|---|
| CNC Mill A | 3 | 10 | 8 | 7 | **28** | Critical |
| Assembly Robot | 8 | 9 | 9 | 4 | **30** | Critical |
| Paint Line | 2 | 8 | 6 | 8 | **24** | High |
| Forklift | 9 | 5 | 5 | 3 | **22** | High |
| Drill Press B | 2 | 4 | 3 | 2 | **11** | Low |

**Action**:
- Score ≥ 28: Predictive maintenance, critical spare parts, backup plan
- Score 20-27: Robust preventive maintenance, quick-response parts
- Score < 20: Run-to-failure or basic preventive

## Preventive Maintenance Task Types

For each critical equipment, define standard PM tasks:

| Task Type | Frequency | Example | Time |
|---|---|---|---|
| **Cleaning** | Daily | Wipe down exterior, remove coolant splash | 5 min |
| **Inspection** | Daily | Visual check for leaks, odd sounds, misalignment | 10 min |
| **Lubrication** | Daily/Weekly | Oil bearing, grease articulation points per diagram | 10 min |
| **Adjustment** | Weekly | Check/adjust conveyor tension, belt alignment | 15 min |
| **Replacement** | Monthly/Quarterly | Change hydraulic filter, spark plugs, wear parts | 1 hour |
| **Calibration** | Quarterly/Annual | Verify accuracy, recalibrate sensors | 2 hours |
| **Major Overhaul** | Annual/Biennial | Deep inspection, internal cleaning, seal replacement | 8-16 hours |

## Spare Parts Management

Critical equipment needs a spare parts strategy to minimize repair time.

### ABC Classification

| Class | Criteria | Action | Examples |
|---|---|---|---|
| **A** | Critical for uptime; expensive; long lead time (6+ months) | Stock 1-2 units on-site or quick-access arrangement | CNC spindle, hydraulic pump, PLC module |
| **B** | High impact; moderate cost; 2-6 month lead time | Stock 1 unit; order replacement after use | Motor, gearbox, valve assembly |
| **C** | Low criticality or short lead time (<2 months); cheap | Order as needed; minimal stocking | Bolts, gaskets, filters, belts |

### Min/Max Inventory

For each spare part:
- **Reorder Point (Min)**: Level at which to order
- **Maximum Stock (Max)**: Highest inventory level; prevents over-stocking
- **Reorder Quantity**: QMax - current stock when Min reached

Example:
- Part: Pump seal (Class B, $200, 4-week lead time)
- Usage: 1 per month
- Min = 2 months safety stock = 2 units
- Max = 4 units (cover lead time + buffer)
- Reorder when stock ≤ 2; order 2 units (4 - 2)

### Critical Spares Checklist

- [ ] Identify equipment with consequence of failure ≥ $10K/hour downtime
- [ ] List known failure modes (consult maintenance history)
- [ ] Obtain part number, supplier, lead time, cost
- [ ] Stock per ABC classification; arrange quick-access with supplier
- [ ] Create "break-glass" procedure: Emergency authorization to expedite
- [ ] Review semi-annually; adjust stocking based on actual failure frequency

## Work Order Lifecycle

Structured process to manage maintenance requests:

1. **Request**: Operator/supervisor identifies issue; creates work order
   - Description: What is the symptom? When observed?
   - Equipment: Specific machine/asset
   - Priority: Urgent (halt production) / High (soon) / Normal

2. **Triage**: Maintenance lead assesses
   - Root cause hypothesis
   - Assign technician & parts needed
   - Estimate duration

3. **Execution**: Technician performs work
   - Log actual hours, parts used
   - Document findings (root cause confirmed?)
   - Note any follow-up needed

4. **Verification**: Confirm fix
   - Equipment tested, normal operation
   - Quality/output stable
   - Safety checks passed

5. **Close**: Document for records
   - Add to equipment history
   - Update MTBF/MTTR
   - Trigger lessons learned if significant issue

6. **Continuous Improvement**: Review periodically
   - Trends: Is this recurring? → Investigate root cause
   - Metrics: MTBF, MTTR, cost trends
   - Plan proactive improvements

## OEE Improvement Roadmap

1. **Baseline**: Calculate current OEE; measure each pillar (Availability, Performance, Quality)
2. **Prioritize**: Which pillar has largest gap? (e.g., Availability = 75%, gap = 15%)
3. **Identify losses**: Which of the Six Big Losses are largest in that pillar?
4. **Root cause**: 5-Why, Pareto, fishbone
5. **Pilot**: Test countermeasure on non-constraint equipment
6. **Scale**: Roll out to all critical equipment
7. **Sustain**: Monitor monthly; maintain disciplines

**Typical 12-month OEE improvement path**:
- Month 0: OEE = 65% (Avail 70%, Perf 92%, Quality 98%)
- Month 3: Reduce breakdowns via predictive maintenance → Avail 80% → OEE 74%
- Month 6: Add autonomous maintenance; reduce changeovers → Perf 96%, Avail 82% → OEE 78%
- Month 9: SPC monitoring; process improvement → Quality 99.5% → OEE 82%
- Month 12: Systemic improvements; proactive maintenance → All pillars improved → OEE 86%+

