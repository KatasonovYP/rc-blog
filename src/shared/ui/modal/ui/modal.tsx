import {
    FC, MouseEvent, ReactNode, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib';
import { Portal } from 'shared/ui/portal';
import cls from './modal.module.scss';

const ANIMATION_DELAY = 200;

interface ModalProps {
    onClose?: () => void;
    isOpen?: boolean;
    className?: string;
    children?: ReactNode;
}

export const Modal: FC<ModalProps> = (props) => {
    const {
        onClose,
        isOpen = false,
        className,
        children,
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const timeRef = useRef<ReturnType<typeof setTimeout>>();

    function closeHandler() {
        if (onClose) {
            setIsClosing(true);
            timeRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }

    function onContent(event: MouseEvent<HTMLDivElement>) {
        event.stopPropagation();
    }

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.closing]: isClosing,
    };
    return (
        <Portal>
            {/* eslint-disable-next-line */}
            <div
                onClick={closeHandler}
                className={classNames(cls.overlay, mods)}
            >
                {/* eslint-disable-next-line */}
                <div
                    onClick={onContent}
                    className={classNames(cls.modal, {}, [className])}
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
};
