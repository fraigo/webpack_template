const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCssPlugin = new ExtractTextPlugin({
   filename: 'main.css'
});

const webPath = 'www';

module.exports = {
  entry: {
    app: './src/index.js',
  },
  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, webPath)
  },
  plugins: [
    new CleanWebpackPlugin([webPath]),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      hash: true,
      title: 'WebPack Template',
      description: 'Webpack template with basic components and setup',
      keywords: 'Webpack, Template, Node.js, npm',
      website: 'https://fraigo.github.io/webpack_template/'+webPath+'/',
      logo: 'images/icon.png',
      logoWidth: 256,
      logoHeight: 256
    }),
    new UglifyJSPlugin(),
    extractCssPlugin,
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.(scss)$/,
        use: extractCssPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  }
};
