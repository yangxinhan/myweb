import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/myweb',
  assetPrefix: '/myweb/',
};

export default nextConfig;
