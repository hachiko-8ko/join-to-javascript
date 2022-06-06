import { Enumerable } from '../Enumerable/Enumerable';
import { IFunc1, IPredicate2 } from '../Types/DelegateInterfaces';
import { Lookup } from '../Types/Lookup';

/**
 * toArray_q_: Returns a javascript array containing the sequence values.
 * Aliased to toList_q_ as well.
 */
export function toArray<T>(this: Enumerable<T>): T[] {
    return [...this];
}

/**
 * toHashSet_q_: Returns a Set from an enumerable.
 * The C# ability to send a non-default equality comparer is not included because javascript sets do not allow custom equality.
 */
export function toHashSet<T>(this: Enumerable<T>): Set<T> {
    const result = new Set<T>();
    for (const item of this) {
        result.add(item);
    }
    return result;
}

/**
 * toDictionary_q_: Returns a javascript object with string keys and values, based on a keySelector function and an optional element
 * selector function.
 *
 * The C# ability to send a non-default equality comparer is not included because javascript objects do not allow custom equality.
 */
export function toDictionary<T, TElement>(this: Enumerable<T>, keySelector: IFunc1<T, string>, elementSelector?: IFunc1<T, TElement>): Record<string, TElement> {
    if (!keySelector) {
        throw new Error("Required argument is null");
    }

    // In C#, toDictionary() can produce dictionaries with no-string keys.
    // This is illegal in javascript, so toDictionary() has to be limited.
    const result: Record<string, TElement> = {};
    for (const item of this) {
        const key = keySelector(item);
        if (key in result) {
            throw new Error("Sequence contains duplicate keys");
        }
        if (elementSelector) {
            result[key] = elementSelector(item);
        } else {
            // TElement = T but typescript doesn't know that because weak overloads
            result[key] = item as any as TElement;
        }
    }
    return result;
}

/**
 * toMap_q_: Returns a javascript Map with specified keys and values, based on a keySelector function and an optional element
 * selector function.
 *
 * Note that in general, objects don't make good Map keys.
 *
 * The C# ability to send a non-default equality comparer is not included because javascript maps do not allow custom equality.
 */
export function toMap<T, TKey, TElement>(this: Enumerable<T>, keySelector: IFunc1<T, TKey>, elementSelector?: IFunc1<T, TElement>): Map<TKey, TElement> {
    if (!keySelector) {
        throw new Error("Required argument is null");
    }

    // In C#, toDictionary() can produce dictionaries with non-string keys.
    // This is illegal in javascript, so toDictionary() has to be limited.
    // ToMap() method covers the gap.
    const result = new Map<TKey, TElement>();
    for (const item of this) {
        const key = keySelector(item);
        if (result.has(key)) {
            throw new Error("Sequence contains duplicate keys");
        }
        if (elementSelector) {
            result.set(key, elementSelector(item));
        } else {
            // TElement = T but typescript doesn't know that because weak overloads
            result.set(key, item as any as TElement);
        }
    }
    return result;
}

/**
 * toLookup_q_: Returns a Lookup (custom class) Map with specified keys and values, based on a keySelector function and an optional element
 * selector function. A Lookup is like a Map except it allows multiple values to be set for a given key.
 * 
 * The C# ability to send a non-default equality comparer is not included because javascript maps do not allow custom equality. Behind the 
 * scenes, this is till using a map.
 * 
 * Note that in general, objects don't make good Map keys.
 */
export function toLookup<T, TKey, TElement>(this: Enumerable<T>, keySelector: IFunc1<T, TKey>, elementSelector?: IFunc1<T, TElement>): Lookup<TKey, TElement> {
    if (!keySelector) {
        throw new Error("Required argument is null");
    }

    const result = new Lookup<TKey, TElement>();
    for (const item of this) {
        const key = keySelector(item);
        if (elementSelector) {
            result.set(key, elementSelector(item));
        } else {
            // TElement = T but typescript doesn't know that because weak overloads
            result.set(key, item as any as TElement);
        }
    }
    return result;
}
