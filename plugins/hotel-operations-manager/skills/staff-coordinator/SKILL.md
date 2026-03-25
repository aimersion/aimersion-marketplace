---
name: staff-coordinator
description: >
  Coordinate hotel staff operations including housekeeping assignments, maintenance dispatch,
  and shift management. This skill should be used when the user asks to "assign housekeeping",
  "create room assignments", "dispatch maintenance", "schedule shifts", "staff coverage",
  "housekeeping board", "turnover schedule", "deep clean schedule", "maintenance priorities",
  "labor management", or needs help organizing hotel operational staff.
version: 0.1.0
---

# Hotel Staff Coordination

Optimize daily hotel operations through intelligent housekeeping assignments, maintenance prioritization, and shift coverage planning.

## Housekeeping Assignment Planning

### Daily Room Assignment Process

1. **Pull departure/arrival board** — identify checkouts (departures), stayovers, and arrivals with expected times
2. **Prioritize by urgency**: Early check-ins and VIP arrivals first, then standard departures, then stayovers
3. **Calculate credits** — assign point values based on room type and service level:
   - Standard checkout: 1.0 credit
   - Suite checkout: 1.5-2.0 credits
   - Deep clean/maintenance clean: 2.0 credits
   - Stayover service: 0.5 credits
   - DND/decline service: 0.1 credits (still counted for tracking)
4. **Distribute evenly** — target equal credit loads per attendant (typically 14-16 credits per 8-hour shift)
5. **Zone assignments** — group rooms by floor/wing to minimize transit time
6. **Build assignment sheet** — list rooms in cleaning order with special instructions

### Assignment Sheet Format

For each attendant, provide:

| Room | Type | Status | Priority | Special Instructions | Credits |
|------|------|--------|----------|---------------------|---------|
| 401 | Suite | Checkout | HIGH - VIP arriving 1pm | Extra amenity setup, champagne | 2.0 |
| 405 | Standard | Stayover | Normal | Requested extra towels | 0.5 |

### Inspection Protocol

- Inspect 100% of VIP and suite departures before releasing
- Random inspect 20% of standard departures daily
- Track deficiency rates per attendant for coaching
- Common deficiency categories: bathroom detail, dusting, bed presentation, amenity placement

## Maintenance Dispatch

### Priority Classification

| Priority | Response Time | Examples |
|----------|-------------|---------|
| Emergency (P1) | Immediate (<15 min) | Water leak, no heat/AC in occupied room, safety hazard, elevator stuck |
| Urgent (P2) | Within 1 hour | Broken lock, clogged toilet, TV not working in occupied room |
| Standard (P3) | Within 4 hours | Minor repair in vacant room, cosmetic damage, squeaky door |
| Scheduled (P4) | Next available window | Preventive maintenance, painting, deep equipment service |

### Work Order Template

Each dispatch should include: room/location, issue description, priority level, guest impact (occupied/vacant, complaint?), assigned technician, estimated completion, parts needed, follow-up required (Y/N).

### Preventive Maintenance Cycles

- **Daily**: HVAC filter checks, pool chemistry, elevator inspection, life safety systems
- **Weekly**: Common area deep clean, exterior lighting, plumbing spot checks
- **Monthly**: HVAC full service, pest control, fire extinguisher inspection, kitchen hood cleaning
- **Quarterly**: Deep carpet/upholstery cleaning, exterior pressure washing, painting touch-ups
- **Annual**: Capital equipment service, roof inspection, fire alarm certification, elevator certification

## Shift Coverage Planning

### Coverage Requirements by Day Part

| Shift | Front Desk | Housekeeping | Maintenance | F&B | Security |
|-------|-----------|-------------|-------------|-----|----------|
| AM (7a-3p) | 2-3 | Full team | 2-3 | Breakfast crew | 1 |
| PM (3p-11p) | 2 | Turndown team | 1-2 | Dinner crew | 1 |
| Night (11p-7a) | 1 | 0 | 1 (on-call) | 0 | 1 |

Adjust based on: occupancy level, day of week, events, seasonal patterns.

### Call-Out Management

When a team member calls out:
1. Check if the shift is critical (minimum staffing at risk?)
2. Contact on-call/float pool staff first
3. Offer overtime to same-department team members
4. Cross-train key positions for backup coverage
5. If no coverage found, adjust service levels (reduce stayover frequency, extend response times for P3/P4 maintenance)

## Reference Materials

- **`references/labor-standards.md`** — productivity benchmarks and scheduling best practices
