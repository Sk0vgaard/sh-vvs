import { inject, provideAppInitializer } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { config } from '@fortawesome/fontawesome-svg-core';

import { registerAppIcons } from './fontawesome.icons';

config.autoAddCss = false;

export { FaIconComponent } from '@fortawesome/angular-fontawesome';
export type { IconDefinition, IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
export { APP_ICON_MAP, appIcons, registerAppIcons } from './fontawesome.icons';
export type { FaIconName } from './fontawesome.icons';

export function provideFontAwesome() {
  return provideAppInitializer(() => {
    registerAppIcons(inject(FaIconLibrary));
  });
}
