/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — produces a plain `out/` folder Netlify serves as static files.
  output: "export",
  // next/image can't optimize at runtime on a static host; serve images as-is.
  images: { unoptimized: true },
  // Emit /privacy/index.html etc. so nested routes resolve cleanly on static hosts.
  trailingSlash: true,
};

export default nextConfig;
