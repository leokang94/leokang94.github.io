import { Profile, PostList } from '#components';
import { allPosts, type Post } from 'contentlayer/generated';

interface HomeProps {
  posts: Post[];
}
export default function Home({ posts }: HomeProps) {
  return (
    <>
      <Profile />
      <PostList posts={posts} />
    </>
  );
}

export function getStaticProps(): { props: HomeProps } {
  return {
    props: {
      posts: allPosts,
    },
  };
}
