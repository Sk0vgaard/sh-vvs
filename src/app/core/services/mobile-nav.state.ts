import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MobileNavState {
  readonly open = signal(false);

  public openDrawer(): void {
    this.open.set(true);
    document.body.style.overflow = 'hidden';
  }

  public closeDrawer(): void {
    this.open.set(false);
    document.body.style.overflow = '';
  }
}
