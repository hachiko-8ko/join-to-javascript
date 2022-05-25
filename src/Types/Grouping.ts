import { IFunc1 } from './DelegateInterfaces';

export interface IGrouping<TKey, TValue> {
    key: TKey;
    values: Array<TValue>;
    [Symbol.iterator]: Array<TValue>;
}

export class Grouping<TSource, TKey, TElement> implements IGrouping<TKey, TSource | TElement> {
    key: TKey;
    private _values: TSource[];
    private _selector: (obj: TSource) => TElement | TSource;
    constructor(key: TKey, value: TSource, elementSelectFunction?: IFunc1<TSource, TElement>) {
        this.key = key;
        this._values = [value];
        if (elementSelectFunction) {
            this._selector = elementSelectFunction;
        }
        else {
            this._selector = k => k;
        }
    }
    get values(): Array<TSource | TElement> {
        return this._values.map(v => this._selector(v));
    }
    get [Symbol.iterator](): Array<TSource | TElement> {
        return this._values.map(v => this._selector(v));
    }
    add(value: TSource): void {
        this._values.push(value);
    }
    toJSON(): any {
        return this.values;
    }
    toString(): string {
        return this.values.toString();
    }
}
