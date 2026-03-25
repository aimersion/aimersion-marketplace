---
name: crew-scheduler
description: >
  Schedule painting crews with job sequencing, weather dependencies, and multi-crew coordination.
  This skill should be used when the user asks to "schedule crews", "plan the week",
  "assign painters", "job sequencing", "crew coordination", "production schedule",
  "who works where", or needs help managing painting crew assignments and job scheduling.
version: 0.1.0
---

# Crew Scheduler

Optimize painting crew scheduling with job sequencing, weather awareness, and multi-crew coordination.

## Scheduling Workflow

1. **Review job queue** — active projects, signed contracts, upcoming starts
2. **Check weather** — rain, temperature, humidity for exterior work
3. **Assess crew availability** — team members, skill levels, equipment
4. **Sequence tasks** — prep before paint, primer before topcoat, logical room/area order
5. **Assign crews** — match skill level to job requirements
6. **Coordinate multi-crew jobs** — avoid conflicts (same area, same scaffold, etc.)
7. **Build buffer** — for dry times, punch list, weather delays

## Job Sequencing (Typical Interior Repaint)

### Day 1: Prep
- Furniture moving and floor protection
- Filling nail holes and patching
- Caulking gaps and cracks
- Sanding smooth surfaces for adhesion
- Taping and masking (trim, fixtures, edges)
- Priming stains, patches, or bare surfaces

### Day 2-3: Paint
- Ceiling first (cut in + roll)
- Walls next (cut in + roll, 2 coats — allow dry time between)
- Trim and doors last (brush or spray)
- Touch-ups

### Day 4: Final
- Remove tape and masking
- Touch-up any bleed-through or missed spots
- Clean up and furniture replacement
- Client walkthrough

## Exterior Job Sequencing

### Phase 1: Prep (1-3 days depending on condition)
- Pressure wash (allow 24-48 hours to dry)
- Scrape loose paint
- Sand rough edges
- Caulk gaps, joints, and cracks
- Prime bare wood and repaired areas

### Phase 2: Paint (2-5 days)
- Body color first (largest surfaces)
- Trim color second
- Accent/door color last
- Allow proper dry time between coats

## Weather Rules for Exterior Work

| Condition | Decision |
|-----------|----------|
| Rain in forecast (>30%) | No exterior painting — switch to interior jobs |
| Temperature < 50°F | Most latex paints will not cure properly — check product specs |
| Temperature > 95°F | Paint dries too fast — early morning starts, shaded sides |
| Humidity > 85% | Slow drying — risk of runs, sags, poor adhesion |
| Dew point within 5° of temperature | Condensation risk — do not paint |
| Wind > 20 mph | No spray application — brush/roll only |
| Direct sun on hot surface | Move to shaded areas — follow the shade around the building |

## Crew Productivity Standards

| Task | 2-Person Crew/Day | Notes |
|------|-------------------|-------|
| Interior prep (standard room) | 4-6 rooms | Patch, caulk, tape |
| Interior paint (walls, 2 coats) | 3-5 rooms | Cut + roll, standard 12x14 |
| Interior trim (brush) | 400-600 LF | Per coat |
| Exterior prep | 800-1,500 SF | Depends on condition |
| Exterior paint (brush/roll) | 600-1,200 SF | Per coat |
| Exterior paint (spray) | 1,500-3,000 SF | Per coat |
| Cabinet painting | 6-10 cabinet doors | Per coat, per day |

## Multi-Crew Coordination

When multiple crews work on the same project:
- **Separate zones** — assign distinct areas to avoid overlap
- **Sequence handoffs** — prep crew finishes a room before paint crew enters
- **Shared equipment** — coordinate scaffold, lift, and spray equipment schedules
- **Communication** — daily briefing on who is where and what is next
- **Quality standard** — consistent technique across crews (roller direction, cut-in quality)

## Output Formats
- **Weekly schedule** — all crews and assignments by day
- **Daily dispatch** — per-crew job details and instructions
- **Job timeline** — multi-day project plan for client communication
- **Capacity planner** — forecast when crews are available for new jobs
