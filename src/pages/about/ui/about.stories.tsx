import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'shared/config';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import About from './about';

const meta: Meta<typeof About> = {
    title: 'pages/about',
    component: About,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof About>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
