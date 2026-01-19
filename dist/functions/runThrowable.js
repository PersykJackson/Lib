"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runThrowable = void 0;
const runThrowable = (fn, onSuccess, onError) => {
    try {
        onSuccess(fn());
    }
    catch (e) {
        onError(e);
    }
};
exports.runThrowable = runThrowable;
