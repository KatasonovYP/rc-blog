import { type ButtonHTMLAttributes, type FC } from 'react';
import { classNames } from 'shared/lib';
import cls from './button.module.scss';

type ThemeButton = 'clear' | 'ghost' | 'main';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className, children, theme = '', ...otherProps
    } = props;
    return (
        <nav
            className={classNames(cls.button, {}, [cls[theme]])}
            {...otherProps}
        >
            {children}
        </nav>
    );
};
