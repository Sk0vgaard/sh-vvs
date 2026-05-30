import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';

import { routes } from '../../app.routes';
import { MobileNavState } from '../../core/services/mobile-nav.state';
import { AppHeaderContainer } from './app-header.container';

describe('AppHeaderContainer', () => {
  let fixture: ComponentFixture<AppHeaderContainer>;
  let nav: MobileNavState;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppHeaderContainer],
      providers: [provideRouter(routes)],
    }).compileComponents();

    fixture = TestBed.createComponent(AppHeaderContainer);
    nav = TestBed.inject(MobileNavState);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('opens the drawer from the menu button', () => {
    const button = (fixture.nativeElement as HTMLElement).querySelector<HTMLButtonElement>('[aria-label="Åbn menu"]');
    expect(button).not.toBeNull();
    button!.click();

    expect(nav.open()).toBe(true);
  });

  it('navigates home when the logo is clicked on a home route', async () => {
    await router.navigateByUrl('/services');
    const navigateSpy = vi.spyOn(router, 'navigateByUrl');

    const logoLink = (fixture.nativeElement as HTMLElement).querySelector<HTMLAnchorElement>('sh-logo a');
    expect(logoLink).not.toBeNull();
    logoLink!.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));

    expect(navigateSpy).toHaveBeenCalledWith('/');
  });
});
