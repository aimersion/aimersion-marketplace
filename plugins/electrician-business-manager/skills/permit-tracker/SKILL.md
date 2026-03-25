---
name: permit-tracker
description: >
  Track electrical permit requirements by jurisdiction and manage inspection scheduling.
  This skill should be used when the user asks to "check permit requirements", "what permits do I need",
  "schedule an inspection", "permit for a panel upgrade", "inspection checklist",
  "pull a permit", "permit status", or needs help navigating electrical permitting
  and inspection processes.
version: 0.1.0
---

# Permit Tracker

Navigate electrical permit requirements and manage inspection scheduling across jurisdictions.

## When Permits Are Required

### Always Requires a Permit
- New electrical service or service upgrade
- Panel replacement or upgrade
- New circuits
- Electrical work in new construction or additions
- Generator installation
- EV charger installation (new circuit)
- Solar PV installation
- Rewiring (partial or whole-house)

### May Not Require a Permit (varies by jurisdiction)
- Like-for-like device replacement (outlet for outlet, switch for switch)
- Light fixture replacement (same location, same circuit)
- Replacing a breaker with same amperage
- Low-voltage wiring (thermostat, doorbell, data)

### Never Requires a Permit
- Changing a light bulb
- Plugging in appliances
- Resetting a breaker

*Always verify with the local AHJ (Authority Having Jurisdiction) — requirements vary significantly.*

## Permit Application Process

1. **Determine jurisdiction** — city, county, or state depending on project location
2. **Check requirements** — online portal, phone, or in-person visit
3. **Prepare documents** — scope of work description, site plan, load calculations (if service change)
4. **Submit application** — online, in-person, or by mail
5. **Pay permit fee** — typically $50-500 depending on scope
6. **Receive permit** — post on jobsite before starting work
7. **Schedule inspections** — at required milestones
8. **Pass final inspection** — permit is closed out

## Common Inspection Points

| Inspection | When | What They Check |
|-----------|------|-----------------|
| Rough-in | After wiring, before cover | Wire routing, box fill, proper conductors, grounding, code compliance |
| Underground/slab | Before concrete pour | Conduit depth, proper cover, connections |
| Service | After meter/panel install | Service entrance, grounding electrode, panel wiring |
| Final | After all devices/fixtures | Finished work, GFCI/AFCI protection, labeling, smoke detectors |

## Inspection Preparation Checklist

Before calling for any inspection, verify:

- [ ] All work is accessible (no drywall/cover over rough-in)
- [ ] Permit card is posted and accessible
- [ ] Plans are on-site (if plan review was required)
- [ ] Boxes properly supported and at correct height
- [ ] Wire properly secured (within 12" of box, every 4.5' for NM cable)
- [ ] Proper wire size for circuit amperage
- [ ] Box fill calculations comply (if questioned)
- [ ] Grounding and bonding complete
- [ ] GFCI protection in required locations
- [ ] AFCI protection in required locations (per current NEC adoption)
- [ ] Panel directory is labeled
- [ ] All connections in approved boxes (no open splices)

## Common Inspection Failures

- Missing GFCI/AFCI protection where required
- Improper bonding of grounding electrode system
- Box fill violations
- Wire not properly secured or supported
- Missing nail plates where wires pass through studs
- Panel labeling incomplete
- Outdoor boxes not rated for wet/damp locations
- Incorrect wire gauge for breaker amperage

## Output Formats

- **Permit requirements summary** — what is needed for a specific job and jurisdiction
- **Inspection scheduling tracker** — spreadsheet with dates, results, notes
- **Pre-inspection checklist** — job-specific verification list
- **Permit status log** — track open permits across multiple jobs

Read `references/nec-permit-guide.md` for NEC code references commonly cited in permit and inspection processes.
