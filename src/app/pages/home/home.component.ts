import { afterNextRender, ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

import { toPriceDisplayItems } from '../../core/pricing/pricing-display.model';
import { PageNavigationService } from '../../core/services/page-navigation.service';
import { AppHeaderContainer } from '../../layout/app-header/app-header.container';
import { ABOUT_PARTNERS, ABOUT_STORY } from '../../shared/data/about/about.content';
import { COMPANY } from '../../shared/data/company/company.data';
import { CONTACT } from '../../shared/data/contact/contact.data';
import { CONTACT_RESPONSE_PROMISE } from '../../shared/data/contact/contact.messages';
import { HERO_PHONE_HOURS_SUMMARY } from '../../shared/data/hero/hero.messages';
import { sectionIdForPath } from '../../shared/data/navigation/home-sections';
import { PRICING_ITEMS } from '../../shared/data/pricing/pricing.data';
import { TRUST_CONTENT } from '../../shared/data/pricing/trust.content';
import { type ScrollSectionId, SectionIds } from '../../shared/models/section-id';
import { FooterComponent } from '../../shared/ui/footer/footer.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { GuaranteePricingComponent } from './components/guarantee-pricing/guarantee-pricing.component';
import { HomeBannerComponent } from './components/home-banner/home-banner.component';
import { ContactFormContainer } from './containers/contact-form/contact-form.container';
import { ServicesListContainer } from './containers/services-list/services-list.container';

@Component({
  selector: 'sh-home',
  imports: [
    AppHeaderContainer,
    HomeBannerComponent,
    ServicesListContainer,
    AboutSectionComponent,
    GuaranteePricingComponent,
    ContactSectionComponent,
    ContactFormContainer,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private readonly router = inject(Router);
  private readonly pageNav = inject(PageNavigationService);

  protected readonly contact = CONTACT;
  protected readonly company = COMPANY;
  protected readonly SectionIds = SectionIds;
  protected readonly aboutStory = ABOUT_STORY;
  protected readonly aboutPartners = ABOUT_PARTNERS;
  protected readonly prices = toPriceDisplayItems(PRICING_ITEMS);
  protected readonly trustBullets = [
    TRUST_CONTENT.quoteBullet,
    TRUST_CONTENT.authorizedLabel,
    TRUST_CONTENT.insuredLabel,
    TRUST_CONTENT.experienceLabel,
  ];
  protected readonly trust = TRUST_CONTENT;
  protected readonly responsePromise = CONTACT_RESPONSE_PROMISE;
  protected readonly phoneHoursSummary = HERO_PHONE_HOURS_SUMMARY;

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
    this.pageNav.navigateToHomeSection(this.router, sectionId);
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
