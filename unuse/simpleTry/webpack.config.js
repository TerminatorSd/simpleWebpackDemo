const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './main.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './dist')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader'
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: `[name]_[contenthash:8].css`
		})
	],
	devServer: {
		hot: true,
		open: true,
	  watchOptions: {
		  ignored: /node_modules/,
		  aggregateTimeout: 300,
		  poll: 1000
	  }
	}
};
