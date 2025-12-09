import { ObjectCache } from '../classes/ObjectCache';

describe('ObjectCache', () => {
    const objectCache = new ObjectCache({
        MAP: 'map',
        SECOND_MAP: 'secondMap',
    });

    test('should throw error if empty', () => {
        expect(() => objectCache.get(
            ({ MAP }) => MAP),
        ).toThrow();
    });

    test('should set object', () => {
        const map = new Map();
        objectCache.set(
            ({ MAP }) => MAP,
            map,
        );

        expect(() => objectCache.get(
            ({ MAP }) => MAP,
        )).not.toThrow();
        expect(objectCache.get(
            ({ MAP }) => MAP,
        )).toBe(map);
    });

    test('should set if empty', () => {
        const map = new Map();

        objectCache.setIfEmpty(
            ({ SECOND_MAP }) => SECOND_MAP,
            () => map,
        );

        expect(objectCache.get(
            ({ SECOND_MAP }) => SECOND_MAP,
        )).toBe(map);
    });

    test('should not set if exist', () => {
        const map = new Map();

        objectCache.setIfEmpty(
            ({ MAP }) => MAP,
            () => map,
        );

        expect(objectCache.get(
            ({ MAP }) => MAP,
        )).not.toBe(map);
    });

    test('should get if object exist', () => {
        const map = new Map();
        const fn = jest.fn(() => map);

        objectCache.getIfExist(
            ({ MAP }) => MAP,
            fn,
        );

        expect(fn).toHaveBeenCalledWith(map);
    });

    test('should not get if empty', () => {
        const fn = jest.fn();

        objectCache.getIfExist(() => 'empty', fn);

        expect(fn).not.toHaveBeenCalled();
    });
});
