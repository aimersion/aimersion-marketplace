---
description: Generate a tax document checklist
argument-hint: Return type (1040, 1120, 1065, 990, 706, 709, etc.)
---

# Tax Checklist Command

Generate a comprehensive tax document checklist for the specified return type.

## Usage

Use the client-organizer skill to generate a detailed document checklist. Call this command with a return type as the argument.

## Arguments

`$ARGUMENTS` or `$1` - Return type or situation (required)

Valid return types:
- `1040` - Individual income tax return
- `1040-SC` - Individual with Schedule C (self-employed)
- `1040-E` - Individual with Schedule E (rental income)
- `1120` - C Corporation return
- `1120-S` - S Corporation return
- `1065` - Partnership return
- `990` - Nonprofit return
- `706` - Estate tax return
- `709` - Gift tax return
- `custom` - Describe specific client situation

## Instructions

1. Invoke the client-organizer skill
2. Request document checklist for the specified return type: `$1`
3. Include:
   - Required documents (must-have items)
   - Optional documents (based on client situation)
   - Estimated timeline for document collection
   - Organization tips and best practices
   - Follow-up items to discuss with client
4. Format as actionable checklist with checkboxes
5. Reference /references/1040-checklist.md or engagement letter template as needed
6. Provide customization notes if client situation provided

## Output Format

Return a detailed checklist organized by category, with clear checkboxes and explanatory notes for less obvious items.

