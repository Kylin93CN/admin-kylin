const merge = require('webpack-merge');
const path = require('path');
const baseConf = require('./webpack.base.conf');

module.exports = merge(baseConf, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    port: 8888,
  },
});
