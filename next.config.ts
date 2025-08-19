import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "portal-backpanel.test",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "sgb-backpanel.test",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
