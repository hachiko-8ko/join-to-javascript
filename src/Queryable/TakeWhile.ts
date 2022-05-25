import { Nullable } from '../Types/NoneType';
import { IPredicate2, IPredicate1 } from './../Types/DelegateInterfaces';
import { Enumerable } from '../Enumerable/Enumerable';

/**
 * takeWhile_q_: Returns elements from a sequence as long as a specified condition is true.
 * Optionally, the filter function can receive the index as a second argument
 */
export function takeWhile<T>(this: Enumerable<T>, filter: IPredicate1<T> | IPredicate2<T, number>): Enumerable<T> {
    if (!filter) {
        throw new Error("Required argument is null");
    }

    return this._extend(function* _takeWhile(data: IterableIterator<T>): IterableIterator<T> {
        let index: number = 0;
        let triggered = false;
        for (const item of data) {
            // Whenever the filter goes false, triggered needs to go true, and it has to be sticky
            triggered = triggered || !(filter as IPredicate2<T, Nullable<number>>)(item, index++);
            if (!triggered) {
                yield item;
            }
        }
    });
}
