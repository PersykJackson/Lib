import { createRunOnce } from '../functions/createRunOnce';

describe('createRunOnce', () => {
    test('should run once', () => {
        const fn = jest.fn();
        const runOnce = createRunOnce();

        runOnce(fn);
        runOnce(fn);
        runOnce(fn);

        expect(fn).toHaveBeenCalledTimes(1);
    });
});
