import { type FC, useState } from 'react';
import { classNames } from 'shared/lib';
import { Button } from 'shared/ui/button';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/modal';
import cls from './navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();

    const [isOpen, setIsOpen] = useState(true);

    function onClose() {
        setIsOpen(false);
    }

    function onOpen() {
        setIsOpen(true);
    }

    return (
        <nav className={classNames(cls.navbar, {}, [className])}>
            <Button
                theme="outline-inverted"
                onClick={onOpen}
            >
                {t('login')}
            </Button>
            <Modal onClose={onClose} isOpen={isOpen}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur
                </p>
            </Modal>
        </nav>
    );
};
