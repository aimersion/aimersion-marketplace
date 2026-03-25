---
description: Create a new client intake questionnaire
allowed-tools: [Read, Write, Edit]
---

# Create New Client Intake Questionnaire

Your task: Generate a comprehensive intake questionnaire tailored to the client's specific practice area and matter type.

**Step 1: Gather intake details**
Ask the user for:
- Practice area (personal injury, family law, criminal defense, estate planning, business law, contracts, other)
- Client type (individual, business, other entity)
- Matter urgency (routine, time-sensitive, emergency)
- Any specific practice area variations (e.g., for personal injury: auto accident, slip-and-fall, medical malpractice, product liability)

**Step 2: Generate the questionnaire**
Using the templates in the skill references, create a professional intake questionnaire with:
- Personal/entity information section
- Matter facts and background
- Prior legal involvement
- Client goals and expectations
- Document checklist with specific items needed
- Conflict check reminder (have client disclose any prior counsel, opposing parties, etc.)
- Attorney conflict check instructions (what the firm will do)
- Engagement terms section
- Fee structure summary
- Timeline expectations

**Step 3: Format and save**
- Use clear markdown formatting with numbered sections and bullet points
- Include placeholder fields like [CLIENT NAME], [MATTER DESCRIPTION]
- Add internal attorney notes in brackets like [ATTORNEY NOTE: Follow up on...]
- Save as a markdown file with naming convention: `intake-[clientname]-[date].md`
- Offer to convert to editable Word/Google Docs format if requested

**Step 4: Conflict check integration**
Include a section that prompts:
- All party names and addresses
- Prior representation history
- Any opposing parties or witnesses
- Related business entities or family members
- Instructions: "Run names through your conflicts database before signing retainer"

The questionnaire should be thorough enough to capture everything needed for an initial engagement letter, but not so lengthy that clients refuse to complete it. Aim for 3-5 pages.
