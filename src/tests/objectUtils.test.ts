import { objectUtils } from '../functions/objectUtils';

describe('objectUtils', () => {
    const testObject = {
        testField1: 'value1',
        testField2: 'value2',
        testField3: 'value3',
    };

    test('should use function for all fields', () => {
        const obj = {};

        objectUtils(testObject).forEach((key, value) => {
            obj[key] = value;
        });

        expect(obj).toEqual(testObject);
    });

    test('should use function for all fields and return values', () => {
        const obj = objectUtils(testObject).map((key, value) => {
            return { [key]: value };
        });

        expect(obj).toEqual(testObject);
    });

    test('should not create object if map is not return value', () => {
        const result = objectUtils(testObject).map(() => {
            return undefined;
        });

        expect(result).not.toBeDefined();
    });
});
