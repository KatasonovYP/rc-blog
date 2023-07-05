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

export const OutlineInverted: Story = {
    args: {
        theme: 'outline-inverted',
        children: 'Text',
    },
};

export const OutlineInvertedDark: Story = {
    args: {
        theme: 'outline-inverted',
        children: 'Text',
    },
};
OutlineInvertedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Background: Story = {
    args: {
        theme: 'background',
        children: 'Text',
    },
};

export const BackgroundDark: Story = {
    args: {
        theme: 'background',
        children: 'Text',
    },
};
BackgroundDark.decorators = [ThemeDecorator(Theme.DARK)];

export const InvertedBackground: Story = {
    args: {
        theme: 'inverted-background',
        children: 'Text',
    },
};

export const InvertedBackgroundDark: Story = {
    args: {
        theme: 'inverted-background',
        children: 'Text',
    },
};
InvertedBackgroundDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeSM: Story = {
    args: {
        theme: 'inverted-background',
        size: 'sm',
        children: 'Text',
    },
};

export const SizeMD: Story = {
    args: {
        theme: 'inverted-background',
        size: 'md',
        children: 'Text',
    },
};

export const SizeLG: Story = {
    args: {
        theme: 'inverted-background',
        size: 'lg',
        children: 'Text',
    },
};

export const SizeXL: Story = {
    args: {
        theme: 'inverted-background',
        size: 'xl',
        children: 'Text',
    },
};

export const SizeSquareSM: Story = {
    args: {
        theme: 'inverted-background',
        size: 'sm',
        square: true,
        children: '<',
    },
};

export const SizeSquareMD: Story = {
    args: {
        theme: 'inverted-background',
        size: 'md',
        square: true,
        children: '<',
    },
};

export const SizeSquareLG: Story = {
    args: {
        theme: 'inverted-background',
        size: 'lg',
        square: true,
        children: '<',
    },
};

export const SizeSquareXL: Story = {
    args: {
        theme: 'inverted-background',
        size: 'xl',
        square: true,
        children: '<',
    },
};
