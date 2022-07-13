import withHead from '#components/hoc/withHead';
import { getAllPosts, getPostBySlug } from '#lib/blog';
import type { Post, PostProps } from '#interface/blog.interface';

import useProcessor from '#hook/useProcessor';

function Post({ meta, content: rawContent }: PostProps) {
  const {
    frontmatter: { title, date },
  } = meta;
  const content = useProcessor(rawContent);

  return (
    <section className="pt-16">
      <header className="mb-12">
        <h1 className="pb-2 border-b-2 border-blue-400 text-blue-400">
          {title}
        </h1>
        <time dateTime={date} className="text-gray-400 font-extralight italic">
          Posted at {date}
        </time>
      </header>
      <section>
        <div>{content}</div>
      </section>
    </section>
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
