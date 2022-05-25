import { Enumerable } from "../Enumerable/Enumerable";
import { RestartableGenerator } from "../Generators/RestartableGenerator";

/**
 * replicate_q_: Repeat the items in a sequence a specified number of times.
 */
export function replicate<T>(this: Enumerable<T>, times: number): Enumerable<T> {
    return this._extend(function* _take(data: IterableIterator<T>): IterableIterator<T> {
        const loop = new RestartableGenerator<T>(data);
        while (times > 0) {
            for (const item of loop) {
                yield item;
            }
            loop.restart();
            times--;
        }
    });
}
