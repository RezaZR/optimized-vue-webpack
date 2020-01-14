const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackBundleAnalyzer = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    transportMode: "ws"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new WebpackBundleAnalyzer()
  ],
  module: {
    rules: [
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
              `
            }
          }
        ]
      }
    ]
  }
});
