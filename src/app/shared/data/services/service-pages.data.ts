export interface ServicePageSection {
  heading: string;
  paragraphs: string[];
}

export interface ServicePage {
  slug: 'badevaerelse' | 'varme-fjernvarme' | 'service-akut' | 'erhverv';
  path: string;
  documentTitle: string;
  metaDescription: string;
  heading: string;
  lede: string;
  sections: ServicePageSection[];
}

const BATHROOM: ServicePage = {
  slug: 'badevaerelse',
  path: '/ydelser/badevaerelse',
  documentTitle: 'Badeværelse VVS i København | Skovgaard & Heide VVS',
  metaDescription:
    'Autoriseret VVS til badeværelse i København og omegn. Nyt bad, ombygning og installation. Vi kører fra Dragør. Ring 30 14 45 14.',
  heading: 'Autoriseret VVS til badeværelse i København',
  lede: 'Skal badet laves om, eller drypper det? Skovgaard & Heide VVS tager vand, afløb og varme i badeværelset. Vi kører fra Dragør og hjælper i København og omegn. Vi er autoriseret VVS-installatør og medlem af TEKNIQ.',
  sections: [
    {
      heading: 'Det hjælper vi med på badeværelset',
      paragraphs: [
        'Vi laver blandt andet nyt toilet og vask, bruseniche i stedet for badekar, blandingsbatterier, gulvafløb, rør i rummet og radiator. Det kan være ét armature — eller et bad, der skal laves om fra bunden.',
        'Vi kommer ud og ser på det. Bagefter sender vi et skriftligt tilbud. Vi går ikke i gang, før du har sagt ja.',
        'Vi kører fra Dragør. Opgaven kan ligge i København eller i omegnen. Skriv til os, hvad du gerne vil have lavet — så tager vi det derfra.',
      ],
    },
    {
      heading: 'Sådan foregår det',
      paragraphs: [
        'Ring eller skriv til os. Vi aftaler et besøg i almindelig arbejdstid. Er der en læk, der ikke kan vente, siger du det, når du ringer.',
        'Når du siger ja til tilbuddet, finder vi en tid. Har du andre håndværkere på sagen, koordinerer vi gerne. Vi rydder op og varsler naboerne, før vandet bliver lukket.',
        'Når vi er færdige, viser vi dig hanerne, afløbet og hvor du lukker for vandet. Bagefter kan du ringe, hvis noget skal ses efter.',
      ],
    },
    {
      heading: 'Tryghed og næste skridt',
      paragraphs: [
        'Autorisationen betyder, at Sikkerhedsstyrelsen har godkendt virksomheden. Vi er medlem af TEKNIQ, så arbejdet kan være dækket af garantifonden, hvis opgaven ikke kan gøres færdig.',
        'Vil du have et tilbud? Skriv til os eller ring, og send gerne et par billeder. Fortæl om det er andelsbolig, ejerlejlighed eller hus. Telefon man–fre 07–16. - Akut: Ring døgnet rundt på 30 14 45 14.',
        'Weendam Allé 1, 2791 Dragør. CVR 46 49 70 66.',
      ],
    },
  ],
};

const HEAT: ServicePage = {
  slug: 'varme-fjernvarme',
  path: '/ydelser/varme-fjernvarme',
  documentTitle: 'Varme og fjernvarme i København | Skovgaard & Heide VVS',
  metaDescription:
    'Fjernvarme, radiatorer og varmt vand i København og omegn. Autoriseret VVS. Vi kører fra Dragør. Ring 30 14 45 14.',
  heading: 'Varme og fjernvarme i København og omegn',
  lede: 'Kolde radiatorer, ujævn varme eller et anlæg, der skal ses efter? Skovgaard & Heide VVS tager varmen i ejendomme og huse. Vi kører fra Dragør og hjælper i København og omegn. Vi er autoriseret VVS-installatør og medlem af TEKNIQ.',
  sections: [
    {
      heading: 'Når nogle rum er kolde — og andre for varme',
      paragraphs: [
        'Vi hjælper, når varmen ikke er jævn: nogle rum er kolde, andre for varme. Det tager vi, når vi kommer ud — i etageejendomme og i huse.',
        'Vi kører fra Dragør og tager opgaver i København og omegn. Skriv til os, hvad der sker, og hvilken bygning det er. Så kigger vi på det sammen med dig.',
        'Det kan være en enkelt radiator, et helt stigestreng, eller et hus hvor anlægget skal ses efter. Vi kigger på det, når vi er der.',
      ],
    },
    {
      heading: 'Radiatorer, gulvvarme og varmt vand',
      paragraphs: [
        'Vi hjælper blandt andet med radiatorer, termostater, fjernvarmeunit, rens af anlæg og gulvvarme i badet. Vi skifter det, der er i stykker, og får varmen til at køre igen.',
        'Mangler du varmt vand i hanen, kigger vi på beholder og anlæg, når vi er der. Det kan også være et eftersyn, inden fyringssæsonen, eller et anlæg der skal skiftes. Tilbuddet kommer, når vi har set det.',
        'Planlagt arbejde kører vi man–fre 07–16.',
        'Ring, hvis det er akut på: 30 14 45 14.',
      ],
    },
    {
      heading: 'Tryghed og næste skridt',
      paragraphs: [
        'Varme er autoriseret arbejde. TEKNIQ-medlemskabet og garantifonden er den samme tryghed som på vores øvrige sager. CVR 46 49 70 66. Weendam Allé 1, 2791 Dragør.',
        'Skriv til os med et par billeder, så kommer tilbuddet, når vi har set det. Ring evt. på 30 14 45 14.',
      ],
    },
  ],
};

const SERVICE: ServicePage = {
  slug: 'service-akut',
  path: '/ydelser/service-akut',
  documentTitle: 'Akut VVS og service i København | Skovgaard & Heide VVS',
  metaDescription:
    'Akut VVS i København og omegn 24/7 og planlagt service i dagtimerne. Autoriseret installatør. Vi kører fra Dragør. Ring 30 14 45 14.',
  heading: 'Akut VVS og service i København',
  lede: 'Hanen drypper, eller vandet fosser? Skovgaard & Heide VVS kører akut og tager almindelig service. Vi kører fra Dragør og hjælper i København og omegn. Ring 30 14 45 14. Vi er autoriseret VVS-installatør og medlem af TEKNIQ.',
  sections: [
    {
      heading: 'Akut hjælp og almindelig service',
      paragraphs: [
        'Ring 30 14 45 14, hvis vandet fosser, der er rørbrud, toilet der løber over, stoppet kloak, sprunget slange under vasken, utæt radiator, vand i loftet eller varme der svigter i frostvejr.',
        'Vi stopper skaden og siger, om vi kan gøre det færdigt med det samme, eller om vi skal tilbage. Vi kører fra Dragør til adresser i København og omegn — døgnet rundt.',
        'Dryppende haner, toiletter der løber og pakninger tager vi også. Planlagt service booker vi man–fre 07–16.',
        'Akut ring på: 30 14 45 14.',
      ],
    },
    {
      heading: 'Eksempler på service, vi tager',
      paragraphs: [
        'Udskiftning af slanger og pakninger, cisterner, afspærringsventiler og mindre reparationer, mens vi er der. I etageejendomme tager vi også fælles afspærring og kælder, når det hører til opgaven.',
        'Til udlejere og små erhverv laver vi gerne faste servicebesøg. Når du ringer igen, er det det samme firma, der kommer.',
      ],
    },
    {
      heading: 'Pris, og hvordan du ringer',
      paragraphs: [
        'Timepris, startpris og akuttillæg står på forsiden. Vi siger prisen, før vi går i gang, når det kan vurderes. Finder vi noget skjult, stopper vi og aftaler næste skridt. Autorisationen og TEKNIQ-garantifonden er den samme som på planlagte sager. CVR 46 49 70 66. Weendam Allé 1, 2791 Dragør.',
        'Har du husdyr, en smal kældertrappe eller en ejerforening, der skal varsles? Sig det, når du ringer.',
        'Sig adressen, hvor vandet kan lukkes, og hvad der sker.',
        'Akut: Ring 30 14 45 14 døgnet rundt.',
      ],
    },
  ],
};

const COMMERCIAL: ServicePage = {
  slug: 'erhverv',
  path: '/ydelser/erhverv',
  documentTitle: 'VVS til erhverv i København | Skovgaard & Heide VVS',
  metaDescription:
    'VVS til butikker, kontorer og ejendomme i København og omegn. Autoriseret installatør. Vi kører fra Dragør. Ring 30 14 45 14.',
  heading: 'VVS til erhverv i København',
  lede: 'Butik, kontor eller udlejning? I har de samme rør, men andre krav til tid, faktura og adgang. Skovgaard & Heide VVS tager erhverv. Vi kører fra Dragør og hjælper i København og omegn. Vi er autoriseret VVS-installatør og medlem af TEKNIQ. CVR 46 49 70 66.',
  sections: [
    {
      heading: 'Det hjælper vi erhverv med',
      paragraphs: [
        'Vi tager blandt andet toilet og tekøkken på kontoret, vand og afløb i butik og café, fælles rør i udlejningsejendomme og akut læk, så I kan holde åbent.',
        'Vi hjælper også klinikker, lager og kantine med installation og reparation. Har I flere adresser, kan vi køre dem som faste servicebesøg.',
        'Andels- og ejerforeninger ringer om fælles anlæg, varmt vand og lejligheder, der skal have VVS. Skriv til os eller ring med opgaven. Telefon 30 14 45 14.',
        'Vi kører fra Dragør. Opgaven kan ligge i København eller i omegnen. Adgang, gågade og kældertrappe aftaler vi, når vi kender adressen.',
      ],
    },
    {
      heading: 'Faktura og den tryghed, I skal kunne vise frem',
      paragraphs: [
        'I får CVR på fakturaen og en tydelig specifikation. Ingen skjulte gebyrer for kørsel i zonen bagefter.',
        'TEKNIQs garantifond er relevant, hvis I skal vise udlejer, bank eller forsikring, at arbejdet er udført af en medlemvirksomhed. Nøgler og adgang aftales på forhånd.',
      ],
    },
    {
      heading: 'Sådan kommer I i gang',
      paragraphs: [
        'Planlagt arbejde booker vi i almindelig arbejdstid. Akut læk tager vi, når I ringer. Telefon 30 14 45 14 man–fre 07–16, akut døgnet rundt.',
        'Skriv til os med adresse og hvordan vi kommer ind, eller ring. I behøver ikke have afklaret omfanget på forhånd. Vi vurderer opgaven, når vi har talt med jer — og I får et tilbud, inden vi går i gang. Vi kører fra Dragør i hele København og omegn.',
      ],
    },
  ],
};

export const SERVICE_PAGES: ServicePage[] = [BATHROOM, HEAT, SERVICE, COMMERCIAL];

const PAGES_BY_SLUG = new Map(SERVICE_PAGES.map((page) => [page.slug, page]));

export function servicePageBySlug(slug: string | null | undefined): ServicePage | undefined {
  if (!slug) {
    return undefined;
  }

  return PAGES_BY_SLUG.get(slug as ServicePage['slug']);
}

export function servicePageWordCount(page: ServicePage): number {
  return [page.lede, ...page.sections.flatMap((section) => section.paragraphs)].join(' ').split(/\s+/).filter(Boolean)
    .length;
}
