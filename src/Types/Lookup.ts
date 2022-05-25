/**
 * A lookup is a Map that allows multiple values for each key. There is no built-in Javascript analogue.
 */
export class Lookup<TKey, TValue> {
    get size(): number {
        return this._data.size;
    }

    [Symbol.toStringTag]: "Lookup";
    private _data: Map<TKey, TValue[]> = new Map();

    [Symbol.iterator](): IterableIterator<[TKey, TValue[]]> {
        return this._data[Symbol.iterator]();
    }

    entries(): IterableIterator<[TKey, TValue[]]> {
        return this._data.entries();
    }

    keys(): IterableIterator<TKey> {
        return this._data.keys();
    }

    values(): IterableIterator<TValue[]> {
        return this._data.values();
    }

    clear(): void {
        this._data.clear();
    }

    delete(key: TKey): boolean {
        return this._data.delete(key);
    }

    forEach(callbackfn: (value: TValue[], key: TKey, map: Map<TKey, TValue[]>) => void, thisArg?: any): void {
        this._data.forEach(callbackfn);
    }

    get(key: TKey): TValue[] | undefined {
        return this._data.get(key);
    }

    has(key: TKey): boolean {
        return this._data.has(key);
    }

    set(key: TKey, value: TValue): this {
        if (this._data.has(key)) {
            const item = this._data.get(key);
            item!.push(value);
        } else {
            this._data.set(key, [value]);
        }
        return this;
    }

    toJSON(): any {
        return this._data;
    }
}
