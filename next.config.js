/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/myweb',
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, { isServer }) => {
    config.optimization = {
      minimize: false,
      moduleIds: 'named',
      chunkIds: 'named',
      splitChunks: isServer ? false : {
        cacheGroups: {
          default: false,
          vendors: false,
        },
      },
    };
    
    config.output = {
      ...config.output,
      pathinfo: true,
    };

    // 保留所有文件
    if (!isServer) {
      config.optimization.splitChunks = {
        cacheGroups: {
          default: false,
          vendors: false,
        },
      };
    }

    return config;
  },
}

module.exports = nextConfig
