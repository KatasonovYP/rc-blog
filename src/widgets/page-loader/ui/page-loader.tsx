import { FC } from 'react';
import { classNames } from 'shared/lib';
import { Spinner } from 'shared/ui/spinner';
import cls from './page-loader.module.scss';

interface PageLoaderProps {
	className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => {
    return (
        <div className={classNames(cls.pageLoader, {}, [className])}>
            <Spinner />
        </div>
    );
};
