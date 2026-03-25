---
name: continuous-improver
version: 0.1.0
description: This skill should be used when the user asks about 'kaizen', 'continuous improvement', 'lean manufacturing', 'value stream mapping', 'VSM', '5S', 'waste elimination', 'TIMWOODS', 'A3', 'PDCA', 'gemba walk', 'standard work', 'visual management', 'improvement event', or needs help identifying and eliminating waste in manufacturing processes.
---

# Continuous Improver

## Eight Wastes (TIMWOODS or DOWNTIME)

Lean manufacturing identifies eight categories of non-value-added activity. Eliminating waste increases efficiency, reduces cost, improves flow.

| Waste (TIMWOODS) | Definition | Example | Improvement |
|---|---|---|---|
| **T - Transportation** | Moving parts/materials unnecessarily | Manual delivery vs. automatic chute | Optimize layout; eliminate distance |
| **I - Inventory** | Excess WIP, stock, materials | Parts wait in queue before machine | Pull system (Kanban), reduced batch size |
| **M - Motion** | Unnecessary movement by worker | Bending, reaching, walking to grab tools | Ergonomic layout; place tools at point of use |
| **W - Waiting** | Idle time (worker or machine) | Job waits for part; machine idle | Balance flow; SMED to reduce setup |
| **O - Overproduction** | Making more than needed | Produce 1,000 units; only need 800 | Demand-pull production; smaller batches |
| **O - Overprocessing** | Unnecessary steps, quality beyond spec | Fine polish on hidden surface | Simplify process; match quality to requirement |
| **D - Defects** | Scrap, rework, inspection | Produce bad parts; rework them | Root cause elimination; mistake-proof |
| **S - Skills** | Underutilized talent | Assign creative, problem-solver to repetitive task | Cross-train; empower improvement ideas |

**Gemba Walk**: Go to shop floor and observe. Identify which wastes are present. Most waste is visible once you look.

## Value Stream Mapping (VSM)

VSM is a visual method to map current process flow (current state), identify waste, and design ideal process (future state).

### Current State VSM

**Elements**:
- **Process boxes**: Operations (e.g., "Machine A," "Assembly," "Inspect")
- **Data boxes**: Time, quality, capacity info below each process
- **Material flow arrows**: Show product movement (solid line = push, dotted = pull/Kanban)
- **Information flow**: Scheduling, orders (shown at top, separate from material)
- **Inventory symbols**: Triangle = stock, showing quantity and days of inventory between steps
- **Swim lanes**: Separate flows (material, information, people)

**Metrics calculated**:
- **Lead time (LT)**: Total time from raw material to customer delivery
- **Value-added time (VAT)**: Time when product is actively being worked on
- **Process cycle efficiency (PCE)**: VAT / LT × 100
  - PCE 40% = 60% of time is waste (waiting, movement, inspection)
  - Target: PCE > 50% (world-class: >60%)

### Future State VSM

Apply lean principles:
- **Continuous flow**: Reduce batch sizes; move parts one-at-a-time where possible
- **Pull system**: Demand-driven (Kanban) vs. forecast-driven (Push)
- **Takt time**: Time between start of one unit and start of next = Demand / Available time
- **Standard work**: Consistent process; training; error reduction
- **Eliminate waste**: Remove wait time, inventory, motion, overprocessing
- **Visual management**: Simple, visible system status (stop lights, Kanban cards)

**VSM result**: Reduced LT, increased PCE, lower inventory, faster delivery, improved quality.

## 5S Method

5S is housekeeping + discipline framework. Creates foundation for flow, safety, quality.

### Five Steps

**1. SORT (Seiri)**
- Remove all unneeded items from workspace
- Ask: "Is this used every day? Every week? Ever?"
- Discard or relocate rarely-used items
- Red Tag process: Mark items for removal; give period to reclaim
- Result: Cleaner, less cluttered workspace

**2. SET IN ORDER (Seiton)**
- Arrange remaining items logically: "A place for everything, everything in its place"
- Frequent items close; infrequent items farther
- Label clearly (words + pictures for non-readers)
- Shadow boards: Outline of tool on board; missing tool obvious
- Result: No searching; time savings; fewer errors

**3. SHINE (Seiso)**
- Deep clean entire area
- Inspect while cleaning (leaks, wear, damage visible)
- Establish cleaning frequency and responsibility
- Cleaning = inspection (preventive maintenance)
- Result: Clean environment; early problem detection

**4. STANDARDIZE (Seiketsu)**
- Document standards (how to maintain 5S)
- Checklist for daily/weekly tasks
- Visual management: Photos showing "correct" state
- Assign responsibility (person, shift)
- Training: How-to for all staff
- Result: Sustained discipline; new employees trained quickly

**5. SUSTAIN (Shitsuke)**
- Continuous reinforcement: Daily team huddles, audits, recognition
- 5S audit scoring (1-5): Track compliance
- Leader walk-arounds: Check standards daily
- Link 5S to performance metrics (on-time delivery, quality, safety)
- Problem-solving: If 5S slips, investigate why (usually system issue, not motivation)
- Result: Embedded culture of discipline and continuous improvement

**Timeline**: 3-5 days per area for initial 5S event; then maintain weekly/monthly.

## Standard Work

Standardized, repeatable process is foundation for improvement. Without standard, you can't identify abnormal.

### Takt Time

**Takt = Available Production Time / Customer Demand**

Example:
- Available time: 480 min/shift
- Demand: 40 units/shift
- Takt time = 480 / 40 = 12 minutes per unit
- Every 12 minutes, one unit must be completed to meet demand

Use takt to balance work between people/cells. Avoid overburden (muri).

### Standard Work Chart

Documents the task, sequence, cycle time, and key points.

| Step # | Task | Duration (sec) | Critical Point | Quality Check |
|---|---|---|---|---|
| 1 | Get part from bin | 5 | Use tongs; avoid cuts | Visual: Part defects? |
| 2 | Insert into fixture | 8 | Align pin with hole | Visual: Seated properly? |
| 3 | Tighten bolt (3 Nm) | 15 | Torque wrench; click = stop | Feel: Bolt tension; no stripping |
| 4 | Inspect bore | 10 | Bore depth 10 ± 0.5 mm | Measure: Depth gauge |
| 5 | Remove part; stage | 7 | Place on cart facing up | Visual: Cart stable? |
| **Total** | | **45 sec** | | |

Takt = 12 minutes (720 sec). With 45-sec task, worker has 675 sec for other tasks or rest (not overburden).

### Standard Work Combination Sheet

Shows cycle time, wait time, machine-only time, and worker tasks.

```
                                   One Cycle = 12 min (Takt time)
                        
0  --|  Worker task (load)
    |  |
5   |  -- Machine runs
    |                    |
15  |                    |-- Worker free (6 sec)
    |                    |
17  |-- Worker unload
    |  |
22  |  -- Machine runs
    |                    |
...
```

Result: Workers synchronized to takt; no overburden; no idleness.

## Kaizen Event Planning

5-day intensive improvement workshop; typically 30-day goal improvement.

### Event Scope

Select opportunity from:
- VSM "future state" gap (e.g., reduce cycle time 30%)
- Problem area (chronic defect, late delivery, high cost)
- Constraint/bottleneck (elevate per TOC)
- Worker suggestion (empower bottom-up improvement)

### Team Composition

- 5-7 people, cross-functional
- Mix of expertise (operator, technician, engineer, supervisor)
- Remove from daily work for 5 days
- Sponsor (manager) available for decisions/resources

### Five-Day Event

**Day 1 (Monday): Training + Current State**
- Training: Lean principles, kaizen process, team building
- Current state mapping: Walk process, measure times, document flow
- Identify top 3 waste categories; data collection plan

**Day 2-3 (Tuesday-Wednesday): Improve**
- Brainstorm: Generate ideas (no judgment; quantity over quality)
- Root cause: Why does waste exist? 5 Why, fishbone
- Design improvements: Concept, prototype, test
- Implement quick wins: Changes that can happen immediately

**Day 4 (Thursday): Test**
- Run new process at small scale (1 hour, 1 shift, 1 area)
- Collect data: Cycle time, quality, output before/after
- Adjust based on results
- Plan full-scale implementation

**Day 5 (Friday): Present**
- Present findings to sponsor + leadership
- Before/after metrics: Time, cost, quality improvement
- Implementation plan: What's done? What remains?
- Team recognition; celebrate wins

### Follow-Up (30/60/90-Day)

- Day 30: Verify improvements holding; troubleshoot issues
- Day 60: Standardize (update procedures, train); expand to similar areas
- Day 90: Verify sustainability; calculate ROI

## A3 Problem Solving

Single-page (A3 paper size) report combining problem definition, analysis, action, and results.

**Structure** (7 sections):

1. **Theme**: One-line title (e.g., "Reduce paint line changeover time by 30%")
2. **Background**: Why does this matter? Business context, customer impact
3. **Current Condition**: Data on current state (metrics, photos, timeline)
4. **Goal**: Target state + timeline (e.g., "Reduce changeover from 90 to 60 min by Q2")
5. **Root Cause Analysis**: Use 5 Why, fishbone, data; include confirmation
6. **Countermeasures**: Proposed solutions; why they address root cause; trial results
7. **Effect Confirmation**: Did it work? Actual results vs. goal; next steps

**A3 format**: Single sheet, one-side; visual (photos, charts, data); written concisely.

## PDCA (Plan-Do-Check-Act)

Scientific method applied to continuous improvement. Iterative learning cycle.

**Plan**: Hypothesize; design experiment/change
- What will we try?
- Why do we think it will work?
- How will we measure success?

**Do**: Implement at small scale
- Run experiment/pilot
- Collect data
- Observe results

**Check**: Analyze results
- Did it work? By how much?
- What surprised us?
- What will we do next?

**Act**: Standardize or iterate
- If successful, standardize (update procedures, train)
- If unsuccessful, return to Plan (new hypothesis, try again)
- Loop continuously

**Value**: Avoids big, failed changes. Small tests = fast, cheap learning.

## Gemba Walk

"Gemba" = the place where actual work happens. Gemba walk = go observe, ask questions, show respect.

### Three Principles

1. **Go see**: Don't rely on reports; observe the process yourself
2. **Ask why**: Understand the actual situation, not assumptions
3. **Show respect**: Value worker knowledge; thank them for time; don't blame

### Structure (30-min walk)

1. **Prepare**: What process? What looking for? Who to interview?
2. **Observe** (10 min): Watch work without interrupting; take notes/photos
3. **Ask questions** (15 min): "Walk me through this step. Why do you do it this way? What problems occur? What's your idea to improve?"
4. **Thank**: Appreciate time spent
5. **Reflect** (5 min): What did I learn? What's the real issue vs. assumed?

**Output**: Understand reality; identify improvement ideas; engage workforce

### Gemba Walk Observation Checklist

- [ ] Safety: Any unsafe behavior or condition?
- [ ] Quality: Any defects visible? Inspection happening?
- [ ] Efficiency: Any waiting, motion waste, unnecessary movement?
- [ ] Standard work: Are procedures being followed? Visible standards?
- [ ] Cleanliness: Is area clean and organized?
- [ ] Communication: Are workers aware of production targets? Delays?
- [ ] Morale: Do workers seem engaged, frustrated, or indifferent?

## ROI Calculation for Improvement Projects

Justify investment; track return; build case for continuous improvement culture.

**ROI = (Annual Benefit - Annual Cost) / Investment × 100%**

### Example

**Project**: Reduce paint line changeover time 30% (90 min → 60 min per changeover)

**Investment**: $8,000 (SMED consulting, quick-change fixtures, training)

**Ongoing cost** (annual): $500 (maintenance, supplies)

**Benefits**:
- 10 changeovers per week × 52 weeks = 520 changeovers/year
- Time saved per changeover: 30 min
- Annual time saved: 520 × 30 min = 15,600 min = 260 hours
- Labor cost per hour: $30
- Annual labor savings: 260 × $30 = $7,800
- Additional throughput: 260 hours × 4 units/hour = 1,040 more units
- Contribution per unit: $5
- Annual throughput savings: 1,040 × $5 = $5,200
- **Total annual benefit: $7,800 + $5,200 = $13,000**

**ROI Year 1**: ($13,000 - $500) / $8,000 × 100% = **162.5%**

**Payback period**: $8,000 / $13,000 ≈ 7 months

**Decision**: Invest. Strong ROI. Payback < 1 year. Benefits compound annually.

