import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { FaIconComponent } from '../../../../core/fontawesome';
import { type FaIconName } from '../../../../core/fontawesome.icons';
import { SectionIds } from '../../../../shared/models/section-id';
import { type ServiceItem } from '../../../../shared/models/service-item.model';
import { ServiceCardComponent } from '../../../../shared/ui/service-card/service-card.component';

const SERVICE_ICONS: Record<string, FaIconName> = {
  'VVS-installation': 'faucet',
  'Varme & fjernvarme': 'fire-flame-simple',
  Badeværelser: 'shower',
  'Akut service & reparation': 'wrench',
  Erhverv: 'building',
};

@Component({
  selector: 'sh-services-list',
  imports: [FaIconComponent, ServiceCardComponent],
  templateUrl: './services-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesListComponent {
  readonly services = input.required<ServiceItem[]>();

  protected readonly SectionIds = SectionIds;
  protected readonly serviceIcons = SERVICE_ICONS;
}
