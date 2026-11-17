import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required so the Docker image only ships the files the server needs.
  output: "standalone",
  // `pg` memakai require dinamis; biarkan Node me-resolve saat runtime.
  serverExternalPackages: ["pg"],
  // Allow the local IPs used to preview the profile from the LAN in dev mode.
  allowedDevOrigins: ["192.168.1.20", "192.168.100.3"],
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
};

export default nextConfig;
