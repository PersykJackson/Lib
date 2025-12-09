export const onCall = <T = object>(fn: (target: T) => void) => {
    return (target: T, _: string, descriptor: TypedPropertyDescriptor<(...args: unknown[]) => unknown>) => {
        const original = descriptor.value;

        descriptor.value = function (...args) {
            fn(target);
            return original.apply(this, args);
        };

        return descriptor;
    };
}
