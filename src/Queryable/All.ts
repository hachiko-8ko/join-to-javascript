import { Enumerable } from '../Enumerable/Enumerable';
import { IPredicate1, IPredicate2 } from '../Types/DelegateInterfaces';
import { Nullable } from '../Types/NoneType';

/**
 * all_q_: Determines whether all elements of a sequence satisfy a condition.
 * This condition can optionally take the index as the second argument (this is not provided by the C# version)
 */
export function all<T>(this: Enumerable<T>, filter: IPredicate1<T> | IPredicate2<T, number>): boolean {
    if (!filter) {
        throw new Error("Required argument is null");
    }
    let index = 0;
    for (const item of this) {
        if (!(filter as IPredicate2<T, Nullable<number>>)(item, index++)) {
            return false;
        }
    }
    return true;
}
