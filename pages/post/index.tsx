import { PostList } from '#components';
import { allPosts, Post } from 'contentlayer/generated';

interface BlogProps {
  posts: Post[];
}
export default function PostIndexPage({ posts }: BlogProps) {
  return (
    <div className="py-4">
      <PostList posts={posts} />
    </div>
  );
}

export function getStaticProps(): { props: BlogProps } {
  return {
    props: {
      posts: allPosts,
    },
  };
}
