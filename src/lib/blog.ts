import matter from 'gray-matter'; // parsing frontmatter
import fs from 'fs';
import path from 'path';
import { markdownToHtml } from './unified';

import type { Post } from '#interface/blog.interface';

// Add markdown files in `src/content/blog`
const postsDirectory = path.join(process.cwd(), 'src', 'content', 'blog');

export function getPostBySlug(slug: string): Post {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    frontmatter: { ...data },
    content: markdownToHtml(content),
  };
}

export function getAllPosts() {
  const slugs = fs.readdirSync(postsDirectory);
  const posts = slugs.map((slug) => getPostBySlug(slug));

  return posts;
}
