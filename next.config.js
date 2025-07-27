/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/myweb' : '',
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    config.optimization = {
      minimize: false,
      moduleIds: 'named',
      chunkIds: 'named',
      splitChunks: {
        cacheGroups: {
          default: false,
        },
      },
    };
    
    config.output = {
      ...config.output,
      pathinfo: true,
    };

    return config;
  },
}

module.exports = nextConfig
