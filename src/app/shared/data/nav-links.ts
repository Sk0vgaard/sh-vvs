import { type NavLink } from '../models/nav-link.model';
import { HOME_SECTIONS } from './home-sections';

export const NAV_LINKS: NavLink[] = [
  { id: 'home', label: 'Forside', href: '/' },
  { id: 'services', label: 'Ydelser', href: HOME_SECTIONS.services.path, sectionId: HOME_SECTIONS.services.sectionId },
  { id: 'about', label: 'Om os', href: '/' },
  { id: 'references', label: 'Referencer', href: '/' },
  { id: 'contact', label: 'Kontakt', href: HOME_SECTIONS.contact.path, sectionId: HOME_SECTIONS.contact.sectionId },
];
