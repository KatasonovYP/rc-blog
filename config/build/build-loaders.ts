import {type RuleSetRule} from 'webpack';
import {type BuildOptions} from './types/config';
import {buildCssLoader} from "./loaders/build-css-loader";
import {buildSvgLoader} from "./loaders/build-svg-loader";

export function buildLoaders({isDev}: BuildOptions): RuleSetRule[] {
	const typescriptLoader: RuleSetRule = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};

	const svgLoader: RuleSetRule = buildSvgLoader();

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

	const cssLoader: RuleSetRule = buildCssLoader(isDev);

	return [jsonLoader, fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoader];
}
