/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.pexels.com', 'raw.githubusercontent.com'],
    unoptimized: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  output: 'export',
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.tanussalondebeaute.com',
          },
        ],
        destination: 'https://tanussalondebeaute.com/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;