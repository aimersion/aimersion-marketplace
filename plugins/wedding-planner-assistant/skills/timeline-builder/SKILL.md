---
name: timeline-builder
description: >
  Build detailed wedding day timelines and vendor coordination schedules.
  This skill should be used when the user asks to "create a wedding timeline",
  "build a day-of schedule", "plan ceremony timing", "reception timeline",
  "vendor arrival schedule", "wedding day flow", "photo timeline",
  "getting ready schedule", "wedding itinerary", or needs help organizing
  the sequence of events for a wedding day.
version: 0.1.0
---

# Wedding Timeline Building

Create precise, professionally structured wedding day timelines that keep every vendor, member of the wedding party, and guest on track.

## Timeline Architecture

### Master Timeline Layers

Build three interlocking timelines:

1. **Couple & Wedding Party Timeline** — Getting ready, first look, ceremony, portraits, reception milestones, exit
2. **Vendor Timeline** — Load-in, setup, service windows, breakdown, load-out for each vendor
3. **Guest Experience Timeline** — Arrival, ceremony, cocktail hour, reception flow, send-off

### Standard Wedding Day Flow

Typical full-day timeline (adjust for specific wedding style and season):

**Getting Ready Phase** (4-5 hours before ceremony)
- Hair and makeup begin (bride + bridesmaids)
- Groom and groomsmen getting ready
- Detail shots (dress, rings, invitations, shoes)
- Individual portraits

**Pre-Ceremony** (1-2 hours before)
- First look (if applicable) — 30 min including travel
- Wedding party portraits — 30-45 min
- Family formals — 20-30 min
- Wedding party hidden/staged for processional

**Ceremony** (20-45 min typical)
- Guest seating begins — 30 min before start
- Processional — 5-8 min
- Ceremony — 15-30 min (varies by tradition)
- Recessional and receiving line (if applicable)

**Cocktail Hour** (60 min)
- Guests transition to cocktail space
- Couple does additional portraits (golden hour if timing works)
- Room flip from ceremony to reception (if same space)
- Band/DJ setup and sound check for reception

**Reception** (4-5 hours)
- Grand entrance and first dance — 10 min
- Welcome toast and blessing — 5-10 min
- Dinner service — 60-90 min
- Toasts/speeches (during or after dinner) — 15-20 min
- Parent dances — 10 min
- Cake cutting — 10 min
- Open dancing — 90-120 min
- Bouquet/garter toss (if applicable) — 10 min
- Last dance and send-off — 15 min

### Timing Buffer Rules

- Add 15-minute buffers between major transitions
- Photography always takes longer than expected — pad portrait sessions by 20%
- Ceremony start times should have a 10-minute grace period built in
- First vendor to arrive should be 2+ hours before ceremony
- Account for travel time between locations (getting ready, ceremony, reception if different venues)

### Vendor Coordination Schedule

For each vendor, specify:

| Vendor | Arrival | Setup Complete By | Service Window | Breakdown | Departure |
|--------|---------|------------------|---------------|-----------|-----------|
| Florist | 8:00 AM | 11:00 AM | Ceremony + Reception | After last dance | 11:30 PM |
| Photographer | 10:00 AM | N/A (mobile) | 10:00 AM - 10:00 PM | N/A | 10:00 PM |
| Caterer | 9:00 AM | 4:00 PM | Cocktail 5PM, Dinner 6:30PM | After dessert | 12:00 AM |

### Timeline Customization by Wedding Style

**Intimate/Elopement** (20-50 guests): Compress to 6-8 hours, skip cocktail hour, combine portraits with ceremony location.

**Traditional/Classic** (100-200 guests): Full timeline as outlined above, allocate extra time for family formals and receiving line.

**Destination** (any size): Add welcome event night-before, account for guest transportation logistics, build in weather contingency plan.

**Cultural/Religious** (varies): Research ceremony duration (some religious ceremonies run 60-90 min), accommodate specific traditions (hora, money dance, tea ceremony), plan for wardrobe changes.

## Reference Materials

- **`references/timeline-templates.md`** — Pre-built timeline templates by wedding size and style
