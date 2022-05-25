import { Enumerable } from '../Enumerable/Enumerable';
import { IOrderedEnumerable, OrderedEnumerable } from '../Enumerable/OrderedEnumerable';
import { IFunc1 } from '../Types/DelegateInterfaces';
import { IComparer } from './../Types/IComparer';

// WARNING!
// These two methods must be added to Enumerable using prototype modification, because declaring them in the Enumerable class makes the
// browser blow up. It's because of the "new OrderedEnumerable" (which derives from Enumerable) being referenced.

/**
 * orderBy_q_: Sorts the elements of a sequence in ascending order according to a key function.
 * Takes an optional comparer, a function that takes two inputs and returns 1 if the first is higher, -1 is the second is higher,
 * else 0.
 * The key function is also optional. If you leave it out, it'll default to the identity. I got tired of writing .orderBy_q_(o => o)
 * when sorting numbers or strings. This is a change from C#.
 *
 * If you want to use the comparer, you'll need to include the key selector. It's not worth my while to make a {comparer} object to allow
 * only one parameter for this rare case.
 */
export function orderBy<T, TKey>(this: Enumerable<T>, keySelector?: IFunc1<T, T | TKey>, comparer?: IComparer<TKey>): IOrderedEnumerable<T> {
    if (!keySelector) {
        keySelector = ((o: T) => o);
    }
    return new OrderedEnumerable<T>(this, keySelector, comparer);
}

/**
 * orderByDescending_q_: Sorts the elements of a sequence in descending order according to a key function.
 * Takes an optional comparer, a function that takes two inputs and returns 1 if the first is higher, -1 is the second is higher,
 * else 0.
 * The key function is also optional. If you leave it out, it'll default to the identity. I got tired of writing .orderBy_q_(o => o)
 * when sorting numbers or strings. This is a change from C#.
 *
 * If you want to use the comparer, you'll need to include the key selector. It's not worth my while to make a {comparer} object to allow
 * only one parameter for this rare case.
 */
export function orderByDescending<T, TKey>(this: Enumerable<T>, keySelector?: IFunc1<T, T | TKey>, comparer?: IComparer<TKey>): IOrderedEnumerable<T> {
    if (!keySelector) {
        keySelector = ((o: T) => o);
    }
    return new OrderedEnumerable<T>(this, keySelector, comparer, true);
}
