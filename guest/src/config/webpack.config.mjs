import NextFederationPlugin from "@module-federation/nextjs-mf";

const webpackConfig = (config) => {
  if (!config.plugins) {
    config.plugins = [];
  }

  config.plugins.push(
    new NextFederationPlugin({
      name: "guest",
      filename: "static/chunks/guestRemoteEntry.js",
      remotes: {},
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
