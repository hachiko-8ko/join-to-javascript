import { CompareResult, IComparer, extractComparer } from './../Types/IComparer';
import { Enumerable } from '../Enumerable/Enumerable';
import { IFunc1, IFunc2 } from '../Types/DelegateInterfaces';

/**
 * minBy_q_: Returns the maximum value in a sequence using a key selector function.
 * Takes an optional comparer, a function that takes two inputs and returns 1 if the first is higher, -1 is the second is higher,
 * else 0.
 * 
 * The difference between MinBy and Min with a transformation function is that Min returns the output of the transformation while MinBy
 * returns the original value. This same result could be achieved with Min and a well-designed comparer function, of course.
 */
export function minBy<T, TKey>(this: Enumerable<T>, keySelector: IFunc1<T, TKey>, comparer?: IComparer<TKey>): T {
    if (!keySelector) {
        throw new Error("Required argument is null");
    }
    const compare = extractComparer(comparer);

    let first = false;
    let min: TKey | undefined;
    let minValue: T | undefined;
    for (const item of this) {
        const current = keySelector(item);

        if (!first) {
            min = current;
            minValue = item;
            first = true;
        } else if (compare) {
            if (compare(current, min as TKey) < 0) {
                min = current;
                minValue = item;
            }
        } else {
            if (current < (min as TKey)) {
                min = current;
                minValue = item;
            }
        }
    }
    if (!first) {
        throw new Error("Sequence contains no elements");
    }

    return minValue as T;
}
