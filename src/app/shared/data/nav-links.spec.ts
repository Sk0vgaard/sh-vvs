import { withActiveNavLinks } from '../models/nav-link.model';
import { SectionId } from '../models/section-id';
import { NAV_LINKS } from './nav-links';

describe('withActiveNavLinks', () => {
  it('marks Forside active on /', () => {
    const links = withActiveNavLinks('/', NAV_LINKS);

    expect(links.find((link) => link.id === SectionId.Home)?.active).toBe(true);
    expect(links.find((link) => link.id === SectionId.Services)?.active).toBe(false);
  });

  it('marks Ydelser active on /services', () => {
    const links = withActiveNavLinks('/services', NAV_LINKS);

    expect(links.find((link) => link.id === SectionId.Home)?.active).toBe(false);
    expect(links.find((link) => link.id === SectionId.Services)?.active).toBe(true);
  });
});
