import { TRUST_CONTENT } from './trust.content';

describe('TRUST_CONTENT citability', () => {
  it('answers who, where, and what TEKNIQ/autorisation mean in 134–167 words', () => {
    const paragraph = TRUST_CONTENT.citabilityParagraph;
    const wordCount = paragraph.trim().split(/\s+/).length;

    expect(wordCount).toBeGreaterThanOrEqual(134);
    expect(wordCount).toBeLessThanOrEqual(167);
    expect(paragraph).toMatch(/København/);
    expect(paragraph).toMatch(/Dragør/);
    expect(paragraph).toMatch(/autoriseret/i);
    expect(paragraph).toMatch(/TEKNIQ/);
    expect(paragraph).toMatch(/Nikolai Heide/);
    expect(paragraph).toMatch(/Oliver Skovgaard Rasmussen/);
  });
});
