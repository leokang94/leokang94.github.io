import React from 'react';
import { ThemeProvider } from '@emotion/react';
import type { GatsbyBrowser } from 'gatsby';

import Layout from '#template/Layout';
import Body from '#components/common/Body';
import Header from '#components/common/Header';
import Footer from '#components/common/Footer';

import GlobalStyle from '#styles/global.style';
import theme from '#styles/theme';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element }) => {
  return (
    <Body>
      <GlobalStyle />
      <Header />
      <Layout>{element}</Layout>
      <Footer />
    </Body>
  );
};

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>;
};
