// import Layout from '../../src/components/Layout';
import Layout from '#/src/components/Layout';
import { getAllPosts, getPostBySlug } from '../../src/lib/blog';

interface StaticProps {
  meta: any;
  content: string;
}
export default function Blog({ meta, content }: StaticProps) {
  console.log('meta', meta);
  console.log('content', content);
  return <Layout>{content}</Layout>;
}

interface StaticPropsParams {
  params: { slug: string };
}
export async function getStaticProps({ params: { slug } }: StaticPropsParams) {
  const post = getPostBySlug(slug);
  const content = post.content;

  return {
    props: {
      meta: { ...post },
      content,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts();
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}
