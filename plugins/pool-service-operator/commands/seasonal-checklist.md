---
description: Generate a seasonal maintenance checklist
allowed-tools: Read, Write
---

Generate a comprehensive seasonal maintenance checklist for a pool service job.

Ask the user for:

1. **Season/service type**: Winterization (closing), Spring startup (opening), or Mid-season checkup
2. **Climate zone**: Hard freeze, light freeze, or no freeze
3. **Pool details**: In-ground or above-ground, chlorine or saltwater, surface type
4. **Equipment list**: Pump, filter type (DE/cartridge/sand), heater, salt cell, automation, water features
5. **Customer name and address** (for the checklist header)

Use the seasonal-planner skill to generate the appropriate checklist.

Present the checklist as a printable, tech-friendly format:

```
═══════════════════════════════════════════════
SEASONAL SERVICE CHECKLIST
[WINTERIZATION / SPRING OPENING / MID-SEASON]
═══════════════════════════════════════════════
Customer: [Name]
Address: [Address]
Pool: [Volume] gal | [Type] | [Surface]
Equipment: [Summary]
Scheduled: [Date]
Tech: _______________

PRE-VISIT PREP:
[ ] [Items to bring, parts to order, etc.]
[ ] ...

ON-SITE — [SECTION NAME]:
[ ] Step 1
[ ] Step 2
[ ] ...

ON-SITE — [NEXT SECTION]:
[ ] Step 1
[ ] ...

WATER CHEMISTRY LOG:
FC: ___ pH: ___ TA: ___ CH: ___ CYA: ___ Salt: ___

POST-VISIT:
[ ] Chemicals added: ___
[ ] Repairs needed: ___
[ ] Customer notified of: ___
[ ] Next service scheduled: ___
[ ] Photos taken: [ ] Equipment [ ] Pool [ ] Cover

Tech signature: _______________ Date: ___
═══════════════════════════════════════════════
```

Also offer to save the checklist as a file the user can print or share with their tech team.
