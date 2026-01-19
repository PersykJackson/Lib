"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.If = void 0;
const If = ({ condition, Else = null, children }) => {
    return condition ? children : Else;
};
exports.If = If;
