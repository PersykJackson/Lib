"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onCall = void 0;
const onCall = (fn) => {
    return (target, _, descriptor) => {
        const original = descriptor.value;
        descriptor.value = function (...args) {
            fn(target);
            return original.apply(this, args);
        };
        return descriptor;
    };
};
exports.onCall = onCall;
