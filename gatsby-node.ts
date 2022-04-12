import type { GatsbyNode } from 'gatsby';

import path from 'path';

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({ getConfig, actions }) => {
  // webpack config 중 기본 output을 가져온다.
  const output = getConfig().output || {};

  // 새롭게 webpack config을 세팅해준다.
  actions.setWebpackConfig({
    output,
    resolve: {
      // alias 설정을 해준다. (실제 번들링 시 해당 alias 경로에 대한 실제 경로를 설정해주기 위함)
      alias: {
        '@component': path.resolve('src/components'),
        '@utils': path.resolve('src/utils'),
        '@hooks': path.resolve('src/hooks'),
      },
    },
  });
};
