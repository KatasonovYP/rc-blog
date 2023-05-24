import { FC } from 'react';
import { classNames, useTheme } from 'shared/lib';
import cls from './navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/app-link';

interface NavbarProps {
	className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
	const { toggleTheme } = useTheme();
	return (
		<nav className={classNames(cls.navbar, {}, [])}>
			<button onClick={toggleTheme}>theme</button>
			<div className={cls.links}>
				<AppLink
					theme={AppLinkTheme.SECONDARY}
					to={'/'}
				>
					Home
				</AppLink>
				<AppLink
					theme={AppLinkTheme.SECONDARY}
					to={'/about'}
				>
					About
				</AppLink>
			</div>
		</nav>
	);
};
