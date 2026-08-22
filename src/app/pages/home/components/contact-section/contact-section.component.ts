import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { FaIconComponent } from '../../../../core/fontawesome';

@Component({
  selector: 'sh-contact-section',
  imports: [FaIconComponent],
  templateUrl: './contact-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactSectionComponent {
  readonly phoneHref = input.required<string>();
  readonly phoneLabel = input.required<string>();
  readonly emailHref = input.required<string>();
  readonly emailLabel = input.required<string>();
  readonly serviceArea = input.required<string>();
  readonly phoneHoursSummary = input.required<string>();
}
