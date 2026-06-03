import { ChangeDetectionStrategy, Component, output } from '@angular/core';

import { FaIconComponent } from '../../../../core/fontawesome';
import { CONTACT } from '../../../../shared/data/contact.data';
import {
  HERO_CHANNEL_GUIDANCE_LINES,
  HERO_LEAD_COPY,
  HERO_PHONE_HOURS_SUMMARY,
} from '../../../../shared/data/hero.messages';
import { HOME_SECTIONS } from '../../../../shared/data/home-sections';
import { type ScrollSectionId, SectionIds } from '../../../../shared/models/section-id';

@Component({
  selector: 'sh-home-banner',
  imports: [FaIconComponent],
  templateUrl: './home-banner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeBannerComponent {
  readonly sectionNavigate = output<ScrollSectionId>();

  protected readonly SectionIds = SectionIds;
  protected readonly servicesPath = HOME_SECTIONS[SectionIds.Services].path;
  protected readonly contactPath = HOME_SECTIONS[SectionIds.Contact].path;
  protected readonly phoneHref = CONTACT.phoneHref;
  protected readonly phoneLabel = CONTACT.phoneLabel;
  protected readonly channelGuidanceLines = HERO_CHANNEL_GUIDANCE_LINES;
  protected readonly phoneHoursSummary = HERO_PHONE_HOURS_SUMMARY;
  protected readonly leadCopy = HERO_LEAD_COPY;
}
