export const runThrowable = <T>(
    fn: () => T,
    onSuccess: (value: T) => void,
    onError: (error: Error) => void,
) => {
    try {
        onSuccess(fn());
    } catch (e) {
        if (e instanceof Error) {
            onError(e);
        }
    }
};
