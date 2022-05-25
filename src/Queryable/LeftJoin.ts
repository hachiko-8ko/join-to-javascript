import { Nullable } from '../Types/NoneType';
import { RestartableGenerator } from '../Generators/RestartableGenerator';
import { IFunc2, IPredicate2 } from '../Types/DelegateInterfaces';
import { Enumerable } from '../Enumerable/Enumerable';

/**
 * leftJoin_q_: A friendly helper to create a simple left outer join. This follows the pattern of innerJoin_q_(), which combines the two 
 * key lookups and equality comparer into a single function input.
 */
export function leftJoin<T, TSecond, R = ([T, Nullable<TSecond>])>(this: Enumerable<T>,
    second: Iterable<TSecond>, on: IPredicate2<T, TSecond>, selectFunction?: IFunc2<T, Nullable<TSecond>, R>): Enumerable<R> {

    if (!second || !on) {
        throw new Error("Required argument is null");
    }

    let output: IFunc2<T, TSecond | undefined, R>;
    if (selectFunction) {
        output = selectFunction;
    } else {
        // If selectFunction is missing, TResult is [T, TSecond]. Can't make TypeScript understand that, though.
        output = ((l: T, r: TSecond) => [l, r]) as any as IFunc2<T, TSecond | undefined, R>;
    }

    return this._extend(function* _leftJoin(data: IterableIterator<T>): IterableIterator<R> {
        // Simple nested loops join
        // If this were SQL server, some analysis and pre-filtering could be done before comparison.
        // This isn't SQL Server. We can't even filter out NULLs, because what if the join function says "left == null && right == null", like some linq to entity queries do?

        // We need the ability to check the right side against every left side.
        // If it is a generator, it can't be restarted to allow that.
        const rightGen = new RestartableGenerator(second);
        for (const leftItem of data) {
            let leftMatched = false;
            for (const rightItem of rightGen) {
                if (on(leftItem, rightItem)) {
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
