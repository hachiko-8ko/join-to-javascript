import { Enumerable } from '../Enumerable/Enumerable';

/**
 * skip_q_: Bypasses a specified number of elements in a sequence and then returns the remaining elements
 */
export function skip<T>(this: Enumerable<T>, count: number): Enumerable<T> {
    return this._extend(function* _skip(data: IterableIterator<T>): IterableIterator<T> {
        for (const item of data) {
            if (count <= 0) {
                yield item;
            }
            count--;
        }
    });
}
