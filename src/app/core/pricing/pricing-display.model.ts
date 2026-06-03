export type MomsLabel = 'inkl' | 'ekskl';

export interface PriceDisplayItem {
  id: string;
  title: string;
  formattedAmount: string;
  momsText: string;
  note?: string;
}

export function formatPriceAmount(amountOre: number): string {
  const kroner = amountOre / 100;
  return new Intl.NumberFormat('da-DK', { maximumFractionDigits: 0 }).format(kroner);
}

export function momsLabelText(moms: MomsLabel): string {
  return moms === 'inkl' ? 'inkl. moms' : 'ekskl. moms';
}

export function toPriceDisplayItems(
  items: { id: string; title: string; amountOre: number; moms: MomsLabel; note?: string }[]
): PriceDisplayItem[] {
  return items.map((item) => ({
    id: item.id,
    title: item.title,
    formattedAmount: `${item.note ? `${item.note} ` : ''}${formatPriceAmount(item.amountOre)} kr.`,
    momsText: momsLabelText(item.moms),
    note: item.note,
  }));
}
