import { Enumerable } from '../Enumerable/Enumerable';
import { IPredicate1, IPredicate2 } from '../Types/DelegateInterfaces';

/**
 * last_q_: Returns the last element in a sequence. Takes an optional filter condition.
 * This condition can optionally take the index as the second argument (this is not provided by the C# version)
 */
export function last<T>(this: Enumerable<T>, matchFunction?: IPredicate1<T> | IPredicate2<T, number>): T {
    let found = false;
    let lastItem;
    let index = 0;
    for (const item of this) {
        if (!matchFunction) {
            found = true;
            lastItem = item;
        } else if ((matchFunction as IPredicate2<T, number>)(item, index++)) {
            found = true;
            lastItem = item;
        }
    }
    if (found) {
        // Can't check if lastItem is not undefined, because the last item could actually be "undefined".
        // TypeScript can't tell that every place found was true, lastItem was also set;
        return lastItem as any as T;
    }
    throw new Error("Sequence has no elements.");
}
