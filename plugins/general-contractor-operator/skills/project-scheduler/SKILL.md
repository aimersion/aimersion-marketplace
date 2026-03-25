---
name: project-scheduler
description: >
  Create and manage construction project schedules with task sequencing and subcontractor coordination.
  This skill should be used when the user asks to "create a project schedule", "build a timeline",
  "sequence tasks", "coordinate subs", "Gantt chart", "critical path", "schedule a project",
  "construction timeline", or needs help planning task dependencies and subcontractor sequencing
  for residential or commercial construction projects.
version: 0.1.0
---

# Project Scheduler

Build construction project schedules with proper task sequencing, dependency management, and subcontractor coordination.

## Scheduling Workflow

1. **Define project milestones** — Permit, foundation, framing, dry-in, rough-ins, finishes, punch, CO
2. **Break down work packages** — Decompose each phase into individual tasks
3. **Establish dependencies** — Map predecessor/successor relationships
4. **Assign durations** — Based on crew size, scope, and productivity rates
5. **Identify critical path** — Longest sequence of dependent tasks
6. **Allocate resources** — Assign subcontractors and material delivery dates
7. **Add buffers** — Weather days, inspection lead times, delivery windows

## Standard Residential Construction Sequence

Follow this general sequencing (adjust for project specifics):

### Phase 1: Pre-Construction (2-8 weeks)
- Permits and plan review
- Site survey and staking
- Material ordering (long-lead items)
- Subcontractor contracts

### Phase 2: Site Work & Foundation (2-4 weeks)
- Clearing and grading
- Utility connections (water, sewer, electric, gas)
- Foundation excavation
- Footings and foundation walls
- Foundation waterproofing and backfill
- Slab or subfloor prep
- **INSPECTION: Foundation**

### Phase 3: Framing (2-6 weeks)
- Floor framing (if applicable)
- Wall framing
- Roof framing / trusses
- Sheathing (walls and roof)
- Window and exterior door installation
- **INSPECTION: Framing**

### Phase 4: Dry-In (1-2 weeks)
- Roofing (underlayment, shingles/metal)
- House wrap / weather barrier
- Flashing and sealant

### Phase 5: Rough-Ins (2-4 weeks, overlapping)
- Plumbing rough-in
- Electrical rough-in
- HVAC rough-in (ductwork, line sets)
- Low-voltage (data, security, audio)
- Insulation
- **INSPECTION: Rough plumbing, electrical, HVAC, insulation**

### Phase 6: Interior Finishes (4-8 weeks)
- Drywall (hang, tape, texture)
- Priming
- Cabinet installation
- Countertop templating and installation
- Tile work
- Hardwood/LVP flooring
- Interior trim (base, case, crown)
- Interior painting
- Plumbing fixtures (finish)
- Electrical fixtures and devices (finish)
- HVAC trim (registers, thermostats)
- Appliance installation

### Phase 7: Exterior Finishes (2-4 weeks, overlapping with interior)
- Siding / exterior cladding
- Exterior painting/staining
- Gutters and downspouts
- Concrete flatwork (driveway, walks, patio)
- Landscaping
- Final grading

### Phase 8: Closeout (1-2 weeks)
- Punch list walkthrough
- Punch list completion
- Final cleaning
- **INSPECTION: Final / Certificate of Occupancy**
- Client walkthrough and handoff

## Dependency Rules

- Foundation must pass inspection before framing begins
- Framing must pass inspection before rough-ins
- All rough-ins must pass inspection before insulation
- Insulation must pass inspection before drywall
- Drywall must be complete before trim and cabinets
- Cabinets must be in before countertop template
- Countertops must be in before plumbing finish (sinks)
- Flooring before base trim (or coordinate sequence)

## Duration Estimation Factors

Adjust standard durations for:
- **Weather** — add 10-20% buffer for exterior work seasons
- **Crew availability** — smaller crews = longer durations
- **Inspection lead times** — 2-5 business days typical, varies by jurisdiction
- **Material delivery** — long-lead items: cabinets (4-8 weeks), windows (3-6 weeks), special-order tile (2-4 weeks)
- **Project complexity** — custom details add 25-50% to standard durations

## Output Formats

- **Task list with dependencies** — structured table showing WBS, duration, predecessors, assigned sub
- **Timeline view** — text-based Gantt representation
- **Milestone summary** — key dates for client communication
- **Subcontractor schedule** — individual schedules per trade

## Additional Resources

Read `references/scheduling-templates.md` for detailed task templates by project type.
