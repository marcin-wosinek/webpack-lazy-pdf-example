const path = require("path"),
  webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  resolve: {
    fallback: {
      assert: require.resolve("assert/"),
      buffer: require.resolve("buffer/"),
      fs: require.resolve("fs"),
      os: false,
      path: false,
      stream: require.resolve("stream-browserify"),
      util: require.resolve("util/"),
      zlib: require.resolve("browserify-zlib"),
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
  ],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
