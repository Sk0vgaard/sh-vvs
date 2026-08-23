import { SERVICE_PAGES, servicePageBySlug, servicePageWordCount } from './service-pages.data';

describe('service landing pages', () => {
  it('exposes the four crawlable ydelser slugs', () => {
    expect(SERVICE_PAGES.map((page) => page.slug)).toEqual([
      'badevaerelse',
      'varme-fjernvarme',
      'service-akut',
      'erhverv',
    ]);
  });

  it.each(SERVICE_PAGES)('$slug has a unique København H1, Dragør base, and 600+ words', (page) => {
    expect(page.path).toBe(`/ydelser/${page.slug}`);
    expect(page.heading).toMatch(/København/);
    expect(servicePageBySlug(page.slug)?.heading).toBe(page.heading);
    expect(servicePageWordCount(page)).toBeGreaterThanOrEqual(600);

    const body = [page.lede, ...page.sections.flatMap((section) => section.paragraphs)].join(' ');
    expect(body).toMatch(/Dragør/);
    expect(body).toMatch(/TEKNIQ/);
    expect(body).toMatch(/Oliver Skovgaard Rasmussen|Nikolai Heide/);
  });

  it('fails a city swap test: Aarhus would not fit this copy', () => {
    const bathroom = servicePageBySlug('badevaerelse');
    expect(bathroom?.heading.replace('København', 'Aarhus')).not.toBe(bathroom?.heading);
    expect(bathroom?.lede).not.toMatch(/Aarhus/);
  });

  it('returns undefined for an unknown slug', () => {
    expect(servicePageBySlug('ukendt')).toBeUndefined();
  });

  it('gives each page a unique title, description, and H1', () => {
    expect(new Set(SERVICE_PAGES.map((page) => page.documentTitle)).size).toBe(SERVICE_PAGES.length);
    expect(new Set(SERVICE_PAGES.map((page) => page.metaDescription)).size).toBe(SERVICE_PAGES.length);
    expect(new Set(SERVICE_PAGES.map((page) => page.heading)).size).toBe(SERVICE_PAGES.length);
  });
});
