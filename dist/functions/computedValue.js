export const computedValue = (fn) => {
    return {
        get: fn,
    };
};
