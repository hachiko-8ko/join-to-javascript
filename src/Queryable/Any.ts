import { Enumerable } from '../Enumerable/Enumerable';
import { IPredicate1 } from '../Types/DelegateInterfaces';

/**
 * any_q_: Determines whether any elements of a sequence satisfy an optional condition
 */
export function any_q_<T>(this: Enumerable<T>, filter?: IPredicate1<T>): boolean {
    for (const item of this) {
        if (!filter) {
            return true;
        }
        if (filter(item)) {
            return true;
        }
    }
    return false;
}
