/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Only the exported build goes to dist/ — the Pages workflow uploads that
  // directory. Development keeps the default .next, so running `pnpm build`
  // while `pnpm dev` is up no longer pulls the manifests out from under it.
  distDir: process.env.NODE_ENV === "production" ? "dist" : ".next",
  basePath: process.env.PAGES_BASE_PATH,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
