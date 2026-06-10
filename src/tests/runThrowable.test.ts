import { runThrowable } from '../functions/runThrowable';

describe('runThrowable', () => {
    const throwableFn = () => {
        throw new Error();
    };

    test('should not throw', () => {
        expect(() => runThrowable(throwableFn, jest.fn(), jest.fn())).not.toThrow();
    });

    test('should use error fn', () => {
        const onError = jest.fn();
        const onSuccess = jest.fn();

        runThrowable(throwableFn, onSuccess, onError);

        expect(onError).toHaveBeenCalled();
        expect(onSuccess).not.toHaveBeenCalled();
    });

    test('should use success fn', () => {
        const successFn = jest.fn();
        const onError = jest.fn();
        const onSuccess = jest.fn();

        runThrowable(successFn, onSuccess, onError);

        expect(onError).not.toHaveBeenCalled();
        expect(onSuccess).toHaveBeenCalled();
    });
});
