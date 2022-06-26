import Head from 'next/head';

interface HeadOptionProps {
  title: string;
  description?: string;
}
export default function withHead(
  Component: React.FunctionComponent,
  { title, description }: HeadOptionProps,
) {
  return (props: Parameters<typeof Component>[0]) => {
    return (
      <>
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...props} />
      </>
    );
  };
}
