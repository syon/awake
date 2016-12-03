var postcss_simple_vars = require('postcss-simple-vars');
var postcss_nested = require('postcss-nested');
var autoprefixer = require('autoprefixer');

module.exports = {
  context: __dirname + '/src',

  entry: {
    javascript: './index.js',
    html: './index.html'
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
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:{
          presets: ['es2015']
        }
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!postcss-loader'
      },
      {
        // https://github.com/webpack/file-loader
        test: /\.html$/,
        loader: 'file?name=[path][name].[ext]'
      }
    ]
  },

  postcss: function() {
    // Needs webpack reload for change
    // https://github.com/postcss/postcss-simple-vars#variables
    var colors = require('./src/styles/colors');
    return [
      postcss_simple_vars({ variables: colors }),
      postcss_nested,
      autoprefixer({ browsers: ['IE 9', 'IE 10', 'IE 11', 'last 2 versions'] })
    ];
  }
};
