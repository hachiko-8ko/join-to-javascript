import { Enumerable } from '../Enumerable/Enumerable';

/**
 * defaultIfEmpty_q_: returns the sequence or the (optional) default value if the sequence is empty.
 * Default in is a paramter. IF it is left out, undefined is returned.
 *
 * (Note that in JavaScript, unlike C#, there's no way to know what type a sequence is supposed to have, especially an empty one.)
 */
export function defaultIfEmpty<T>(this: Enumerable<T>, defaultValue?: T): Enumerable<T | undefined> {
    return this._extend(function* _defaultIfEmpty(data: IterableIterator<T>): IterableIterator<T | undefined> {
        let empty: boolean = true;
        for (const item of data) {
            empty = false;
            yield item;
        }
        if (empty) {
            yield defaultValue;
        }
    });
}
