import Link from 'next/link';
import { type Post } from 'contentlayer/generated';

import PostItem from './PostItem';

interface PostListProps {
  posts: Post[];
}
export default function PostList({ posts }: PostListProps) {
  return (
    <div className="flex flex-col">
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={{ pathname: '/post/[slug]', query: { slug: post.slug } }}
        >
          <a className="w-full">
            <PostItem post={post} />
          </a>
        </Link>
      ))}
    </div>
  );
}
