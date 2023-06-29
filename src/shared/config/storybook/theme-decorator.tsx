import 'app/styles/index.scss';
import { Story } from '@storybook/react';
import { Theme } from '../theme/theme-context';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
);
