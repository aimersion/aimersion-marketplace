---
description: Run a coverage gap analysis for a client
argument-hint: client name or details
---

# Coverage Review Command

Perform a comprehensive coverage gap analysis for a client across all insurance lines.

## Input

Use the argument to provide client identifying information:
- Client name
- Coverage details (auto: vehicles/drivers, home: property value, life: face amounts, etc.)
- Assets or known exposures
- Any specific coverage concerns

Example: `coverage-review "Sarah Martinez, 2 vehicles, $400K home, no umbrella"`

## Analysis Steps

1. **Gather Current Coverage Details**
   - Auto insurance: liability limits, collision/comprehensive deductibles, uninsured motorist coverage
   - Home insurance: dwelling limit, liability limit, personal property coverage type
   - Umbrella: limits if exists, or note if missing
   - Life insurance: type, face amounts by person
   - Disability: coverage type and limits
   - Business insurance: if applicable

2. **Assess Exposure**
   - Total assets (liquid and non-liquid)
   - Income and income replacement need
   - Liability exposure (pools, business, high-net-worth)
   - Vehicle exposure (commute, commercial use)
   - Property exposure (home value, improvements)

3. **Identify Gaps**
   - Liability limits insufficient for assets
   - Missing coverage types (umbrella, disability, business)
   - Underinsured home/vehicle
   - Life insurance insufficient for income replacement
   - Coverage type issues (actual cash value vs. replacement cost)

4. **Compare to Benchmarks**
   - Use industry standards from references/coverage-benchmarks.md
   - Rate gap severity: Critical, High, Medium, Low
   - Provide specific numbers and rationales

5. **Renewal Recommendations**
   - Competitive analysis: How current rates/terms compare
   - Suggested coverage improvements with cost estimates
   - Bundling opportunities and discount calculations
   - Implementation timeline and action items

## Output Format

Provide:
- **Current Coverage Summary** (by line with limits and premiums)
- **Gap Analysis** (gap identified, risk assessment, dollar impact)
- **Recommendations** (coverage improvements with rationale)
- **Renewal Strategy** (competitive positioning, bundling opportunities)
- **Action Items** (numbered list with timeline)
- **Estimated Impact** (annual premium change if recommendations adopted)

## Success Metrics

- Gap identification accuracy matches industry benchmarks
- Recommendations are specific with cost estimates
- Client adoption rate of recommendations
- Premium-to-limit ratios improved after implementation
