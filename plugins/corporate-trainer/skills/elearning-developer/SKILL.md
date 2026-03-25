---
triggers:
  - "create eLearning"
  - "write a storyboard"
  - "assessment questions"
  - "scenario-based learning"
  - "SCORM content"
  - "eLearning module"
  - "interactive training module"
---

# eLearning Developer

Create engaging, interactive eLearning content that drives knowledge retention and skill transfer.

## Storyboard Templates

Plan eLearning course structure before building in authoring tools.

**Basic Storyboard Template**

```
Module Title: [Topic]
Slide #: 1
Slide Type: Title Slide
Learning Objective(s): [if applicable]

Visuals:
- Description of graphics, images, or animations
- Layout notes
- Color scheme notes

Text Content:
- Heading/Title
- Body text
- Call-to-action button text

Audio/Narration:
[Full script for voice-over or audio]

Interaction:
- Button text and click target
- Hyperlinks
- Any rollover tooltips

Notes for Developer:
[Technical specifications, animation timing, branching logic]

Speaker Notes:
[Additional context for developer or SME review]
```

**Detailed Storyboard Components:**

**Slide Header Information:**
- Module and section name
- Slide number
- Slide type (Title, Content, Practice, Assessment, etc.)
- Estimated duration
- Learning objectives addressed

**Visual Design:**
- Detailed description of visuals (photos, icons, graphics, animations)
- Placement and sizing
- Motion/animation specifications
- Color coding and visual hierarchy
- Accessibility considerations (alt text descriptions)
- Template and layout consistency notes

**Content Elements:**
- Exact text for all copy
- Font specifications
- Text hierarchy (heading, body, emphasis)
- Button labels and placement
- Branching or conditional text

**Interactivity:**
- Button clicks and navigation
- Drag-and-drop specifications
- Hotspots and rollover content
- Branching logic ("If learner selects A, go to slide X")
- Interaction scoring or feedback

**Multimedia:**
- Full narration script
- Music or sound effects
- Video descriptions
- Timing and synchronization

**Assessment:**
- Question type and correct answer
- Feedback for correct/incorrect
- Scoring rules
- Branching based on performance

**Developer Notes:**
- Technical requirements
- Animation timing
- SCORM integration points
- Conditional logic
- Potential challenges or special handling

**Example Storyboard: Slide 3**
```
Module: "Giving Feedback" | Section: "Preparation" | Slide: 3 | Type: Interactive Content

LEARNING OBJECTIVE:
Identify the key elements of feedback preparation.

VISUALS:
- Background: Light blue gradient
- Center: Illustration of a manager at desk with thought bubble (cartoon style)
- Icons for each element appear as content is revealed
- Timeline graphic showing feedback conversation flow

TEXT CONTENT:
HEADING: "Three Key Preparation Steps"

BODY:
Before giving feedback, take time to:
1. Review the situation and specific examples
2. Clarify your intent and desired outcome
3. Consider the person's perspective

[Each point appears with corresponding icon animation]

INTERACTION:
- Click each numbered item to reveal detailed explanation
- At bottom: "Next" button to advance
- At bottom: "Review" button to revisit previous content

AUDIO/NARRATION:
"Before you give feedback to a team member, it's important to prepare.
Take time to review the situation and gather specific examples of
the behavior or outcome you want to address. Clarify what you want
to achieve with this conversation. And consider the other person's
perspective—why might they have acted this way?
Click each step to learn more about effective preparation."

DEVELOPER NOTES:
- Icons should animate in with fade-in effect when text appears
- Each click reveals 2-3 sentences of explanation text
- Animation timing: 0.5 seconds fade
- Branching: Clicking "Review" goes back to Slide 2
- SCORM bookmark after slide complete
```

## Assessment Question Design

Create varied, effective assessment questions aligned to learning objectives.

**Multiple Choice Questions**

**Effective Design:**
- Question focuses on single concept or skill
- Stem clearly states the question or problem
- Correct answer is clearly correct
- Distractors are plausible but incorrect
- Distractors don't cue wrong answer
- Avoid "all of the above" or "none of the above"
- Avoid trick questions
- Use consistent answer placement (don't always put correct answer in position C)

**Example:**
```
Q: What is the first step in the customer resolution process?

A) Document the issue and action taken
B) Listen to and clarify the customer's concern
C) Explain company policy
D) Offer a solution

Correct Answer: B
Explanation: The first step is always to understand the customer's
perspective by listening actively and clarifying what happened. This
builds rapport and ensures you address the real issue, not just what
you think the problem is.
```

**Scenario-Based Questions**

Present realistic situations requiring judgment and decision-making.

**Example:**
```
SCENARIO:
You're on a video call with an important client. Five minutes into
the meeting, your teammate sends you a message that your boss needs
to talk to you immediately about an urgent issue.

Q: What should you do?

A) Leave the client call immediately to talk to your boss
B) Quickly tell the client you need to go and hang up
C) Tell the client you need one minute, step away to check what's urgent
D) Finish the client call as planned; speak to your boss afterward

Correct Answer: C
Explanation: In this situation, you should acknowledge that something
may be urgent while still respecting your client relationship. A quick
check (literally one minute) respects both relationships. Option A or B
might unnecessarily damage the client relationship. Option D might miss
something truly time-sensitive. The key is balancing competing priorities.

Optional Feedback for incorrect answers:
- If A or B: "While urgency matters, client relationships are critical.
  A one-minute check respects both."
- If D: "In today's environment, quick escalations matter. A brief check
  is appropriate here."
```

**Matching Questions**

Connect related concepts or terms.

**Example:**
```
Q: Match each type of feedback with its primary purpose.

Column A:          | Column B:
1. Praise         | A) Redirect behavior toward better outcomes
2. Corrective     | B) Reinforce positive behavior and behaviors
3. Coaching       | C) Develop skills and capability

Correct Pairings: 1-B, 2-A, 3-C
Explanation: Praise reinforces what's working. Corrective feedback
redirects. Coaching develops capability for growth.
```

**True/False Questions**

Useful for factual knowledge; less effective for complex concepts.

**Example:**
```
Q: True or False: Psychological safety in teams means there's never
any conflict or disagreement.

Correct Answer: False
Explanation: Psychological safety actually enables healthy conflict
because people feel safe to speak up even when they disagree. Safety
means disagreement happens respectfully, not that disagreement doesn't exist.
```

**Fill-in-the-Blank**

Require learners to generate rather than recognize answers.

**Example:**
```
Q: The first stage of Tuckman's team development model is _______.

Correct Answer: Forming (accept variations: "forming stage")
Explanation: Tuckman's model includes Forming (team getting to know each
other), Storming (conflict and jockeying for position), Norming (establishing
group norms), and Performing (functioning as a cohesive unit). Understanding
these stages helps managers support teams appropriately at each phase.
```

**Short Answer/Essay Questions**

Assess deeper understanding, application, and critical thinking.

**Example:**
```
Q: A team member has missed the last three project deadlines. Their
manager has already given feedback twice. What approach would you recommend
the manager take now? (3-4 sentences)

Sample Strong Answer:
"The manager should have a more in-depth conversation. First, listen
to understand what's blocking the person (personal issues, unclear
expectations, prioritization confusion, capability gap). Second,
work together to identify the root cause. Third, co-create a concrete
plan with specific support, check-in points, and clarity about what
success looks like. This moves from feedback to problem-solving."

Scoring Rubric:
- Includes listening/discovery (1 point)
- Identifies potential root causes (1 point)
- Proposes concrete next steps (1 point)
- Shows collaborative approach (1 point)
Total: 4 points
```

**Branching Logic Questions**

Guide learner paths based on performance or responses.

**Example:**
```
Q: Choose the conflict resolution approach most aligned with your
team's culture and the severity of this situation.

A) Direct conversation with the person involved
B) Involve a manager or HR
C) Schedule a team meeting to address the issue
D) Talk to trusted colleagues for advice

IF learner selects A → Continue with "Direct Conversation" module (lower risk)
IF learner selects B → Continue with "Escalation Process" module (higher risk)
IF learner selects C → Continue with "Team Facilitation" module (high risk)
IF learner selects D → Branch to remedial content on when to escalate

Allows personalized learning path based on responses.
```

## Scenario-Based Learning Frameworks

Use realistic scenarios to develop judgment and decision-making skills.

**Scenario Structure:**

**1. Context Setting**
- Who is involved?
- What is the situation?
- What are the constraints or pressures?
- What information do you have?
- What information is missing?

**2. The Challenge or Decision Point**
- What decision does the learner face?
- What are the consequences of the decision?
- What would success look like?

**3. Response Options**
- 3-4 realistic choices (not obviously right/wrong)
- Each choice has realistic consequences
- Some choices are better than others; few are clearly terrible
- Consequences should align with real-world outcomes

**4. Feedback & Consequences**
- Show what happens when they choose that option
- Explain the reasoning (why it's better or worse)
- Connect back to learning objectives or core principles
- Avoid judgmental language
- Highlight learning, not just "right" vs. "wrong"

**5. Branching Paths** (optional)
- Different scenarios or questions based on choice
- Builds engagement and realism
- Allows multiple "correct" paths in some cases

**Example Scenario: Leadership Communication**

```
CONTEXT:
You're a newly promoted team manager. One of your team members, Sarah,
has been with the company for 8 years and was also considered for the
promotion you got. The past two weeks, she's been quiet in meetings and
her contributions have dropped. You overhear her telling a colleague
"I guess I'm not valued here anymore."

THE CHALLENGE:
You need to address this situation. What's your first move?

OPTION A: Pull Sarah aside and acknowledge her disappointment about
the promotion, ask what's bothering her, and listen without defending yourself.

Consequence: Sarah feels heard and valued. You learn she was disappointed
but her real concern is whether she still has a future at the company.
This conversation rebuilds trust and opens the door to discussing her
growth. You discuss a development plan and challenging project for her.
Outcome: Sarah's engagement returns. She becomes a strong contributor
and future leader.

Feedback: Strong choice. Acknowledging her feelings and asking open
questions shows respect. This is Level 5 on the Emotional Intelligence
scale—you're regulating your own emotions and empathizing with hers.

---

OPTION B: Email her a friendly message saying you'd love to grab lunch
soon and catch up, leaving the door open for a conversation.

Consequence: Sarah may interpret this as trying to smooth things over
without really addressing the issue. She might not take the initiative
to open up in a casual lunch setting. Time passes; tension remains.
Outcome: The relationship stays strained. Productivity remains lower.
You miss an opportunity for direct communication.

Feedback: This avoids the real conversation. While friendliness is good,
the situation requires direct acknowledgment of the elephant in the room.
Sarah needs to know you recognize how she might feel and that it matters
to you. Sometimes we avoid hard conversations at our team's expense.

---

OPTION C: Schedule a formal meeting with Sarah where you explain that
while you understand she might be disappointed, she needs to stay
professional and focused on the team.

Consequence: Sarah feels told, not heard. This likely makes her feel
defensive or dismissed. Her engagement drops further. She might start
looking for a new job or escalate concerns to HR about unfair treatment.
Outcome: You've created a larger problem. What could have been healed
with empathy now feels like a warning.

Feedback: This approach shuts down dialogue rather than opening it.
Telling someone to "stay professional" when they're hurting makes them
feel unvalued. The stronger move is to lead with empathy and curiosity,
not directives.

---

OPTION D: Talk to your manager about the situation and ask for advice
on how to handle Sarah.

Consequence: Depends on your manager, but you've delegated a relationship
issue that's yours to solve. Sarah might hear that you complained about
her (even if that wasn't the intent). This can feel like a betrayal.
Outcome: The issue escalates or gets handled wrong. You lose an opportunity
to build your own leadership capability.

Feedback: This is a good situation to coach yourself through. Your manager
might be a resource for perspective, but the first move is yours. Building
strong team relationships is a core leadership responsibility. Ask for
advice after you've attempted a direct conversation.
```

## Multimedia Script Writing

Write clear, engaging audio scripts for eLearning.

**Script Format:**

```
[SCENE: Visual of manager and employee in office]

[NARRATION - warm, conversational tone]
"When you're preparing to give feedback to a team member, one of the
most important things you can do is get clear on what you want to achieve.
It's not just about telling someone what they did wrong—it's about helping
them succeed going forward."

[SOUND EFFECT: Subtle transition/notification sound]

[VISUAL: Graphic showing three objectives appears on screen]

[NARRATION]
"Think about three things: First, what specific behavior or outcome do
you want to address? Be concrete—not 'you're not a team player,' but
'in our last three meetings, you haven't shared your ideas even though
I know you have great thoughts.'

Second, what do you want the outcome to be? Do you want them to change
this behavior going forward? To understand their impact? To get support
they need?

Third, what do you hope about their future in this role? Do you believe
they can improve? Do you see potential?"

[VISUAL: Animated infographic reinforces key points]

[SOUND EFFECT: Subtle close/completion sound]

[NARRATION]
"When you're clear on your intent and outcome, your feedback becomes
a gift—genuine support rather than judgment. Ready to practice preparing
feedback for a real scenario?"
```

**Script Writing Tips:**
- Write for the ear, not the eye (conversational language)
- Use contractions ("don't" vs. "do not")
- Keep sentences shorter than written text
- Pause for emphasis (use ellipses or [...])
- Match pace to content complexity
- Use tone to convey warmth and support
- Avoid reading slides word-for-word
- Signal visual changes with narration
- Include sound effects and music notes
- Leave space for interaction or pause

**Narration Pacing:**
- About 130-150 words per minute for engaging pace
- Faster pace for energetic content
- Slower pace for complex concepts
- Pause for 2-3 seconds when transitioning
- Let important points sink in (pause 3+ seconds)

## Interaction Design Principles

Create meaningful, purposeful interactions that support learning.

**Interaction Types & Learning Value:**

**Drag-and-Drop**
- Purpose: Sorting, organizing, matching
- Learning value: Active engagement, categorization
- When to use: Taxonomy organization, process sequencing
- Example: Drag communication approaches into "High Risk" vs. "Low Risk" categories

**Click to Reveal**
- Purpose: Progressive disclosure, controlled pacing
- Learning value: Engagement, reduces cognitive load
- When to use: Building complexity, storytelling
- Example: Click each step to reveal "How to handle this situation"

**Buttons & Navigation**
- Purpose: Learner control, pacing
- Learning value: Agency, allows reflection time
- When to use: All modules (basic requirement)
- Example: "Next," "Review," "Resources," "Exit"

**Decision Trees/Branching**
- Purpose: Scenario exploration, consequence understanding
- Learning value: Critical thinking, decision-making practice
- When to use: Complex decision-making, scenario practice
- Example: Choose an approach; follow branching consequences

**Hotspots**
- Purpose: Pointing out details, annotation
- Learning value: Directs attention, interactive exploration
- When to use: Identifying components, labeled diagrams
- Example: Click parts of a customer interaction to learn dos and don'ts

**Simulations & Practice**
- Purpose: Apply learning, receive immediate feedback
- Learning value: Highest—allows safe practice
- When to use: Skills, procedures, judgment
- Example: Role-play difficult conversation; get feedback on your approach

**Interactivity Principles:**
- Every interaction should serve a learning purpose (not just decoration)
- Feedback should be immediate and specific
- Allow learners to try, fail safely, and learn
- Avoid excessive clicking that doesn't add value
- Test interactions for usability
- Ensure accessibility (keyboard navigation, clear instructions)

## Accessibility in eLearning

Design inclusive content accessible to all learners.

**Web Content Accessibility Guidelines (WCAG) Essentials:**

**1. Perceivable**
- Provide text alternatives for images (alt text)
- Provide captions and transcripts for audio and video
- Provide sufficient color contrast (4.5:1 for text)
- Don't rely on color alone to convey information
- Allow users to adjust text size
- Use simple, clear language

**2. Operable**
- Make all functions accessible via keyboard (not just mouse)
- Provide skip navigation options
- Ensure clickable elements are large enough (44x44 pixels minimum)
- Avoid content that flashes (risk of seizures)
- Give learners control over timing and autoplay
- Allow navigation between all elements

**3. Understandable**
- Use clear, simple language
- Define technical jargon
- Use headings and structure logically
- Be consistent in navigation and terminology
- Make instructions clear
- Minimize surprises (like auto-opening windows)

**4. Robust**
- Use proper HTML structure
- Ensure compatibility with assistive technologies
- Test with screen readers
- Validate code
- Support multiple browsers

**Accessibility Checklist:**
- [ ] All images have descriptive alt text
- [ ] Videos have captions and transcripts
- [ ] Audio content has captions/transcript
- [ ] Color contrast meets WCAG AA standards
- [ ] Text is resizable without loss of functionality
- [ ] Navigation is keyboard accessible
- [ ] Buttons and links are clearly labeled
- [ ] Form fields are properly labeled
- [ ] Content is in logical reading order
- [ ] Tested with screen reader software
- [ ] Course tested with multiple assistive devices
- [ ] Estimated completion time is provided
- [ ] No content flashes more than 3 times per second

**Plain Language Examples:**
- "Use" instead of "utilize"
- "Help" instead of "facilitate"
- "End" instead of "terminate"
- "Now" instead of "currently"
- Short paragraphs, clear headings

## Quality Assurance Checklist

Verify eLearning quality before launch.

**Content Accuracy & Completeness:**
- [ ] All information is accurate and current
- [ ] Spelling and grammar checked
- [ ] Terminology is consistent throughout
- [ ] Citations and sources are accurate
- [ ] Examples are relevant and clear
- [ ] Learning objectives are met
- [ ] All promised content is included
- [ ] No broken references or links

**Instructional Design:**
- [ ] Learning objectives are clear and measurable
- [ ] Content flows logically
- [ ] Appropriate for target audience level
- [ ] Pace is neither too fast nor too slow
- [ ] Interactive elements support learning objectives
- [ ] Feedback is specific and constructive
- [ ] Assessment questions align to objectives
- [ ] Difficulty progresses appropriately

**Technical Quality:**
- [ ] All media (video, audio, images) plays correctly
- [ ] Interactions work as designed
- [ ] Branching logic functions correctly
- [ ] Links open proper destinations
- [ ] Animations run smoothly
- [ ] File sizes are optimized for download
- [ ] Course works in all required browsers
- [ ] Mobile responsive (if applicable)
- [ ] SCORM compliance (if required)
- [ ] Course bookmarks save progress
- [ ] Timer functions correctly (if applicable)

**User Experience:**
- [ ] Navigation is intuitive
- [ ] Instructions are clear
- [ ] Visual design is professional and engaging
- [ ] Color contrast is accessible
- [ ] Text is readable (font size, face)
- [ ] Minimize technical jargon
- [ ] Transitions are smooth
- [ ] Loading times are reasonable
- [ ] No dead ends or confusion points
- [ ] Exit and navigation options are clear

**Accessibility:**
- [ ] Screen reader compatible
- [ ] Keyboard navigable
- [ ] Alt text for all images
- [ ] Captions for video and audio
- [ ] Sufficient color contrast
- [ ] Text resizable without loss of function
- [ ] No flashing content
- [ ] Form fields properly labeled
- [ ] Tested with assistive technologies

**Testing Protocol:**
- Functional testing (does everything work?)
- Usability testing (is it easy to use?)
- Accessibility testing (can everyone access it?)
- Browser compatibility testing
- Device testing (desktop, tablet, mobile)
- Performance testing (load times)
- Learner testing (pilot with sample audience)

**Launch Readiness:**
- [ ] All QA items checked off
- [ ] Pilot feedback incorporated
- [ ] Technical support plan in place
- [ ] Learner support materials prepared
- [ ] Facilitator guide ready (if blended)
- [ ] Evaluation plan established
- [ ] All systems tested and backed up
