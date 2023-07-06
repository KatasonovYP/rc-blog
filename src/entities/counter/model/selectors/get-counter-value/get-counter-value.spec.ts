import { DeepPartial } from '@reduxjs/toolkit';
import { getCounterValue } from './get-counter-value';
import { StateSchema } from '../../../../../app/providers/store';

describe('get-counter-value.spec', () => {
    test('', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounterValue(state as StateSchema))
            .toEqual(10);
    });
});
