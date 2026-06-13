export interface PrivacyPolicySection {
  id?: string;
  heading: string;
  paragraphs: string[];
}

export const PRIVACY_POLICY_TITLE = 'Privatlivspolitik';

export const PRIVACY_POLICY_LAST_UPDATED = '13. juni 2026';

export const PRIVACY_POLICY_CONTACT_EMAIL = 'kontakt@shvvs.dk';

export const PRIVACY_POLICY_SECTIONS: PrivacyPolicySection[] = [
  {
    heading: 'Dataansvarlig',
    paragraphs: [
      'Skovgaard & Heide VVS ApS (CVR 46 49 70 66) er dataansvarlig for behandlingen af de personoplysninger, vi modtager via shvvs.dk.',
      'Adresse: Weendam Allé 1, 2791 Dragør. E-mail: kontakt@shvvs.dk.',
    ],
  },
  {
    heading: 'Hvilke oplysninger indsamler vi',
    paragraphs: [
      'Via kontaktformularen kan vi modtage navn, vejnavn, postnummer, telefonnummer, e-mail, emne, beskrivelse af opgaven og eventuelle billeder, du vedhæfter.',
      'Når du besøger hjemmesiden, kan vores hosting-udbyder automatisk registrere tekniske oplysninger såsom IP-adresse, browsertype og tidspunkt for besøget i serverlogs. Disse oplysninger bruges udelukkende til drift og sikkerhed.',
      'Vi bruger desuden en nødvendig cookie til at huske dit valg om cookies på hjemmesiden. Se afsnittet om cookies nedenfor.',
    ],
  },
  {
    heading: 'Formål og retsgrundlag',
    paragraphs: [
      'Vi behandler oplysninger fra kontaktformularen for at besvare din henvendelse, give tilbud og — hvis du bliver kunde — registrere og administrere kundedata i vores ordresystem (Ordrestyring). Retsgrundlag: samtykke (GDPR art. 6, stk. 1, litra a) og/eller foranstaltninger forud for en kontrakt (litra b).',
      'Tekniske serverlogs behandles for at sikre stabil drift og beskyttelse mod misbrug. Retsgrundlag: legitim interesse (GDPR art. 6, stk. 1, litra f).',
      'Cookie-samtykke behandles for at overholde cookiebekendtgørelsen og dokumentere dit valg. Retsgrundlag: samtykke.',
    ],
  },
  {
    id: 'cookies',
    heading: 'Cookies og samtykke',
    paragraphs: [
      'Vi bruger cookies og tilsvarende teknologier i overensstemmelse med cookiebekendtgørelsen og GDPR.',
      'Nødvendige cookies: Vi sætter en cookie (cc_cookie) for at huske, om du har accepteret eller afvist cookies. Den udløber efter 12 måneder. Vi bruger ingen statistik- eller marketing-cookies.',
      'Du kan til enhver tid ændre eller trække dit cookie-samtykke tilbage via linket "Cookie-indstillinger" i sidefoden eller knappen nedenfor. Det skal være lige så let at trække samtykket tilbage, som det var at give det.',
    ],
  },
  {
    heading: 'Databehandlere',
    paragraphs: [
      'Vi bruger betroede leverandører til drift af hjemmesiden og håndtering af henvendelser:',
      'Google Firebase (Google Ireland Ltd.) — hosting af hjemmesiden og backend til kontaktformularen. Data behandles i EU (region europe-west1), hvor det er muligt.',
      'Simply.com — e-mail-udbyder til afsendelse og modtagelse af e-mail til og fra kontakt@shvvs.dk.',
      'Ordrestyring — ordresystem til registrering og administration af kundedata, når en henvendelse udvikler sig til et kundeforhold.',
      'Vi har indgået databehandleraftaler med Google (Firebase/Google Cloud DPA), Simply.com og Ordrestyring. Leverandørerne behandler kun data efter vores instruks og til de formål, der fremgår af denne politik.',
    ],
  },
  {
    heading: 'Opbevaring',
    paragraphs: [
      'Henvendelser via kontaktformularen, der ikke udvikler sig til et kundeforhold, slettes senest 24 måneder efter sidste kontakt.',
      'Kundedata i Ordrestyring opbevares, så længe kundeforholdet består, og herefter i op til 2 år med henblik på garanti, reklamation og likvidationspligtige opgaver.',
      'Regnskabsmateriale opbevares i 5 år i henhold til bogføringsloven.',
      'Cookie-samtykke opbevares i op til 12 måneder, hvorefter du bliver bedt om at træffe et nyt valg.',
      'Tekniske serverlogs opbevares i kort tid af sikkerheds- og driftsmæssige årsager og slettes derefter automatisk.',
    ],
  },
  {
    heading: 'Overførsel til tredjelande',
    paragraphs: [
      'Vi tilstræber behandling inden for EU/EØS. Vores hosting (Firebase) er konfigureret til EU-region. Google og Simply.com kan i visse tilfælde behandle data med tilknytning til USA; i så fald sker det på grundlag af EU-Kommissionens standardkontraktbestemmelser eller tilsvarende lovlige garantier.',
    ],
  },
  {
    heading: 'Dine rettigheder',
    paragraphs: [
      'Du har ret til indsigt, berigtigelse, sletning, begrænsning af behandling, indsigelse og dataportabilitet i det omfang reglerne giver dig det.',
      'Hvis behandlingen sker på baggrund af samtykke, kan du til enhver tid trække dit samtykke tilbage. Det berører ikke lovligheden af behandlingen inden tilbagetrækningen.',
      'Kontakt os på kontakt@shvvs.dk, hvis du vil gøre brug af dine rettigheder. Vi svarer normalt inden for 30 dage.',
      'Du kan klage til Datatilsynet (datatilsynet.dk), hvis du er uenig i vores behandling af dine oplysninger.',
    ],
  },
  {
    heading: 'Ændringer',
    paragraphs: [
      'Vi kan opdatere denne privatlivspolitik, når vores behandling ændrer sig eller reglerne kræver det. Den til enhver tid gældende version findes på shvvs.dk/privatliv. Ved væsentlige ændringer vil vi gøre opmærksom på det på hjemmesiden.',
    ],
  },
];
