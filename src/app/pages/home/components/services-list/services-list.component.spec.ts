import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { registerFaIconsForTesting } from '../../../../core/fontawesome.testing';
import { SERVICES } from '../../../../shared/data/services/services.data';
import { ServicesListComponent } from './services-list.component';

describe('ServicesListComponent', () => {
  let fixture: ComponentFixture<ServicesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesListComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    registerFaIconsForTesting();

    fixture = TestBed.createComponent(ServicesListComponent);
    fixture.componentRef.setInput('services', SERVICES);
    fixture.detectChanges();
  });

  it('renders the same cards on mobile and desktop', () => {
    const desktopGrid = fixture.nativeElement.querySelector('.hidden.sm\\:grid');

    expect(fixture.nativeElement.querySelectorAll('.sm\\:hidden sh-service-card').length).toBe(SERVICES.length);
    expect(desktopGrid.querySelectorAll('sh-service-card').length).toBe(SERVICES.length);
  });

  it('links the same /ydelser URLs on mobile and desktop', () => {
    const mobileGrid = fixture.nativeElement.querySelector('.sm\\:hidden');
    const desktopGrid = fixture.nativeElement.querySelector('.hidden.sm\\:grid');
    const hrefs = (root: HTMLElement) =>
      [...root.querySelectorAll<HTMLAnchorElement>('a[href^="/ydelser/"]')].map((anchor) => anchor.getAttribute('href'));

    expect(hrefs(mobileGrid)).toEqual(hrefs(desktopGrid));
    expect(hrefs(desktopGrid)).toEqual(
      expect.arrayContaining([
        '/ydelser/badevaerelse',
        '/ydelser/varme-fjernvarme',
        '/ydelser/service-akut',
        '/ydelser/erhverv',
      ]),
    );
  });
});
