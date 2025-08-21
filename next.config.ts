import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "portalnews.newsmaker.id",
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
