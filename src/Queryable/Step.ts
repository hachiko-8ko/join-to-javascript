import { Enumerable } from '../Enumerable/Enumerable';

/**
 * step_q_: returns every "step" items from a sequence
 * 
 * This is a new item that I added because I thought it might be useful.
 */
export function step<T>(this: Enumerable<T>, stepCount: number): Enumerable<T> {
    if (stepCount <= 0) {
        throw new Error("Required argument is invalid");
    }
    return this._extend(function* _step(data: IterableIterator<T>): IterableIterator<T> {
        let tmpStep = 0;
        for (const item of data) {
            if (tmpStep === 0) {
                yield item;
            }
            // Handle step
            tmpStep++;
            if (tmpStep === stepCount) {
                tmpStep = 0;
            }
        }
    });
}
