import { Enumerable } from './../Enumerable/Enumerable';
/**
 * forEach_q_: Execute a callback function on each row in the enumerable, returning no results.
 */

export function forEach<T>(this: Enumerable<T>, callbackfn: (value: T, index: number) => void, thisArg?: any): void {
    if (!callbackfn) {
        throw new Error("Required argument is null");
    }
    let index = 0;
    for (const item of this) {
        callbackfn.call(thisArg, item, index++);
    }
}
