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
    ];
  },
};

export default nextConfig;