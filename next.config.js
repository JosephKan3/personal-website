/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  optimizeFonts: false,
  reactStrictMode: true,
  sassOptions: {
    includePaths: [
      path.join(__dirname, "styles"),
      path.join(__dirname, "components"),
    ],
  },
};

module.exports = nextConfig;
