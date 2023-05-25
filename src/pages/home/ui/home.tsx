import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

const Home: FC = () => {
    const { t } = useTranslation('home');
    return (
        <div>
            <h1>{t('home page')}</h1>
        </div>
    );
};

export default Home;
