const { homepage } = require('./package.json');
const TsconfigPathsPlugins = require('tsconfig-paths-webpack-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? homepage : '',
  images: {
    loader: 'imgix',
    path:
      process.env.NODE_ENV === 'production'
        ? homepage
        : 'http://localhost:3000',
  },
  webpack: (config) => {
    config.resolve.plugins.push(new TsconfigPathsPlugins());

    return config;
  },
};

module.exports = nextConfig;
