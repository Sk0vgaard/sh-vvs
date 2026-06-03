import { ComponentFixture, TestBed } from '@angular/core/testing';

import { registerFaIconsForTesting } from '../../../../core/fontawesome.testing';
import { CONTACT } from '../../../../shared/data/contact/contact.data';
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

  it('renders Ring CTA with canonical phone href', () => {
    const ring = fixture.nativeElement.querySelector('a[href="' + CONTACT.phoneHref + '"]');

    expect(ring).toBeTruthy();
    expect(ring.textContent).toContain('Ring');
  });

  it('emits contact section navigation when Skriv is clicked', () => {
    const emit = vi.fn();
    fixture.componentInstance.sectionNavigate.subscribe(emit);

    const skriv = [...fixture.nativeElement.querySelectorAll('a.btn')].find((anchor: HTMLAnchorElement) =>
      anchor.textContent?.includes('Skriv')
    ) as HTMLAnchorElement;
    skriv.click();

    expect(emit).toHaveBeenCalledWith(SectionIds.Contact);
  });

  it('includes acute vs non-urgent channel guidance', () => {
    expect(fixture.nativeElement.textContent).toContain('Ring ved akut skade');
    expect(fixture.nativeElement.textContent).toContain('Kontakt os for tilbud');
  });
});
