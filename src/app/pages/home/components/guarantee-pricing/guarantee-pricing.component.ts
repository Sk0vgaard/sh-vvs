import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { type PriceDisplayItem } from '../../../../core/pricing/pricing-display.model';

@Component({
  selector: 'sh-guarantee-pricing',
  templateUrl: './guarantee-pricing.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GuaranteePricingComponent {
  readonly sectionId = input.required<string>();
  readonly prices = input.required<PriceDisplayItem[]>();
  readonly trustBullets = input.required<string[]>();
  readonly tekniqLabel = input.required<string>();
  readonly tekniqUrl = input.required<string>();
  readonly guaranteeIntro = input.required<string>();
  readonly quoteNote = input.required<string>();
}
