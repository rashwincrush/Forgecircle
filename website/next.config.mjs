/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/pricing',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
