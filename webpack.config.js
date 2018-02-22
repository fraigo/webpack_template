const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry:{
	app:'./src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'WebPack Template',
	  template: 'src/index.html',
	  description: 'Webpack template with basic components and setup'
    })
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
           'file-loader'
         ]
     },
	 {
         test: /\.(woff|woff2|eot|ttf|otf)$/,
         use: [
           'file-loader'
         ]
     },
	 {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
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
