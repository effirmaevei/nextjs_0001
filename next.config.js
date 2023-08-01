/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = "";
let basePath = "/";

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;

  nextConfig = {
    output: "export",
    assetPrefix: assetPrefix,
    basePath: basePath,
    images: {
      loader: "custom",
      path: "",
    },
  };
} else {
  nextConfig = {
    output: "export",
    images: {
      loader: "custom",
      path: "",
    },
    // distDir: "dist",
    // assetPrefix: ".",
    // basePath: basePath,
  };
}

module.exports = nextConfig;
