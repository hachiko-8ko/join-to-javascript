import { IEqualityComparer, extractEqualityComparer } from './../Types/IEqualityComparer';
import { Enumerable } from '../Enumerable/Enumerable';
import { IPredicate2 } from '../Types/DelegateInterfaces';

/**
 * sequenceEqual_q_: Determines whether two sequences are equal by comparing their elements.
 * optional equality comparer can be supplied
 */
export function sequenceEqual<T>(this: Enumerable<T>, second: Iterable<T>, comparer?: IEqualityComparer<T>): boolean {
    if (!second) {
        throw new Error("Required argument is null");
    }
    const compare = extractEqualityComparer(comparer);

    const iter = second[Symbol.iterator]();
    while (true) {
        const val1 = this.next();
        const val2 = iter.next();
        if (val1.done !== val2.done) {
            return false; // not the same length
        }
        if (val1.done) {
            break;
        }
        if (compare) {
            if (!compare(val1.value, val2.value)) {
                return false; // not the same value
            }
        } else {
            if (val1.value !== val2.value) {
                return false; // not the same value
            }
        }
    }

    // same length and all items have same values
    return true;
}
