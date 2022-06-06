import { Enumerable } from '../Enumerable/Enumerable';

/**
 * take_q_: Returns a specified number of contiguous elements from the start of a sequence.
 * The skip parameter is a JS-specific modification to implement Range, which is a C#-only object (with an odd syntax)
 */
export function take<T>(this: Enumerable<T>, count: number, skip: number = 0): Enumerable<T> {
    return this._extend(function* _take(data: IterableIterator<T>): IterableIterator<T> {
        if (skip < 0) {
            skip = 0;
        }
        for (const item of data) {
            if (skip > 0) {
                skip--;
                continue;
            }
            if (count <= 0) {
                return;
            }
            count--;
            yield item;
        }
    });
}
