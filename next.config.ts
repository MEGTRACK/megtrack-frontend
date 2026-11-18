import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/ship-from/pakistan-to-australia", destination: "/ship-from/india-to-australia", permanent: true },
      { source: "/ship-from/sri-lanka-to-australia", destination: "/ship-from/india-to-australia", permanent: true },
      { source: "/resources", destination: "/blog", permanent: true },
      { source: "/why-megtrack", destination: "/about", permanent: true },
      { source: "/services/courier", destination: "/services/courier-import-handling", permanent: true },
      { source: "/services/cargo", destination: "/services/cargo-import-handling", permanent: true },
      { source: "/services/customs", destination: "/services/customs-clearance", permanent: true },
      { source: "/services/delivery", destination: "/services/last-mile-delivery", permanent: true },
    ];
  },
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
