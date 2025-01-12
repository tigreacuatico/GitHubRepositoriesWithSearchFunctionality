import type { NextConfig } from "next";

module.exports = {
  images: {
    domains: ["avatars.githubusercontent.com"], // To be able to load images from Github
  },
};

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
