---
name: estimate-builder
description: >
  Build professional repair estimates with labor guides, parts markup calculations, and competitive pricing for auto repair shops. This skill should be used when the user asks to "create an estimate", "price a repair", "build a quote", "labor time for", "parts markup", "how much to charge for", "repair estimate", "quote for brake job", "estimate for timing belt", or needs help creating accurate, profitable repair estimates.
version: 0.1.0
---

# Estimate Builder

Create accurate, professional repair estimates that balance profitability with competitive pricing.

## Estimate Structure

Every estimate should include:

1. **Customer & vehicle info**: Name, phone, year/make/model, mileage, VIN (if available)
2. **Concern/complaint**: Customer's description of the problem in their words
3. **Diagnosis**: Technician's findings and recommended repairs
4. **Line items**: Each repair broken into parts + labor with clear pricing
5. **Total**: Subtotal, tax, shop supplies, total
6. **Validity**: Estimate valid for 30 days (standard)

## Labor Rate Guidelines

### Setting Your Labor Rate

Factors that determine competitive labor rates:
- **Market average**: Research 5-10 local competitors
- **Technician cost**: Target labor rate = 3-4x technician hourly wage
- **Overhead**: Rent, utilities, insurance, equipment — factor into rate
- **Specialization premium**: Add 10-20% for specialty work (European, diesel, hybrid)

### Labor Time Standards

Use published labor guides (Mitchell, AllData, MOTOR) as a baseline. Adjust for:
- **Book time**: Industry-standard flat rate hours for the job
- **Actual conditions**: Rust, modifications, or complications may increase time
- **Efficiency factor**: Experienced techs may beat book time — price at book time regardless
- **Diagnostic time**: Always charge separately for diagnosis (typically 0.5-1.5 hours)

### Common Job Labor Times (Approximate Ranges)

| Job | Labor Hours (Range) |
|-----|-------------------|
| Oil change | 0.3-0.5 |
| Brake pads (per axle) | 0.8-1.5 |
| Brake pads & rotors (per axle) | 1.5-2.5 |
| Timing belt (4-cyl) | 3.0-5.0 |
| Timing belt (V6) | 4.0-7.0 |
| Water pump | 1.5-4.0 |
| Alternator | 1.0-2.5 |
| Starter | 1.0-3.0 |
| Head gasket | 8.0-15.0 |
| Transmission removal & replace | 5.0-10.0 |
| A/C compressor | 2.0-4.0 |
| Wheel bearing (per side) | 1.0-2.5 |

*Note: These are general ranges. Always verify against the specific vehicle's labor guide.*

## Parts Markup Guidelines

### Standard Markup Tiers

| Parts Cost | Markup | Rationale |
|-----------|--------|-----------|
| $0-$25 | 80-100% | Small parts need higher margin to be worth stocking/ordering |
| $25-$75 | 60-80% | Mid-range parts, standard margin |
| $75-$200 | 50-65% | Higher-cost parts, moderate margin |
| $200-$500 | 40-55% | Expensive parts, volume makes up for lower % |
| $500+ | 30-40% | Major components, customer sensitive to total cost |

### Parts Sourcing Strategy
- **OEM parts**: Highest quality, highest cost — recommended for warranty work and premium customers
- **OE-equivalent (aftermarket)**: Good quality, competitive pricing — standard for most repairs
- **Economy/value parts**: Budget option — offer when customer is price-sensitive, note warranty differences
- Always present options when possible: "Good / Better / Best" pricing tiers

## Shop Supplies and Fees

Standard shop supplies charge: 5-8% of labor total (capped at $25-50)
Covers: rags, solvents, lubricants, small hardware, disposal fees

Environmental/disposal fees: $2-5 per service (waste oil, coolant, refrigerant disposal)

## Estimate Presentation Tips

- Lead with the most critical repair (safety first)
- Separate "needs now" from "recommend soon" from "monitor"
- Show parts and labor separately for transparency
- Always provide a total before tax
- Include warranty information on parts and labor
- Offer financing options for large repairs (if available)

For detailed estimate templates and warranty policy examples, see `references/estimate-templates.md`.
