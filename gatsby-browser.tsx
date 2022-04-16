import React from 'react';
import type { GatsbyBrowser } from 'gatsby';

// font
import '@fontsource/noto-sans-kr';
import '@fontsource/noto-sans-kr/700.css';
import 'd2coding/d2coding-ligature-full.css';

// css
import 'normalize.css';
import '#styles/global.css';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element }) => {
  return (
    <div>
      <h1>안녕하세요</h1>
      {element}
    </div>
  );
};
