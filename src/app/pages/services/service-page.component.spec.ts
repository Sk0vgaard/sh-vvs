import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, provideRouter } from '@angular/router';
import { of } from 'rxjs';

import { registerFaIconsForTesting } from '../../core/fontawesome.testing';
import { servicePageBySlug } from '../../shared/data/services/service-pages.data';
import { serviceCopyParts, ServicePageComponent } from './service-page.component';

describe('ServicePageComponent', () => {
  let fixture: ComponentFixture<ServicePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicePageComponent],
      providers: [
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: { paramMap: of(convertToParamMap({ slug: 'badevaerelse' })) },
        },
      ],
    }).compileComponents();

    registerFaIconsForTesting();

    fixture = TestBed.createComponent(ServicePageComponent);
    fixture.detectChanges();
  });

  it('renders the bathroom landing H1 and unique København copy', () => {
    const bathroom = servicePageBySlug('badevaerelse');
    const heading = fixture.nativeElement.querySelector('h1');

    expect(heading?.textContent).toBe(bathroom?.heading);
    expect(fixture.nativeElement.textContent).toContain('København');
    expect(fixture.nativeElement.textContent).toContain('Dragør');
  });

  it('offers a visible write-for-quote CTA on the light page surface', () => {
    const write = [...fixture.nativeElement.querySelectorAll('a')].find((anchor: HTMLAnchorElement) =>
      anchor.textContent?.includes('Skriv for tilbud')
    );

    expect(write).toBeTruthy();
    expect(write?.classList.contains('btn-outline')).toBe(true);
    expect(write?.classList.contains('btn-secondary')).toBe(false);
  });

  it('links TEKNIQ to tekniq.dk', () => {
    const tekniqLinks = [...fixture.nativeElement.querySelectorAll('a')].filter((anchor: HTMLAnchorElement) =>
      anchor.textContent?.includes('TEKNIQ')
    );

    expect(tekniqLinks.length).toBeGreaterThan(0);
    for (const link of tekniqLinks) {
      expect(link.getAttribute('href')).toBe('https://www.tekniq.dk/');
      expect(link.getAttribute('target')).toBe('_blank');
    }
  });

  it('links 30 14 45 14 to a tel URL', () => {
    const phoneLinks = [...fixture.nativeElement.querySelectorAll('a')].filter(
      (anchor: HTMLAnchorElement) => anchor.textContent?.replaceAll('\u00a0', ' ').trim() === '30 14 45 14'
    );

    expect(phoneLinks.length).toBeGreaterThan(0);
    for (const link of phoneLinks) {
      expect(link.getAttribute('href')).toBe('tel:+4530144514');
    }
  });

  it('links Skriv til os to the contact form', () => {
    const skrivLinks = [...fixture.nativeElement.querySelectorAll('a')].filter(
      (anchor: HTMLAnchorElement) => anchor.textContent?.trim() === 'Skriv til os'
    );

    expect(skrivLinks.length).toBeGreaterThan(0);
    for (const link of skrivLinks) {
      expect(link.getAttribute('href')).toBe('/contact');
    }
  });
});

describe('serviceCopyParts', () => {
  it('turns TEKNIQ, the phone number, and Skriv til os into links', () => {
    const parts = serviceCopyParts('Medlem af TEKNIQ. Ring 30 14 45 14 eller Skriv til os.');

    expect(parts).toEqual([
      { text: 'Medlem af ' },
      { text: 'TEKNIQ', href: 'https://www.tekniq.dk/', external: true },
      { text: '. Ring ' },
      { text: '30 14 45 14', href: 'tel:+4530144514' },
      { text: ' eller ' },
      { text: 'Skriv til os', routerLink: '/contact' },
      { text: '.' },
    ]);
  });
});
