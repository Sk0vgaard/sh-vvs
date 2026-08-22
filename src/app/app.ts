import { afterNextRender, ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'sh-root',
  imports: [RouterOutlet],
  template: `<router-outlet />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  constructor() {
    afterNextRender(() => {
      const start = (): void => {
        void import('./core/cookie-consent/cookie-consent').then((module) => module.initCookieConsent());
      };

      if (typeof requestIdleCallback === 'function') {
        requestIdleCallback(start, { timeout: 4000 });
        return;
      }

      setTimeout(start, 2000);
    });
  }
}
