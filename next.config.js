/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["fakestoreapi.com"],
		formats: ["image/avif", "image/webp"],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
	},
};

module.exports = nextConfig;
