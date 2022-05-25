import { Enumerable } from '../Enumerable/Enumerable';

/**
 * elementAt_q_: Returns the element at a specified index in a sequence
 */
export function elementAt<T>(this: Enumerable<T>, index: number): T {
    let i = 0;
    for (const item of this) {
        if (i === index) {
            return item;
        }
        i++;
    }
    throw new Error("Index out of range.");
}
