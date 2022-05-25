import { Enumerable } from '../Enumerable/Enumerable';

/**
 * append_q_: Appends a value to the end of the sequence
 */
export function append<T>(this: Enumerable<T>, newItem: T): Enumerable<T> {
    return this._extend(function* _append(data: IterableIterator<T>): IterableIterator<T> {
        yield* data;
        yield newItem;
    });
}
