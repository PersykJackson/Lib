export const onCall = (fn) => {
    return (target, _, descriptor) => {
        const original = descriptor.value;
        descriptor.value = function (...args) {
            fn(target);
            return original.apply(this, args);
        };
        return descriptor;
    };
};
