const path = require('path');
const { homepage } = require('./package.json');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const { withContentlayer } = require('next-contentlayer');

const isProduction = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProduction ? homepage : '',
  images: {
    loader: 'imgix',
    path: isProduction ? homepage : 'http://localhost:3000',
  },
  sassOptions: {
    includePaths: [
      path.join(__dirname, 'styles'),
      path.join(__dirname, 'src/components'),
    ],
  },
  webpack: (config) => {
    // plugins
    config.resolve.plugins.push(new TsconfigPathsPlugin());

    return config;
  },
};

module.exports = withContentlayer(nextConfig);
