import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { FaIconComponent } from '../../../core/fontawesome';

@Component({
  selector: 'sh-service-card',
  host: { class: 'block h-full' },
  imports: [FaIconComponent, RouterLink],
  templateUrl: './service-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceCardComponent {
  readonly title = input.required<string>();
  readonly description = input.required<string>();
  readonly href = input<string | undefined>(undefined);
  readonly compact = input(false);
}
