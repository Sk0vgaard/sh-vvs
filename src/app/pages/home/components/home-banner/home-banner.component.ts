import { ChangeDetectionStrategy, Component, output } from '@angular/core';

@Component({
  selector: 'sh-home-banner',
  templateUrl: './home-banner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeBannerComponent {
  readonly sectionNavigate = output<string>();
}
