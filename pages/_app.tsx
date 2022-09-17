import { DefaultSeo } from 'next-seo';
import pkg from '#/package.json';

import Head from 'next/head';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import '../styles/globals.css';
import '../styles/highlightjs-dracula.css';

import type { AppProps } from 'next/app';
import Layout from '#components/Layout';

const env = process.env.NODE_ENV;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'ko_KR',
          url: pkg.homepage,
          site_name: 'LeoLog',
          images: [
            {
              url: `${pkg.homepage}og-default-image.png`,
              width: 1200,
              height: 630,
              alt: 'og-default-image',
              type: 'image/png',
            },
          ],
        }}
        twitter={{
          cardType: 'summary_large_image',
          site: '@leokang94',
          handle: '@leokang94',
        }}
        title="LeoLog"
        description="기록으로 기억하기"
      />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
