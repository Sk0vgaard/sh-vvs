import { MOBILE_SERVICES, SERVICES } from './services.data';

/** Each service line should speak to both residential and commercial customers. */
const RESIDENTIAL_PATTERN = /private|bolig/i;
const COMMERCIAL_PATTERN = /erhverv|kontor|butik|ejendom/i;

describe('services copy balance', () => {
  it.each(SERVICES)('$title description covers private and commercial customers', ({ description }) => {
    expect(description).toMatch(RESIDENTIAL_PATTERN);
    expect(description).toMatch(COMMERCIAL_PATTERN);
  });

  it.each(MOBILE_SERVICES)('mobile $title description covers private and commercial customers', ({ description }) => {
    expect(description).toMatch(RESIDENTIAL_PATTERN);
    expect(description).toMatch(COMMERCIAL_PATTERN);
  });

  it('keeps three grouped mobile cards aligned with desktop offerings', () => {
    expect(MOBILE_SERVICES).toHaveLength(3);
    expect(MOBILE_SERVICES.map((service) => service.title)).toEqual([
      'Installation & varme',
      'Badeværelser',
      'Service & erhverv',
    ]);
  });
});
