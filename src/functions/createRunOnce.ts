export const createRunOnce = () => {
    const context = { firstRun: true };

    return (fn: () => void) => {
        if (context.firstRun) {
            context.firstRun = false;
            fn();
        }
    }
}
