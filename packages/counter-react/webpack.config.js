const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = {
  output: {
    publicPath: "http://localhost:3003/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 3003,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "counter",
      filename: "remoteEntry.js",
      remotes: {
        // counter123: "counter@http://localhost:3003/remoteEntry.js",
        react2: "reactapp@http://localhost:3004/remoteEntry.js",
        main: "main@http://localhost:3000/_next/static/chunks/remoteEntry.js",
        sharedState: "counter@http://localhost:3003/remoteEntry.js",
      },
      exposes: {
        "./store": "./src/counter/store",
        "./sharedStateContext": "./src/sharedState/sharedStateContext",
        "./sharedReducer": "./src/sharedState/sharedStateReducer",
        "./CounterApp": "./src/App",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};
