import { SectionIds } from '../../models/section-id';
import { sectionIdForPath } from './home-sections';

describe('home-sections', () => {
  it('resolves scroll section ids from paths', () => {
    expect(sectionIdForPath('/om-os')).toBe(SectionIds.About);
    expect(sectionIdForPath('/garanti-priser')).toBe(SectionIds.GuaranteePricing);
    expect(sectionIdForPath('/contact')).toBe(SectionIds.Contact);
  });
});
