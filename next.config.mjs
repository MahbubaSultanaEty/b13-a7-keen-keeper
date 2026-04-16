import { Search } from "lucide-react";

// next.config.js
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        port: '',
        hostname: "images.unsplash.com",
        pathname: "/**",
        
      },
      {
        protocol: "https",
        port: '',
        hostname: "randomuser.me",
        pathname: "/**",
        
      },
    ],
  },
};

export default nextConfig;