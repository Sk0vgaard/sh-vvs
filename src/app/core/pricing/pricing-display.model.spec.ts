import { momsLabelText, toPriceDisplayItems } from './pricing-display.model';

describe('PricingDisplayModel', () => {
  it('labels inkl. and ekskl. moms correctly', () => {
    expect(momsLabelText('inkl')).toBe('inkl. moms');
    expect(momsLabelText('ekskl')).toBe('ekskl. moms');
  });

  it('formats emergency price as ekskl. moms', () => {
    const [item] = toPriceDisplayItems([
      { id: 'emergency', title: 'Akut', amountOre: 270000, moms: 'ekskl', note: 'fra' },
    ]);

    expect(item.formattedAmount).toContain('2.700');
    expect(item.momsText).toBe('ekskl. moms');
  });
});
