import { Option } from '../classes/Option';

const emptyOption = new Option<number>();
const option = new Option(1);

describe('Option', () => {
    test('should be correctly empty', () => {
        expect(emptyOption.isEmpty).toBeTruthy();
        expect(option.isEmpty).toBeFalsy();
    });

    test('should correctly use getOrElse', () => {
        expect(emptyOption.getOrElse(2)).toBe(2);
        expect(option.getOrElse(2)).toBe(1);
    });

    test('should correctly use map', () => {
        const handler = (value: number) => value + 1;

        expect(emptyOption.map(handler).getOrElse(1)).toBe(1);
        expect(option.map(handler).getOrElse(1)).toBe(2);
    });

    test('should correctly use apply', () => {
        const notCalledHandler = jest.fn();
        const calledHandler = jest.fn();

        emptyOption.apply(notCalledHandler, calledHandler);
        option.apply(calledHandler, notCalledHandler);

        expect(calledHandler).toHaveBeenCalledTimes(2);
        expect(notCalledHandler).not.toHaveBeenCalled();
    });

    test('should correctly use applyIfExist', () => {
        const notCalledHandler = jest.fn();
        const calledHandler = jest.fn();

        emptyOption.applyIfExist(notCalledHandler);
        option.applyIfExist(calledHandler);

        expect(calledHandler).toHaveBeenCalled();
        expect(notCalledHandler).not.toHaveBeenCalled();
    });
});
