import { onCall } from '../decorators/onCall';

describe('onCall', () => {
    const fn = jest.fn();
    class TestClass {
        @onCall(fn)
        public method () {};
    }

    test('should decorate method', () => {
        const testClass = new TestClass();

        expect(fn).not.toHaveBeenCalled();

        testClass.method();

        expect(fn).toHaveBeenCalled();
    });
});
