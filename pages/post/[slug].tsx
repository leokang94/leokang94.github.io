import { NextSeo } from 'next-seo';
import pkg from '#/package.json';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

dayjs.locale('ko');

// contentlayer
import { allPosts } from 'contentlayer/generated';
import { type PostPageProps } from '#interface/post.interface';

import { useMDXComponent } from 'next-contentlayer/hooks';

// elements
import A from '#components/elements/A';
import Count from '#components/elements/Count';
import Toc from '#components/elements/Toc';

export default function PostPage({ post }: PostPageProps) {
  console.log('toc', <Toc />);
  const { title, slug, publishedAt } = post;
  const MDXComponent = useMDXComponent(post.body.code);

  return (
    <>
      <NextSeo
        title={title}
        openGraph={{
          type: 'article',
          url: `${pkg.homepage}post/${slug}`,
          title,
          description: 'hello world',
        }}
      />
      <section className="pt-16">
        <header className="mb-12">
          <h1 className="pb-2 border-b-2 border-blue-400 text-blue-400">
            {title}
          </h1>
          <time
            dateTime={publishedAt}
            className="text-gray-400 font-extralight italic"
          >
            {dayjs(publishedAt).format('YYYY년 MM월 DD일 (dddd)')}
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
