const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './main.ts',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './dist')
	},
	resolve: {
		extensions: ['.ts', '.js', '.css']
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					// MiniCssExtractPlugin.loader,
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.ts$/,
				loader: 'awesome-typescript-loader'
			}
		]
	},
	plugins: [
		// new MiniCssExtractPlugin({
		// 	filename: `[name]_[contenthash:8].css`
		// })
	],
	devServer: {
		hot: true,
		open: true
	},
	watch: true,
	watchOptions: {
		ignored: /node_modules/,
		aggregateTimeout: 300,
		poll: 600
	},
	devtool: 'source-map'
};
