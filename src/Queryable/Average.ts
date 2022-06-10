import { Enumerable } from '../Enumerable/Enumerable';
import { IFunc1 } from '../Types/DelegateInterfaces';
import { isNone, Nullable } from '../Types/NoneType';

/**
 * average_q_: computes the average of a sequence of numbers.
 * optional transform function lets us calculate using values obtained by invoking afunction on each element of the sequence.
 */
export function average<T>(this: Enumerable<T>, selectFunction?: IFunc1<T, number>): number | undefined {
    let sum: number = 0;
    let count: number = 0;
    let containsNull = false;
    for (const item of this) {
        let tmp: any;
        if (selectFunction) {
            tmp = selectFunction(item);
            // Nullable number behaviour: if null, skip it
            if (isNone(tmp)) {
                containsNull = true;
                continue;
            }
        } else {
            // Nullable number behaviour: if null, skip it
            if (isNone(item)) {
                containsNull = true;
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
        // In the C# version, if the sequence is all null, this returns null instead of throwing
        if (containsNull) {
            return;
        }
        throw new Error("Sequence contains no elements");
    }
    return sum / count;
}
