---
name: schedule-optimizer
version: 0.1.0
description: This skill should be used when the user asks to 'schedule production', 'optimize the production schedule', 'reduce changeovers', 'identify bottlenecks', 'sequence jobs', 'plan capacity', 'create a Gantt chart', or needs help with production sequencing, throughput optimization, or shift planning.
---

# Production Schedule Optimizer

## Core Scheduling Objectives

Manufacturing scheduling balances three primary objectives:
- **Minimize makespan**: Reduce the total time from start to finish of all jobs
- **Meet due dates**: Ensure on-time delivery and minimize tardiness
- **Maximize utilization**: Keep machines and labor working productively

These objectives often conflict. Theory of Constraints provides a systematic approach to prioritization.

## Theory of Constraints (TOC)

The bottleneck (constraint) determines throughput for the entire line. Five-step focusing process:

1. **Identify the constraint**: The process step with lowest theoretical output (limiting resource)
2. **Exploit the constraint**: Maximize output from this step; eliminate idle time, reduce changeovers, increase availability
3. **Subordinate everything else**: Ensure all other steps feed and support the constraint; accept lower utilization elsewhere
4. **Elevate the constraint**: If still constraining, add capacity (equipment, shifts, outsource)
5. **Repeat**: Once constraint is elevated, find the next limiting step; prevent constraint from moving (inertia)

Constraint identification: Calculate theoretical output (machine capacity × availability × uptime) for each step. Lowest output = constraint.

## Job Sequencing Rules

Apply these rules to the constraint first, then cascade to other machines:

### Earliest Due Date (EDD)
Sort jobs in order of due date. Minimizes maximum tardiness and often-required by customers. Simple rule, widely effective.

### Shortest Processing Time (SPT)
Sort by machine time ascending. Minimizes average flow time and WIP. Risk: long-processing jobs delayed indefinitely (starvation).

### Critical Ratio (CR)
**CR = (Due Date - Today) / Remaining Work (hours)**
- CR > 1.0: Job ahead of schedule (can afford delay)
- CR ≈ 1.0: Job on track
- CR < 1.0: Job behind schedule (priority)

Highest priority = lowest CR. Combines urgency and volume. Recommended for balanced scheduling.

### First In, First Out (FIFO)
Schedule in arrival order. Fair, predictable, minimizes expediting. Poor for mixed job sizes.

## Forward vs. Backward Scheduling

**Forward Scheduling**: Schedule jobs as early as possible, starting from today
- Pro: Identifies early completion, leaves buffer for delays
- Con: May front-load work and overflow later time slots
- Use: When due dates are not tight; realistic schedule

**Backward Scheduling**: Start from due date, schedule backwards to identify required start date
- Pro: Identifies exact required start; avoids excess WIP
- Con: No buffer; any delay violates due date
- Use: Tight deadline work; identify minimum lead time

**Best practice**: Forward schedule constraint (to find earliest completion), then backward schedule non-constraints from constraint completion date.

## Setup/Changeover Reduction (SMED)

**Changeover time** is waste. Single-Minute Exchange of Die (SMED) methodology:

### Classify Setup Activities

| Internal Setup | External Setup |
|---|---|
| Require machine stoppage | Can occur while machine runs |
| Tool changes, calibrations | Material staging, cleanup, paperwork |
| Pallet swaps, fixture changes | Jig positioning, setup paperwork |

**Goal**: Convert internal to external; reduce both.

### Process

1. **Separate**: Identify all steps; classify internal vs. external
2. **Convert**: Move external activities earlier (stage next job's material while current runs)
3. **Reduce**: 
   - Internal: Standardize tool interfaces, quick-change fixtures, checklists
   - External: Pre-stage in parallel, eliminate adjustments, poka-yoke (mistake-proof)
4. **Eliminate**: Run identical products consecutively (family grouping), reduce product variety

**Typical gains**: 30-50% reduction via video kaizen; larger gains via tool/process redesign.

### Changeover Matrix

Build a table: rows = product types, columns = product types, cell = minutes to change from Product A to Product B.
- Diagonal = 0 (same to same)
- Use matrix to identify low-changeover product sequences
- Group changeovers (e.g., Product A → B → C → A) vs. random switching

## Capacity Planning

### Rough-Cut Capacity Planning (RCCP)

Validate that the production plan is feasible before detailed scheduling:

1. Identify critical resources (constraint, bottleneck, shared machines)
2. For each resource, calculate: **Required hours = Sum of (order quantity × run time per unit)**
3. Calculate availability: **Available hours = shifts × hours/shift × operating days × yield**
4. Check utilization: **Utilization % = (Required / Available) × 100**
   - Below 80%: Spare capacity, good
   - 80-95%: Tight, some buffer
   - Above 95%: Overloaded; need elevation, subcontracting, or demand reduction

### Load Profile

Graph required hours by week. Identify peak-demand weeks. Balance demand or add temporary capacity.

## Work-in-Process (WIP) Management

**Little's Law**: WIP = Throughput × Cycle Time
- Throughput = units completed per day
- Cycle Time = days from arrival to completion
- Corollary: To reduce cycle time (faster delivery), reduce WIP or increase throughput

**WIP Control**:
- Set max WIP limit per process area (card-based Kanban)
- No new job enters until a completed job leaves
- Prevents bottleneck starvation; reduces queue time

## Shift Planning Considerations

- **Staffing availability**: Match shift schedules to demand profile
- **Skill constraints**: Certain operations require trained operators (constraint?)
- **Handoffs**: Minimize context switching; batch similar operations
- **Fatigue**: Long shifts reduce quality (Six Sigma projects show defects peak in last 2 hours)
- **Overtime premium**: Calculate cost of expedited schedules vs. overtime wages
- **Equipment-limited vs. labor-limited**: If machine-limited, cross-train to other lines; if labor-limited, verify bottleneck is not a skill gap

## Output Deliverables

### Gantt Chart (Table Format)

```
Machine | Monday    | Tuesday   | Wednesday | Thursday  | Friday
--------|-----------|-----------|-----------|-----------|----------
M1      | Job 5 (8h)| Job 5 (8h)| Job 2 (6h)| Job 2 (2h)| IDLE
M2      | Job 3 (8h)| Job 1 (8h)| Job 1 (4h)| Job 4 (8h)| Job 4 (4h)
M3      | IDLE      | Job 4 (8h)| Job 4 (8h)| IDLE      | IDLE
```

Columns = days or shifts. Rows = machines/workstations. Cells = job ID and hours allocated. Identify bottleneck (M2 running continuously).

### Capacity Utilization Table

| Resource | Available Hours | Required Hours | Utilization % | Constraint? |
|----------|-----------------|-----------------|---|---|
| Machine A | 160 | 152 | 95% | Yes |
| Machine B | 160 | 120 | 75% | No |
| Labor Group 1 | 200 | 180 | 90% | No |

Highlight constraints (>90%) and idle resources (<70%).

### Bottleneck & Risk Report

- **Constraint**: Identify the binding resource and impact on throughput
- **Risk orders**: List jobs at risk of missing due date (critical ratio < 0.9), recommended action (expedite, extend, reduce scope)
- **Recommended buffer**: Insert buffer time before constraint or critical machines
- **Improvement opportunities**: Reduce changeovers by X hours, add shift on M1, subcontract 10 units of Job 5

## Key Metrics

- **On-time delivery**: % of orders shipped on or before due date (target ≥ 95%)
- **Average lateness**: Days late, averaged across all late orders
- **Makespan**: Total time from first to last job completion
- **WIP level**: Total units in process (should decrease as schedule improves)
- **Machine utilization**: Ratio of run time to available time (target 80-90% for constraints, 60-75% for non-constraints)
