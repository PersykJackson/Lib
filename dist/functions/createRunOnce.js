"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRunOnce = void 0;
const createRunOnce = () => {
    const context = { firstRun: true };
    return (fn) => {
        if (context.firstRun) {
            context.firstRun = false;
            fn();
        }
    };
};
exports.createRunOnce = createRunOnce;
