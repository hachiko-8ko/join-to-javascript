import { Enumerable } from '../Enumerable/Enumerable';
import { IPredicate1, IPredicate2 } from '../Types/DelegateInterfaces';
import { Nullable } from '../Types/NoneType';

/**
 * any_q_: Determines whether any elements of a sequence satisfy an optional condition
 * This condition can optionally take the index as the second argument (this is not provided by the C# version)
 */
export function any_q_<T>(this: Enumerable<T>, filter?: IPredicate1<T> | IPredicate2<T, number>): boolean {
    for (const item of this) {
        if (!filter) {
            return true;
        }
        let index = 0;
        if ((filter as IPredicate2<T, Nullable<number>>)(item, index++)) {
            return true;
        }
    }
    return false;
}
