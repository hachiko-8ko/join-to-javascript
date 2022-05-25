import { Enumerable } from '../Enumerable/Enumerable';
import { IPredicate2 } from '../Types/DelegateInterfaces';
import { IEqualityComparer, extractEqualityComparer } from '../Types/IEqualityComparer';

/**
 * contains_q_: determines whether a sequence contains a specified element
 * optional equalityComparer function to indicate if record matches
 */
export function contains<T>(this: Enumerable<T>, value: T, comparer?: IEqualityComparer<T>): boolean {
    const compare = extractEqualityComparer(comparer);
    for (const item of this) {
        if (!compare) {
            if (item === value) {
                return true;
            }
        } else {
            if ((compare(item, value))) {
                return true;
            }
        }
    }
    return false;
}
