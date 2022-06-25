import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeSanitize from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';
import rehypeParse from 'rehype-parse';
import rehypeReact from 'rehype-react';
import remarkHtml from 'remark-html';

export function markdownToHtml(content: string) {
  const result = unified()
    .use(remarkParse)
    .use(remarkHtml)
    .processSync(content);

  return String(result);
}
