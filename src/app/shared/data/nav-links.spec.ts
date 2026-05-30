import { withActiveNavLinks } from '../models/nav-link.model';
import { NAV_LINKS } from './nav-links';

describe('withActiveNavLinks', () => {
  it('marks Forside active on /', () => {
    const links = withActiveNavLinks('/', NAV_LINKS);

    expect(links.find((link) => link.id === 'home')?.active).toBe(true);
    expect(links.find((link) => link.id === 'services')?.active).toBe(false);
  });

  it('marks Ydelser active on /services', () => {
    const links = withActiveNavLinks('/services', NAV_LINKS);

    expect(links.find((link) => link.id === 'home')?.active).toBe(false);
    expect(links.find((link) => link.id === 'services')?.active).toBe(true);
  });
});
