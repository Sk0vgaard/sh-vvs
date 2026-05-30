export const HOME_SECTIONS = {
  services: { path: '/services', sectionId: 'services' },
  contact: { path: '/contact', sectionId: 'contact' },
} as const;

export type HomeSectionId = keyof typeof HOME_SECTIONS;

export const HOME_PATHS = ['/', ...Object.values(HOME_SECTIONS).map((section) => section.path)] as const;

export function sectionIdForPath(path: string): string | undefined {
  const normalized = path.split('?')[0];
  return Object.values(HOME_SECTIONS).find((section) => section.path === normalized)?.sectionId;
}

export function pathForSectionId(sectionId: string): string | undefined {
  return Object.values(HOME_SECTIONS).find((section) => section.sectionId === sectionId)?.path;
}

export function isHomePath(path: string): boolean {
  return HOME_PATHS.includes(path.split('?')[0] as (typeof HOME_PATHS)[number]);
}
