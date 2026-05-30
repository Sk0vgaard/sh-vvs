import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { MobileNavState } from '../../core/services/mobile-nav.state';
import { CONTACT } from '../../shared/data/contact.data';
import { isHomePath } from '../../shared/data/home-sections';
import { NAV_LINKS } from '../../shared/data/nav-links';
import { type NavLink } from '../../shared/models/nav-link.model';
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
  protected readonly navLinks = NAV_LINKS;
  protected readonly contact = CONTACT;

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
    return isHomePath(this.router.url) && (link.active === true || !!link.sectionId);
  }
}
