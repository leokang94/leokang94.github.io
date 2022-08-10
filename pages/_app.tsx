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
      <DefaultSeo title="Leo의 Devlog" description="Leo의 Devlog입니다." />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
