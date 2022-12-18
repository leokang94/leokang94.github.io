import { Post } from 'contentlayer/generated';
import dayjs from 'dayjs';

interface PostProps {
  post: Post;
}
export default function PosItem({
  post: { title, description, publishedAt },
}: PostProps) {
  return (
    <div className="p-3 hover:text-leo-green-dark transition-[color] ease-out-back duration-300">
      <div className="font-bold text-2xl mb-2">{title}</div>
      <p className="text-gray-500">{description}</p>
      <time
        dateTime={publishedAt}
        className="text-sm font-extralight text-gray-400 italic"
      >
        {dayjs(publishedAt).format('MMMM DD, YYYY (dddd)')}
      </time>
    </div>
  );
}
