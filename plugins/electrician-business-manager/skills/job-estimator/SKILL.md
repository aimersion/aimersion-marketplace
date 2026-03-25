---
name: job-estimator
description: >
  Estimate electrical jobs for residential and commercial projects with labor rates and material costs.
  This skill should be used when the user asks to "estimate an electrical job", "price a panel upgrade",
  "bid an electrical project", "calculate wiring costs", "quote a service call",
  "electrical estimate", "how much to wire", or needs help generating cost estimates
  for electrical contracting work.
version: 0.1.0
---

# Job Estimator

Generate accurate electrical job estimates for residential and commercial projects.

## Estimation Workflow

1. **Identify job type** — service call, residential new construction, renovation, commercial, industrial
2. **Define scope** — circuits, fixtures, panels, devices, specialty systems
3. **Calculate material** — wire, conduit, boxes, devices, panels, fixtures
4. **Calculate labor** — hours by task, journeyman vs. apprentice rates
5. **Add overhead and profit** — vehicle, insurance, tools, office, profit margin
6. **Present estimate** — itemized or lump-sum based on job type

## Job Categories

### Residential Service/Repair
- Panel upgrades (100A to 200A, 200A to 400A)
- Circuit additions
- Outlet/switch replacements
- GFCI/AFCI upgrades
- Ceiling fan installation
- Troubleshooting/diagnostics
- Whole-house surge protection
- Generator installation and transfer switches
- EV charger installation (Level 2)

### Residential New Construction
- Rough-in wiring (per SF or per circuit)
- Service entrance and panel
- Lighting layout and fixtures
- Device installation (outlets, switches, dimmers)
- Low-voltage (data, TV, security, audio)
- Smoke/CO detectors
- Outdoor lighting and receptacles
- Dedicated circuits (kitchen, laundry, HVAC, workshop)

### Commercial
- Tenant improvement electrical
- Office lighting and power
- Retail/restaurant buildout
- Data and communication cabling
- Emergency/exit lighting
- Fire alarm systems
- Parking lot lighting
- Sign circuits

## Labor Rate Structure

| Role | Typical Rate Range | Billing Multiplier |
|------|-------------------|-------------------|
| Master Electrician | $45-100/hr (cost) | 2.5-3.5x for billing |
| Journeyman | $30-75/hr (cost) | 2.5-3.5x for billing |
| Apprentice (3rd-4th year) | $20-40/hr (cost) | 2.5-3.0x for billing |
| Apprentice (1st-2nd year) | $15-28/hr (cost) | 2.5-3.0x for billing |
| Helper/Laborer | $14-22/hr (cost) | 2.0-2.5x for billing |

*Billing multiplier covers: labor burden (30-40%), vehicle, tools, insurance, overhead, profit*

## Estimate Formatting

- **Service calls**: Flat rate or T&M with minimum charge
- **Small residential**: Itemized by task with material + labor per line
- **Large residential/commercial**: CSI Division 26 organization with detailed material takeoff
- **Always include**: Permit costs, inspection fees, material tax

## Additional Resources

Read `references/electrical-pricing.md` for detailed material pricing and labor hour benchmarks.
