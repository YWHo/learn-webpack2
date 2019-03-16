const HtmlWebpackPlugin = require('html-webpack-plugin');
const package = require('../package.json');

module.exports = {
  entry: {
    app: "./src/scripts/app.js",
    vendor: Object.keys(package.dependencies)
  },
  output: {
    filename: "./dist/[name].bundle.js"
  },
  watch:true,
  resolve: { extensions: [".js", ".ts"] },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'My Awesome application',
      myPageHeader: 'Hello World',
      template: './src/index.html',
      filename: './dist/index.html' // relative to root of the application
    })
  ],
  node: {
    fs: "empty"
  }
}