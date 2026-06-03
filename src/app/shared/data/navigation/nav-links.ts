import { type NavLink } from '../../models/nav-link.model';
import { SectionIds } from '../../models/section-id';
import { pathForSectionId } from './home-sections';

export const NAV_LINKS: NavLink[] = [
  { id: SectionIds.Home, label: 'Forside', href: '/' },
  { id: SectionIds.Services, label: 'Ydelser', href: pathForSectionId(SectionIds.Services) },
  { id: SectionIds.GuaranteePricing, label: 'Garanti & priser', href: pathForSectionId(SectionIds.GuaranteePricing) },
  { id: SectionIds.About, label: 'Om os', href: pathForSectionId(SectionIds.About) },
  { id: SectionIds.Contact, label: 'Kontakt', href: pathForSectionId(SectionIds.Contact) },
];
