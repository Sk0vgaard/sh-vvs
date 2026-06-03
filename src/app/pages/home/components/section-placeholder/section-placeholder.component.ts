import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'sh-section-placeholder',
  templateUrl: './section-placeholder.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionPlaceholderComponent {
  readonly sectionId = input.required<string>();
  readonly title = input.required<string>();
  readonly description = input('Indhold kommer snart.');
}
