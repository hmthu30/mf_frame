import NextFederationPlugin from "@module-federation/nextjs-mf";

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: "news",
        filename: "static/chunks/newsRemoteEntry.js",
        exposes: {
          "./NewsHomePage": "./src/pages/index",
        },
        shared: {},
        extraOptions: {},
      })
    );
    return config;
  },
};

export default nextConfig;
