import { Logger } from '../classes/Logger/Logger';

describe('Logger', () => {
    const fn = jest.fn();
    const logger = new Logger({
        write(text: string) {
            fn(text);
        }
    });

    beforeEach(() => fn.mockReset());

    test('should log info', () => {
        logger.info('Some info message.');

        expect(fn).toHaveBeenCalled();
    });

    test('should log warn', () => {
        logger.warn('Some warn message.');

        expect(fn).toHaveBeenCalled();
    });

    test('should log error', () => {
        logger.error('Some error message.');

        expect(fn).toHaveBeenCalled();
    });
});
