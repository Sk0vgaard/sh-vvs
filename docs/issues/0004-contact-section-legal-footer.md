# 0004 — Kontaktsektion + juridisk footer

**Type:** AFK  
**Triage:** `ready-for-agent`

## Parent

[PRD: Complete marketing site](../prd/0001-marketing-site-complete.md)

## What to build

Add a dedicated **contact section** (not only the footer strip) that consolidates: one phone number with **Mon–Fri 07–16** and **emergency 16–07** messaging (reuse **PhoneHoursPolicy** from 0001), email kontakt@shvvs.dk, weekday reply within 24 hours, service area **København og omegn** with larger jobs by agreement, and an **acute callout** consistent with the hero.

Expand the **footer** with legal identity: Skovgaard & Heide VVS ApS, CVR 46497066, Weendam Allé 1, 2791 Dragør as **postal address only** (no invitation to visit). Fix incorrect service-area copy (e.g. "hele Sjælland" → København og omegn). Keep clickable `tel:` and `mailto:` links.

Static data modules hold company/legal and hours copy; presentational blocks receive inputs per ADR-0001.

## Acceptance criteria

- [ ] Contact section visible on home with phone hours, emergency rules, email, response promise, and service area
- [ ] Footer shows legal name, CVR, postal address, phone, and email
- [ ] Address is presented as postal/CVR only, not "come visit"
- [ ] PhoneHoursPolicy drives consistent hours text with 0001
- [ ] Acute guidance present in contact section
- [ ] Tests updated for static data or policy-driven messaging where applicable

## Blocked by

- [0001 — Hero: Ring, Skriv og kanalvejledning](0001-hero-ring-skriv.md) (PhoneHoursPolicy module)

## User stories covered

4, 5, 9, 10, 27, 31, 37, 38, 42
