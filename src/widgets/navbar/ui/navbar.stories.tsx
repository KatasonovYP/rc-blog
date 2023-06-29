import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Theme } from 'shared/config';
import { Navbar } from './navbar';

const meta: Meta<typeof Navbar> = {
    title: 'widgets/navbar',
    component: Navbar,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
    args: {},
};
export const Dark: Story = {
    args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
