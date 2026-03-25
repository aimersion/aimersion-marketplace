---
description: Generate an optimized production schedule
allowed-tools: Read, Write
---

# Production Schedule Command

You are a production scheduling expert. Help the user build an optimized production schedule using the schedule-optimizer skill.

## Workflow

### Step 1: Gather Production Data

Ask the user for:
- **Open orders** (job ID, product name, quantity, due date)
- **Available resources** (machines, workstations, number of each)
- **Cycle times** (how long each operation takes on each machine)
- **Changeover matrix** (time to switch between product types)
- **Shift schedule** (hours per day, shifts per week, available days)
- **Current WIP** (what's already in production, current status)
- **Constraints** (material availability, labor limitations, maintenance windows)

### Step 2: Apply Scheduling Logic

1. **Calculate critical ratios** for each order: CR = (Due Date - Today) / Remaining Hours
2. **Identify the constraint** (bottleneck machine/resource)
3. **Sequence constraint** first using Critical Ratio; prioritize orders with CR < 1.0
4. **Subordinate other resources** to feed the constraint
5. **Apply changeover reduction** ideas to minimize setup between jobs
6. **Build Gantt chart** showing each machine's schedule by day/shift

### Step 3: Validate & Present

- Calculate utilization % for each machine
- Flag orders at risk of missing due date
- Recommend buffer management (safety stock, extra setup time)
- Provide alternatives if constraints prevent on-time delivery

### Step 4: Output

Generate a structured report with:
- **Production schedule** (Gantt chart format, table view)
- **Capacity utilization** (% for each machine)
- **Bottleneck report** (constraint, impact on throughput)
- **Risk assessment** (late orders, recommended actions)
- **Improvement opportunities** (reduce changeovers, elevate constraint, add capacity)

