import { SERVICES } from './services.data';

/** Each service line should speak to both residential and commercial customers. */
const RESIDENTIAL_PATTERN = /private|bolig/i;
const COMMERCIAL_PATTERN = /erhverv|kontor|butik|ejendom/i;

describe('services copy balance', () => {
  it.each(SERVICES)('$title description covers private and commercial customers', ({ description }) => {
    expect(description).toMatch(RESIDENTIAL_PATTERN);
    expect(description).toMatch(COMMERCIAL_PATTERN);
  });

  it('uses the same five offerings on every viewport', () => {
    expect(SERVICES.map((service) => service.title)).toEqual([
      'VVS-installation',
      'Varme & fjernvarme',
      'Badeværelser',
      'Akut service & reparation',
      'Erhverv',
    ]);
  });
});
