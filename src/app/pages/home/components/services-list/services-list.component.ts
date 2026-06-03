import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { FaIconComponent } from '../../../../core/fontawesome';
import { type FaIconName } from '../../../../core/fontawesome.icons';
import { MOBILE_SERVICES } from '../../../../shared/data/services.data';
import { SectionIds } from '../../../../shared/models/section-id';
import { type ServiceItem } from '../../../../shared/models/service-item.model';
import { ServiceCardComponent } from '../../../../shared/ui/service-card/service-card.component';

const SERVICE_ICONS: Record<string, FaIconName> = {
  'VVS-installation': 'faucet',
  'Varme & fjernvarme': 'fire-flame-simple',
  Badeværelser: 'shower',
  'Service & reparation': 'wrench',
  Erhverv: 'building',
};

const MOBILE_SERVICE_ICONS: Record<string, FaIconName> = {
  'Installation & varme': 'faucet',
  Badeværelser: 'shower',
  'Service & erhverv': 'wrench',
};

@Component({
  selector: 'sh-services-list',
  imports: [FaIconComponent, ServiceCardComponent],
  templateUrl: './services-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesListComponent {
  readonly services = input.required<ServiceItem[]>();

  protected readonly mobileServices = MOBILE_SERVICES;
  protected readonly SectionIds = SectionIds;
  protected readonly serviceIcons = SERVICE_ICONS;
  protected readonly mobileServiceIcons = MOBILE_SERVICE_ICONS;
}
