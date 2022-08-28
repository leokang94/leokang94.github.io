import { DefaultSeo } from 'next-seo';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import '../styles/globals.css';
import '../styles/highlightjs-dracula.css';

import type { AppProps } from 'next/app';
import Layout from '#components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <DefaultSeo title="Devlog By Leo" description="기록으로 정리하기" />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
