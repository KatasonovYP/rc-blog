import type {Preview} from '@storybook/react';
import {StyleDecorator} from "../../src/shared/config/storybook/style-decorator";
import {ThemeDecorator} from "../../src/shared/config/storybook/theme-decorator";
import {Theme} from "../../src/shared/config";
import {RouterDecorator} from "../../src/shared/config/storybook/router-decorator";

const preview: Preview = {
	parameters: {
		actions: {argTypesRegex: '^on[A-Z].*'},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
	decorators: [
		StyleDecorator,
		ThemeDecorator(Theme.LIGHT),
		RouterDecorator,
	]
};

export default preview;
