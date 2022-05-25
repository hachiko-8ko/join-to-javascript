import { Enumerable } from '../Enumerable/Enumerable';
import { IPredicate1 } from '../Types/DelegateInterfaces';

/**
 * first_q_: Returns the first element in a sequence, throwing an exception if the sequence is empty.
 * optional filter condition can be supplied
 */
export function first<T>(this: Enumerable<T>, matchFunction?: IPredicate1<T>): T {
    for (const item of this) {
        if (!matchFunction) {
            return item;
        } else if (matchFunction(item)) {
            return item;
        }
    }
    throw new Error("Sequence has no elements.");
}
