const path = require("path");
const merge = require("webpack-merge");

module.exports = merge(require("./webpack.base"), {
  context: __dirname,

  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: "upload-wrapper",
    libraryTarget: "umd"
  },

  externals: {
    vue: "vue"
  }
});
