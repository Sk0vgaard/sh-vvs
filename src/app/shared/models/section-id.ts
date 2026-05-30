export const SectionId = {
  Home: 'home',
  Services: 'services',
  About: 'about',
  References: 'references',
  Contact: 'contact',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

export type ScrollSectionId = typeof SectionId.Services | typeof SectionId.Contact;

export function isScrollSectionId(id: SectionId): id is ScrollSectionId {
  return id === SectionId.Services || id === SectionId.Contact;
}
