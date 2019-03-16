const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/scripts/app.js", //path relative to this file
  output: {
    filename: "./dist/app.bundle.js" //path relative to this file
  },
  watch:true,
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'My Awesome application',
      myPageHeader: 'Hello World',
      template: './src/index.html',
      filename: './dist/index.html' // relative to root of the application
    })
  ]
}