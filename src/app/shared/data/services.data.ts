import { type ServiceItem } from '../models/service-item.model';

export const SERVICES: ServiceItem[] = [
  {
    title: 'VVS-installation',
    description: 'Vi udfører alle former for VVS-installationer i høj kvalitet.',
  },
  {
    title: 'Varme & fjernvarme',
    description: 'Vi installerer og servicerer varmeanlæg og fjernvarme.',
  },
  {
    title: 'Badeværelser',
    description: 'Vi skaber funktionelle og stilrene badeværelser efter dine ønsker.',
  },
  {
    title: 'Service & reparation',
    description: 'Hurtig og effektiv service – vi er klar, når du har brug for os.',
  },
  {
    title: 'Erhverv',
    description: 'Vi tilbyder løsninger til erhverv – stort som småt.',
  },
];

/** Shorter grouped cards shown only below the `sm` breakpoint. */
export const MOBILE_SERVICES: ServiceItem[] = [
  {
    title: 'Installation & varme',
    description: 'VVS-installation, varmeanlæg og fjernvarme.',
  },
  {
    title: 'Badeværelser',
    description: 'Funktionelle og stilrene badeværelser efter dine ønsker.',
  },
  {
    title: 'Service & erhverv',
    description: 'Hurtig reparation og løsninger til private og erhverv.',
  },
];
