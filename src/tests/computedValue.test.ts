import { computedValue } from '../functions/computedValue';

describe('computedValue', () => {
    test('should compute value each time', () => {
        const fn = jest.fn(() => 1);
        const value = computedValue(fn);

        value.get();
        value.get();
        value.get();

        expect(fn).toHaveBeenCalledTimes(3);
    });
});
