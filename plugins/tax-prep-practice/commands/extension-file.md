---
description: Create extension filing workflow
argument-hint: Client type (individual, S-corp, partnership, etc.)
---

# Extension File Command

Create a complete extension filing workflow with estimated tax calculations and deadline management.

## Usage

Use the extension-manager skill to build an extension filing plan for the specified client type.

## Arguments

`$ARGUMENTS` or `$1` - Client type or return type (required)

Valid inputs:
- `individual` or `1040` - Individual taxpayer
- `c-corp` or `1120` - C Corporation
- `s-corp` or `1120-S` - S Corporation
- `partnership` or `1065` - Partnership
- `estate` or `1041` - Trust/Estate
- `nonprofit` or `990` - Nonprofit organization
- Combinations: "individual with self-employment" or "small business owner"

## Instructions

1. Invoke the extension-manager skill
2. Create workflow for specified client type: `$1`
3. Generate:
   - Extension filing deadline (federal and state)
   - Estimated payment calculation (90% or 100% method)
   - Safe harbor amount confirmation
   - Form 7004 or 4868 requirements
   - Payment options and processing method
   - State extension filing requirements (if not auto-extended)
   - Deadline calendar for quarterly payments (if estimated payments required)
   - Client communication template
   - Return filing deadline reminder
4. Reference /references/extension-workflows.md
5. Include penalty avoidance strategies
6. Provide estimated tax payment schedule

## Output Format

Provide a step-by-step workflow including:
1. Extension form and filing details
2. Estimated tax calculation worksheet
3. Payment amount and due date
4. Quarterly estimated payment schedule (if applicable)
5. Client communication email template
6. Final return filing deadline
7. Document checklist

