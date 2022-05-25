import { RestartableGenerator } from '../Generators/RestartableGenerator';
import { IFunc2, IPredicate2 } from '../Types/DelegateInterfaces';
import { Enumerable } from '../Enumerable/Enumerable';

/**
 * innerJoin_q_: A friendly helper to create a simple inner join. This combines the two key lookups and the custom equality comparer into a 
 * single function input. For most programmers, this is all the complexity you'll need.
 */
export function innerJoin<T, TSecond, R = ([T, TSecond])>(this: Enumerable<T>,
    second: Iterable<TSecond>, on: IPredicate2<T, TSecond>, selectFunction?: IFunc2<T, TSecond, R>): Enumerable<R> {

    if (!second || !on) {
        throw new Error("Required argument is null");
    }

    let output: IFunc2<T, TSecond, R>;
    if (selectFunction) {
        output = selectFunction;
    } else {
        // If selectFunction is missing, TResult is [T, TSecond]. Can't make TypeScript understand that, though.
        output = ((l: T, r: TSecond) => [l, r]) as any as IFunc2<T, TSecond | undefined, R>;
    }

    return this._extend(function* _innerJoin(data: IterableIterator<T>): IterableIterator<R> {
        // Simple nested loops join
        // If this were SQL server, some analysis and pre-filtering could be done before comparison.
        // This isn't SQL Server. We can't even filter out NULLs, because what if the join function says "left == null && right == null", like some linq to entity queries do?

        // The right side can theoretically be a generator. We don't know, but we have to take that chance.
        // JS doesn't give a way to restart a generator, so we can only check right once without some extra BS to allow it to restart
        const rightGen = new RestartableGenerator(second);
        for (const leftItem of data) {
            for (const rightItem of rightGen) {
                if (on(leftItem, rightItem)) {
                    yield output(leftItem, rightItem);
                }
            }
            rightGen.restart();
        }
    });
}
