import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { type AboutPartner } from '../../../../shared/data/about/about.content';

@Component({
  selector: 'sh-about-section',
  templateUrl: './about-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutSectionComponent {
  readonly sectionId = input.required<string>();
  readonly heading = input.required<string>();
  readonly paragraphs = input.required<readonly string[]>();
  readonly partners = input.required<AboutPartner[]>();
}
