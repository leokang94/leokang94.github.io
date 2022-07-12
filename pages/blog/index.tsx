import { PostList } from '#components';
import withHead from '#components/hoc/withHead';
import type { Post } from '#interface/blog.interface';

import { getAllPosts } from '#lib/blog';
interface BlogProps {
  posts: Post[];
}
function Blog({ posts }: BlogProps) {
  return (
    <div className="py-4">
      <PostList posts={posts} />
    </div>
  );
}

export default withHead(Blog);

export function getStaticProps(): { props: BlogProps } {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
}
