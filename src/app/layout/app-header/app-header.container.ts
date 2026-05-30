import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, startWith } from 'rxjs';

import { MobileNavState } from '../../core/services/mobile-nav.state';
import { CONTACT } from '../../shared/data/contact.data';
import { isHomePath } from '../../shared/data/home-sections';
import { NAV_LINKS } from '../../shared/data/nav-links';
import { type NavLink, withActiveNavLinks } from '../../shared/models/nav-link.model';
import { MobileDrawerComponent } from '../../shared/ui/mobile-drawer/mobile-drawer.component';
import { NavbarComponent } from '../../shared/ui/navbar/navbar.component';

@Component({
  selector: 'sh-app-header-container',
  imports: [NavbarComponent, MobileDrawerComponent],
  templateUrl: './app-header.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppHeaderContainer {
  private readonly router = inject(Router);

  protected readonly nav = inject(MobileNavState);
  protected readonly contact = CONTACT;

  private readonly currentPath = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event) => event.urlAfterRedirects.split('?')[0]),
      startWith(this.router.url.split('?')[0])
    ),
    { initialValue: this.router.url.split('?')[0] }
  );

  protected readonly navLinks = computed(() => withActiveNavLinks(this.currentPath(), NAV_LINKS));

  protected onLogoClick(event: MouseEvent): void {
    if (!isHomePath(this.router.url)) {
      return;
    }

    event.preventDefault();
    void this.router.navigateByUrl('/');
  }

  protected onNavLinkClick(payload: { link: NavLink; event: MouseEvent }, fromDrawer = false): void {
    const { link, event } = payload;

    if (fromDrawer) {
      this.nav.closeDrawer();
    }

    if (!this.shouldHandleInApp(link)) {
      return;
    }

    event.preventDefault();
    void this.router.navigateByUrl(link.href);
  }

  private shouldHandleInApp(link: NavLink): boolean {
    return isHomePath(this.router.url) && (link.id === 'home' || !!link.sectionId);
  }
}
