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
      {
        protocol: "https",
        hostname: "sg-admin.newsmaker.id",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
