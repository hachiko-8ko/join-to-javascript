import { Enumerable } from '../Enumerable/Enumerable';
import { IFunc1 } from '../Types/DelegateInterfaces';
import { extractEqualityComparer, IEqualityComparer } from './../Types/IEqualityComparer';

/**
 * exceptBy_q_: Produces the set difference of two sequences based on keys (distinct keys) returned by a key selector function.
 * optional equality comparer can be used to compare values
 */
export function exceptBy<T, TKey>(this: Enumerable<T>, second: Iterable<T>, keySelector: IFunc1<T, TKey>, comparer?: IEqualityComparer<TKey>): Enumerable<T> {
    if (!second || !keySelector) {
        throw new Error("Required argument is null");
    }
    const compare = extractEqualityComparer(comparer);

    return this._extend(function* _exceptBy(data: IterableIterator<T>): IterableIterator<T> {
        // No way around this, but we need to keep a history of every item returned. Both the first and second lists.
        // And the second might also be a generator, so we need to exhaust its values.
        const history: Set<TKey> = new Set();
        for (const item of second) {
            history.add(keySelector(item));
        }

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
                    history.add(key);
                    yield item;
                }
            }
        }
    });
}
