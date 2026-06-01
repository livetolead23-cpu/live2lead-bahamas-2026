import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow local images from public folder + any external speaker photo domains you add later
    remotePatterns: [],
  },
};

export default nextConfig;
