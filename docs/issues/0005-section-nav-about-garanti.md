# 0005 — Navigation: scroll til Om os og Garanti & priser

**Type:** AFK  
**Triage:** `ready-for-agent`

## Parent

[PRD: Complete marketing site](../prd/0001-marketing-site-complete.md)

## What to build

Fix single-page navigation so **Om os** and **Garanti & priser** (renamed from **Referencer**) are real scroll targets with dedicated URL paths, matching how Services and Contact already work. Extend section identifiers, `HOME_SECTIONS` (or equivalent), routes, and nav link data. Update header/mobile nav labels: **Referencer → Garanti & priser**.

Ensure **PageNavigationService** scrolls to new section IDs with existing reduced-motion behavior. Sections may render minimal placeholders in this slice if body content is delivered in 0006/0007 — but anchors, routes, and nav must work end-to-end.

English code identifiers for section IDs; Danish UI labels.

## Acceptance criteria

- [ ] Nav shows Garanti & priser (not Referencer) and Om os with correct hrefs (not `/` only)
- [ ] Direct URLs for new sections scroll to the correct anchor
- [ ] Services and Contact navigation still work
- [ ] Nav link tests updated (no stale References label)
- [ ] Placeholder section shells exist so scroll targets are not empty document roots

## Blocked by

None — can start immediately

## User stories covered

17, 23, 39
