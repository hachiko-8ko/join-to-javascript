import { Enumerable } from '../Enumerable/Enumerable';
import { IFunc2, IFunc1 } from '../Types/DelegateInterfaces';
import { Nullable } from '../Types/NoneType';

/**
 * selectMany_q_: Projects each element of a sequence to an IEnumerable<T>, and flattens the resulting sequences into one sequence using a selector function
 * optionally, the transformation function can receive the index as a second argument
 * an optional output transformation function processes the output of the selector function to produce an output
 */

export function selectMany<T, TElement, R = TElement>(this: Enumerable<T>,
    subSelectFunction: IFunc1<T, Iterable<TElement>> | IFunc2<T, number, Iterable<TElement>>,
    outputFunction?: IFunc2<T, TElement, R>
): Enumerable<R> {
    if (!subSelectFunction) {
        throw new Error("Required argument is null");
    }

    if (!outputFunction) {
        // Typescript doesn't know that if R is left out, it's the same as TElement.
        // This would all be easier if typescript had proper overloads.
        outputFunction = ((src: T, row: TElement) => row as any as R);
    }

    return this._extend<R>(function* _selectMany(data: IterableIterator<T>): IterableIterator<R> {
        let index: number = 0;
        for (const item of data) {
            // Cast needed to allow clean interface overloads
            const iter = (subSelectFunction as IFunc2<T, Nullable<number>, Iterable<TElement>>)(item, index++);
            for (const subItem of iter) {
                yield outputFunction!(item, subItem);
            }
        }
    });
}
