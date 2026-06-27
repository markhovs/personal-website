import { describe, expect, it } from 'vitest';

import { getPostSlugs } from '@/lib/posts';
import { SITE_URL } from '@/lib/utils';

import { generateMetadata } from './page';

describe('writing post metadata', () => {
  const [firstSlug] = getPostSlugs();

  it.runIf(firstSlug)(
    'uses a trailing-slash canonical URL for posts',
    async () => {
      const metadata = await generateMetadata({
        params: Promise.resolve({ slug: firstSlug }),
      });

      expect(metadata.openGraph?.url).toBe(`${SITE_URL}/writing/${firstSlug}/`);
    },
  );

  it('falls back to a not-found title for missing posts', async () => {
    const metadata = await generateMetadata({
      params: Promise.resolve({ slug: 'this-post-does-not-exist' }),
    });

    expect(metadata.title).toBe('Post Not Found');
  });
});
