import { FC } from 'react';
import { Button } from 'shared/ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/store';
import { useTranslation } from 'react-i18next';
import { counterActions } from '../model/slice/counter-slice';

interface CounterProps {
}

export const Counter: FC<CounterProps> = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const counterValue = useSelector((state: StateSchema) => state.counter.value);

    function increment() {
        dispatch(counterActions.increment());
    }

    function decrement() {
        dispatch(counterActions.decrement());
    }

    return (
        <div>
            <h1
                data-testid="value-title"
            >
                {counterValue}
            </h1>
            <Button
                theme="outline"
                onClick={increment}
                data-testid="increment-button"
            >
                {t('increment')}
            </Button>
            <Button
                theme="outline"
                onClick={decrement}
                data-testid="decrement-button"
            >
                {t('decrement')}
            </Button>
        </div>
    );
};
