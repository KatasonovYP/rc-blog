import {type RuleSetRule} from 'webpack';
import {type BuildOptions} from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildLoaders({isDev}: BuildOptions): RuleSetRule[] {
	const typescriptLoader: RuleSetRule = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};

	const svgLoader: RuleSetRule = {
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	};

	const fileLoader: RuleSetRule = {
		test: /\.(png|jpe?g|gif|woff2?)$/i,
		use: [{loader: 'file-loader'}],
	};

	const babelLoader: RuleSetRule = {
		test: /\.(js|jsx|tsx)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env', "@babel/preset-typescript"]
			}
		}
	}

	const jsonLoader: RuleSetRule = {
		test: /\.json$/,
		loader: 'json-loader'
	}

	const cssLoader: RuleSetRule = {
		test: /\.s[ac]ss$/i,
		use: [
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			{
				loader: 'css-loader',
				options: {
					modules: {
						auto: /\.module\./,
						localIdentName: isDev
							? '[path][name]__[local]--[hash:base64:5]'
							: '[hash:base64:8]',
						exportLocalsConvention: 'camelCase'
					}
				}
			},
			{
				loader: 'sass-loader',
			},
		]
	};
	return [jsonLoader, fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoader];
}
