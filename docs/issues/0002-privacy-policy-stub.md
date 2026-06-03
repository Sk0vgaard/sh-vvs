# 0002 — Privatlivspolitik-side (stub)

**Type:** AFK  
**Triage:** `ready-for-agent`

## Parent

[PRD: Complete marketing site](../prd/0001-marketing-site-complete.md)

## What to build

Add a dedicated **privacy policy** route (e.g. `/privatliv`) with a simple page layout matching site styling. Render a clearly labeled **stub** in Danish explaining that full policy text will be supplied by the business, with sections placeholders for: what data is collected (contact form fields and images), purpose (handling inquiries and Ordrestyring registration), retention, and contact for deletion requests.

Link to this page from the site footer. The route must be stable so the contact form checkbox (slice 0003) can link here.

Follow ADR-0001: presentational page content fed from static data where possible.

## Acceptance criteria

- [ ] `/privatliv` (or equivalent) route loads and is reachable from the footer
- [ ] Stub content is in Danish and marked as replaceable when client text arrives
- [ ] Page is accessible (heading structure, readable on mobile)
- [ ] No regression to existing home route behavior

## Blocked by

None — can start immediately

## User stories covered

7, 22
