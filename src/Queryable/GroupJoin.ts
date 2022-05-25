import { Enumerable } from '../Enumerable/Enumerable';
import { RestartableGenerator } from '../Generators/RestartableGenerator';
import { IFunc1, IFunc2, IPredicate2 } from '../Types/DelegateInterfaces';
import { Grouping } from '../Types/Grouping';
import { IEqualityComparer, extractEqualityComparer } from '../Types/IEqualityComparer';

/**
 * groupJoin_q_: Correlates the elements of two sequences based on key equality and groups the results.
 *
 * This is a sort of a combination of outer join and half a group by (only the second sequence is grouped).
 * The output function, which determines the output, is required. This doesn't seem useful enough for me to come up with a default output.
 */
export function groupJoin<T, TKey, TSecond, TResult>(this: Enumerable<T>, second: Iterable<TSecond>,
    firstKeySelector: IFunc1<T, TKey>, secondKeySelector: IFunc1<TSecond, TKey>,
    outputFunction: IFunc2<T, TSecond[], TResult>, comparer?: IEqualityComparer<TKey>): Enumerable<TResult> {

    if (!second || !firstKeySelector || !secondKeySelector || !outputFunction) {
        throw new Error("Required argument is null");
    }
    const compare = extractEqualityComparer(comparer);

    return this._extend(function* _groupJoin(data: IterableIterator<T>): IterableIterator<TResult> {
        // We need the ability to check the right side against every left side. 
        // If it is a generator, it can't be restarted to allow that.
        const rightGen = new RestartableGenerator(second);
        const right: TSecond[] = [];
        for (const leftItem of data) {
            let grouping: Grouping<TSecond, TKey, TSecond> | undefined;
            for (const rightItem of rightGen) {
                let match = false;
                const leftKey = firstKeySelector(leftItem);
                const rightKey = secondKeySelector(rightItem);
                if (compare) {
                    match = compare(leftKey, rightKey);
                } else {
                    match = leftKey === rightKey;
                }
                if (match) {
                    if (grouping) {
                        grouping.add(rightItem);
                    } else {
                        grouping = new Grouping(leftKey, rightItem);
                    }
                }
            }

            if (grouping) {
                yield outputFunction(leftItem, grouping.values);
            } else {
                yield outputFunction(leftItem, []);
            }

            rightGen.restart();
        }
    });
}
