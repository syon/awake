const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  context: __dirname + '/src',

  entry: {
    javascript: './app.js',
  },

  output: {
    path: __dirname + '/www',
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: 'www',
    port: 3000
  },

  devtool: 'source-map',

  module: {
    loaders: [
      {
        // https://github.com/babel/babel-loader
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      }
    ]
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new BrowserSyncPlugin({
      server: { baseDir: ['./www'] }
    })
  ],

  postcss: function() {
    var precss = require('precss');
    var autoprefixer = require('autoprefixer');
    return [
      autoprefixer({ browsers: ['IE 9', 'IE 10', 'IE 11', 'last 2 versions'] }),
      precss
    ];
  }
};
