# 0003 — Kontaktformular: end-to-end (UI → backend → mail)

**Type:** AFK  
**Triage:** `ready-for-agent`

## Parent

[PRD: Complete marketing site](../prd/0001-marketing-site-complete.md)

## What to build

Deliver a full **contact form** on the home page contact area: full name, full address, phone, email, subject dropdown (emner 2–8 only — no Akut), description, optional **0–3 image** uploads with helper text for quotes/damage photos, and a **required GDPR checkbox** linking to the privacy policy page.

Implement **ContactFormModel** validation (Danish field errors) and a **ContactFormSubmissionGateway** abstraction. Production implementation sends multipart data to a **Firebase Cloud Function** (and Storage if needed for attachments) that emails a structured message to **kontakt@shvvs.dk** suitable for manual Ordrestyring registration. Do not use `mailto:` as the primary path.

UI states: loading, success (thank you + reply on **weekdays within 24 hours**), and error with retry. Show an **acute/emergency callout** beside the form directing users to call, not submit.

Container wires validation and gateway; form field UI stays presentational per ADR-0001.

## Acceptance criteria

- [ ] All required fields validated; submit blocked until valid and privacy checkbox checked
- [ ] Subject options match PRD (2–8); Akut is not offered
- [ ] 0–3 images accepted with sensible type/size limits; form works with zero images
- [ ] Successful submit shows Danish thank-you and weekday 24h response expectation
- [ ] Failed submit shows clear error without losing entered data where feasible
- [ ] Acute callout visible near the form with phone link
- [ ] Email received at kontakt@shvvs.dk includes all fields in readable structure (manual smoke test documented)
- [ ] Unit tests for validator; container tests with mocked gateway; submit not called when invalid
- [ ] Secrets/credentials are not committed; local dev path documented (emulator or test double)

## Blocked by

- [0002 — Privatlivspolitik-side (stub)](0002-privacy-policy-stub.md) (checkbox must link to live privacy route)

## User stories covered

2, 6, 8, 19, 20, 21, 24, 29, 30, 31, 34, 37
