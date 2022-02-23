const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
  lintOnSave: false,
  configureWebpack(config) {
    if (process.env.NODE_ENV !== 'production') {
      config.entry = ['./example/main.js'];
    } else {
      config.externals = [nodeExternals()];
    }
  },
};
