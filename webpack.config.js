var path = require('path');

module.exports = {
  entry: ['./app.js'],
  output: {
    filename: 'index.js',
    path: path.resolve('./public')
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader'
    }]
  }
}
