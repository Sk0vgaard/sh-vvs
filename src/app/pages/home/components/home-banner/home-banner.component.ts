import { ChangeDetectionStrategy, Component, output } from '@angular/core';

import { FaIconComponent } from '../../../../core/fontawesome';
import { HOME_SECTIONS } from '../../../../shared/data/home-sections';
import { type ScrollSectionId, SectionId } from '../../../../shared/models/section-id';

@Component({
  selector: 'sh-home-banner',
  imports: [FaIconComponent],
  templateUrl: './home-banner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeBannerComponent {
  readonly sectionNavigate = output<ScrollSectionId>();

  protected readonly SectionId = SectionId;
  protected readonly servicesPath = HOME_SECTIONS[SectionId.Services].path;
  protected readonly contactPath = HOME_SECTIONS[SectionId.Contact].path;
}
