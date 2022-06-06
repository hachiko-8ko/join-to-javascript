import { IEqualityComparer, IEqualityCompareObject } from './../Types/IEqualityComparer';
import { IFunc1, IFunc2, IPredicate1, IPredicate2 } from '../Types/DelegateInterfaces';
import { IGrouping } from '../Types/Grouping';
import { Lookup } from '../Types/Lookup';
import { Nullable } from '../Types/NoneType';
import { IComparer, ICompareObject } from './../Types/IComparer';
import { Enumerable } from './Enumerable';
import { IOrderedEnumerable } from './OrderedEnumerable';

// I don't have a version of typescript that'll let me use BigInt so LongCount takes some hacking.
// tslint:disable-next-line:interface-name
declare interface BigInt { }

/**
 * All query functionality is found on the IQueryable interface, which is implemented by generators (which don't have a proper type in TS).
 *
 * @export
 * @interface IQueryable
 * @template T
 */
export interface IQueryable<T> {
    aggregate_q_(accumulatorFunction: IFunc2<T, T, T>): T;
    aggregate_q_<TAccumulated>(initial: TAccumulated, accumulatorFunction: IFunc2<TAccumulated, T, TAccumulated>): TAccumulated;
    aggregate_q_<TAccumulated, TResult>(initial: TAccumulated, accumulatorFunction: IFunc2<TAccumulated, T, TAccumulated>, selectFunction: IFunc1<TAccumulated, TResult>): TAccumulated;
    all_q_(filterFunction: IPredicate1<T>): boolean;
    all_q_(filterFunction: IPredicate2<T, number>): boolean;
    any_q_(filterFunction?: IPredicate1<T>): boolean;
    append_q_(item: T): Enumerable<T>;
    average_q_(transformFunction?: IFunc1<T, number>): number;
    cast_q_<R>(selectFunction: IFunc1<T, R>): Enumerable<R>;
    chunk_q_(size: number): Enumerable<Array<T>>;
    concat_q_(second: Iterable<T>): Enumerable<T>;
    contains_q_(value: T, comparer?: IEqualityComparer<T>): boolean;
    count_q_(filterFunction?: IPredicate1<T>): number;
    defaultIfEmpty_q_(): Enumerable<T | undefined>;
    defaultIfEmpty_q_(defaultValue: T): Enumerable<T>;
    distinct_q_(comparer?: IEqualityComparer<T>): Enumerable<T>;
    distinctBy_q_<TKey>(keySelector: IFunc1<T, TKey>, comparer?: IEqualityComparer<TKey>): Enumerable<T>;
    elementAt_q_(index: number): T;
    elementAtOrDefault_q_(index: number): T | undefined;
    elementAtOrDefault_q_(index: number, defaultValue: T): T;
    empty_q_(): T[];
    except_q_(second: Iterable<T>, comparer?: IEqualityComparer<T>): Enumerable<T>;
    exceptBy_q_<TKey>(second: Iterable<T>, keySelector: IFunc1<T, TKey>, comparer?: IEqualityComparer<TKey>): Enumerable<T>;
    first_q_(filterFunction?: IPredicate1<T>): T;
    firstOrDefault_q_(filterFunction?: IPredicate1<T>): T | undefined;
    firstOrDefault_q_(filterFunction: IPredicate1<T>, defaultValue: T): T;
    // This acts as firstOrDefault() || defaultValue. See comments in FirstOrDefault.ts.
    firstOrDefault_q_({ defaultValue }: { defaultValue: T }): T;
    // Here's a massive blob of overloads. Most of them are redundant.
    groupBy_q_<TKey, TElement, TOutput>(keySelector: IFunc1<T, TKey>): Enumerable<IGrouping<TKey, T>>;
    groupBy_q_<TKey, TElement, TOutput>(keySelector: IFunc1<T, TKey>, elementFunction?: IFunc1<T, TElement>): Enumerable<IGrouping<TKey, TElement>>;
    groupBy_q_<TKey, TElement, TOutput>(keySelector: IFunc1<T, TKey>, elementFunction: IFunc1<T, TElement>, outputFunction: IFunc2<TKey, TElement[], TOutput>, comparer?: IEqualityComparer<TKey>): Enumerable<TOutput>;
    groupBy_q_<TKey, TElement, TOutput>(keySelector: IFunc1<T, TKey>,
        comparer: IEqualityCompareObject<TKey>): Enumerable<IGrouping<TKey, T>>;
    groupBy_q_<TKey, TElement, TOutput>(keySelector: IFunc1<T, TKey>,
        outputExtractor: { project: IFunc2<TKey, T[], TOutput> },
        comparer?: IEqualityCompareObject<TKey>): Enumerable<TOutput>;
    groupBy_q_<TKey, TElement, TOutput>(keySelector: IFunc1<T, TKey>,
        elementExtractor: { element: IFunc1<T, TElement> },
        comparer?: IEqualityCompareObject<TKey>): Enumerable<IGrouping<TKey, TElement>>;
    groupBy_q_<TKey, TElement, TOutput>(keySelector: IFunc1<T, TKey>,
        elementExtractor: { element: IFunc1<T, TElement> },
        outputExtractor: { project: IFunc2<TKey, TElement[], TOutput> },
        comparer?: IEqualityCompareObject<TKey>): Enumerable<TOutput>;
    groupJoin_q_<TKey, TSecond, TResult>(second: Iterable<TSecond>, firstKeySelector: IFunc1<T, TKey>, secondKeySelector: IFunc1<TSecond, TKey>, outputFunction: IFunc2<T, TSecond[], TResult>, comparer?: IEqualityComparer<TKey>): Enumerable<TResult>;
    intersect_q_(second: Iterable<T>, comparer?: IEqualityComparer<T>): Enumerable<T>;
    intersectBy_q_<TKey>(second: Iterable<T>, keySelector: IFunc1<T, TKey>, comparer?: IEqualityComparer<TKey>): Enumerable<T>;
    join_q_<TKey, TSecond>(second: Iterable<TSecond>, firstKeySelector: IFunc1<T, TKey>, secondKeySelector: IFunc1<TSecond, TKey>, comparer?: IEqualityCompareObject<TKey>): Enumerable<[T, TSecond]>;
    join_q_<TKey, TSecond, TResult = ([T, TSecond])>(second: Iterable<TSecond>, firstKeySelector: IFunc1<T, TKey>, secondKeySelector: IFunc1<TSecond, TKey>, outputFunction?: IFunc2<T, TSecond, TResult>, comparer?: IEqualityComparer<TKey>): Enumerable<TResult>;
    last_q_(filterFunction?: IPredicate1<T>): T;
    lastOrDefault_q_(filterFunction?: IPredicate1<T>): T | undefined;
    lastOrDefault_q_(filterFunction: IPredicate1<T>, defaultValue: T): T;
    lastOrDefault_q_({ defaultValue }: { defaultValue: T }): T;
    // This will fail if run on a browser that doesn't support ECMASCript 2020
    longCount_q_(filterFunction?: IPredicate1<T>): BigInt;
    max_q_(): T;
    max_q_<TResult>(transform: IFunc1<T, TResult>, comparer?: IComparer<TResult>): TResult;
    max_q_(comparer: ICompareObject<T>): T;
    maxBy_q_<TKey>(keySelector: IFunc1<T, TKey>, comparer?: IComparer<TKey>): T;
    maxOrDefault_q_(): T | undefined;
    maxOrDefault_q_({ defaultValue }: { defaultValue: T }): T | undefined;
    maxOrDefault_q_(comparer: ICompareObject<T>): T | undefined;
    maxOrDefault_q_(comparer: ICompareObject<T>, { defaultValue }: { defaultValue: T }): T | undefined;
    maxOrDefault_q_<TResult>(transform: IFunc1<T, TResult>, comparer?: IComparer<TResult> | { defaultValue: T }, defaultValue?: T): TResult | undefined;
    min_q_(): T;
    min_q_<TResult>(transform: IFunc1<T, TResult>, comparer?: IComparer<TResult>): TResult;
    min_q_(compare: ICompareObject<T>): T;
    minOrDefault_q_(): T | undefined;
    minOrDefault_q_({ defaultValue }: { defaultValue: T }): T | undefined;
    minOrDefault_q_(comparer: ICompareObject<T>): T | undefined;
    minOrDefault_q_(comparer: ICompareObject<T>, { defaultValue }: { defaultValue: T }): T | undefined;
    minOrDefault_q_<TResult>(transform: IFunc1<T, TResult>, comparer?: IComparer<TResult> | { defaultValue: T }, defaultValue?: T): TResult | undefined;
    minBy_q_<TKey>(keySelector: IFunc1<T, TKey>, comparer?: IComparer<TKey>): T;
    // Really instead of object that should be "class" or "type" but TypeScript doesnt allow it
    ofType_q_<R>(type: string | any): Enumerable<R>;
    orderBy_q_<TKey>(orderByFunction?: IFunc1<T, TKey>, comparer?: IComparer<TKey>): IOrderedEnumerable<T>;
    orderByDescending_q_<TKey>(orderByFunction?: IFunc1<T, TKey>, comparer?: IComparer<TKey>): IOrderedEnumerable<T>;
    // IOrderedEnumerable has these methods you need to know about:
    // thenBy_q_<TKey>(orderBy?: IFunc1<T, TKey>, comparer?: IFunc2<TKey, TKey, 1 | 0 | -1>): IOrderedEnumerable<T>;
    // thenByDescending_q_<TKey>(orderBy?: IFunc1<T, TKey>, comparer?: IFunc2<TKey, TKey, 1 | 0 | -1>): IOrderedEnumerable<T>;
    prepend_q_(item: T): Enumerable<T>;
    reverse_q_(): Enumerable<T>;
    // TypeScript doesn't allow these overloads to be right.
    select_q_<R>(selectFunction: IFunc1<T, R>): Enumerable<R>;
    select_q_<R>(selectFunction: IFunc2<T, number, R>): Enumerable<R>;
    selectMany_q_<R>(subSelectFunction: IFunc1<T, Iterable<R>>): Enumerable<R>;
    selectMany_q_<R>(subSelectFunction: IFunc2<T, number, Iterable<R>>): Enumerable<R>;
    selectMany_q_<TElement, R = TElement>(subSelectFunction: IFunc1<T, Iterable<TElement>>,
        outputFunction?: IFunc2<T, TElement, R>): Enumerable<R>;
    selectMany_q_<TElement, R = TElement>(subSelectFunction: IFunc2<T, number, Iterable<TElement>>,
        outputFunction?: IFunc2<T, TElement, R>): Enumerable<R>;
    sequenceEqual_q_(second: Iterable<T>, comparer?: IEqualityComparer<T>): boolean;
    single_q_(matchFunction?: IPredicate1<T>): T;
    singleOrDefault_q_(matchFunction?: IPredicate1<T>): T | undefined;
    singleOrDefault_q_(matchFunction: IPredicate1<T>, defaultValue: T): T;
    singleOrDefault_q_({ defaultValue }: { defaultValue: T }): T;
    skip_q_(count: number): Enumerable<T>;
    skipLast_q_(count: number): Enumerable<T>;
    skipWhile_q_(filterFunction: IPredicate1<T>): Enumerable<T>;
    skipWhile_q_(filterFunction: IPredicate2<T, number>): Enumerable<T>;
    step_q_(stepCount: number): Enumerable<T>;
    sum_q_(selectFunction?: IFunc1<T, number>): number;
    take_q_(count: number, skip?: number): Enumerable<T>;
    takeLast_q_(count: number): Enumerable<T>;
    takeWhile_q_(filterFunction: IPredicate1<T>): Enumerable<T>;
    takeWhile_q_(filterFunction: IPredicate2<T, number>): Enumerable<T>;
    toArray_q_(): Array<T>;
    toDictionary_q_<TElement>(keySelector: IFunc1<T, string>, elementSelector?: IFunc1<T, TElement>): Record<string, TElement>;
    toHashSet_q_(): Set<T>;
    toList_q_(): Array<T>;
    toLookup_q_<TKey, TElement>(keySelector: IFunc1<T, TKey>, elementSelector?: IFunc1<T, TElement>): Lookup<TKey, TElement>;
    toMap_q_<TKey, TElement>(keySelector: IFunc1<T, TKey>, elementSelector?: IFunc1<T, TElement>): Map<TKey, TElement>;
    tryGetNonEnumeratedCount_q_({ value }: { value?: number }): boolean;
    union_q_(second: Iterable<T>, comparer?: IEqualityComparer<T>): Enumerable<T>;
    unionBy_q_<TKey>(second: Iterable<T>, keySelector: IFunc1<T, TKey>, comparer?: IEqualityComparer<TKey>): Enumerable<T>;
    where_q_(select: IPredicate1<T>): Enumerable<T>;
    where_q_(select: IPredicate2<T, number>): Enumerable<T>;
    // This overload will only be a 2-element tuple, but TypeScript won't let the output be limited
    zip_q_<TSecond, TThird>(second: Iterable<TSecond>): Enumerable<[T, TSecond] | [T, TSecond, TThird]>;
    // This overload will only be a 3-element tuple, but TypeScript won't let the output be limited
    zip_q_<TSecond, TThird>(second: Iterable<TSecond>, third: Iterable<TThird>): Enumerable<[T, TSecond] | [T, TSecond, TThird]>;
    // This overload will only be a 3-element tuple, but TypeScript won't let the output be limited
    zip_q_<TSecond, TResult>(second: Iterable<TSecond>, third: IFunc2<T, TSecond, TResult>): Enumerable<[T, TSecond] | [T, TSecond, TResult]>;

    /* Additional functions that I added myself, not part of LINQ */

    crossJoin_q_<TSecond, R>(second: Iterable<TSecond>): Enumerable<[T, TSecond]>;
    crossJoin_q_<TSecond, R>(second: Iterable<TSecond>, selectFunction: IFunc2<T, TSecond, R>): Enumerable<R>;
    forEach_q_(callbackfn: (value: T, index?: number) => void, thisArg?: any): void;
    fullJoin_q_<TSecond, R>(second: Iterable<TSecond>, on: IPredicate2<T, TSecond>): Enumerable<[Nullable<T>, Nullable<TSecond>]>;
    fullJoin_q_<TSecond, R>(second: Iterable<TSecond>, on: IPredicate2<T, TSecond>, selectFunction: IFunc2<Nullable<T>, Nullable<TSecond>, R>): Enumerable<R>;
    innerJoin_q_<TSecond, R>(second: Iterable<TSecond>, on: IPredicate2<T, TSecond>): Enumerable<[T, TSecond]>;
    innerJoin_q_<TSecond, R>(second: Iterable<TSecond>, on: IPredicate2<T, TSecond>, selectFunction: IFunc2<T, TSecond, R>): Enumerable<R>;
    leftJoin_q_<TSecond, R>(second: Iterable<TSecond>, on: IPredicate2<T, TSecond>): Enumerable<[T, Nullable<TSecond>]>;
    leftJoin_q_<TSecond, R>(second: Iterable<TSecond>, on: IPredicate2<T, TSecond>, selectFunction: IFunc2<T, Nullable<TSecond>, R>): Enumerable<R>;
    outerJoin_q_<TKey, TSecond>(second: Iterable<TSecond>, firstKeySelector: IFunc1<T, TKey>, secondKeySelector: IFunc1<TSecond, TKey>, comparer?: { equals: IPredicate2<TKey, TKey> }): Enumerable<[T, TSecond]>;
    outerJoin_q_<TKey, TSecond, TResult = ([T, TSecond])>(second: Iterable<TSecond>, firstKeySelector: IFunc1<T, TKey>, secondKeySelector: IFunc1<TSecond, TKey>, outputFunction?: IFunc2<T, TSecond | undefined, TResult>, comparer?: IEqualityComparer<TKey>): Enumerable<TResult>;
    replicate_q_(times: number): Enumerable<T>;
    rightJoin_q_<TSecond, R>(second: Iterable<TSecond>, on: IPredicate2<T, TSecond>): Enumerable<[Nullable<T>, TSecond]>;
    rightJoin_q_<TSecond, R>(second: Iterable<TSecond>, on: IPredicate2<T, TSecond>, selectFunction: IFunc2<Nullable<T>, TSecond, R>): Enumerable<R>;
}
