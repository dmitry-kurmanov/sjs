"use strict";

var webpack = require("webpack");
var path = require("path");
var HTMLPlugin = require("html-webpack-plugin");
var FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var CleanWebpackPlugin = require('clean-webpack-plugin');

var packageJson = require("./package.json");
var copyright = [
  "sjs " + packageJson.version,
  "(c) https://github.com/dmitrykurmanov",
  "MIT"
].join("\n");
var outputFolder = "dist";

module.exports = function(options) {
  var config = {
    entry: path.join(__dirname, "./src/index.jsx"),
    output: {
      path: path.join(__dirname, `./${outputFolder}`),
      filename: `sjs.${options.buildType === "prod" ? "min." : ""}js`,
      library: "SJS",
      libraryTarget: "umd",
      umdNamedDefine: true
    },
    resolve: {
      extensions: ["jsx", ".js"]
    },
    module: {
      rules: [
        // https://github.com/webpack-contrib/source-map-loader/issues/54
        // {
        //   test: /\.jsx?$/,
        //   exclude: path.resolve(__dirname, 'src'),
        //   enforce: 'pre',
        //   use: 'source-map-loader'
        // },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.js$/,
          use: "babel-loader",
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin([outputFolder], {verbose: true}),
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.BannerPlugin(copyright),
      new HTMLPlugin({
        template: "./src/template.html",
        inject: "head"
      }),
      new FriendlyErrorsWebpackPlugin()
    ],
    devtool: options.buildType === "prod" ? "source-map" : "inline-source-map",
    devServer: {
      contentBase: path.join(__dirname, outputFolder),
      open: true
    }
  };

  if (options.buildType === "prod") {
    config.plugins = config.plugins.concat([
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      new webpack.optimize.UglifyJsPlugin()
    ]);
  }

  if (options.buildType === "dev") {
    config.plugins = config.plugins.concat([
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
      }),
      new webpack.HotModuleReplacementPlugin()
    ]);
  }

  if (options.analyze === "true") {
    config.plugins = config.plugins.concat([
      new BundleAnalyzerPlugin()
    ]);
  }

  return config;
};
