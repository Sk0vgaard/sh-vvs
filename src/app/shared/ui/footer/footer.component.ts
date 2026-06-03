import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { FaIconComponent } from '../../../core/fontawesome';

@Component({
  selector: 'sh-footer',
  imports: [FaIconComponent, RouterLink],
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  readonly phoneHref = input.required<string>();
  readonly phoneLabel = input.required<string>();
  readonly emailHref = input.required<string>();
  readonly emailLabel = input.required<string>();
  readonly serviceArea = input.required<string>();
  readonly legalName = input.required<string>();
  readonly cvr = input.required<string>();
  readonly streetAddress = input.required<string>();
}
