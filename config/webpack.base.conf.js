const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/index.js'),
  },
  // 打包后的文件
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
  },
  // // 关闭webpack 自动压缩 混淆 代码
  // optimization: {
  //   minimize: true, // <---- 禁用 uglify.
  // },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
  module: {
    rules: [
      {
        // 所有的js 都进过 babel-loader 处理
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              // localIdentName: '[local]___[hash:base64:5]',
            },
          },
          'less-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      filename: './index.html',
    }),
  ],
};
