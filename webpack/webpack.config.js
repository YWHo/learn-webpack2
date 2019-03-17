const HtmlWebpackPlugin = require('html-webpack-plugin');
const package = require('../package.json');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require("path")

module.exports = {
  entry: {
    app: "./src/scripts/app.js",
    vendor: Object.keys(package.dependencies),
    settings: "./src/scripts/settings.js"
  },
  output: {
    path: path.join(__dirname, "../dist/"),
    filename: "[name].bundle.js"
  },
  watch:true,
  resolve: { extensions: [".js", ".ts"] },
  devServer: {
    contentBase: path.join(__dirname, "../dist/"),
    port: 9000
  },
  plugins: [
    new ExtractTextPlugin({filename:'app.bundle.css'}),
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
      path: path.join(__dirname, "../dist/"),
      filename: 'index.html' 
    }),
    new HtmlWebpackPlugin({
      hash: true,
      title: 'My Awesome application',
      myPageHeader: 'Settings',
      template: './src/index.html',
      chunks: ['vendor', 'shared', 'settings'],
      path: path.join(__dirname, "../dist/"),
      filename: 'settings.html' 
    })
  ],
  module:{
    rules:[
      {
        test:/\.(s*)css$/,
        use: ExtractTextPlugin.extract({
          fallback:'style-loader',
          use:['css-loader','sass-loader'],
        })
      }
    ]
  }
}