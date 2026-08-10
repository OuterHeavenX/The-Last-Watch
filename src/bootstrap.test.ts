import { describe, expect, it } from 'vitest';

describe('deployment checkpoint zero', () => {
  it('keeps the GitHub Pages base path explicit', async () => {
    const config = (await import('../vite.config')).default;
    expect(config.base).toBe('/The-Last-Watch/');
  });
});
