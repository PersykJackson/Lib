"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computedValue = void 0;
const computedValue = (fn) => {
    return {
        get: fn,
    };
};
exports.computedValue = computedValue;
