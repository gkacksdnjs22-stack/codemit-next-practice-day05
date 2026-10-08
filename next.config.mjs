/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  async rewrites() {
    const origin = process.env.FLASK_API_ORIGIN || "http://127.0.0.1:5200";
    return [{ source: "/api/:path*", destination: `${origin}/api/:path*` }];
  },
};

export default nextConfig;
