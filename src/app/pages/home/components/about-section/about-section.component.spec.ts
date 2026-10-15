import { ComponentFixture, TestBed } from '@angular/core/testing';

import { type AboutPartner } from '../../../../shared/data/about/about.content';
import { AboutSectionComponent } from './about-section.component';

describe('AboutSectionComponent', () => {
  let fixture: ComponentFixture<AboutSectionComponent>;

  const partnerWithoutPhoto: AboutPartner = {
    name: 'Oliver Skovgaard Rasmussen',
    titles: ['Indehaver'],
    email: 'oliver@shvvs.dk',
    bio: 'Bio',
  };

  const partnerWithPhoto: AboutPartner = {
    name: 'Nikolai Heide',
    titles: ['Indehaver', 'Autoriseret VVS-installatør'],
    email: 'nikolai@shvvs.dk',
    bio: 'Bio',
    image: {
      alt: 'Nikolai Heide, indehaver og autoriseret VVS-installatør hos Skovgaard & Heide VVS',
      width: 800,
      height: 800,
      src: '/images/employees/nikolai-heide-800.webp',
      srcsetAvif:
        '/images/employees/nikolai-heide-400.avif 400w, /images/employees/nikolai-heide-800.avif 800w, /images/employees/nikolai-heide-1200.avif 1200w',
      srcsetWebp:
        '/images/employees/nikolai-heide-400.webp 400w, /images/employees/nikolai-heide-800.webp 800w, /images/employees/nikolai-heide-1200.webp 1200w',
      sizes: '(min-width: 1024px) 500px, (min-width: 768px) 44vw, calc(100vw - 80px)',
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutSectionComponent);
    fixture.componentRef.setInput('sectionId', 'om-os');
    fixture.componentRef.setInput('heading', 'Om Skovgaard & Heide VVS');
    fixture.componentRef.setInput('paragraphs', ['Vi kører fra Dragør.']);
  });

  function root(): HTMLElement {
    return fixture.nativeElement as HTMLElement;
  }

  it('keeps the photo placeholder when an owner has no image', () => {
    fixture.componentRef.setInput('partners', [partnerWithoutPhoto]);
    fixture.detectChanges();

    expect(root().textContent).toContain('Foto kommer snart');
    expect(root().querySelector('img')).toBeNull();
  });

  it('renders the owner photo as content with a descriptive alt, not a hidden placeholder', () => {
    fixture.componentRef.setInput('partners', [partnerWithPhoto]);
    fixture.detectChanges();

    const img = root().querySelector('img');

    expect(root().textContent).not.toContain('Foto kommer snart');
    expect(img).toBeTruthy();
    expect(img?.getAttribute('src')).toBe(partnerWithPhoto.image?.src);
    expect(img?.getAttribute('alt')).toBe(partnerWithPhoto.image?.alt);
    expect(img?.getAttribute('width')).toBe(String(partnerWithPhoto.image?.width));
    expect(img?.getAttribute('height')).toBe(String(partnerWithPhoto.image?.height));
    expect(img?.closest('[aria-hidden="true"]')).toBeNull();
  });
});
