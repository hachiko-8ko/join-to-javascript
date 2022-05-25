import { IPredicate2 } from '../Types/DelegateInterfaces';
import { Enumerable } from '../Enumerable/Enumerable';
import { IEqualityComparer, extractEqualityComparer } from '../Types/IEqualityComparer';

/**
 * union_q_: concatenates two sequences returning the set sequence.
 * optional equality comparer can be supplied to compare values
 */
export function union<T>(this: Enumerable<T>, second: Iterable<T>, comparer?: IEqualityComparer<T>): Enumerable<T> {
    if (!second) {
        throw new Error("Required argument is null");
    }
    const compare = extractEqualityComparer(comparer);

    return this._extend(function* _union(data: IterableIterator<T>): IterableIterator<T> {
        // No way around this, but we need to keep a history of every item returned. Both the first and second lists.
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
                if (!history.has(item)) {
                    history.add(item);
                    yield item;
                }
            }
        }
        // a little bit of copypasta here but it's not worth making a sub-function for a single occurrence
        for (const item of second) {
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
                if (!history.has(item)) {
                    history.add(item);
                    yield item;
                }
            }
        }
    });
}
