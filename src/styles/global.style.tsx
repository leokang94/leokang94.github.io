import React from 'react';
import { Global, css } from '@emotion/react';

// font
import '@fontsource/noto-sans-kr';
import '@fontsource/noto-sans-kr/700.css';
import 'd2coding/d2coding-ligature-full.css';

// normalize for cross-browsing
import 'normalize.css';

const globalStyle = css`
  body {
    font-size: 16px;
    font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

export default function GlobalStyle() {
  return <Global styles={globalStyle} />;
}
