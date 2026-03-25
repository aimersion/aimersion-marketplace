---
description: Find and explain company policies in plain language
argument-hint: "<policy topic — PTO, benefits, travel, expenses, etc.>"
---

# /policy-lookup

Look up and explain company policies in plain language. See the **employee-handbook** skill for guidance on policy topics and answer structure.

## Usage

```
/policy-lookup $ARGUMENTS
```

Search for policies matching: $ARGUMENTS

## How It Works

**Standalone (always works):**
- Ask any policy question in plain language
- Paste your employee handbook and I'll search it
- Get clear, jargon-free answers

**Supercharged (with connectors):**
- ~~knowledge base: Search handbook and policy docs automatically
- ~~HRIS: Pull employee-specific details (PTO balance, benefits elections)

## Output

```markdown
## Policy: [Topic]

### Quick Answer
[1-2 sentence direct answer]

### Details
[Relevant policy details in plain language]

### Exceptions / Special Cases
[Any relevant exceptions or state-specific variations]

### Who to Contact
[Person or team for further questions]

### Source
[Document name, section, date last updated]
```
