import { type ButtonHTMLAttributes, type FC } from 'react';
import { classNames } from 'shared/lib';
import cls from './button.module.scss';

type ButtonTheme = 'clear' | 'ghost' | 'main' | 'outline' | 'outline-inverted' | 'background' | 'inverted-background';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ButtonTheme;
	square?: boolean;
	size?: ButtonSize;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className = '',
        children,
        theme = '',
        size = 'md',
        square = false,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls.square]: square,
    };

    const additional: string[] = [
        className,
        cls[theme],
        cls[size],
    ];

    return (
        <nav
            className={classNames(
                cls.button,
                mods,
                additional,
            )}
            {...otherProps}
        >
            {children}
        </nav>
    );
};
