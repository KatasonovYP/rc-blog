import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'shared/config';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { AppLink } from './app-link';

const meta: Meta<typeof AppLink> = {
    title: 'shared/app-link',
    component: AppLink,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    args: {
        to: '/',
        theme: 'primary',
        children: 'Text',
    },
};

export const PrimaryDark: Story = {
    args: {
        to: '/',
        theme: 'primary',
        children: 'Text',
    },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Secondary: Story = {
    args: {
        to: '/',
        theme: 'secondary',
        children: 'Text',
    },
};

export const SecondaryDark: Story = {
    args: {
        to: '/',
        theme: 'secondary',
        children: 'Text',
    },
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
