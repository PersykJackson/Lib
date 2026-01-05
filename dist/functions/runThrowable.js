export const runThrowable = (fn, onSuccess, onError) => {
    try {
        onSuccess(fn());
    }
    catch (e) {
        onError(e);
    }
};
