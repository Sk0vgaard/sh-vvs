# 0001 — Hero: Ring, Skriv og kanalvejledning

**Type:** AFK  
**Triage:** `ready-for-agent`

## Parent

[PRD: Complete marketing site](../prd/0001-marketing-site-complete.md)

## What to build

Update the home hero so the site's two primary goals are obvious: **call** and **write**. Add a primary **Ring** control (`tel:` link to the business phone) and **Skriv** that scrolls/navigates to the contact area (form or contact section anchor). Refresh hero copy to reflect **50/50 private and commercial** customers. Add short guidance distinguishing **acute** (call, especially 16–07) from **non-urgent** inquiries (form/mail).

Introduce a **PhoneHoursPolicy** deep module: pure functions with an injectable clock for tests. It encodes Mon–Fri 07–16 open phone, emergency 16–07 on all days including weekends and public holidays (holidays follow the weekend/emergency path). The hero may use a subset of this messaging; the same module will be reused in the contact section slice.

Keep branding as S&H / Skovgaard & Heide VVS ApS per the existing logo. Follow ADR-0001: presentational hero UI, minimal page wiring.

## Acceptance criteria

- [ ] Hero shows prominent Ring and Skriv CTAs; Ring uses the canonical phone number and works on mobile
- [ ] Hero copy states equal focus on private and commercial customers
- [ ] Hero includes brief acute vs non-urgent channel guidance (do not direct acute users to the form)
- [ ] PhoneHoursPolicy unit tests cover weekday open hours, evening/weekend emergency path, and holiday treated as emergency path
- [ ] Existing reduced-motion scroll behavior is not regressed
- [ ] Vitest tests added or updated for policy logic (and hero behavior where practical without testing template internals)

## Blocked by

None — can start immediately

## User stories covered

1, 3, 4, 5, 18, 25, 38, 43, 44
