import { memoize } from '../functions/memoize';

describe('memoize', () => {
    test('should memoize', () => {
        const fn = jest.fn((x) => x);
        const argFn = () => 1;
        const memoizedFn = memoize(fn);

        memoizedFn(argFn);
        memoizedFn(argFn);

        expect(fn).toHaveBeenCalledTimes(1);
    });
});
