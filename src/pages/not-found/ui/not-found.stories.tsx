import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'shared/config';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { NotFound } from './not-found';

const meta: Meta<typeof NotFound> = {
    title: 'pages/not-found',
    component: NotFound,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof NotFound>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
