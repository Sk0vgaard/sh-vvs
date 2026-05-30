import { type NavLink } from '../models/nav-link.model';
import { HOME_SECTIONS } from './home-sections';

export const NAV_LINKS: NavLink[] = [
  { label: 'Forside', href: '/', active: true },
  { label: 'Ydelser', href: HOME_SECTIONS.services.path, sectionId: HOME_SECTIONS.services.sectionId },
  { label: 'Om os', href: '/' },
  { label: 'Referencer', href: '/' },
  { label: 'Kontakt', href: HOME_SECTIONS.contact.path, sectionId: HOME_SECTIONS.contact.sectionId },
];
