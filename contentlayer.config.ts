import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSection from '@agentofuser/rehype-section';
import rehypeHighlight from 'rehype-highlight';
import rehypeToc from '@jsdevtools/rehype-toc';
// import rehypeRewrite from 'rehype-rewrite';
// import { Root, RootContent, Element } from 'hast';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: '**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    publishedAt: { type: 'date', required: true },
    description: { type: 'string', required: true },
    cover: { type: 'string', required: false },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve(doc) {
        return doc._raw.sourceFileName.replace(/\.mdx/, '');
      },
    },
  },
}));

export default makeSource({
  contentDirPath: 'src/content', // content path 입력
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm, remarkBreaks],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'append' }],
      // [
      //   rehypeRewrite,
      //   {
      //     rewrite(
      //       node: Root | RootContent,
      //       index: number | null,
      //       parent: Root | Element | null,
      //     ) {
      //       if (node.type === 'element' && node.tagName === 'h1') {
      //         console.log('helo');
      //         console.log(node, index, parent);
      //       }
      //     },
      //   },
      // ],
      (rehypeSection as any).default,
      rehypeHighlight,
      [rehypeToc, { headings: ['h1', 'h2'] }],
    ],
  },
});
