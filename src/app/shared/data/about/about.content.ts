export interface AboutPartnerImage {
  alt: string;
  width: number;
  height: number;
  src: string;
  srcsetAvif: string;
  srcsetWebp: string;
  sizes: string;
}

/** Rendered width of a partner photo: ~500px on desktop, ~44vw on tablet, near full-width on mobile. */
const PARTNER_IMAGE_SIZES = '(min-width: 1024px) 500px, (min-width: 768px) 44vw, calc(100vw - 80px)';

export interface AboutPartner {
  name: string;
  titles: string[];
  email: string;
  bio: string;
  image?: AboutPartnerImage;
}

export const ABOUT_STORY = {
  heading: 'Om Skovgaard & Heide VVS',
  paragraphs: [
    'Vi er en mindre VVS-virksomhed med base i Dragør og fokus på København og omegn — med samme engagement over for private og erhverv.',
    'Bag os står 16 års erfaring. Vi går op i kvalitet, tydelige aftaler og personlig kontakt fra første henvendelse til færdigt arbejde.',
  ],
} as const;

export const ABOUT_PARTNERS: AboutPartner[] = [
  {
    name: 'Oliver Skovgaard Rasmussen',
    titles: ['Indehaver'],
    email: 'oliver@shvvs.dk',
    bio: 'Oliver har mange års praktisk erfaring i branchen og står for solid rådgivning og ordentligt håndværk — også når opgaven er kompleks.',
    image: {
      alt: 'Oliver Skovgaard Rasmussen, indehaver hos Skovgaard & Heide VVS',
      width: 800,
      height: 800,
      src: '/images/employees/oliver-skovgaard-800.webp',
      srcsetAvif:
        '/images/employees/oliver-skovgaard-400.avif 400w, /images/employees/oliver-skovgaard-800.avif 800w, /images/employees/oliver-skovgaard-1200.avif 1200w',
      srcsetWebp:
        '/images/employees/oliver-skovgaard-400.webp 400w, /images/employees/oliver-skovgaard-800.webp 800w, /images/employees/oliver-skovgaard-1200.webp 1200w',
      sizes: PARTNER_IMAGE_SIZES,
    },
  },
  {
    name: 'Nikolai Heide',
    titles: ['Indehaver', 'Autoriseret VVS-installatør'],
    email: 'nikolai@shvvs.dk',
    bio: 'Nikolai sørger for struktur i projekter og tæt dialog med kunder, så forløbet er overskueligt fra tilbud til aflevering.',
    image: {
      alt: 'Nikolai Heide, indehaver og autoriseret VVS-installatør hos Skovgaard & Heide VVS',
      width: 800,
      height: 800,
      src: '/images/employees/nikolai-heide-800.webp',
      srcsetAvif:
        '/images/employees/nikolai-heide-400.avif 400w, /images/employees/nikolai-heide-800.avif 800w, /images/employees/nikolai-heide-1200.avif 1200w',
      srcsetWebp:
        '/images/employees/nikolai-heide-400.webp 400w, /images/employees/nikolai-heide-800.webp 800w, /images/employees/nikolai-heide-1200.webp 1200w',
      sizes: PARTNER_IMAGE_SIZES,
    },
  },
];
