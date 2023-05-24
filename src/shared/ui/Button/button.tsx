import {FC} from 'react';
import {classNames} from "shared/lib";
import cls from './button.module.scss'

interface ButtonProps {
	className?: string;
}

export const Button: FC<ButtonProps> = ({className}) => {
	return (
		<nav className={classNames(cls.button, {}, [])}>

		</nav>
	);
};
