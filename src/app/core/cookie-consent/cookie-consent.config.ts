import type CookieConsent from 'vanilla-cookieconsent';

/** Bump when cookie categories or policy materially change. */
export const COOKIE_CONSENT_REVISION = 1;

export const cookieConsentConfig: CookieConsent.CookieConsentConfig = {
  mode: 'opt-in',
  revision: COOKIE_CONSENT_REVISION,
  disablePageInteraction: false,
  cookie: {
    name: 'cc_cookie',
    expiresAfterDays: 365,
    sameSite: 'Lax',
  },
  guiOptions: {
    consentModal: {
      layout: 'box',
      position: 'bottom left',
      equalWeightButtons: true,
      flipButtons: false,
    },
    preferencesModal: {
      layout: 'box',
      equalWeightButtons: true,
    },
  },
  categories: {
    necessary: {
      readOnly: true,
    },
  },
  language: {
    default: 'da',
    translations: {
      da: {
        consentModal: {
          title: 'Cookies på shvvs.dk',
          description:
            'Vi bruger kun nødvendige cookies for at huske dit valg. Du kan læse mere i vores privatlivspolitik.',
          acceptAllBtn: 'Accepter',
          acceptNecessaryBtn: 'Afvis',
          showPreferencesBtn: 'Læs mere',
          footer: `<a href="/privatliv#cookies">Privatlivspolitik og cookies</a>`,
        },
        preferencesModal: {
          title: 'Cookie-indstillinger',
          acceptAllBtn: 'Accepter',
          acceptNecessaryBtn: 'Afvis',
          savePreferencesBtn: 'Gem valg',
          closeIconLabel: 'Luk',
          sections: [
            {
              title: 'Cookie-brug',
              description: 'Vi bruger kun nødvendige cookies. Der sættes ingen statistik- eller marketing-cookies.',
            },
            {
              title: 'Nødvendige cookies',
              description:
                'Disse cookies er nødvendige for at hjemmesiden kan huske dit cookie-valg. De kan ikke fravælges.',
              linkedCategory: 'necessary',
              cookieTable: {
                headers: {
                  name: 'Cookie',
                  purpose: 'Formål',
                  duration: 'Varighed',
                },
                body: [
                  {
                    name: 'cc_cookie',
                    purpose: 'Husker dit cookie-valg',
                    duration: '12 måneder',
                  },
                ],
              },
            },
          ],
        },
      },
    },
  },
};
