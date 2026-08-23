import { SERVICE_PAGES, type ServicePage, servicePageBySlug, servicePageWordCount } from './service-pages.data';

function pageParagraphs(page: ServicePage): string[] {
  return page.sections.flatMap((section) => section.paragraphs);
}

describe('service landing pages', () => {
  it('exposes the four crawlable ydelser slugs', () => {
    expect(SERVICE_PAGES.map((page) => page.slug)).toEqual([
      'badevaerelse',
      'varme-fjernvarme',
      'service-akut',
      'erhverv',
    ]);
  });

  it.each(SERVICE_PAGES)('$slug has a unique København H1, Dragør base, and scannable copy', (page: ServicePage) => {
    expect(page.path).toBe(`/ydelser/${page.slug}`);
    expect(page.heading).toMatch(/København/);
    expect(servicePageBySlug(page.slug)?.heading).toBe(page.heading);
    expect(servicePageWordCount(page)).toBeGreaterThanOrEqual(250);

    const body = [page.lede, ...pageParagraphs(page)].join(' ');
    expect(body).toMatch(/Dragør/);
    expect(body).toMatch(/omegn/);
    expect(body).not.toMatch(/ind til København/);
    expect(body).toMatch(/TEKNIQ/);
    expect(body).toMatch(/Skovgaard & Heide/);
    expect(body).not.toMatch(/Oliver Skovgaard Rasmussen|Nikolai Heide/);

    const blocks = [page.lede, ...pageParagraphs(page)];
    for (const block of blocks) {
      expect(block.length).toBeLessThanOrEqual(420);
    }
  });

  it('fails a city swap test: Aarhus would not fit this copy', () => {
    const bathroom = servicePageBySlug('badevaerelse');
    expect(bathroom?.heading.replace('København', 'Aarhus')).not.toBe(bathroom?.heading);
    expect(bathroom?.lede).not.toMatch(/Aarhus/);
  });

  it('returns undefined for an unknown slug', () => {
    expect(servicePageBySlug('ukendt')).toBeUndefined();
  });

  it('talks about cold and hot rooms instead of plant jargon', () => {
    const heat = servicePageBySlug('varme-fjernvarme');
    const copy = heat
      ? [heat.heading, heat.lede, ...heat.sections.flatMap((section) => [section.heading, ...section.paragraphs])].join(
          ' '
        )
      : '';

    expect(copy).not.toMatch(/rød pibe/i);
    expect(heat?.sections[0]?.heading).toBe('Når nogle rum er kolde — og andre for varme');
  });

  it('gives concrete examples of akut help', () => {
    const service = servicePageBySlug('service-akut');
    const copy = [
      
     ,
    ser  ...(service?.sections.flatMap((section) => [section.heading, ...section.paragraphs]) ?? []),
    ].join(' ');

    expect(copy).toMatch(/rørbrud/);
    expect(copy).toMatch(/sprunget slange/);
    expect(copy).toMatch(/vand i loftet/);
    expect(copy).toMatch(/frostvejr/);
  });

  it('gives each page a unique title, description, and H1', () => {
    expect(new Set(SERVICE_PAGES.map((page) => page.documentTitle)).size).toBe(SERVICE_PAGES.length);
    expect(new Set(SERVICE_PAGES.map((page) => page.metaDescription)).size).toBe(SERVICE_PAGES.length);
    expect(new Set(SERVICE_PAGES.map((page) => page.heading)).size).toBe(SERVICE_PAGES.length);
  });
});
