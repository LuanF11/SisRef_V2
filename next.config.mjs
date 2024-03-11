/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['random.imagecdn.app'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'random.imagecdn.app/100/100',
        port: '',
        pathname: '/',
      },
    ],
  },
};

export default nextConfig;