import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { FaIconComponent } from '../../../core/fontawesome';

@Component({
  selector: 'sh-acute-callout',
  imports: [FaIconComponent],
  templateUrl: './acute-callout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AcuteCalloutComponent {
  readonly title = input.required<string>();
  readonly phoneHref = input.required<string>();
  readonly phoneLabel = input.required<string>();
}
