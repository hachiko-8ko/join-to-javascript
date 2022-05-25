import { Enumerable } from '../Enumerable/Enumerable';
import { IFunc1, IFunc2 } from '../Types/DelegateInterfaces';

/**
 * aggregate_q_: Applies an accumulator function over a sequence.
 * optional initial value acts as seed value
 * optional selectFunction selects the result
 */

export function aggregate<T, TAccumulated, TResult>(this: Enumerable<T>,
    initialOrAccumulator: TAccumulated | IFunc2<T, T, T>, accumulatorFunction?: IFunc2<TAccumulated, T, TAccumulated>,
    selectFunction?: IFunc1<TAccumulated, TResult>): TAccumulated | TResult {

    let initialValueProvided = false;
    let seeded: boolean = false;
    let value: T | TAccumulated | undefined;
    let accumulator: IFunc2<any, T, T | TAccumulated>;
    let selector: IFunc1<any, TResult> | undefined;

    // This is basically the same as reduce, except it doesn't require copying the whole thing to an array first
    // The wack way that typescript does overloads really slops up the code for keeping a linq api
    // It also required two use of "any" above that I did not like doing.
    if (!accumulatorFunction) { // Overload 1
        accumulator = initialOrAccumulator as IFunc2<T, T, T>;
    } else {
        initialValueProvided = true;
        seeded = true;
        value = initialOrAccumulator as TAccumulated;
        accumulator = accumulatorFunction;
        selector = selectFunction;
    }

    for (const item of this) {
        // If there is no seed, then the first value is used as the seed
        // After the first item, it is populated. But typescript doesn't know understand that, so any needs to be used sometimes.
        if (!seeded) {
            value = item;
            seeded = true;
        } else {
            value = accumulator(value, item);
        }
    }

    // C# only throws an error in the overload without a seed value.
    if (!seeded) {
        throw new Error("Sequence contains no elements");
    }

    if (selector) {
        return selector(value);
    }
    else {
        // Typescript doesn't understand that _value is not undefined after the _value = item line (unless the iterable type allows it)
        // Unless the iterator contains undefined, of course. That's totally legal in JS
        return value as any as TResult;
    }
}
