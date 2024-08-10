const { StrictMode } = require('react');

module.exports = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dv8x7zx2zd79g.cloudfront.net',
        port: '',
        pathname: '/upload/**',
      },
    ],
  },
};
