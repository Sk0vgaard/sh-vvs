# 0006 — Sektion Garanti & priser

**Type:** AFK  
**Triage:** `ready-for-agent`

## Parent

[PRD: Complete marketing site](../prd/0001-marketing-site-complete.md)

## What to build

Replace the placeholder in the **Garanti & priser** scroll section with full content: all canonical prices with correct **inkl./ekskl. moms** labels, TEKNIQ garantifond membership with link to https://www.tekniq.dk/, **forsikret**, **autoriseret VVS-installatør**, **16 års samlet erfaring**, and short copy on work guarantee plus optional service agreements.

Introduce **PricingDisplayModel** (pure formatting from numeric config) and **TrustContent** static bundle. Presentational price/trust cards; data in shared data modules per ADR-0001.

## Acceptance criteria

- [ ] Section displays: timepris 869 inkl. moms; akut fra 2.700 ekskl. moms; første time 1.195 inkl. under 2 timer; serviceaftale fra 1.995 inkl. moms/år
- [ ] Moms labeling is correct per price type
- [ ] TEKNIQ garantifond linked; insured and authorization visible
- [ ] 16 years combined experience mentioned
- [ ] PricingDisplayModel unit tests cover moms labels
- [ ] Section reachable via nav from 0005

## Blocked by

- [0005 — Navigation: Om os og Garanti & priser](0005-section-nav-about-garanti.md)

## User stories covered

14, 15, 16, 28, 35, 36, 41
