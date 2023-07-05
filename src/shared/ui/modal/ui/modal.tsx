import { FC, MouseEvent, ReactNode } from 'react';
import { classNames } from 'shared/lib';
import { Portal } from 'shared/ui/portal';
import cls from './modal.module.scss';

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

    function closeHandler() {
        if (onClose) {
            onClose();
        }
    }

    function onContent(event: MouseEvent<HTMLDivElement>) {
        event.stopPropagation();
    }

    return (
        <Portal>
            {/* eslint-disable-next-line */}
            <div
                onClick={closeHandler}
                className={classNames(cls.overlay, { [cls.opened]: isOpen })}
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
