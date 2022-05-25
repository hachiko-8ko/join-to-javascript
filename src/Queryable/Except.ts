import { Enumerable } from '../Enumerable/Enumerable';
import { extractEqualityComparer, IEqualityComparer } from './../Types/IEqualityComparer';

/**
 * except_q_: Produces the set difference (distinct) of two sequences.
 * optional equality comparer can be used to compare values
 */
export function except<T>(this: Enumerable<T>, second: Iterable<T>, comparer?: IEqualityComparer<T>): Enumerable<T> {
    if (!second) {
        throw new Error("Required argument is null");
    }
    const compare = extractEqualityComparer(comparer);

    return this._extend(function* _except(data: IterableIterator<T>): IterableIterator<T> {
        // No way around this, but we need to keep a history of every item returned. Both the first and second lists.
        // And the second might also be a generator, so we need to exhaust its values.

        // Start by loading the history with the second set. Then, we can do what we already did for distinct() and it'll pull out the matches
        const history: Set<T> = new Set();
        for (const item of second) {
            history.add(item);
        }

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
                    history.add(item);
                    yield item;
                }
            }
        }
    });

}
