/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
      images: {
        unoptimized: true,
          domains: ['api.dicebear.com', 'res.cloudinary.com', 'media.istockphoto.com']
        },
        
  };

export default nextConfig;
