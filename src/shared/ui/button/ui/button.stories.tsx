import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'shared/config';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Button } from './button';

const meta: Meta<typeof Button> = {
    title: 'shared/button',
    component: Button,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Main: Story = {
    args: {
        theme: 'main',
        children: 'Text',
    },
};
export const Clear: Story = {
    args: {
        theme: 'clear',
        children: 'Text',
    },
};
export const ClearDark: Story = {
    args: {
        theme: 'clear',
        children: 'Text',
    },
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Ghost: Story = {
    args: {
        theme: 'ghost',
        children: 'Text',
    },
};

export const Outline: Story = {
    args: {
        theme: 'outline',
        children: 'Text',
    },
};

export const OutlineDark: Story = {
    args: {
        theme: 'outline',
        children: 'Text',
    },
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
