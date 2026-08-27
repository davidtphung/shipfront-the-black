import type { NextConfig } from "next";

const repo = "shipfront-the-black";
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isGithubPages ? `/${repo}` : "",
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  agentRules: false,
};

export default nextConfig;
