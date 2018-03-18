const slsw = require("serverless-webpack");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: slsw.lib.entries,
  target: "node",
  plugins: [new Dotenv()]
};
