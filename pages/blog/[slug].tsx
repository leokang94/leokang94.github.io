import withHead from '#components/hoc/withHead';
import { getAllPosts, getPostBySlug } from '#lib/blog';

import type { Post, PostProps } from '#interface/blog.interface';

function Post({ meta, content }: PostProps) {
  return (
    <div className="py-4">
      <div>
        <strong>slug:</strong> {meta.slug}
      </div>
      <div>
        <strong>frontmatter</strong>
        <ul className="list-disc list-inside ml-4">
          {Object.entries(meta.frontmatter).map(([key, value]) => (
            <li key={key}>
              <span>
                {key}: {value}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <strong>content</strong>
        <div>{content}</div>
      </div>
    </div>
  );
}

export default withHead(Post, {
  title: 'Devlog',
});

interface StaticPropsParams {
  params: { slug: string };
}
export function getStaticProps({ params: { slug } }: StaticPropsParams): {
  props: PostProps;
} {
  const post = getPostBySlug(slug);
  const { content, ...meta } = post;

  return {
    props: {
      meta,
      content,
    },
  };
}

export function getStaticPaths() {
  const posts = getAllPosts();
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}
