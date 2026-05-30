import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SERVICES } from '../../../../shared/data/services.data';
import { ServicesListComponent } from './services-list.component';

describe('ServicesListComponent', () => {
  let fixture: ComponentFixture<ServicesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ServicesListComponent);
    fixture.componentRef.setInput('services', SERVICES);
    fixture.detectChanges();
  });

  it('renders a card for each service', () => {
    const cards = fixture.nativeElement.querySelectorAll('sh-service-card');

    expect(cards.length).toBe(SERVICES.length);
  });
});
