import { RestartableGenerator } from '../Generators/RestartableGenerator';
import { IFunc2, IPredicate2 } from '../Types/DelegateInterfaces';
import { Enumerable } from '../Enumerable/Enumerable';

/**
 * crossJoin_q_: Create a simple cartesian join (every record from table 1 along with every record from table 2)
 */
export function crossJoin<T, TSecond, R = ([T, TSecond])>(this: Enumerable<T>,
    second: Iterable<TSecond>, selectFunction?: IFunc2<T, TSecond, R>): Enumerable<R> {

    if (!second) {
        throw new Error("Required argument is null");
    }

    let output: IFunc2<T, TSecond, R>;
    if (selectFunction) {
        output = selectFunction;
    } else {
        // If selectFunction is missing, TResult is [T, TSecond]. Can't make TypeScript understand that, though.
        output = ((l: T, r: TSecond) => [l, r]) as any as IFunc2<T, TSecond | undefined, R>;
    }

    return this._extend(function* _crossJoin(data: IterableIterator<T>): IterableIterator<R> {
        // We need the ability to match the right side against every left side.
        // If it is a generator, it can't be restarted to allow that.
        const rightGen = new RestartableGenerator(second);
        for (const leftItem of data) {
            for (const rightItem of rightGen) {
                yield output(leftItem, rightItem);
            }
            rightGen.restart();
        }
    });
}
