/** @type {import('next').NextConfig} */

const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

module.exports = {
  webpack(config, options) {
    const { isServer } = options
    config.plugins.push(
      new NextFederationPlugin({
        name: "main",
        filename: "static/chunks/remoteEntry.js",
        remotes: {
          shop : `shop@http://localhost:3001/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
          counter: "counter@http://localhost:3003/remoteEntry.js",
     
        },
        exposes: {    
          "./Footer":"./components/Footer/Footer.jsx",
          "./Nav":"./components/Nav/Nav.jsx"
      },
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
