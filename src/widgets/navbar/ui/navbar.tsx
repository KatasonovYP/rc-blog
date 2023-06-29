import { type FC } from 'react';
import { classNames } from 'shared/lib';
import { AppLink, AppLinkTheme } from 'shared/ui/app-link/ui/app-link';
import { useTranslation } from 'react-i18next';
import cls from './navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <nav className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    theme="secondary"
                    to="/"
                >
                    {t('home')}
                </AppLink>
                <AppLink
                    theme="secondary"
                    to="/about"
                >
                    {t('about-nav')}
                </AppLink>
            </div>
        </nav>
    );
};
