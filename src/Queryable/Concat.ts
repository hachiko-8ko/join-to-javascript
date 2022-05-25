import { Enumerable } from '../Enumerable/Enumerable';

/**
 * concat_q_: concatenates two sequences
 */
export function concat<T>(this: Enumerable<T>, second: Iterable<T>): Enumerable<T> {
    if (!second) {
        throw new Error("Required argument is null");
    }
    return this._extend(function* _concat(data: IterableIterator<T>): IterableIterator<T> {
        yield* data;
        yield* second;
    });
}
