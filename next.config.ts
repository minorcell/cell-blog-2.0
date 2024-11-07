import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['8.137.124.251'],
  },
  productionBrowserSourceMaps: false,
  compiler: {
    styledComponents: true,
    /*     removeConsole: {
          exclude: ['error'],
        }, */
  },
};

export default nextConfig;
