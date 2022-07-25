import Head from 'next/head';
import { type PostPageProps } from '#interface/post.interface';

const DEFAULT_TITLE = '악당의 Devlog';

interface HeadOptionProps {
  title?: string;
  description?: string;
}
export default function withHead<T>(
  Component: React.FunctionComponent<T>,
  { title = DEFAULT_TITLE, description }: HeadOptionProps = {},
) {
  // Post Page인 경우, title 조정
  const isPostPage = (props: any): props is PostPageProps => {
    return !!(props as PostPageProps).post;
  };

  const headHoc = (props: T) => {
    return (
      <>
        <Head>
          <title>
            {`${isPostPage(props) ? `${props.post.title} - ` : ''}${title}`}
          </title>
          {description && <meta name="description" content={description} />}
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...props} />
      </>
    );
  };

  return headHoc;
}
