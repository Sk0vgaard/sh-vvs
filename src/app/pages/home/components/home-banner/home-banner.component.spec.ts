import { ComponentFixture, TestBed } from '@angular/core/testing';

import { registerFaIconsForTesting } from '../../../../core/fontawesome.testing';
import { CONTACT } from '../../../../shared/data/contact/contact.data';
import { HERO_IMAGE } from '../../../../shared/data/hero/hero.messages';
import { SectionIds } from '../../../../shared/models/section-id';
import { HomeBannerComponent } from './home-banner.component';

describe('HomeBannerComponent', () => {
  let fixture: ComponentFixture<HomeBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeBannerComponent],
    }).compileComponents();

    registerFaIconsForTesting();

    fixture = TestBed.createComponent(HomeBannerComponent);
    fixture.detectChanges();
  });

  function root(): HTMLElement {
    return fixture.nativeElement as HTMLElement;
  }

  it('uses an H1 that names the trade and the city', () => {
    const heading = root().querySelector('h1');

    expect(heading?.textContent).toContain('Autoriseret VVS i København og omegn');
    expect(root().textContent).toContain('Kvalitet, pålidelighed og godt håndværk');
  });

  it('renders Ring CTA with canonical phone href', () => {
    const ring = root().querySelector('a[href="' + CONTACT.phoneHref + '"]');

    expect(ring).toBeTruthy();
    expect(ring?.textContent).toContain('Ring');
  });

  it('emits contact section navigation when Skriv is clicked', () => {
    const emit = vi.fn();
    fixture.componentInstance.sectionNavigate.subscribe(emit);

    const skriv = [...root().querySelectorAll('a.btn')].find((anchor) => anchor.textContent?.includes('Skriv')) as
      | HTMLAnchorElement
      | undefined;
    skriv?.click();

    expect(emit).toHaveBeenCalledWith(SectionIds.Contact);
    expect(skriv?.className).toContain('lg:hidden');
  });

  it('includes acute vs non-urgent channel guidance', () => {
    expect(root().textContent).toContain('Ring ved akut skade');
    expect(root().textContent).toContain('Kontakt os for tilbud');
  });

  it('marks the hero image as a high-priority LCP candidate', () => {
    const img = root().querySelector('img');

    expect(img).toBeTruthy();
    expect(img?.getAttribute('fetchpriority')).toBe('high');
    expect(img?.getAttribute('width')).toBe(String(HERO_IMAGE.width));
    expect(img?.getAttribute('height')).toBe(String(HERO_IMAGE.height));
    expect(img?.getAttribute('src')).toBe(HERO_IMAGE.src);
    expect(img?.getAttribute('alt')).toBe(HERO_IMAGE.alt);
  });
});
