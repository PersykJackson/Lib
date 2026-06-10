export const runThrowable = <T>(
    fn: () => T,
    onSuccess: (value: T) => void,
    onError: (error: Error) => void,
) => {
    try {
        onSuccess(fn());
    } catch (e) {
        onError(e);
    }
};
