export const objectUtils = <T extends object>(obj: T) => {
    const objectEntries = Object.entries(obj);

    return {
        forEach: (fn: (key: string, value: T[keyof T]) => void) => {
          objectEntries.forEach(([key, value]) => fn(key, value));
        },
        map: <Result extends object = undefined>(fn: (key: string, value: T[keyof T]) => void | Record<string, unknown>): Result => {
            let result: Result;

            objectEntries.forEach(([key, value]) => {
                const res = fn(key, value);

                if (res) {
                    result = {
                        ...result,
                        ...res,
                    };
                }
            });

            return result;
        },
    };
};
