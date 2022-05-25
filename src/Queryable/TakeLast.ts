import { Enumerable } from '../Enumerable/Enumerable';

/**
 * skipLast_q_: Returns a new enumerable collection that contains the last count elements from source
 */
export function takeLast<T>(this: Enumerable<T>, count: number): Enumerable<T> {
    // This is another one which is technically deferred execution, but there's no way to take the last n items
    // if you don't count the list.
    return this._extend(function* _takeLast(data: IterableIterator<T>): IterableIterator<T> {
        if (count <= 0) {
            return;
        }
        yield* [...data].slice(-1 * count);
    });
}
