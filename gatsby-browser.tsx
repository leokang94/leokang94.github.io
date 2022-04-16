import React from 'react';
import type { GatsbyBrowser } from 'gatsby';

import GlobalStyle from '#styles/global.style';
import Layout from '#template/Layout';
import Header from '#components/Header';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element }) => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Header />
        <h1>Hello World</h1>
        {element}
      </Layout>
    </>
  );
};
