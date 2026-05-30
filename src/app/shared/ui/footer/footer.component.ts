import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { SectionId } from '../../models/section-id';

@Component({
  selector: 'sh-footer',
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  readonly phoneHref = input.required<string>();
  readonly phoneLabel = input.required<string>();
  readonly emailHref = input.required<string>();
  readonly emailLabel = input.required<string>();

  protected readonly SectionId = SectionId;
}
