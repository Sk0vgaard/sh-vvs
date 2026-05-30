import { type Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { HOME_SECTIONS } from './shared/data/home-sections';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  ...Object.values(HOME_SECTIONS).map((section) => ({
    path: section.path.slice(1),
    component: HomeComponent,
  })),
];
