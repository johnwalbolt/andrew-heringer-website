/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export (required for GitHub Pages / any static host).
  output: "export",
  // GitHub Pages can't run Next's image optimizer, so serve images as-is.
  images: { unoptimized: true },
  // Export each route as a folder with index.html, which GitHub Pages serves cleanly.
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
