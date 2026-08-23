import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, provideRouter } from '@angular/router';
import { of } from 'rxjs';

import { registerFaIconsForTesting } from '../../core/fontawesome.testing';
import { servicePageBySlug } from '../../shared/data/services/service-pages.data';
import { ServicePageComponent } from './service-page.component';

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
});
