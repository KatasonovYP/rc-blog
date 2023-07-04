import { type FC, useState } from 'react';
import { classNames } from 'shared/lib';
import { ThemeSwitcher } from 'features/theme-switcher';
import { Button } from 'shared/ui/button';
import { LanguageSwitcher } from 'features/language-switcher/ui/language-switcher';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/route/route';
import HomeIcon from '../../../shared/assets/icons/home-20-20.svg';
import AboutIcon from '../../../shared/assets/icons/about-20-20.svg';
import cls from './sidebar.module.scss';
import { AppLink } from '../../../shared/ui/app-link';

interface SidebarProps {
	className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState<boolean>(false);

    function toggle() {
        setCollapsed((prev) => !prev);
    }

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button
                className={cls.collapseButton}
                data-testid="sidebar-toggle"
                theme="inverted-background"
                square
                size="xl"
                onClick={toggle}
            >
                {collapsed ? '>' : '<'}
            </Button>

            <div className={cls.links}>
                <AppLink
                    theme="secondary"
                    to={RoutePath.main}
                    className={cls.link}
                >
                    <AboutIcon className={cls.icon} />
                    <span className={cls.linkText}>
                        {t('home')}
                    </span>
                </AppLink>
                <AppLink
                    theme="secondary"
                    to={RoutePath.about}
                    className={cls.link}
                >
                    <HomeIcon className={cls.icon} />
                    <span className={cls.linkText}>
                        {t('about-nav')}
                    </span>
                </AppLink>
            </div>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher short={collapsed} />
            </div>
        </div>
    );
};
