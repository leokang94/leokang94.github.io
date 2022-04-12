import type { GatsbyNode } from 'gatsby';
import TsConfigPathPlugin from 'tsconfig-paths-webpack-plugin';

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({ getConfig, actions }) => {
  // webpack config 중 기본 output을 가져온다.
  const output = getConfig().output || {};

  // 새롭게 webpack config을 세팅해준다.
  actions.setWebpackConfig({
    output,
    resolve: {
      plugins: [
        // tsConfig의 path를 webpack에서도 적용시켜주기 위함 (alias를 위해)
        new TsConfigPathPlugin(),
      ],
    },
  });
};
