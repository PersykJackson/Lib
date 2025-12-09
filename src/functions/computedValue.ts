export const computedValue = <T>(fn: () => T) => {
    return {
        get: fn,
    };
};
