---
name: inventory-tracker
description: >
  Track veterinary medication and supply inventory with reorder alerts and
  cost optimization. This skill should be used when the user asks about
  "inventory levels", "reorder supplies", "medication stock", "what do we
  need to order", "inventory report", "expired medications", "controlled
  substance log", "supply costs", "vendor comparison", or needs help with
  any veterinary inventory management.
version: 1.0.0
---

# Inventory Tracker

Medication and supply reorder alerts, controlled substance tracking, and cost optimization for veterinary practices.

## Inventory Categories for Vet Clinics

### Vaccines
**Core canine:** Rabies, DHPP/DA2PP (distemper, adenovirus, parainfluenza, parvovirus)
**Non-core canine:** Bordetella, Leptospirosis, Lyme (Borrelia), Canine Influenza (H3N2/H3N8)
**Core feline:** Rabies, FVRCP (rhinotracheitis, calicivirus, panleukopenia)
**Non-core feline:** FeLV (feline leukemia)

Storage: refrigerated 35-45°F. Track lot numbers and expiration dates. First-in, first-out (FIFO).

### Parasiticides (High Revenue Category)
Heartworm prevention (oral, topical, injectable — ProHeart), flea/tick (oral: Simparica, NexGard, Bravecto; topical: Frontline, Revolution), dewormers (pyrantel, fenbendazole, praziquantel)

Stock by weight class. Track sizes: extra-small, small, medium, large, extra-large.

### Controlled Substances (DEA-Regulated)
Schedule II: hydromorphone, fentanyl
Schedule III: ketamine, butorphanol, buprenorphine, testosterone
Schedule IV: diazepam, midazolam, alprazolam, phenobarbital, tramadol (some states)
Schedule V: gabapentin (some states)

**DEA Requirements:**
- Maintain a bound log (or approved electronic system) for all Schedule II-V substances
- Log every use: date, patient name, amount used, amount wasted, administering DVM, witness for waste
- Physical count reconciliation: recommended weekly, required at minimum per state law
- Discrepancies must be reported and investigated immediately
- Store in a double-locked cabinet (Schedule II) or locked cabinet (III-V)
- DEA-222 forms for Schedule II procurement
- Maintain records for minimum 2 years (check state — some require longer)

### Pharmaceuticals
Antibiotics (amoxicillin, clavamox, doxycycline, metronidazole, enrofloxacin, cephalexin)
NSAIDs (carprofen/Rimadyl, meloxicam, deracoxib/Deramaxx, grapiprant/Galliprant)
Steroids (prednisone, dexamethasone, triamcinolone)
Anesthetics (propofol, sevoflurane, isoflurane, lidocaine)
Emergency drugs (epinephrine, atropine, doxapram)

### Diagnostics
SNAP tests (4Dx Plus, FeLV/FIV, parvo, pancreatic lipase), cytology supplies, urinalysis supplies, reference lab submission supplies, in-house chemistry/CBC reagents and consumables

### Surgical Supplies
Suture materials (by type and size), surgical gloves, drapes, blade handles and blades, endotracheal tubes, IV catheters, fluid sets

## Par Level Setting

Calculate par levels based on:
- **Average weekly usage** × **Lead time in weeks** + **Safety stock**
- Safety stock = 1-2 weeks of average usage
- Seasonal adjustment: increase par 20-30% for seasonal products during peak months

Example: If you use 15 units of heartworm prevention per week, lead time is 1 week, and safety stock is 1 week of supply:
Par level = (15 × 1) + 15 = 30 units minimum on hand

## Cost Optimization Strategies

1. **Buying groups** — Join a GPO (Group Purchasing Organization) like PSIvet, GPOM, or your state VMA buying program for 5-15% discounts
2. **Manufacturer rebates** — Track and submit rebate claims monthly (Zoetis, Boehringer Ingelheim, Merck, Elanco programs)
3. **Bulk purchasing** — Buy 3-month supply of high-turn items for volume discounts
4. **Generic alternatives** — Where clinically appropriate (e.g., generic carprofen vs. branded)
5. **Reduce waste** — Track expired product; if expiration write-offs exceed 2% of inventory cost, reduce order quantities
6. **Inventory turnover target** — Aim for 10-12 turns per year. Below 8 means overstocking; above 14 means risk of stockouts

## Reference Files

- **`references/reorder-checklist.md`** — Weekly and monthly inventory check procedures
