const slsw = require("serverless-webpack");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: slsw.lib.webpack.isLocal ? "development" : "production",
  entry: slsw.lib.entries,
  target: "node",
  plugins: [new Dotenv()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "env",
                {
                  targets: {
                    node: "6.10"
                  }
                }
              ]
            ]
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [".js"]
  }
};
