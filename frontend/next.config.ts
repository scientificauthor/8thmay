import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/',
        destination: '/signup',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
