// import withHead from '#components/hoc/withHead';
import { NextSeo } from 'next-seo';
import { allPosts } from 'contentlayer/generated';
import { type PostPageProps } from '#interface/post.interface';

import { useMDXComponent } from 'next-contentlayer/hooks';

// elements
import A from '#components/elements/A';
import Count from '#components/elements/Count';

export default function PostPage({ post }: PostPageProps) {
  const { title, publishedAt } = post;
  const MDXComponent = useMDXComponent(post.body.code);

  return (
    <>
      <NextSeo title={title} />
      <section className="pt-16">
        <header className="mb-12">
          <h1 className="pb-2 border-b-2 border-blue-400 text-blue-400">
            {title}
          </h1>
          <time
            dateTime={publishedAt}
            className="text-gray-400 font-extralight italic"
          >
            Posted at {publishedAt}
          </time>
        </header>
        <section>
          <MDXComponent components={{ Count, a: A }} />
        </section>
      </section>
    </>
  );
}

// export default withHead(PostPage, {
//   title: 'Devlog',
// });

export function getStaticPaths() {
  return {
    paths: allPosts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

interface StaticPropsParams {
  params: { slug: string };
}
export function getStaticProps({ params: { slug } }: StaticPropsParams) {
  const post = allPosts.find((post) => post.slug === slug);
  return { props: { post } };
}
