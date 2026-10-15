import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { FaIconComponent } from '../../../core/fontawesome';

@Component({
  selector: 'sh-acute-callout',
  imports: [FaIconComponent],
  templateUrl: './acute-callout.component.html',
  host: { class: 'block h-full' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AcuteCalloutComponent {
  readonly headline = input.required<string>();
  readonly phoneHref = input.required<string>();
  readonly callToAction = input.required<string>();
  readonly note = input.required<string>();
}
