import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NAV_LINKS } from '../../data/nav-links';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    fixture.componentRef.setInput('navLinks', NAV_LINKS);
    fixture.componentRef.setInput('phoneHref', 'tel:+4571112651');
    fixture.componentRef.setInput('phoneLabel', '+45 30 14 45 14');
    fixture.detectChanges();
  });

  it('renders nav links from input', () => {
    const links = fixture.nativeElement.querySelectorAll('ul.hidden li a');

    expect(links.length).toBe(NAV_LINKS.length);
    expect(links[0].textContent?.trim()).toBe('Forside');
  });
});
