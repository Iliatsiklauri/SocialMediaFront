module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'socialmediawsbucket.s3.eu-north-1.amazonaws.com',
        port: '',
        pathname: '/upload/**',
      },
    ],
  },
};
