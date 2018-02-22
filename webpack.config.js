const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const currentDate = new Date();
const timestamp=""+currentDate.getHours()+currentDate.getMinutes()+currentDate.getSeconds();

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
	  description: 'Webpack template with basic components and setup',
	  keywords: 'Webpack, Template, Node.js, npm',
	  website: 'https://fraigo.github.io/webpack_template/dist/',
	  logo:'logo.png',
	  logoWidth:256,
	  logoHeight:256,
	  timestamp: timestamp
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
