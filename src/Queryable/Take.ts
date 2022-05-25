import { Enumerable } from '../Enumerable/Enumerable';

/**
 * take_q_: Returns a specified number of contiguous elements from the start of a sequence.
 * The start parameter is a JS-specific modification to implement Range, which is a C#-only object (with an odd syntax)
 */
export function take<T>(this: Enumerable<T>, count: number, start: number = 0): Enumerable<T> {
    return this._extend(function* _take(data: IterableIterator<T>): IterableIterator<T> {
        if (start < 0) {
            start = 0;
        }
        for (const item of data) {
            if (count <= start) {
                return;
            }
            count--;
            yield item;
        }
    });
}
