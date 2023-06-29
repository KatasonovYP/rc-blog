import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Theme } from 'shared/config';
import { Sidebar } from './sidebar';

const meta: Meta<typeof Sidebar> = {
    title: 'widgets/sidebar',
    component: Sidebar,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {
    args: {},
};
export const Dark: Story = {
    args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
