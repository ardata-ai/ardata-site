import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  // Emit /about/index.html so Cloudflare Pages can serve /about from a directory index.
  trailingSlash: true,
};

export default nextConfig;
