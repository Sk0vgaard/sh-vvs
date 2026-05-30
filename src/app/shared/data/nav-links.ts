import { type NavLink } from '../models/nav-link.model';
import { SectionId } from '../models/section-id';
import { HOME_SECTIONS } from './home-sections';

export const NAV_LINKS: NavLink[] = [
  { id: SectionId.Home, label: 'Forside', href: '/' },
  { id: SectionId.Services, label: 'Ydelser', href: HOME_SECTIONS[SectionId.Services].path },
  { id: SectionId.About, label: 'Om os', href: '/' },
  { id: SectionId.References, label: 'Referencer', href: '/' },
  { id: SectionId.Contact, label: 'Kontakt', href: HOME_SECTIONS[SectionId.Contact].path },
];
