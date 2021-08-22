import { CARD, ENTRY } from './index';

describe('CARD', () => {
  it('Returns the expected values', () => {
    expect(CARD.root).toBe('h-card');
    expect(CARD.email).toBe('u-email');
    expect(CARD.name).toBe('p-name');
    expect(CARD.url).toBe('u-url');
    expect(CARD.uid).toBe('u-uid');
  });
});

describe('ENTRY', () => {
  it('Returns the expected values', () => {
    expect(ENTRY.root).toBe('h-entry');
    expect(ENTRY.name).toBe('p-name');
    expect(ENTRY.summary).toBe('p-summary');
    expect(ENTRY.content).toBe('e-content');
    expect(ENTRY.published).toBe('dt-published');
    expect(ENTRY.updated).toBe('dt-updated');
    expect(ENTRY.author).toBe('p-author');
    expect(ENTRY.category).toBe('p-category');
    expect(ENTRY.url).toBe('u-url');
    expect(ENTRY.uid).toBe('u-uid');
    expect(ENTRY.syndication).toBe('u-syndication');
    expect(ENTRY.repostOf).toBe('u-repost-of');
  });
});
