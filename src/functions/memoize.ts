export const memoize = <G extends unknown[], R>(fn: (...args: G) => R): (...args: G) => R => {
    const cache = new Map<string, R>();

    return (...args) => {
        const json = JSON.stringify(
            args,
            (_, value) => (typeof value === 'function' ? String(value) : value),
        );

        if (cache.has(json)) {
            return cache.get(json)!;
        }

        const result = fn(...args);
        cache.set(json, result);

        return result;
    };
};
