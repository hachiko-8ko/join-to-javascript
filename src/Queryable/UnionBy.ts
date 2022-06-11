import { IPredicate2, IFunc1 } from '../Types/DelegateInterfaces';
import { Enumerable } from '../Enumerable/Enumerable';
import { extractEqualityComparer, IEqualityComparer } from '../Types/IEqualityComparer';

/**
 * unionBy_q_: concatenates two sequences returning the set sequence based on keys returned by a key selector function.
 * optional equality comparer can be supplied to compare values
 */
export function unionBy<T, TKey>(this: Enumerable<T>, second: Iterable<T>, keySelector: IFunc1<T, TKey>, comparer?: IEqualityComparer<TKey>): Enumerable<T> {
    if (!second || !keySelector) {
        throw new Error("Required argument is null");
    }
    const compare = extractEqualityComparer(comparer);

    return this._extend(function* _unionBy(data: IterableIterator<T>): IterableIterator<T> {
        // No way around this, but we need to keep a history of every item returned. Both the first and second lists.
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
                if (!history.has(key)) {
                    history.add(key);
                    yield item;
                }
            }
        }
        // a little bit of copypasta here but it's not worth making a sub-function for a single occurrence
        for (const item of second) {
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
                if (!history.has(key)) {
                    history.add(key);
                    yield item;
                }
            }
        }
    });
}
