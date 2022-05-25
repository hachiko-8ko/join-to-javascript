import { Enumerable } from '../Enumerable/Enumerable';

/**
 * empty_q_: Returns an empty IEnumerable<T> that has the specified type argument.
 * Note that types are typescript-only fictitious entities that aren't emitted.
 */
export function empty<T>(this: Enumerable<T>): Array<T> {
    return [] as T[];
}
