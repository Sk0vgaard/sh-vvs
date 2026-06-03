import { type ScrollSectionId, SectionIds } from '../../models/section-id';

export interface HomeSection {
  path: string;
  sectionId: ScrollSectionId;
}

export const HOME_SECTIONS: Record<ScrollSectionId, HomeSection> = {
  [SectionIds.Services]: { path: '/services', sectionId: SectionIds.Services },
  [SectionIds.About]: { path: '/om-os', sectionId: SectionIds.About },
  [SectionIds.GuaranteePricing]: { path: '/garanti-priser', sectionId: SectionIds.GuaranteePricing },
  [SectionIds.Contact]: { path: '/contact', sectionId: SectionIds.Contact },
};

export const HOME_PATHS = ['/', ...Object.values(HOME_SECTIONS).map((section) => section.path)] as const;

export function sectionIdForPath(path: string): ScrollSectionId | undefined {
  const normalized = path.split('?')[0];
  return Object.values(HOME_SECTIONS).find((section) => section.path === normalized)?.sectionId;
}

export function pathForSectionId(sectionId: ScrollSectionId): string {
  return HOME_SECTIONS[sectionId].path;
}

export function isHomePath(path: string): boolean {
  return HOME_PATHS.includes(path.split('?')[0]);
}
