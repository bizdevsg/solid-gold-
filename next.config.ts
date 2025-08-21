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
        protocol: "https",
        hostname: "vellorist.biz.id",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
