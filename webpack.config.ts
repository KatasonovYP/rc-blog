import type webpack from 'webpack';
import { buildWebpackConfig } from './config/build/build-webpack-config';
import path from 'path';
import {
	type BuildEnv,
	type BuildMode,
	type BuildPaths,
} from './config/build/types/config';

export default (env: BuildEnv) => {
	const paths: BuildPaths = {
		entry: path.resolve(__dirname, 'src', 'main.tsx'),
		build: path.resolve(__dirname, 'dist'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		src: path.resolve(__dirname, 'src'),
	};

	const mode: BuildMode = env.mode || 'development';
	const port = env.port || 3000;

	const isDev = mode === 'development';

	const config: webpack.Configuration = buildWebpackConfig({
		mode,
		paths,
		isDev,
		port,
	});

	return config;
};
