import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  distDir: 'dist',
  basePath: process.env.NODE_ENV === 'production' ? '/myweb' : ''
};

export default nextConfig;
