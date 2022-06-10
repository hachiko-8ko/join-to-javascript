import { IPredicate2 } from './../Types/DelegateInterfaces';
import { Enumerable } from '../Enumerable/Enumerable';
import { IPredicate1 } from '../Types/DelegateInterfaces';

/**
 * single_q_: Returns the first element in a sequence, throwing an exception if the sequence is empty or has more than one item.
 * Takes an optional filter condition.
 * This condition can optionally take the index as the second argument (this is not provided by the C# version)
 */
export function single<T>(this: Enumerable<T>, matchFunction?: IPredicate1<T> | IPredicate2<T, number>): T {
    let found = false;
    let foundItem;
    let index = 0;
    for (const item of this) {
        if (!matchFunction) {
            if (found) {
                throw new Error("Sequence contains more than one element.");
            }
            found = true;
            foundItem = item;
        } else if ((matchFunction as IPredicate2<T, number>)(item, index++)) {
            if (found) {
                throw new Error("Sequence contains more than one element.");
            }
            found = true;
            foundItem = item;
        }
    }
    if (found) {
        return foundItem as T;
    }
    throw new Error("Sequence has no elements.");
}
