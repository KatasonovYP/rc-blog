import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/button';
import { classNames } from 'shared/lib';

interface LanguageSwitcherProps {
	className?: string;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ className }) => {
    const { t, i18n } = useTranslation();

    function toggle() {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }

    return (
        <Button
            theme="main"
            onClick={toggle}
            className={classNames('', {}, [className])}
        >
            {t('language')}
        </Button>
    );
};
