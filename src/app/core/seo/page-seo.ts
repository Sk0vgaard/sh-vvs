import { DOCUMENT } from '@angular/common';
import { inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export const SITE_ORIGIN = 'https://shvvs.dk';

export interface PageSeo {
  title: string;
  description: string;
  path: string;
}

export const HOME_SEO: PageSeo = {
  title: 'Skovgaard & Heide VVS | Autoriseret VVS i København',
  description:
    'Autoriseret VVS-installatør i København og omegn. Ring +45 30 14 45 14 ved akut skade, eller skriv for tilbud og service. Telefon man–fre 07–16, akut 24/7.',
  path: '/',
};

export const PRIVACY_SEO: PageSeo = {
  title: 'Privatlivspolitik | Skovgaard & Heide VVS',
  description:
    'Privatlivspolitik for Skovgaard & Heide VVS. Sådan behandler vi personoplysninger fra kontaktformularen og nødvendige cookies på shvvs.dk.',
  path: '/privatliv',
};

export function injectPageSeo(): (seo: PageSeo) => void {
  const title = inject(Title);
  const meta = inject(Meta);
  const document = inject(DOCUMENT);

  return (seo: PageSeo): void => {
    const url = seo.path === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${seo.path}`;
    title.setTitle(seo.title);
    meta.updateTag({ name: 'description', content: seo.description });
    meta.updateTag({ property: 'og:title', content: seo.title });
    meta.updateTag({ property: 'og:description', content: seo.description });
    meta.updateTag({ property: 'og:url', content: url });

    const canonical = document.querySelector('link[rel="canonical"]') ?? document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', url);
    if (!canonical.parentNode) {
      document.head.appendChild(canonical);
    }
  };
}
