import { Enumerable } from './Enumerable/Enumerable';
import { IQueryable } from './Enumerable/IQueryable';
import { extend } from './Extend';
import { aggregate } from './Queryable/Aggregate';
import { all } from './Queryable/All';
import { any_q_ } from './Queryable/Any';
import { append } from './Queryable/Append';
import { average } from './Queryable/Average';
import { chunk } from './Queryable/Chunk';
import { concat } from './Queryable/Concat';
import { contains } from './Queryable/Contains';
import { count } from './Queryable/Count';
import { crossJoin } from './Queryable/CrossJoin';
import { defaultIfEmpty } from './Queryable/DefaultIfEmpty';
import { distinct } from './Queryable/Distinct';
import { distinctBy } from './Queryable/DistinctBy';
import { elementAt } from './Queryable/ElementAt';
import { elementAtOrDefault } from './Queryable/ElementAtOrDefault';
import { empty } from './Queryable/Empty';
import { except } from './Queryable/Except';
import { exceptBy } from './Queryable/ExceptBy';
import { first } from './Queryable/First';
import { firstOrDefault } from './Queryable/FirstOrDefault';
import { forEach } from './Queryable/ForEach';
import { groupBy } from './Queryable/GroupBy';
import { groupJoin } from './Queryable/GroupJoin';
import { innerJoin } from './Queryable/InnerJoin';
import { intersect } from './Queryable/Intersect';
import { intersectBy } from './Queryable/IntersectBy';
import { join } from './Queryable/Join';
import { last } from './Queryable/Last';
import { lastOrDefault } from './Queryable/LastOrDefault';
import { longCount } from './Queryable/LongCount';
import { max } from './Queryable/Max';
import { maxBy } from './Queryable/MaxBy';
import { min } from './Queryable/Min';
import { minBy } from './Queryable/MinBy';
import { ofType } from './Queryable/OfType';
import { orderBy, orderByDescending } from './Queryable/OrderBy';
import { outerJoin } from './Queryable/OuterJoin';
import { prepend } from './Queryable/Prepend';
import { replicate } from './Queryable/Replicate';
import { reverse } from './Queryable/Reverse';
import { select } from './Queryable/Select';
import { selectMany } from './Queryable/SelectMany';
import { sequenceEqual } from './Queryable/SequenceEqual';
import { single } from './Queryable/Single';
import { singleOrDefault } from './Queryable/SingleOrDefault';
import { skip } from './Queryable/Skip';
import { skipLast } from './Queryable/SkipLast';
import { skipWhile } from './Queryable/SkipWhile';
import { sum } from './Queryable/Sum';
import { take } from './Queryable/Take';
import { takeLast } from './Queryable/TakeLast';
import { takeWhile } from './Queryable/TakeWhile';
import { toArray, toDictionary, toHashSet, toLookup, toMap } from './Queryable/ToConversions';
import { union } from './Queryable/Union';
import { unionBy } from './Queryable/UnionBy';
import { where } from './Queryable/Where';
import { zip } from './Queryable/Zip';
import { maxOrDefault } from './Queryable/MaxOrDefault';
import { minOrDefault } from './Queryable/MinOrDefault';
import { rightJoin } from './Queryable/RightJoin';
import { fullJoin } from './Queryable/FullJoin';

// tslint:disable:interface-name
// tslint:disable:member-ordering

declare global {
    interface Array<T> extends IQueryable<T> { }
    interface Set<T> extends IQueryable<T> { }

    interface Array<T> {
        asQueryable(): Enumerable<T>;
    }
    interface Iterable<T> {
        asQueryable(): Enumerable<T>;
    }
    interface ArrayLike<T> {
        asQueryable(): Enumerable<T>;
    }
    interface Object {
        asQueryable<T>(): Enumerable<T>;
    }
    interface String {
        asQueryable(): Enumerable<string>;
    }
    interface Number {
        asQueryable(): Enumerable<number>;
    }
    interface Boolean {
        asQueryable(): Enumerable<boolean>;
    }
}

Array.prototype.tryGetNonEnumeratedCount_q_ = function _tryGetNonEnumeratedCount_q_(obj?: { value?: number }): boolean {
    // there are no out variables in JS, so we have to put it in an object reference.
    if (obj) {
        obj.value = this.length;
    }
    return true;
};
Set.prototype.tryGetNonEnumeratedCount_q_ = function _tryGetNonEnumeratedCount_q_(obj?: { value?: number }): boolean {
    // there are no out variables in JS, so we have to put it in an object reference.
    if (obj) {
        obj.value = this.size;
    }
    return true;
};

Object.prototype.asQueryable = function <T>(this: T): Enumerable<T> {
    // If the object is iterable, this will be an ordinary generator. If it is not,
    // this will be an iterable with a single item. This makes it so I don't have to
    // guess what prototypes need to be modified.
    return new Enumerable<T>(this);
};
String.prototype.asQueryable = function (this: string): Enumerable<string> {
    // Strings are iterable, but I didn't want to add all the enumerable methods to them.
    return new Enumerable<string>(this);
};
Number.prototype.asQueryable = function (this: number): Enumerable<number> {
    // (4).asQueryable() is treated like range()
    return Enumerable.range_q_(0, this);
};
Boolean.prototype.asQueryable = function (this: boolean): Enumerable<boolean> {
    if (this) {
        // true.asQueryable() is pretty useless: [false, true] ascending. Might be useful.
        return new Enumerable<boolean>([false, true]);
    } else {
        // false.asQueryable() is also pretty useless: [true, false] descending. Might be useful.
        return new Enumerable<boolean>([true, false]);
    }
};

// Add stub functions onto Array.prototype and Set.prototype to make the object into an Enumerable
// and then call the Enumerable method
extend("aggregate_q_", aggregate);
extend("all_q_", all);
extend("any_q_", any_q_);
extend("append_q_", append);
extend("average_q_", average);
extend("cast_q_", select);
extend("chunk_q_", chunk);
extend("concat_q_", concat);
extend("contains_q_", contains);
extend("count_q_", count);
extend("crossJoin_q_", crossJoin);
extend("defaultIfEmpty_q_", defaultIfEmpty);
extend("distinct_q_", distinct);
extend("distinctBy_q_", distinctBy);
extend("elementAt_q_", elementAt);
extend("elementAtOrDefault_q_", elementAtOrDefault);
extend("empty_q_", empty);
extend("except_q_", except);
extend("exceptBy_q_", exceptBy);
extend("first_q_", first);
extend("firstOrDefault_q_", firstOrDefault);
extend("forEach_q_", forEach);
extend("fullJoin_q_", fullJoin);
extend("groupBy_q_", groupBy);
extend("groupJoin_q_", groupJoin);
extend("innerJoin_q_", innerJoin);
extend("intersect_q_", intersect);
extend("intersectBy_q_", intersectBy);
extend("join_q_", join);
extend("last_q_", last);
extend("lastOrDefault_q_", lastOrDefault);
extend("leftJoin_q_", lastOrDefault);
extend("longCount_q_", longCount);
extend("max_q_", max);
extend("maxBy_q_", maxBy);
extend("maxOrDefault_q_", maxOrDefault);
extend("min_q_", min);
extend("minBy_q_", minBy);
extend("minOrDefault_q_", minOrDefault);
extend("ofType_q_", ofType);
extend("orderBy_q_", orderBy);
extend("orderByDescending_q_", orderByDescending);
extend("outerJoin_q_", outerJoin);
extend("prepend_q_", prepend);
extend("replicate_q_", replicate);
extend("reverse_q_", reverse);
extend("rightJoin_q_", rightJoin);
extend("select_q_", select);
extend("selectMany_q_", selectMany);
extend("sequenceEqual_q_", sequenceEqual);
extend("single_q_", single);
extend("singleOrDefault_q_", singleOrDefault);
extend("skip_q_", skip);
extend("skipLast_q_", skipLast);
extend("skipWhile_q_", skipWhile);
extend("sum_q_", sum);
extend("take_q_", take);
extend("takeLast_q_", takeLast);
extend("takeWhile_q_", takeWhile);
extend("toArray_q_", toArray);
extend("toDictionary_q_", toDictionary);
extend("toList_q_", toArray);
extend("toLookup_q_", toLookup);
extend("toHashSet_q_", toHashSet);
extend("toMap_q_", toMap);
extend("union_q_", union);
extend("unionBy_q_", unionBy);
extend("where_q_", where);
extend("zip_q_", zip);

// As a workaround for orderby (javascript can't create a class that references a descendant class),
// add these to the Enumerable class in a way that doesn't explode
Enumerable.prototype.orderBy_q_ = orderBy;
Enumerable.prototype.orderByDescending_q_ = orderByDescending;
