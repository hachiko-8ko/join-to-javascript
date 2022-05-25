import { Enumerable } from '../Enumerable/Enumerable';
import { IPredicate2, IFunc2 } from '../Types/DelegateInterfaces';

/**
 * zip_q_: Produces a sequence of tuples with elements from two or three specified sequences.
 * In place of a third sequence, a function can be provided that combines the first two.
 */
export function zip<T, TSecond, TThird>(this: Enumerable<T>, second: Iterable<TSecond>, third?: Iterable<TThird> | IFunc2<T, TSecond, TThird>): Enumerable<[T, TSecond] | [T, TSecond, TThird]> {
    if (!second) {
        throw new Error("Required argument is null");
    }
    return this._extend(function* _zip(data: IterableIterator<T>): IterableIterator<[T, TSecond] | [T, TSecond, TThird]> {
        const iter2 = second[Symbol.iterator]();

        let iter3;
        let func3;
        let done3 = false;

        if (third && typeof third === "function") {
            func3 = third;
        } else if (third) {
            iter3 = third[Symbol.iterator]();
        }

        while (true) {
            const val1: IteratorResult<T> = data.next();
            const val2: IteratorResult<TSecond> = iter2.next();
            let val3: IteratorResult<TThird> | undefined;
            if (iter3) {
                val3 = iter3.next();
                done3 = val3.done;
            }
            // As soon as any of the sequences runs out of data, we halt.
            if (val1.done || val2.done || done3) {
                break;
            }
            if (iter3 && val3) {
                yield [val1.value, val2.value, val3.value];
            } else if (func3) {
                yield [val1.value, val2.value, func3(val1.value, val2.value)];
            } else {
                yield [val1.value, val2.value];
            }
        }
    });
}
