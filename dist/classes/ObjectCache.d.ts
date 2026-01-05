export declare class ObjectCache<Keys extends {
    [key: string]: string;
}, KeyValues extends Keys[keyof Keys]> {
    private cache;
    private readonly keys;
    constructor(keys: Keys);
    set(getKey: (keys: Keys) => KeyValues, object: object): void;
    setIfEmpty(getKey: (keys: Keys) => KeyValues, getObject: () => object): void;
    get<Obj extends object>(getKey: (keys: Keys) => KeyValues): Obj;
    getIfExist<Obj extends object>(getKey: (keys: Keys) => KeyValues, onValue: (value: Obj) => void): void;
}
