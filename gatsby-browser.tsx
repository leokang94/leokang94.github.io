import React from 'react';
import { ThemeProvider } from '@emotion/react';
import type { GatsbyBrowser } from 'gatsby';

import Layout from '#template/Layout';
import Header from '#components/common/Header';

import GlobalStyle from '#styles/global.style';
import theme from '#styles/theme';
import Footer from '#components/common/Footer';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Layout>{element}</Layout>
      <Footer />
    </>
  );
};

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>;
};
