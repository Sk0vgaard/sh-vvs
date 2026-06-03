export const SectionIds = {
  Home: 'home',
  Services: 'services',
  About: 'about',
  GuaranteePricing: 'guarantee-pricing',
  Contact: 'contact',
} as const;

export type SectionId = (typeof SectionIds)[keyof typeof SectionIds];

export type ScrollSectionId =
  | typeof SectionIds.Services
  | typeof SectionIds.About
  | typeof SectionIds.GuaranteePricing
  | typeof SectionIds.Contact;

export function isScrollSectionId(id: SectionId): id is ScrollSectionId {
  return (
    id === SectionIds.Services ||
    id === SectionIds.About ||
    id === SectionIds.GuaranteePricing ||
    id === SectionIds.Contact
  );
}
