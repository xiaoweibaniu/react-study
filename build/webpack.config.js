const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: path.resolve(__dirname, '../src/index.js')
	},
	output: {
		path: path.resolve(__dirname, '../public'),
		filename: 'bundle.js',
		publicPath: ''
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					presets: ['env', 'react']
				}

			}
		]
	},
	resolve: { // 解析
		extensions: ['.js', '.json', '.scss', '.less', 'jsonp'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: '哈哈哈',
			filename: 'index.html',
			template: path.resolve(__dirname, '../src/template.html')
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		contentBase: './public',
		host: 'localhost',
		port: 3000,
		open: true,
		inline: true,
		hot: true,
		historyApiFallback: {
			index: 'index.html' // 所有404的请求全部访问该配置下的url
		}
	}
};