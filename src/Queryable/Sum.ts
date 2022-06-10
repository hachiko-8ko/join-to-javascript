import { Enumerable } from '../Enumerable/Enumerable';
import { IPredicate1, IFunc1 } from '../Types/DelegateInterfaces';

/**
 * sum_q_: Computes the sum of the sequence of values that are obtained by invoking an optional transform function on each element of the sequence
 */
export function sum<T>(this: Enumerable<T>, selectFunction?: IFunc1<T, number>): number {
    let sumval: number = 0;
    for (const item of this) {
        if (selectFunction) {
            const valueToAdd = selectFunction(item);
            if (isNaN(valueToAdd)) {
                throw new Error("Sequence contains invalid number after transformation");
            }
            sumval = sumval + valueToAdd;
        } else {
            if (typeof item !== 'number' || isNaN(item)) {
                throw new Error("Sequence contains invalid number");
            }
            sumval = sumval + item;
        }
    }
    return sumval;
}
