import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/subprocessors",
        destination: "/legal/privacy#subprocessors",
        permanent: true,
      },
      {
        source: "/legal/subprocessors",
        destination: "/legal/privacy#subprocessors",
        permanent: true,
      },
      {
        source: "/for/commercial-trades",
        destination: "/for/commercial-pest-control",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;