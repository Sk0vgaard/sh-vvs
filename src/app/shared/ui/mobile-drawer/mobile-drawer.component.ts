import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  HostListener,
  input,
  output,
  signal,
} from '@angular/core';

import { FaIconComponent } from '../../../core/fontawesome';
import { type NavLink } from '../../models/nav-link.model';

@Component({
  selector: 'sh-mobile-drawer',
  imports: [FaIconComponent],
  templateUrl: './mobile-drawer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileDrawerComponent {
  /** Avoid slide/fade-in on first paint when the drawer is already closed. */
  protected readonly animate = signal(false);

  readonly open = input(false);
  readonly navLinks = input.required<NavLink[]>();
  readonly phoneHref = input.required<string>();
  readonly phoneLabel = input.required<string>();

  readonly closeDrawer = output<void>();
  readonly navLinkClick = output<{ link: NavLink; event: MouseEvent }>();

  constructor() {
    afterNextRender(() => this.animate.set(true));
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    if (this.open()) {
      this.closeDrawer.emit();
    }
  }
}
