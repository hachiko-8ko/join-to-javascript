import { Enumerable } from '../Enumerable/Enumerable';

/**
 * prepend_q_: Appends a value to the start of the sequence
 */
export function prepend<T>(this: Enumerable<T>, newItem: T): Enumerable<T> {
    return this._extend(function* _prepend(data: IterableIterator<T>): IterableIterator<T> {
        yield newItem;
        yield* data;
    });
}
