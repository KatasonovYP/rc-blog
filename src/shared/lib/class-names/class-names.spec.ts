import { classNames } from './class-names';

describe('classNames', () => {
    test('only first param', () => {
        expect(classNames('class')).toBe('class');
    });

    test('only first param', () => {
        expect(classNames('class', {}, ['d'])).toBe('class d');
    });

    test('one mod', () => {
        expect(classNames('class', { a: true }, ['d'])).toBe('class d a');
    });

    test('false mod', () => {
        expect(classNames('class', { a: false }, ['d'])).toBe('class d');
    });

    test('false and true mod', () => {
        expect(classNames('class', { a: false, b: true }, ['d'])).toBe('class d b');
    });
});
