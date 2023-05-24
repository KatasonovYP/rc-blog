import {FC} from 'react';
import {classNames} from "shared/lib";
import cls from './my-button.module.scss'

interface MyButtonProps {
	className?: string;
}

export const MyButton: FC<MyButtonProps> = ({className}) => {
	return (
		<div className={classNames(cls.myButton, {}, [])}>

		</div>
	);
};
