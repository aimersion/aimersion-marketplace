---
name: maintenance-scheduler
description: >
  Schedule and track preventive maintenance for fleet vehicles by mileage, time intervals, and DOT inspection requirements. This skill should be used when the user asks to "schedule maintenance", "track PM intervals", "DOT inspection due", "preventive maintenance plan", "fleet maintenance schedule", "oil change schedule for fleet", "tire rotation tracking", "maintenance due report", "annual inspection", or needs help managing preventive maintenance programs for their vehicle fleet.
version: 0.1.0
---

# Maintenance Scheduler

Manage preventive maintenance schedules to maximize vehicle uptime, reduce breakdown costs, and maintain regulatory compliance.

## Preventive Maintenance (PM) Intervals

### PM Level A — Basic Service (Every 5,000-7,500 miles or 3 months)
- Engine oil and filter change
- Multi-point inspection (fluid levels, belts, hoses)
- Tire pressure check and adjustment
- Wiper fluid top-off
- Visual brake inspection
- Exterior light check

### PM Level B — Intermediate Service (Every 15,000-20,000 miles or 6 months)
- Everything in PM-A, plus:
- Tire rotation
- Cabin and engine air filter replacement
- Brake pad measurement and recording
- Battery test
- Transmission fluid check
- Coolant level and condition check

### PM Level C — Major Service (Every 30,000-40,000 miles or 12 months)
- Everything in PM-A and PM-B, plus:
- Transmission fluid and filter change
- Coolant system flush
- Fuel system cleaning
- Spark plug inspection/replacement (per manufacturer)
- Complete brake inspection with measurements
- Suspension component inspection
- Drive belt replacement assessment
- Differential fluid service (if applicable)

### PM Level D — Comprehensive Overhaul (Every 60,000-100,000 miles)
- Everything above, plus:
- Timing belt/chain inspection or replacement
- Major brake service (rotors, calipers assessment)
- Water pump assessment
- Complete fluid flush (all systems)
- Wheel bearing inspection
- Steering component inspection
- Exhaust system inspection

## DOT Inspection Tracking

### Annual DOT Inspection Requirements (FMCSA)
Applies to CMVs over 10,001 lbs GVWR:

**Required inspection items**:
- Brake system (service, parking, brake drums/rotors, hoses)
- Coupling devices (if applicable)
- Exhaust system
- Fuel system
- Lighting devices and reflectors
- Safe loading (cargo securement)
- Steering mechanism
- Suspension
- Frame
- Tires
- Wheels and rims
- Windshield glazing and wipers
- Emergency equipment (fire extinguisher, reflective triangles)

**Inspection validity**: 12 months from inspection date
**Sticker placement**: Required on vehicle
**Record retention**: Maintain inspection records for 14 months minimum

### Pre-Trip / Post-Trip Inspections (Daily)
FMCSA requires drivers to complete DVIR (Driver Vehicle Inspection Report):
- Pre-trip: Before operating CMV
- Post-trip: At end of each driving day
- Items: Brakes, steering, lights, tires, horn, mirrors, coupling, emergency equipment

## Scheduling Strategy

### Mileage-Based Tracking
- Record odometer at every service
- Calculate average daily/weekly mileage per vehicle
- Project next service dates based on mileage accumulation rate
- Set alerts at 90% of interval (e.g., alert at 4,500 miles for 5,000-mile service)

### Time-Based Tracking
- Use calendar intervals as backstop for low-mileage vehicles
- Whichever comes first: mileage OR time interval
- Critical for seasonal/standby vehicles that may sit idle

### Combined Dashboard Fields
For each vehicle, track:
- Last PM-A date and mileage
- Last PM-B date and mileage
- Last PM-C date and mileage
- Last DOT inspection date
- Next PM due (date and mileage)
- Next DOT inspection due
- Current odometer (last reading date)
- Status flag: Green (OK) / Yellow (Due Soon) / Red (Overdue)

For detailed inspection checklists and scheduling templates, see `references/maintenance-checklists.md`.
