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
    'Autoriseret VVS til badeværelse i København og omegn. Nyt bad, ombygning og installation fra Dragør. Ring 30 14 45 14 for tilbud.',
  heading: 'Autoriseret VVS til badeværelse i København',
  lede: 'Et nyt badeværelse i København er sjældent kun fliser og armatur. Skjulte rør, vådrum og ejerforeningens skakte afgør, hvad der overhovedet kan lade sig gøre. Skovgaard & Heide VVS tager vand, afløb og varme i badet — fra Dragør ind til byen. Vi er autoriseret VVS-installatør. Vi er medlem af TEKNIQ.',
  sections: [
    {
      heading: 'Hvorfor badeværelser i København er deres egen opgave',
      paragraphs: [
        'Mange bade i indre by og på broerne er bygget, før der var krav om vådrumsmembran, og før fjernvarmen lå i kælderen som i dag. Et “nyt badeværelse” betyder derfor ofte, at vi skal finde frem til, om vand og afløb kan flyttes, om sløjfen til håndklædetørreren hænger sammen med radiatoranlægget, og om ejerforeningen overhovedet tillader at åbne skakte. Det er ikke den samme opgave som et nybyggeri i omegnen, og vi planlægger ud fra den bygning, du faktisk bor i.',
        'Vi starter med besigtigelse. Oliver Skovgaard Rasmussen eller Nikolai Heide kommer ud, ser på eksisterende installationer og siger tydeligt, hvad der er VVS, og hvad murer eller elektriker skal tage. Du får et skriftligt tilbud, før vi henter materialer. Vi arbejder ikke med åbne regninger, medmindre du selv beder om timepris på uforudset arbejde bag væggen.',
        'Typiske opgaver i København er nyt toilet og håndvask i ældre etageejendomme, bruseniche i stedet for badekar, gulvvarme hvor det kan tilsluttes forsvarligt, og udskiftning af skjulte kobberrør, der er begyndt at syre. På Amager og i Dragør ser vi oftere parcelhuse, hvor hele badeværelset kan tømmes, og hvor vi kan trække nye rør i krybekælder eller skunk.',
      ],
    },
    {
      heading: 'Hvad autorisation og TEKNIQ betyder for dit bad',
      paragraphs: [
        'Vand og afløb i et badeværelse er ikke gør-det-selv-arbejde, når det sidder fast på den faste installation. Autorisationen betyder, at Sikkerhedsstyrelsen har godkendt virksomheden, og at Nikolai Heide har det faglige ansvar. Det er den samme ramme, forsikring og bank kigger efter, hvis noget senere går galt.',
        'Vi er medlem af TEKNIQ Arbejdsgiverne. På badeværelsesprojekter betyder det konkret, at arbejdet kan være dækket af TEKNIQs garantifond, hvis firmaet ikke kan færdiggøre opgaven. Det er ikke en erstatning for en god kontrakt, men det er en ekstra sikkerhed, som mange københavnske boligkøbere og andelsforeninger spørger til.',
        'Når vi er færdige, gennemgår vi haner, afløb og eventuel gulvvarme med dig. Du får at vide, hvad du selv må justere, og hvornår du skal ringe. Vi efterlader ikke et bad, hvor kun vi ved, hvor afspærringen sidder.',
      ],
    },
    {
      heading: 'Sådan kører et badeværelsesforløb fra Dragør',
      paragraphs: [
        'Du ringer eller skriver. Vi aftaler besigtigelse i København eller omegn inden for almindelig arbejdstid, medmindre der er en akut læk, der ikke kan vente. Efter besigtigelsen sender vi tilbud med materialer, timeomfang og forudsætninger — for eksempel at skjulte rør er i den stand, vi kunne se.',
        'Når du siger ja, booker vi ud fra din og håndværkerkædens kalender. Vi koordinerer med din murer, hvis du har en, eller vi siger ærligt, hvis opgaven kræver en vådrumsuddannet samarbejdspartner, vi kender. Vi møder til tiden. Hvis en leverance glipper, ringer vi samme dag — ikke dagen efter, når du står i en tom lejlighed.',
        'Under udførelsen er Oliver eller Nikolai dit faste ansigt. Du skal ikke igennem et callcenter for at høre, om rørene er kommet. Vi rydder op efter os i opgangen. I etageejendomme varsler vi vandlukning, så naboerne ikke opdager det, når de står i badet.',
        'Efter aflevering kan du købe en serviceaftale, eller du kan bare ringe, hvis hanen begynder at dryppe. Vi kender installationen, fordi vi selv har sat den op. Det er en af grundene til, at vi ikke jager opgaver i hele landet: vi vil kunne køre fra Dragør og være der, mens du stadig er sur over dryppet.',
      ],
    },
    {
      heading: 'Hvem vi er, og hvordan du kommer i gang',
      paragraphs: [
        'Skovgaard & Heide VVS ApS er et lille autoriseret firma. Vi er autoriseret VVS-installatør. Oliver Skovgaard Rasmussen driver opgaverne sammen med ham. CVR 46 49 70 66. Adressen er Weendam Allé 1, 2791 Dragør. Telefon man–fre 07–16, akut 24/7 på 30 14 45 14.',
        'Vil du have et tilbud på badeværelse i København, så skriv via kontaktformularen eller ring. Vedhæft gerne et par billeder af det eksisterende bad og skriv, om det er andelsbolig, ejerlejlighed eller hus. Det sparer en runde gætteri og giver et ærligt tilbud første gang.',
      ],
    },
  ],
};

const HEAT: ServicePage = {
  slug: 'varme-fjernvarme',
  path: '/ydelser/varme-fjernvarme',
  documentTitle: 'Varme og fjernvarme i København | Skovgaard & Heide VVS',
  metaDescription:
    'Fjernvarme, radiatorer og varmtvandsbeholdere i København og omegn. Autoriseret VVS fra Dragør. Ring 30 14 45 14.',
  heading: 'Varme og fjernvarme i København og omegn',
  lede: 'København varmer primært med fjernvarme. Det lyder enkelt, indtil veksleren i kælderen larmer, radiatorerne er kolde i den ene side, eller HOFOR kræver, at anlægget bringes i orden. Skovgaard & Heide VVS arbejder med fjernvarmeunits, radiatoranlæg og varmt brugsvand i etageejendomme og parcelhuse fra Dragør og ind til byen. Vi er autoriseret VVS-installatør. Vi er medlem af TEKNIQ.',
  sections: [
    {
      heading: 'Fjernvarme i praksis — ikke kun en rød pibe',
      paragraphs: [
        'Et fjernvarmeanlæg i en københavnsk kælder er et samspil mellem veksler eller unit, pumper, ventiler og den måde, bygningen er indreguleret på. Når nogle lejligheder koger, og andre fryser, er det sjældent “bare at skru op”. Vi måler frem og retur, ser på indregulering og finder, om fejlen sidder i unit, i stigstrenge eller i den enkelte radiator.',
        'I villaer og rækkehuse i Dragør, Tårnby og omegn ser vi oftere enhedsanlæg i bryggers eller kælder. Her er opgaven tit udskiftning af en ældre unit, ny varmtvandsbeholder eller bedre afkøling, så du ikke betaler for at sende unødig varme tilbage til nettet. Vi forklarer, hvad måleren betyder, uden at du skal være ingeniør.',
        'Vi rører ikke ved gassiden, og vi sælger ikke varmepumper som universalløsning, bare fordi det er på mode. Hvis dit hus i omegnen stadig har gas, siger vi, hvad VVS-delen kræver, og hvem der skal tage resten. Ærlig afgrænsning er en del af autorisationen.',
      ],
    },
    {
      heading: 'Radiatorer, gulvvarme og varmt vand',
      paragraphs: [
        'Skæve radiatorer, defekte termostater og slamdede anlæg er hverdag i ældre københavnske ejendomme. Vi spuler, udskifter ventiler og sætter anlægget i balance, så den øverste etage ikke skal have alle haner åbne for at den nederste kan holde varmen. Det er kedeligt arbejde. Det er også det, der får varmeregningen og komforten til at hænge sammen.',
        'Gulvvarme i badeværelset kobles ofte på det eksisterende anlæg. Det kræver, at rørføring og regulering er tænkt med, ellers får du et gulv, der svinger, og et anlæg, der synger. Vi siger nej, hvis konstruktionen ikke kan bære det — hellere det end en reklamation næste vinter.',
        'Varmt brugsvand er den anden halvdel: beholdere, blandingsventiler og risiko for legionella, hvis temperaturen drives for langt ned. Vi sætter temperatur og cirkulation, så du har varmt vand i hanen uden at koge rørene. I små lejligheder kan en gennemstrømningsløsning være rigtig; i huse med flere bade er det ofte en beholder. Vi vælger ud fra forbrug, ikke ud fra det, der ligger på hylden.',
      ],
    },
    {
      heading: 'TEKNIQ, ansvar og kørslen fra Dragør',
      paragraphs: [
        'Varmeinstallationer hører under den autoriserede del af faget. Nikolai Heide har det faglige ansvar. Oliver Skovgaard Rasmussen er med på opgaverne ude. I kældre og teknikrum i København møder du os to, ikke et hold, du aldrig har set før.',
        'TEKNIQ-medlemskabet og garantifonden er den samme ramme som på vores øvrige arbejde: du skal kunne stole på, at der står en virksomhed bag, hvis noget går i stå. CVR 46 49 70 66. Adresse Weendam Allé 1, 2791 Dragør.',
        'Vi kører man–fre 07–16 til planlagt varmearbejde. Akut: hvis veksleren drypper ned i kælderen om natten, ringer du 30 14 45 14. Planlagt eftersyn booker du i dagtimerne, så vi kan have de rigtige pakninger med. Om vinteren prioriterer vi kolde lejligheder i København før kosmetiske radiatorudskiftninger i Dragør — omvendt, når det er plusgrader, og du hellere vil have anlægget i stand inden næste fyringssæson.',
      ],
    },
    {
      heading: 'Book besigtigelse',
      paragraphs: [
        'Skriv, hvilken bygning det er (ejerforening, andelsbolig, hus), hvad der sker (kolde radiatorer, høj regning, støj, intet varmt vand), og om du har billeder af unit eller kælder. Vi vender tilbage med et forslag til besigtigelse i København eller omegn. Tilbuddet kommer, når vi har set anlægget. Varme gættes ikke fra et foto alene. HOFOR-krav, afkøling og indregulering i ældre brokvarterer er en anden samtale end en ny unit i et hus i Dragør — sig hvilken bygning det er, så vi ikke møder op med den forkerte pakning.',
      ],
    },
  ],
};

const SERVICE: ServicePage = {
  slug: 'service-akut',
  path: '/ydelser/service-akut',
  documentTitle: 'Akut VVS og service i København | Skovgaard & Heide VVS',
  metaDescription:
    'Akut VVS i København 24/7 og planlagt service i dagtimerne. Autoriseret installatør fra Dragør. Ring 30 14 45 14.',
  heading: 'Akut VVS og service i København',
  lede: 'En brudt slange under vasken klokken tre om natten er en anden opgave end et årligt eftersyn. Skovgaard & Heide VVS tager begge dele: akut udrykning i København og omegn, og almindelig service, når hanen drypper i dagslys. Vi kører fra Dragør. Telefonen er 30 14 45 14. Vi er autoriseret VVS-installatør. Firmaet er medlem af TEKNIQ.',
  sections: [
    {
      heading: 'Hvad der tæller som akut — og hvad der kan vente til i morgen',
      paragraphs: [
        'Akut er vand, der ikke kan stoppes, kloak der løber tilbage, eller varme der forsvinder midt i en frostnat. Så ringer du. Vi afspærrer, limer ikke med et midlertidigt hack, der skjuler fejlen, og vi siger, om vi kan gøre det færdigt med det samme, eller om vi skal tilbage i dagslys med de rigtige dele.',
        'En dryppende hane, et toilet der løber, eller en radiator, der ikke vil, er service. Det skal laves, men det er sjældent tre om natten. Vi booker det man–fre 07–16 og holder tiden. Akut-tillægget er til, når du har brug for os uden for det vindue — ikke til at gøre en almindelig reparation dyrere, fordi du ringer sent af bekvemmelighed. Vi siger det, hvis opgaven kan vente.',
        'I etageejendomme i København er den første handling ofte at finde fælles afspærring, så naboerne ikke vågner til vand i loftet. Vi kender typiske kælderskakte på Amager og i de indre bydele. Vi varsler, når det kan lade sig gøre. Når det ikke kan, prioriterer vi at stoppe skaden.',
      ],
    },
    {
      heading: 'Serviceaftaler og det, vi ser igen og igen',
      paragraphs: [
        'De fleste gentagne fejl er små: perlatorer, pakninger, cisterner, fleksible slanger, der burde have været skiftet for tre år siden. Vi udskifter, inden de brister, hvis vi alligevel er der. Det er billigere end en vandskade i parketten hos naboen under dig.',
        'En årlig serviceaftale dækker eftersyn af synlige installationer, afspærringer og det, vi kan nå uden at rive vægge ned. Den er frivillig. Vi presser den ikke på, hvis du hellere vil ringe, når noget sker. For udlejere og små erhvervslejemål i København giver aftalen mening, fordi I ikke selv går kældrene igennem.',
        'Oliver Skovgaard Rasmussen og Nikolai Heide tager servicekørslerne selv. Du får ikke en ny lærling hver gang, som skal lære, hvor din hovedhane sidder. Det er pointen med et lille firma i Dragør, der bevidst ikke dækker hele Sjælland.',
      ],
    },
    {
      heading: 'Pris, TEKNIQ og det, du skal vide, før vi kommer',
      paragraphs: [
        'Timepris, startpris og akuttillæg står på forsiden. Akut arbejde uden for man–fre 07–16 følger den sats, vi har offentliggjort. Vi siger prisen, før vi går i gang, når det overhovedet kan vurderes. En skjult læk bag fliser kan ændre omfanget; så stopper vi og aftaler næste skridt.',
        'Autorisationen dækker den faste installation. TEKNIQ-medlemskabet og garantifonden er den samme tryghed som på planlagte sager. CVR 46 49 70 66. Weendam Allé 1, 2791 Dragør.',
        'Når du ringer, så sig: adresse i København eller omegn, om vandet kan afspærres, og om det drypper eller fosser. Et foto hjælper, hvis du kan tage det uden at sætte dig selv i fare. Vi siger, om vi kan komme, og hvornår. Har du husdyr, smalle kældernedgange eller en ejerforening, der kræver varsling, så sig det med det samme — det ændrer, hvor hurtigt vi kan være der, og om vi skal have en nabo til at åbne.',
      ],
    },
    {
      heading: 'Ring eller skriv',
      paragraphs: [
        'Akut: 30 14 45 14, døgnet rundt. Andet: kontaktformularen eller samme nummer i dagtimerne. Vi svarer direkte som mennesker, der selv skal køre ud — ikke som en vagtcentral, der sælger din sag videre til tre underleverandører. Bor du på Christianshavn, i Nordvest eller ude i Dragør, så sig det: kørslen er kort, men parkering og opgange i København tager tid, og vi planlægger efter det. Hvis det kan vente til mandag morgen, så sig det gerne — så kører vi uden akuttillæg i den almindelige åbningstid.',
      ],
    },
  ],
};

const COMMERCIAL: ServicePage = {
  slug: 'erhverv',
  path: '/ydelser/erhverv',
  documentTitle: 'VVS til erhverv i København | Skovgaard & Heide VVS',
  metaDescription:
    'VVS til butikker, kontorer og ejendomme i København. Autoriseret installatør fra Dragør. Ring 30 14 45 14.',
  heading: 'VVS til erhverv i København',
  lede: 'Butikker, kontorer, caféer og boligudlejning i København har de samme rør som boliger — og helt andre krav til tid, faktura og adgang. Skovgaard & Heide VVS tager erhvervsopgaver i byen og omegn fra basen i Dragør. Vi er et lille autoriseret firma, ikke en landsdækkende entreprise. Det er en fordel, når du vil have Nikolai Heide eller Oliver Skovgaard Rasmussen i røret, og en begrænsning, hvis du søger 40 mand i morgen. TEKNIQ-medlem. CVR 46 49 70 66.',
  sections: [
    {
      heading: 'Hvilke erhvervsopgaver vi tager — og hvilke vi lader ligge',
      paragraphs: [
        'Vi laver toiletkerner i mindre kontorer, fedtudskillere og gulvafløb i lette madsteder, hvor det hører under VVS, udskiftning af vandvarmere i butikker og den løbende drift i udlejningsejendomme, hvor viceværten kender os. Vi siger nej til hospitalsanlæg, store industriprocesser og opgaver, der kræver egentlig entreprise med underleverandører i kæde. Hellere et ærligt nej end et ja, vi ikke kan bære.',
        'I København er adgang det halve arbejde: gågader, kældertrapper, tidsrum, hvor butikken har lukket, og naboer der skal varsles. Vi planlægger uden for jeres travleste timer, når det kan lade sig gøre. En café, der ikke kan have lukket vand midt i frokosten, får en tid om morgenen eller efter lukketid — det koster det, det koster, og det står i tilbuddet.',
        'For andels- og ejerforeninger er opgaven ofte fælles stigstrenge, varmtvandsbeholdere i kælder og den ene lejlighed, der trækker resten skævt. Vi kan være VVS-faglig på den slags, så bestyrelsen ikke skal gætte. Vi er ikke jeres administrator, og vi blander os ikke i vedtægter.',
      ],
    },
    {
      heading: 'Faktura, autorisation og TEKNIQ',
      paragraphs: [
        'Erhvervskunder får CVR på fakturaen, tydelig specifikation og den time- og materialemodel, I har sagt ja til. Vi arbejder ikke med skjulte gebyrer for “kørsel i zonen”, der først dukker op bagefter. Kørsel fra Dragør indgår i den aftale, vi har skrevet.',
        'Autorisationen er den samme som til private: den faste installation. Nikolai Heide har det faglige ansvar. TEKNIQs garantifond er relevant for jer, hvis I skal dokumentere over for udlejer, bank eller forsikring, at arbejdet er udført af en medlemvirksomhed. Det erstatter ikke jeres egen driftssikring, men det er et konkret papir, indkøb ofte spørger efter.',
        'Vi gemmer ikke jeres nøgler i en skuffe uden kvittering. Adgang aftales. Hvis I har en sløjfeordning, følger vi den. Hvis I ikke har, foreslår vi en, der er til at huske.',
      ],
    },
    {
      heading: 'Drift i København fra et firma i Dragør',
      paragraphs: [
        'Vi dækker København og omegn, ikke hele Sjælland. Det er bevidst. En serviceaftale til tre lejemål i Indre By og på Amager kan vi holde. En kæde med tyve adresser fra Helsingør til Køge skal I finde et større hus til. Vi anbefaler gerne videre, hvis opgaven er for stor.',
        'Oliver Skovgaard Rasmussen og Nikolai Heide er dem, I møder. Der er ikke tre lag sælger, projektleder og montør, der ikke har talt sammen. Det betyder også, at vi kan være optaget. Vi lover ikke “inden for to timer” til planlagt erhverv, medmindre det er en akut læk. Til gengæld møder vi, når vi har sagt, vi møder.',
        'Adresse: Weendam Allé 1, 2791 Dragør. Telefon 30 14 45 14 man–fre 07–16, akut 24/7. Skriv til kontakt@shvvs.dk, hvis I vil have et tilbud på en konkret adresse i København. Vedhæft plantegning eller fotos af teknikrum, hvis I har dem.',
      ],
    },
    {
      heading: 'Næste skridt',
      paragraphs: [
        'Send beliggenhed, bygningsart og om opgaven er akut, drift eller ombygning. Vi svarer med, om det ligger inden for det, vi tager, og med et forslag til besigtigelse. Hvis vi ikke er det rigtige firma, siger vi det i første mail — ikke efter tre møder. En butik på Strøget, et kontor på Islands Brygge og en udlejning i Dragør er tre forskellige logistikker; jo mere præcist I beskriver adgang og tidspunkter, jo mindre gætteri ligger der i prisen.',
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
