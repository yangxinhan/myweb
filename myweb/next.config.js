/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  basePath: process.env.NODE_ENV === 'production' ? '/myweb' : '',
  images: { unoptimized: true },
  trailingSlash: true,
}

module.exports = nextConfig
