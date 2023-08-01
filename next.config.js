/** @type {import('next').NextConfig} */

nextConfig = {
  images: {
    loader: "custom",
    path: "",
  },
  distDir: "dist",

  async headers() {
    return [
      {
        source: "/:path*.(png|jpg|jpeg|gif|webp)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
