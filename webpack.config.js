var HtmlWebpackPlugin = require('html-webpack-plugin');

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
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:{
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      },
      // Bootstrap - https://github.com/shakacode/bootstrap-loader#jquery
      // FontAwesome - https://gist.github.com/Turbo87/e8e941e68308d3b40ef6
      { test: /bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/, loader: 'imports-loader?jQuery=jquery' },
      { test: /\.(woff2?|svg)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000' },
      { test: /\.(ttf|eot)(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
      {
        test: /\.(jpg|png)$/,
        loader: 'url-loader'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'AWAKE',
      template: 'index.pug'
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
