---
name: crew-dispatcher
description: >
  Manage daily crew assignments and weather-based scheduling for roofing operations. This skill
  should be used when the user asks to "assign crews", "schedule a crew", "daily dispatch",
  "who works where today", "weather schedule", "crew assignments", "production schedule",
  or needs help coordinating roofing crew deployment and weather-dependent scheduling.
version: 0.1.0
---

# Crew Dispatcher

Optimize daily crew assignments and manage weather-dependent roofing production schedules.

## Daily Dispatch Workflow

1. **Check weather forecast** — temperature, wind, precipitation probability for the day and next 3 days
2. **Review job queue** — prioritize by: contract date, material availability, customer urgency
3. **Assess crew availability** — who is available, crew skill levels, equipment
4. **Match crews to jobs** — based on job complexity, crew capability, geographic proximity
5. **Confirm materials** — verify materials are delivered or available for each job
6. **Generate dispatch sheet** — one per crew with all job details
7. **Communicate** — send assignments to crew leads by end of previous day

## Weather Decision Matrix

| Condition | Action |
|-----------|--------|
| Clear, calm | Full production — schedule all available jobs |
| Light wind (< 15 mph) | Normal operations |
| Moderate wind (15-25 mph) | Caution — avoid steep pitches, secure materials |
| High wind (25+ mph) | Stop roof work — redirect to ground tasks, material prep |
| Rain > 30% chance | Do not start tear-offs — can continue covered work |
| Active rain | Stop all roof work |
| Temperature < 40°F | Asphalt shingles may not seal — use hand-sealing or reschedule |
| Temperature > 100°F | Heat safety protocols — early starts, extra breaks, hydration |
| Ice/frost | No roof work until surfaces are clear and dry |

## Crew Assignment Factors

| Factor | Weight | Notes |
|--------|--------|-------|
| Job complexity | High | Match experienced crews to difficult roofs |
| Crew size needed | High | 2-person repair vs. 5-person tear-off/install |
| Geographic proximity | Medium | Minimize drive time, group nearby jobs |
| Customer priority | Medium | Insurance deadlines, emergency repairs first |
| Material readiness | High | Do not dispatch without confirmed materials on-site |
| Permit status | Required | Do not start work without active permit |

## Dispatch Sheet Template

For each crew, provide:

- **Crew lead name and crew members**
- **Job address and customer name/phone**
- **Scope of work** (tear-off squares, install type, specific details)
- **Material list** (confirmed on-site or delivery ETA)
- **Special instructions** (HOA requirements, access issues, neighbor considerations)
- **Safety notes** (steep pitch, power lines, tree hazards)
- **Estimated completion time**
- **Next day preview** (so crew can prep)

## Production Capacity Planning

Typical crew output per day (8-hour day, good weather):
| Crew Size | Tear-Off | Install (Asphalt) | Total Squares/Day |
|-----------|----------|-------------------|-------------------|
| 3-person | 15-20 SQ | 12-18 SQ | 12-18 SQ (tear + install) |
| 5-person | 25-35 SQ | 20-30 SQ | 20-30 SQ |
| 7-person | 35-50 SQ | 30-45 SQ | 30-45 SQ |

*Adjust for: pitch (steep = -25-40%), complexity (cut-up = -20-30%), weather, access*

## Output Formats
- **Daily dispatch board** — all crews and assignments at a glance
- **Individual crew sheet** — detailed job instructions per crew
- **Weekly production schedule** — plan ahead with weather considerations
- **Capacity forecast** — project completion dates based on crew availability and weather
