import { Enumerable } from '../Enumerable/Enumerable';
import { IPredicate1, IPredicate2 } from '../Types/DelegateInterfaces';

/**
 * lastOrDefault_q_: Returns the last element in a sequence, taking an optional filter condition.
 * This condition can optionally take the index as the second argument (this is not provided by the C# version)
 * 
 * If the filtered sequence is empty, it returns the default value.
 * The default value is provided by a parameter or is undefined.
 *
 * (Note that in JavaScript, unlike C#, there's no way to know what type a sequence is supposed to have, especially not an empty sequence.)
 *
 * In JavaScript, if you call the method with a single parameter and want it to be the default, there's no clean way to indicate that this
 * is what you want, because it breaks the case where you pass a filter condition. A single predicate could be a filter condition or it
 * could be the default for an array of predicates ... you don't know. Therefore, if you want to pass only a default value, call like
 * this: firstOrDefault_q_({ defaultValue: "NOT FOUND" })
 */
export function lastOrDefault<T>(this: Enumerable<T>, matchFunction?: IPredicate1<T> | IPredicate2<T, number> | { defaultValue: T }, defaultValue?: T): T | undefined {
    let tester: IPredicate1<T> | IPredicate2<T, number> | undefined;
    if (matchFunction && typeof matchFunction === "function") {
        tester = matchFunction;
    }

    let def: T | undefined;
    if (matchFunction && "defaultValue" in matchFunction) {
        def = matchFunction.defaultValue;
    } else {
        def = defaultValue;
    }

    let found = false;
    let lastItem;
    let index = 0;
    for (const item of this) {
        if (!tester) {
            found = true;
            lastItem = item;
        } else if ((tester as IPredicate2<T, number>)(item, index++)) {
            found = true;
            lastItem = item;
        }
    }
    if (found) {
        // Can't check if lastItem is not undefined, because the last item could actually be "undefined".
        // TypeScript can't tell that every place found was true, lastItem was also set;
        return lastItem as any as T;
    }
    return def;
}
