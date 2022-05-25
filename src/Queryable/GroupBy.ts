import { IEqualityComparer, IEqualityCompareObject, IEqualityCompareFunction, extractEqualityComparer } from './../Types/IEqualityComparer';
import { Enumerable } from '../Enumerable/Enumerable';
import { IFunc1, IFunc2, IPredicate2 } from '../Types/DelegateInterfaces';
import { Grouping, IGrouping } from '../Types/Grouping';

/**
 * Groups the elements of a sequence according to a specified key selector function and creates a result value from each group and its key.
 * optional element selection function (either second argument or enclosed in a { element: func } object)
 * optional output projection function (either third argument or enclosed in a { project: func } object)
 * optional equality comparer function (either fourth argument or enclosed in a { equals: func } object)
 *
 * The number of overloads in C# is HUGE. If I were microsoft, I wouldn't have done this, as elementFunction could be
 * handled in keySelector and outputFuntion could be handled by a select() following the groupBy().
 * There's a point beyond which more options becomes less helpful rather than more.
 * See join() for another example of functions people have to google before using.
 *
 * The weaknesses of the typescript typing and overload systems really shine through in a giant like this.
 * Iin javascript it's not possible to know what inputs are provided in a lot of places. The difference between
 * a projection function and a key selector function is that one takes one input and one takes two. This is easy for
 * C# to detect, but in javascript, all functions are just function() that take any number of inputs. Typescript
 * can know which one you're using, but the emitted javascript code has no idea.
 *
 * This overload setup is impossible in JS:
 *      function groupBy_q_(keySelector, elementFunction?: function);
 *      function groupBy_q_(keySelector, outputFunction?: function);
 * because JS sees only:
 *      function groupBy_q_(function, function)
 * Which one was it? No clue.
 *
 * Because of this, as long as you pass
 *  only keySelector, or
 *  only keySelector and elementFunction, o
 *  only keySelector, elementFunction, outputFunction, or
 *  only keySelector, elementFunction, outputFunction and comparer,
 * you don't have to do anything special, but any overload which omits a previous value must be in the form of
 *      const result = arr.groupBy_q_(keySelector, { param3: value })
 * which translates to
 *       const result = arr.groupBy_q_(keySelector, undefined, value)
 */

export function groupBy<T, TKey, TElement, TOutput>(this: Enumerable<T>,
    groupFunction: IFunc1<T, TKey>,
    elementFunction?: IFunc1<T, TElement> | { element: IFunc1<T, TElement> } | { project: IFunc2<TKey, Array<T | TElement>, TOutput> } | IEqualityCompareObject<TKey>,
    outputFunction?: IFunc2<TKey, Array<T | TElement>, TOutput> | { project: IFunc2<TKey, Array<T | TElement>, TOutput> } | IEqualityCompareObject<TKey>,
    comparer?: IEqualityComparer<TKey>
): Enumerable<IGrouping<TKey, T | TElement> | TOutput> {

    if (!groupFunction) {
        throw new Error("Required argument is null");
    }

    let elementor: IFunc1<T, TElement> | undefined;
    if (elementFunction && typeof elementFunction === "function") {
        elementor = elementFunction;
    } else if (elementFunction && "element" in elementFunction) {
        elementor = elementFunction.element;
    }

    let projector: IFunc2<TKey, Array<T | TElement>, TOutput> | undefined;
    if (outputFunction && typeof outputFunction === "function") {
        projector = outputFunction;
    } else if (elementFunction && "project" in elementFunction) {
        projector = elementFunction.project;
    } else if (outputFunction && "project" in outputFunction) {
        projector = outputFunction.project;
    }

    let equalizer: IEqualityCompareFunction<TKey> | undefined;
    if (comparer && typeof comparer === "function") {
        equalizer = extractEqualityComparer(comparer);
    } else if (elementFunction && "equals" in elementFunction) {
        equalizer = elementFunction.equals;
    } else if (outputFunction && "equals" in outputFunction) {
        equalizer = outputFunction.equals;
    } else if (comparer && "equals" in comparer) {
        equalizer = comparer.equals;
    }

    return this._extend(function* _groupBy(data: IterableIterator<T>): IterableIterator<IGrouping<TKey, T | TElement> | TOutput> {
        // Even though this is returning as if it's deferred execution, it's not really deferred. It has to process the full list
        // to know what times each individual key appears.

        const cache: Map<TKey, Grouping<T, TKey, TElement>> = new Map();
        for (const row of data) {
            const extractedKey = groupFunction(row);
            let match: Grouping<T, TKey, TElement> | undefined;
            if (equalizer) {
                for (const innerItem of cache.keys()) {
                    if (equalizer(innerItem, extractedKey)) {
                        match = cache.get(innerItem);
                        break;
                    }
                }
            } else {
                match = cache.get(extractedKey);
            }

            if (match) {
                match.add(row);
            } else {
                cache.set(extractedKey, new Grouping(extractedKey, row, elementor));
            }
        }

        for (const row of cache.entries()) {
            if (projector) {
                yield projector(row[0], row[1].values);
            } else if (elementor) {
                yield row[1] as IGrouping<TKey, TElement>;
            } else {
                yield row[1] as IGrouping<TKey, T>;
            }
        }
    });
}
