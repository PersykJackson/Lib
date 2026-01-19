"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Option = void 0;
class Option {
    constructor(value) {
        this.value = value;
    }
    get() {
        return this.value;
    }
    get isEmpty() {
        return this.value === undefined || this.value === null;
    }
    getOrElse(alternative) {
        return this.isEmpty ? alternative : this.get();
    }
    map(fn) {
        if (this.isEmpty) {
            return new Option;
        }
        return new Option(fn(this.value));
    }
    applyIfExist(onValueExist) {
        this.apply(onValueExist, () => { });
    }
    apply(onValueExist, onEmpty) {
        if (this.isEmpty) {
            onEmpty();
        }
        else {
            onValueExist(this.value);
        }
    }
}
exports.Option = Option;
