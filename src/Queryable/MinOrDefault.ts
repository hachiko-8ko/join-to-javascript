import { CompareResult, IComparer, ICompareFunction, ICompareObject, extractComparer } from './../Types/IComparer';
import { Enumerable } from '../Enumerable/Enumerable';
import { IFunc1, IFunc2 } from '../Types/DelegateInterfaces';

/**
 * minOrDefault_q_: Returns the minimum value in a sequence. If sequence is empty, returns the default value or undefined.
 * Takes an optional transformation function. If supplied, this transformation is applied to all values and the min result returned.
 * This is a JOIN-specific method. There is no equivalent in C#.
 * 
 * Takes an optional comparer, a function that takes two inputs and returns 1 if the first is higher, -1 is the second is higher,
 * else 0.
 * If you want to send the comparer in the first parameter, it must be enclosed in an object like so: { compare: myComparerFunction }
 * If you want to send the defaultValue in anything but the final value, it must be enclosed like so: { defaultValue }
 */
export function minOrDefault<T, TResult>(this: Enumerable<T>,
    transform?: IFunc1<T, TResult> | ICompareObject<TResult> | { defaultValue: TResult },
    comparer?: IComparer<TResult> | { defaultValue: TResult },
    defaultValue?: TResult): T | TResult | undefined {

    let def;
    if (defaultValue) {
        def = defaultValue;
    } else if (comparer && "defaultValue" in comparer) {
        def = comparer.defaultValue;
    } else if (transform && "defaultValue" in transform) {
        def = transform.defaultValue;
    }

    let compare: ICompareFunction<TResult> | undefined;

    if (comparer && !("defaultValue" in comparer)) {
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
        return def;
    }

    return minval as TResult;
}
