import Head from 'next/head';
import type {
  Post,
  PostProps as PostComponentProps,
} from '#interface/blog.interface';

const DEFAULT_TITLE = 'Leo Devlog';

interface HeadOptionProps {
  title?: string;
  description?: string;
}
export default function withHead<T>(
  Component: React.FunctionComponent<T>,
  { title = DEFAULT_TITLE, description }: HeadOptionProps = {},
) {
  // Post Page인 경우, title 조정
  const isPostPage = (props: any): props is PostComponentProps => {
    return !!(props as PostComponentProps).meta;
  };

  const headHoc = (props: T) => {
    return (
      <>
        <Head>
          <title>
            {`${
              isPostPage(props) ? `${props.meta.frontmatter.title} - ` : ''
            }${title}`}
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
