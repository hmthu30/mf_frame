import NextFederationPlugin from "@module-federation/nextjs-mf";

const webpackConfig = (config) => {
  if (!config.plugins) {
    config.plugins = [];
  }

  config.plugins.push(
    new NextFederationPlugin({
      name: "guest",
      filename: "static/chunks/guestRemoteEntry.js",
      remotes: {
        host: "host@http://localhost:8000/_next/static/chunks/hostRemoteEntry.js",
      },
      exposes: {
        "./GuestHomePage": "./src/pages/index",
      },
      shared: {},
      extraOptions: {},
    })
  );

  return config;
};

export default webpackConfig;
