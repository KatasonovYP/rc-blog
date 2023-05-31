import { FC } from 'react';
import { classNames } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import cls from './not-found.module.scss';

interface NotFoundProps {
	className?: string;
}

export const NotFound: FC<NotFoundProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.notFound, {}, [className])}>
            {t('not found')}
        </div>
    );
};
