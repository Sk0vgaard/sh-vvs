import { type Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { HOME_SECTIONS } from './shared/data/navigation/home-sections';

export const routes: Routes = [
  { path: 'privatliv', component: PrivacyComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  ...Object.values(HOME_SECTIONS).map((section) => ({
    path: section.path.slice(1),
    component: HomeComponent,
  })),
];
