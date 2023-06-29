import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'shared/config';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Spinner } from './spinner';

const meta: Meta<typeof Spinner> = {
    title: 'shared/spinner',
    component: Spinner,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
