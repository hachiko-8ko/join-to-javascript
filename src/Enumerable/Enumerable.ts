import { IComparer } from './../Types/IComparer';
import { makeGenerator } from '../Generators/MakeGenerator';
import { aggregate } from '../Queryable/Aggregate';
import { all } from '../Queryable/All';
import { any_q_ } from '../Queryable/Any';
import { append } from '../Queryable/Append';
import { average } from '../Queryable/Average';
import { chunk } from '../Queryable/Chunk';
import { concat } from '../Queryable/Concat';
import { contains } from '../Queryable/Contains';
import { count } from '../Queryable/Count';
import { crossJoin } from '../Queryable/CrossJoin';
import { defaultIfEmpty } from '../Queryable/DefaultIfEmpty';
import { distinct } from '../Queryable/Distinct';
import { distinctBy } from '../Queryable/DistinctBy';
import { elementAt } from '../Queryable/ElementAt';
import { elementAtOrDefault } from '../Queryable/ElementAtOrDefault';
import { empty } from '../Queryable/Empty';
import { except } from '../Queryable/Except';
import { exceptBy } from '../Queryable/ExceptBy';
import { first } from '../Queryable/First';
import { firstOrDefault } from '../Queryable/FirstOrDefault';
import { forEach } from '../Queryable/ForEach';
import { fullJoin } from '../Queryable/FullJoin';
import { groupBy } from '../Queryable/GroupBy';
import { groupJoin } from '../Queryable/GroupJoin';
import { innerJoin } from '../Queryable/InnerJoin';
import { intersect } from '../Queryable/Intersect';
import { intersectBy } from '../Queryable/IntersectBy';
import { join } from '../Queryable/Join';
import { last } from '../Queryable/Last';
import { lastOrDefault } from '../Queryable/LastOrDefault';
import { leftJoin } from '../Queryable/LeftJoin';
import { longCount } from '../Queryable/LongCount';
import { max } from '../Queryable/Max';
import { maxBy } from '../Queryable/MaxBy';
import { maxOrDefault } from '../Queryable/MaxOrDefault';
import { min } from '../Queryable/Min';
import { minBy } from '../Queryable/MinBy';
import { minOrDefault } from '../Queryable/MinOrDefault';
import { ofType } from '../Queryable/OfType';
import { orderBy } from '../Queryable/OrderBy';
import { outerJoin } from '../Queryable/OuterJoin';
import { prepend } from '../Queryable/Prepend';
import { replicate } from '../Queryable/Replicate';
import { reverse } from '../Queryable/Reverse';
import { rightJoin } from '../Queryable/RightJoin';
import { select } from '../Queryable/Select';
import { selectMany } from '../Queryable/SelectMany';
import { sequenceEqual } from '../Queryable/SequenceEqual';
import { single } from '../Queryable/Single';
import { singleOrDefault } from '../Queryable/SingleOrDefault';
import { skip } from '../Queryable/Skip';
import { skipLast } from '../Queryable/SkipLast';
import { skipWhile } from '../Queryable/SkipWhile';
import { step } from '../Queryable/Step';
import { sum } from '../Queryable/Sum';
import { take } from '../Queryable/Take';
import { takeLast } from '../Queryable/TakeLast';
import { takeWhile } from '../Queryable/TakeWhile';
import { toArray, toDictionary, toHashSet, toLookup, toMap } from '../Queryable/ToConversions';
import { union } from '../Queryable/Union';
import { unionBy } from '../Queryable/UnionBy';
import { where } from '../Queryable/Where';
import { zip } from '../Queryable/Zip';
import { IFunc1, IFunc2 } from '../Types/DelegateInterfaces';
import { IQueryable } from './IQueryable';
import { IOrderedEnumerable } from './OrderedEnumerable';

/**
 * Generators are already deferred, but to keep the code somewhat clean, I chose to encapsulate all the modifications in a single
 * class. This gives me a little bit more control. For example, Enumerable is deferred and repeatable (with a memory cost) while
 * function* is deferred and can only be viewed once.
 */

// Here are some hacks. If Enumerable contains a method that creates OrderedEnumerable, the class cannot be created. The class
// can't reference its own derived class. So the 2 ordering methods need to be added using prototype modification later.
// This interface merging (export an interface and class with the same name) tricks TypeScript into thinking those
// methods have been implemented.

// tslint:disable-next-line:interface-name
export interface Enumerable<T> {
    orderBy_q_<TKey>(orderBy?: IFunc1<T, TKey>, comparer?: IComparer<TKey>): IOrderedEnumerable<T>;
    orderByDescending_q_<TKey>(orderBy?: IFunc1<T, TKey>, comparer?: IComparer<TKey>): IOrderedEnumerable<T>;
}

export class Enumerable<T> implements IterableIterator<T>, IQueryable<T>  {
    static range_q_(start: number, len: number): Enumerable<number> {
        if (len < 0) {
            throw new Error("Argument out of range.");
        }
        // It's a pain to remember the function*{}() syntax here.
        return new Enumerable<number>(function* _range(): IterableIterator<number> {
            let i = start;
            const maxval = start + len;
            while (i < maxval) {
                yield i;
                i++;
            }
        }());
    }

    static repeat_q_<TElement>(element: TElement, len: number): Enumerable<TElement> {
        if (len < 0) {
            throw new Error("Argument out of range.");
        }
        // It's a pain to remember the function*{}() syntax here.
        return new Enumerable<TElement>(function* _repeat(): IterableIterator<TElement> {
            let i = 0;
            while (i < len) {
                yield element;
                i++;
            }
        }());
    }

    // This is hacky but lets me split this GIANT class up into a few dozen files.
    aggregate_q_ = aggregate;
    all_q_ = all;
    any_q_ = any_q_;
    append_q_ = append;
    average_q_ = average;
    // There's no way to do (Number)foo in JavaScript, and casting in TypeScript isn't emitted.
    // So the cast is being aliased to select so you can do foo.cast(num => Number(num))
    cast_q_ = select;
    chunk_q_ = chunk;
    concat_q_ = concat;
    contains_q_ = contains;
    count_q_ = count;
    crossJoin_q_ = crossJoin;
    defaultIfEmpty_q_ = defaultIfEmpty;
    distinct_q_ = distinct;
    distinctBy_q_ = distinctBy;
    elementAt_q_ = elementAt;
    elementAtOrDefault_q_ = elementAtOrDefault;
    empty_q_ = empty;
    except_q_ = except;
    exceptBy_q_ = exceptBy;
    first_q_ = first;
    firstOrDefault_q_ = firstOrDefault;
    forEach_q_ = forEach;
    fullJoin_q_ = fullJoin;
    groupBy_q_ = groupBy;
    groupJoin_q_ = groupJoin;
    innerJoin_q_ = innerJoin;
    intersect_q_ = intersect;
    intersectBy_q_ = intersectBy;
    join_q_ = join;
    last_q_ = last;
    lastOrDefault_q_ = lastOrDefault;
    leftJoin_q_ = leftJoin;
    longCount_q_ = longCount;
    max_q_ = max;
    maxBy_q_ = maxBy;
    maxOrDefault_q_ = maxOrDefault;
    min_q_ = min;
    minBy_q_ = minBy;
    minOrDefault_q_ = minOrDefault;
    ofType_q_ = ofType;
    outerJoin_q_ = outerJoin;
    prepend_q_ = prepend;
    replicate_q_ = replicate;
    reverse_q_ = reverse;
    rightJoin_q_ = rightJoin;
    select_q_ = select;
    selectMany_q_ = selectMany;
    sequenceEqual_q_ = sequenceEqual;
    single_q_ = single;
    singleOrDefault_q_ = singleOrDefault;
    skip_q_ = skip;
    skipLast_q_ = skipLast;
    skipWhile_q_ = skipWhile;
    step_q_ = step;
    sum_q_ = sum;
    take_q_ = take;
    takeLast_q_ = takeLast;
    takeWhile_q_ = takeWhile;
    toArray_q_ = toArray;
    toDictionary_q_ = toDictionary;
    toHashSet_q_ = toHashSet;
    toList_q_ = toArray;
    toLookup_q_ = toLookup;
    toMap_q_ = toMap;
    union_q_ = union;
    unionBy_q_ = unionBy;
    where_q_ = where;
    zip_q_ = zip;

    private _source: IterableIterator<T>;
    private _cache: T[] = [];
    private _isClosed = false;

    protected get _data(): Iterable<T> {
        // There's not a lot of call for selecting from an enumerable more than once, but someone might
        // want to do it. In C# the only real time this happens is when you use the debugger, but it does happen.

        // But when data has been fetched from the generator, it becomes closed, and every generator in its
        // source is also closed. This is built in to JS and not something we can change.
        // But we can cache the data when we fetch it and return the cache if closed.
        if (this._isClosed) {
            return this._cache;
        }
        return this._source;
    }

    constructor(data: any) {
        // Normally, we'd go ahead and say the data should be an array, nothing but.
        // But let's be flexible and allow anything. If it's not iterable, then it'll become a one-item iterator.
        this._source = this._ensureBackup(makeGenerator(data));
    }

    *[Symbol.iterator](): IterableIterator<T> {
        for (const item of this._data) {
            yield item;
        }
    }

    return?(value?: any): IteratorResult<T> {
        // For some reason, TypeScript does not like this. It thinks [Symbol.iterator]() might be undefined,
        // even when it is clearly defined a few lines up.
        const internalIterator = this[Symbol.iterator]() as any;
        return internalIterator.return(value);
    }
    throw?(e?: any): IteratorResult<T> {
        // For some reason, Typescript does not like this. It thinks [Symbol.iterator]() might be undefined,
        // even when it is clearly defined a few lines up.
        const internalIterator = this[Symbol.iterator]() as any;
        return internalIterator.throw(e);
    }

    next(): IteratorResult<T> {
        // But it's ok with the exact same code here. Go figure.
        const internalIterator = this[Symbol.iterator]();
        return internalIterator.next();
    }

    toJSON(): any {
        // Writing an Enumerable to JSON exhausts the enumerator.
        return [...this];
    }

    tryGetNonEnumeratedCount_q_(obj: { value?: number }): boolean {
        if (this._isClosed) {
            // We don't have out vars in JS so we have to use an object reference.
            if (obj) {
                obj.value = this._cache.length;
            }
            return true;
        }
        // If not closed, this is a generator, and we can't count it without enumerating it.
        return false;
    }

    // This helper allows methods declared in other files to use generator functions without referencing this._data (requiring it
    // to be public) or using the (function*() {})(data) syntax, which is ugly.
    _extend<TResult = T>(func: (data: IterableIterator<T>) => IterableIterator<TResult>): Enumerable<TResult> {
        return new Enumerable<TResult>(func(this));
    }

    private *_ensureBackup(data: IterableIterator<T>): IterableIterator<T> {
        for (const item of data) {
            this._cache.push(item);
            yield item;
        }
        this._isClosed = true;
    }
}
