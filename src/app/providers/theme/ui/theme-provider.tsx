import {
    type FC, type PropsWithChildren, useMemo, useState,
} from 'react';
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext,
    type ThemeContextProps,
} from 'shared/config';

const defaultTheme =	(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;
document.body.className = defaultTheme;

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultProps = useMemo(
        (): ThemeContextProps => ({ theme, setTheme }),
        [theme],
    );

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};
