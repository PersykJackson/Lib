export class ObjectCache<Keys extends { [key: string]: string }, KeyValues extends Keys[keyof Keys]> {
    private cache: Map<keyof Keys, object> = new Map();
    private readonly keys: Keys;

    constructor(keys: Keys) {
        this.keys = keys;
    }

    public set(getKey: (keys: Keys) => KeyValues, object: object) {
        this.cache.set(getKey(this.keys), object);
    }

    public setIfEmpty(
        getKey: (keys: Keys) => KeyValues,
        getObject: () => object,
    ) {
        const key = getKey(this.keys);

        if (!this.cache.has(key)) {
            this.cache.set(key, getObject());
        }
    }

    public get<Obj extends object>(getKey: (keys: Keys) => KeyValues): Obj {
        const key = getKey(this.keys);

        if (!this.cache.has(key)) {
            throw new Error(`Object doesn't exist: ${key as string}.`);
        }

        return this.cache.get(key) as Obj;
    }

    public getIfExist<Obj extends object>(
        getKey: (keys: Keys) => KeyValues,
        onValue: (value: Obj) => void,
    ) {
        const key = getKey(this.keys);

        if (this.cache.has(key)) {
            onValue(this.cache.get(key) as Obj);
        }
    }
}
