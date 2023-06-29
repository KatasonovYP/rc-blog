import webpack from "webpack";
import {BuildPaths} from "../build/types/config";
import path from "path";
import {buildCssLoader} from "../build/loaders/build-css-loader";
import {buildSvgLoader} from "../build/loaders/build-svg-loader";

export default ({config}: { config: webpack.Configuration }) => {
	const paths: BuildPaths = {
		html: '',
		entry: '',
		build: '',
		src: path.resolve(__dirname, '..', '..', 'src'),
	}

	config.resolve?.modules?.push(paths.src);

	config.resolve?.extensions?.push('ts', 'tsx');

	config.module?.rules?.push(buildCssLoader(true));


	if (config.module?.rules) {
		config.module.rules = config.module?.rules?.map((rule: webpack.RuleSetRule | "...") => {
			if (rule !== "..." && /svg/.test(rule.test as string)) {
				return {...rule, exclude: /\.svg$/i};
			}

			return rule;
		});
	}

	config.module?.rules?.push(buildSvgLoader());

	return config;
}
