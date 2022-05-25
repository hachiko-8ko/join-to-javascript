import { CompareResult, IComparer, extractComparer } from './../Types/IComparer';
import { Enumerable } from '../Enumerable/Enumerable';
import { IFunc1, IFunc2 } from '../Types/DelegateInterfaces';

/**
 * maxBy_q_: Returns the maximum value in a sequence using a key selector function.
 * Takes an optional comparer, a function that takes two inputs and returns 1 if the first is higher, -1 is the second is higher,
 * else 0.
 * 
 * The difference between MaxBy and Max with a transformation function is that Max returns the output of the transformation while MaxBy
 * returns the original value. This same result could be achieved with Max and a well-designed comparer function, of course.
 */
export function maxBy<T, TKey>(this: Enumerable<T>, keySelector: IFunc1<T, TKey>, comparer?: IComparer<TKey>): T {
    if (!keySelector) {
        throw new Error("Required argument is null");
    }
    const compare = extractComparer(comparer);

    let first = false;
    let max: TKey | undefined;
    let maxValue: T | undefined;
    for (const item of this) {
        const current = keySelector(item);

        if (!first) {
            max = current;
            maxValue = item;
            first = true;
        } else if (compare) {
            if (compare(current, max as TKey) > 0) {
                max = current;
                maxValue = item;
            }
        } else {
            if (current > (max as TKey)) {
                max = current;
                maxValue = item;
            }
        }
    }
    if (!first) {
        throw new Error("Sequence contains no elements");
    }

    return maxValue as T;
}
