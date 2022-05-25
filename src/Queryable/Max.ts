import { CompareResult, IComparer, ICompareObject, ICompareFunction, extractComparer } from './../Types/IComparer';
import { Enumerable } from '../Enumerable/Enumerable';
import { IFunc1, IFunc2 } from '../Types/DelegateInterfaces';

/**
 * max_q_: Returns the maximum value in a sequence.
 * Takes an optional transformation function. If supplied, this transformation is applied to all values and the max result returned.
 * 
 * Takes an optional comparer, a function that takes two inputs and returns 1 if the first is higher, -1 is the second is higher,
 * else 0.
 * If you want to send only the comparer in the first parameter, it must be enclosed in an object like so: { compare: myComparerFunction }
 */
export function max<T, TResult>(this: Enumerable<T>,
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
    let maxval: TResult | undefined;
    for (const item of this) {
        const current = xform(item);

        if (!first) {
            maxval = current;
            first = true;
        } else if (compare) {
            if (compare(current, maxval as TResult) > 0) {
                maxval = current;
            }
        } else {
            if (current > (maxval as TResult)) {
                maxval = current;
            }
        }
    }
    if (!first) {
        throw new Error("Sequence contains no elements");
    }

    return maxval as TResult;
}
