import type { NextConfig } from "next";

const path = require("path");
const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    return config;
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://domain/api/v1/:path*",
      },
    ];
  },
};

export default nextConfig;
