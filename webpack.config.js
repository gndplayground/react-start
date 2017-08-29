const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PORT = 3333;
module.exports = {
  entry: [
    'react-hot-loader/patch',
    // activate HMR for React

    `webpack-dev-server/client?http://localhost:${PORT}`,
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates
    'babel-polyfill',
    './src/index.js',
    // the entry point of our app
  ],

  output: {
    filename: 'bundle.js',
    // the output bundle

    path: path.resolve(__dirname, 'dist'),

    publicPath: '/',
    // necessary for HMR to know where to load the hot update chunks
  },

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js|jsx?$/,
        loaders: [
          {
            loader: 'eslint-loader',
            options: {
              fix: true,
              emitWarning: true,
            },
          },
        ],
        exclude: /node_modules/,
        include: [path.join(__dirname, 'src')],
      },
      {
        test: /\.js|jsx?$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /(\.css)$/,
        use: ['style-loader', 'css-loader?sourceMap&modules=true&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:8]', 'postcss-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loaders: [
          {
            loader: 'url-loader',
            options: {
              limit: 1,
              name: 'img/[name].[ext]',
            },
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new HtmlWebpackPlugin({
      template: './index.html',
    }),

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates

    new webpack.NoEmitOnErrorsPlugin(),
    // do not emit compiled assets that include errors
  ],

  devServer: {
    host: 'localhost',
    port: PORT,

    historyApiFallback: true,
    // respond to 404s with index.html

    hot: true,
    // enable HMR on the server
  },
};
