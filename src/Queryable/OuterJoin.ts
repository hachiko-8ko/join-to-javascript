import { IEqualityComparer, IEqualityCompareObject } from './../Types/IEqualityComparer';
import { Enumerable } from '../Enumerable/Enumerable';
import { RestartableGenerator } from '../Generators/RestartableGenerator';
import { IFunc1, IFunc2, IPredicate2 } from '../Types/DelegateInterfaces';

/**
 * outerJoin_q_: Correlates the elements of two sequences based on matching keys. If no matching record is find in the second sequence, undefined is sent to the output selector.
 * Outer Joins are not provided in LINQ. This is a new function, following the pattern of join_q_();
 * optional equality comparer can be used to compare keys
 * If the output selector is left out, results are returned as [first row, second row].
 * Leaving the output selector out requires passing comparer in as { equals: comparer } if you want to use it.
 */
export function outerJoin<T, TKey, TSecond, TResult = ([T, TSecond])>(this: Enumerable<T>, second: Iterable<TSecond>,
    firstKeySelector: IFunc1<T, TKey>, secondKeySelector: IFunc1<TSecond, TKey>,
    outputFunction?: IFunc2<T, TSecond | undefined, TResult> | IEqualityCompareObject<TKey>,
    comparer?: IEqualityComparer<TKey>): Enumerable<TResult> {

    if (!second || !firstKeySelector || !secondKeySelector) {
        throw new Error("Required argument is null");
    }

    let output: IFunc2<T, TSecond | undefined, TResult>;
    let equalizer: IPredicate2<TKey, TKey> | undefined;

    if (comparer && typeof comparer === "function") {
        equalizer = comparer;
    } else if (comparer && "equals" in comparer) {
        equalizer = comparer.equals;
    } else if (outputFunction && "equals" in outputFunction) {
        equalizer = outputFunction.equals;
    }

    if (outputFunction && typeof outputFunction === "function") {
        output = outputFunction;
    } else {
        // If outputFunction is missing, TResult is [T, TSecond]. Can't make TypeScript understand that, though.
        output = ((l: T, r: TSecond) => [l, r]) as any as IFunc2<T, TSecond | undefined, TResult>;
    }

    return this._extend(function* _outerJoin(data: IterableIterator<T>): IterableIterator<TResult> {
        // Simple nested loops join
        // If this were SQL server, some statistics and index analysis and pre-filtering could be done before comparison.
        // This isn't SQL Server. We can't even filter out NULLs, because what if the join function says "left == null && right == null", like some linq to entity queries do?

        // We need the ability to check the right side against every left side. 
        // If it is a generator, it can't be restarted to allow that.
        const rightGen = new RestartableGenerator(second);
        for (const leftItem of data) {
            let leftMatched = false;
            for (const rightItem of rightGen) {
                const leftKey = firstKeySelector(leftItem);
                const rightKey = secondKeySelector(rightItem);
                let match = false;
                if (equalizer) {
                    match = equalizer(leftKey, rightKey);
                } else {
                    match = leftKey === rightKey;
                }
                if (match) {
                    leftMatched = true;
                    yield output(leftItem, rightItem);
                }
            }
            if (!leftMatched) {
                yield output(leftItem, undefined);
            }
            rightGen.restart();
        }
    });
}
