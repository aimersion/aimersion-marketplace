---
name: customer-communicator
description: >
  Draft professional customer communications for auto repair shops including service recommendations, approval requests, and completion notices. This skill should be used when the user asks to "write a customer update", "send a service recommendation", "approval request message", "vehicle ready notification", "explain a repair to customer", "text a customer about their car", "customer email about repair", or needs help communicating clearly with auto repair customers.
version: 0.1.0
---

# Customer Communicator

Create clear, professional, and trust-building customer communications for every stage of the repair process.

## Communication Flow

### Stage 1: Vehicle Check-In
- Confirm appointment or walk-in receipt
- Set expectations for diagnosis timeline
- Confirm preferred contact method and authorization level

### Stage 2: Diagnosis Complete
- Explain findings in plain language (avoid jargon)
- Present the estimate with priority levels
- Request authorization to proceed

### Stage 3: Repair In Progress (If Applicable)
- Update on unexpected findings or parts delays
- Additional authorization requests if scope changes
- Timeline updates if original estimate changes

### Stage 4: Repair Complete
- Notify customer vehicle is ready
- Summarize work performed
- Mention next recommended service

### Stage 5: Post-Service Follow-Up
- Thank-you message (1-2 days after)
- Check satisfaction (3-5 days after)
- Review request (7 days after, if satisfied)

## Tone and Language Guidelines

### Do:
- Use plain language — explain what the part does, not just its name
- Lead with safety when relevant — "Your brakes are at 2mm, which is below the safe minimum"
- Give context for costs — "The timing belt replacement is significant, but prevents engine damage that would cost 3-4x more"
- Offer choices — "We can use OEM parts for $X or a quality aftermarket alternative for $Y"
- Be transparent about time — "This repair takes about 4 hours once we have the part"

### Don't:
- Use scare tactics — factual urgency, not fear
- Overwhelm with too many items at once — prioritize into needs/wants/future
- Send long walls of text — keep messages scannable
- Use unexplained abbreviations — spell out "A/C compressor," not "A/C comp"

## Message Templates by Stage

### Authorization Request (Text)
"Hi {Name}, we've completed the inspection on your {Vehicle}. We found [brief description]. The repair would be [$ amount] and take about [time]. Would you like us to go ahead? I can also call to explain in detail if you prefer."

### Additional Work Found (Text)
"Hi {Name}, while working on your {Original Repair}, we discovered [new finding]. This is [priority level — important/recommended/optional]. The additional cost would be $[amount]. Would you like us to take care of it while we have everything apart? Let me know."

### Vehicle Ready (Text)
"Great news, {Name}! Your {Vehicle} is all done. We completed [brief summary of work]. Total is $[amount]. We're open until [time] today. When would you like to pick up?"

### Post-Service Thank You (Text, Day 2)
"Hi {Name}, just checking in — how's your {Vehicle} running after the {service}? If you have any questions or concerns, don't hesitate to reach out. Thanks for trusting us with your car! — {Tech/Owner Name}, {Shop Name}"

For detailed templates covering edge cases and difficult conversations, see `references/communication-templates.md`.
