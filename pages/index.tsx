import { Profile, PostList } from '#components';
import withHead from '#components/hoc/withHead';
import { allPosts, type Post } from 'contentlayer/generated';

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
  return {
    props: {
      posts: allPosts,
    },
  };
}
