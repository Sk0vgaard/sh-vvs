import { ChangeDetectionStrategy, Component, HostListener, input, output } from '@angular/core';

import { type NavLink } from '../../models/nav-link.model';

@Component({
  selector: 'sh-mobile-drawer',
  templateUrl: './mobile-drawer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileDrawerComponent {
  readonly open = input(false);
  readonly navLinks = input.required<NavLink[]>();
  readonly phoneHref = input.required<string>();
  readonly phoneLabel = input.required<string>();

  readonly closeDrawer = output<void>();
  readonly navLinkClick = output<{ link: NavLink; event: MouseEvent }>();

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    if (this.open()) {
      this.closeDrawer.emit();
    }
  }
}
