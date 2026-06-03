import { withActiveNavLinks } from '../../models/nav-link.model';
import { SectionIds } from '../../models/section-id';
import { NAV_LINKS } from './nav-links';

describe('withActiveNavLinks', () => {
  it('marks Forside active on /', () => {
    const links = withActiveNavLinks('/', NAV_LINKS);

    expect(links.find((link) => link.id === SectionIds.Home)?.active).toBe(true);
    expect(links.find((link) => link.id === SectionIds.Services)?.active).toBe(false);
  });

  it('marks Ydelser active on /services', () => {
    const links = withActiveNavLinks('/services', NAV_LINKS);

    expect(links.find((link) => link.id === SectionIds.Home)?.active).toBe(false);
    expect(links.find((link) => link.id === SectionIds.Services)?.active).toBe(true);
  });

  it('exposes Garanti & priser instead of Referencer', () => {
    const garanti = NAV_LINKS.find((link) => link.id === SectionIds.GuaranteePricing);

    expect(garanti?.label).toBe('Garanti & priser');
    expect(garanti?.href).toBe('/garanti-priser');
    expect(NAV_LINKS.some((link) => link.label === 'Referencer')).toBe(false);
  });

  it('marks Om os active on /om-os', () => {
    const links = withActiveNavLinks('/om-os', NAV_LINKS);

    expect(links.find((link) => link.id === SectionIds.About)?.active).toBe(true);
  });
});
