import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SERVICES } from '../../../../shared/data/services/services.data';
import { ServicesListComponent } from '../../components/services-list/services-list.component';

@Component({
  selector: 'sh-services-list-container',
  imports: [ServicesListComponent],
  templateUrl: './services-list.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesListContainer {
  protected readonly services = SERVICES;
}
