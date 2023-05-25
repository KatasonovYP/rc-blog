import { FC } from 'react';
import { classNames } from 'shared/lib';
import cls from './language-switcher.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/button';
import { changeLanguage } from 'i18next';

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
			theme='main'
			onClick={toggle}
		>
			{t('language')}
		</Button>
	);
};
