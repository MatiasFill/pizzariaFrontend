//import type { NextConfig } from "next";
/** @type {import ('next').NextConfig}*/

const nextConfig = {
  image:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      }
    ]
  }

};

export default nextConfig;
