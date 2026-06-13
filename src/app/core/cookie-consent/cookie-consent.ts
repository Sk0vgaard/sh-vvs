import * as CookieConsent from 'vanilla-cookieconsent';

import { cookieConsentConfig } from './cookie-consent.config';

let initialized = false;

export async function initCookieConsent(): Promise<void> {
  if (initialized) {
    return;
  }

  await CookieConsent.run(cookieConsentConfig);
  initialized = true;
}

export function openCookiePreferences(): void {
  CookieConsent.showPreferences();
}
