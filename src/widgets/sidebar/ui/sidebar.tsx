import { type FC, useState } from 'react';
import { classNames } from 'shared/lib';
import { ThemeSwitcher } from 'features/theme-switcher';
import { Button } from 'shared/ui/button';
import { LanguageSwitcher } from 'features/language-switcher/ui/language-switcher';
import { useTranslation } from 'react-i18next';
import cls from './sidebar.module.scss';

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
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button
                theme="main"
                onClick={toggle}
            >
                {t('toggle')}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </div>
    );
};
