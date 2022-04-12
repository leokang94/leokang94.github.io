import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Taehun Kang Devlog',
    siteUrl: 'https://www.yourdomain.tld',
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
    'gatsby-plugin-tsconfig-paths',
  ],
};

export default config;
