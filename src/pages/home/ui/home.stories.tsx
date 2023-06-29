import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'shared/config';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import Home from './home';

const meta: Meta<typeof Home> = {
    title: 'pages/home',
    component: Home,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Home>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
