import { type FC } from 'react';
import { classNames } from 'shared/lib';
import cls from './navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    return (
        <nav className={classNames(cls.navbar, {}, [className])} />
    );
};
