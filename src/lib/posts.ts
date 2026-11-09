import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

/** Published posts, newest first. Drafts are visible only in `astro dev`. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('posts', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());
}

/** URL-safe segment for a tag or series name; keeps Hangul as-is. */
export function slugify(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, '-');
}

export function postUrl(post: Post): string {
  return `/posts/${post.id}/`;
}

export function tagUrl(tag: string): string {
  return `/tags/${slugify(tag)}/`;
}

export function seriesUrl(series: string): string {
  return `/series/${slugify(series)}/`;
}

/** Group by a key, preserving the input order inside each group. */
function groupBy<K>(posts: Post[], keysOf: (post: Post) => K[]): Map<K, Post[]> {
  const groups = new Map<K, Post[]>();
  for (const post of posts) {
    for (const key of keysOf(post)) {
      const list = groups.get(key);
      if (list) list.push(post);
      else groups.set(key, [post]);
    }
  }
  return groups;
}

export function groupByTag(posts: Post[]): Map<string, Post[]> {
  return groupBy(posts, (post) => post.data.tags);
}

/** Series posts are ordered oldest first so they read as a sequence. */
export function groupBySeries(posts: Post[]): Map<string, Post[]> {
  const groups = groupBy(posts, (post) => (post.data.series ? [post.data.series] : []));
  for (const list of groups.values()) list.reverse();
  return groups;
}

export function groupByYear(posts: Post[]): Map<number, Post[]> {
  return groupBy(posts, (post) => [post.data.publishedAt.getFullYear()]);
}

const dateFormat = new Intl.DateTimeFormat('ko-KR', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'Asia/Seoul',
});

export function formatDate(date: Date): string {
  return dateFormat.format(date);
}

/** `MM.DD` for the year-grouped log gutter. */
export function formatMonthDay(date: Date): string {
  const parts = new Intl.DateTimeFormat('ko-KR', {
    month: '2-digit',
    day: '2-digit',
    timeZone: 'Asia/Seoul',
  }).formatToParts(date);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? '';
  return `${get('month')}.${get('day')}`;
}
