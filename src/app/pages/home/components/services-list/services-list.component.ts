import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { type ServiceItem } from '../../../../shared/models/service-item.model';
import { ServiceCardComponent } from '../../../../shared/ui/service-card/service-card.component';

import { SectionId } from '../../../../shared/models/section-id';

@Component({
  selector: 'sh-services-list',
  imports: [ServiceCardComponent],
  templateUrl: './services-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesListComponent {
  readonly services = input.required<ServiceItem[]>();

  protected readonly SectionId = SectionId;
}
