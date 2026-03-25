---
description: Build a rate strategy with demand forecast and pricing recommendations
allowed-tools: Read, Write, Edit, Bash, WebSearch
argument-hint: [date-range or event-name]
---

Build a comprehensive rate strategy for the specified period or event: $ARGUMENTS

Follow these steps:

1. **Gather context** — Ask for or confirm: property details (room count, room types, star level), current occupancy and ADR, comp set properties, and any known events or demand drivers for the period.

2. **Demand assessment** — Analyze the demand outlook for the specified dates. Identify compression nights, shoulder periods, and need dates. If an event is mentioned, score its impact using the event impact scoring framework from the revenue-optimizer skill.

3. **Rate recommendations** — For each date range within the period, recommend:
   - BAR (Best Available Rate) by room type
   - Rate fences and restrictions (advance purchase, minimum stay, cancellation policy)
   - Channel strategy (direct vs. OTA allocation)
   - Package opportunities to drive ancillary revenue

4. **Action plan** — Deliver a clear, date-by-date action plan the revenue team can implement immediately. Include specific rate amounts, restriction changes, and channel adjustments.

Format the output as a professional rate strategy document with tables for easy reference. Save to a markdown file named `rate-strategy-[date].md`.
