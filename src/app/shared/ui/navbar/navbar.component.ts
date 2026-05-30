import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { type NavLink } from '../../models/nav-link.model';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'sh-navbar',
  imports: [LogoComponent],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  readonly menuOpen = input(false);
  readonly navLinks = input.required<NavLink[]>();
  readonly phoneHref = input.required<string>();
  readonly phoneLabel = input.required<string>();

  readonly menuOpenClick = output<void>();
  readonly logoClick = output<MouseEvent>();
  readonly navLinkClick = output<{ link: NavLink; event: MouseEvent }>();
}
