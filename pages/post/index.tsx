import { PostList } from '#components';
import withHead from '#components/hoc/withHead';
import { allPosts, type Post } from 'contentlayer/generated';

interface BlogProps {
  posts: Post[];
}
function PostIndexPage({ posts }: BlogProps) {
  return (
    <div className="py-4">
      <PostList posts={posts} />
    </div>
  );
}

export default withHead(PostIndexPage);

export function getStaticProps(): { props: BlogProps } {
  return {
    props: {
      posts: allPosts,
    },
  };
}
