import { Enumerable } from '../Enumerable/Enumerable';
import { IPredicate1 } from '../Types/DelegateInterfaces';

/**
 * count_q_: returns a number that represents how many elements in the specified sequence satisfy an optional condition
 */
export function count<T>(this: Enumerable<T>, condition?: IPredicate1<T>): number {
    let ctr: number = 0;
    for (const item of this) {
        if (condition) {
            if (condition(item)) {
                ctr++;
            }
        } else {
            ctr++;
        }
    }
    return ctr;
}
