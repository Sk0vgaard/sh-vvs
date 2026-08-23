import { RenderMode, type ServerRoute } from '@angular/ssr';

import { SERVICE_PAGES } from './shared/data/services/service-pages.data';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'ydelser/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return SERVICE_PAGES.map((page) => ({ slug: page.slug }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
