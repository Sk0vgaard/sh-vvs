# PRD: Complete marketing site — contact, trust, pricing, about

Status: Ready for agent  
Triage: `ready-for-agent` (local PRD — not published to GitHub per project preference)

## Problem Statement

Skovgaard & Heide VVS ApS (brand S&H on the site, domain shvvs.dk) is a newly started plumbing company serving primarily Copenhagen and surrounding areas, with equal focus on residential and commercial customers. The current single-page Angular site has a hero, services list, and minimal footer contact links, but navigation promises sections that do not exist (About, References), the footer service-area copy is inaccurate, and there is no way for customers to submit structured inquiries with attachments for registration in Ordrestyring.

Customers need clear guidance on when to call versus write, visible phone hours and emergency coverage, transparent pricing, trust signals (authorized installer, TEKNIQ guarantee fund, insurance), and information about the two owners—without fake references. The business must receive form submissions at kontakt@shvvs.dk with enough customer data for Ordrestyring, while meeting GDPR expectations (checkbox plus privacy policy page).

## Solution

Extend the existing one-page marketing site into a complete scroll-based experience, delivered in business priority order: hero messaging, contact form and privacy policy, rich contact section, renamed **Garanti & priser** section (replacing empty References), **Om os**, then services copy review. Follow smart/dumb component separation (ADR-0001). Keep Danish user-facing copy and English code identifiers. Use static data modules for prices, hours, legal info, and form subjects. Implement server-side form delivery (not mailto) to support file attachments and reliable delivery to the shared inbox.

## User Stories

1. As a homeowner with a burst pipe at night, I want a prominent emergency call message with one phone number and 16–07 guidance, so that I do not submit a form and wait for email.
2. As a homeowner planning a bathroom renovation, I want to choose "Tilbud — badeværelse" in a contact form and attach up to three photos, so that the company can assess the job without an initial visit.
3. As a commercial client, I want to see that the company serves private and business customers equally, so that I trust them with a larger project.
4. As a visitor during weekday business hours, I want to know I can call 07–16 Monday–Friday on one number, so that I reach them during open phone time.
5. As a visitor on a weekend or public holiday, I want to understand that emergency coverage applies outside weekday 07–16 (same number, emergency rules), so that I do not expect routine phone service on the open line.
6. As a visitor who prefers writing, I want a contact form with subject, description, full name, full address, phone, and email, so that I can request quotes without calling.
7. As a visitor submitting the form, I want to confirm acceptance of privacy terms via checkbox with a link to a privacy policy page, so that the company can lawfully process my data and images.
8. As a visitor after submitting the form, I want a thank-you message stating replies happen on weekdays within 24 hours, so that I know what to expect.
9. As a visitor outside the primary service area, I want to see that work is mainly in København og omegn with larger jobs by agreement, so that I know whether to contact them.
10. As a visitor, I want the footer to show legal company name, CVR, postal address (not walk-in visits), phone, and email, so that I can verify the business.
11. As Oliver, I want my bio to present me as medejer and experienced autoriseret VVS-installatør, so that I do not appear inexperienced despite a new company.
12. As Nikolai, I want my bio with medindehaver and autoriseret VVS-installatør titles, so that both partners appear credible.
13. As a visitor, I want an About section with a shared company story and individual bios, with photo placeholders until photos are ready, so that the site can launch without portraits.
14. As a visitor, I want a **Garanti & priser** section showing time rate, emergency from-price, first-hour start price, and annual service agreement from-price with clear moms labeling, so that pricing is transparent.
15. As a visitor, I want to see membership in TEKNIQ guarantee fund with a link to tekniq.dk, plus insured status, so that I trust guarantees.
16. As a visitor, I want to see authorized installer and combined 16 years of experience across Oliver and Nikolai, so that trust does not depend on project references yet.
17. As a visitor, I want navigation to scroll to Services, About, Garanti & priser, and Contact with correct URLs, so that menu items are not dead links to `/`.
18. As a visitor on the hero, I want primary calls to action for calling and contacting/writing, so that the site's main business goals are obvious.
19. As a visitor, I want form subjects that exclude acute/emergency (subjects 2–8 only), so that emergencies are directed to phone.
20. As a staff member, I want form emails to kontakt@shvvs.dk with all fields structured for Ordrestyring registration, so that either partner can respond from the shared inbox.
21. As a staff member, I want optional image uploads limited to three files with helper text for quotes or damage photos, so that submissions stay manageable.
22. As a visitor, I want a dedicated privacy policy page (content supplied by the business), so that I can read how data and images are used.
23. As a visitor using reduced motion, I want section scrolling to respect prefers-reduced-motion, so that navigation remains accessible.
24. As a visitor on mobile, I want the contact form and phone CTAs usable on small screens, so that I can act immediately.
25. As a visitor, I want branding to remain S&H / Skovgaard & Heide VVS ApS as on the current site, so that branding is consistent.
26. As a visitor reading services, I want copy reviewed for 50/50 private and commercial balance, so that the services section matches business positioning.
27. As a visitor, I want the contact section to repeat phone hours, emergency guidance, email, weekday response promise, and service area, so that I do not hunt through the page for basics.
28. As a visitor, I want TEKNIQ guarantee fund and insurance called out in the trust/pricing area, so that guarantees are centralized.
29. As a visitor who cannot upload files, I want the form still submittable without images, so that I am not blocked.
30. As a visitor with invalid form data, I want inline validation errors in Danish, so that I can correct mistakes before submit.
31. As a visitor, I want an acute/emergency callout near the form and in the contact section, so that I do not use the form for emergencies.
32. As a future visitor, I want the architecture to allow adding real project references later without restructuring the site, so that phase-two content fits naturally.
33. As a visitor, I want about-section photos added later without layout breaking, so that placeholders reserve space appropriately.
34. As a staff member, I want failed form submission to show a clear error and retry path, so that customer inquiries are not lost silently.
35. As a visitor, I want prices to distinguish inkl. moms versus ekskl. moms correctly, so that I am not misled about emergency pricing.
36. As a visitor, I want service agreement "fra" pricing visible annually inkl. moms, so that I can compare maintenance options.
37. As a visitor, I want email kontakt@shvvs.dk visible alongside the form, so that I can choose direct email if preferred.
38. As a visitor, I want phone number +45 30 14 45 14 clickable, so that I can call from mobile.
39. As a visitor, I want About and Garanti & priser reachable from the header nav with scroll anchors, so that single-page navigation works like Services and Contact.
40. As an implementing agent, I want static configuration for prices, hours, subjects, and legal info separated from presentational components, so that copy updates do not require UI refactors.
41. As a visitor, I want guarantee on work and optional service agreements explained alongside TEKNIQ membership, so that I understand quality commitments.
42. As a visitor, I want the legal address shown as postal/CVR only without an invitation to visit, so that I do not arrive unannounced at Dragør.
43. As a visitor on a public holiday, I want phone rules to match weekend emergency behavior, so that expectations are consistent.
44. As a staff member, I want the hero to steer non-urgent leads to the form and urgent leads to the phone, so that channel choice matches operations.

## Implementation Decisions

### Business rules (canonical)

| Topic           | Decision                                                                                                                                           |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Primary goals   | Call and write (form/email)                                                                                                                        |
| Phone           | One number: +45 30 14 45 14                                                                                                                        |
| Open phone      | Mon–Fri 07–16                                                                                                                                      |
| Emergency phone | 16–07 all days including weekends and public holidays                                                                                              |
| Email response  | Weekdays, within 24 hours                                                                                                                          |
| Service area    | Primarily København og omegn; larger jobs by agreement                                                                                             |
| Customers       | 50/50 private and commercial                                                                                                                       |
| References      | None yet; menu **Referencer** becomes **Garanti & priser**                                                                                         |
| Trust           | Autoriseret VVS-installatør; forsikret; TEKNIQ garantifond (link tekniq.dk); 16 years combined experience                                          |
| Guarantee       | Work guarantee plus optional service agreements; TEKNIQ membership                                                                                 |
| Form inbox      | kontakt@shvvs.dk (shared)                                                                                                                          |
| Form fields     | Full name, full address, phone, email, subject, description, 0–3 images optional                                                                   |
| Form subjects   | Tilbud badeværelse; Tilbud varme/fjernvarme; Tilbud VVS-installation; Service & reparation; Erhverv/større projekt; Serviceaftale; Andet — no Akut |
| GDPR            | Required checkbox plus privacy policy page (client supplies text)                                                                                  |
| After submit    | Thank you plus weekday reply within 24 hours                                                                                                       |
| Legal           | Skovgaard & Heide VVS ApS; CVR 46497066; Weendam Allé 1, 2791 Dragør (postal only)                                                                 |
| About photos    | Later; placeholders in v1                                                                                                                          |
| Oliver bio      | Medejer plus erfaren autoriseret VVS-installatør                                                                                                   |
| Nikolai bio     | Medindehaver plus autoriseret VVS-installatør                                                                                                      |

### Pricing (Garanti & priser)

- Timepris: 869 kr. inkl. moms
- Akut: fra 2.700 kr. ekskl. moms
- Under 2 timer: første time 1.195 kr. inkl. moms
- Årlig serviceaftale: fra 1.995 kr. inkl. moms

### Delivery order (implementation phases)

1. Hero — Ring + Skriv, 50/50, acute vs form guidance
2. Contact form — Ordrestyring fields, attachments, GDPR, submission pipeline
3. Privacy policy — dedicated route and footer link; stub until client text
4. Contact section — hours, emergency box, mail, response promise, service area, legal footer fields
5. Garanti & priser — pricing plus trust content
6. Om os — shared story, bios, photo placeholders
7. Services — copy review for private/commercial balance

### Architecture (ADR-0001)

- Presentational components: hero CTAs, price display, about cards, form field UI, privacy layout, contact blocks — inputs and outputs only.
- Containers: form validation state, submission, section wiring.
- Page component: composes sections and scroll sync.
- Static data modules: company/legal, phone hours, prices, form subjects, trust bullets, about copy, nav labels, section identifiers.
- Extend scroll section model and route map for About and Garanti & priser (replace References concept in nav and section IDs).
- PageNavigationService remains responsible for scroll behavior; extend supported scroll section IDs.

### Deep modules

1. **PhoneHoursPolicy** — Pure functions with injectable clock for tests. Returns messaging context: open weekday phone (Mon–Fri 07–16), emergency-only (16–07 including weekends and holidays treated like weekend for emergency path).

2. **ContactFormModel and validator** — Fields: name, address, phone, email, subject enum (2–8), description, files 0–3 with type/size limits. Returns Danish field errors. No HTTP.

3. **ContactFormSubmissionGateway** — Interface: `submit(payload) => Promise<Success | Failure>`. Production implementation: multipart to server endpoint. Container depends on abstraction.

4. **PricingDisplayModel** — Formats numeric config to display strings with correct inkl./ekskl. moms labels per price type.

5. **TrustContent** — Static bundle: TEKNIQ, insured, authorization, experience — consumed by Garanti & priser and optionally hero.

### Form backend

- Do not use `mailto:` as primary flow.
- Firebase Cloud Function (or equivalent in Firebase project): validate payload, enforce file limits, email structured body to kontakt@shvvs.dk; optional Firebase Storage for attachments with links in email.
- Client: loading, success, error UI.
- Out of scope v1: Ordrestyring API; manual registration from email.

### Navigation and content fixes

- Rename nav **Referencer** → **Garanti & priser**; English section id in code, Danish label in UI.
- Wire **Om os** and Garanti & priser to real scroll paths and routes (not `/` only).
- Replace footer "hele Sjælland" with København og omegn plus by-agreement messaging.

### Privacy route

- Route such as `/privatliv` with link from form checkbox and footer.
- Render client policy when available; labeled stub acceptable until content delivery.

### Legacy folders

- Do not add new code under legacy atoms/molecules/organisms paths; use pages, shared/ui, containers per ADR-0001.

### Firebase

- App already initializes Firebase for hosting; add Functions (and Storage if needed) for forms. Secrets via existing generation pattern, not committed.

## Testing Decisions

**Good tests** assert observable behavior and pure logic, not template internals or private methods.

**Modules to test:**

- PhoneHoursPolicy — weekday open boundaries, evening/weekend/holiday emergency path.
- ContactFormModel/validator — required fields, email/phone format, subject enum, max three files, rejected file types.
- PricingDisplayModel — moms label per price type.
- Nav/section configuration — Garanti & priser label; About and trust section paths; no stale References label.
- Contact form container — mock gateway; success and error states; submit blocked when invalid.

**Optional:** Thin presentational form component output tests.

**Not required v1:** E2E; Cloud Functions CI unless emulators already wired.

**Prior art:** Existing Vitest specs for page navigation, nav links, services list, app header container.

**Owner confirmation:** Default v1 is pure logic plus mocked gateway; Cloud Functions integration tests only if explicitly requested.

## Out of Scope

- Real customer references, logos, project gallery (phase 2)
- Profile photos in About (placeholders only)
- Ordrestyring API or webhook
- SMS/push on new submissions
- Subject-based routing to Oliver vs Nikolai
- Separate acute phone number
- Akut as form subject
- Walk-in visitors at Dragør
- Multi-language site
- Blog, news, customer login
- Removing legacy organism folders unless incidentally touched

## Further Notes

### Client content still required

- Privacy policy (Danish)
- About: shared founding story; Oliver and Nikolai bio paragraphs
- Photos when ready
- TEKNIQ badge asset if required beyond text link

### Known codebase gaps

- NAV_LINKS: About and References point to `/` without sections
- ScrollSectionId: only Services and Contact today
- Footer service area contradicts business rule
- No contact form or privacy route
- Form backend not implemented

### Publishing

This PRD is stored locally at `docs/prd/0001-marketing-site-complete.md`. GitHub issues are not used for `/to-prd` in this repo.
