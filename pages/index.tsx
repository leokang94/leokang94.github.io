import { Profile, PostList } from '#components';
import withHead from '#components/hoc/withHead';
import type { Post } from '#interface/blog.interface';

import { getAllPosts } from '#lib/blog';

interface HomeProps {
  posts: Post[];
}
function Home({ posts }: HomeProps) {
  return (
    <>
      <Profile />
      <PostList posts={posts} />
    </>
  );
}

export default withHead(Home);

export function getStaticProps(): { props: HomeProps } {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
}
