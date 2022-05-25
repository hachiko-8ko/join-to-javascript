import { Enumerable } from '../Enumerable/Enumerable';
import { IPredicate1 } from '../Types/DelegateInterfaces';

/**
 * longCount_q_: returns a BigInt that represents how many elements in the specified sequence satisfy an optional condition.
 * BigInt is an ECMAScript 2020 addition, too new for my version of typescript.
 */

// I don't have a version of typescript that'll let me use BigInt so LongCount takes some hacking.
declare function BigInt(x: number): any;

export function longCount<T>(this: Enumerable<T>, condition?: IPredicate1<T>): any {
    let ctr: any = BigInt(0);
    const one: any = BigInt(1);

    for (const item of this) {
        if (condition) {
            if (condition(item)) {
                ctr = ctr + one;
            }
        } else {
            ctr = ctr + one;
        }
    }
    return ctr;
}
