import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: false,
  compiler: {
    styledComponents: true,
    removeConsole: {
      exclude: ['error'],
    },
  },
};

export default nextConfig;
