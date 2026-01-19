"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectUtils = void 0;
const objectUtils = (obj) => {
    const objectEntries = Object.entries(obj);
    return {
        forEach: (fn) => {
            objectEntries.forEach(([key, value]) => fn(key, value));
        },
        map: (fn) => {
            let result;
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
exports.objectUtils = objectUtils;
