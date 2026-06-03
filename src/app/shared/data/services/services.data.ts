import { type ServiceItem } from '../../models/service-item.model';

export const SERVICES: ServiceItem[] = [
  {
    title: 'VVS-installation',
    description: 'Professionelle installationer til bolig og erhverv — planlagt og udført ordentligt.',
  },
  {
    title: 'Varme & fjernvarme',
    description: 'Varmeløsninger til private hjem og erhvervsejendomme — installation og service.',
  },
  {
    title: 'Badeværelser',
    description: 'Komplette badeværelsesprojekter til bolig og erhverv — funktion og finish i orden.',
  },
  {
    title: 'Service & reparation',
    description: 'Hurtig hjælp til private og erhverv, når noget skal virke igen.',
  },
  {
    title: 'Erhverv',
    description: 'VVS til kontorer, butikker og ejendomme — samme kvalitet som til boliger.',
  },
];

/** Shorter grouped cards shown only below the `sm` breakpoint. */
export const MOBILE_SERVICES: ServiceItem[] = [
  {
    title: 'Installation & varme',
    description: 'Bolig og erhverv — VVS, varme og fjernvarme.',
  },
  {
    title: 'Badeværelser',
    description: 'Komplette badeværelser til bolig og erhverv.',
  },
  {
    title: 'Service & erhverv',
    description: 'Akut service og større projekter — til private og erhverv.',
  },
];
