import { ChangeDetectionStrategy, Component, HostListener, input, output, signal } from '@angular/core';

export type DevNoticeDismiss = {
  dontShowAgain: boolean;
};

@Component({
  selector: 'sh-dev-notice-dialog',
  templateUrl: './dev-notice-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DevNoticeDialogComponent {
  readonly visible = input(false);

  readonly dismiss = output<DevNoticeDismiss>();

  protected readonly dontShowAgain = signal(false);

  protected dismissDialog(): void {
    this.dismiss.emit({ dontShowAgain: this.dontShowAgain() });
  }

  protected onDontShowAgainChange(event: Event): void {
    this.dontShowAgain.set((event.target as HTMLInputElement).checked);
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    if (this.visible()) {
      this.dismissDialog();
    }
  }
}
