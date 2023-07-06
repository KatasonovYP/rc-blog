import { counterActions, counterReducer } from './counter-slice';
import { CounterSchema } from '../types/counter-schema';

describe('counter-slice.spec', () => {
    test('decrement', () => {
        const state: CounterSchema = { value: 10 };
        expect(
            counterReducer(state as CounterSchema, counterActions.increment()),
        )
            .toEqual({ value: 11 });
    });

    test('increment', () => {
        const state: CounterSchema = { value: 10 };
        expect(
            counterReducer(state as CounterSchema, counterActions.decrement()),
        )
            .toEqual({ value: 9 });
    });

    test('empty state', () => {
        expect(
            counterReducer(undefined, counterActions.increment()),
        )
            .toEqual({ value: 1 });
    });
});
