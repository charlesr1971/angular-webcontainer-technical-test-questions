const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const webpack = require('webpack');

module.exports = {
  // disable the host check on sandbox
  devServer: {
    historyApiFallback: true,
    disableHostCheck: true
  }
};