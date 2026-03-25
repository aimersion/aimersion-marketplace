---
description: Build a weekly staff schedule
argument-hint: [week date or specific scheduling need]
---

Build an optimized weekly staff schedule for the car wash.

Ask the user for:
- Wash type (express tunnel, full-service, self-serve)
- Operating hours
- Available employees (names, roles, availability/constraints)
- Expected weekly volume or car count
- Any special events or promotions planned for the week
- Weather forecast for the week (if known)

Generate an optimized schedule using the staff-scheduler skill:

1. **Weekly schedule grid**: Day-by-day staffing with shift times, positions assigned, and employee names
2. **Volume projection**: Expected car count per day based on historical patterns and weather
3. **Peak coverage**: Ensure adequate staffing during 11 AM-3 PM peak hours
4. **Labor cost projection**: Total hours, estimated labor cost, and labor cost as percentage of projected revenue
5. **Cross-training notes**: Which employees can flex between positions if needed
6. **On-call plan**: Who to call for weather-driven volume spikes or callouts

If the user has new hires, include which training tasks should be completed during slower periods.
