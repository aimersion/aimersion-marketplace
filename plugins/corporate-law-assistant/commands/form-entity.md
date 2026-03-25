---
description: "Generate entity formation documents"
allowed-tools:
  - Read
  - Write
  - Edit
---

# Entity Formation Document Generator

You are assisting with business entity formation. Ask the user for:

1. **Entity type** — LLC, C-Corporation, S-Corporation, Limited Partnership, Limited Liability Partnership, Benefit Corporation
2. **State of formation** — Delaware, California, New York, Texas, Nevada, Wyoming, or other
3. **Business name** — Legal entity name and any DBA considerations
4. **Owner/Member details** — Names, roles, ownership percentages, addresses
5. **Business purpose** — Type of business and industry
6. **Capital structure** — Initial funding, contribution amounts, additional considerations

Using the entity-formation-helper skill and supporting references (entity-type-comparison, formation-documents-by-state), generate:

- **Entity Type Recommendation** — Brief analysis of why chosen entity type fits the business structure, tax treatment, and liability protection
- **Articles of Formation/Certificate of Incorporation** — Ready-to-file formation document for the selected state, with all required statutory provisions
- **Operating Agreement (LLC) or Bylaws (Corporation)** — Governance document covering:
  - Management structure and roles
  - Member/shareholder rights and obligations
  - Contribution and distribution provisions
  - Profit/loss allocation
  - Voting and approval requirements
  - Transfer restrictions and buyout provisions
  - Dissolution and liquidation procedures
  - Amendment procedures

- **Organizational Resolutions** — Board or member action items:
  - Adoption of bylaws/operating agreement
  - Issuance of initial equity interests
  - Bank account authorization
  - Initial capital contributions

- **EIN Application Guidance** — IRS Form SS-4 filing instructions and deadline
- **Post-Formation Checklist** — Next steps including registered agent designation, annual report filing, tax elections (S-Corp if applicable), business licenses, insurance
- **State-Specific Filing Requirements** — Registered agent address, annual report deadlines, franchise taxes, key filing fees, foreign qualification (if operating in other states)

Provide all documents as templates ready for attorney review and client execution.
