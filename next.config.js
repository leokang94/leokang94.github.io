const TsconfigPathsPlugins = require('tsconfig-paths-webpack-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.plugins.push(new TsconfigPathsPlugins());

    return config;
  },
};

module.exports = nextConfig;
