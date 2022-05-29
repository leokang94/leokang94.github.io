import type { GatsbyConfig } from 'gatsby';
import path from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

if (__dirname.endsWith('/.cache/compiled')) {
  __dirname = __dirname.replace('/.cache/compiled', '');
}

console.log(path.join(__dirname, 'src', 'components', 'common', 'PostLayout', 'index.ts'));

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Taehun Kang Devlog',
    siteUrl: 'https://taehun.devlog.io',
    author: 'Taehun Kang',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'contents',
        path: `${__dirname}/src/contents/`,
        ignore: ['**/.*'],
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-emotion',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: ['gatsby-remark-prismjs'],
        extensions: ['.md', '.mdx'],
      },
    },
  ],
};

export default config;
