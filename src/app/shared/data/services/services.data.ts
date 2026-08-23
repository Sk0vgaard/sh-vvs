import { type ServiceItem } from '../../models/service-item.model';

export const SERVICES: ServiceItem[] = [
  {
    title: 'VVS-installation',
    description: 'Professionelle installationer til bolig og erhverv — når det skal gøres rigtigt.',
  },
  {
    title: 'Varme & fjernvarme',
    description: 'Varmeløsninger til private hjem og erhvervsejendomme — installation og service.',
    href: '/ydelser/varme-fjernvarme',
  },
  {
    title: 'Badeværelser',
    description: 'Komplette badeværelsesprojekter til bolig og erhverv — funktion og finish i orden.',
    href: '/ydelser/badevaerelse',
  },
  {
    title: 'Akut service & reparation',
    description: 'Hurtig hjælp til private og erhverv — når uheldet er ude og skal løses hurtigt.',
    href: '/ydelser/service-akut',
  },
  {
    title: 'Erhverv',
    description: 'VVS til kontorer, butikker og ejendomme — samme kvalitet som til boliger.',
    href: '/ydelser/erhverv',
  },
];
