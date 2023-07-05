import 'app/styles/index.scss';
import { Story } from '@storybook/react';
import { ThemeProvider } from 'app/providers';
import { Theme } from '../theme/theme-context';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <ThemeProvider initialTheme={theme}>
        <StoryComponent />
    </ThemeProvider>
);
