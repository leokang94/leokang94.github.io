import { NextSeo } from 'next-seo';
import pkg from '#/package.json';
import { SITE_NAME } from '#constants/constant';
import dayjs from 'dayjs';

// contentlayer
import { allPosts } from 'contentlayer/generated';
import { type PostPageProps } from '#interface/post.interface';

import { useMDXComponent } from 'next-contentlayer/hooks';

// elements
import A from '#components/elements/A';
import Count from '#components/elements/Count';
import Toc from '#components/elements/Toc';

export default function PostPage({ post }: PostPageProps) {
  const { title, slug, description, publishedAt } = post;
  const MDXComponent = useMDXComponent(post.body.code);

  return (
    <>
      <NextSeo
        title={`${title} | ${SITE_NAME}`}
        description={description}
        openGraph={{
          type: 'article',
          url: `${pkg.homepage}post/${slug}`,
          title,
          description,
        }}
      />
      <section className="pt-16">
        <header className="mb-12">
          <h1 className="pb-2 border-b-2 border-leo-green-dark text-leo-green-dark">
            {title}
          </h1>
          <time
            dateTime={publishedAt}
            className="text-gray-400 font-extralight italic"
          >
            {dayjs(publishedAt).format('MMMM DD, YYYY (dddd)')}
          </time>
        </header>
        <section>
          <MDXComponent components={{ Count, a: A, nav: Toc }} />
        </section>
      </section>
    </>
  );
}

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
