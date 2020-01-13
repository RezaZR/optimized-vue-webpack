const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("path");

module.exports = {
  entry: "./src/main.js",
  resolve: {
    alias: {
      ROOT: path.resolve(__dirname, "./src")
    },
    extensions: [".json", ".html", ".vue", ".js", ".scss"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "style.css",
      chunkFilename: "[name].css"
    })
  ],
  module: {
    rules: [
      { test: /\.html$/, use: "html-loader" },
      { test: /\.pug$/, loader: "pug-plain-loader" },
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: file => /node_modules/.test(file) && !/\.vue\.js/.test(file)
      },
      { test: /\.vue$/, use: "vue-loader" },
      {
        test: /\.s[ac]ss$/,
        use: [
          process.env.NODE_ENV !== "production"
            ? "vue-style-loader"
            : MiniCssExtractPlugin.loader,
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
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg|jpg|jpeg|png|gif)(\?.*$|$)/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "images",
            esModule: false
          }
        }
      }
    ]
  }
};
