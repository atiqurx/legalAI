/** @type {import('next').NextConfig} */

import dotenv from "dotenv";
const result = dotenv.config();

const nextConfig = {
  reactStrictMode: true,
  env: result.parsed,
  experimental: {
    serverActions: {
      bodySizeLimit: "20mb",
    },
    esmExternals: "loose",
    serverComponentsExternalPackages: ["mongoose"],
  },

  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;
    return config;
  },
};

export default nextConfig;
