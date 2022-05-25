import { CompareResult, IComparer, ICompareFunction, ICompareObject, extractComparer } from './../Types/IComparer';
import { Enumerable } from '../Enumerable/Enumerable';
import { IFunc1, IFunc2 } from '../Types/DelegateInterfaces';

/**
 * min_q_: Returns the minimum value in a sequence.
 * Takes an optional transformation function. If supplied, this transformation is applied to all values and the min result returned.
 * 
 * Takes an optional comparer, a function that takes two inputs and returns 1 if the first is higher, -1 is the second is higher,
 * else 0.
 * If you want to send only the comparer in the first parameter, it must be enclosed in an object like so: { compare: myComparerFunction }
 */
export function min<T, TResult>(this: Enumerable<T>,
    transform?: IFunc1<T, TResult> | ICompareObject<TResult>,
    comparer?: IComparer<TResult>): T | TResult {

    let compare: ICompareFunction<TResult> | undefined;

    if (comparer) {
        compare = extractComparer(comparer);
    } else if (transform && "compare" in transform) {
        compare = transform.compare;
    }

    let xform: IFunc1<T, TResult> | undefined;
    if (transform && typeof transform === "function") {
        xform = transform;
    } else {
        // Typescript doesn't know that T = TResult in this case
        xform = (val) => val as any as TResult;
    }

    let first = false;
    let minval: TResult | undefined;
    for (const item of this) {
        const current = xform(item);

        if (!first) {
            minval = current;
            first = true;
        } else if (compare) {
            if (compare(current, minval as TResult) < 0) {
                minval = current;
            }
        } else {
            if (current < (minval as TResult)) {
                minval = current;
            }
        }
    }
    if (!first) {
        throw new Error("Sequence contains no elements");
    }

    return minval as TResult;
}
