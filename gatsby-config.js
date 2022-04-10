// @ts-check

/**
 * @type {import('gatsby').GatsbyConfig}
 */
const gatsbyConfig = {
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

module.exports = gatsbyConfig;
