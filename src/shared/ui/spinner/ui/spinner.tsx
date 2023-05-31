import { FC } from 'react';
import { classNames } from 'shared/lib';
import cls from './spinner.module.scss';

interface SpinnerProps {
	className?: string;
}

export const Spinner: FC<SpinnerProps> = ({ className }) => {
    return (
        <div className={classNames(cls.spinner, {}, [className])} />
    );
};
