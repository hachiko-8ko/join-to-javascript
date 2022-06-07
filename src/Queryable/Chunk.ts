import { Enumerable } from '../Enumerable/Enumerable';

/**
 * chunk_q_: splits the elements of a sequence into chunks of size at most "size"
 */
export function chunk<T>(this: Enumerable<T>, size: number): Enumerable<Array<T>> {
    const newenum = this._extend<Array<T>>(function* _chunk(data: IterableIterator<T>): IterableIterator<Array<T>> {
        if (!size || size < 1) {
            throw new Error("Argument out of range");
        }
        let counter = size;
        let tmp = [];
        for (const item of data) {
            tmp.push(item);
            counter--;
            if (counter <= 0) {
                yield tmp;
                tmp = [];
                counter = size;
            }
        }
        if (tmp.length) {
            yield tmp;
        }
    });
    return newenum;
}
