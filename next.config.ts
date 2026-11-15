import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/for/commercial-trades",
        destination: "/for/commercial-pest-control",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;