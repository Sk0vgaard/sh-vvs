import { isScrollSectionId, SectionId } from './section-id';

export interface NavLink {
  id: SectionId;
  label: string;
  href: string;
  active?: boolean;
}

export function withActiveNavLinks(path: string, links: NavLink[]): NavLink[] {
  const normalized = path.split('?')[0];

  return links.map((link) => ({
    ...link,
    active: isNavLinkActive(normalized, link),
  }));
}

function isNavLinkActive(path: string, link: NavLink): boolean {
  if (isScrollSectionId(link.id)) {
    return path === link.href;
  }

  if (link.id === SectionId.Home) {
    return path === '/';
  }

  return false;
}
