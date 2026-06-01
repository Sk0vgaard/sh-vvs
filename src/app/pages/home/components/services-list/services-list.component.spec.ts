import { ComponentFixture, TestBed } from '@angular/core/testing';

import { registerFaIconsForTesting } from '../../../../core/fontawesome.testing';
import { SERVICES } from '../../../../shared/data/services.data';
import { ServicesListComponent } from './services-list.component';

describe('ServicesListComponent', () => {
  let fixture: ComponentFixture<ServicesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesListComponent],
    }).compileComponents();

    registerFaIconsForTesting();

    fixture = TestBed.createComponent(ServicesListComponent);
    fixture.componentRef.setInput('services', SERVICES);
    fixture.detectChanges();
  });

  it('renders grouped compact cards on mobile and full cards on desktop', () => {
    const desktopGrid = fixture.nativeElement.querySelector('.hidden.sm\\:grid');

    expect(fixture.nativeElement.querySelectorAll('.sm\\:hidden sh-service-card').length).toBe(3);
    expect(desktopGrid.querySelectorAll('sh-service-card').length).toBe(SERVICES.length);
  });
});
