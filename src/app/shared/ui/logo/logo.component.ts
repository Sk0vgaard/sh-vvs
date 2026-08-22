import { ChangeDetectionStrategy, Component, output } from '@angular/core';

@Component({
  selector: 'sh-logo',
  host: { class: 'inline-flex items-center self-center' },
  templateUrl: './logo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent {
  readonly logoClick = output<MouseEvent>();
}
