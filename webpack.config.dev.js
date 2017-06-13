var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
      'webpack-hot-middleware/frontend',
      './frontend/main',
      './frontend/styles/main.scss'
  ],
  output: {
    path: path.join(__dirname, '/static/dist/'),
    filename: 'bundle.js',
    publicPath: '/static/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin({
      filename: 'bundle.css',
      allChunks: true,
    })
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
    },
    { // regular css files
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader?importLoaders=1',
        }),
    },
        { // sass / scss loader for webpack
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
    }
    ]
  }
};