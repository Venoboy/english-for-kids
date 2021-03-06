const webpack = require('webpack');
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, options) => {
  const isProduction = options.mode === 'production';


  const config = {
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? 'none' : 'source-map',
    entry: ['./src/index.js', './src/sass/style.scss'],
    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'script.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.(sa|sc|c)ss$/i,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: process.env.NODE_ENV === 'development',
                reloadAll: true,
              },
            },

            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                modules: {
                  auto: true,
                  localIdentName: '[path][name]__[local]--[hash:base64:5]',
                },
              }
            },
            {
              loader: 'postcss-loader', // Run post css actions
              options: {
                plugins: function () { // post css plugins, can be exported to postcss.config.js
                  return [
                    require('precss'),
                    require('autoprefixer')
                  ];
                }
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ]
        },
        {
          test: /\.html$/i,
          exclude: /node_modules/,
          loader: 'html-loader',
          options: {
            esModule: true,
          },
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          loader: 'file-loader',
          options: {
            outputPath: 'assets/img/'
          },
        },
        {
          test: /\.ico$/,
          loader: 'file-loader?name=[name].[ext]'
        },
        {
          test: /\.(ttf|eot|woff|woff2)$/,
          use: {
            loader: "file-loader",
            options: {
              outputPath: 'assets/fonts/',
            }
          }
        },
        {
          test: /\.mp3$/,
          loader: 'file-loader',
          options: {
            outputPath: 'assets/audio/'
          },
        },
      ]
    },

    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: 'index.html',
        favicon: './favicon.ico'
      }),
      new MiniCssExtractPlugin({
        filename: 'style.css'
      }),
    ],
    devServer: {
      contentBase: './dist',
      writeToDisk: true,
      clientLogLevel: 'silent',
      hot: true,
      open: 'chrome',
    }
  };

  return config
}
;