import { Nullable } from '../Types/NoneType';
import { RestartableGenerator } from '../Generators/RestartableGenerator';
import { IFunc2, IPredicate2 } from '../Types/DelegateInterfaces';
import { Enumerable } from '../Enumerable/Enumerable';

/**
 * fullJoin_q_: A friendly helper to create a simple full outer join. This follows the pattern of innerJoin_q_(), which combines the two 
 * key lookups and equality comparer into a single function input.
 */
export function fullJoin<T, TSecond, R = ([Nullable<T>, Nullable<TSecond>])>(this: Enumerable<T>,
    second: Iterable<TSecond>, on: IPredicate2<T, TSecond>, selectFunction?: IFunc2<Nullable<T>, Nullable<TSecond>, R>): Enumerable<R> {

    if (!second || !on) {
        throw new Error("Required argument is null");
    }

    let output: IFunc2<T | undefined, TSecond | undefined, R>;
    if (selectFunction) {
        output = selectFunction;
    } else {
        // If selectFunction is missing, TResult is [T, TSecond]. Can't make TypeScript understand that, though.
        output = ((l: T, r: TSecond) => [l, r]) as any as IFunc2<T | undefined, TSecond | undefined, R>;
    }

    return this._extend(function* _leftJoin(data: IterableIterator<T>): IterableIterator<R> {
        // Simple nested loops join
        // If this were SQL server, some analysis and pre-filtering could be done before comparison.
        // This isn't SQL Server. We can't even filter out NULLs, because what if the join function says "left == null && right == null", like some linq to entity queries do?

        // We need a place to track a;l items in the right that got sent
        const sentRights: Set<TSecond> = new Set();

        // We need the ability to check the right side against every left side.
        // If it is a generator, it can't be restarted to allow that.
        const rightGen = new RestartableGenerator(second);
        for (const leftItem of data) {
            let leftMatched = false;
            for (const rightItem of rightGen) {
                if (on(leftItem, rightItem)) {
                    leftMatched = true;
                    sentRights.add(rightItem);
                    yield output(leftItem, rightItem);
                }
            }
            if (!leftMatched) {
                yield output(leftItem, undefined);
            }
            rightGen.restart();
        }

        // Now go through the right side once more and send anything that didn't get sent
        for (const rightItem of rightGen) {
            if (!sentRights.has(rightItem)) {
                yield output(undefined, rightItem);
            }
        }
    });
}
