const path = require("path");

module.exports = {
  entry: [
    "@babel/polyfill", // enables async-await
    "./src/index.js"
  ],
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
