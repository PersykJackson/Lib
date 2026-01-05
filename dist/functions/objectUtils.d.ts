export declare const objectUtils: <T extends object>(obj: T) => {
    forEach: (fn: (key: string, value: T[keyof T]) => void) => void;
    map: <Result extends object = undefined>(fn: (key: string, value: T[keyof T]) => void | Record<string, unknown>) => Result;
};
