import { IEqualityComparer, extractEqualityComparer } from './../Types/IEqualityComparer';
import { Enumerable } from '../Enumerable/Enumerable';
import { IFunc1, IPredicate2 } from '../Types/DelegateInterfaces';

/**
 * distinctBy_q_: Returns distinct elements from a sequence based on keys returned by a key selector function.
 * optional equality comparer can be supplied to compare values
 */
export function distinctBy<T, TKey>(this: Enumerable<T>, keySelector: IFunc1<T, TKey>, comparer?: IEqualityComparer<TKey>): Enumerable<T> {
    if (!keySelector) {
        throw new Error("Required argument is null");
    }
    const compare = extractEqualityComparer(comparer);

    return this._extend(function* _distinctBy(data: IterableIterator<T>): IterableIterator<T> {
        // Keep a history of every item returned (no way around that) and only return if not in the list.
        const history: Set<TKey> = new Set();
        for (const item of data) {
            const key = keySelector(item);
            if (compare) {
                let found = false;
                for (const innerItem of history) {
                    if (compare(key, innerItem)) {
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    history.add(key);
                    yield item;
                }
            } else {
                if (!(history.has(key))) {
                    (history as Set<TKey>).add(key);
                    yield item;
                }
            }
        }
    });
}
