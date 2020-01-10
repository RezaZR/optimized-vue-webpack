const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./src/main.js",
  module: {
    rules: [
      { test: /\.js$/, use: "babel-loader" },
      { test: /\.vue$/, use: "vue-loader" },
      {
        test: /\.(css|scss)$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"]
      },
      { test: /\.pug$/, loader: "pug-plain-loader" }
    ]
  },
  devServer: {
    open: true,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
