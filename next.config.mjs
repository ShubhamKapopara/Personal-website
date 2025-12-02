import mdx from "@next/mdx";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const withMDX = mdx({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,

  webpack: (config, { isServer, dev }) => {
    if (!isServer && dev && config.cache) {
      config.cache = {
        type: "filesystem",
        buildDependencies: {
          config: [__filename],
        },
      };
    }

    config.infrastructureLogging = {
      level: "error",
    };

    return config;
  },

  experimental: {
    optimizePackageImports: ["@once-ui-system/core"],
    // optional: safer Edge runtime handling
    serverActions: { bodySizeLimit: "2mb" },
  },
};

export default withMDX(nextConfig);
