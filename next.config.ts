import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  { key: "Strict-Transport-Security", value: "max-age=31536000" },
];

const nextConfig: NextConfig = {
  headers() {
    return Promise.resolve([{ headers: securityHeaders, source: "/:path*" }]);
  },
  // Self-contained server output for the Docker image.
  output: "standalone",
  poweredByHeader: false,
};

export default nextConfig;
