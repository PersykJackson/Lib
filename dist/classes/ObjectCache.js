"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectCache = void 0;
class ObjectCache {
    constructor(keys) {
        this.cache = new Map();
        this.keys = keys;
    }
    set(getKey, object) {
        this.cache.set(getKey(this.keys), object);
    }
    setIfEmpty(getKey, getObject) {
        const key = getKey(this.keys);
        if (!this.cache.has(key)) {
            this.cache.set(key, getObject());
        }
    }
    get(getKey) {
        const key = getKey(this.keys);
        if (!this.cache.has(key)) {
            throw new Error(`Object doesn't exist: ${key}.`);
        }
        return this.cache.get(key);
    }
    getIfExist(getKey, onValue) {
        const key = getKey(this.keys);
        if (this.cache.has(key)) {
            onValue(this.cache.get(key));
        }
    }
}
exports.ObjectCache = ObjectCache;
