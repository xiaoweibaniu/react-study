const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
	filename: "[name].[contenthash].css",
	disable: process.env.NODE_ENV === "development"
});

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
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					presets: ['env', 'react', 'stage-0'],
					cacheDirectory: true,
					plugins: ['react-hot-loader/babel']
				}
			},
			{
				test: /\.(png|jpg|gif|woff|woff2|eot|ttf|otf|svg)$/,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 30000, //  30k
						name: "[hash:8].[name].[ext]"
					}
				}]
			},
			{
				test: /\.(css|scss)$/,
				use: [
					{loader: 'style-loader'},
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
							plugins: () => [
								require('postcss-flexbugs-fixes'),
								require('autoprefixer')({
									browsers: [
										'>1%',
										'last 4 versions',
										'Firefox ESR',
										'not ie < 9', // React doesn't support IE8 anyway
									],
									flexbox: 'no-2009',
								}),
								require('postcss-px2rem')({remUnit: 75})
							]
						}
					},
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	},
	resolve: { // 解析
		extensions: ['.js', '.json', '.scss', '.less', 'jsonp'],
		alias: {
			'babel-runtime': path.dirname(
				require.resolve('babel-runtime/package.json')
			),
			'@': path.resolve('src'),
		}
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