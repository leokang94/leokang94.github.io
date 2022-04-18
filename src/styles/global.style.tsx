import React, { useMemo } from 'react';
import { Global, css, useTheme } from '@emotion/react';

// font
import '@fontsource/noto-sans-kr';
import '@fontsource/noto-sans-kr/700.css';
import 'd2coding/d2coding-ligature-full.css';

// normalize for cross-browsing
import 'normalize.css';

export default function GlobalStyle() {
  const theme = useTheme();
  const globalStyle = useMemo(
    () =>
      css`
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }

        body {
          font-size: ${theme.typography.baseFontSize};
          font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
            'Open Sans', 'Helvetica Neue', sans-serif;
        }

        html,
        body,
        #___gatsby {
          height: 100%;
        }

        a,
        a:hover {
          color: inherit;
          text-decoration: none;
          cursor: pointer;
        }
      `,
    [],
  );

  return <Global styles={globalStyle} />;
}
