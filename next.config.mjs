import mdx from "@next/mdx";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.google.com",
        pathname: "**",
      },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  // Configure webpack cache properly (swcMinify is enabled by default in Next.js 15)
  webpack: (config, { isServer, dev }) => {
    // Suppress webpack cache warnings for PackFileCacheStrategy
    if (!isServer && dev && config.cache) {
      // Override cache configuration to avoid PackFileCacheStrategy warnings
      config.cache = {
        type: 'filesystem',
        buildDependencies: {
          config: [__filename],
        },
      };
    }
    
    // Suppress infrastructure logging warnings
    config.infrastructureLogging = {
      level: 'error', // Only show errors, suppress warnings
    };
    
    return config;
  },
  experimental: {
    optimizePackageImports: ["@once-ui-system/core"],
  },
};

export default withMDX(nextConfig);
