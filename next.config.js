const ThemeRegistryPlugin = require("@4i4/theme-registry-webpack-plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
      config.resolve.fallback.dns = false;
      config.resolve.fallback.net = false;
      config.resolve.fallback.tls = false;
    }

    config.plugins.push(
      new ThemeRegistryPlugin({
        isNextJS: true
      })
    );

    return config;
  }
};

module.exports = nextConfig;
