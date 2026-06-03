import { afterNextRender, ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

import { PageNavigationService } from '../../core/services/page-navigation.service';
import { AppHeaderContainer } from '../../layout/app-header/app-header.container';
import { CONTACT } from '../../shared/data/contact.data';
import { pathForSectionId, sectionIdForPath } from '../../shared/data/home-sections';
import { type ScrollSectionId, SectionIds } from '../../shared/models/section-id';
import { FooterComponent } from '../../shared/ui/footer/footer.component';
import { HomeBannerComponent } from './components/home-banner/home-banner.component';
import { SectionPlaceholderComponent } from './components/section-placeholder/section-placeholder.component';
import { ServicesListContainer } from './containers/services-list/services-list.container';

@Component({
  selector: 'sh-home',
  imports: [
    AppHeaderContainer,
    HomeBannerComponent,
    ServicesListContainer,
    SectionPlaceholderComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private readonly router = inject(Router);
  private readonly pageNav = inject(PageNavigationService);

  protected readonly contact = CONTACT;
  protected readonly SectionIds = SectionIds;

  constructor() {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed()
      )
      .subscribe((event) => this.syncScrollToRoute(event.urlAfterRedirects));

    afterNextRender(() => this.syncScrollToRoute(this.router.url, true));
  }

  protected scrollToSection(sectionId: ScrollSectionId): void {
    void this.router.navigateByUrl(pathForSectionId(sectionId));
  }

  private syncScrollToRoute(url: string, isInitial = false): void {
    const path = url.split('?')[0];

    if (path === '/') {
      if (!isInitial || window.scrollY > 0) {
        this.pageNav.scrollToTop();
      }
      return;
    }

    const sectionId = sectionIdForPath(path);
    if (sectionId) {
      this.pageNav.scrollToSection(sectionId);
    }
  }
}
