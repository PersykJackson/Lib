export class Option<T> {
    constructor(
        private readonly value?: T,
    ) {}

    private get(): T {
        return this.value;
    }

    get isEmpty(): boolean {
        return this.value === undefined || this.value === null;
    }

    public getOrElse<B>(alternative: B): T | B {
        return this.isEmpty ? alternative : this.get();
    }

    public map<G>(fn: (value: T) => G): Option<G> {
        if (this.isEmpty) {
            return new Option;
        }

        return new Option(fn(this.value));
    }

    public applyIfExist(onValueExist: (value: T) => void) {
        this.apply(
            onValueExist,
            () => {},
        );
    }

    public apply(
        onValueExist: (value: T) => void,
        onEmpty: () => void,
    ) {
        if (this.isEmpty) {
            onEmpty();
        } else {
            onValueExist(this.value);
        }
    }
}
