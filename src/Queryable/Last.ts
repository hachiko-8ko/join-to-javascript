import { Enumerable } from '../Enumerable/Enumerable';
import { IPredicate1 } from '../Types/DelegateInterfaces';

/**
 * last_q_: Returns the last element in a sequence. Takes an optional filter condition.
 */
export function last<T>(this: Enumerable<T>, matchFunction?: IPredicate1<T>): T {
    let found = false;
    let lastItem;
    for (const item of this) {
        if (!matchFunction) {
            found = true;
            lastItem = item;
        } else if (matchFunction(item)) {
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
