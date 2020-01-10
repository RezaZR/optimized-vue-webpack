const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const { HotModuleReplacementPlugin } = require("webpack");

const path = require("path");

module.exports = {
  entry: "./src/main.js",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "/src")
    },
    extensions: [".js", ".vue", ".json", "css", "scss"]
  },
  module: {
    rules: [
      { test: /\.js$/, use: "babel-loader" },
      { test: /\.vue$/, use: "vue-loader" },
      {
        test: /\.s[ac]ss$/,
        use: [
          "vue-style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              prependData: `
                @import "./src/styles/_main.scss";
              `,
              webpackImporter: false
            }
          }
        ]
      },
      { test: /\.pug$/, loader: "pug-plain-loader" }
    ]
  },
  devServer: {
    open: true,
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new VueLoaderPlugin(),
    new HotModuleReplacementPlugin()
  ]
};
