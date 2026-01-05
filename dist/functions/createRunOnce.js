export const createRunOnce = () => {
    const context = { firstRun: true };
    return (fn) => {
        if (context.firstRun) {
            context.firstRun = false;
            fn();
        }
    };
};
