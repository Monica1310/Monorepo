/** @type {import('next').NextConfig} */

const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

module.exports = {
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "shop",
        filename: "static/chunks/remoteEntry.js",
        remotes: {
          main: `main@http://localhost:3000/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
        },
        exposes: {},
        shared: {},
      })
    );

    return config;
  },
};


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig
