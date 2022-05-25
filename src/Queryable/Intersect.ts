import { Enumerable } from '../Enumerable/Enumerable';
import { IPredicate2 } from '../Types/DelegateInterfaces';
import { IEqualityComparer, extractEqualityComparer } from '../Types/IEqualityComparer';

/**
 * intersect_q_: Produces the set intersection of two sequences.
 * optional equality comparer can be provided
 */
export function intersect<T>(this: Enumerable<T>, second: Iterable<T>, comparer?: IEqualityComparer<T>): Enumerable<T> {
    if (!second) {
        throw new Error("Required argument is null");
    }
    const compare = extractEqualityComparer(comparer);

    return this._extend(function* _intersect(data: IterableIterator<T>): IterableIterator<T> {
        const secondSet: Set<T> = new Set();
        for (const item of second) {
            secondSet.add(item);
        }

        // No way around this, but we need to keep a history of every item returned. Both the first and second lists.
        const history: Set<T> = new Set();

        for (const item of data) {
            if (compare) {
                let found = false;
                for (const innerItem of secondSet) {
                    if (compare(item, innerItem)) {
                        // It's in both sets...
                        found = true;
                        break;
                    }
                }
                if (found) {
                    for (const innerItem of history) {
                        if (compare(item, innerItem)) {
                            // But if it's been sent already, don't send it again.
                            found = false;
                            break;
                        }
                    }
                }
                // If found, track and send it
                if (found) {
                    history.add(item);
                    yield item;
                }
            } else {
                if (secondSet.has(item) &&
                    !history.has(item)) {
                    history.add(item);
                    yield item;
                }
            }
        }
    });
}
