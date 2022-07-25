import Link from 'next/link';
import { type Post } from 'contentlayer/generated';

interface PostListProps {
  posts: Post[];
}
export default function PostList({ posts }: PostListProps) {
  return (
    <ul className="list-disc list-inside">
      {posts.map(({ slug, title }) => (
        <Link key={slug} href={{ pathname: '/post/[slug]', query: { slug } }}>
          <li className="cursor-pointer hover:text-blue-400 transition-colors">
            {title}
          </li>
        </Link>
      ))}
    </ul>
  );
}
