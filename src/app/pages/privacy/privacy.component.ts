import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { injectPageSeo, PRIVACY_SEO } from '../../core/seo/page-seo';
import { AppHeaderContainer } from '../../layout/app-header/app-header.container';
import {
  PRIVACY_POLICY_CONTACT_EMAIL,
  PRIVACY_POLICY_LAST_UPDATED,
  PRIVACY_POLICY_SECTIONS,
  PRIVACY_POLICY_TITLE,
} from '../../shared/data/privacy/privacy-policy.content';

@Component({
  selector: 'sh-privacy',
  imports: [AppHeaderContainer, RouterLink],
  templateUrl: './privacy.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivacyComponent {
  constructor() {
    injectPageSeo()(PRIVACY_SEO);
  }

  protected readonly title = PRIVACY_POLICY_TITLE;
  protected readonly lastUpdated = PRIVACY_POLICY_LAST_UPDATED;
  protected readonly contactEmail = PRIVACY_POLICY_CONTACT_EMAIL;
  protected readonly sections = PRIVACY_POLICY_SECTIONS;

  protected openCookieSettings(): void {
    void import('../../core/cookie-consent/cookie-consent').then(async (module) => {
      await module.initCookieConsent();
      module.openCookiePreferences();
    });
  }
}
