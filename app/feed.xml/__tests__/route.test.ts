import { describe, expect, it } from 'vitest';

import { SITE_URL } from '@/lib/utils';

import { GET } from '../route';

describe('feed.xml route', () => {
  it('uses canonical trailing-slash links for writing pages', async () => {
    const response = await GET();
    const xml = await response.text();

    expect(xml).toContain(`${SITE_URL}/writing/`);
    // Any internal post links must use canonical trailing slashes.
    const postLinks = xml.match(
      new RegExp(`<link>${SITE_URL}/writing/[^<]+</link>`, 'g'),
    );
    for (const link of postLinks ?? []) {
      expect(link).toMatch(/\/<\/link>$/);
    }
  });

  it('keeps the feed self link file-like', async () => {
    const response = await GET();
    const xml = await response.text();

    expect(xml).toContain(`${SITE_URL}/feed.xml`);
    expect(xml).not.toContain(`${SITE_URL}/feed.xml/`);
  });
});
