import { Enumerable } from '../Enumerable/Enumerable';
import { IFunc2, IFunc1 } from '../Types/DelegateInterfaces';
import { Nullable } from '../Types/NoneType';

/**
 * select_q_: projects each element of a sequence into a new form by calling a transformation function on each element.
 * Optionally, the transformation function can receive the index as a second argument
 *
 * cast() is mapped to select() because in javascript/typescript, runtime cast() doesn't exist
 */

export function select<T, R>(this: Enumerable<T>, selectFunction: IFunc1<T, R> | IFunc2<T, number, R>): Enumerable<R> {
    if (!selectFunction) {
        throw new Error("Required argument is null");
    }
    return this._extend<R>(function* _select(data: IterableIterator<T>): IterableIterator<R> {
        let index: number = 0;
        for (const item of data) {
            // Cast needed to allow clean interface overloads
            yield (selectFunction as IFunc2<T, Nullable<number>, R>)(item, index++);
        }
    });
}
