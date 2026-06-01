import type { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowRight,
  faBars,
  faBuilding,
  faClock,
  faEnvelope,
  faFaucet,
  faFireFlameSimple,
  faLocationDot,
  faPhone,
  faShieldHalved,
  faShower,
  faUser,
  faWrench,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

/** Font Awesome icon names registered for `<fa-icon icon="…">` use. */
export type FaIconName =
  | 'arrow-right'
  | 'bars'
  | 'building'
  | 'clock'
  | 'envelope'
  | 'faucet'
  | 'fire-flame-simple'
  | 'location-dot'
  | 'phone'
  | 'shield-halved'
  | 'shower'
  | 'user'
  | 'wrench'
  | 'xmark';

export const APP_ICON_MAP: Record<FaIconName, IconDefinition> = {
  'arrow-right': faArrowRight,
  bars: faBars,
  building: faBuilding,
  clock: faClock,
  envelope: faEnvelope,
  faucet: faFaucet,
  'fire-flame-simple': faFireFlameSimple,
  'location-dot': faLocationDot,
  phone: faPhone,
  'shield-halved': faShieldHalved,
  shower: faShower,
  user: faUser,
  wrench: faWrench,
  xmark: faXmark,
};

export const appIcons = Object.values(APP_ICON_MAP);

export function registerAppIcons(library: FaIconLibrary): void {
  library.addIcons(...appIcons);
}
