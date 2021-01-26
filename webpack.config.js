const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = async (env, argv) => {
  return {
    entry: {
      index: path.join(__dirname, "src", "index.js"),
    },
    output: {
      filename: "[name]-[chunkhash].js",
      path: path.join(__dirname, "public")
    },
    devtool: "inline-source-map",
    plugins: [
      new HTMLWebpackPlugin({
        filename: "index.html",
        template: path.join(__dirname, "src", "index.html"),
        chunks: ["index"],
      }),
    ]
  };
};
