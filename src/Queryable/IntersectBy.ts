import { Enumerable } from '../Enumerable/Enumerable';
import { IFunc1, IPredicate2 } from '../Types/DelegateInterfaces';
import { IEqualityComparer, extractEqualityComparer } from '../Types/IEqualityComparer';

/**
 * intersectBy_q_: Produces the set intersection of two sequences based on keys returned by a key selector function.
 * optional equality comparer can be provided
 */
export function intersectBy<T, TKey>(this: Enumerable<T>, second: Iterable<T>, keySelector: IFunc1<T, TKey>, comparer?: IEqualityComparer<TKey>): Enumerable<T> {
    if (!second || !keySelector) {
        throw new Error("Required argument is null");
    }
    const compare = extractEqualityComparer(comparer);

    return this._extend(function* _intersectBy(data: IterableIterator<T>): IterableIterator<T> {
        const secondSet: Set<TKey> = new Set();
        for (const item of second) {
            const key = keySelector(item);
            secondSet.add(key);
        }

        // No way around this, but we need to keep a history of every item returned. Both the first and second lists.
        const history: Set<TKey> = new Set();

        for (const item of data) {
            const key = keySelector(item);
            if (compare) {
                let found = false;
                for (const innerItem of secondSet) {
                    if (compare(key, innerItem)) {
                        // It's in both sets...
                        found = true;
                        break;
                    }
                }
                if (found) {
                    for (const innerItem of history) {
                        if (compare(key, innerItem)) {
                            // But if it's been sent already, don't send it again.
                            found = false;
                            break;
                        }
                    }
                }
                // If found, track and send it
                if (found) {
                    history.add(key);
                    yield item;
                }
            } else {
                if (secondSet.has(key) &&
                    !history.has(key)) {
                    history.add(key);
                    yield item;
                }
            }
        }
    });
}
