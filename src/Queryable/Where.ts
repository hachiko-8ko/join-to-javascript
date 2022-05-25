import { Nullable } from '../Types/NoneType';
import { IPredicate2, IPredicate1 } from './../Types/DelegateInterfaces';
import { Enumerable } from '../Enumerable/Enumerable';

/**
 * where_q_: Filters a sequence of values based on a predicate.
 * Optionally, the filter function can receive the index as a second argument
 */
export function where<T>(this: Enumerable<T>, filter: IPredicate1<T> | IPredicate2<T, number>): Enumerable<T> {
    if (!filter) {
        throw new Error("Required argument is null");
    }
    return this._extend(function* _where(data: IterableIterator<T>): IterableIterator<T> {
        let index: number = 0;
        for (const item of data) {
            if ((filter as IPredicate2<T, Nullable<number>>)(item, index++)) {
                yield item;
            }
        }
    });
}
