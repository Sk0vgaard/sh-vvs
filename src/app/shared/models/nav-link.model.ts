export interface NavLink {
  id: string;
  label: string;
  href: string;
  active?: boolean;
  sectionId?: string;
}

export function withActiveNavLinks(path: string, links: NavLink[]): NavLink[] {
  const normalized = path.split('?')[0];

  return links.map((link) => ({
    ...link,
    active: isNavLinkActive(normalized, link),
  }));
}

function isNavLinkActive(path: string, link: NavLink): boolean {
  if (link.sectionId) {
    return path === link.href;
  }

  if (link.id === 'home') {
    return path === '/';
  }

  return false;
}
