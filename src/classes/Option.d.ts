export declare class Option<T> {
    private readonly value?;
    constructor(value?: T);
    private get;
    get isEmpty(): boolean;
    getOrElse<B>(alternative: B): T | B;
    map<G>(fn: (value: T) => G): Option<G>;
    applyIfExist(onValueExist: (value: T) => void): void;
    apply(onValueExist: (value: T) => void, onEmpty: () => void): void;
}
