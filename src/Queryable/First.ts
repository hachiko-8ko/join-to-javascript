import { Enumerable } from '../Enumerable/Enumerable';
import { IPredicate1, IPredicate2 } from '../Types/DelegateInterfaces';

/**
 * first_q_: Returns the first element in a sequence, throwing an exception if the sequence is empty.
 * optional filter condition can be supplied
 * This condition can optionally take the index as the second argument (this is not provided by the C# version)
 */
export function first<T>(this: Enumerable<T>, matchFunction?: IPredicate1<T> | IPredicate2<T, number>): T {
    let index = 0;
    for (const item of this) {
        if (!matchFunction) {
            return item;
        } else if ((matchFunction as IPredicate2<T, number>)(item, index++)) {
            return item;
        }
    }
    throw new Error("Sequence has no elements.");
}
