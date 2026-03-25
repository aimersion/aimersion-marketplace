---
description: Generate a roofing estimate with material and labor breakdown
argument-hint: [roof-details]
allowed-tools: Read, Write, Edit, Bash
---

Generate a roofing estimate for: $ARGUMENTS

1. Read the estimate-builder skill for pricing reference and calculation methods
2. Ask for details if not provided: roof area (squares), pitch, material type, scope (repair/replace), layers to tear off
3. Calculate material quantities with waste factor
4. Price materials using current reference ranges adjusted for quality level
5. Calculate labor based on crew size, pitch, and complexity
6. Add disposal, permits, and accessories (drip edge, ice shield, ridge vent, flashing)
7. Apply overhead and profit
8. Generate a detailed line-item estimate and a professional customer proposal
9. If insurance work, also generate an Xactimate-style scope of work
