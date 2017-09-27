"use strict";

var webpack = require("webpack");
var path = require("path");
var HTMLPlugin = require("html-webpack-plugin");
var FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");

var packageJson = require("./package.json");
var copyright = [
  "sjs " + packageJson.version,
  "(c) https://github.com/dmitrykurmanov",
  "MIT"
].join("\n");
var outputFolder = "dist";

module.exports = function(options) {
  var config = {
    entry: path.join(__dirname, "./src/index.js"),
    output: {
      path: path.join(__dirname, `./${outputFolder}`),
      filename: `sjs.${options.buildType === "prod" ? "min." : ""}js`,
      library: "SJS",
      libraryTarget: "umd",
      umdNamedDefine: true
    },
    resolve: {
      extensions: [".js"]
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: "babel-loader",
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ]
    },
    plugins: [
      new webpack.BannerPlugin(copyright),
      new HTMLPlugin({
        template: "./template.html",
        inject: "head"
      }),
      new FriendlyErrorsWebpackPlugin()
    ],
    devtool: options.buildType === "prod" ? "source-map" : "inline-source-map",
    devServer: {
      contentBase: path.join(__dirname, outputFolder),
      open: true,
      port: 7333
    }
  };

  if (options.buildType === "prod") {
    config.plugins = config.plugins.concat([
      new webpack.optimize.UglifyJsPlugin()
    ]);
  }

  return config;
};
