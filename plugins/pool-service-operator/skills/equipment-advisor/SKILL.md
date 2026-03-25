---
name: equipment-advisor
description: >
  Recommend pool equipment upgrades and replacements based on pool specifications,
  equipment age, customer needs, and efficiency goals. This skill should be used when
  the user asks to "recommend equipment", "suggest an upgrade", "what pump should I
  use", "equipment replacement", "upgrade the filter", "variable speed pump", or needs
  help advising customers on pool equipment decisions.
version: 0.1.0
---

# Equipment Advisor

Recommend pool equipment upgrades, replacements, and new installations based on pool specifications, current equipment condition, and customer priorities.

## Inputs Needed

- **Pool volume** (gallons)
- **Current equipment**: brand, model, age, condition
- **Pool features**: spa, water features, in-floor cleaning, solar heating, etc.
- **Customer priority**: energy savings, quieter operation, automation, reliability, budget
- **Climate**: affects heater sizing and seasonal run time

## Equipment Categories

### Pumps
**When to recommend replacement:**
- Age > 8-10 years
- Single-speed pump with high energy bills
- Frequent seal or motor failures
- Oversized pump for the pool (common in older installations)

**Sizing guidance:**
- Turnover rate: entire pool volume in 6-8 hours
- Flow rate (GPM) = pool volume / (turnover hours x 60)
- Match pump flow to filter and plumbing capacity (usually 40-80 GPM for residential)

**Variable speed pump benefits:**
- 60-80% energy savings vs single-speed
- Quieter operation at low speeds
- DOE mandate (since 2021) requires VS pumps for most replacements
- Typical ROI: 1-2 years in energy savings

### Filters
**Types and when to recommend each:**

| Type | Best For | Replace Media Every |
|---|---|---|
| Cartridge | Most residential pools; low maintenance | 1-2 years (clean every 3-6 months) |
| DE (diatomaceous earth) | Best filtration quality (2-5 microns) | Grids every 5-7 years |
| Sand | Budget-friendly; large pools | Sand every 5-7 years |

**Sizing**: Filter square footage should handle pump flow rate. Oversizing is fine; undersizing causes high pressure and poor filtration.

### Heaters
**Types:**

| Type | Best For | Efficiency | Cost to Run |
|---|---|---|---|
| Gas (natural gas/propane) | Fast heating, any climate | 80-95% | $$$ |
| Heat pump | Moderate climates, efficiency | 300-600% COP | $ |
| Solar | Sunny climates, eco-conscious | Free fuel | Free (after install) |
| Electric resistance | Spas only | 100% | $$$$ |

**Sizing**: ~1 BTU per gallon per degree of temperature rise per hour. A 20,000-gallon pool rising 20°F in 24 hours needs ~400,000 BTU/hr (gas) or appropriately sized heat pump.

### Salt Chlorine Generators
**When to recommend:**
- Customer wants lower chemical handling
- Customer complains about chlorine smell or skin irritation
- Budget allows the upfront investment ($800-2000 installed)

**Sizing**: Match cell to pool volume. Oversize by 1.5x for longer cell life and lower output percentage.

### Automation Systems
**When to recommend:**
- Customer has multiple equipment pieces (pump, heater, lights, water features)
- Customer wants remote/phone control
- Simplifies operation for less tech-savvy homeowners

### Cleaners
| Type | Best For | Price Range |
|---|---|---|
| Suction-side | Budget; simple pools | $200-500 |
| Pressure-side (booster pump) | Pools with heavy debris (leaves, dirt) | $400-800 + booster |
| Robotic | Best cleaning; energy independent | $600-1500 |
| In-floor (built-in) | New construction; luxury | $5000+ (install) |

## Recommendation Framework

When advising on equipment:

1. **Assess current state**: What's working, what's failing, what's inefficient?
2. **Identify the top priority**: Energy savings? Reliability? Features? Budget?
3. **Match to pool specs**: Size equipment to the pool, not bigger or smaller
4. **Consider the ecosystem**: Equipment works together — a new VS pump may need a new automation panel to control it
5. **Calculate ROI when possible**: Energy savings, reduced chemical costs, avoided repair costs
6. **Present options at 2-3 tiers**: Good / Better / Best with clear trade-offs

## Output Format

```
EQUIPMENT RECOMMENDATION
Customer: [Name]
Pool: [Volume] gal, [Type], [Features]

CURRENT EQUIPMENT:
• [Item]: [Brand/model], [Age], [Condition]

RECOMMENDATION:
Priority: [Customer's main goal]

Option 1 — [Good / Budget-Friendly]
  [Equipment]: [Specific recommendation]
  Est. cost: $[Range]
  Benefit: [Key benefit]

Option 2 — [Better / Best Value]
  [Equipment]: [Specific recommendation]
  Est. cost: $[Range]
  Benefit: [Key benefit]
  ROI: [If calculable]

Option 3 — [Best / Premium]
  [Equipment]: [Specific recommendation]
  Est. cost: $[Range]
  Benefit: [Key benefit]

SUGGESTED NEXT STEP: [Quote, schedule install, further discussion]
```

## Reference Materials

See `references/equipment-lifespan.md` for typical equipment lifespans and maintenance schedules.
