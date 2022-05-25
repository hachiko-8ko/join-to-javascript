import { Enumerable } from '../Enumerable/Enumerable';
import { IFunc1 } from '../Types/DelegateInterfaces';
import { isNone, Nullable } from '../Types/NoneType';

/**
 * average_q_: computes the average of a sequence of numbers.
 * optional transform function lets us calculate using values obtained by invoking afunction on each element of the sequence.
 */
export function average<T>(this: Enumerable<T>, selectFunction?: IFunc1<T, number>): number {
    let sum: number = 0;
    let count: number = 0;
    for (const item of this) {
        let tmp: any;
        if (selectFunction) {
            tmp = selectFunction(item);
            // Nullable number behaviour: if null, skip it
            if (isNone(tmp)) {
                continue;
            }
        } else {
            // Nullable number behaviour: if null, skip it
            if (isNone(item)) {
                continue;
            }
        }
        tmp = Number(item);
        if (isNaN(tmp)) {
            throw new Error("Invalid data type for average.");
        }
        sum = sum + tmp;
        count++;
    }
    if (!count) {
        throw new Error("Sequence contains no elements");
    }
    return sum / count;
}
