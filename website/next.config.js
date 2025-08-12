/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  // Optional: Configure the base path if your app is not served from the root
  // basePath: '/your-base-path',
  // Optional: Configure the asset prefix if your app is served from a subdirectory
  // assetPrefix: '/your-base-path/',
}

module.exports = nextConfig
