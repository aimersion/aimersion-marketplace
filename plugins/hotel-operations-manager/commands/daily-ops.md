---
description: Generate daily operations briefing with housekeeping and maintenance plans
allowed-tools: Read, Write, Edit
argument-hint: [date or "today"]
---

Generate a comprehensive daily operations briefing for: $ARGUMENTS

Follow these steps:

1. **Gather the day's data** — Ask for:
   - Total rooms in property and today's occupancy
   - Number of departures, stayovers, and arrivals with any VIP arrivals
   - Known maintenance issues or work orders pending
   - Any special events, group arrivals, or operational notes
   - Staffing: how many housekeeping attendants and maintenance techs available

2. **Housekeeping assignment plan** — Using the staff-coordinator skill framework:
   - Calculate total credit load (departures, stayovers, suites)
   - Distribute rooms evenly across available attendants
   - Prioritize VIP arrivals and early check-ins at the top
   - Create a room assignment sheet per attendant with special instructions

3. **Maintenance priorities** — Organize pending work orders by priority level (P1-P4) with assigned technicians and estimated completion times.

4. **Operations dashboard** — Create a summary including:
   - Key numbers: occupancy %, ADR, arrivals/departures count
   - VIP arrivals with preferences and special requests
   - Housekeeping assignments overview
   - Maintenance priority list
   - Staffing notes and any coverage gaps

Format as a clean daily briefing document. Save to `daily-ops-[date].md`.
