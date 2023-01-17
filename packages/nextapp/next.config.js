// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig
/** @type {import('next').NextConfig} */

const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
// const { dependencies } = require("./package.json");

module.exports = {
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "nextapp",
        filename: "remoteEntry.js",
        remotes: {
          react2: "reactapp@http://localhost:3004/remoteEntry.js",
          main: "main@http://localhost:3000/_next/static/chunks/remoteEntry.js",
          sharedState: "counter@http://localhost:3003/remoteEntry.js",
        },
        exposes: {},
        shared: {
      
        },
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
