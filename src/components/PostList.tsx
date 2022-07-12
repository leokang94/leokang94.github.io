import Link from 'next/link';
import type { Post } from '#interface/blog.interface';

interface PostListProps {
  posts: Post[];
}
export default function PostList({ posts }: PostListProps) {
  return (
    <ul className="list-disc list-inside">
      {posts.map(({ slug }) => (
        <Link key={slug} href={{ pathname: '/blog/[slug]', query: { slug } }}>
          <li className="cursor-pointer hover:text-blue-400 transition-colors">
            {slug}
          </li>
        </Link>
      ))}
    </ul>
  );
}
