/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/myweb',
  assetPrefix: '/myweb/',
  trailingSlash: true
};

export default nextConfig;
