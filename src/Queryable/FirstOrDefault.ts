import { Enumerable } from '../Enumerable/Enumerable';
import { IPredicate1, IPredicate2 } from '../Types/DelegateInterfaces';

/**
 * firstOrDefault_q_: Returns the first element in a sequence.
 * optional filter condition can be supplied
 * This condition can optionally take the index as the second argument (this is not provided by the C# version)
 *
 * If the filtered sequence is empty, it returns the default value.
 * The default value is provided by a parameter or is undefined.
 *
 * (Note that in JavaScript, unlike C#, there's no way to know what type a sequence is supposed to have, especially not an empty sequence.)
 *
 * The following method explained: firstOrDefault_q_({ defaultValue }: { defaultValue: T }): T;
 * In JavaScript, if you call the method with a single parameter and want it to be the default, there's no clean way to indicate that this
 * is what you want, it breaks the standard case.
 *
 * Consider the following: arrayOfPredicates.firstOrDefault_q_(myFunc)
 * Is this supposed to be
 *      arrayOfPredicates.where_q_(myFunc).firstOrDefault_q_()
 * or
 *      arrayOfPredicates.firstOrDefault_q_() || myFunc
 *
 * The only to make it work is to call like this:
 *      arrayOfPredicates.firstOrDefault_q_({ defaultValue: something })
 */
export function firstOrDefault<T>(this: Enumerable<T>, matchFunction?: IPredicate1<T> | IPredicate2<T, number> | { defaultValue: T }, defaultValue?: T): T | undefined {
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

    let index = 0;
    for (const item of this) {
        if (!tester) {
            return item;
        } else if ((tester as IPredicate2<T, number>)(item, index++)) {
            return item;
        }
    }
    return def;
}
