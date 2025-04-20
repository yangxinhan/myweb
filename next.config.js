/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/myweb',
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizeCss: false,
    optimizeServerComponents: false,
    optimizePackageImports: false,
    turbotrace: {
      logAll: true,
      logDetail: true,
    },
  },
  webpack: (config, { isServer }) => {
    config.optimization.minimize = false;
    config.optimization.minimizer = [];
    return config;
  },
}

module.exports = nextConfig
