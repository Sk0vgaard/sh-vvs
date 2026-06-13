# Fortegnelse over behandlingsaktiviteter — kunder og hjemmesidebesøgende

Fortegnelse udarbejdet efter [Datatilsynets skabelon for kunder](https://www.datatilsynet.dk/regler-og-vejledning/gdpr-univers-for-smaa-virksomheder/trin-1-skab-overblik) og vejledningen om [fortegnelse (art. 30)](https://www.datatilsynet.dk/regler-og-vejledning/fortegnelse).

**Virksomhed:** Skovgaard & Heide VVS ApS  
**CVR:** 46 49 70 66  
**Adresse:** Weendam Allé 1, 2791 Dragør  
**Kontakt:** kontakt@shvvs.dk  
**Sidst opdateret:** 13. juni 2026

> Virksomheder med under 250 ansatte er som udgangspunkt undtaget fra pligten til at føre fortegnelse (GDPR art. 30, stk. 5), medmindre behandlingen medfører risiko, ikke er lejlighedsvis, eller omfatter særlige kategorier. Datatilsynet anbefaler alligevel en ordnet oversigt — denne fortegnelse opfylder det.

---

## Databehandleraftaler (på plads)

| Databehandler                  | Aftale              |
| ------------------------------ | ------------------- |
| Google Firebase / Google Cloud | Google Cloud DPA    |
| Simply.com                     | Databehandleraftale |
| Ordrestyring                   | Databehandleraftale |

---

## Aktivitet 1: Henvendelser via kontaktformular (shvvs.dk)

| Felt                                | Beskrivelse                                                                                                                |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| **Formål**                          | Modtage og besvare henvendelser, udarbejde tilbud, forberede evt. kundeforhold                                             |
| **Kategorier af registrerede**      | Hjemmesidebesøgende / potentielle kunder (private og erhverv)                                                              |
| **Kategorier af personoplysninger** | Navn, vejnavn, postnummer, telefonnummer, e-mail, emne, beskrivelse af opgave, evt. billeder af VVS-forhold                |
| **Kategorier af modtagere**         | Google Firebase (hosting/backend), Simply.com (e-mail), interne medarbejdere hos dataansvarlig                             |
| **Overførsel til tredjelande**      | Firebase/Google: primært EU (europe-west1). Eventuel overførsel dækket af Google Cloud DPA og standardkontraktbestemmelser |
| **Sletningsfrist**                  | Henvendelser uden kundeforhold: senest **24 måneder** efter sidste kontakt                                                 |
| **Retsgrundlag**                    | Samtykke (art. 6, stk. 1, litra a) og/eller foranstaltninger forud for kontrakt (litra b)                                  |
| **Sikkerhedsforanstaltninger**      | HTTPS, adgangskontrol hos leverandører, begrænset adgang internt, e-mail via Simply.com                                    |

---

## Aktivitet 2: Kundedata i Ordrestyring

| Felt                                | Beskrivelse                                                                            |
| ----------------------------------- | -------------------------------------------------------------------------------------- |
| **Formål**                          | Administration af kundeforhold, ordrer, service og garanti                             |
| **Kategorier af registrerede**      | Kunder (private og erhverv)                                                            |
| **Kategorier af personoplysninger** | Navn, adresse, telefonnummer, e-mail, ordrehistorik, opgavebeskrivelser, evt. billeder |
| **Kategorier af modtagere**         | Ordrestyring (databehandler), interne medarbejdere                                     |
| **Overførsel til tredjelande**      | Afhænger af Ordrestyring — verificer i databehandleraftale                             |
| **Sletningsfrist**                  | Kundeforhold + **2 år**; regnskabsdata **5 år** (bogføringsloven)                      |
| **Retsgrundlag**                    | Kontraktopfyldelse (art. 6, stk. 1, litra b) og legitim interesse (litra f)            |
| **Sikkerhedsforanstaltninger**      | Adgangskontrol i Ordrestyring, stærke adgangskoder, begrænset adgang efter rolle       |

---

## Aktivitet 3: E-mailkorrespondance (Simply.com)

| Felt                                | Beskrivelse                                                   |
| ----------------------------------- | ------------------------------------------------------------- |
| **Formål**                          | Kommunikation med kunder og henvendelser via kontakt@shvvs.dk |
| **Kategorier af registrerede**      | Kunder, potentielle kunder, samarbejdspartnere                |
| **Kategorier af personoplysninger** | Navn, e-mail, telefonnummer, indhold af henvendelser          |
| **Kategorier af modtagere**         | Simply.com (databehandler), interne medarbejdere              |
| **Overførsel til tredjelande**      | Verificer i Simply.com databehandleraftale                    |
| **Sletningsfrist**                  | Som aktivitet 1 og 2 afhængigt af kundeforhold                |
| **Retsgrundlag**                    | Kontraktopfyldelse og legitim interesse                       |
| **Sikkerhedsforanstaltninger**      | Simply.com hosting, adgangskontrol på mailkonti               |

---

## Aktivitet 4: Drift af hjemmeside (Firebase Hosting)

| Felt                                | Beskrivelse                                               |
| ----------------------------------- | --------------------------------------------------------- |
| **Formål**                          | Udstille hjemmeside, sikre drift og beskytte mod misbrug  |
| **Kategorier af registrerede**      | Hjemmesidebesøgende                                       |
| **Kategorier af personoplysninger** | IP-adresse, browsertype, tidspunkt for besøg (serverlogs) |
| **Kategorier af modtagere**         | Google Firebase (databehandler)                           |
| **Overførsel til tredjelande**      | Primært EU; Google Cloud DPA                              |
| **Sletningsfrist**                  | Kort opbevaring i serverlogs, automatisk sletning         |
| **Retsgrundlag**                    | Legitim interesse (art. 6, stk. 1, litra f)               |
| **Sikkerhedsforanstaltninger**      | HTTPS, Firebase Hosting, EU-region                        |

---

## Aktivitet 5: Cookie-samtykke

| Felt                                | Beskrivelse                                                   |
| ----------------------------------- | ------------------------------------------------------------- |
| **Formål**                          | Overholde cookiebekendtgørelsen, huske besøgendes cookie-valg |
| **Kategorier af registrerede**      | Hjemmesidebesøgende                                           |
| **Kategorier af personoplysninger** | Cookie-valg, tidsstempel, consent-ID (via `cc_cookie`)        |
| **Kategorier af modtagere**         | Ingen — lagres lokalt i besøgendes browser                    |
| **Overførsel til tredjelande**      | Ingen                                                         |
| **Sletningsfrist**                  | **12 måneder**, derefter vises banner igen                    |
| **Retsgrundlag**                    | Samtykke og teknisk nødvendighed                              |
| **Sikkerhedsforanstaltninger**      | Kun nødvendig cookie, ingen statistik/marketing               |

---

## Procedurer (trin 5 i GDPR-universet)

| Situation                         | Handling                                                                                     |
| --------------------------------- | -------------------------------------------------------------------------------------------- |
| **Anmodning om indsigt/sletning** | Mail til kontakt@shvvs.dk — besvar inden 30 dage                                             |
| **Datainbrud**                    | Dokumentér hændelsen, vurder om melding til Datatilsynet/registrerede er påkrævet (72 timer) |
| **Nye databehandlere**            | Indgå DPA før brug, opdatér denne fortegnelse og privatlivspolitik                           |
| **Nye cookies/tracking**          | Opdatér CMP, privatlivspolitik, bump `COOKIE_CONSENT_REVISION`                               |

---

## Vedligeholdelse

Gennemgå fortegnelsen mindst **årligt** og ved ændringer i systemer, leverandører eller formål.

**Relaterede dokumenter:**

- [Privatlivspolitik](/privatliv) — `src/app/shared/data/privacy/privacy-policy.content.ts`
- [Cookie-compliance tjekliste](./gdpr-cookie-compliance.md)
- [Datatilsynet: GDPR-univers for små virksomheder](https://www.datatilsynet.dk/regler-og-vejledning/gdpr-univers-for-smaa-virksomheder)
