import { Enumerable } from '../Enumerable/Enumerable';
import { IPredicate1, IPredicate2 } from '../Types/DelegateInterfaces';

/**
 * singleOrDefault_q_: Returns the first element in a sequence, throwing an exception if the sequence has more than one item.
 * Takes an optional filter condition.
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
 * this: singleOrDefault_q_({ defaultValue: "NOT FOUND" })
 */
export function singleOrDefault<T>(this: Enumerable<T>, matchFunction?: IPredicate1<T> | IPredicate2<T, number> | { defaultValue: T }, defaultValue?: T): T | undefined {
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
    let foundItem;
    let index = 0;
    for (const item of this) {
        if (!tester) {
            if (found) {
                throw new Error("Sequence contains more than one element.");
            }
            found = true;
            foundItem = item;
        } else if ((tester as IPredicate2<T, number>)(item, index++)) {
            if (found) {
                throw new Error("Sequence contains more than one element.");
            }
            found = true;
            foundItem = item;
        }
    }
    if (found) {
        return foundItem;
    }
    return def;
}
