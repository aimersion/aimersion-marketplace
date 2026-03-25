---
description: Generate pre-qualification checklist and letter for loan type
argument-hint: loan type (conventional, FHA, VA, USDA, jumbo, non-QM)
---

# Pre-Qualification Command

Generate a complete pre-qualification document checklist and template letter.

## Instructions

Based on the loan type specified in $ARGUMENTS:

1. **Identify loan type**:
   - Extract loan type from $1 (e.g., "FHA", "conventional", "jumbo")
   - If not specified, ask user to clarify

2. **Select appropriate checklist**:
   - Use document-checklists-by-loan-type.md from pre-qual-processor skill
   - Pull the correct checklist for specified loan type
   - Prioritize items by urgency (critical vs. standard vs. optional)

3. **Create organized checklist** showing:
   - All required documents
   - Timeline requirements (how old documents must be)
   - Format specifications (if any)
   - Alternative documentation (if primary not available)
   - Common issues section with solutions

4. **Generate pre-qual letter** using:
   - Appropriate template from pre-qual-letter-templates.md
   - Placeholder markers for borrower-specific details
   - Clear disclosure of contingencies and limitations
   - Compliance language and expiration date
   - Loan officer contact information

5. **Format as**:
   - Professional document checklist (organized by category)
   - Customizable pre-qual letter template
   - Common document issues section
   - Income calculation guidance (if applicable)
   - Timeline and next steps section

6. **Customize for borrower scenario** (if additional details provided):
   - Insert borrower name and property address
   - Adjust loan amount and terms
   - Note any special circumstances (self-employed, credit issues, etc.)

Use pre-qualification checklist and letter templates as reference and structure.

## Output

Provide complete pre-qual package:
- Customized document checklist
- Ready-to-send pre-qual letter
- Common issues/solutions guide
- Timeline expectations
