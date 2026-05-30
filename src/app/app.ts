import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { DevNoticeDialogComponent } from './shared/ui/dev-notice-dialog/dev-notice-dialog.component';

/** Storage key for the permanent "vis ikke igen" preference. */
const DEV_NOTICE_DISMISSED_PERMANENT_KEY = 'sh-vvs-dev-notice-dismissed-permanent';
/** @deprecated Remove with dev-notice dialog — legacy session-only dismiss. */
const DEV_NOTICE_DISMISSED_SESSION_KEY = 'sh-vvs-dev-notice-dismissed';

sessionStorage.removeItem(DEV_NOTICE_DISMISSED_SESSION_KEY);

@Component({
  selector: 'sh-root',
  imports: [RouterOutlet, DevNoticeDialogComponent],
  template: `
    <router-outlet />
    <!-- TODO: Remove dev-notice dialog before public launch (component, wiring, storage key). -->
    <sh-dev-notice-dialog [visible]="showDevNotice()" (dismiss)="dismissDevNotice($event)" />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  readonly showDevNotice = signal(!localStorage.getItem(DEV_NOTICE_DISMISSED_PERMANENT_KEY));

  protected dismissDevNotice({ dontShowAgain }: { dontShowAgain: boolean }): void {
    if (dontShowAgain) {
      localStorage.setItem(DEV_NOTICE_DISMISSED_PERMANENT_KEY, '1');
    }

    this.showDevNotice.set(false);
  }
}
