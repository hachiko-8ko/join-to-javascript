import { IComparer, CompareResult, defaultComparer, extractComparer } from './../Types/IComparer';
import { Enumerable } from './Enumerable';
import { IQueryable } from './IQueryable';
import { IFunc1, IFunc2 } from '../Types/DelegateInterfaces';

/**
 * Generators are already deferred, but ordering actions need to be extra deferred, because ThenBy() ordering actions
 * that would normally happen on later steps need to be moved into this object. So rather than each step returning
 * a generic built-in generator, OrderBy() and ThenBy() return this wrapper object, which has all the regular generator
 * functions plus ThenBy().
 *
 * This matches C#. ThenBy() only exists on the IOrderedEnumerable, not on IEnumerable, even though it appears in
 * the documentation for Enumerable. To make this simple for the user, I considered aliasing it to OrderBy, but that could
 * lead to confusion.
 */

export interface IOrderedEnumerable<T> extends Enumerable<T> {
    thenBy_q_<TKey>(orderBy?: IFunc1<T, TKey>, comparer?: IComparer<any>): this;
    thenByDescending_q_<TKey>(orderBy?: IFunc1<T, TKey>, comparer?: IComparer<any>): this;
}

export class OrderedEnumerable<T> extends Enumerable<T> implements IOrderedEnumerable<T>  {
    private _sorters: Array<{ orderBy: IFunc1<T, any>, comparer?: IComparer<any>, descending: boolean }> = [];

    constructor(data: IterableIterator<T> | Enumerable<T>, orderBy: IFunc1<T, any>, comparer?: IComparer<any>, descending: boolean = false) {
        super(data);
        this._sorters.push({ orderBy, comparer, descending: descending });
    }

    *[Symbol.iterator](): IterableIterator<T> {
        // Need to sort the data. This needs to process the full list, because the last record could be the one
        // that needs to go first.
        // Two possible approaches here. One is to repeatedly attack the list, going after the min record and
        // returning it, which is heavy on the CPU but light on memory, or what I'm going to do, which is load
        // an array and use the built-in sort() method, which is heavy on memory but light on CPU.
        let sortingFunction: ((x: T, y: T) => CompareResult) | undefined;
        for (const hat of this._sorters) {
            sortingFunction = buildSorter(hat.orderBy, hat.comparer, hat.descending, sortingFunction);
        }

        const sortedData = [...this._data].sort(sortingFunction);

        for (const item of sortedData) {
            yield item;
        }
    }

    thenBy_q_<TKey>(orderBy?: IFunc1<T, T | TKey>, comparer?: IComparer<any>): this {
        if (!orderBy) {
            orderBy = ((o: T) => o);
        }

        this._sorters.push({ orderBy, comparer, descending: false });
        return this;
    }

    thenByDescending_q_<TKey>(orderBy?: IFunc1<T, T | TKey>, comparer?: IComparer<any>): this {
        if (!orderBy) {
            orderBy = ((o: T) => o);
        }
        this._sorters.push({ orderBy, comparer, descending: true });
        return this;
    }
}

function buildSorter<T, TKey>(keySelector: IFunc1<T, TKey>, comparer?: IComparer<any>, descending: boolean = false, initial?: (x: T, y: T) => CompareResult): (x: T, y: T) => CompareResult {
    let compare = extractComparer(comparer);
    if (!compare) {
        compare = defaultComparer;
    }

    if (initial) {
        return function _thenBy(x: T, y: T): CompareResult {
            const key1 = keySelector(x);
            const key2 = keySelector(y);
            if (descending) {
                return initial(x, y) || compare!(key2, key1);
            }
            return initial(x, y) || compare!(key1, key2);
        };
    } else {
        return function _orderBy(x: T, y: T): CompareResult {
            const key1 = keySelector(x);
            const key2 = keySelector(y);
            if (descending) {
                return compare!(key2, key1);
            }
            return compare!(key1, key2);
        };
    }
}
