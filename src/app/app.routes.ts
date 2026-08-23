import { type Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { HOME_SECTIONS } from './shared/data/navigation/home-sections';

export const routes: Routes = [
  {
    path: 'privatliv',
    loadComponent: () => import('./pages/privacy/privacy.component').then((module) => module.PrivacyComponent),
  },
  {
    path: 'ydelser/:slug',
    loadComponent: () =>
      import('./pages/services/service-page.component').then((module) => module.ServicePageComponent),
  },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  ...Object.values(HOME_SECTIONS).map((section) => ({
    path: section.path.slice(1),
    component: HomeComponent,
  })),
];
