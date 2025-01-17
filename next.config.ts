import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */

  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/questions.ts/1',
  //       permanent: false,
  //     },
  //   ];
  // },

  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
};

export default nextConfig;
