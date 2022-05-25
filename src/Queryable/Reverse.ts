import { Enumerable } from '../Enumerable/Enumerable';

/**
 * reverse_q_: Inverts the order of the elements in a sequence
 * 
 * Reverse is really pointless. It is already found on the array class, and while this is technically
 * delayed execution, it can only work by going through to the end of the enumerable.
 */
export function reverse<T>(this: Enumerable<T>): Enumerable<T> {
    return this._extend(function* _reverse(data: IterableIterator<T>): IterableIterator<T> {
        // While this is technically delayed execution, it obviously needs to process the entire dataset
        // because it has to get all the way to the last item before returning a row.
        const toReturn = [...data];
        while (toReturn.length) {
            yield toReturn.pop() as T;
        }
    });
}
