const HtmlWebpackPlugin = require('html-webpack-plugin');
const package = require('../package.json');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {
  entry: {
    app: "./src/scripts/app.js",
    vendor: Object.keys(package.dependencies),
    settings: "./src/scripts/settings.js"
  },
  output: {
    filename: "./dist/[name].bundle.js"
  },
  watch:true,
  resolve: { extensions: [".js", ".ts"] },
  plugins: [
    new CommonsChunkPlugin({
      name: 'shared',
      minChunks: 2
    }),
    new HtmlWebpackPlugin({
      hash: true,
      title: 'My Awesome application',
      myPageHeader: 'Hello World',
      template: './src/index.html',
      chunks: ['vendor', 'shared', 'app'],
      filename: './dist/index.html' // relative to root of the application
    }),
    new HtmlWebpackPlugin({
      hash: true,
      title: 'My Awesome application',
      myPageHeader: 'Settings',
      template: './src/index.html',
      chunks: ['vendor', 'shared', 'settings'],
      filename: './dist/settings.html' 
  })
  ],
  node: {
    fs: "empty"
  }
}