import type { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

/** Icons registered globally — add imports from @fortawesome/free-* and list them here. */
export const appIcons: IconDefinition[] = [];

export function registerAppIcons(library: FaIconLibrary): void {
  library.addIcons(...appIcons);
}
