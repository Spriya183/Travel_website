import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/drivers/ram-bahadur-thapa',
        destination: '/drivers/kusal-nepal',
        permanent: true,
      },
      {
        source: '/drivers/suresh-gurung',
        destination: '/drivers/ramanath-upadhyaya',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
