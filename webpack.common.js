const VueLoaderPlugin = require("vue-loader/lib/plugin");

const path = require("path");

module.exports = {
  entry: {
    main: "./src/main.js",
    vendor: "./src/vendor.js"
  },
  resolve: {
    alias: {
      ROOT: path.resolve(__dirname, "./src")
    },
    extensions: [".json", ".html", ".vue", ".js", ".scss"]
  },
  plugins: [new VueLoaderPlugin()],
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
