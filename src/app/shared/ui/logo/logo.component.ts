import { ChangeDetectionStrategy, Component, output } from '@angular/core';

@Component({
  selector: 'sh-logo',
  templateUrl: './logo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent {
  readonly logoClick = output<MouseEvent>();
}
