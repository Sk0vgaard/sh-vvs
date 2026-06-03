export interface AboutPartner {
  name: string;
  titles: string[];
  email: string;
  bio: string;
}

export const ABOUT_STORY = {
  heading: 'Om Skovgaard & Heide VVS',
  paragraphs: [
    'Vi er en mindre VVS-virksomhed med base i Dragør og fokus på København og omegn — med samme engagement over for private og erhverv.',
    'Bag os står 16 års samlet erfaring. Vi går op i kvalitet, tydelige aftaler og personlig kontakt fra første henvendelse til færdigt arbejde.',
  ],
} as const;

export const ABOUT_PARTNERS: AboutPartner[] = [
  {
    name: 'Oliver Skovgaard Rasmussen',
    titles: ['Indehaver'],
    email: 'oliver@shvvs.dk',
    bio: 'Oliver har mange års praktisk erfaring i branchen og står for solid rådgivning og ordentligt håndværk — også når opgaven er kompleks.',
  },
  {
    name: 'Nikolai Heide',
    titles: ['Indehaver', 'Autoriseret VVS-installatør'],
    email: 'nikolai@shvvs.dk',
    bio: 'Nikolai sørger for struktur i projekter og tæt dialog med kunder, så forløbet er overskueligt fra tilbud til aflevering.',
  },
];
