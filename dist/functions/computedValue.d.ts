export declare const computedValue: <T>(fn: () => T) => {
    get: () => T;
};
