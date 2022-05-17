import React from 'react';
import { ThemeProvider } from '@emotion/react';
import type { GatsbyBrowser, GatsbySSR } from 'gatsby';

import Layout from '#template/Layout';
import Body from '#template/Body';
import Header from '#components/common/Header';
import Footer from '#components/common/Footer';

import GlobalStyle from '#styles/global.style';
import theme from '#styles/theme';

interface Browser {
  wrapPageElement: GatsbyBrowser['wrapPageElement'];
  wrapRootElement: GatsbyBrowser['wrapRootElement'];
}
interface SSR {
  wrapPageElement: GatsbySSR['wrapPageElement'];
  wrapRootElement: GatsbySSR['wrapRootElement'];
}

type Exact<T> = T extends null | undefined ? never : T;

const WrapPageElementJSX = ({ element, props }: Partial<Parameters<Exact<GatsbyBrowser['wrapPageElement']>>[0]>) => {
  return (
    <React.Fragment {...props}>
      <GlobalStyle />
      <Body>
        <Header />
        <Layout>{element}</Layout>
        <Footer />
      </Body>
    </React.Fragment>
  );
};

const wrapRootElementJSX = (element: React.ReactElement<any, string | React.JSXElementConstructor<any>>) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
);

export const browser: Browser = {
  wrapPageElement: ({ element, props }) => {
    return <WrapPageElementJSX element={element} props={props} />;
  },
  wrapRootElement: ({ element }) => {
    return wrapRootElementJSX(element);
  },
};

export const ssr: SSR = {
  wrapPageElement: ({ element, props }) => {
    return <WrapPageElementJSX element={element} props={props} />;
  },
  wrapRootElement: ({ element }) => {
    return wrapRootElementJSX(element);
  },
};
