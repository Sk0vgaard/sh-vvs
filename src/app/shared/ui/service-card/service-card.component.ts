import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { FaIconComponent } from '../../../core/fontawesome';

@Component({
  selector: 'sh-service-card',
  host: { class: 'block h-full' },
  imports: [FaIconComponent],
  templateUrl: './service-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceCardComponent {
  readonly title = input.required<string>();
  readonly description = input.required<string>();
  readonly href = input('#');
  readonly compact = input(false);
}
