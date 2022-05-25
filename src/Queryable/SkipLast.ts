import { Enumerable } from '../Enumerable/Enumerable';

/**
 * skipLast_q_: Returns a new enumerable collection that contains the elements from source with the last count elements of the source collection omitted
 */
export function skipLast<T>(this: Enumerable<T>, count: number): Enumerable<T> {
    // This is another one which is technically deferred execution, but there's no way to skip the last n items
    // if you don't count the list.
    return this._extend(function* _skipLast(data: IterableIterator<T>): IterableIterator<T> {
        let toReturn;
        if (count <= 0) {
            toReturn = data;
        } else {
            toReturn = [...data].slice(0, -1 * count);
        }
        yield* toReturn;
    });
}
