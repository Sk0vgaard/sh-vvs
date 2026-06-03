import { type MomsLabel } from '../../../core/pricing/pricing-display.model';

export interface PriceItemConfig {
  id: string;
  title: string;
  amountOre: number;
  moms: MomsLabel;
  note?: string;
}

export const PRICING_ITEMS: PriceItemConfig[] = [
  { id: 'hourly', title: 'Timepris', amountOre: 86900, moms: 'inkl' },
  { id: 'emergency', title: 'Akut', amountOre: 270000, moms: 'ekskl', note: 'fra' },
  { id: 'start', title: 'Startpris (under 2 timer)', amountOre: 119500, moms: 'inkl', note: 'første time' },
  {
    id: 'service-agreement',
    title: 'Årlig serviceaftale',
    amountOre: 199500,
    moms: 'inkl',
    note: 'fra',
  },
];
