var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/frontend',
    './frontend/main'
  ],
  output: {
    path: path.join(__dirname, '/static/dist/'),
    filename: 'bundle.js',
    publicPath: '/static/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
    // js
    {
      test: /\.js$/,
      loaders: ['babel-loader'],
      include: path.join(__dirname, 'frontend')
    },
    // CSS
    {
      test: /\.styl$/,
      include: path.join(__dirname, 'frontend'),
      loader: 'style-loader!css-loader!stylus-loader'
    }
    ]
  }
};