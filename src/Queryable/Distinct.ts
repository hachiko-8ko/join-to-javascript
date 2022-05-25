import { IEqualityComparer, extractEqualityComparer } from './../Types/IEqualityComparer';
import { Enumerable } from '../Enumerable/Enumerable';
import { IPredicate2 } from '../Types/DelegateInterfaces';

/**
 * distinct_q_: Returns distinct elements from a sequence by using an optional equality comparer to compare values
 */
export function distinct<T>(this: Enumerable<T>, comparer?: IEqualityComparer<T>): Enumerable<T> {
    const compare = extractEqualityComparer(comparer);

    return this._extend(function* _distinct(data: IterableIterator<T>): IterableIterator<T> {
        // Keep a history of every item returned (no way around that) and only return if not in the list.
        const history: Set<T> = new Set();
        for (const item of data) {
            if (compare) {
                let found = false;
                for (const innerItem of history) {
                    if (compare(item, innerItem)) {
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    history.add(item);
                    yield item;
                }
            } else {
                if (!(history.has(item))) {
                    (history as Set<T>).add(item);
                    yield item;
                }
            }
        }
    });
}
