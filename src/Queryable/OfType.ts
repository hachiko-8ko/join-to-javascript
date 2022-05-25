import { Enumerable } from '../Enumerable/Enumerable';

/**
 * ofType_q_: Filters the elements of an IEnumerable based on a specified type.
 * 
 * In JS this is kind of meaningless. If you provide a string, it does a typeof. If you provide a class, it does an instanceof.
 */
export function ofType<T, R>(this: Enumerable<T>, filter: string | any): Enumerable<R> {
    if (!filter) {
        throw new Error("Required argument is null");
    }

    return this._extend(function* _ofType(data: IterableIterator<T>): IterableIterator<R> {
        for (const item of data) {
            if (typeof filter === "string") {
                if (typeof item === filter) {
                    // We're just taking it on the coder's honor that filter matches R. No way to actually test it.
                    yield item as any as R;
                }
            } else {
                if (item instanceof filter) {
                    yield item as any as R;
                }
            }
        }
    });
}
