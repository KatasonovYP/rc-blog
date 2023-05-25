import { FC } from 'react';
import { classNames, useTheme } from 'shared/lib';
import cls from './navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/app-link/ui/app-link';
import { ThemeSwitcher } from 'features/theme-switcher';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
	className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
	const { t, i18n } = useTranslation();
	return (
		<nav className={classNames(cls.navbar, {}, [])}>
			<div className={cls.links}>
				<AppLink
					theme={AppLinkTheme.SECONDARY}
					to={'/'}
				>
					{t('home')}
				</AppLink>
				<AppLink
					theme={AppLinkTheme.SECONDARY}
					to={'/about'}
				>
					{t('about-nav')}
				</AppLink>
			</div>
		</nav>
	);
};
