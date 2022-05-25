import { Nullable } from '../Types/NoneType';
import { RestartableGenerator } from '../Generators/RestartableGenerator';
import { IFunc2, IPredicate2 } from '../Types/DelegateInterfaces';
import { Enumerable } from '../Enumerable/Enumerable';

/**
 * rightJoin_q_: A friendly helper to create a right left outer join. This follows the pattern of innerJoin_q_(), which combines the two 
 * key lookups and equality comparer into a single function input.
 */
export function rightJoin<T, TSecond, R = ([Nullable<T>, TSecond])>(this: Enumerable<T>,
    second: Iterable<TSecond>, on: IPredicate2<T, TSecond>, selectFunction?: IFunc2<Nullable<T>, TSecond, R>): Enumerable<R> {

    if (!second || !on) {
        throw new Error("Required argument is null");
    }

    let output: IFunc2<T | undefined, TSecond, R>;
    if (selectFunction) {
        output = selectFunction;
    } else {
        // If selectFunction is missing, TResult is [T, TSecond]. Can't make TypeScript understand that, though.
        output = ((l: T, r: TSecond) => [l, r]) as any as IFunc2<T | undefined, TSecond, R>;
    }

    return this._extend(function* _leftJoin(data: IterableIterator<T>): IterableIterator<R> {
        // Simple nested loops join
        // If this were SQL server, some analysis and pre-filtering could be done before comparison.
        // This isn't SQL Server. We can't even filter out NULLs, because what if the join function says "left == null && right == null", like some linq to entity queries do?

        // We need the ability to check the left side against every right side.
        // If it is a generator, it can't be restarted to allow that.
        const leftGen = new RestartableGenerator<T>(data);
        for (const rightItem of second) {
            let rightMatched = false;
            for (const leftItem of leftGen) {
                if (on(leftItem, rightItem)) {
                    rightMatched = true;
                    yield output(leftItem, rightItem);
                }
            }
            if (!rightMatched) {
                yield output(undefined, rightItem);
            }
            leftGen.restart();
        }
    });
}
