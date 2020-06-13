const merge = require('webpack-merge');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const baseConf = require('./webpack.base.conf');

module.exports = merge(baseConf, {
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new ImageminPlugin({
      plugins: [
        imageminMozjpeg({
          quality: 65,
          progressive: true,
        }),
      ],
    }),
  ],
});
