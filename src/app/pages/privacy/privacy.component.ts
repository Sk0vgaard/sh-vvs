import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { AppHeaderContainer } from '../../layout/app-header/app-header.container';
import {
  PRIVACY_POLICY_STUB_NOTICE,
  PRIVACY_POLICY_STUB_SECTIONS,
  PRIVACY_POLICY_STUB_TITLE,
} from '../../shared/data/privacy-policy.content';

@Component({
  selector: 'sh-privacy',
  imports: [AppHeaderContainer, RouterLink],
  templateUrl: './privacy.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivacyComponent {
  protected readonly title = PRIVACY_POLICY_STUB_TITLE;
  protected readonly notice = PRIVACY_POLICY_STUB_NOTICE;
  protected readonly sections = PRIVACY_POLICY_STUB_SECTIONS;
}
