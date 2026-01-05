export const memoize = (fn) => {
    const cache = new Map();
    return (...args) => {
        const json = JSON.stringify(args, (_, value) => (typeof value === 'function' ? String(value) : value));
        if (cache.has(json)) {
            return cache.get(json);
        }
        const result = fn(...args);
        cache.set(json, result);
        return result;
    };
};
