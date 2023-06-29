import {
	ProgressPlugin,
	type WebpackPluginInstance,
	DefinePlugin,
} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { type BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildPlugins({
	paths,
	isDev,
}: BuildOptions): WebpackPluginInstance[] {
	const plugins: WebpackPluginInstance[] = [
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css',
		}),
		new DefinePlugin({
			__IS_DEV__: JSON.stringify(isDev),
		})
	]

	isDev && plugins.push(new ProgressPlugin())

	return plugins;
}
