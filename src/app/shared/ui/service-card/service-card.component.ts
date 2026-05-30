import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'sh-service-card',
  host: { class: 'block h-full' },
  templateUrl: './service-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceCardComponent {
  readonly title = input.required<string>();
  readonly description = input.required<string>();
  readonly href = input('#');
}
