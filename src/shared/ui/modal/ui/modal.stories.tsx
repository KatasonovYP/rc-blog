import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'shared/config';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator';
import { Modal } from './modal';

const meta: Meta<typeof Modal> = {
    title: 'shared/modal',
    component: Modal,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const ModalLight: Story = {
    args: {
        isOpen: true,
        children: 'Text',
    },
};

export const ModalDark: Story = {
    args: {
        isOpen: true,
        children: 'Text',
    },
};
ModalDark.decorators = [ThemeDecorator(Theme.DARK)];
