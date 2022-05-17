import React from 'react';
import { cache } from '@emotion/css';
import createEmotionServer from '@emotion/server/create-instance';
import { renderToString } from 'react-dom/server';
import type { GatsbySSR } from 'gatsby';

import { ssr } from './gatsby-wrap-elements';

export const wrapPageElement = ssr.wrapPageElement;
export const wrapRootElement = ssr.wrapRootElement;

export const replaceRenderer: GatsbySSR['replaceRenderer'] = ({ bodyComponent, setHeadComponents }) => {
  const { extractCritical } = createEmotionServer(cache);
  const { css, ids } = extractCritical(renderToString(<React.Fragment>{bodyComponent}</React.Fragment>));

  setHeadComponents([
    <style key="app-styles" data-emotion={`css ${ids.join(' ')}`} dangerouslySetInnerHTML={{ __html: css }} />,
  ]);
};
