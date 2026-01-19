"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Switch = void 0;
const Switch = ({ condition, cases, }) => {
    const match = cases.find(([cond]) => cond === condition);
    if (!match) {
        return null;
    }
    return match[1];
};
exports.Switch = Switch;
