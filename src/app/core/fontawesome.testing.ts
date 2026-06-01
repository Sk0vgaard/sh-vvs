import { TestBed } from '@angular/core/testing';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { registerAppIcons } from './fontawesome.icons';

/** Register Font Awesome icons in component tests (mirrors app startup). */
export function registerFaIconsForTesting(): void {
  registerAppIcons(TestBed.inject(FaIconLibrary));
}
