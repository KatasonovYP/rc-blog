import { FC } from 'react';
import { classNames, useTheme } from 'shared/lib';
import cls from './theme-switcher.module.scss';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Theme } from 'shared/config';
import { Button } from 'shared/ui/button';

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
	const { theme, toggleTheme } = useTheme();
	return (
		<Button
			theme={'clear'}
			onClick={toggleTheme}
			className={classNames(cls.themeSwither, {}, [className])}
		>
			{theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
		</Button>
	);
};
