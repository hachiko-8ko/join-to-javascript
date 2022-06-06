(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MakeGenerator_1 = require("../Generators/MakeGenerator");
const Aggregate_1 = require("../Queryable/Aggregate");
const All_1 = require("../Queryable/All");
const Any_1 = require("../Queryable/Any");
const Append_1 = require("../Queryable/Append");
const Average_1 = require("../Queryable/Average");
const Chunk_1 = require("../Queryable/Chunk");
const Concat_1 = require("../Queryable/Concat");
const Contains_1 = require("../Queryable/Contains");
const Count_1 = require("../Queryable/Count");
const CrossJoin_1 = require("../Queryable/CrossJoin");
const DefaultIfEmpty_1 = require("../Queryable/DefaultIfEmpty");
const Distinct_1 = require("../Queryable/Distinct");
const DistinctBy_1 = require("../Queryable/DistinctBy");
const ElementAt_1 = require("../Queryable/ElementAt");
const ElementAtOrDefault_1 = require("../Queryable/ElementAtOrDefault");
const Empty_1 = require("../Queryable/Empty");
const Except_1 = require("../Queryable/Except");
const ExceptBy_1 = require("../Queryable/ExceptBy");
const First_1 = require("../Queryable/First");
const FirstOrDefault_1 = require("../Queryable/FirstOrDefault");
const ForEach_1 = require("../Queryable/ForEach");
const FullJoin_1 = require("../Queryable/FullJoin");
const GroupBy_1 = require("../Queryable/GroupBy");
const GroupJoin_1 = require("../Queryable/GroupJoin");
const InnerJoin_1 = require("../Queryable/InnerJoin");
const Intersect_1 = require("../Queryable/Intersect");
const IntersectBy_1 = require("../Queryable/IntersectBy");
const Join_1 = require("../Queryable/Join");
const Last_1 = require("../Queryable/Last");
const LastOrDefault_1 = require("../Queryable/LastOrDefault");
const LeftJoin_1 = require("../Queryable/LeftJoin");
const LongCount_1 = require("../Queryable/LongCount");
const Max_1 = require("../Queryable/Max");
const MaxBy_1 = require("../Queryable/MaxBy");
const MaxOrDefault_1 = require("../Queryable/MaxOrDefault");
const Min_1 = require("../Queryable/Min");
const MinBy_1 = require("../Queryable/MinBy");
const MinOrDefault_1 = require("../Queryable/MinOrDefault");
const OfType_1 = require("../Queryable/OfType");
const OuterJoin_1 = require("../Queryable/OuterJoin");
const Prepend_1 = require("../Queryable/Prepend");
const Replicate_1 = require("../Queryable/Replicate");
const Reverse_1 = require("../Queryable/Reverse");
const RightJoin_1 = require("../Queryable/RightJoin");
const Select_1 = require("../Queryable/Select");
const SelectMany_1 = require("../Queryable/SelectMany");
const SequenceEqual_1 = require("../Queryable/SequenceEqual");
const Single_1 = require("../Queryable/Single");
const SingleOrDefault_1 = require("../Queryable/SingleOrDefault");
const Skip_1 = require("../Queryable/Skip");
const SkipLast_1 = require("../Queryable/SkipLast");
const SkipWhile_1 = require("../Queryable/SkipWhile");
const Step_1 = require("../Queryable/Step");
const Sum_1 = require("../Queryable/Sum");
const Take_1 = require("../Queryable/Take");
const TakeLast_1 = require("../Queryable/TakeLast");
const TakeWhile_1 = require("../Queryable/TakeWhile");
const ToConversions_1 = require("../Queryable/ToConversions");
const Union_1 = require("../Queryable/Union");
const UnionBy_1 = require("../Queryable/UnionBy");
const Where_1 = require("../Queryable/Where");
const Zip_1 = require("../Queryable/Zip");
class Enumerable {
    constructor(data) {
        // This is hacky but lets me split this GIANT class up into a few dozen files.
        this.aggregate_q_ = Aggregate_1.aggregate;
        this.all_q_ = All_1.all;
        this.any_q_ = Any_1.any_q_;
        this.append_q_ = Append_1.append;
        this.average_q_ = Average_1.average;
        // There's no way to do (Number)foo in JavaScript, and casting in TypeScript isn't emitted.
        // So the cast is being aliased to select so you can do foo.cast(num => Number(num))
        this.cast_q_ = Select_1.select;
        this.chunk_q_ = Chunk_1.chunk;
        this.concat_q_ = Concat_1.concat;
        this.contains_q_ = Contains_1.contains;
        this.count_q_ = Count_1.count;
        this.crossJoin_q_ = CrossJoin_1.crossJoin;
        this.defaultIfEmpty_q_ = DefaultIfEmpty_1.defaultIfEmpty;
        this.distinct_q_ = Distinct_1.distinct;
        this.distinctBy_q_ = DistinctBy_1.distinctBy;
        this.elementAt_q_ = ElementAt_1.elementAt;
        this.elementAtOrDefault_q_ = ElementAtOrDefault_1.elementAtOrDefault;
        this.empty_q_ = Empty_1.empty;
        this.except_q_ = Except_1.except;
        this.exceptBy_q_ = ExceptBy_1.exceptBy;
        this.first_q_ = First_1.first;
        this.firstOrDefault_q_ = FirstOrDefault_1.firstOrDefault;
        this.forEach_q_ = ForEach_1.forEach;
        this.fullJoin_q_ = FullJoin_1.fullJoin;
        this.groupBy_q_ = GroupBy_1.groupBy;
        this.groupJoin_q_ = GroupJoin_1.groupJoin;
        this.innerJoin_q_ = InnerJoin_1.innerJoin;
        this.intersect_q_ = Intersect_1.intersect;
        this.intersectBy_q_ = IntersectBy_1.intersectBy;
        this.join_q_ = Join_1.join;
        this.last_q_ = Last_1.last;
        this.lastOrDefault_q_ = LastOrDefault_1.lastOrDefault;
        this.leftJoin_q_ = LeftJoin_1.leftJoin;
        this.longCount_q_ = LongCount_1.longCount;
        this.max_q_ = Max_1.max;
        this.maxBy_q_ = MaxBy_1.maxBy;
        this.maxOrDefault_q_ = MaxOrDefault_1.maxOrDefault;
        this.min_q_ = Min_1.min;
        this.minBy_q_ = MinBy_1.minBy;
        this.minOrDefault_q_ = MinOrDefault_1.minOrDefault;
        this.ofType_q_ = OfType_1.ofType;
        this.outerJoin_q_ = OuterJoin_1.outerJoin;
        this.prepend_q_ = Prepend_1.prepend;
        this.replicate_q_ = Replicate_1.replicate;
        this.reverse_q_ = Reverse_1.reverse;
        this.rightJoin_q_ = RightJoin_1.rightJoin;
        this.select_q_ = Select_1.select;
        this.selectMany_q_ = SelectMany_1.selectMany;
        this.sequenceEqual_q_ = SequenceEqual_1.sequenceEqual;
        this.single_q_ = Single_1.single;
        this.singleOrDefault_q_ = SingleOrDefault_1.singleOrDefault;
        this.skip_q_ = Skip_1.skip;
        this.skipLast_q_ = SkipLast_1.skipLast;
        this.skipWhile_q_ = SkipWhile_1.skipWhile;
        this.step_q_ = Step_1.step;
        this.sum_q_ = Sum_1.sum;
        this.take_q_ = Take_1.take;
        this.takeLast_q_ = TakeLast_1.takeLast;
        this.takeWhile_q_ = TakeWhile_1.takeWhile;
        this.toArray_q_ = ToConversions_1.toArray;
        this.toDictionary_q_ = ToConversions_1.toDictionary;
        this.toHashSet_q_ = ToConversions_1.toHashSet;
        this.toList_q_ = ToConversions_1.toArray;
        this.toLookup_q_ = ToConversions_1.toLookup;
        this.toMap_q_ = ToConversions_1.toMap;
        this.union_q_ = Union_1.union;
        this.unionBy_q_ = UnionBy_1.unionBy;
        this.where_q_ = Where_1.where;
        this.zip_q_ = Zip_1.zip;
        this._cache = [];
        this._isClosed = false;
        // Normally, we'd go ahead and say the data should be an array, nothing but.
        // But let's be flexible and allow anything. If it's not iterable, then it'll become a one-item iterator.
        this._source = this._ensureBackup(MakeGenerator_1.makeGenerator(data));
    }
    static range_q_(start, len) {
        if (len < 0) {
            throw new Error("Argument out of range.");
        }
        // It's a pain to remember the function*{}() syntax here.
        return new Enumerable(function* _range() {
            let i = start;
            const maxval = start + len;
            while (i < maxval) {
                yield i;
                i++;
            }
        }());
    }
    static repeat_q_(element, len) {
        if (len < 0) {
            throw new Error("Argument out of range.");
        }
        // It's a pain to remember the function*{}() syntax here.
        return new Enumerable(function* _repeat() {
            let i = 0;
            while (i < len) {
                yield element;
                i++;
            }
        }());
    }
    get _data() {
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
    *[Symbol.iterator]() {
        for (const item of this._data) {
            yield item;
        }
    }
    return(value) {
        // For some reason, TypeScript does not like this. It thinks [Symbol.iterator]() might be undefined,
        // even when it is clearly defined a few lines up.
        const internalIterator = this[Symbol.iterator]();
        return internalIterator.return(value);
    }
    throw(e) {
        // For some reason, Typescript does not like this. It thinks [Symbol.iterator]() might be undefined,
        // even when it is clearly defined a few lines up.
        const internalIterator = this[Symbol.iterator]();
        return internalIterator.throw(e);
    }
    next() {
        // But it's ok with the exact same code here. Go figure.
        const internalIterator = this[Symbol.iterator]();
        return internalIterator.next();
    }
    toJSON() {
        // Writing an Enumerable to JSON exhausts the enumerator.
        return [...this];
    }
    tryGetNonEnumeratedCount_q_(obj) {
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
    _extend(func) {
        return new Enumerable(func(this));
    }
    *_ensureBackup(data) {
        for (const item of data) {
            this._cache.push(item);
            yield item;
        }
        this._isClosed = true;
    }
}
exports.Enumerable = Enumerable;

},{"../Generators/MakeGenerator":4,"../Queryable/Aggregate":7,"../Queryable/All":8,"../Queryable/Any":9,"../Queryable/Append":10,"../Queryable/Average":11,"../Queryable/Chunk":12,"../Queryable/Concat":13,"../Queryable/Contains":14,"../Queryable/Count":15,"../Queryable/CrossJoin":16,"../Queryable/DefaultIfEmpty":17,"../Queryable/Distinct":18,"../Queryable/DistinctBy":19,"../Queryable/ElementAt":20,"../Queryable/ElementAtOrDefault":21,"../Queryable/Empty":22,"../Queryable/Except":23,"../Queryable/ExceptBy":24,"../Queryable/First":25,"../Queryable/FirstOrDefault":26,"../Queryable/ForEach":27,"../Queryable/FullJoin":28,"../Queryable/GroupBy":29,"../Queryable/GroupJoin":30,"../Queryable/InnerJoin":31,"../Queryable/Intersect":32,"../Queryable/IntersectBy":33,"../Queryable/Join":34,"../Queryable/Last":35,"../Queryable/LastOrDefault":36,"../Queryable/LeftJoin":37,"../Queryable/LongCount":38,"../Queryable/Max":39,"../Queryable/MaxBy":40,"../Queryable/MaxOrDefault":41,"../Queryable/Min":42,"../Queryable/MinBy":43,"../Queryable/MinOrDefault":44,"../Queryable/OfType":45,"../Queryable/OuterJoin":47,"../Queryable/Prepend":48,"../Queryable/Replicate":49,"../Queryable/Reverse":50,"../Queryable/RightJoin":51,"../Queryable/Select":52,"../Queryable/SelectMany":53,"../Queryable/SequenceEqual":54,"../Queryable/Single":55,"../Queryable/SingleOrDefault":56,"../Queryable/Skip":57,"../Queryable/SkipLast":58,"../Queryable/SkipWhile":59,"../Queryable/Step":60,"../Queryable/Sum":61,"../Queryable/Take":62,"../Queryable/TakeLast":63,"../Queryable/TakeWhile":64,"../Queryable/ToConversions":65,"../Queryable/Union":66,"../Queryable/UnionBy":67,"../Queryable/Where":68,"../Queryable/Zip":69}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IComparer_1 = require("./../Types/IComparer");
const Enumerable_1 = require("./Enumerable");
class OrderedEnumerable extends Enumerable_1.Enumerable {
    constructor(data, orderBy, comparer, descending = false) {
        super(data);
        this._sorters = [];
        this._sorters.push({ orderBy, comparer, descending: descending });
    }
    *[Symbol.iterator]() {
        // Need to sort the data. This needs to process the full list, because the last record could be the one
        // that needs to go first.
        // Two possible approaches here. One is to repeatedly attack the list, going after the min record and
        // returning it, which is heavy on the CPU but light on memory, or what I'm going to do, which is load
        // an array and use the built-in sort() method, which is heavy on memory but light on CPU.
        let sortingFunction;
        for (const hat of this._sorters) {
            sortingFunction = buildSorter(hat.orderBy, hat.comparer, hat.descending, sortingFunction);
        }
        const sortedData = [...this._data].sort(sortingFunction);
        for (const item of sortedData) {
            yield item;
        }
    }
    thenBy_q_(orderBy, comparer) {
        if (!orderBy) {
            orderBy = ((o) => o);
        }
        this._sorters.push({ orderBy, comparer, descending: false });
        return this;
    }
    thenByDescending_q_(orderBy, comparer) {
        if (!orderBy) {
            orderBy = ((o) => o);
        }
        this._sorters.push({ orderBy, comparer, descending: true });
        return this;
    }
}
exports.OrderedEnumerable = OrderedEnumerable;
function buildSorter(keySelector, comparer, descending = false, initial) {
    let compare = IComparer_1.extractComparer(comparer);
    if (!compare) {
        compare = IComparer_1.defaultComparer;
    }
    if (initial) {
        return function _thenBy(x, y) {
            const key1 = keySelector(x);
            const key2 = keySelector(y);
            if (descending) {
                return initial(x, y) || compare(key2, key1);
            }
            return initial(x, y) || compare(key1, key2);
        };
    }
    else {
        return function _orderBy(x, y) {
            const key1 = keySelector(x);
            const key2 = keySelector(y);
            if (descending) {
                return compare(key2, key1);
            }
            return compare(key1, key2);
        };
    }
}

},{"./../Types/IComparer":71,"./Enumerable":1}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Enumerable_1 = require("./Enumerable/Enumerable");
/**
 * Helper to add extension methods to Array and Set. These methods duplicate the names in Enumerable, but what they do is create a new
 * Enumerable and then pass the call onward, so it seems as if the array is Enumerable.
 *
 * This can be modified to support any object. If you do so, remember to set writable: true so Enumerable can have its own
 * implementations.
 */
function extend(name, extension) {
    Object.defineProperty(Array.prototype, name, {
        value: function _convertToEnumerable() {
            return new Enumerable_1.Enumerable(this)[name](...arguments);
        }
    });
    Object.defineProperty(Set.prototype, name, {
        value: function _convertToEnumerable() {
            return new Enumerable_1.Enumerable(this)[name](...arguments);
        }
    });
}
exports.extend = extend;

},{"./Enumerable/Enumerable":1}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function* makeGenerator(iter) {
    if (typeof iter === "string" || iterableGuard(iter)) {
        yield* iter;
    }
    else if (arrayLikeGuard(iter)) {
        yield* Array.from(iter);
    }
    else {
        yield iter;
    }
}
exports.makeGenerator = makeGenerator;
function iterableGuard(obj) {
    return typeof obj === "object" && obj && Symbol.iterator in obj;
}
function arrayLikeGuard(obj) {
    // I don't think this is perfect but I can't find a way to validate the other part of ArrayLike, the key.
    return typeof obj === "object" && obj &&
        "length" in obj && typeof obj.length === "number" &&
        obj.length >= 0;
}

},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MakeGenerator_1 = require("./MakeGenerator");
/**
 * JS doesn't give a way to restart a generator, which causes a great deal of trouble when you need to check it multiple times.
 * For example, if you do an inner join, you need to check each element of the left with each element of the right.
 * You need the ability to rebuild the generator from the original iterable. But there isn't a reference to the original iterable ANYWHERE.
 * As a result, the only way to make this work is to make a copy of the data as you iterate it.
 * This could double the amount of space needed, but it's a limitation of the technology.
 * We don't actually know if a generator is being used. The type is "object." So you could be wasting memory by using this. No way to know.
 */
class RestartableGenerator {
    constructor(iterable, flexMemory = false) {
        this.backup = [];
        this.iterator = cycleGenerator(iterable, this.backup);
        this.flexMemory = flexMemory;
    }
    [Symbol.iterator]() {
        return this.iterator[Symbol.iterator]();
    }
    asQueryable() {
        return this.iterator.asQueryable();
    }
    restart() {
        if (this.flexMemory) {
            const i = this.backup.slice(0);
            this.backup = [];
            this.iterator = cycleGenerator(i, this.backup);
        }
        else {
            this.iterator = MakeGenerator_1.makeGenerator(this.backup);
        }
    }
}
exports.RestartableGenerator = RestartableGenerator;
function* cycleGenerator(iter, backup) {
    for (const x of iter) {
        backup.push(x);
        yield x;
    }
}
exports.cycleGenerator = cycleGenerator;

},{"./MakeGenerator":4}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Enumerable_1 = require("./Enumerable/Enumerable");
const Extend_1 = require("./Extend");
const Aggregate_1 = require("./Queryable/Aggregate");
const All_1 = require("./Queryable/All");
const Any_1 = require("./Queryable/Any");
const Append_1 = require("./Queryable/Append");
const Average_1 = require("./Queryable/Average");
const Chunk_1 = require("./Queryable/Chunk");
const Concat_1 = require("./Queryable/Concat");
const Contains_1 = require("./Queryable/Contains");
const Count_1 = require("./Queryable/Count");
const CrossJoin_1 = require("./Queryable/CrossJoin");
const DefaultIfEmpty_1 = require("./Queryable/DefaultIfEmpty");
const Distinct_1 = require("./Queryable/Distinct");
const DistinctBy_1 = require("./Queryable/DistinctBy");
const ElementAt_1 = require("./Queryable/ElementAt");
const ElementAtOrDefault_1 = require("./Queryable/ElementAtOrDefault");
const Empty_1 = require("./Queryable/Empty");
const Except_1 = require("./Queryable/Except");
const ExceptBy_1 = require("./Queryable/ExceptBy");
const First_1 = require("./Queryable/First");
const FirstOrDefault_1 = require("./Queryable/FirstOrDefault");
const ForEach_1 = require("./Queryable/ForEach");
const FullJoin_1 = require("./Queryable/FullJoin");
const GroupBy_1 = require("./Queryable/GroupBy");
const GroupJoin_1 = require("./Queryable/GroupJoin");
const InnerJoin_1 = require("./Queryable/InnerJoin");
const Intersect_1 = require("./Queryable/Intersect");
const IntersectBy_1 = require("./Queryable/IntersectBy");
const Join_1 = require("./Queryable/Join");
const Last_1 = require("./Queryable/Last");
const LastOrDefault_1 = require("./Queryable/LastOrDefault");
const LongCount_1 = require("./Queryable/LongCount");
const Max_1 = require("./Queryable/Max");
const MaxBy_1 = require("./Queryable/MaxBy");
const MaxOrDefault_1 = require("./Queryable/MaxOrDefault");
const Min_1 = require("./Queryable/Min");
const MinBy_1 = require("./Queryable/MinBy");
const MinOrDefault_1 = require("./Queryable/MinOrDefault");
const OfType_1 = require("./Queryable/OfType");
const OrderBy_1 = require("./Queryable/OrderBy");
const OuterJoin_1 = require("./Queryable/OuterJoin");
const Prepend_1 = require("./Queryable/Prepend");
const Replicate_1 = require("./Queryable/Replicate");
const Reverse_1 = require("./Queryable/Reverse");
const RightJoin_1 = require("./Queryable/RightJoin");
const Select_1 = require("./Queryable/Select");
const SelectMany_1 = require("./Queryable/SelectMany");
const SequenceEqual_1 = require("./Queryable/SequenceEqual");
const Single_1 = require("./Queryable/Single");
const SingleOrDefault_1 = require("./Queryable/SingleOrDefault");
const Skip_1 = require("./Queryable/Skip");
const SkipLast_1 = require("./Queryable/SkipLast");
const SkipWhile_1 = require("./Queryable/SkipWhile");
const Step_1 = require("./Queryable/Step");
const Sum_1 = require("./Queryable/Sum");
const Take_1 = require("./Queryable/Take");
const TakeLast_1 = require("./Queryable/TakeLast");
const TakeWhile_1 = require("./Queryable/TakeWhile");
const ToConversions_1 = require("./Queryable/ToConversions");
const Union_1 = require("./Queryable/Union");
const UnionBy_1 = require("./Queryable/UnionBy");
const Where_1 = require("./Queryable/Where");
const Zip_1 = require("./Queryable/Zip");
Array.prototype.tryGetNonEnumeratedCount_q_ = function _tryGetNonEnumeratedCount_q_(obj) {
    // there are no out variables in JS, so we have to put it in an object reference.
    if (obj) {
        obj.value = this.length;
    }
    return true;
};
Set.prototype.tryGetNonEnumeratedCount_q_ = function _tryGetNonEnumeratedCount_q_(obj) {
    // there are no out variables in JS, so we have to put it in an object reference.
    if (obj) {
        obj.value = this.size;
    }
    return true;
};
Object.prototype.asQueryable = function () {
    // If the object is iterable, this will be an ordinary generator. If it is not,
    // this will be an iterable with a single item. This makes it so I don't have to
    // guess what prototypes need to be modified.
    return new Enumerable_1.Enumerable(this);
};
String.prototype.asQueryable = function () {
    // Strings are iterable, but I didn't want to add all the enumerable methods to them.
    return new Enumerable_1.Enumerable(this);
};
Number.prototype.asQueryable = function () {
    // (4).asQueryable() is treated like range()
    return Enumerable_1.Enumerable.range_q_(0, this);
};
Boolean.prototype.asQueryable = function () {
    if (this) {
        // true.asQueryable() is pretty useless: [false, true] ascending. Might be useful.
        return new Enumerable_1.Enumerable([false, true]);
    }
    else {
        // false.asQueryable() is also pretty useless: [true, false] descending. Might be useful.
        return new Enumerable_1.Enumerable([true, false]);
    }
};
// Add stub functions onto Array.prototype and Set.prototype to make the object into an Enumerable
// and then call the Enumerable method
Extend_1.extend("aggregate_q_", Aggregate_1.aggregate);
Extend_1.extend("all_q_", All_1.all);
Extend_1.extend("any_q_", Any_1.any_q_);
Extend_1.extend("append_q_", Append_1.append);
Extend_1.extend("average_q_", Average_1.average);
Extend_1.extend("cast_q_", Select_1.select);
Extend_1.extend("chunk_q_", Chunk_1.chunk);
Extend_1.extend("concat_q_", Concat_1.concat);
Extend_1.extend("contains_q_", Contains_1.contains);
Extend_1.extend("count_q_", Count_1.count);
Extend_1.extend("crossJoin_q_", CrossJoin_1.crossJoin);
Extend_1.extend("defaultIfEmpty_q_", DefaultIfEmpty_1.defaultIfEmpty);
Extend_1.extend("distinct_q_", Distinct_1.distinct);
Extend_1.extend("distinctBy_q_", DistinctBy_1.distinctBy);
Extend_1.extend("elementAt_q_", ElementAt_1.elementAt);
Extend_1.extend("elementAtOrDefault_q_", ElementAtOrDefault_1.elementAtOrDefault);
Extend_1.extend("empty_q_", Empty_1.empty);
Extend_1.extend("except_q_", Except_1.except);
Extend_1.extend("exceptBy_q_", ExceptBy_1.exceptBy);
Extend_1.extend("first_q_", First_1.first);
Extend_1.extend("firstOrDefault_q_", FirstOrDefault_1.firstOrDefault);
Extend_1.extend("forEach_q_", ForEach_1.forEach);
Extend_1.extend("fullJoin_q_", FullJoin_1.fullJoin);
Extend_1.extend("groupBy_q_", GroupBy_1.groupBy);
Extend_1.extend("groupJoin_q_", GroupJoin_1.groupJoin);
Extend_1.extend("innerJoin_q_", InnerJoin_1.innerJoin);
Extend_1.extend("intersect_q_", Intersect_1.intersect);
Extend_1.extend("intersectBy_q_", IntersectBy_1.intersectBy);
Extend_1.extend("join_q_", Join_1.join);
Extend_1.extend("last_q_", Last_1.last);
Extend_1.extend("lastOrDefault_q_", LastOrDefault_1.lastOrDefault);
Extend_1.extend("leftJoin_q_", LastOrDefault_1.lastOrDefault);
Extend_1.extend("longCount_q_", LongCount_1.longCount);
Extend_1.extend("max_q_", Max_1.max);
Extend_1.extend("maxBy_q_", MaxBy_1.maxBy);
Extend_1.extend("maxOrDefault_q_", MaxOrDefault_1.maxOrDefault);
Extend_1.extend("min_q_", Min_1.min);
Extend_1.extend("minBy_q_", MinBy_1.minBy);
Extend_1.extend("minOrDefault_q_", MinOrDefault_1.minOrDefault);
Extend_1.extend("ofType_q_", OfType_1.ofType);
Extend_1.extend("orderBy_q_", OrderBy_1.orderBy);
Extend_1.extend("orderByDescending_q_", OrderBy_1.orderByDescending);
Extend_1.extend("outerJoin_q_", OuterJoin_1.outerJoin);
Extend_1.extend("prepend_q_", Prepend_1.prepend);
Extend_1.extend("replicate_q_", Replicate_1.replicate);
Extend_1.extend("reverse_q_", Reverse_1.reverse);
Extend_1.extend("rightJoin_q_", RightJoin_1.rightJoin);
Extend_1.extend("select_q_", Select_1.select);
Extend_1.extend("selectMany_q_", SelectMany_1.selectMany);
Extend_1.extend("sequenceEqual_q_", SequenceEqual_1.sequenceEqual);
Extend_1.extend("single_q_", Single_1.single);
Extend_1.extend("singleOrDefault_q_", SingleOrDefault_1.singleOrDefault);
Extend_1.extend("skip_q_", Skip_1.skip);
Extend_1.extend("skipLast_q_", SkipLast_1.skipLast);
Extend_1.extend("skipWhile_q_", SkipWhile_1.skipWhile);
Extend_1.extend("step_q_", Step_1.step);
Extend_1.extend("sum_q_", Sum_1.sum);
Extend_1.extend("take_q_", Take_1.take);
Extend_1.extend("takeLast_q_", TakeLast_1.takeLast);
Extend_1.extend("takeWhile_q_", TakeWhile_1.takeWhile);
Extend_1.extend("toArray_q_", ToConversions_1.toArray);
Extend_1.extend("toDictionary_q_", ToConversions_1.toDictionary);
Extend_1.extend("toList_q_", ToConversions_1.toArray);
Extend_1.extend("toLookup_q_", ToConversions_1.toLookup);
Extend_1.extend("toHashSet_q_", ToConversions_1.toHashSet);
Extend_1.extend("toMap_q_", ToConversions_1.toMap);
Extend_1.extend("union_q_", Union_1.union);
Extend_1.extend("unionBy_q_", UnionBy_1.unionBy);
Extend_1.extend("where_q_", Where_1.where);
Extend_1.extend("zip_q_", Zip_1.zip);
// As a workaround for orderby (javascript can't create a class that references a descendant class),
// add these to the Enumerable class in a way that doesn't explode
Enumerable_1.Enumerable.prototype.orderBy_q_ = OrderBy_1.orderBy;
Enumerable_1.Enumerable.prototype.orderByDescending_q_ = OrderBy_1.orderByDescending;

},{"./Enumerable/Enumerable":1,"./Extend":3,"./Queryable/Aggregate":7,"./Queryable/All":8,"./Queryable/Any":9,"./Queryable/Append":10,"./Queryable/Average":11,"./Queryable/Chunk":12,"./Queryable/Concat":13,"./Queryable/Contains":14,"./Queryable/Count":15,"./Queryable/CrossJoin":16,"./Queryable/DefaultIfEmpty":17,"./Queryable/Distinct":18,"./Queryable/DistinctBy":19,"./Queryable/ElementAt":20,"./Queryable/ElementAtOrDefault":21,"./Queryable/Empty":22,"./Queryable/Except":23,"./Queryable/ExceptBy":24,"./Queryable/First":25,"./Queryable/FirstOrDefault":26,"./Queryable/ForEach":27,"./Queryable/FullJoin":28,"./Queryable/GroupBy":29,"./Queryable/GroupJoin":30,"./Queryable/InnerJoin":31,"./Queryable/Intersect":32,"./Queryable/IntersectBy":33,"./Queryable/Join":34,"./Queryable/Last":35,"./Queryable/LastOrDefault":36,"./Queryable/LongCount":38,"./Queryable/Max":39,"./Queryable/MaxBy":40,"./Queryable/MaxOrDefault":41,"./Queryable/Min":42,"./Queryable/MinBy":43,"./Queryable/MinOrDefault":44,"./Queryable/OfType":45,"./Queryable/OrderBy":46,"./Queryable/OuterJoin":47,"./Queryable/Prepend":48,"./Queryable/Replicate":49,"./Queryable/Reverse":50,"./Queryable/RightJoin":51,"./Queryable/Select":52,"./Queryable/SelectMany":53,"./Queryable/SequenceEqual":54,"./Queryable/Single":55,"./Queryable/SingleOrDefault":56,"./Queryable/Skip":57,"./Queryable/SkipLast":58,"./Queryable/SkipWhile":59,"./Queryable/Step":60,"./Queryable/Sum":61,"./Queryable/Take":62,"./Queryable/TakeLast":63,"./Queryable/TakeWhile":64,"./Queryable/ToConversions":65,"./Queryable/Union":66,"./Queryable/UnionBy":67,"./Queryable/Where":68,"./Queryable/Zip":69}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * aggregate_q_: Applies an accumulator function over a sequence.
 * optional initial value acts as seed value
 * optional selectFunction selects the result
 */
function aggregate(initialOrAccumulator, accumulatorFunction, selectFunction) {
    let initialValueProvided = false;
    let seeded = false;
    let value;
    let accumulator;
    let selector;
    // This is basically the same as reduce, except it doesn't require copying the whole thing to an array first
    // The wack way that typescript does overloads really slops up the code for keeping a linq api
    // It also required two use of "any" above that I did not like doing.
    if (!accumulatorFunction) {
        accumulator = initialOrAccumulator;
    }
    else {
        initialValueProvided = true;
        seeded = true;
        value = initialOrAccumulator;
        accumulator = accumulatorFunction;
        selector = selectFunction;
    }
    for (const item of this) {
        // If there is no seed, then the first value is used as the seed
        // After the first item, it is populated. But typescript doesn't know understand that, so any needs to be used sometimes.
        if (!seeded) {
            value = item;
            seeded = true;
        }
        else {
            value = accumulator(value, item);
        }
    }
    // C# only throws an error in the overload without a seed value.
    if (!seeded) {
        throw new Error("Sequence contains no elements");
    }
    if (selector) {
        return selector(value);
    }
    else {
        // Typescript doesn't understand that _value is not undefined after the _value = item line (unless the iterable type allows it)
        // Unless the iterator contains undefined, of course. That's totally legal in JS
        return value;
    }
}
exports.aggregate = aggregate;

},{}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * all_q_: Determines whether all elements of a sequence satisfy a condition.
 * This condition can optionally take the index as the second argument (this is not provided by the C# version)
 */
function all(filter) {
    if (!filter) {
        throw new Error("Required argument is null");
    }
    let index = 0;
    for (const item of this) {
        if (!filter(item, index++)) {
            return false;
        }
    }
    return true;
}
exports.all = all;

},{}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * any_q_: Determines whether any elements of a sequence satisfy an optional condition
 */
function any_q_(filter) {
    for (const item of this) {
        if (!filter) {
            return true;
        }
        if (filter(item)) {
            return true;
        }
    }
    return false;
}
exports.any_q_ = any_q_;

},{}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * append_q_: Appends a value to the end of the sequence
 */
function append(newItem) {
    return this._extend(function* _append(data) {
        yield* data;
        yield newItem;
    });
}
exports.append = append;

},{}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NoneType_1 = require("../Types/NoneType");
/**
 * average_q_: computes the average of a sequence of numbers.
 * optional transform function lets us calculate using values obtained by invoking afunction on each element of the sequence.
 */
function average(selectFunction) {
    let sum = 0;
    let count = 0;
    for (const item of this) {
        let tmp;
        if (selectFunction) {
            tmp = selectFunction(item);
            // Nullable number behaviour: if null, skip it
            if (NoneType_1.isNone(tmp)) {
                continue;
            }
        }
        else {
            // Nullable number behaviour: if null, skip it
            if (NoneType_1.isNone(item)) {
                continue;
            }
        }
        tmp = Number(item);
        if (isNaN(tmp)) {
            throw new Error("Invalid data type for average.");
        }
        sum = sum + tmp;
        count++;
    }
    if (!count) {
        throw new Error("Sequence contains no elements");
    }
    return sum / count;
}
exports.average = average;

},{"../Types/NoneType":74}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * chunk_q_: splits the elements of a sequence into chunks of size at most size
 */
function chunk(size) {
    const newenum = this._extend(function* _chunk(data) {
        if (!size || size <= 1) {
            throw new Error("Argument out of range");
        }
        let counter = size;
        let tmp = [];
        for (const item of data) {
            tmp.push(item);
            counter--;
            if (counter <= 0) {
                yield tmp;
                tmp = [];
                counter = size;
            }
        }
        if (tmp.length) {
            yield tmp;
        }
    });
    return newenum;
}
exports.chunk = chunk;

},{}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * concat_q_: concatenates two sequences
 */
function concat(second) {
    if (!second) {
        throw new Error("Required argument is null");
    }
    return this._extend(function* _concat(data) {
        yield* data;
        yield* second;
    });
}
exports.concat = concat;

},{}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IEqualityComparer_1 = require("../Types/IEqualityComparer");
/**
 * contains_q_: determines whether a sequence contains a specified element
 * optional equalityComparer function to indicate if record matches
 */
function contains(value, comparer) {
    const compare = IEqualityComparer_1.extractEqualityComparer(comparer);
    for (const item of this) {
        if (!compare) {
            if (item === value) {
                return true;
            }
        }
        else {
            if ((compare(item, value))) {
                return true;
            }
        }
    }
    return false;
}
exports.contains = contains;

},{"../Types/IEqualityComparer":72}],15:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * count_q_: returns a number that represents how many elements in the specified sequence satisfy an optional condition
 */
function count(condition) {
    let ctr = 0;
    for (const item of this) {
        if (condition) {
            if (condition(item)) {
                ctr++;
            }
        }
        else {
            ctr++;
        }
    }
    return ctr;
}
exports.count = count;

},{}],16:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RestartableGenerator_1 = require("../Generators/RestartableGenerator");
/**
 * crossJoin_q_: Create a simple cartesian join (every record from table 1 along with every record from table 2)
 */
function crossJoin(second, selectFunction) {
    if (!second) {
        throw new Error("Required argument is null");
    }
    let output;
    if (selectFunction) {
        output = selectFunction;
    }
    else {
        // If selectFunction is missing, TResult is [T, TSecond]. Can't make TypeScript understand that, though.
        output = ((l, r) => [l, r]);
    }
    return this._extend(function* _crossJoin(data) {
        // We need the ability to match the right side against every left side.
        // If it is a generator, it can't be restarted to allow that.
        const rightGen = new RestartableGenerator_1.RestartableGenerator(second);
        for (const leftItem of data) {
            for (const rightItem of rightGen) {
                yield output(leftItem, rightItem);
            }
            rightGen.restart();
        }
    });
}
exports.crossJoin = crossJoin;

},{"../Generators/RestartableGenerator":5}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * defaultIfEmpty_q_: returns the sequence or the (optional) default value if the sequence is empty.
 * Default in is a paramter. IF it is left out, undefined is returned.
 *
 * (Note that in JavaScript, unlike C#, there's no way to know what type a sequence is supposed to have, especially an empty one.)
 */
function defaultIfEmpty(defaultValue) {
    return this._extend(function* _defaultIfEmpty(data) {
        let empty = true;
        for (const item of data) {
            empty = false;
            yield item;
        }
        if (empty) {
            yield defaultValue;
        }
    });
}
exports.defaultIfEmpty = defaultIfEmpty;

},{}],18:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IEqualityComparer_1 = require("./../Types/IEqualityComparer");
/**
 * distinct_q_: Returns distinct elements from a sequence by using an optional equality comparer to compare values
 */
function distinct(comparer) {
    const compare = IEqualityComparer_1.extractEqualityComparer(comparer);
    return this._extend(function* _distinct(data) {
        // Keep a history of every item returned (no way around that) and only return if not in the list.
        const history = new Set();
        for (const item of data) {
            if (compare) {
                let found = false;
                for (const innerItem of history) {
                    if (compare(item, innerItem)) {
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    history.add(item);
                    yield item;
                }
            }
            else {
                if (!(history.has(item))) {
                    history.add(item);
                    yield item;
                }
            }
        }
    });
}
exports.distinct = distinct;

},{"./../Types/IEqualityComparer":72}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IEqualityComparer_1 = require("./../Types/IEqualityComparer");
/**
 * distinctBy_q_: Returns distinct elements from a sequence based on keys returned by a key selector function.
 * optional equality comparer can be supplied to compare values
 */
function distinctBy(keySelector, comparer) {
    if (!keySelector) {
        throw new Error("Required argument is null");
    }
    const compare = IEqualityComparer_1.extractEqualityComparer(comparer);
    return this._extend(function* _distinctBy(data) {
        // Keep a history of every item returned (no way around that) and only return if not in the list.
        const history = new Set();
        for (const item of data) {
            const key = keySelector(item);
            if (compare) {
                let found = false;
                for (const innerItem of history) {
                    if (compare(key, innerItem)) {
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    history.add(key);
                    yield item;
                }
            }
            else {
                if (!(history.has(key))) {
                    history.add(key);
                    yield item;
                }
            }
        }
    });
}
exports.distinctBy = distinctBy;

},{"./../Types/IEqualityComparer":72}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * elementAt_q_: Returns the element at a specified index in a sequence
 */
function elementAt(index) {
    let i = 0;
    for (const item of this) {
        if (i === index) {
            return item;
        }
        i++;
    }
    throw new Error("Index out of range.");
}
exports.elementAt = elementAt;

},{}],21:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * elementAtOrDefault_q_: Returns the element at a specified index in a sequence.
 * Returns an optional default value if index is out of range, or undefined if not supplied.
 *
 * (Note that in JavaScript, unlike C#, there's no way to know what type a sequence is supposed to have.)
 */
function elementAtOrDefault(index, defaultValue) {
    let i = 0;
    for (const item of this) {
        if (i === index) {
            return item;
        }
        i++;
    }
    return defaultValue;
}
exports.elementAtOrDefault = elementAtOrDefault;

},{}],22:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * empty_q_: Returns an empty IEnumerable<T> that has the specified type argument.
 * Note that types are typescript-only fictitious entities that aren't emitted.
 */
function empty() {
    return [];
}
exports.empty = empty;

},{}],23:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IEqualityComparer_1 = require("./../Types/IEqualityComparer");
/**
 * except_q_: Produces the set difference (distinct) of two sequences.
 * optional equality comparer can be used to compare values
 */
function except(second, comparer) {
    if (!second) {
        throw new Error("Required argument is null");
    }
    const compare = IEqualityComparer_1.extractEqualityComparer(comparer);
    return this._extend(function* _except(data) {
        // No way around this, but we need to keep a history of every item returned. Both the first and second lists.
        // And the second might also be a generator, so we need to exhaust its values.
        // Start by loading the history with the second set. Then, we can do what we already did for distinct() and it'll pull out the matches
        const history = new Set();
        for (const item of second) {
            history.add(item);
        }
        for (const item of data) {
            if (compare) {
                let found = false;
                for (const innerItem of history) {
                    if (compare(item, innerItem)) {
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    history.add(item);
                    yield item;
                }
            }
            else {
                if (!(history.has(item))) {
                    history.add(item);
                    yield item;
                }
            }
        }
    });
}
exports.except = except;

},{"./../Types/IEqualityComparer":72}],24:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IEqualityComparer_1 = require("./../Types/IEqualityComparer");
/**
 * except_q_: Produces the set difference of two sequences based on keys (distinct keys) returned by a key selector function.
 * optional equality comparer can be used to compare values
 */
function exceptBy(second, keySelector, comparer) {
    if (!second || !keySelector) {
        throw new Error("Required argument is null");
    }
    const compare = IEqualityComparer_1.extractEqualityComparer(comparer);
    return this._extend(function* _exceptBy(data) {
        // No way around this, but we need to keep a history of every item returned. Both the first and second lists.
        // And the second might also be a generator, so we need to exhaust its values.
        const history = new Set();
        for (const item of second) {
            history.add(keySelector(item));
        }
        for (const item of data) {
            const key = keySelector(item);
            if (compare) {
                let found = false;
                for (const innerItem of history) {
                    if (compare(key, innerItem)) {
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    history.add(key);
                    yield item;
                }
            }
            else {
                if (!(history.has(key))) {
                    history.add(key);
                    yield item;
                }
            }
        }
    });
}
exports.exceptBy = exceptBy;

},{"./../Types/IEqualityComparer":72}],25:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * first_q_: Returns the first element in a sequence, throwing an exception if the sequence is empty.
 * optional filter condition can be supplied
 */
function first(matchFunction) {
    for (const item of this) {
        if (!matchFunction) {
            return item;
        }
        else if (matchFunction(item)) {
            return item;
        }
    }
    throw new Error("Sequence has no elements.");
}
exports.first = first;

},{}],26:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * firstOrDefault_q_: Returns the first element in a sequence.
 * optional filter condition can be supplied
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
function firstOrDefault(matchFunction, defaultValue) {
    let tester;
    if (matchFunction && typeof matchFunction === "function") {
        tester = matchFunction;
    }
    let def;
    if (matchFunction && "defaultValue" in matchFunction) {
        def = matchFunction.defaultValue;
    }
    else {
        def = defaultValue;
    }
    for (const item of this) {
        if (!tester) {
            return item;
        }
        else if (tester(item)) {
            return item;
        }
    }
    return def;
}
exports.firstOrDefault = firstOrDefault;

},{}],27:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * forEach_q_: Execute a callback function on each row in the enumerable, returning no results.
 */
function forEach(callbackfn, thisArg) {
    if (!callbackfn) {
        throw new Error("Required argument is null");
    }
    let index = 0;
    for (const item of this) {
        callbackfn.call(thisArg, item, index++);
    }
}
exports.forEach = forEach;

},{}],28:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RestartableGenerator_1 = require("../Generators/RestartableGenerator");
/**
 * fullJoin_q_: A friendly helper to create a simple full outer join. This follows the pattern of innerJoin_q_(), which combines the two
 * key lookups and equality comparer into a single function input.
 */
function fullJoin(second, on, selectFunction) {
    if (!second || !on) {
        throw new Error("Required argument is null");
    }
    let output;
    if (selectFunction) {
        output = selectFunction;
    }
    else {
        // If selectFunction is missing, TResult is [T, TSecond]. Can't make TypeScript understand that, though.
        output = ((l, r) => [l, r]);
    }
    return this._extend(function* _leftJoin(data) {
        // Simple nested loops join
        // If this were SQL server, some analysis and pre-filtering could be done before comparison.
        // This isn't SQL Server. We can't even filter out NULLs, because what if the join function says "left == null && right == null", like some linq to entity queries do?
        // We need a place to track a;l items in the right that got sent
        const sentRights = new Set();
        // We need the ability to check the right side against every left side.
        // If it is a generator, it can't be restarted to allow that.
        const rightGen = new RestartableGenerator_1.RestartableGenerator(second);
        for (const leftItem of data) {
            let leftMatched = false;
            for (const rightItem of rightGen) {
                if (on(leftItem, rightItem)) {
                    leftMatched = true;
                    sentRights.add(rightItem);
                    yield output(leftItem, rightItem);
                }
            }
            if (!leftMatched) {
                yield output(leftItem, undefined);
            }
            rightGen.restart();
        }
        // Now go through the right side once more and send anything that didn't get sent
        for (const rightItem of rightGen) {
            if (!sentRights.has(rightItem)) {
                yield output(undefined, rightItem);
            }
        }
    });
}
exports.fullJoin = fullJoin;

},{"../Generators/RestartableGenerator":5}],29:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IEqualityComparer_1 = require("./../Types/IEqualityComparer");
const Grouping_1 = require("../Types/Grouping");
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
function groupBy(groupFunction, elementFunction, outputFunction, comparer) {
    if (!groupFunction) {
        throw new Error("Required argument is null");
    }
    let elementor;
    if (elementFunction && typeof elementFunction === "function") {
        elementor = elementFunction;
    }
    else if (elementFunction && "element" in elementFunction) {
        elementor = elementFunction.element;
    }
    let projector;
    if (outputFunction && typeof outputFunction === "function") {
        projector = outputFunction;
    }
    else if (elementFunction && "project" in elementFunction) {
        projector = elementFunction.project;
    }
    else if (outputFunction && "project" in outputFunction) {
        projector = outputFunction.project;
    }
    let equalizer;
    if (comparer && typeof comparer === "function") {
        equalizer = IEqualityComparer_1.extractEqualityComparer(comparer);
    }
    else if (elementFunction && "equals" in elementFunction) {
        equalizer = elementFunction.equals;
    }
    else if (outputFunction && "equals" in outputFunction) {
        equalizer = outputFunction.equals;
    }
    else if (comparer && "equals" in comparer) {
        equalizer = comparer.equals;
    }
    return this._extend(function* _groupBy(data) {
        // Even though this is returning as if it's deferred execution, it's not really deferred. It has to process the full list
        // to know what times each individual key appears.
        const cache = new Map();
        for (const row of data) {
            const extractedKey = groupFunction(row);
            let match;
            if (equalizer) {
                for (const innerItem of cache.keys()) {
                    if (equalizer(innerItem, extractedKey)) {
                        match = cache.get(innerItem);
                        break;
                    }
                }
            }
            else {
                match = cache.get(extractedKey);
            }
            if (match) {
                match.add(row);
            }
            else {
                cache.set(extractedKey, new Grouping_1.Grouping(extractedKey, row, elementor));
            }
        }
        for (const row of cache.entries()) {
            if (projector) {
                yield projector(row[0], row[1].values);
            }
            else if (elementor) {
                yield row[1];
            }
            else {
                yield row[1];
            }
        }
    });
}
exports.groupBy = groupBy;

},{"../Types/Grouping":70,"./../Types/IEqualityComparer":72}],30:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RestartableGenerator_1 = require("../Generators/RestartableGenerator");
const Grouping_1 = require("../Types/Grouping");
const IEqualityComparer_1 = require("../Types/IEqualityComparer");
/**
 * groupJoin_q_: Correlates the elements of two sequences based on key equality and groups the results.
 *
 * This is a sort of a combination of outer join and half a group by (only the second sequence is grouped).
 * The output function, which determines the output, is required. This doesn't seem useful enough for me to come up with a default output.
 */
function groupJoin(second, firstKeySelector, secondKeySelector, outputFunction, comparer) {
    if (!second || !firstKeySelector || !secondKeySelector || !outputFunction) {
        throw new Error("Required argument is null");
    }
    const compare = IEqualityComparer_1.extractEqualityComparer(comparer);
    return this._extend(function* _groupJoin(data) {
        // We need the ability to check the right side against every left side. 
        // If it is a generator, it can't be restarted to allow that.
        const rightGen = new RestartableGenerator_1.RestartableGenerator(second);
        const right = [];
        for (const leftItem of data) {
            let grouping;
            for (const rightItem of rightGen) {
                let match = false;
                const leftKey = firstKeySelector(leftItem);
                const rightKey = secondKeySelector(rightItem);
                if (compare) {
                    match = compare(leftKey, rightKey);
                }
                else {
                    match = leftKey === rightKey;
                }
                if (match) {
                    if (grouping) {
                        grouping.add(rightItem);
                    }
                    else {
                        grouping = new Grouping_1.Grouping(leftKey, rightItem);
                    }
                }
            }
            if (grouping) {
                yield outputFunction(leftItem, grouping.values);
            }
            else {
                yield outputFunction(leftItem, []);
            }
            rightGen.restart();
        }
    });
}
exports.groupJoin = groupJoin;

},{"../Generators/RestartableGenerator":5,"../Types/Grouping":70,"../Types/IEqualityComparer":72}],31:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RestartableGenerator_1 = require("../Generators/RestartableGenerator");
/**
 * innerJoin_q_: A friendly helper to create a simple inner join. This combines the two key lookups and the custom equality comparer into a
 * single function input. For most programmers, this is all the complexity you'll need.
 */
function innerJoin(second, on, selectFunction) {
    if (!second || !on) {
        throw new Error("Required argument is null");
    }
    let output;
    if (selectFunction) {
        output = selectFunction;
    }
    else {
        // If selectFunction is missing, TResult is [T, TSecond]. Can't make TypeScript understand that, though.
        output = ((l, r) => [l, r]);
    }
    return this._extend(function* _innerJoin(data) {
        // Simple nested loops join
        // If this were SQL server, some analysis and pre-filtering could be done before comparison.
        // This isn't SQL Server. We can't even filter out NULLs, because what if the join function says "left == null && right == null", like some linq to entity queries do?
        // The right side can theoretically be a generator. We don't know, but we have to take that chance.
        // JS doesn't give a way to restart a generator, so we can only check right once without some extra BS to allow it to restart
        const rightGen = new RestartableGenerator_1.RestartableGenerator(second);
        for (const leftItem of data) {
            for (const rightItem of rightGen) {
                if (on(leftItem, rightItem)) {
                    yield output(leftItem, rightItem);
                }
            }
            rightGen.restart();
        }
    });
}
exports.innerJoin = innerJoin;

},{"../Generators/RestartableGenerator":5}],32:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IEqualityComparer_1 = require("../Types/IEqualityComparer");
/**
 * intersect_q_: Produces the set intersection of two sequences.
 * optional equality comparer can be provided
 */
function intersect(second, comparer) {
    if (!second) {
        throw new Error("Required argument is null");
    }
    const compare = IEqualityComparer_1.extractEqualityComparer(comparer);
    return this._extend(function* _intersect(data) {
        const secondSet = new Set();
        for (const item of second) {
            secondSet.add(item);
        }
        // No way around this, but we need to keep a history of every item returned. Both the first and second lists.
        const history = new Set();
        for (const item of data) {
            if (compare) {
                let found = false;
                for (const innerItem of secondSet) {
                    if (compare(item, innerItem)) {
                        // It's in both sets...
                        found = true;
                        break;
                    }
                }
                if (found) {
                    for (const innerItem of history) {
                        if (compare(item, innerItem)) {
                            // But if it's been sent already, don't send it again.
                            found = false;
                            break;
                        }
                    }
                }
                // If found, track and send it
                if (found) {
                    history.add(item);
                    yield item;
                }
            }
            else {
                if (secondSet.has(item) &&
                    !history.has(item)) {
                    history.add(item);
                    yield item;
                }
            }
        }
    });
}
exports.intersect = intersect;

},{"../Types/IEqualityComparer":72}],33:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IEqualityComparer_1 = require("../Types/IEqualityComparer");
/**
 * intersectBy_q_: Produces the set intersection of two sequences based on keys returned by a key selector function.
 * optional equality comparer can be provided
 */
function intersectBy(second, keySelector, comparer) {
    if (!second || !keySelector) {
        throw new Error("Required argument is null");
    }
    const compare = IEqualityComparer_1.extractEqualityComparer(comparer);
    return this._extend(function* _intersectBy(data) {
        const secondSet = new Set();
        for (const item of second) {
            const key = keySelector(item);
            secondSet.add(key);
        }
        // No way around this, but we need to keep a history of every item returned. Both the first and second lists.
        const history = new Set();
        for (const item of data) {
            const key = keySelector(item);
            if (compare) {
                let found = false;
                for (const innerItem of secondSet) {
                    if (compare(key, innerItem)) {
                        // It's in both sets...
                        found = true;
                        break;
                    }
                }
                if (found) {
                    for (const innerItem of history) {
                        if (compare(key, innerItem)) {
                            // But if it's been sent already, don't send it again.
                            found = false;
                            break;
                        }
                    }
                }
                // If found, track and send it
                if (found) {
                    history.add(key);
                    yield item;
                }
            }
            else {
                if (secondSet.has(key) &&
                    !history.has(key)) {
                    history.add(key);
                    yield item;
                }
            }
        }
    });
}
exports.intersectBy = intersectBy;

},{"../Types/IEqualityComparer":72}],34:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RestartableGenerator_1 = require("../Generators/RestartableGenerator");
/**
 * join_q_: Correlates the elements of two sequences based on matching keys. Only records are returned when both sides match.
 * optional equality comparer can be used to compare keys.
 *
 * If the output selector is left out, results are returned as [first row, second row]. This is a change from C#, which requires the output selector.
 *
 * Leaving the output selector out requires passing comparer in as { equals: comparer } if you want to use it. See the long discussion
 * in GroupBy for details.
 */
function join(second, firstKeySelector, secondKeySelector, outputFunction, comparer) {
    if (!second || !firstKeySelector || !secondKeySelector) {
        throw new Error("Required argument is null");
    }
    let output;
    let equalizer;
    if (comparer && typeof comparer === "function") {
        equalizer = comparer;
    }
    else if (comparer && "equals" in comparer) {
        equalizer = comparer.equals;
    }
    else if (outputFunction && "equals" in outputFunction) {
        equalizer = outputFunction.equals;
    }
    if (outputFunction && typeof outputFunction === "function") {
        output = outputFunction;
    }
    else {
        // If outputFunction is missing, TResult is [T, TSecond]. Can't make TypeScript understand that, though.
        output = ((l, r) => [l, r]);
    }
    return this._extend(function* _join(data) {
        // Simple nested loops join
        // If this were SQL server, some statistics and index analysis and pre-filtering could be done before comparison.
        // This isn't SQL Server. We can't even filter out NULLs, because what if the join function says "left == null && right == null", like some linq to entity queries do?
        // We need the ability to check the right side against every left side.
        // If it is a generator, it can't be restarted to allow that.
        const rightGen = new RestartableGenerator_1.RestartableGenerator(second);
        for (const leftItem of data) {
            for (const rightItem of rightGen) {
                const leftKey = firstKeySelector(leftItem);
                const rightKey = secondKeySelector(rightItem);
                let match = false;
                if (equalizer) {
                    match = equalizer(leftKey, rightKey);
                }
                else {
                    match = leftKey === rightKey;
                }
                if (match) {
                    yield output(leftItem, rightItem);
                }
            }
            rightGen.restart();
        }
    });
}
exports.join = join;

},{"../Generators/RestartableGenerator":5}],35:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * last_q_: Returns the last element in a sequence. Takes an optional filter condition.
 */
function last(matchFunction) {
    let found = false;
    let lastItem;
    for (const item of this) {
        if (!matchFunction) {
            found = true;
            lastItem = item;
        }
        else if (matchFunction(item)) {
            found = true;
            lastItem = item;
        }
    }
    if (found) {
        // Can't check if lastItem is not undefined, because the last item could actually be "undefined".
        // TypeScript can't tell that every place found was true, lastItem was also set;
        return lastItem;
    }
    throw new Error("Sequence has no elements.");
}
exports.last = last;

},{}],36:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * lastOrDefault_q_: Returns the last element in a sequence, taking an optional filter condition.
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
function lastOrDefault(matchFunction, defaultValue) {
    let tester;
    if (matchFunction && typeof matchFunction === "function") {
        tester = matchFunction;
    }
    let def;
    if (matchFunction && "defaultValue" in matchFunction) {
        def = matchFunction.defaultValue;
    }
    else {
        def = defaultValue;
    }
    let found = false;
    let lastItem;
    for (const item of this) {
        if (!tester) {
            found = true;
            lastItem = item;
        }
        else if (tester(item)) {
            found = true;
            lastItem = item;
        }
    }
    if (found) {
        // Can't check if lastItem is not undefined, because the last item could actually be "undefined".
        // TypeScript can't tell that every place found was true, lastItem was also set;
        return lastItem;
    }
    return def;
}
exports.lastOrDefault = lastOrDefault;

},{}],37:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RestartableGenerator_1 = require("../Generators/RestartableGenerator");
/**
 * leftJoin_q_: A friendly helper to create a simple left outer join. This follows the pattern of innerJoin_q_(), which combines the two
 * key lookups and equality comparer into a single function input.
 */
function leftJoin(second, on, selectFunction) {
    if (!second || !on) {
        throw new Error("Required argument is null");
    }
    let output;
    if (selectFunction) {
        output = selectFunction;
    }
    else {
        // If selectFunction is missing, TResult is [T, TSecond]. Can't make TypeScript understand that, though.
        output = ((l, r) => [l, r]);
    }
    return this._extend(function* _leftJoin(data) {
        // Simple nested loops join
        // If this were SQL server, some analysis and pre-filtering could be done before comparison.
        // This isn't SQL Server. We can't even filter out NULLs, because what if the join function says "left == null && right == null", like some linq to entity queries do?
        // We need the ability to check the right side against every left side.
        // If it is a generator, it can't be restarted to allow that.
        const rightGen = new RestartableGenerator_1.RestartableGenerator(second);
        for (const leftItem of data) {
            let leftMatched = false;
            for (const rightItem of rightGen) {
                if (on(leftItem, rightItem)) {
                    leftMatched = true;
                    yield output(leftItem, rightItem);
                }
            }
            if (!leftMatched) {
                yield output(leftItem, undefined);
            }
            rightGen.restart();
        }
    });
}
exports.leftJoin = leftJoin;

},{"../Generators/RestartableGenerator":5}],38:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function longCount(condition) {
    let ctr = BigInt(0);
    const one = BigInt(1);
    for (const item of this) {
        if (condition) {
            if (condition(item)) {
                ctr = ctr + one;
            }
        }
        else {
            ctr = ctr + one;
        }
    }
    return ctr;
}
exports.longCount = longCount;

},{}],39:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IComparer_1 = require("./../Types/IComparer");
/**
 * max_q_: Returns the maximum value in a sequence.
 * Takes an optional transformation function. If supplied, this transformation is applied to all values and the max result returned.
 *
 * Takes an optional comparer, a function that takes two inputs and returns 1 if the first is higher, -1 is the second is higher,
 * else 0.
 * If you want to send only the comparer in the first parameter, it must be enclosed in an object like so: { compare: myComparerFunction }
 */
function max(transform, comparer) {
    let compare;
    if (comparer) {
        compare = IComparer_1.extractComparer(comparer);
    }
    else if (transform && "compare" in transform) {
        compare = transform.compare;
    }
    let xform;
    if (transform && typeof transform === "function") {
        xform = transform;
    }
    else {
        // Typescript doesn't know that T = TResult in this case
        xform = (val) => val;
    }
    let first = false;
    let maxval;
    for (const item of this) {
        const current = xform(item);
        if (!first) {
            maxval = current;
            first = true;
        }
        else if (compare) {
            if (compare(current, maxval) > 0) {
                maxval = current;
            }
        }
        else {
            if (current > maxval) {
                maxval = current;
            }
        }
    }
    if (!first) {
        throw new Error("Sequence contains no elements");
    }
    return maxval;
}
exports.max = max;

},{"./../Types/IComparer":71}],40:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IComparer_1 = require("./../Types/IComparer");
/**
 * maxBy_q_: Returns the maximum value in a sequence using a key selector function.
 * Takes an optional comparer, a function that takes two inputs and returns 1 if the first is higher, -1 is the second is higher,
 * else 0.
 *
 * The difference between MaxBy and Max with a transformation function is that Max returns the output of the transformation while MaxBy
 * returns the original value. This same result could be achieved with Max and a well-designed comparer function, of course.
 */
function maxBy(keySelector, comparer) {
    if (!keySelector) {
        throw new Error("Required argument is null");
    }
    const compare = IComparer_1.extractComparer(comparer);
    let first = false;
    let max;
    let maxValue;
    for (const item of this) {
        const current = keySelector(item);
        if (!first) {
            max = current;
            maxValue = item;
            first = true;
        }
        else if (compare) {
            if (compare(current, max) > 0) {
                max = current;
                maxValue = item;
            }
        }
        else {
            if (current > max) {
                max = current;
                maxValue = item;
            }
        }
    }
    if (!first) {
        throw new Error("Sequence contains no elements");
    }
    return maxValue;
}
exports.maxBy = maxBy;

},{"./../Types/IComparer":71}],41:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IComparer_1 = require("./../Types/IComparer");
/**
 * maxOrDefault_q_: Returns the maximum value in a sequence. If sequence is empty, returns the default value or undefined.
 * Takes an optional transformation function. If supplied, this transformation is applied to all values and the max result returned.
 * This is a JOIN-specific method. There is no equivalent in C#.
 *
 * Takes an optional comparer, a function that takes two inputs and returns 1 if the first is higher, -1 is the second is higher,
 * else 0.
 * If you want to send the comparer in the first parameter, it must be enclosed in an object like so: { compare: myComparerFunction }
 * If you want to send the defaultValue in anything but the final value, it must be enclosed like so: { defaultValue }
 */
function maxOrDefault(transform, comparer, defaultValue) {
    let def;
    if (defaultValue) {
        def = defaultValue;
    }
    else if (comparer && "defaultValue" in comparer) {
        def = comparer.defaultValue;
    }
    else if (transform && "defaultValue" in transform) {
        def = transform.defaultValue;
    }
    let compare;
    if (comparer && !("defaultValue" in comparer)) {
        compare = IComparer_1.extractComparer(comparer);
    }
    else if (transform && "compare" in transform) {
        compare = transform.compare;
    }
    let xform;
    if (transform && typeof transform === "function") {
        xform = transform;
    }
    else {
        // Typescript doesn't know that T = TResult in this case
        xform = (val) => val;
    }
    let first = false;
    let maxval;
    for (const item of this) {
        const current = xform(item);
        if (!first) {
            maxval = current;
            first = true;
        }
        else if (compare) {
            if (compare(current, maxval) > 0) {
                maxval = current;
            }
        }
        else {
            if (current > maxval) {
                maxval = current;
            }
        }
    }
    if (!first) {
        return def;
    }
    return maxval;
}
exports.maxOrDefault = maxOrDefault;

},{"./../Types/IComparer":71}],42:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IComparer_1 = require("./../Types/IComparer");
/**
 * min_q_: Returns the minimum value in a sequence.
 * Takes an optional transformation function. If supplied, this transformation is applied to all values and the min result returned.
 *
 * Takes an optional comparer, a function that takes two inputs and returns 1 if the first is higher, -1 is the second is higher,
 * else 0.
 * If you want to send only the comparer in the first parameter, it must be enclosed in an object like so: { compare: myComparerFunction }
 */
function min(transform, comparer) {
    let compare;
    if (comparer) {
        compare = IComparer_1.extractComparer(comparer);
    }
    else if (transform && "compare" in transform) {
        compare = transform.compare;
    }
    let xform;
    if (transform && typeof transform === "function") {
        xform = transform;
    }
    else {
        // Typescript doesn't know that T = TResult in this case
        xform = (val) => val;
    }
    let first = false;
    let minval;
    for (const item of this) {
        const current = xform(item);
        if (!first) {
            minval = current;
            first = true;
        }
        else if (compare) {
            if (compare(current, minval) < 0) {
                minval = current;
            }
        }
        else {
            if (current < minval) {
                minval = current;
            }
        }
    }
    if (!first) {
        throw new Error("Sequence contains no elements");
    }
    return minval;
}
exports.min = min;

},{"./../Types/IComparer":71}],43:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IComparer_1 = require("./../Types/IComparer");
/**
 * minBy_q_: Returns the maximum value in a sequence using a key selector function.
 * Takes an optional comparer, a function that takes two inputs and returns 1 if the first is higher, -1 is the second is higher,
 * else 0.
 *
 * The difference between MinBy and Min with a transformation function is that Min returns the output of the transformation while MinBy
 * returns the original value. This same result could be achieved with Min and a well-designed comparer function, of course.
 */
function minBy(keySelector, comparer) {
    if (!keySelector) {
        throw new Error("Required argument is null");
    }
    const compare = IComparer_1.extractComparer(comparer);
    let first = false;
    let min;
    let minValue;
    for (const item of this) {
        const current = keySelector(item);
        if (!first) {
            min = current;
            minValue = item;
            first = true;
        }
        else if (compare) {
            if (compare(current, min) < 0) {
                min = current;
                minValue = item;
            }
        }
        else {
            if (current < min) {
                min = current;
                minValue = item;
            }
        }
    }
    if (!first) {
        throw new Error("Sequence contains no elements");
    }
    return minValue;
}
exports.minBy = minBy;

},{"./../Types/IComparer":71}],44:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IComparer_1 = require("./../Types/IComparer");
/**
 * minOrDefault_q_: Returns the minimum value in a sequence. If sequence is empty, returns the default value or undefined.
 * Takes an optional transformation function. If supplied, this transformation is applied to all values and the min result returned.
 * This is a JOIN-specific method. There is no equivalent in C#.
 *
 * Takes an optional comparer, a function that takes two inputs and returns 1 if the first is higher, -1 is the second is higher,
 * else 0.
 * If you want to send the comparer in the first parameter, it must be enclosed in an object like so: { compare: myComparerFunction }
 * If you want to send the defaultValue in anything but the final value, it must be enclosed like so: { defaultValue }
 */
function minOrDefault(transform, comparer, defaultValue) {
    let def;
    if (defaultValue) {
        def = defaultValue;
    }
    else if (comparer && "defaultValue" in comparer) {
        def = comparer.defaultValue;
    }
    else if (transform && "defaultValue" in transform) {
        def = transform.defaultValue;
    }
    let compare;
    if (comparer && !("defaultValue" in comparer)) {
        compare = IComparer_1.extractComparer(comparer);
    }
    else if (transform && "compare" in transform) {
        compare = transform.compare;
    }
    let xform;
    if (transform && typeof transform === "function") {
        xform = transform;
    }
    else {
        // Typescript doesn't know that T = TResult in this case
        xform = (val) => val;
    }
    let first = false;
    let minval;
    for (const item of this) {
        const current = xform(item);
        if (!first) {
            minval = current;
            first = true;
        }
        else if (compare) {
            if (compare(current, minval) < 0) {
                minval = current;
            }
        }
        else {
            if (current < minval) {
                minval = current;
            }
        }
    }
    if (!first) {
        return def;
    }
    return minval;
}
exports.minOrDefault = minOrDefault;

},{"./../Types/IComparer":71}],45:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * ofType_q_: Filters the elements of an IEnumerable based on a specified type.
 *
 * In JS this is kind of meaningless. If you provide a string, it does a typeof. If you provide a class, it does an instanceof.
 */
function ofType(filter) {
    if (!filter) {
        throw new Error("Required argument is null");
    }
    return this._extend(function* _ofType(data) {
        for (const item of data) {
            if (typeof filter === "string") {
                if (typeof item === filter) {
                    // We're just taking it on the coder's honor that filter matches R. No way to actually test it.
                    yield item;
                }
            }
            else {
                if (item instanceof filter) {
                    yield item;
                }
            }
        }
    });
}
exports.ofType = ofType;

},{}],46:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const OrderedEnumerable_1 = require("../Enumerable/OrderedEnumerable");
// WARNING!
// These two methods must be added to Enumerable using prototype modification, because declaring them in the Enumerable class makes the
// browser blow up. It's because of the "new OrderedEnumerable" (which derives from Enumerable) being referenced.
/**
 * orderBy_q_: Sorts the elements of a sequence in ascending order according to a key function.
 * Takes an optional comparer, a function that takes two inputs and returns 1 if the first is higher, -1 is the second is higher,
 * else 0.
 * The key function is also optional. If you leave it out, it'll default to the identity. I got tired of writing .orderBy_q_(o => o)
 * when sorting numbers or strings. This is a change from C#.
 *
 * If you want to use the comparer, you'll need to include the key selector. It's not worth my while to make a {comparer} object to allow
 * only one parameter for this rare case.
 */
function orderBy(keySelector, comparer) {
    if (!keySelector) {
        keySelector = ((o) => o);
    }
    return new OrderedEnumerable_1.OrderedEnumerable(this, keySelector, comparer);
}
exports.orderBy = orderBy;
/**
 * orderByDescending_q_: Sorts the elements of a sequence in descending order according to a key function.
 * Takes an optional comparer, a function that takes two inputs and returns 1 if the first is higher, -1 is the second is higher,
 * else 0.
 * The key function is also optional. If you leave it out, it'll default to the identity. I got tired of writing .orderBy_q_(o => o)
 * when sorting numbers or strings. This is a change from C#.
 *
 * If you want to use the comparer, you'll need to include the key selector. It's not worth my while to make a {comparer} object to allow
 * only one parameter for this rare case.
 */
function orderByDescending(keySelector, comparer) {
    if (!keySelector) {
        keySelector = ((o) => o);
    }
    return new OrderedEnumerable_1.OrderedEnumerable(this, keySelector, comparer, true);
}
exports.orderByDescending = orderByDescending;

},{"../Enumerable/OrderedEnumerable":2}],47:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RestartableGenerator_1 = require("../Generators/RestartableGenerator");
/**
 * outerJoin_q_: Correlates the elements of two sequences based on matching keys. If no matching record is find in the second sequence, undefined is sent to the output selector.
 * Outer Joins are not provided in LINQ. This is a new function, following the pattern of join_q_();
 * optional equality comparer can be used to compare keys
 * If the output selector is left out, results are returned as [first row, second row].
 * Leaving the output selector out requires passing comparer in as { equals: comparer } if you want to use it.
 */
function outerJoin(second, firstKeySelector, secondKeySelector, outputFunction, comparer) {
    if (!second || !firstKeySelector || !secondKeySelector) {
        throw new Error("Required argument is null");
    }
    let output;
    let equalizer;
    if (comparer && typeof comparer === "function") {
        equalizer = comparer;
    }
    else if (comparer && "equals" in comparer) {
        equalizer = comparer.equals;
    }
    else if (outputFunction && "equals" in outputFunction) {
        equalizer = outputFunction.equals;
    }
    if (outputFunction && typeof outputFunction === "function") {
        output = outputFunction;
    }
    else {
        // If outputFunction is missing, TResult is [T, TSecond]. Can't make TypeScript understand that, though.
        output = ((l, r) => [l, r]);
    }
    return this._extend(function* _outerJoin(data) {
        // Simple nested loops join
        // If this were SQL server, some statistics and index analysis and pre-filtering could be done before comparison.
        // This isn't SQL Server. We can't even filter out NULLs, because what if the join function says "left == null && right == null", like some linq to entity queries do?
        // We need the ability to check the right side against every left side. 
        // If it is a generator, it can't be restarted to allow that.
        const rightGen = new RestartableGenerator_1.RestartableGenerator(second);
        for (const leftItem of data) {
            let leftMatched = false;
            for (const rightItem of rightGen) {
                const leftKey = firstKeySelector(leftItem);
                const rightKey = secondKeySelector(rightItem);
                let match = false;
                if (equalizer) {
                    match = equalizer(leftKey, rightKey);
                }
                else {
                    match = leftKey === rightKey;
                }
                if (match) {
                    leftMatched = true;
                    yield output(leftItem, rightItem);
                }
            }
            if (!leftMatched) {
                yield output(leftItem, undefined);
            }
            rightGen.restart();
        }
    });
}
exports.outerJoin = outerJoin;

},{"../Generators/RestartableGenerator":5}],48:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * prepend_q_: Appends a value to the start of the sequence
 */
function prepend(newItem) {
    return this._extend(function* _prepend(data) {
        yield newItem;
        yield* data;
    });
}
exports.prepend = prepend;

},{}],49:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RestartableGenerator_1 = require("../Generators/RestartableGenerator");
/**
 * replicate_q_: Repeat the items in a sequence a specified number of times.
 */
function replicate(times) {
    return this._extend(function* _take(data) {
        const loop = new RestartableGenerator_1.RestartableGenerator(data);
        while (times > 0) {
            for (const item of loop) {
                yield item;
            }
            loop.restart();
            times--;
        }
    });
}
exports.replicate = replicate;

},{"../Generators/RestartableGenerator":5}],50:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * reverse_q_: Inverts the order of the elements in a sequence
 *
 * Reverse is really pointless. It is already found on the array class, and while this is technically
 * delayed execution, it can only work by going through to the end of the enumerable.
 */
function reverse() {
    return this._extend(function* _reverse(data) {
        // While this is technically delayed execution, it obviously needs to process the entire dataset
        // because it has to get all the way to the last item before returning a row.
        const toReturn = [...data];
        while (toReturn.length) {
            yield toReturn.pop();
        }
    });
}
exports.reverse = reverse;

},{}],51:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RestartableGenerator_1 = require("../Generators/RestartableGenerator");
/**
 * rightJoin_q_: A friendly helper to create a right left outer join. This follows the pattern of innerJoin_q_(), which combines the two
 * key lookups and equality comparer into a single function input.
 */
function rightJoin(second, on, selectFunction) {
    if (!second || !on) {
        throw new Error("Required argument is null");
    }
    let output;
    if (selectFunction) {
        output = selectFunction;
    }
    else {
        // If selectFunction is missing, TResult is [T, TSecond]. Can't make TypeScript understand that, though.
        output = ((l, r) => [l, r]);
    }
    return this._extend(function* _leftJoin(data) {
        // Simple nested loops join
        // If this were SQL server, some analysis and pre-filtering could be done before comparison.
        // This isn't SQL Server. We can't even filter out NULLs, because what if the join function says "left == null && right == null", like some linq to entity queries do?
        // We need the ability to check the left side against every right side.
        // If it is a generator, it can't be restarted to allow that.
        const leftGen = new RestartableGenerator_1.RestartableGenerator(data);
        for (const rightItem of second) {
            let rightMatched = false;
            for (const leftItem of leftGen) {
                if (on(leftItem, rightItem)) {
                    rightMatched = true;
                    yield output(leftItem, rightItem);
                }
            }
            if (!rightMatched) {
                yield output(undefined, rightItem);
            }
            leftGen.restart();
        }
    });
}
exports.rightJoin = rightJoin;

},{"../Generators/RestartableGenerator":5}],52:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * select_q_: projects each element of a sequence into a new form by calling a transformation function on each element.
 * Optionally, the transformation function can receive the index as a second argument
 *
 * cast() is mapped to select() because in javascript/typescript, runtime cast() doesn't exist
 */
function select(selectFunction) {
    if (!selectFunction) {
        throw new Error("Required argument is null");
    }
    return this._extend(function* _select(data) {
        let index = 0;
        for (const item of data) {
            // Cast needed to allow clean interface overloads
            yield selectFunction(item, index++);
        }
    });
}
exports.select = select;

},{}],53:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * selectMany_q_: Projects each element of a sequence to an IEnumerable<T>, and flattens the resulting sequences into one sequence using a selector function
 * optionally, the transformation function can receive the index as a second argument
 * an optional output transformation function processes the output of the selector function to produce an output
 */
function selectMany(subSelectFunction, outputFunction) {
    if (!subSelectFunction) {
        throw new Error("Required argument is null");
    }
    if (!outputFunction) {
        // Typescript doesn't know that if R is left out, it's the same as TElement.
        // This would all be easier if typescript had proper overloads.
        outputFunction = ((src, row) => row);
    }
    return this._extend(function* _selectMany(data) {
        let index = 0;
        for (const item of data) {
            // Cast needed to allow clean interface overloads
            const iter = subSelectFunction(item, index++);
            for (const subItem of iter) {
                yield outputFunction(item, subItem);
            }
        }
    });
}
exports.selectMany = selectMany;

},{}],54:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IEqualityComparer_1 = require("./../Types/IEqualityComparer");
/**
 * sequenceEqual_q_: Determines whether two sequences are equal by comparing their elements.
 * optional equality comparer can be supplied
 */
function sequenceEqual(second, comparer) {
    if (!second) {
        throw new Error("Required argument is null");
    }
    const compare = IEqualityComparer_1.extractEqualityComparer(comparer);
    const iter = second[Symbol.iterator]();
    while (true) {
        const val1 = this.next();
        const val2 = iter.next();
        if (val1.done !== val2.done) {
            return false; // not the same length
        }
        if (val1.done) {
            break;
        }
        if (compare) {
            if (!compare(val1.value, val2.value)) {
                return false; // not the same value
            }
        }
        else {
            if (val1.value !== val2.value) {
                return false; // not the same value
            }
        }
    }
    // same length and all items have same values
    return true;
}
exports.sequenceEqual = sequenceEqual;

},{"./../Types/IEqualityComparer":72}],55:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * single_q_: Returns the first element in a sequence, throwing an exception if the sequence is empty or has more than one item.
 * Takes an optional filter condition.
 */
function single(matchFunction) {
    let found = false;
    let foundItem;
    for (const item of this) {
        if (!matchFunction) {
            if (found) {
                throw new Error("Sequence contains more than one element.");
            }
            found = true;
            foundItem = item;
        }
        else if (matchFunction(item)) {
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
    throw new Error("Sequence has no elements.");
}
exports.single = single;

},{}],56:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * singleOrDefault_q_: Returns the first element in a sequence, throwing an exception if the sequence has more than one item.
 * Takes an optional filter condition.
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
function singleOrDefault(matchFunction, defaultValue) {
    let tester;
    if (matchFunction && typeof matchFunction === "function") {
        tester = matchFunction;
    }
    let def;
    if (matchFunction && "defaultValue" in matchFunction) {
        def = matchFunction.defaultValue;
    }
    else {
        def = defaultValue;
    }
    let found = false;
    let foundItem;
    for (const item of this) {
        if (!tester) {
            if (found) {
                throw new Error("Sequence contains more than one element.");
            }
            found = true;
            foundItem = item;
        }
        else if (tester(item)) {
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
exports.singleOrDefault = singleOrDefault;

},{}],57:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * skip_q_: Bypasses a specified number of elements in a sequence and then returns the remaining elements
 */
function skip(count) {
    return this._extend(function* _skip(data) {
        for (const item of data) {
            if (count <= 0) {
                yield item;
            }
            count--;
        }
    });
}
exports.skip = skip;

},{}],58:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * skipLast_q_: Returns a new enumerable collection that contains the elements from source with the last count elements of the source collection omitted
 */
function skipLast(count) {
    // This is another one which is technically deferred execution, but there's no way to skip the last n items
    // if you don't count the list.
    return this._extend(function* _skipLast(data) {
        let toReturn;
        if (count <= 0) {
            toReturn = data;
        }
        else {
            toReturn = [...data].slice(0, -1 * count);
        }
        yield* toReturn;
    });
}
exports.skipLast = skipLast;

},{}],59:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * skipWhile_q_: Bypasses elements in a sequence as long as a specified condition is true and then returns the remaining elements.
 *  optionally, the filter function can receive the index as a second argument
 */
function skipWhile(filter) {
    if (!filter) {
        throw new Error("Required argument is null");
    }
    return this._extend(function* _skipWhile(data) {
        let index = 0;
        let triggered = false;
        for (const item of data) {
            // Whenever the filter goes false, triggered needs to go true, and it has to be sticky
            triggered = triggered || !filter(item, index++);
            if (triggered) {
                yield item;
            }
        }
    });
}
exports.skipWhile = skipWhile;

},{}],60:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * step_q_: returns every "step" items from a sequence
 *
 * This is a new item that I added because I thought it might be useful.
 */
function step(stepCount) {
    if (stepCount <= 0) {
        throw new Error("Required argument is invalid");
    }
    return this._extend(function* _step(data) {
        let tmpStep = 0;
        for (const item of data) {
            if (tmpStep === 0) {
                yield item;
            }
            // Handle step
            tmpStep++;
            if (tmpStep === stepCount) {
                tmpStep = 0;
            }
        }
    });
}
exports.step = step;

},{}],61:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * sum_q_: Computes the sum of the sequence of values that are obtained by invoking an optional transform function on each element of the sequence
 */
function sum(selectFunction) {
    let sumval = 0;
    for (const item of this) {
        if (selectFunction) {
            const valueToAdd = +selectFunction(item);
            if (isNaN(valueToAdd)) {
                throw new Error("Sequence contains invalid number after transformation");
            }
            sumval = sumval + valueToAdd;
        }
        else {
            if (typeof item !== 'number' || isNaN(item)) {
                throw new Error("Sequence contains invalid number");
            }
            sumval = sumval + item;
        }
    }
    return sumval;
}
exports.sum = sum;

},{}],62:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * take_q_: Returns a specified number of contiguous elements from the start of a sequence.
 * The skip parameter is a JS-specific modification to implement Range, which is a C#-only object (with an odd syntax)
 */
function take(count, skip = 0) {
    return this._extend(function* _take(data) {
        if (skip < 0) {
            skip = 0;
        }
        for (const item of data) {
            if (skip > 0) {
                skip--;
                continue;
            }
            if (count <= 0) {
                return;
            }
            count--;
            yield item;
        }
    });
}
exports.take = take;

},{}],63:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * skipLast_q_: Returns a new enumerable collection that contains the last count elements from source
 */
function takeLast(count) {
    // This is another one which is technically deferred execution, but there's no way to take the last n items
    // if you don't count the list.
    return this._extend(function* _takeLast(data) {
        if (count <= 0) {
            return;
        }
        yield* [...data].slice(-1 * count);
    });
}
exports.takeLast = takeLast;

},{}],64:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * takeWhile_q_: Returns elements from a sequence as long as a specified condition is true.
 * Optionally, the filter function can receive the index as a second argument
 */
function takeWhile(filter) {
    if (!filter) {
        throw new Error("Required argument is null");
    }
    return this._extend(function* _takeWhile(data) {
        let index = 0;
        let triggered = false;
        for (const item of data) {
            // Whenever the filter goes false, triggered needs to go true, and it has to be sticky
            triggered = triggered || !filter(item, index++);
            if (!triggered) {
                yield item;
            }
        }
    });
}
exports.takeWhile = takeWhile;

},{}],65:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Lookup_1 = require("../Types/Lookup");
/**
 * toArray_q_: Returns a javascript array containing the sequence values.
 * Aliased to toList_q_ as well.
 */
function toArray() {
    return [...this];
}
exports.toArray = toArray;
/**
 * toHashSet_q_: Returns a Set from an enumerable.
 * The C# ability to send a non-default equality comparer is not included because javascript sets do not allow custom equality.
 */
function toHashSet() {
    const result = new Set();
    for (const item of this) {
        result.add(item);
    }
    return result;
}
exports.toHashSet = toHashSet;
/**
 * toDictionary_q_: Returns a javascript object with string keys and values, based on a keySelector function and an optional element
 * selector function.
 *
 * The C# ability to send a non-default equality comparer is not included because javascript objects do not allow custom equality.
 */
function toDictionary(keySelector, elementSelector) {
    if (!keySelector) {
        throw new Error("Required argument is null");
    }
    // In C#, toDictionary() can produce dictionaries with no-string keys.
    // This is illegal in javascript, so toDictionary() has to be limited.
    const result = {};
    for (const item of this) {
        const key = keySelector(item);
        if (key in result) {
            throw new Error("Sequence contains duplicate keys");
        }
        if (elementSelector) {
            result[key] = elementSelector(item);
        }
        else {
            // TElement = T but typescript doesn't know that because weak overloads
            result[key] = item;
        }
    }
    return result;
}
exports.toDictionary = toDictionary;
/**
 * toMap_q_: Returns a javascript Map with specified keys and values, based on a keySelector function and an optional element
 * selector function.
 *
 * Note that in general, objects don't make good Map keys.
 *
 * The C# ability to send a non-default equality comparer is not included because javascript maps do not allow custom equality.
 */
function toMap(keySelector, elementSelector) {
    if (!keySelector) {
        throw new Error("Required argument is null");
    }
    // In C#, toDictionary() can produce dictionaries with non-string keys.
    // This is illegal in javascript, so toDictionary() has to be limited.
    // ToMap() method covers the gap.
    const result = new Map();
    for (const item of this) {
        const key = keySelector(item);
        if (result.has(key)) {
            throw new Error("Sequence contains duplicate keys");
        }
        if (elementSelector) {
            result.set(key, elementSelector(item));
        }
        else {
            // TElement = T but typescript doesn't know that because weak overloads
            result.set(key, item);
        }
    }
    return result;
}
exports.toMap = toMap;
/**
 * toLookup_q_: Returns a Lookup (custom class) Map with specified keys and values, based on a keySelector function and an optional element
 * selector function. A Lookup is like a Map except it allows multiple values to be set for a given key.
 *
 * The C# ability to send a non-default equality comparer is not included because javascript maps do not allow custom equality. Behind the
 * scenes, this is till using a map.
 *
 * Note that in general, objects don't make good Map keys.
 */
function toLookup(keySelector, elementSelector) {
    if (!keySelector) {
        throw new Error("Required argument is null");
    }
    const result = new Lookup_1.Lookup();
    for (const item of this) {
        const key = keySelector(item);
        if (elementSelector) {
            result.set(key, elementSelector(item));
        }
        else {
            // TElement = T but typescript doesn't know that because weak overloads
            result.set(key, item);
        }
    }
    return result;
}
exports.toLookup = toLookup;

},{"../Types/Lookup":73}],66:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IEqualityComparer_1 = require("../Types/IEqualityComparer");
/**
 * union_q_: concatenates two sequences returning the set sequence.
 * optional equality comparer can be supplied to compare values
 */
function union(second, comparer) {
    if (!second) {
        throw new Error("Required argument is null");
    }
    const compare = IEqualityComparer_1.extractEqualityComparer(comparer);
    return this._extend(function* _union(data) {
        // No way around this, but we need to keep a history of every item returned. Both the first and second lists.
        const history = new Set();
        for (const item of data) {
            if (compare) {
                let found = false;
                for (const innerItem of history) {
                    if (compare(item, innerItem)) {
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    history.add(item);
                    yield item;
                }
            }
            else {
                if (!history.has(item)) {
                    history.add(item);
                    yield item;
                }
            }
        }
        // a little bit of copypasta here but it's not worth making a sub-function for a single occurrence
        for (const item of second) {
            if (compare) {
                let found = false;
                for (const innerItem of history) {
                    if (compare(item, innerItem)) {
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    history.add(item);
                    yield item;
                }
            }
            else {
                if (!history.has(item)) {
                    history.add(item);
                    yield item;
                }
            }
        }
    });
}
exports.union = union;

},{"../Types/IEqualityComparer":72}],67:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IEqualityComparer_1 = require("../Types/IEqualityComparer");
/**
 * union_q_: concatenates two sequences returning the set sequence  based on keys returned by a key selector function.
 * optional equality comparer can be supplied to compare values
 */
function unionBy(second, keySelector, comparer) {
    if (!second) {
        throw new Error("Required argument is null");
    }
    const compare = IEqualityComparer_1.extractEqualityComparer(comparer);
    return this._extend(function* _unionBy(data) {
        // No way around this, but we need to keep a history of every item returned. Both the first and second lists.
        const history = new Set();
        for (const item of data) {
            const key = keySelector(item);
            if (compare) {
                let found = false;
                for (const innerItem of history) {
                    if (compare(key, innerItem)) {
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    history.add(key);
                    yield item;
                }
            }
            else {
                if (!history.has(key)) {
                    history.add(key);
                    yield item;
                }
            }
        }
        // a little bit of copypasta here but it's not worth making a sub-function for a single occurrence
        for (const item of second) {
            const key = keySelector(item);
            if (compare) {
                let found = false;
                for (const innerItem of history) {
                    if (compare(key, innerItem)) {
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    history.add(key);
                    yield item;
                }
            }
            else {
                if (!history.has(key)) {
                    history.add(key);
                    yield item;
                }
            }
        }
    });
}
exports.unionBy = unionBy;

},{"../Types/IEqualityComparer":72}],68:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * where_q_: Filters a sequence of values based on a predicate.
 * Optionally, the filter function can receive the index as a second argument
 */
function where(filter) {
    if (!filter) {
        throw new Error("Required argument is null");
    }
    return this._extend(function* _where(data) {
        let index = 0;
        for (const item of data) {
            if (filter(item, index++)) {
                yield item;
            }
        }
    });
}
exports.where = where;

},{}],69:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * zip_q_: Produces a sequence of tuples with elements from two or three specified sequences.
 * In place of a third sequence, a function can be provided that combines the first two.
 */
function zip(second, third) {
    if (!second) {
        throw new Error("Required argument is null");
    }
    return this._extend(function* _zip(data) {
        const iter2 = second[Symbol.iterator]();
        let iter3;
        let func3;
        let done3 = false;
        if (third && typeof third === "function") {
            func3 = third;
        }
        else if (third) {
            iter3 = third[Symbol.iterator]();
        }
        while (true) {
            const val1 = data.next();
            const val2 = iter2.next();
            let val3;
            if (iter3) {
                val3 = iter3.next();
                done3 = val3.done;
            }
            // As soon as any of the sequences runs out of data, we halt.
            if (val1.done || val2.done || done3) {
                break;
            }
            if (iter3 && val3) {
                yield [val1.value, val2.value, val3.value];
            }
            else if (func3) {
                yield [val1.value, val2.value, func3(val1.value, val2.value)];
            }
            else {
                yield [val1.value, val2.value];
            }
        }
    });
}
exports.zip = zip;

},{}],70:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Grouping {
    constructor(key, value, elementSelectFunction) {
        this.key = key;
        this._values = [value];
        if (elementSelectFunction) {
            this._selector = elementSelectFunction;
        }
        else {
            this._selector = k => k;
        }
    }
    get values() {
        return this._values.map(v => this._selector(v));
    }
    get [Symbol.iterator]() {
        return this._values.map(v => this._selector(v));
    }
    add(value) {
        this._values.push(value);
    }
    toJSON() {
        return this.values;
    }
    toString() {
        return this.values.toString();
    }
}
exports.Grouping = Grouping;

},{}],71:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function extractComparer(obj) {
    if (!obj) {
        return;
    }
    if (typeof obj === "function") {
        return obj;
    }
    if ("compare" in obj) {
        return obj.compare;
    }
}
exports.extractComparer = extractComparer;
function defaultComparer(x, y) {
    if (x > y) {
        return 1;
    }
    if (x < y) {
        return -1;
    }
    return 0;
}
exports.defaultComparer = defaultComparer;

},{}],72:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function extractEqualityComparer(obj) {
    if (!obj) {
        return;
    }
    if (typeof obj === "function") {
        return obj;
    }
    if ("equals" in obj) {
        return obj.equals;
    }
}
exports.extractEqualityComparer = extractEqualityComparer;

},{}],73:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A lookup is a Map that allows multiple values for each key. There is no built-in Javascript analogue.
 */
class Lookup {
    constructor() {
        this._data = new Map();
    }
    get size() {
        return this._data.size;
    }
    [Symbol.iterator]() {
        return this._data[Symbol.iterator]();
    }
    entries() {
        return this._data.entries();
    }
    keys() {
        return this._data.keys();
    }
    values() {
        return this._data.values();
    }
    clear() {
        this._data.clear();
    }
    delete(key) {
        return this._data.delete(key);
    }
    forEach(callbackfn, thisArg) {
        this._data.forEach(callbackfn);
    }
    get(key) {
        return this._data.get(key);
    }
    has(key) {
        return this._data.has(key);
    }
    set(key, value) {
        if (this._data.has(key)) {
            const item = this._data.get(key);
            item.push(value);
        }
        else {
            this._data.set(key, [value]);
        }
        return this;
    }
    toJSON() {
        return this._data;
    }
}
exports.Lookup = Lookup;

},{}],74:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isNone(test) {
    return (test == null || test === undefined);
}
exports.isNone = isNone;

},{}]},{},[6])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL25wbV9nbG9iYWwvbGliL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvRW51bWVyYWJsZS9FbnVtZXJhYmxlLmpzIiwic3JjL0VudW1lcmFibGUvT3JkZXJlZEVudW1lcmFibGUuanMiLCJzcmMvRXh0ZW5kLmpzIiwic3JjL0dlbmVyYXRvcnMvTWFrZUdlbmVyYXRvci5qcyIsInNyYy9HZW5lcmF0b3JzL1Jlc3RhcnRhYmxlR2VuZXJhdG9yLmpzIiwic3JjL1Byb3RvdHlwZUV4dGVuc2lvbi5qcyIsInNyYy9RdWVyeWFibGUvQWdncmVnYXRlLmpzIiwic3JjL1F1ZXJ5YWJsZS9BbGwuanMiLCJzcmMvUXVlcnlhYmxlL0FueS5qcyIsInNyYy9RdWVyeWFibGUvQXBwZW5kLmpzIiwic3JjL1F1ZXJ5YWJsZS9BdmVyYWdlLmpzIiwic3JjL1F1ZXJ5YWJsZS9DaHVuay5qcyIsInNyYy9RdWVyeWFibGUvQ29uY2F0LmpzIiwic3JjL1F1ZXJ5YWJsZS9Db250YWlucy5qcyIsInNyYy9RdWVyeWFibGUvQ291bnQuanMiLCJzcmMvUXVlcnlhYmxlL0Nyb3NzSm9pbi5qcyIsInNyYy9RdWVyeWFibGUvRGVmYXVsdElmRW1wdHkuanMiLCJzcmMvUXVlcnlhYmxlL0Rpc3RpbmN0LmpzIiwic3JjL1F1ZXJ5YWJsZS9EaXN0aW5jdEJ5LmpzIiwic3JjL1F1ZXJ5YWJsZS9FbGVtZW50QXQuanMiLCJzcmMvUXVlcnlhYmxlL0VsZW1lbnRBdE9yRGVmYXVsdC5qcyIsInNyYy9RdWVyeWFibGUvRW1wdHkuanMiLCJzcmMvUXVlcnlhYmxlL0V4Y2VwdC5qcyIsInNyYy9RdWVyeWFibGUvRXhjZXB0QnkuanMiLCJzcmMvUXVlcnlhYmxlL0ZpcnN0LmpzIiwic3JjL1F1ZXJ5YWJsZS9GaXJzdE9yRGVmYXVsdC5qcyIsInNyYy9RdWVyeWFibGUvRm9yRWFjaC5qcyIsInNyYy9RdWVyeWFibGUvRnVsbEpvaW4uanMiLCJzcmMvUXVlcnlhYmxlL0dyb3VwQnkuanMiLCJzcmMvUXVlcnlhYmxlL0dyb3VwSm9pbi5qcyIsInNyYy9RdWVyeWFibGUvSW5uZXJKb2luLmpzIiwic3JjL1F1ZXJ5YWJsZS9JbnRlcnNlY3QuanMiLCJzcmMvUXVlcnlhYmxlL0ludGVyc2VjdEJ5LmpzIiwic3JjL1F1ZXJ5YWJsZS9Kb2luLmpzIiwic3JjL1F1ZXJ5YWJsZS9MYXN0LmpzIiwic3JjL1F1ZXJ5YWJsZS9MYXN0T3JEZWZhdWx0LmpzIiwic3JjL1F1ZXJ5YWJsZS9MZWZ0Sm9pbi5qcyIsInNyYy9RdWVyeWFibGUvTG9uZ0NvdW50LmpzIiwic3JjL1F1ZXJ5YWJsZS9NYXguanMiLCJzcmMvUXVlcnlhYmxlL01heEJ5LmpzIiwic3JjL1F1ZXJ5YWJsZS9NYXhPckRlZmF1bHQuanMiLCJzcmMvUXVlcnlhYmxlL01pbi5qcyIsInNyYy9RdWVyeWFibGUvTWluQnkuanMiLCJzcmMvUXVlcnlhYmxlL01pbk9yRGVmYXVsdC5qcyIsInNyYy9RdWVyeWFibGUvT2ZUeXBlLmpzIiwic3JjL1F1ZXJ5YWJsZS9PcmRlckJ5LmpzIiwic3JjL1F1ZXJ5YWJsZS9PdXRlckpvaW4uanMiLCJzcmMvUXVlcnlhYmxlL1ByZXBlbmQuanMiLCJzcmMvUXVlcnlhYmxlL1JlcGxpY2F0ZS5qcyIsInNyYy9RdWVyeWFibGUvUmV2ZXJzZS5qcyIsInNyYy9RdWVyeWFibGUvUmlnaHRKb2luLmpzIiwic3JjL1F1ZXJ5YWJsZS9TZWxlY3QuanMiLCJzcmMvUXVlcnlhYmxlL1NlbGVjdE1hbnkuanMiLCJzcmMvUXVlcnlhYmxlL1NlcXVlbmNlRXF1YWwuanMiLCJzcmMvUXVlcnlhYmxlL1NpbmdsZS5qcyIsInNyYy9RdWVyeWFibGUvU2luZ2xlT3JEZWZhdWx0LmpzIiwic3JjL1F1ZXJ5YWJsZS9Ta2lwLmpzIiwic3JjL1F1ZXJ5YWJsZS9Ta2lwTGFzdC5qcyIsInNyYy9RdWVyeWFibGUvU2tpcFdoaWxlLmpzIiwic3JjL1F1ZXJ5YWJsZS9TdGVwLmpzIiwic3JjL1F1ZXJ5YWJsZS9TdW0uanMiLCJzcmMvUXVlcnlhYmxlL1Rha2UuanMiLCJzcmMvUXVlcnlhYmxlL1Rha2VMYXN0LmpzIiwic3JjL1F1ZXJ5YWJsZS9UYWtlV2hpbGUuanMiLCJzcmMvUXVlcnlhYmxlL1RvQ29udmVyc2lvbnMuanMiLCJzcmMvUXVlcnlhYmxlL1VuaW9uLmpzIiwic3JjL1F1ZXJ5YWJsZS9VbmlvbkJ5LmpzIiwic3JjL1F1ZXJ5YWJsZS9XaGVyZS5qcyIsInNyYy9RdWVyeWFibGUvWmlwLmpzIiwic3JjL1R5cGVzL0dyb3VwaW5nLmpzIiwic3JjL1R5cGVzL0lDb21wYXJlci5qcyIsInNyYy9UeXBlcy9JRXF1YWxpdHlDb21wYXJlci5qcyIsInNyYy9UeXBlcy9Mb29rdXAuanMiLCJzcmMvVHlwZXMvTm9uZVR5cGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDek9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IE1ha2VHZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuLi9HZW5lcmF0b3JzL01ha2VHZW5lcmF0b3JcIik7XG5jb25zdCBBZ2dyZWdhdGVfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvQWdncmVnYXRlXCIpO1xuY29uc3QgQWxsXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0FsbFwiKTtcbmNvbnN0IEFueV8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9BbnlcIik7XG5jb25zdCBBcHBlbmRfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvQXBwZW5kXCIpO1xuY29uc3QgQXZlcmFnZV8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9BdmVyYWdlXCIpO1xuY29uc3QgQ2h1bmtfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvQ2h1bmtcIik7XG5jb25zdCBDb25jYXRfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvQ29uY2F0XCIpO1xuY29uc3QgQ29udGFpbnNfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvQ29udGFpbnNcIik7XG5jb25zdCBDb3VudF8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9Db3VudFwiKTtcbmNvbnN0IENyb3NzSm9pbl8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9Dcm9zc0pvaW5cIik7XG5jb25zdCBEZWZhdWx0SWZFbXB0eV8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9EZWZhdWx0SWZFbXB0eVwiKTtcbmNvbnN0IERpc3RpbmN0XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0Rpc3RpbmN0XCIpO1xuY29uc3QgRGlzdGluY3RCeV8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9EaXN0aW5jdEJ5XCIpO1xuY29uc3QgRWxlbWVudEF0XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0VsZW1lbnRBdFwiKTtcbmNvbnN0IEVsZW1lbnRBdE9yRGVmYXVsdF8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9FbGVtZW50QXRPckRlZmF1bHRcIik7XG5jb25zdCBFbXB0eV8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9FbXB0eVwiKTtcbmNvbnN0IEV4Y2VwdF8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9FeGNlcHRcIik7XG5jb25zdCBFeGNlcHRCeV8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9FeGNlcHRCeVwiKTtcbmNvbnN0IEZpcnN0XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0ZpcnN0XCIpO1xuY29uc3QgRmlyc3RPckRlZmF1bHRfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvRmlyc3RPckRlZmF1bHRcIik7XG5jb25zdCBGb3JFYWNoXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0ZvckVhY2hcIik7XG5jb25zdCBGdWxsSm9pbl8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9GdWxsSm9pblwiKTtcbmNvbnN0IEdyb3VwQnlfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvR3JvdXBCeVwiKTtcbmNvbnN0IEdyb3VwSm9pbl8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9Hcm91cEpvaW5cIik7XG5jb25zdCBJbm5lckpvaW5fMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvSW5uZXJKb2luXCIpO1xuY29uc3QgSW50ZXJzZWN0XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0ludGVyc2VjdFwiKTtcbmNvbnN0IEludGVyc2VjdEJ5XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0ludGVyc2VjdEJ5XCIpO1xuY29uc3QgSm9pbl8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9Kb2luXCIpO1xuY29uc3QgTGFzdF8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9MYXN0XCIpO1xuY29uc3QgTGFzdE9yRGVmYXVsdF8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9MYXN0T3JEZWZhdWx0XCIpO1xuY29uc3QgTGVmdEpvaW5fMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvTGVmdEpvaW5cIik7XG5jb25zdCBMb25nQ291bnRfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvTG9uZ0NvdW50XCIpO1xuY29uc3QgTWF4XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL01heFwiKTtcbmNvbnN0IE1heEJ5XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL01heEJ5XCIpO1xuY29uc3QgTWF4T3JEZWZhdWx0XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL01heE9yRGVmYXVsdFwiKTtcbmNvbnN0IE1pbl8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9NaW5cIik7XG5jb25zdCBNaW5CeV8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9NaW5CeVwiKTtcbmNvbnN0IE1pbk9yRGVmYXVsdF8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9NaW5PckRlZmF1bHRcIik7XG5jb25zdCBPZlR5cGVfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvT2ZUeXBlXCIpO1xuY29uc3QgT3V0ZXJKb2luXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL091dGVySm9pblwiKTtcbmNvbnN0IFByZXBlbmRfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvUHJlcGVuZFwiKTtcbmNvbnN0IFJlcGxpY2F0ZV8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9SZXBsaWNhdGVcIik7XG5jb25zdCBSZXZlcnNlXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL1JldmVyc2VcIik7XG5jb25zdCBSaWdodEpvaW5fMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvUmlnaHRKb2luXCIpO1xuY29uc3QgU2VsZWN0XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL1NlbGVjdFwiKTtcbmNvbnN0IFNlbGVjdE1hbnlfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvU2VsZWN0TWFueVwiKTtcbmNvbnN0IFNlcXVlbmNlRXF1YWxfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvU2VxdWVuY2VFcXVhbFwiKTtcbmNvbnN0IFNpbmdsZV8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9TaW5nbGVcIik7XG5jb25zdCBTaW5nbGVPckRlZmF1bHRfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvU2luZ2xlT3JEZWZhdWx0XCIpO1xuY29uc3QgU2tpcF8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9Ta2lwXCIpO1xuY29uc3QgU2tpcExhc3RfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvU2tpcExhc3RcIik7XG5jb25zdCBTa2lwV2hpbGVfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvU2tpcFdoaWxlXCIpO1xuY29uc3QgU3RlcF8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9TdGVwXCIpO1xuY29uc3QgU3VtXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL1N1bVwiKTtcbmNvbnN0IFRha2VfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvVGFrZVwiKTtcbmNvbnN0IFRha2VMYXN0XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL1Rha2VMYXN0XCIpO1xuY29uc3QgVGFrZVdoaWxlXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL1Rha2VXaGlsZVwiKTtcbmNvbnN0IFRvQ29udmVyc2lvbnNfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvVG9Db252ZXJzaW9uc1wiKTtcbmNvbnN0IFVuaW9uXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL1VuaW9uXCIpO1xuY29uc3QgVW5pb25CeV8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9VbmlvbkJ5XCIpO1xuY29uc3QgV2hlcmVfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvV2hlcmVcIik7XG5jb25zdCBaaXBfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvWmlwXCIpO1xuY2xhc3MgRW51bWVyYWJsZSB7XG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICAvLyBUaGlzIGlzIGhhY2t5IGJ1dCBsZXRzIG1lIHNwbGl0IHRoaXMgR0lBTlQgY2xhc3MgdXAgaW50byBhIGZldyBkb3plbiBmaWxlcy5cbiAgICAgICAgdGhpcy5hZ2dyZWdhdGVfcV8gPSBBZ2dyZWdhdGVfMS5hZ2dyZWdhdGU7XG4gICAgICAgIHRoaXMuYWxsX3FfID0gQWxsXzEuYWxsO1xuICAgICAgICB0aGlzLmFueV9xXyA9IEFueV8xLmFueV9xXztcbiAgICAgICAgdGhpcy5hcHBlbmRfcV8gPSBBcHBlbmRfMS5hcHBlbmQ7XG4gICAgICAgIHRoaXMuYXZlcmFnZV9xXyA9IEF2ZXJhZ2VfMS5hdmVyYWdlO1xuICAgICAgICAvLyBUaGVyZSdzIG5vIHdheSB0byBkbyAoTnVtYmVyKWZvbyBpbiBKYXZhU2NyaXB0LCBhbmQgY2FzdGluZyBpbiBUeXBlU2NyaXB0IGlzbid0IGVtaXR0ZWQuXG4gICAgICAgIC8vIFNvIHRoZSBjYXN0IGlzIGJlaW5nIGFsaWFzZWQgdG8gc2VsZWN0IHNvIHlvdSBjYW4gZG8gZm9vLmNhc3QobnVtID0+IE51bWJlcihudW0pKVxuICAgICAgICB0aGlzLmNhc3RfcV8gPSBTZWxlY3RfMS5zZWxlY3Q7XG4gICAgICAgIHRoaXMuY2h1bmtfcV8gPSBDaHVua18xLmNodW5rO1xuICAgICAgICB0aGlzLmNvbmNhdF9xXyA9IENvbmNhdF8xLmNvbmNhdDtcbiAgICAgICAgdGhpcy5jb250YWluc19xXyA9IENvbnRhaW5zXzEuY29udGFpbnM7XG4gICAgICAgIHRoaXMuY291bnRfcV8gPSBDb3VudF8xLmNvdW50O1xuICAgICAgICB0aGlzLmNyb3NzSm9pbl9xXyA9IENyb3NzSm9pbl8xLmNyb3NzSm9pbjtcbiAgICAgICAgdGhpcy5kZWZhdWx0SWZFbXB0eV9xXyA9IERlZmF1bHRJZkVtcHR5XzEuZGVmYXVsdElmRW1wdHk7XG4gICAgICAgIHRoaXMuZGlzdGluY3RfcV8gPSBEaXN0aW5jdF8xLmRpc3RpbmN0O1xuICAgICAgICB0aGlzLmRpc3RpbmN0QnlfcV8gPSBEaXN0aW5jdEJ5XzEuZGlzdGluY3RCeTtcbiAgICAgICAgdGhpcy5lbGVtZW50QXRfcV8gPSBFbGVtZW50QXRfMS5lbGVtZW50QXQ7XG4gICAgICAgIHRoaXMuZWxlbWVudEF0T3JEZWZhdWx0X3FfID0gRWxlbWVudEF0T3JEZWZhdWx0XzEuZWxlbWVudEF0T3JEZWZhdWx0O1xuICAgICAgICB0aGlzLmVtcHR5X3FfID0gRW1wdHlfMS5lbXB0eTtcbiAgICAgICAgdGhpcy5leGNlcHRfcV8gPSBFeGNlcHRfMS5leGNlcHQ7XG4gICAgICAgIHRoaXMuZXhjZXB0QnlfcV8gPSBFeGNlcHRCeV8xLmV4Y2VwdEJ5O1xuICAgICAgICB0aGlzLmZpcnN0X3FfID0gRmlyc3RfMS5maXJzdDtcbiAgICAgICAgdGhpcy5maXJzdE9yRGVmYXVsdF9xXyA9IEZpcnN0T3JEZWZhdWx0XzEuZmlyc3RPckRlZmF1bHQ7XG4gICAgICAgIHRoaXMuZm9yRWFjaF9xXyA9IEZvckVhY2hfMS5mb3JFYWNoO1xuICAgICAgICB0aGlzLmZ1bGxKb2luX3FfID0gRnVsbEpvaW5fMS5mdWxsSm9pbjtcbiAgICAgICAgdGhpcy5ncm91cEJ5X3FfID0gR3JvdXBCeV8xLmdyb3VwQnk7XG4gICAgICAgIHRoaXMuZ3JvdXBKb2luX3FfID0gR3JvdXBKb2luXzEuZ3JvdXBKb2luO1xuICAgICAgICB0aGlzLmlubmVySm9pbl9xXyA9IElubmVySm9pbl8xLmlubmVySm9pbjtcbiAgICAgICAgdGhpcy5pbnRlcnNlY3RfcV8gPSBJbnRlcnNlY3RfMS5pbnRlcnNlY3Q7XG4gICAgICAgIHRoaXMuaW50ZXJzZWN0QnlfcV8gPSBJbnRlcnNlY3RCeV8xLmludGVyc2VjdEJ5O1xuICAgICAgICB0aGlzLmpvaW5fcV8gPSBKb2luXzEuam9pbjtcbiAgICAgICAgdGhpcy5sYXN0X3FfID0gTGFzdF8xLmxhc3Q7XG4gICAgICAgIHRoaXMubGFzdE9yRGVmYXVsdF9xXyA9IExhc3RPckRlZmF1bHRfMS5sYXN0T3JEZWZhdWx0O1xuICAgICAgICB0aGlzLmxlZnRKb2luX3FfID0gTGVmdEpvaW5fMS5sZWZ0Sm9pbjtcbiAgICAgICAgdGhpcy5sb25nQ291bnRfcV8gPSBMb25nQ291bnRfMS5sb25nQ291bnQ7XG4gICAgICAgIHRoaXMubWF4X3FfID0gTWF4XzEubWF4O1xuICAgICAgICB0aGlzLm1heEJ5X3FfID0gTWF4QnlfMS5tYXhCeTtcbiAgICAgICAgdGhpcy5tYXhPckRlZmF1bHRfcV8gPSBNYXhPckRlZmF1bHRfMS5tYXhPckRlZmF1bHQ7XG4gICAgICAgIHRoaXMubWluX3FfID0gTWluXzEubWluO1xuICAgICAgICB0aGlzLm1pbkJ5X3FfID0gTWluQnlfMS5taW5CeTtcbiAgICAgICAgdGhpcy5taW5PckRlZmF1bHRfcV8gPSBNaW5PckRlZmF1bHRfMS5taW5PckRlZmF1bHQ7XG4gICAgICAgIHRoaXMub2ZUeXBlX3FfID0gT2ZUeXBlXzEub2ZUeXBlO1xuICAgICAgICB0aGlzLm91dGVySm9pbl9xXyA9IE91dGVySm9pbl8xLm91dGVySm9pbjtcbiAgICAgICAgdGhpcy5wcmVwZW5kX3FfID0gUHJlcGVuZF8xLnByZXBlbmQ7XG4gICAgICAgIHRoaXMucmVwbGljYXRlX3FfID0gUmVwbGljYXRlXzEucmVwbGljYXRlO1xuICAgICAgICB0aGlzLnJldmVyc2VfcV8gPSBSZXZlcnNlXzEucmV2ZXJzZTtcbiAgICAgICAgdGhpcy5yaWdodEpvaW5fcV8gPSBSaWdodEpvaW5fMS5yaWdodEpvaW47XG4gICAgICAgIHRoaXMuc2VsZWN0X3FfID0gU2VsZWN0XzEuc2VsZWN0O1xuICAgICAgICB0aGlzLnNlbGVjdE1hbnlfcV8gPSBTZWxlY3RNYW55XzEuc2VsZWN0TWFueTtcbiAgICAgICAgdGhpcy5zZXF1ZW5jZUVxdWFsX3FfID0gU2VxdWVuY2VFcXVhbF8xLnNlcXVlbmNlRXF1YWw7XG4gICAgICAgIHRoaXMuc2luZ2xlX3FfID0gU2luZ2xlXzEuc2luZ2xlO1xuICAgICAgICB0aGlzLnNpbmdsZU9yRGVmYXVsdF9xXyA9IFNpbmdsZU9yRGVmYXVsdF8xLnNpbmdsZU9yRGVmYXVsdDtcbiAgICAgICAgdGhpcy5za2lwX3FfID0gU2tpcF8xLnNraXA7XG4gICAgICAgIHRoaXMuc2tpcExhc3RfcV8gPSBTa2lwTGFzdF8xLnNraXBMYXN0O1xuICAgICAgICB0aGlzLnNraXBXaGlsZV9xXyA9IFNraXBXaGlsZV8xLnNraXBXaGlsZTtcbiAgICAgICAgdGhpcy5zdGVwX3FfID0gU3RlcF8xLnN0ZXA7XG4gICAgICAgIHRoaXMuc3VtX3FfID0gU3VtXzEuc3VtO1xuICAgICAgICB0aGlzLnRha2VfcV8gPSBUYWtlXzEudGFrZTtcbiAgICAgICAgdGhpcy50YWtlTGFzdF9xXyA9IFRha2VMYXN0XzEudGFrZUxhc3Q7XG4gICAgICAgIHRoaXMudGFrZVdoaWxlX3FfID0gVGFrZVdoaWxlXzEudGFrZVdoaWxlO1xuICAgICAgICB0aGlzLnRvQXJyYXlfcV8gPSBUb0NvbnZlcnNpb25zXzEudG9BcnJheTtcbiAgICAgICAgdGhpcy50b0RpY3Rpb25hcnlfcV8gPSBUb0NvbnZlcnNpb25zXzEudG9EaWN0aW9uYXJ5O1xuICAgICAgICB0aGlzLnRvSGFzaFNldF9xXyA9IFRvQ29udmVyc2lvbnNfMS50b0hhc2hTZXQ7XG4gICAgICAgIHRoaXMudG9MaXN0X3FfID0gVG9Db252ZXJzaW9uc18xLnRvQXJyYXk7XG4gICAgICAgIHRoaXMudG9Mb29rdXBfcV8gPSBUb0NvbnZlcnNpb25zXzEudG9Mb29rdXA7XG4gICAgICAgIHRoaXMudG9NYXBfcV8gPSBUb0NvbnZlcnNpb25zXzEudG9NYXA7XG4gICAgICAgIHRoaXMudW5pb25fcV8gPSBVbmlvbl8xLnVuaW9uO1xuICAgICAgICB0aGlzLnVuaW9uQnlfcV8gPSBVbmlvbkJ5XzEudW5pb25CeTtcbiAgICAgICAgdGhpcy53aGVyZV9xXyA9IFdoZXJlXzEud2hlcmU7XG4gICAgICAgIHRoaXMuemlwX3FfID0gWmlwXzEuemlwO1xuICAgICAgICB0aGlzLl9jYWNoZSA9IFtdO1xuICAgICAgICB0aGlzLl9pc0Nsb3NlZCA9IGZhbHNlO1xuICAgICAgICAvLyBOb3JtYWxseSwgd2UnZCBnbyBhaGVhZCBhbmQgc2F5IHRoZSBkYXRhIHNob3VsZCBiZSBhbiBhcnJheSwgbm90aGluZyBidXQuXG4gICAgICAgIC8vIEJ1dCBsZXQncyBiZSBmbGV4aWJsZSBhbmQgYWxsb3cgYW55dGhpbmcuIElmIGl0J3Mgbm90IGl0ZXJhYmxlLCB0aGVuIGl0J2xsIGJlY29tZSBhIG9uZS1pdGVtIGl0ZXJhdG9yLlxuICAgICAgICB0aGlzLl9zb3VyY2UgPSB0aGlzLl9lbnN1cmVCYWNrdXAoTWFrZUdlbmVyYXRvcl8xLm1ha2VHZW5lcmF0b3IoZGF0YSkpO1xuICAgIH1cbiAgICBzdGF0aWMgcmFuZ2VfcV8oc3RhcnQsIGxlbikge1xuICAgICAgICBpZiAobGVuIDwgMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQXJndW1lbnQgb3V0IG9mIHJhbmdlLlwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJdCdzIGEgcGFpbiB0byByZW1lbWJlciB0aGUgZnVuY3Rpb24qe30oKSBzeW50YXggaGVyZS5cbiAgICAgICAgcmV0dXJuIG5ldyBFbnVtZXJhYmxlKGZ1bmN0aW9uKiBfcmFuZ2UoKSB7XG4gICAgICAgICAgICBsZXQgaSA9IHN0YXJ0O1xuICAgICAgICAgICAgY29uc3QgbWF4dmFsID0gc3RhcnQgKyBsZW47XG4gICAgICAgICAgICB3aGlsZSAoaSA8IG1heHZhbCkge1xuICAgICAgICAgICAgICAgIHlpZWxkIGk7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KCkpO1xuICAgIH1cbiAgICBzdGF0aWMgcmVwZWF0X3FfKGVsZW1lbnQsIGxlbikge1xuICAgICAgICBpZiAobGVuIDwgMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQXJndW1lbnQgb3V0IG9mIHJhbmdlLlwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJdCdzIGEgcGFpbiB0byByZW1lbWJlciB0aGUgZnVuY3Rpb24qe30oKSBzeW50YXggaGVyZS5cbiAgICAgICAgcmV0dXJuIG5ldyBFbnVtZXJhYmxlKGZ1bmN0aW9uKiBfcmVwZWF0KCkge1xuICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBlbGVtZW50O1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSgpKTtcbiAgICB9XG4gICAgZ2V0IF9kYXRhKCkge1xuICAgICAgICAvLyBUaGVyZSdzIG5vdCBhIGxvdCBvZiBjYWxsIGZvciBzZWxlY3RpbmcgZnJvbSBhbiBlbnVtZXJhYmxlIG1vcmUgdGhhbiBvbmNlLCBidXQgc29tZW9uZSBtaWdodFxuICAgICAgICAvLyB3YW50IHRvIGRvIGl0LiBJbiBDIyB0aGUgb25seSByZWFsIHRpbWUgdGhpcyBoYXBwZW5zIGlzIHdoZW4geW91IHVzZSB0aGUgZGVidWdnZXIsIGJ1dCBpdCBkb2VzIGhhcHBlbi5cbiAgICAgICAgLy8gQnV0IHdoZW4gZGF0YSBoYXMgYmVlbiBmZXRjaGVkIGZyb20gdGhlIGdlbmVyYXRvciwgaXQgYmVjb21lcyBjbG9zZWQsIGFuZCBldmVyeSBnZW5lcmF0b3IgaW4gaXRzXG4gICAgICAgIC8vIHNvdXJjZSBpcyBhbHNvIGNsb3NlZC4gVGhpcyBpcyBidWlsdCBpbiB0byBKUyBhbmQgbm90IHNvbWV0aGluZyB3ZSBjYW4gY2hhbmdlLlxuICAgICAgICAvLyBCdXQgd2UgY2FuIGNhY2hlIHRoZSBkYXRhIHdoZW4gd2UgZmV0Y2ggaXQgYW5kIHJldHVybiB0aGUgY2FjaGUgaWYgY2xvc2VkLlxuICAgICAgICBpZiAodGhpcy5faXNDbG9zZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jYWNoZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fc291cmNlO1xuICAgIH1cbiAgICAqW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLl9kYXRhKSB7XG4gICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybih2YWx1ZSkge1xuICAgICAgICAvLyBGb3Igc29tZSByZWFzb24sIFR5cGVTY3JpcHQgZG9lcyBub3QgbGlrZSB0aGlzLiBJdCB0aGlua3MgW1N5bWJvbC5pdGVyYXRvcl0oKSBtaWdodCBiZSB1bmRlZmluZWQsXG4gICAgICAgIC8vIGV2ZW4gd2hlbiBpdCBpcyBjbGVhcmx5IGRlZmluZWQgYSBmZXcgbGluZXMgdXAuXG4gICAgICAgIGNvbnN0IGludGVybmFsSXRlcmF0b3IgPSB0aGlzW1N5bWJvbC5pdGVyYXRvcl0oKTtcbiAgICAgICAgcmV0dXJuIGludGVybmFsSXRlcmF0b3IucmV0dXJuKHZhbHVlKTtcbiAgICB9XG4gICAgdGhyb3coZSkge1xuICAgICAgICAvLyBGb3Igc29tZSByZWFzb24sIFR5cGVzY3JpcHQgZG9lcyBub3QgbGlrZSB0aGlzLiBJdCB0aGlua3MgW1N5bWJvbC5pdGVyYXRvcl0oKSBtaWdodCBiZSB1bmRlZmluZWQsXG4gICAgICAgIC8vIGV2ZW4gd2hlbiBpdCBpcyBjbGVhcmx5IGRlZmluZWQgYSBmZXcgbGluZXMgdXAuXG4gICAgICAgIGNvbnN0IGludGVybmFsSXRlcmF0b3IgPSB0aGlzW1N5bWJvbC5pdGVyYXRvcl0oKTtcbiAgICAgICAgcmV0dXJuIGludGVybmFsSXRlcmF0b3IudGhyb3coZSk7XG4gICAgfVxuICAgIG5leHQoKSB7XG4gICAgICAgIC8vIEJ1dCBpdCdzIG9rIHdpdGggdGhlIGV4YWN0IHNhbWUgY29kZSBoZXJlLiBHbyBmaWd1cmUuXG4gICAgICAgIGNvbnN0IGludGVybmFsSXRlcmF0b3IgPSB0aGlzW1N5bWJvbC5pdGVyYXRvcl0oKTtcbiAgICAgICAgcmV0dXJuIGludGVybmFsSXRlcmF0b3IubmV4dCgpO1xuICAgIH1cbiAgICB0b0pTT04oKSB7XG4gICAgICAgIC8vIFdyaXRpbmcgYW4gRW51bWVyYWJsZSB0byBKU09OIGV4aGF1c3RzIHRoZSBlbnVtZXJhdG9yLlxuICAgICAgICByZXR1cm4gWy4uLnRoaXNdO1xuICAgIH1cbiAgICB0cnlHZXROb25FbnVtZXJhdGVkQ291bnRfcV8ob2JqKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc0Nsb3NlZCkge1xuICAgICAgICAgICAgLy8gV2UgZG9uJ3QgaGF2ZSBvdXQgdmFycyBpbiBKUyBzbyB3ZSBoYXZlIHRvIHVzZSBhbiBvYmplY3QgcmVmZXJlbmNlLlxuICAgICAgICAgICAgaWYgKG9iaikge1xuICAgICAgICAgICAgICAgIG9iai52YWx1ZSA9IHRoaXMuX2NhY2hlLmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIG5vdCBjbG9zZWQsIHRoaXMgaXMgYSBnZW5lcmF0b3IsIGFuZCB3ZSBjYW4ndCBjb3VudCBpdCB3aXRob3V0IGVudW1lcmF0aW5nIGl0LlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIFRoaXMgaGVscGVyIGFsbG93cyBtZXRob2RzIGRlY2xhcmVkIGluIG90aGVyIGZpbGVzIHRvIHVzZSBnZW5lcmF0b3IgZnVuY3Rpb25zIHdpdGhvdXQgcmVmZXJlbmNpbmcgdGhpcy5fZGF0YSAocmVxdWlyaW5nIGl0XG4gICAgLy8gdG8gYmUgcHVibGljKSBvciB1c2luZyB0aGUgKGZ1bmN0aW9uKigpIHt9KShkYXRhKSBzeW50YXgsIHdoaWNoIGlzIHVnbHkuXG4gICAgX2V4dGVuZChmdW5jKSB7XG4gICAgICAgIHJldHVybiBuZXcgRW51bWVyYWJsZShmdW5jKHRoaXMpKTtcbiAgICB9XG4gICAgKl9lbnN1cmVCYWNrdXAoZGF0YSkge1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5fY2FjaGUucHVzaChpdGVtKTtcbiAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faXNDbG9zZWQgPSB0cnVlO1xuICAgIH1cbn1cbmV4cG9ydHMuRW51bWVyYWJsZSA9IEVudW1lcmFibGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IElDb21wYXJlcl8xID0gcmVxdWlyZShcIi4vLi4vVHlwZXMvSUNvbXBhcmVyXCIpO1xuY29uc3QgRW51bWVyYWJsZV8xID0gcmVxdWlyZShcIi4vRW51bWVyYWJsZVwiKTtcbmNsYXNzIE9yZGVyZWRFbnVtZXJhYmxlIGV4dGVuZHMgRW51bWVyYWJsZV8xLkVudW1lcmFibGUge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEsIG9yZGVyQnksIGNvbXBhcmVyLCBkZXNjZW5kaW5nID0gZmFsc2UpIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIHRoaXMuX3NvcnRlcnMgPSBbXTtcbiAgICAgICAgdGhpcy5fc29ydGVycy5wdXNoKHsgb3JkZXJCeSwgY29tcGFyZXIsIGRlc2NlbmRpbmc6IGRlc2NlbmRpbmcgfSk7XG4gICAgfVxuICAgICpbU3ltYm9sLml0ZXJhdG9yXSgpIHtcbiAgICAgICAgLy8gTmVlZCB0byBzb3J0IHRoZSBkYXRhLiBUaGlzIG5lZWRzIHRvIHByb2Nlc3MgdGhlIGZ1bGwgbGlzdCwgYmVjYXVzZSB0aGUgbGFzdCByZWNvcmQgY291bGQgYmUgdGhlIG9uZVxuICAgICAgICAvLyB0aGF0IG5lZWRzIHRvIGdvIGZpcnN0LlxuICAgICAgICAvLyBUd28gcG9zc2libGUgYXBwcm9hY2hlcyBoZXJlLiBPbmUgaXMgdG8gcmVwZWF0ZWRseSBhdHRhY2sgdGhlIGxpc3QsIGdvaW5nIGFmdGVyIHRoZSBtaW4gcmVjb3JkIGFuZFxuICAgICAgICAvLyByZXR1cm5pbmcgaXQsIHdoaWNoIGlzIGhlYXZ5IG9uIHRoZSBDUFUgYnV0IGxpZ2h0IG9uIG1lbW9yeSwgb3Igd2hhdCBJJ20gZ29pbmcgdG8gZG8sIHdoaWNoIGlzIGxvYWRcbiAgICAgICAgLy8gYW4gYXJyYXkgYW5kIHVzZSB0aGUgYnVpbHQtaW4gc29ydCgpIG1ldGhvZCwgd2hpY2ggaXMgaGVhdnkgb24gbWVtb3J5IGJ1dCBsaWdodCBvbiBDUFUuXG4gICAgICAgIGxldCBzb3J0aW5nRnVuY3Rpb247XG4gICAgICAgIGZvciAoY29uc3QgaGF0IG9mIHRoaXMuX3NvcnRlcnMpIHtcbiAgICAgICAgICAgIHNvcnRpbmdGdW5jdGlvbiA9IGJ1aWxkU29ydGVyKGhhdC5vcmRlckJ5LCBoYXQuY29tcGFyZXIsIGhhdC5kZXNjZW5kaW5nLCBzb3J0aW5nRnVuY3Rpb24pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNvcnRlZERhdGEgPSBbLi4udGhpcy5fZGF0YV0uc29ydChzb3J0aW5nRnVuY3Rpb24pO1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygc29ydGVkRGF0YSkge1xuICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aGVuQnlfcV8ob3JkZXJCeSwgY29tcGFyZXIpIHtcbiAgICAgICAgaWYgKCFvcmRlckJ5KSB7XG4gICAgICAgICAgICBvcmRlckJ5ID0gKChvKSA9PiBvKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zb3J0ZXJzLnB1c2goeyBvcmRlckJ5LCBjb21wYXJlciwgZGVzY2VuZGluZzogZmFsc2UgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB0aGVuQnlEZXNjZW5kaW5nX3FfKG9yZGVyQnksIGNvbXBhcmVyKSB7XG4gICAgICAgIGlmICghb3JkZXJCeSkge1xuICAgICAgICAgICAgb3JkZXJCeSA9ICgobykgPT4gbyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc29ydGVycy5wdXNoKHsgb3JkZXJCeSwgY29tcGFyZXIsIGRlc2NlbmRpbmc6IHRydWUgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cbmV4cG9ydHMuT3JkZXJlZEVudW1lcmFibGUgPSBPcmRlcmVkRW51bWVyYWJsZTtcbmZ1bmN0aW9uIGJ1aWxkU29ydGVyKGtleVNlbGVjdG9yLCBjb21wYXJlciwgZGVzY2VuZGluZyA9IGZhbHNlLCBpbml0aWFsKSB7XG4gICAgbGV0IGNvbXBhcmUgPSBJQ29tcGFyZXJfMS5leHRyYWN0Q29tcGFyZXIoY29tcGFyZXIpO1xuICAgIGlmICghY29tcGFyZSkge1xuICAgICAgICBjb21wYXJlID0gSUNvbXBhcmVyXzEuZGVmYXVsdENvbXBhcmVyO1xuICAgIH1cbiAgICBpZiAoaW5pdGlhbCkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gX3RoZW5CeSh4LCB5KSB7XG4gICAgICAgICAgICBjb25zdCBrZXkxID0ga2V5U2VsZWN0b3IoeCk7XG4gICAgICAgICAgICBjb25zdCBrZXkyID0ga2V5U2VsZWN0b3IoeSk7XG4gICAgICAgICAgICBpZiAoZGVzY2VuZGluZykge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbml0aWFsKHgsIHkpIHx8IGNvbXBhcmUoa2V5Miwga2V5MSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaW5pdGlhbCh4LCB5KSB8fCBjb21wYXJlKGtleTEsIGtleTIpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIF9vcmRlckJ5KHgsIHkpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleTEgPSBrZXlTZWxlY3Rvcih4KTtcbiAgICAgICAgICAgIGNvbnN0IGtleTIgPSBrZXlTZWxlY3Rvcih5KTtcbiAgICAgICAgICAgIGlmIChkZXNjZW5kaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBhcmUoa2V5Miwga2V5MSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29tcGFyZShrZXkxLCBrZXkyKTtcbiAgICAgICAgfTtcbiAgICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IEVudW1lcmFibGVfMSA9IHJlcXVpcmUoXCIuL0VudW1lcmFibGUvRW51bWVyYWJsZVwiKTtcbi8qKlxuICogSGVscGVyIHRvIGFkZCBleHRlbnNpb24gbWV0aG9kcyB0byBBcnJheSBhbmQgU2V0LiBUaGVzZSBtZXRob2RzIGR1cGxpY2F0ZSB0aGUgbmFtZXMgaW4gRW51bWVyYWJsZSwgYnV0IHdoYXQgdGhleSBkbyBpcyBjcmVhdGUgYSBuZXdcbiAqIEVudW1lcmFibGUgYW5kIHRoZW4gcGFzcyB0aGUgY2FsbCBvbndhcmQsIHNvIGl0IHNlZW1zIGFzIGlmIHRoZSBhcnJheSBpcyBFbnVtZXJhYmxlLlxuICpcbiAqIFRoaXMgY2FuIGJlIG1vZGlmaWVkIHRvIHN1cHBvcnQgYW55IG9iamVjdC4gSWYgeW91IGRvIHNvLCByZW1lbWJlciB0byBzZXQgd3JpdGFibGU6IHRydWUgc28gRW51bWVyYWJsZSBjYW4gaGF2ZSBpdHMgb3duXG4gKiBpbXBsZW1lbnRhdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZChuYW1lLCBleHRlbnNpb24pIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCBuYW1lLCB7XG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfY29udmVydFRvRW51bWVyYWJsZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRW51bWVyYWJsZV8xLkVudW1lcmFibGUodGhpcylbbmFtZV0oLi4uYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZXQucHJvdG90eXBlLCBuYW1lLCB7XG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfY29udmVydFRvRW51bWVyYWJsZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRW51bWVyYWJsZV8xLkVudW1lcmFibGUodGhpcylbbmFtZV0oLi4uYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5leHRlbmQgPSBleHRlbmQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uKiBtYWtlR2VuZXJhdG9yKGl0ZXIpIHtcbiAgICBpZiAodHlwZW9mIGl0ZXIgPT09IFwic3RyaW5nXCIgfHwgaXRlcmFibGVHdWFyZChpdGVyKSkge1xuICAgICAgICB5aWVsZCogaXRlcjtcbiAgICB9XG4gICAgZWxzZSBpZiAoYXJyYXlMaWtlR3VhcmQoaXRlcikpIHtcbiAgICAgICAgeWllbGQqIEFycmF5LmZyb20oaXRlcik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB5aWVsZCBpdGVyO1xuICAgIH1cbn1cbmV4cG9ydHMubWFrZUdlbmVyYXRvciA9IG1ha2VHZW5lcmF0b3I7XG5mdW5jdGlvbiBpdGVyYWJsZUd1YXJkKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSBcIm9iamVjdFwiICYmIG9iaiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gb2JqO1xufVxuZnVuY3Rpb24gYXJyYXlMaWtlR3VhcmQob2JqKSB7XG4gICAgLy8gSSBkb24ndCB0aGluayB0aGlzIGlzIHBlcmZlY3QgYnV0IEkgY2FuJ3QgZmluZCBhIHdheSB0byB2YWxpZGF0ZSB0aGUgb3RoZXIgcGFydCBvZiBBcnJheUxpa2UsIHRoZSBrZXkuXG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwib2JqZWN0XCIgJiYgb2JqICYmXG4gICAgICAgIFwibGVuZ3RoXCIgaW4gb2JqICYmIHR5cGVvZiBvYmoubGVuZ3RoID09PSBcIm51bWJlclwiICYmXG4gICAgICAgIG9iai5sZW5ndGggPj0gMDtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgTWFrZUdlbmVyYXRvcl8xID0gcmVxdWlyZShcIi4vTWFrZUdlbmVyYXRvclwiKTtcbi8qKlxuICogSlMgZG9lc24ndCBnaXZlIGEgd2F5IHRvIHJlc3RhcnQgYSBnZW5lcmF0b3IsIHdoaWNoIGNhdXNlcyBhIGdyZWF0IGRlYWwgb2YgdHJvdWJsZSB3aGVuIHlvdSBuZWVkIHRvIGNoZWNrIGl0IG11bHRpcGxlIHRpbWVzLlxuICogRm9yIGV4YW1wbGUsIGlmIHlvdSBkbyBhbiBpbm5lciBqb2luLCB5b3UgbmVlZCB0byBjaGVjayBlYWNoIGVsZW1lbnQgb2YgdGhlIGxlZnQgd2l0aCBlYWNoIGVsZW1lbnQgb2YgdGhlIHJpZ2h0LlxuICogWW91IG5lZWQgdGhlIGFiaWxpdHkgdG8gcmVidWlsZCB0aGUgZ2VuZXJhdG9yIGZyb20gdGhlIG9yaWdpbmFsIGl0ZXJhYmxlLiBCdXQgdGhlcmUgaXNuJ3QgYSByZWZlcmVuY2UgdG8gdGhlIG9yaWdpbmFsIGl0ZXJhYmxlIEFOWVdIRVJFLlxuICogQXMgYSByZXN1bHQsIHRoZSBvbmx5IHdheSB0byBtYWtlIHRoaXMgd29yayBpcyB0byBtYWtlIGEgY29weSBvZiB0aGUgZGF0YSBhcyB5b3UgaXRlcmF0ZSBpdC5cbiAqIFRoaXMgY291bGQgZG91YmxlIHRoZSBhbW91bnQgb2Ygc3BhY2UgbmVlZGVkLCBidXQgaXQncyBhIGxpbWl0YXRpb24gb2YgdGhlIHRlY2hub2xvZ3kuXG4gKiBXZSBkb24ndCBhY3R1YWxseSBrbm93IGlmIGEgZ2VuZXJhdG9yIGlzIGJlaW5nIHVzZWQuIFRoZSB0eXBlIGlzIFwib2JqZWN0LlwiIFNvIHlvdSBjb3VsZCBiZSB3YXN0aW5nIG1lbW9yeSBieSB1c2luZyB0aGlzLiBObyB3YXkgdG8ga25vdy5cbiAqL1xuY2xhc3MgUmVzdGFydGFibGVHZW5lcmF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKGl0ZXJhYmxlLCBmbGV4TWVtb3J5ID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5iYWNrdXAgPSBbXTtcbiAgICAgICAgdGhpcy5pdGVyYXRvciA9IGN5Y2xlR2VuZXJhdG9yKGl0ZXJhYmxlLCB0aGlzLmJhY2t1cCk7XG4gICAgICAgIHRoaXMuZmxleE1lbW9yeSA9IGZsZXhNZW1vcnk7XG4gICAgfVxuICAgIFtTeW1ib2wuaXRlcmF0b3JdKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdKCk7XG4gICAgfVxuICAgIGFzUXVlcnlhYmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVyYXRvci5hc1F1ZXJ5YWJsZSgpO1xuICAgIH1cbiAgICByZXN0YXJ0KCkge1xuICAgICAgICBpZiAodGhpcy5mbGV4TWVtb3J5KSB7XG4gICAgICAgICAgICBjb25zdCBpID0gdGhpcy5iYWNrdXAuc2xpY2UoMCk7XG4gICAgICAgICAgICB0aGlzLmJhY2t1cCA9IFtdO1xuICAgICAgICAgICAgdGhpcy5pdGVyYXRvciA9IGN5Y2xlR2VuZXJhdG9yKGksIHRoaXMuYmFja3VwKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXRlcmF0b3IgPSBNYWtlR2VuZXJhdG9yXzEubWFrZUdlbmVyYXRvcih0aGlzLmJhY2t1cCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlJlc3RhcnRhYmxlR2VuZXJhdG9yID0gUmVzdGFydGFibGVHZW5lcmF0b3I7XG5mdW5jdGlvbiogY3ljbGVHZW5lcmF0b3IoaXRlciwgYmFja3VwKSB7XG4gICAgZm9yIChjb25zdCB4IG9mIGl0ZXIpIHtcbiAgICAgICAgYmFja3VwLnB1c2goeCk7XG4gICAgICAgIHlpZWxkIHg7XG4gICAgfVxufVxuZXhwb3J0cy5jeWNsZUdlbmVyYXRvciA9IGN5Y2xlR2VuZXJhdG9yO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBFbnVtZXJhYmxlXzEgPSByZXF1aXJlKFwiLi9FbnVtZXJhYmxlL0VudW1lcmFibGVcIik7XG5jb25zdCBFeHRlbmRfMSA9IHJlcXVpcmUoXCIuL0V4dGVuZFwiKTtcbmNvbnN0IEFnZ3JlZ2F0ZV8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0FnZ3JlZ2F0ZVwiKTtcbmNvbnN0IEFsbF8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0FsbFwiKTtcbmNvbnN0IEFueV8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0FueVwiKTtcbmNvbnN0IEFwcGVuZF8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0FwcGVuZFwiKTtcbmNvbnN0IEF2ZXJhZ2VfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9BdmVyYWdlXCIpO1xuY29uc3QgQ2h1bmtfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9DaHVua1wiKTtcbmNvbnN0IENvbmNhdF8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0NvbmNhdFwiKTtcbmNvbnN0IENvbnRhaW5zXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvQ29udGFpbnNcIik7XG5jb25zdCBDb3VudF8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0NvdW50XCIpO1xuY29uc3QgQ3Jvc3NKb2luXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvQ3Jvc3NKb2luXCIpO1xuY29uc3QgRGVmYXVsdElmRW1wdHlfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9EZWZhdWx0SWZFbXB0eVwiKTtcbmNvbnN0IERpc3RpbmN0XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvRGlzdGluY3RcIik7XG5jb25zdCBEaXN0aW5jdEJ5XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvRGlzdGluY3RCeVwiKTtcbmNvbnN0IEVsZW1lbnRBdF8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0VsZW1lbnRBdFwiKTtcbmNvbnN0IEVsZW1lbnRBdE9yRGVmYXVsdF8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0VsZW1lbnRBdE9yRGVmYXVsdFwiKTtcbmNvbnN0IEVtcHR5XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvRW1wdHlcIik7XG5jb25zdCBFeGNlcHRfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9FeGNlcHRcIik7XG5jb25zdCBFeGNlcHRCeV8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0V4Y2VwdEJ5XCIpO1xuY29uc3QgRmlyc3RfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9GaXJzdFwiKTtcbmNvbnN0IEZpcnN0T3JEZWZhdWx0XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvRmlyc3RPckRlZmF1bHRcIik7XG5jb25zdCBGb3JFYWNoXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvRm9yRWFjaFwiKTtcbmNvbnN0IEZ1bGxKb2luXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvRnVsbEpvaW5cIik7XG5jb25zdCBHcm91cEJ5XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvR3JvdXBCeVwiKTtcbmNvbnN0IEdyb3VwSm9pbl8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0dyb3VwSm9pblwiKTtcbmNvbnN0IElubmVySm9pbl8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0lubmVySm9pblwiKTtcbmNvbnN0IEludGVyc2VjdF8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0ludGVyc2VjdFwiKTtcbmNvbnN0IEludGVyc2VjdEJ5XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvSW50ZXJzZWN0QnlcIik7XG5jb25zdCBKb2luXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvSm9pblwiKTtcbmNvbnN0IExhc3RfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9MYXN0XCIpO1xuY29uc3QgTGFzdE9yRGVmYXVsdF8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0xhc3RPckRlZmF1bHRcIik7XG5jb25zdCBMb25nQ291bnRfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9Mb25nQ291bnRcIik7XG5jb25zdCBNYXhfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9NYXhcIik7XG5jb25zdCBNYXhCeV8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL01heEJ5XCIpO1xuY29uc3QgTWF4T3JEZWZhdWx0XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvTWF4T3JEZWZhdWx0XCIpO1xuY29uc3QgTWluXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvTWluXCIpO1xuY29uc3QgTWluQnlfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9NaW5CeVwiKTtcbmNvbnN0IE1pbk9yRGVmYXVsdF8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL01pbk9yRGVmYXVsdFwiKTtcbmNvbnN0IE9mVHlwZV8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL09mVHlwZVwiKTtcbmNvbnN0IE9yZGVyQnlfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9PcmRlckJ5XCIpO1xuY29uc3QgT3V0ZXJKb2luXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvT3V0ZXJKb2luXCIpO1xuY29uc3QgUHJlcGVuZF8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL1ByZXBlbmRcIik7XG5jb25zdCBSZXBsaWNhdGVfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9SZXBsaWNhdGVcIik7XG5jb25zdCBSZXZlcnNlXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvUmV2ZXJzZVwiKTtcbmNvbnN0IFJpZ2h0Sm9pbl8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL1JpZ2h0Sm9pblwiKTtcbmNvbnN0IFNlbGVjdF8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL1NlbGVjdFwiKTtcbmNvbnN0IFNlbGVjdE1hbnlfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9TZWxlY3RNYW55XCIpO1xuY29uc3QgU2VxdWVuY2VFcXVhbF8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL1NlcXVlbmNlRXF1YWxcIik7XG5jb25zdCBTaW5nbGVfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9TaW5nbGVcIik7XG5jb25zdCBTaW5nbGVPckRlZmF1bHRfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9TaW5nbGVPckRlZmF1bHRcIik7XG5jb25zdCBTa2lwXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvU2tpcFwiKTtcbmNvbnN0IFNraXBMYXN0XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvU2tpcExhc3RcIik7XG5jb25zdCBTa2lwV2hpbGVfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9Ta2lwV2hpbGVcIik7XG5jb25zdCBTdGVwXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvU3RlcFwiKTtcbmNvbnN0IFN1bV8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL1N1bVwiKTtcbmNvbnN0IFRha2VfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9UYWtlXCIpO1xuY29uc3QgVGFrZUxhc3RfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9UYWtlTGFzdFwiKTtcbmNvbnN0IFRha2VXaGlsZV8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL1Rha2VXaGlsZVwiKTtcbmNvbnN0IFRvQ29udmVyc2lvbnNfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9Ub0NvbnZlcnNpb25zXCIpO1xuY29uc3QgVW5pb25fMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9VbmlvblwiKTtcbmNvbnN0IFVuaW9uQnlfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9VbmlvbkJ5XCIpO1xuY29uc3QgV2hlcmVfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9XaGVyZVwiKTtcbmNvbnN0IFppcF8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL1ppcFwiKTtcbkFycmF5LnByb3RvdHlwZS50cnlHZXROb25FbnVtZXJhdGVkQ291bnRfcV8gPSBmdW5jdGlvbiBfdHJ5R2V0Tm9uRW51bWVyYXRlZENvdW50X3FfKG9iaikge1xuICAgIC8vIHRoZXJlIGFyZSBubyBvdXQgdmFyaWFibGVzIGluIEpTLCBzbyB3ZSBoYXZlIHRvIHB1dCBpdCBpbiBhbiBvYmplY3QgcmVmZXJlbmNlLlxuICAgIGlmIChvYmopIHtcbiAgICAgICAgb2JqLnZhbHVlID0gdGhpcy5sZW5ndGg7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufTtcblNldC5wcm90b3R5cGUudHJ5R2V0Tm9uRW51bWVyYXRlZENvdW50X3FfID0gZnVuY3Rpb24gX3RyeUdldE5vbkVudW1lcmF0ZWRDb3VudF9xXyhvYmopIHtcbiAgICAvLyB0aGVyZSBhcmUgbm8gb3V0IHZhcmlhYmxlcyBpbiBKUywgc28gd2UgaGF2ZSB0byBwdXQgaXQgaW4gYW4gb2JqZWN0IHJlZmVyZW5jZS5cbiAgICBpZiAob2JqKSB7XG4gICAgICAgIG9iai52YWx1ZSA9IHRoaXMuc2l6ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59O1xuT2JqZWN0LnByb3RvdHlwZS5hc1F1ZXJ5YWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBJZiB0aGUgb2JqZWN0IGlzIGl0ZXJhYmxlLCB0aGlzIHdpbGwgYmUgYW4gb3JkaW5hcnkgZ2VuZXJhdG9yLiBJZiBpdCBpcyBub3QsXG4gICAgLy8gdGhpcyB3aWxsIGJlIGFuIGl0ZXJhYmxlIHdpdGggYSBzaW5nbGUgaXRlbS4gVGhpcyBtYWtlcyBpdCBzbyBJIGRvbid0IGhhdmUgdG9cbiAgICAvLyBndWVzcyB3aGF0IHByb3RvdHlwZXMgbmVlZCB0byBiZSBtb2RpZmllZC5cbiAgICByZXR1cm4gbmV3IEVudW1lcmFibGVfMS5FbnVtZXJhYmxlKHRoaXMpO1xufTtcblN0cmluZy5wcm90b3R5cGUuYXNRdWVyeWFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gU3RyaW5ncyBhcmUgaXRlcmFibGUsIGJ1dCBJIGRpZG4ndCB3YW50IHRvIGFkZCBhbGwgdGhlIGVudW1lcmFibGUgbWV0aG9kcyB0byB0aGVtLlxuICAgIHJldHVybiBuZXcgRW51bWVyYWJsZV8xLkVudW1lcmFibGUodGhpcyk7XG59O1xuTnVtYmVyLnByb3RvdHlwZS5hc1F1ZXJ5YWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyAoNCkuYXNRdWVyeWFibGUoKSBpcyB0cmVhdGVkIGxpa2UgcmFuZ2UoKVxuICAgIHJldHVybiBFbnVtZXJhYmxlXzEuRW51bWVyYWJsZS5yYW5nZV9xXygwLCB0aGlzKTtcbn07XG5Cb29sZWFuLnByb3RvdHlwZS5hc1F1ZXJ5YWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcykge1xuICAgICAgICAvLyB0cnVlLmFzUXVlcnlhYmxlKCkgaXMgcHJldHR5IHVzZWxlc3M6IFtmYWxzZSwgdHJ1ZV0gYXNjZW5kaW5nLiBNaWdodCBiZSB1c2VmdWwuXG4gICAgICAgIHJldHVybiBuZXcgRW51bWVyYWJsZV8xLkVudW1lcmFibGUoW2ZhbHNlLCB0cnVlXSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBmYWxzZS5hc1F1ZXJ5YWJsZSgpIGlzIGFsc28gcHJldHR5IHVzZWxlc3M6IFt0cnVlLCBmYWxzZV0gZGVzY2VuZGluZy4gTWlnaHQgYmUgdXNlZnVsLlxuICAgICAgICByZXR1cm4gbmV3IEVudW1lcmFibGVfMS5FbnVtZXJhYmxlKFt0cnVlLCBmYWxzZV0pO1xuICAgIH1cbn07XG4vLyBBZGQgc3R1YiBmdW5jdGlvbnMgb250byBBcnJheS5wcm90b3R5cGUgYW5kIFNldC5wcm90b3R5cGUgdG8gbWFrZSB0aGUgb2JqZWN0IGludG8gYW4gRW51bWVyYWJsZVxuLy8gYW5kIHRoZW4gY2FsbCB0aGUgRW51bWVyYWJsZSBtZXRob2RcbkV4dGVuZF8xLmV4dGVuZChcImFnZ3JlZ2F0ZV9xX1wiLCBBZ2dyZWdhdGVfMS5hZ2dyZWdhdGUpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwiYWxsX3FfXCIsIEFsbF8xLmFsbCk7XG5FeHRlbmRfMS5leHRlbmQoXCJhbnlfcV9cIiwgQW55XzEuYW55X3FfKTtcbkV4dGVuZF8xLmV4dGVuZChcImFwcGVuZF9xX1wiLCBBcHBlbmRfMS5hcHBlbmQpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwiYXZlcmFnZV9xX1wiLCBBdmVyYWdlXzEuYXZlcmFnZSk7XG5FeHRlbmRfMS5leHRlbmQoXCJjYXN0X3FfXCIsIFNlbGVjdF8xLnNlbGVjdCk7XG5FeHRlbmRfMS5leHRlbmQoXCJjaHVua19xX1wiLCBDaHVua18xLmNodW5rKTtcbkV4dGVuZF8xLmV4dGVuZChcImNvbmNhdF9xX1wiLCBDb25jYXRfMS5jb25jYXQpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwiY29udGFpbnNfcV9cIiwgQ29udGFpbnNfMS5jb250YWlucyk7XG5FeHRlbmRfMS5leHRlbmQoXCJjb3VudF9xX1wiLCBDb3VudF8xLmNvdW50KTtcbkV4dGVuZF8xLmV4dGVuZChcImNyb3NzSm9pbl9xX1wiLCBDcm9zc0pvaW5fMS5jcm9zc0pvaW4pO1xuRXh0ZW5kXzEuZXh0ZW5kKFwiZGVmYXVsdElmRW1wdHlfcV9cIiwgRGVmYXVsdElmRW1wdHlfMS5kZWZhdWx0SWZFbXB0eSk7XG5FeHRlbmRfMS5leHRlbmQoXCJkaXN0aW5jdF9xX1wiLCBEaXN0aW5jdF8xLmRpc3RpbmN0KTtcbkV4dGVuZF8xLmV4dGVuZChcImRpc3RpbmN0QnlfcV9cIiwgRGlzdGluY3RCeV8xLmRpc3RpbmN0QnkpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwiZWxlbWVudEF0X3FfXCIsIEVsZW1lbnRBdF8xLmVsZW1lbnRBdCk7XG5FeHRlbmRfMS5leHRlbmQoXCJlbGVtZW50QXRPckRlZmF1bHRfcV9cIiwgRWxlbWVudEF0T3JEZWZhdWx0XzEuZWxlbWVudEF0T3JEZWZhdWx0KTtcbkV4dGVuZF8xLmV4dGVuZChcImVtcHR5X3FfXCIsIEVtcHR5XzEuZW1wdHkpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwiZXhjZXB0X3FfXCIsIEV4Y2VwdF8xLmV4Y2VwdCk7XG5FeHRlbmRfMS5leHRlbmQoXCJleGNlcHRCeV9xX1wiLCBFeGNlcHRCeV8xLmV4Y2VwdEJ5KTtcbkV4dGVuZF8xLmV4dGVuZChcImZpcnN0X3FfXCIsIEZpcnN0XzEuZmlyc3QpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwiZmlyc3RPckRlZmF1bHRfcV9cIiwgRmlyc3RPckRlZmF1bHRfMS5maXJzdE9yRGVmYXVsdCk7XG5FeHRlbmRfMS5leHRlbmQoXCJmb3JFYWNoX3FfXCIsIEZvckVhY2hfMS5mb3JFYWNoKTtcbkV4dGVuZF8xLmV4dGVuZChcImZ1bGxKb2luX3FfXCIsIEZ1bGxKb2luXzEuZnVsbEpvaW4pO1xuRXh0ZW5kXzEuZXh0ZW5kKFwiZ3JvdXBCeV9xX1wiLCBHcm91cEJ5XzEuZ3JvdXBCeSk7XG5FeHRlbmRfMS5leHRlbmQoXCJncm91cEpvaW5fcV9cIiwgR3JvdXBKb2luXzEuZ3JvdXBKb2luKTtcbkV4dGVuZF8xLmV4dGVuZChcImlubmVySm9pbl9xX1wiLCBJbm5lckpvaW5fMS5pbm5lckpvaW4pO1xuRXh0ZW5kXzEuZXh0ZW5kKFwiaW50ZXJzZWN0X3FfXCIsIEludGVyc2VjdF8xLmludGVyc2VjdCk7XG5FeHRlbmRfMS5leHRlbmQoXCJpbnRlcnNlY3RCeV9xX1wiLCBJbnRlcnNlY3RCeV8xLmludGVyc2VjdEJ5KTtcbkV4dGVuZF8xLmV4dGVuZChcImpvaW5fcV9cIiwgSm9pbl8xLmpvaW4pO1xuRXh0ZW5kXzEuZXh0ZW5kKFwibGFzdF9xX1wiLCBMYXN0XzEubGFzdCk7XG5FeHRlbmRfMS5leHRlbmQoXCJsYXN0T3JEZWZhdWx0X3FfXCIsIExhc3RPckRlZmF1bHRfMS5sYXN0T3JEZWZhdWx0KTtcbkV4dGVuZF8xLmV4dGVuZChcImxlZnRKb2luX3FfXCIsIExhc3RPckRlZmF1bHRfMS5sYXN0T3JEZWZhdWx0KTtcbkV4dGVuZF8xLmV4dGVuZChcImxvbmdDb3VudF9xX1wiLCBMb25nQ291bnRfMS5sb25nQ291bnQpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwibWF4X3FfXCIsIE1heF8xLm1heCk7XG5FeHRlbmRfMS5leHRlbmQoXCJtYXhCeV9xX1wiLCBNYXhCeV8xLm1heEJ5KTtcbkV4dGVuZF8xLmV4dGVuZChcIm1heE9yRGVmYXVsdF9xX1wiLCBNYXhPckRlZmF1bHRfMS5tYXhPckRlZmF1bHQpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwibWluX3FfXCIsIE1pbl8xLm1pbik7XG5FeHRlbmRfMS5leHRlbmQoXCJtaW5CeV9xX1wiLCBNaW5CeV8xLm1pbkJ5KTtcbkV4dGVuZF8xLmV4dGVuZChcIm1pbk9yRGVmYXVsdF9xX1wiLCBNaW5PckRlZmF1bHRfMS5taW5PckRlZmF1bHQpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwib2ZUeXBlX3FfXCIsIE9mVHlwZV8xLm9mVHlwZSk7XG5FeHRlbmRfMS5leHRlbmQoXCJvcmRlckJ5X3FfXCIsIE9yZGVyQnlfMS5vcmRlckJ5KTtcbkV4dGVuZF8xLmV4dGVuZChcIm9yZGVyQnlEZXNjZW5kaW5nX3FfXCIsIE9yZGVyQnlfMS5vcmRlckJ5RGVzY2VuZGluZyk7XG5FeHRlbmRfMS5leHRlbmQoXCJvdXRlckpvaW5fcV9cIiwgT3V0ZXJKb2luXzEub3V0ZXJKb2luKTtcbkV4dGVuZF8xLmV4dGVuZChcInByZXBlbmRfcV9cIiwgUHJlcGVuZF8xLnByZXBlbmQpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwicmVwbGljYXRlX3FfXCIsIFJlcGxpY2F0ZV8xLnJlcGxpY2F0ZSk7XG5FeHRlbmRfMS5leHRlbmQoXCJyZXZlcnNlX3FfXCIsIFJldmVyc2VfMS5yZXZlcnNlKTtcbkV4dGVuZF8xLmV4dGVuZChcInJpZ2h0Sm9pbl9xX1wiLCBSaWdodEpvaW5fMS5yaWdodEpvaW4pO1xuRXh0ZW5kXzEuZXh0ZW5kKFwic2VsZWN0X3FfXCIsIFNlbGVjdF8xLnNlbGVjdCk7XG5FeHRlbmRfMS5leHRlbmQoXCJzZWxlY3RNYW55X3FfXCIsIFNlbGVjdE1hbnlfMS5zZWxlY3RNYW55KTtcbkV4dGVuZF8xLmV4dGVuZChcInNlcXVlbmNlRXF1YWxfcV9cIiwgU2VxdWVuY2VFcXVhbF8xLnNlcXVlbmNlRXF1YWwpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwic2luZ2xlX3FfXCIsIFNpbmdsZV8xLnNpbmdsZSk7XG5FeHRlbmRfMS5leHRlbmQoXCJzaW5nbGVPckRlZmF1bHRfcV9cIiwgU2luZ2xlT3JEZWZhdWx0XzEuc2luZ2xlT3JEZWZhdWx0KTtcbkV4dGVuZF8xLmV4dGVuZChcInNraXBfcV9cIiwgU2tpcF8xLnNraXApO1xuRXh0ZW5kXzEuZXh0ZW5kKFwic2tpcExhc3RfcV9cIiwgU2tpcExhc3RfMS5za2lwTGFzdCk7XG5FeHRlbmRfMS5leHRlbmQoXCJza2lwV2hpbGVfcV9cIiwgU2tpcFdoaWxlXzEuc2tpcFdoaWxlKTtcbkV4dGVuZF8xLmV4dGVuZChcInN0ZXBfcV9cIiwgU3RlcF8xLnN0ZXApO1xuRXh0ZW5kXzEuZXh0ZW5kKFwic3VtX3FfXCIsIFN1bV8xLnN1bSk7XG5FeHRlbmRfMS5leHRlbmQoXCJ0YWtlX3FfXCIsIFRha2VfMS50YWtlKTtcbkV4dGVuZF8xLmV4dGVuZChcInRha2VMYXN0X3FfXCIsIFRha2VMYXN0XzEudGFrZUxhc3QpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwidGFrZVdoaWxlX3FfXCIsIFRha2VXaGlsZV8xLnRha2VXaGlsZSk7XG5FeHRlbmRfMS5leHRlbmQoXCJ0b0FycmF5X3FfXCIsIFRvQ29udmVyc2lvbnNfMS50b0FycmF5KTtcbkV4dGVuZF8xLmV4dGVuZChcInRvRGljdGlvbmFyeV9xX1wiLCBUb0NvbnZlcnNpb25zXzEudG9EaWN0aW9uYXJ5KTtcbkV4dGVuZF8xLmV4dGVuZChcInRvTGlzdF9xX1wiLCBUb0NvbnZlcnNpb25zXzEudG9BcnJheSk7XG5FeHRlbmRfMS5leHRlbmQoXCJ0b0xvb2t1cF9xX1wiLCBUb0NvbnZlcnNpb25zXzEudG9Mb29rdXApO1xuRXh0ZW5kXzEuZXh0ZW5kKFwidG9IYXNoU2V0X3FfXCIsIFRvQ29udmVyc2lvbnNfMS50b0hhc2hTZXQpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwidG9NYXBfcV9cIiwgVG9Db252ZXJzaW9uc18xLnRvTWFwKTtcbkV4dGVuZF8xLmV4dGVuZChcInVuaW9uX3FfXCIsIFVuaW9uXzEudW5pb24pO1xuRXh0ZW5kXzEuZXh0ZW5kKFwidW5pb25CeV9xX1wiLCBVbmlvbkJ5XzEudW5pb25CeSk7XG5FeHRlbmRfMS5leHRlbmQoXCJ3aGVyZV9xX1wiLCBXaGVyZV8xLndoZXJlKTtcbkV4dGVuZF8xLmV4dGVuZChcInppcF9xX1wiLCBaaXBfMS56aXApO1xuLy8gQXMgYSB3b3JrYXJvdW5kIGZvciBvcmRlcmJ5IChqYXZhc2NyaXB0IGNhbid0IGNyZWF0ZSBhIGNsYXNzIHRoYXQgcmVmZXJlbmNlcyBhIGRlc2NlbmRhbnQgY2xhc3MpLFxuLy8gYWRkIHRoZXNlIHRvIHRoZSBFbnVtZXJhYmxlIGNsYXNzIGluIGEgd2F5IHRoYXQgZG9lc24ndCBleHBsb2RlXG5FbnVtZXJhYmxlXzEuRW51bWVyYWJsZS5wcm90b3R5cGUub3JkZXJCeV9xXyA9IE9yZGVyQnlfMS5vcmRlckJ5O1xuRW51bWVyYWJsZV8xLkVudW1lcmFibGUucHJvdG90eXBlLm9yZGVyQnlEZXNjZW5kaW5nX3FfID0gT3JkZXJCeV8xLm9yZGVyQnlEZXNjZW5kaW5nO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIGFnZ3JlZ2F0ZV9xXzogQXBwbGllcyBhbiBhY2N1bXVsYXRvciBmdW5jdGlvbiBvdmVyIGEgc2VxdWVuY2UuXG4gKiBvcHRpb25hbCBpbml0aWFsIHZhbHVlIGFjdHMgYXMgc2VlZCB2YWx1ZVxuICogb3B0aW9uYWwgc2VsZWN0RnVuY3Rpb24gc2VsZWN0cyB0aGUgcmVzdWx0XG4gKi9cbmZ1bmN0aW9uIGFnZ3JlZ2F0ZShpbml0aWFsT3JBY2N1bXVsYXRvciwgYWNjdW11bGF0b3JGdW5jdGlvbiwgc2VsZWN0RnVuY3Rpb24pIHtcbiAgICBsZXQgaW5pdGlhbFZhbHVlUHJvdmlkZWQgPSBmYWxzZTtcbiAgICBsZXQgc2VlZGVkID0gZmFsc2U7XG4gICAgbGV0IHZhbHVlO1xuICAgIGxldCBhY2N1bXVsYXRvcjtcbiAgICBsZXQgc2VsZWN0b3I7XG4gICAgLy8gVGhpcyBpcyBiYXNpY2FsbHkgdGhlIHNhbWUgYXMgcmVkdWNlLCBleGNlcHQgaXQgZG9lc24ndCByZXF1aXJlIGNvcHlpbmcgdGhlIHdob2xlIHRoaW5nIHRvIGFuIGFycmF5IGZpcnN0XG4gICAgLy8gVGhlIHdhY2sgd2F5IHRoYXQgdHlwZXNjcmlwdCBkb2VzIG92ZXJsb2FkcyByZWFsbHkgc2xvcHMgdXAgdGhlIGNvZGUgZm9yIGtlZXBpbmcgYSBsaW5xIGFwaVxuICAgIC8vIEl0IGFsc28gcmVxdWlyZWQgdHdvIHVzZSBvZiBcImFueVwiIGFib3ZlIHRoYXQgSSBkaWQgbm90IGxpa2UgZG9pbmcuXG4gICAgaWYgKCFhY2N1bXVsYXRvckZ1bmN0aW9uKSB7XG4gICAgICAgIGFjY3VtdWxhdG9yID0gaW5pdGlhbE9yQWNjdW11bGF0b3I7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpbml0aWFsVmFsdWVQcm92aWRlZCA9IHRydWU7XG4gICAgICAgIHNlZWRlZCA9IHRydWU7XG4gICAgICAgIHZhbHVlID0gaW5pdGlhbE9yQWNjdW11bGF0b3I7XG4gICAgICAgIGFjY3VtdWxhdG9yID0gYWNjdW11bGF0b3JGdW5jdGlvbjtcbiAgICAgICAgc2VsZWN0b3IgPSBzZWxlY3RGdW5jdGlvbjtcbiAgICB9XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgbm8gc2VlZCwgdGhlbiB0aGUgZmlyc3QgdmFsdWUgaXMgdXNlZCBhcyB0aGUgc2VlZFxuICAgICAgICAvLyBBZnRlciB0aGUgZmlyc3QgaXRlbSwgaXQgaXMgcG9wdWxhdGVkLiBCdXQgdHlwZXNjcmlwdCBkb2Vzbid0IGtub3cgdW5kZXJzdGFuZCB0aGF0LCBzbyBhbnkgbmVlZHMgdG8gYmUgdXNlZCBzb21ldGltZXMuXG4gICAgICAgIGlmICghc2VlZGVkKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGl0ZW07XG4gICAgICAgICAgICBzZWVkZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFsdWUgPSBhY2N1bXVsYXRvcih2YWx1ZSwgaXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQyMgb25seSB0aHJvd3MgYW4gZXJyb3IgaW4gdGhlIG92ZXJsb2FkIHdpdGhvdXQgYSBzZWVkIHZhbHVlLlxuICAgIGlmICghc2VlZGVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNlcXVlbmNlIGNvbnRhaW5zIG5vIGVsZW1lbnRzXCIpO1xuICAgIH1cbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIHNlbGVjdG9yKHZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIFR5cGVzY3JpcHQgZG9lc24ndCB1bmRlcnN0YW5kIHRoYXQgX3ZhbHVlIGlzIG5vdCB1bmRlZmluZWQgYWZ0ZXIgdGhlIF92YWx1ZSA9IGl0ZW0gbGluZSAodW5sZXNzIHRoZSBpdGVyYWJsZSB0eXBlIGFsbG93cyBpdClcbiAgICAgICAgLy8gVW5sZXNzIHRoZSBpdGVyYXRvciBjb250YWlucyB1bmRlZmluZWQsIG9mIGNvdXJzZS4gVGhhdCdzIHRvdGFsbHkgbGVnYWwgaW4gSlNcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbn1cbmV4cG9ydHMuYWdncmVnYXRlID0gYWdncmVnYXRlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIGFsbF9xXzogRGV0ZXJtaW5lcyB3aGV0aGVyIGFsbCBlbGVtZW50cyBvZiBhIHNlcXVlbmNlIHNhdGlzZnkgYSBjb25kaXRpb24uXG4gKiBUaGlzIGNvbmRpdGlvbiBjYW4gb3B0aW9uYWxseSB0YWtlIHRoZSBpbmRleCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50ICh0aGlzIGlzIG5vdCBwcm92aWRlZCBieSB0aGUgQyMgdmVyc2lvbilcbiAqL1xuZnVuY3Rpb24gYWxsKGZpbHRlcikge1xuICAgIGlmICghZmlsdGVyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIGxldCBpbmRleCA9IDA7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgaWYgKCFmaWx0ZXIoaXRlbSwgaW5kZXgrKykpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmV4cG9ydHMuYWxsID0gYWxsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIGFueV9xXzogRGV0ZXJtaW5lcyB3aGV0aGVyIGFueSBlbGVtZW50cyBvZiBhIHNlcXVlbmNlIHNhdGlzZnkgYW4gb3B0aW9uYWwgY29uZGl0aW9uXG4gKi9cbmZ1bmN0aW9uIGFueV9xXyhmaWx0ZXIpIHtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcykge1xuICAgICAgICBpZiAoIWZpbHRlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZpbHRlcihpdGVtKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0cy5hbnlfcV8gPSBhbnlfcV87XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogYXBwZW5kX3FfOiBBcHBlbmRzIGEgdmFsdWUgdG8gdGhlIGVuZCBvZiB0aGUgc2VxdWVuY2VcbiAqL1xuZnVuY3Rpb24gYXBwZW5kKG5ld0l0ZW0pIHtcbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfYXBwZW5kKGRhdGEpIHtcbiAgICAgICAgeWllbGQqIGRhdGE7XG4gICAgICAgIHlpZWxkIG5ld0l0ZW07XG4gICAgfSk7XG59XG5leHBvcnRzLmFwcGVuZCA9IGFwcGVuZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgTm9uZVR5cGVfMSA9IHJlcXVpcmUoXCIuLi9UeXBlcy9Ob25lVHlwZVwiKTtcbi8qKlxuICogYXZlcmFnZV9xXzogY29tcHV0ZXMgdGhlIGF2ZXJhZ2Ugb2YgYSBzZXF1ZW5jZSBvZiBudW1iZXJzLlxuICogb3B0aW9uYWwgdHJhbnNmb3JtIGZ1bmN0aW9uIGxldHMgdXMgY2FsY3VsYXRlIHVzaW5nIHZhbHVlcyBvYnRhaW5lZCBieSBpbnZva2luZyBhZnVuY3Rpb24gb24gZWFjaCBlbGVtZW50IG9mIHRoZSBzZXF1ZW5jZS5cbiAqL1xuZnVuY3Rpb24gYXZlcmFnZShzZWxlY3RGdW5jdGlvbikge1xuICAgIGxldCBzdW0gPSAwO1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgbGV0IHRtcDtcbiAgICAgICAgaWYgKHNlbGVjdEZ1bmN0aW9uKSB7XG4gICAgICAgICAgICB0bXAgPSBzZWxlY3RGdW5jdGlvbihpdGVtKTtcbiAgICAgICAgICAgIC8vIE51bGxhYmxlIG51bWJlciBiZWhhdmlvdXI6IGlmIG51bGwsIHNraXAgaXRcbiAgICAgICAgICAgIGlmIChOb25lVHlwZV8xLmlzTm9uZSh0bXApKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBOdWxsYWJsZSBudW1iZXIgYmVoYXZpb3VyOiBpZiBudWxsLCBza2lwIGl0XG4gICAgICAgICAgICBpZiAoTm9uZVR5cGVfMS5pc05vbmUoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0bXAgPSBOdW1iZXIoaXRlbSk7XG4gICAgICAgIGlmIChpc05hTih0bXApKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGRhdGEgdHlwZSBmb3IgYXZlcmFnZS5cIik7XG4gICAgICAgIH1cbiAgICAgICAgc3VtID0gc3VtICsgdG1wO1xuICAgICAgICBjb3VudCsrO1xuICAgIH1cbiAgICBpZiAoIWNvdW50KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNlcXVlbmNlIGNvbnRhaW5zIG5vIGVsZW1lbnRzXCIpO1xuICAgIH1cbiAgICByZXR1cm4gc3VtIC8gY291bnQ7XG59XG5leHBvcnRzLmF2ZXJhZ2UgPSBhdmVyYWdlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIGNodW5rX3FfOiBzcGxpdHMgdGhlIGVsZW1lbnRzIG9mIGEgc2VxdWVuY2UgaW50byBjaHVua3Mgb2Ygc2l6ZSBhdCBtb3N0IHNpemVcbiAqL1xuZnVuY3Rpb24gY2h1bmsoc2l6ZSkge1xuICAgIGNvbnN0IG5ld2VudW0gPSB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF9jaHVuayhkYXRhKSB7XG4gICAgICAgIGlmICghc2l6ZSB8fCBzaXplIDw9IDEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFyZ3VtZW50IG91dCBvZiByYW5nZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY291bnRlciA9IHNpemU7XG4gICAgICAgIGxldCB0bXAgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIHRtcC5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgY291bnRlci0tO1xuICAgICAgICAgICAgaWYgKGNvdW50ZXIgPD0gMCkge1xuICAgICAgICAgICAgICAgIHlpZWxkIHRtcDtcbiAgICAgICAgICAgICAgICB0bXAgPSBbXTtcbiAgICAgICAgICAgICAgICBjb3VudGVyID0gc2l6ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodG1wLmxlbmd0aCkge1xuICAgICAgICAgICAgeWllbGQgdG1wO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ld2VudW07XG59XG5leHBvcnRzLmNodW5rID0gY2h1bms7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogY29uY2F0X3FfOiBjb25jYXRlbmF0ZXMgdHdvIHNlcXVlbmNlc1xuICovXG5mdW5jdGlvbiBjb25jYXQoc2Vjb25kKSB7XG4gICAgaWYgKCFzZWNvbmQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX2NvbmNhdChkYXRhKSB7XG4gICAgICAgIHlpZWxkKiBkYXRhO1xuICAgICAgICB5aWVsZCogc2Vjb25kO1xuICAgIH0pO1xufVxuZXhwb3J0cy5jb25jYXQgPSBjb25jYXQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IElFcXVhbGl0eUNvbXBhcmVyXzEgPSByZXF1aXJlKFwiLi4vVHlwZXMvSUVxdWFsaXR5Q29tcGFyZXJcIik7XG4vKipcbiAqIGNvbnRhaW5zX3FfOiBkZXRlcm1pbmVzIHdoZXRoZXIgYSBzZXF1ZW5jZSBjb250YWlucyBhIHNwZWNpZmllZCBlbGVtZW50XG4gKiBvcHRpb25hbCBlcXVhbGl0eUNvbXBhcmVyIGZ1bmN0aW9uIHRvIGluZGljYXRlIGlmIHJlY29yZCBtYXRjaGVzXG4gKi9cbmZ1bmN0aW9uIGNvbnRhaW5zKHZhbHVlLCBjb21wYXJlcikge1xuICAgIGNvbnN0IGNvbXBhcmUgPSBJRXF1YWxpdHlDb21wYXJlcl8xLmV4dHJhY3RFcXVhbGl0eUNvbXBhcmVyKGNvbXBhcmVyKTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcykge1xuICAgICAgICBpZiAoIWNvbXBhcmUpIHtcbiAgICAgICAgICAgIGlmIChpdGVtID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKChjb21wYXJlKGl0ZW0sIHZhbHVlKSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnRzLmNvbnRhaW5zID0gY29udGFpbnM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogY291bnRfcV86IHJldHVybnMgYSBudW1iZXIgdGhhdCByZXByZXNlbnRzIGhvdyBtYW55IGVsZW1lbnRzIGluIHRoZSBzcGVjaWZpZWQgc2VxdWVuY2Ugc2F0aXNmeSBhbiBvcHRpb25hbCBjb25kaXRpb25cbiAqL1xuZnVuY3Rpb24gY291bnQoY29uZGl0aW9uKSB7XG4gICAgbGV0IGN0ciA9IDA7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgaWYgKGNvbmRpdGlvbikge1xuICAgICAgICAgICAgaWYgKGNvbmRpdGlvbihpdGVtKSkge1xuICAgICAgICAgICAgICAgIGN0cisrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY3RyKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGN0cjtcbn1cbmV4cG9ydHMuY291bnQgPSBjb3VudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgUmVzdGFydGFibGVHZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuLi9HZW5lcmF0b3JzL1Jlc3RhcnRhYmxlR2VuZXJhdG9yXCIpO1xuLyoqXG4gKiBjcm9zc0pvaW5fcV86IENyZWF0ZSBhIHNpbXBsZSBjYXJ0ZXNpYW4gam9pbiAoZXZlcnkgcmVjb3JkIGZyb20gdGFibGUgMSBhbG9uZyB3aXRoIGV2ZXJ5IHJlY29yZCBmcm9tIHRhYmxlIDIpXG4gKi9cbmZ1bmN0aW9uIGNyb3NzSm9pbihzZWNvbmQsIHNlbGVjdEZ1bmN0aW9uKSB7XG4gICAgaWYgKCFzZWNvbmQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgbGV0IG91dHB1dDtcbiAgICBpZiAoc2VsZWN0RnVuY3Rpb24pIHtcbiAgICAgICAgb3V0cHV0ID0gc2VsZWN0RnVuY3Rpb247XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBJZiBzZWxlY3RGdW5jdGlvbiBpcyBtaXNzaW5nLCBUUmVzdWx0IGlzIFtULCBUU2Vjb25kXS4gQ2FuJ3QgbWFrZSBUeXBlU2NyaXB0IHVuZGVyc3RhbmQgdGhhdCwgdGhvdWdoLlxuICAgICAgICBvdXRwdXQgPSAoKGwsIHIpID0+IFtsLCByXSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF9jcm9zc0pvaW4oZGF0YSkge1xuICAgICAgICAvLyBXZSBuZWVkIHRoZSBhYmlsaXR5IHRvIG1hdGNoIHRoZSByaWdodCBzaWRlIGFnYWluc3QgZXZlcnkgbGVmdCBzaWRlLlxuICAgICAgICAvLyBJZiBpdCBpcyBhIGdlbmVyYXRvciwgaXQgY2FuJ3QgYmUgcmVzdGFydGVkIHRvIGFsbG93IHRoYXQuXG4gICAgICAgIGNvbnN0IHJpZ2h0R2VuID0gbmV3IFJlc3RhcnRhYmxlR2VuZXJhdG9yXzEuUmVzdGFydGFibGVHZW5lcmF0b3Ioc2Vjb25kKTtcbiAgICAgICAgZm9yIChjb25zdCBsZWZ0SXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJpZ2h0SXRlbSBvZiByaWdodEdlbikge1xuICAgICAgICAgICAgICAgIHlpZWxkIG91dHB1dChsZWZ0SXRlbSwgcmlnaHRJdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJpZ2h0R2VuLnJlc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5jcm9zc0pvaW4gPSBjcm9zc0pvaW47XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogZGVmYXVsdElmRW1wdHlfcV86IHJldHVybnMgdGhlIHNlcXVlbmNlIG9yIHRoZSAob3B0aW9uYWwpIGRlZmF1bHQgdmFsdWUgaWYgdGhlIHNlcXVlbmNlIGlzIGVtcHR5LlxuICogRGVmYXVsdCBpbiBpcyBhIHBhcmFtdGVyLiBJRiBpdCBpcyBsZWZ0IG91dCwgdW5kZWZpbmVkIGlzIHJldHVybmVkLlxuICpcbiAqIChOb3RlIHRoYXQgaW4gSmF2YVNjcmlwdCwgdW5saWtlIEMjLCB0aGVyZSdzIG5vIHdheSB0byBrbm93IHdoYXQgdHlwZSBhIHNlcXVlbmNlIGlzIHN1cHBvc2VkIHRvIGhhdmUsIGVzcGVjaWFsbHkgYW4gZW1wdHkgb25lLilcbiAqL1xuZnVuY3Rpb24gZGVmYXVsdElmRW1wdHkoZGVmYXVsdFZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX2RlZmF1bHRJZkVtcHR5KGRhdGEpIHtcbiAgICAgICAgbGV0IGVtcHR5ID0gdHJ1ZTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGVtcHR5ID0gZmFsc2U7XG4gICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbXB0eSkge1xuICAgICAgICAgICAgeWllbGQgZGVmYXVsdFZhbHVlO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLmRlZmF1bHRJZkVtcHR5ID0gZGVmYXVsdElmRW1wdHk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IElFcXVhbGl0eUNvbXBhcmVyXzEgPSByZXF1aXJlKFwiLi8uLi9UeXBlcy9JRXF1YWxpdHlDb21wYXJlclwiKTtcbi8qKlxuICogZGlzdGluY3RfcV86IFJldHVybnMgZGlzdGluY3QgZWxlbWVudHMgZnJvbSBhIHNlcXVlbmNlIGJ5IHVzaW5nIGFuIG9wdGlvbmFsIGVxdWFsaXR5IGNvbXBhcmVyIHRvIGNvbXBhcmUgdmFsdWVzXG4gKi9cbmZ1bmN0aW9uIGRpc3RpbmN0KGNvbXBhcmVyKSB7XG4gICAgY29uc3QgY29tcGFyZSA9IElFcXVhbGl0eUNvbXBhcmVyXzEuZXh0cmFjdEVxdWFsaXR5Q29tcGFyZXIoY29tcGFyZXIpO1xuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF9kaXN0aW5jdChkYXRhKSB7XG4gICAgICAgIC8vIEtlZXAgYSBoaXN0b3J5IG9mIGV2ZXJ5IGl0ZW0gcmV0dXJuZWQgKG5vIHdheSBhcm91bmQgdGhhdCkgYW5kIG9ubHkgcmV0dXJuIGlmIG5vdCBpbiB0aGUgbGlzdC5cbiAgICAgICAgY29uc3QgaGlzdG9yeSA9IG5ldyBTZXQoKTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChjb21wYXJlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBpbm5lckl0ZW0gb2YgaGlzdG9yeSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGFyZShpdGVtLCBpbm5lckl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpc3RvcnkuYWRkKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghKGhpc3RvcnkuaGFzKGl0ZW0pKSkge1xuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LmFkZChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuZGlzdGluY3QgPSBkaXN0aW5jdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgSUVxdWFsaXR5Q29tcGFyZXJfMSA9IHJlcXVpcmUoXCIuLy4uL1R5cGVzL0lFcXVhbGl0eUNvbXBhcmVyXCIpO1xuLyoqXG4gKiBkaXN0aW5jdEJ5X3FfOiBSZXR1cm5zIGRpc3RpbmN0IGVsZW1lbnRzIGZyb20gYSBzZXF1ZW5jZSBiYXNlZCBvbiBrZXlzIHJldHVybmVkIGJ5IGEga2V5IHNlbGVjdG9yIGZ1bmN0aW9uLlxuICogb3B0aW9uYWwgZXF1YWxpdHkgY29tcGFyZXIgY2FuIGJlIHN1cHBsaWVkIHRvIGNvbXBhcmUgdmFsdWVzXG4gKi9cbmZ1bmN0aW9uIGRpc3RpbmN0Qnkoa2V5U2VsZWN0b3IsIGNvbXBhcmVyKSB7XG4gICAgaWYgKCFrZXlTZWxlY3Rvcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICBjb25zdCBjb21wYXJlID0gSUVxdWFsaXR5Q29tcGFyZXJfMS5leHRyYWN0RXF1YWxpdHlDb21wYXJlcihjb21wYXJlcik7XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX2Rpc3RpbmN0QnkoZGF0YSkge1xuICAgICAgICAvLyBLZWVwIGEgaGlzdG9yeSBvZiBldmVyeSBpdGVtIHJldHVybmVkIChubyB3YXkgYXJvdW5kIHRoYXQpIGFuZCBvbmx5IHJldHVybiBpZiBub3QgaW4gdGhlIGxpc3QuXG4gICAgICAgIGNvbnN0IGhpc3RvcnkgPSBuZXcgU2V0KCk7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBrZXlTZWxlY3RvcihpdGVtKTtcbiAgICAgICAgICAgIGlmIChjb21wYXJlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBpbm5lckl0ZW0gb2YgaGlzdG9yeSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGFyZShrZXksIGlubmVySXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5hZGQoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIShoaXN0b3J5LmhhcyhrZXkpKSkge1xuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LmFkZChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5kaXN0aW5jdEJ5ID0gZGlzdGluY3RCeTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBlbGVtZW50QXRfcV86IFJldHVybnMgdGhlIGVsZW1lbnQgYXQgYSBzcGVjaWZpZWQgaW5kZXggaW4gYSBzZXF1ZW5jZVxuICovXG5mdW5jdGlvbiBlbGVtZW50QXQoaW5kZXgpIHtcbiAgICBsZXQgaSA9IDA7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgaWYgKGkgPT09IGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfVxuICAgICAgICBpKys7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihcIkluZGV4IG91dCBvZiByYW5nZS5cIik7XG59XG5leHBvcnRzLmVsZW1lbnRBdCA9IGVsZW1lbnRBdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBlbGVtZW50QXRPckRlZmF1bHRfcV86IFJldHVybnMgdGhlIGVsZW1lbnQgYXQgYSBzcGVjaWZpZWQgaW5kZXggaW4gYSBzZXF1ZW5jZS5cbiAqIFJldHVybnMgYW4gb3B0aW9uYWwgZGVmYXVsdCB2YWx1ZSBpZiBpbmRleCBpcyBvdXQgb2YgcmFuZ2UsIG9yIHVuZGVmaW5lZCBpZiBub3Qgc3VwcGxpZWQuXG4gKlxuICogKE5vdGUgdGhhdCBpbiBKYXZhU2NyaXB0LCB1bmxpa2UgQyMsIHRoZXJlJ3Mgbm8gd2F5IHRvIGtub3cgd2hhdCB0eXBlIGEgc2VxdWVuY2UgaXMgc3VwcG9zZWQgdG8gaGF2ZS4pXG4gKi9cbmZ1bmN0aW9uIGVsZW1lbnRBdE9yRGVmYXVsdChpbmRleCwgZGVmYXVsdFZhbHVlKSB7XG4gICAgbGV0IGkgPSAwO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzKSB7XG4gICAgICAgIGlmIChpID09PSBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgaSsrO1xuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xufVxuZXhwb3J0cy5lbGVtZW50QXRPckRlZmF1bHQgPSBlbGVtZW50QXRPckRlZmF1bHQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogZW1wdHlfcV86IFJldHVybnMgYW4gZW1wdHkgSUVudW1lcmFibGU8VD4gdGhhdCBoYXMgdGhlIHNwZWNpZmllZCB0eXBlIGFyZ3VtZW50LlxuICogTm90ZSB0aGF0IHR5cGVzIGFyZSB0eXBlc2NyaXB0LW9ubHkgZmljdGl0aW91cyBlbnRpdGllcyB0aGF0IGFyZW4ndCBlbWl0dGVkLlxuICovXG5mdW5jdGlvbiBlbXB0eSgpIHtcbiAgICByZXR1cm4gW107XG59XG5leHBvcnRzLmVtcHR5ID0gZW1wdHk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IElFcXVhbGl0eUNvbXBhcmVyXzEgPSByZXF1aXJlKFwiLi8uLi9UeXBlcy9JRXF1YWxpdHlDb21wYXJlclwiKTtcbi8qKlxuICogZXhjZXB0X3FfOiBQcm9kdWNlcyB0aGUgc2V0IGRpZmZlcmVuY2UgKGRpc3RpbmN0KSBvZiB0d28gc2VxdWVuY2VzLlxuICogb3B0aW9uYWwgZXF1YWxpdHkgY29tcGFyZXIgY2FuIGJlIHVzZWQgdG8gY29tcGFyZSB2YWx1ZXNcbiAqL1xuZnVuY3Rpb24gZXhjZXB0KHNlY29uZCwgY29tcGFyZXIpIHtcbiAgICBpZiAoIXNlY29uZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICBjb25zdCBjb21wYXJlID0gSUVxdWFsaXR5Q29tcGFyZXJfMS5leHRyYWN0RXF1YWxpdHlDb21wYXJlcihjb21wYXJlcik7XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX2V4Y2VwdChkYXRhKSB7XG4gICAgICAgIC8vIE5vIHdheSBhcm91bmQgdGhpcywgYnV0IHdlIG5lZWQgdG8ga2VlcCBhIGhpc3Rvcnkgb2YgZXZlcnkgaXRlbSByZXR1cm5lZC4gQm90aCB0aGUgZmlyc3QgYW5kIHNlY29uZCBsaXN0cy5cbiAgICAgICAgLy8gQW5kIHRoZSBzZWNvbmQgbWlnaHQgYWxzbyBiZSBhIGdlbmVyYXRvciwgc28gd2UgbmVlZCB0byBleGhhdXN0IGl0cyB2YWx1ZXMuXG4gICAgICAgIC8vIFN0YXJ0IGJ5IGxvYWRpbmcgdGhlIGhpc3Rvcnkgd2l0aCB0aGUgc2Vjb25kIHNldC4gVGhlbiwgd2UgY2FuIGRvIHdoYXQgd2UgYWxyZWFkeSBkaWQgZm9yIGRpc3RpbmN0KCkgYW5kIGl0J2xsIHB1bGwgb3V0IHRoZSBtYXRjaGVzXG4gICAgICAgIGNvbnN0IGhpc3RvcnkgPSBuZXcgU2V0KCk7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBzZWNvbmQpIHtcbiAgICAgICAgICAgIGhpc3RvcnkuYWRkKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICBpZiAoY29tcGFyZSkge1xuICAgICAgICAgICAgICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaW5uZXJJdGVtIG9mIGhpc3RvcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBhcmUoaXRlbSwgaW5uZXJJdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFmb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LmFkZChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIShoaXN0b3J5LmhhcyhpdGVtKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5hZGQoaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLmV4Y2VwdCA9IGV4Y2VwdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgSUVxdWFsaXR5Q29tcGFyZXJfMSA9IHJlcXVpcmUoXCIuLy4uL1R5cGVzL0lFcXVhbGl0eUNvbXBhcmVyXCIpO1xuLyoqXG4gKiBleGNlcHRfcV86IFByb2R1Y2VzIHRoZSBzZXQgZGlmZmVyZW5jZSBvZiB0d28gc2VxdWVuY2VzIGJhc2VkIG9uIGtleXMgKGRpc3RpbmN0IGtleXMpIHJldHVybmVkIGJ5IGEga2V5IHNlbGVjdG9yIGZ1bmN0aW9uLlxuICogb3B0aW9uYWwgZXF1YWxpdHkgY29tcGFyZXIgY2FuIGJlIHVzZWQgdG8gY29tcGFyZSB2YWx1ZXNcbiAqL1xuZnVuY3Rpb24gZXhjZXB0Qnkoc2Vjb25kLCBrZXlTZWxlY3RvciwgY29tcGFyZXIpIHtcbiAgICBpZiAoIXNlY29uZCB8fCAha2V5U2VsZWN0b3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgY29uc3QgY29tcGFyZSA9IElFcXVhbGl0eUNvbXBhcmVyXzEuZXh0cmFjdEVxdWFsaXR5Q29tcGFyZXIoY29tcGFyZXIpO1xuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF9leGNlcHRCeShkYXRhKSB7XG4gICAgICAgIC8vIE5vIHdheSBhcm91bmQgdGhpcywgYnV0IHdlIG5lZWQgdG8ga2VlcCBhIGhpc3Rvcnkgb2YgZXZlcnkgaXRlbSByZXR1cm5lZC4gQm90aCB0aGUgZmlyc3QgYW5kIHNlY29uZCBsaXN0cy5cbiAgICAgICAgLy8gQW5kIHRoZSBzZWNvbmQgbWlnaHQgYWxzbyBiZSBhIGdlbmVyYXRvciwgc28gd2UgbmVlZCB0byBleGhhdXN0IGl0cyB2YWx1ZXMuXG4gICAgICAgIGNvbnN0IGhpc3RvcnkgPSBuZXcgU2V0KCk7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBzZWNvbmQpIHtcbiAgICAgICAgICAgIGhpc3RvcnkuYWRkKGtleVNlbGVjdG9yKGl0ZW0pKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0ga2V5U2VsZWN0b3IoaXRlbSk7XG4gICAgICAgICAgICBpZiAoY29tcGFyZSkge1xuICAgICAgICAgICAgICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaW5uZXJJdGVtIG9mIGhpc3RvcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBhcmUoa2V5LCBpbm5lckl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpc3RvcnkuYWRkKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCEoaGlzdG9yeS5oYXMoa2V5KSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5hZGQoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuZXhjZXB0QnkgPSBleGNlcHRCeTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBmaXJzdF9xXzogUmV0dXJucyB0aGUgZmlyc3QgZWxlbWVudCBpbiBhIHNlcXVlbmNlLCB0aHJvd2luZyBhbiBleGNlcHRpb24gaWYgdGhlIHNlcXVlbmNlIGlzIGVtcHR5LlxuICogb3B0aW9uYWwgZmlsdGVyIGNvbmRpdGlvbiBjYW4gYmUgc3VwcGxpZWRcbiAqL1xuZnVuY3Rpb24gZmlyc3QobWF0Y2hGdW5jdGlvbikge1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzKSB7XG4gICAgICAgIGlmICghbWF0Y2hGdW5jdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobWF0Y2hGdW5jdGlvbihpdGVtKSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiU2VxdWVuY2UgaGFzIG5vIGVsZW1lbnRzLlwiKTtcbn1cbmV4cG9ydHMuZmlyc3QgPSBmaXJzdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBmaXJzdE9yRGVmYXVsdF9xXzogUmV0dXJucyB0aGUgZmlyc3QgZWxlbWVudCBpbiBhIHNlcXVlbmNlLlxuICogb3B0aW9uYWwgZmlsdGVyIGNvbmRpdGlvbiBjYW4gYmUgc3VwcGxpZWRcbiAqIElmIHRoZSBmaWx0ZXJlZCBzZXF1ZW5jZSBpcyBlbXB0eSwgaXQgcmV0dXJucyB0aGUgZGVmYXVsdCB2YWx1ZS5cbiAqIFRoZSBkZWZhdWx0IHZhbHVlIGlzIHByb3ZpZGVkIGJ5IGEgcGFyYW1ldGVyIG9yIGlzIHVuZGVmaW5lZC5cbiAqXG4gKiAoTm90ZSB0aGF0IGluIEphdmFTY3JpcHQsIHVubGlrZSBDIywgdGhlcmUncyBubyB3YXkgdG8ga25vdyB3aGF0IHR5cGUgYSBzZXF1ZW5jZSBpcyBzdXBwb3NlZCB0byBoYXZlLCBlc3BlY2lhbGx5IG5vdCBhbiBlbXB0eSBzZXF1ZW5jZS4pXG4gKlxuICogVGhlIGZvbGxvd2luZyBtZXRob2QgZXhwbGFpbmVkOiBmaXJzdE9yRGVmYXVsdF9xXyh7IGRlZmF1bHRWYWx1ZSB9OiB7IGRlZmF1bHRWYWx1ZTogVCB9KTogVDtcbiAqIEluIEphdmFTY3JpcHQsIGlmIHlvdSBjYWxsIHRoZSBtZXRob2Qgd2l0aCBhIHNpbmdsZSBwYXJhbWV0ZXIgYW5kIHdhbnQgaXQgdG8gYmUgdGhlIGRlZmF1bHQsIHRoZXJlJ3Mgbm8gY2xlYW4gd2F5IHRvIGluZGljYXRlIHRoYXQgdGhpc1xuICogaXMgd2hhdCB5b3Ugd2FudCwgaXQgYnJlYWtzIHRoZSBzdGFuZGFyZCBjYXNlLlxuICpcbiAqIENvbnNpZGVyIHRoZSBmb2xsb3dpbmc6IGFycmF5T2ZQcmVkaWNhdGVzLmZpcnN0T3JEZWZhdWx0X3FfKG15RnVuYylcbiAqIElzIHRoaXMgc3VwcG9zZWQgdG8gYmVcbiAqICAgICAgYXJyYXlPZlByZWRpY2F0ZXMud2hlcmVfcV8obXlGdW5jKS5maXJzdE9yRGVmYXVsdF9xXygpXG4gKiBvclxuICogICAgICBhcnJheU9mUHJlZGljYXRlcy5maXJzdE9yRGVmYXVsdF9xXygpIHx8IG15RnVuY1xuICpcbiAqIFRoZSBvbmx5IHRvIG1ha2UgaXQgd29yayBpcyB0byBjYWxsIGxpa2UgdGhpczpcbiAqICAgICAgYXJyYXlPZlByZWRpY2F0ZXMuZmlyc3RPckRlZmF1bHRfcV8oeyBkZWZhdWx0VmFsdWU6IHNvbWV0aGluZyB9KVxuICovXG5mdW5jdGlvbiBmaXJzdE9yRGVmYXVsdChtYXRjaEZ1bmN0aW9uLCBkZWZhdWx0VmFsdWUpIHtcbiAgICBsZXQgdGVzdGVyO1xuICAgIGlmIChtYXRjaEZ1bmN0aW9uICYmIHR5cGVvZiBtYXRjaEZ1bmN0aW9uID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGVzdGVyID0gbWF0Y2hGdW5jdGlvbjtcbiAgICB9XG4gICAgbGV0IGRlZjtcbiAgICBpZiAobWF0Y2hGdW5jdGlvbiAmJiBcImRlZmF1bHRWYWx1ZVwiIGluIG1hdGNoRnVuY3Rpb24pIHtcbiAgICAgICAgZGVmID0gbWF0Y2hGdW5jdGlvbi5kZWZhdWx0VmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBkZWYgPSBkZWZhdWx0VmFsdWU7XG4gICAgfVxuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzKSB7XG4gICAgICAgIGlmICghdGVzdGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0ZXN0ZXIoaXRlbSkpIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkZWY7XG59XG5leHBvcnRzLmZpcnN0T3JEZWZhdWx0ID0gZmlyc3RPckRlZmF1bHQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogZm9yRWFjaF9xXzogRXhlY3V0ZSBhIGNhbGxiYWNrIGZ1bmN0aW9uIG9uIGVhY2ggcm93IGluIHRoZSBlbnVtZXJhYmxlLCByZXR1cm5pbmcgbm8gcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnKSB7XG4gICAgaWYgKCFjYWxsYmFja2ZuKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIGxldCBpbmRleCA9IDA7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgY2FsbGJhY2tmbi5jYWxsKHRoaXNBcmcsIGl0ZW0sIGluZGV4KyspO1xuICAgIH1cbn1cbmV4cG9ydHMuZm9yRWFjaCA9IGZvckVhY2g7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFJlc3RhcnRhYmxlR2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi4vR2VuZXJhdG9ycy9SZXN0YXJ0YWJsZUdlbmVyYXRvclwiKTtcbi8qKlxuICogZnVsbEpvaW5fcV86IEEgZnJpZW5kbHkgaGVscGVyIHRvIGNyZWF0ZSBhIHNpbXBsZSBmdWxsIG91dGVyIGpvaW4uIFRoaXMgZm9sbG93cyB0aGUgcGF0dGVybiBvZiBpbm5lckpvaW5fcV8oKSwgd2hpY2ggY29tYmluZXMgdGhlIHR3b1xuICoga2V5IGxvb2t1cHMgYW5kIGVxdWFsaXR5IGNvbXBhcmVyIGludG8gYSBzaW5nbGUgZnVuY3Rpb24gaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIGZ1bGxKb2luKHNlY29uZCwgb24sIHNlbGVjdEZ1bmN0aW9uKSB7XG4gICAgaWYgKCFzZWNvbmQgfHwgIW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIGxldCBvdXRwdXQ7XG4gICAgaWYgKHNlbGVjdEZ1bmN0aW9uKSB7XG4gICAgICAgIG91dHB1dCA9IHNlbGVjdEZ1bmN0aW9uO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gSWYgc2VsZWN0RnVuY3Rpb24gaXMgbWlzc2luZywgVFJlc3VsdCBpcyBbVCwgVFNlY29uZF0uIENhbid0IG1ha2UgVHlwZVNjcmlwdCB1bmRlcnN0YW5kIHRoYXQsIHRob3VnaC5cbiAgICAgICAgb3V0cHV0ID0gKChsLCByKSA9PiBbbCwgcl0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfbGVmdEpvaW4oZGF0YSkge1xuICAgICAgICAvLyBTaW1wbGUgbmVzdGVkIGxvb3BzIGpvaW5cbiAgICAgICAgLy8gSWYgdGhpcyB3ZXJlIFNRTCBzZXJ2ZXIsIHNvbWUgYW5hbHlzaXMgYW5kIHByZS1maWx0ZXJpbmcgY291bGQgYmUgZG9uZSBiZWZvcmUgY29tcGFyaXNvbi5cbiAgICAgICAgLy8gVGhpcyBpc24ndCBTUUwgU2VydmVyLiBXZSBjYW4ndCBldmVuIGZpbHRlciBvdXQgTlVMTHMsIGJlY2F1c2Ugd2hhdCBpZiB0aGUgam9pbiBmdW5jdGlvbiBzYXlzIFwibGVmdCA9PSBudWxsICYmIHJpZ2h0ID09IG51bGxcIiwgbGlrZSBzb21lIGxpbnEgdG8gZW50aXR5IHF1ZXJpZXMgZG8/XG4gICAgICAgIC8vIFdlIG5lZWQgYSBwbGFjZSB0byB0cmFjayBhO2wgaXRlbXMgaW4gdGhlIHJpZ2h0IHRoYXQgZ290IHNlbnRcbiAgICAgICAgY29uc3Qgc2VudFJpZ2h0cyA9IG5ldyBTZXQoKTtcbiAgICAgICAgLy8gV2UgbmVlZCB0aGUgYWJpbGl0eSB0byBjaGVjayB0aGUgcmlnaHQgc2lkZSBhZ2FpbnN0IGV2ZXJ5IGxlZnQgc2lkZS5cbiAgICAgICAgLy8gSWYgaXQgaXMgYSBnZW5lcmF0b3IsIGl0IGNhbid0IGJlIHJlc3RhcnRlZCB0byBhbGxvdyB0aGF0LlxuICAgICAgICBjb25zdCByaWdodEdlbiA9IG5ldyBSZXN0YXJ0YWJsZUdlbmVyYXRvcl8xLlJlc3RhcnRhYmxlR2VuZXJhdG9yKHNlY29uZCk7XG4gICAgICAgIGZvciAoY29uc3QgbGVmdEl0ZW0gb2YgZGF0YSkge1xuICAgICAgICAgICAgbGV0IGxlZnRNYXRjaGVkID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJpZ2h0SXRlbSBvZiByaWdodEdlbikge1xuICAgICAgICAgICAgICAgIGlmIChvbihsZWZ0SXRlbSwgcmlnaHRJdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0TWF0Y2hlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHNlbnRSaWdodHMuYWRkKHJpZ2h0SXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIG91dHB1dChsZWZ0SXRlbSwgcmlnaHRJdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWxlZnRNYXRjaGVkKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgb3V0cHV0KGxlZnRJdGVtLCB1bmRlZmluZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmlnaHRHZW4ucmVzdGFydCgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIE5vdyBnbyB0aHJvdWdoIHRoZSByaWdodCBzaWRlIG9uY2UgbW9yZSBhbmQgc2VuZCBhbnl0aGluZyB0aGF0IGRpZG4ndCBnZXQgc2VudFxuICAgICAgICBmb3IgKGNvbnN0IHJpZ2h0SXRlbSBvZiByaWdodEdlbikge1xuICAgICAgICAgICAgaWYgKCFzZW50UmlnaHRzLmhhcyhyaWdodEl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgb3V0cHV0KHVuZGVmaW5lZCwgcmlnaHRJdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5mdWxsSm9pbiA9IGZ1bGxKb2luO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBJRXF1YWxpdHlDb21wYXJlcl8xID0gcmVxdWlyZShcIi4vLi4vVHlwZXMvSUVxdWFsaXR5Q29tcGFyZXJcIik7XG5jb25zdCBHcm91cGluZ18xID0gcmVxdWlyZShcIi4uL1R5cGVzL0dyb3VwaW5nXCIpO1xuLyoqXG4gKiBHcm91cHMgdGhlIGVsZW1lbnRzIG9mIGEgc2VxdWVuY2UgYWNjb3JkaW5nIHRvIGEgc3BlY2lmaWVkIGtleSBzZWxlY3RvciBmdW5jdGlvbiBhbmQgY3JlYXRlcyBhIHJlc3VsdCB2YWx1ZSBmcm9tIGVhY2ggZ3JvdXAgYW5kIGl0cyBrZXkuXG4gKiBvcHRpb25hbCBlbGVtZW50IHNlbGVjdGlvbiBmdW5jdGlvbiAoZWl0aGVyIHNlY29uZCBhcmd1bWVudCBvciBlbmNsb3NlZCBpbiBhIHsgZWxlbWVudDogZnVuYyB9IG9iamVjdClcbiAqIG9wdGlvbmFsIG91dHB1dCBwcm9qZWN0aW9uIGZ1bmN0aW9uIChlaXRoZXIgdGhpcmQgYXJndW1lbnQgb3IgZW5jbG9zZWQgaW4gYSB7IHByb2plY3Q6IGZ1bmMgfSBvYmplY3QpXG4gKiBvcHRpb25hbCBlcXVhbGl0eSBjb21wYXJlciBmdW5jdGlvbiAoZWl0aGVyIGZvdXJ0aCBhcmd1bWVudCBvciBlbmNsb3NlZCBpbiBhIHsgZXF1YWxzOiBmdW5jIH0gb2JqZWN0KVxuICpcbiAqIFRoZSBudW1iZXIgb2Ygb3ZlcmxvYWRzIGluIEMjIGlzIEhVR0UuIElmIEkgd2VyZSBtaWNyb3NvZnQsIEkgd291bGRuJ3QgaGF2ZSBkb25lIHRoaXMsIGFzIGVsZW1lbnRGdW5jdGlvbiBjb3VsZCBiZVxuICogaGFuZGxlZCBpbiBrZXlTZWxlY3RvciBhbmQgb3V0cHV0RnVudGlvbiBjb3VsZCBiZSBoYW5kbGVkIGJ5IGEgc2VsZWN0KCkgZm9sbG93aW5nIHRoZSBncm91cEJ5KCkuXG4gKiBUaGVyZSdzIGEgcG9pbnQgYmV5b25kIHdoaWNoIG1vcmUgb3B0aW9ucyBiZWNvbWVzIGxlc3MgaGVscGZ1bCByYXRoZXIgdGhhbiBtb3JlLlxuICogU2VlIGpvaW4oKSBmb3IgYW5vdGhlciBleGFtcGxlIG9mIGZ1bmN0aW9ucyBwZW9wbGUgaGF2ZSB0byBnb29nbGUgYmVmb3JlIHVzaW5nLlxuICpcbiAqIFRoZSB3ZWFrbmVzc2VzIG9mIHRoZSB0eXBlc2NyaXB0IHR5cGluZyBhbmQgb3ZlcmxvYWQgc3lzdGVtcyByZWFsbHkgc2hpbmUgdGhyb3VnaCBpbiBhIGdpYW50IGxpa2UgdGhpcy5cbiAqIElpbiBqYXZhc2NyaXB0IGl0J3Mgbm90IHBvc3NpYmxlIHRvIGtub3cgd2hhdCBpbnB1dHMgYXJlIHByb3ZpZGVkIGluIGEgbG90IG9mIHBsYWNlcy4gVGhlIGRpZmZlcmVuY2UgYmV0d2VlblxuICogYSBwcm9qZWN0aW9uIGZ1bmN0aW9uIGFuZCBhIGtleSBzZWxlY3RvciBmdW5jdGlvbiBpcyB0aGF0IG9uZSB0YWtlcyBvbmUgaW5wdXQgYW5kIG9uZSB0YWtlcyB0d28uIFRoaXMgaXMgZWFzeSBmb3JcbiAqIEMjIHRvIGRldGVjdCwgYnV0IGluIGphdmFzY3JpcHQsIGFsbCBmdW5jdGlvbnMgYXJlIGp1c3QgZnVuY3Rpb24oKSB0aGF0IHRha2UgYW55IG51bWJlciBvZiBpbnB1dHMuIFR5cGVzY3JpcHRcbiAqIGNhbiBrbm93IHdoaWNoIG9uZSB5b3UncmUgdXNpbmcsIGJ1dCB0aGUgZW1pdHRlZCBqYXZhc2NyaXB0IGNvZGUgaGFzIG5vIGlkZWEuXG4gKlxuICogVGhpcyBvdmVybG9hZCBzZXR1cCBpcyBpbXBvc3NpYmxlIGluIEpTOlxuICogICAgICBmdW5jdGlvbiBncm91cEJ5X3FfKGtleVNlbGVjdG9yLCBlbGVtZW50RnVuY3Rpb24/OiBmdW5jdGlvbik7XG4gKiAgICAgIGZ1bmN0aW9uIGdyb3VwQnlfcV8oa2V5U2VsZWN0b3IsIG91dHB1dEZ1bmN0aW9uPzogZnVuY3Rpb24pO1xuICogYmVjYXVzZSBKUyBzZWVzIG9ubHk6XG4gKiAgICAgIGZ1bmN0aW9uIGdyb3VwQnlfcV8oZnVuY3Rpb24sIGZ1bmN0aW9uKVxuICogV2hpY2ggb25lIHdhcyBpdD8gTm8gY2x1ZS5cbiAqXG4gKiBCZWNhdXNlIG9mIHRoaXMsIGFzIGxvbmcgYXMgeW91IHBhc3NcbiAqICBvbmx5IGtleVNlbGVjdG9yLCBvclxuICogIG9ubHkga2V5U2VsZWN0b3IgYW5kIGVsZW1lbnRGdW5jdGlvbiwgb1xuICogIG9ubHkga2V5U2VsZWN0b3IsIGVsZW1lbnRGdW5jdGlvbiwgb3V0cHV0RnVuY3Rpb24sIG9yXG4gKiAgb25seSBrZXlTZWxlY3RvciwgZWxlbWVudEZ1bmN0aW9uLCBvdXRwdXRGdW5jdGlvbiBhbmQgY29tcGFyZXIsXG4gKiB5b3UgZG9uJ3QgaGF2ZSB0byBkbyBhbnl0aGluZyBzcGVjaWFsLCBidXQgYW55IG92ZXJsb2FkIHdoaWNoIG9taXRzIGEgcHJldmlvdXMgdmFsdWUgbXVzdCBiZSBpbiB0aGUgZm9ybSBvZlxuICogICAgICBjb25zdCByZXN1bHQgPSBhcnIuZ3JvdXBCeV9xXyhrZXlTZWxlY3RvciwgeyBwYXJhbTM6IHZhbHVlIH0pXG4gKiB3aGljaCB0cmFuc2xhdGVzIHRvXG4gKiAgICAgICBjb25zdCByZXN1bHQgPSBhcnIuZ3JvdXBCeV9xXyhrZXlTZWxlY3RvciwgdW5kZWZpbmVkLCB2YWx1ZSlcbiAqL1xuZnVuY3Rpb24gZ3JvdXBCeShncm91cEZ1bmN0aW9uLCBlbGVtZW50RnVuY3Rpb24sIG91dHB1dEZ1bmN0aW9uLCBjb21wYXJlcikge1xuICAgIGlmICghZ3JvdXBGdW5jdGlvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICBsZXQgZWxlbWVudG9yO1xuICAgIGlmIChlbGVtZW50RnVuY3Rpb24gJiYgdHlwZW9mIGVsZW1lbnRGdW5jdGlvbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGVsZW1lbnRvciA9IGVsZW1lbnRGdW5jdGlvbjtcbiAgICB9XG4gICAgZWxzZSBpZiAoZWxlbWVudEZ1bmN0aW9uICYmIFwiZWxlbWVudFwiIGluIGVsZW1lbnRGdW5jdGlvbikge1xuICAgICAgICBlbGVtZW50b3IgPSBlbGVtZW50RnVuY3Rpb24uZWxlbWVudDtcbiAgICB9XG4gICAgbGV0IHByb2plY3RvcjtcbiAgICBpZiAob3V0cHV0RnVuY3Rpb24gJiYgdHlwZW9mIG91dHB1dEZ1bmN0aW9uID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcHJvamVjdG9yID0gb3V0cHV0RnVuY3Rpb247XG4gICAgfVxuICAgIGVsc2UgaWYgKGVsZW1lbnRGdW5jdGlvbiAmJiBcInByb2plY3RcIiBpbiBlbGVtZW50RnVuY3Rpb24pIHtcbiAgICAgICAgcHJvamVjdG9yID0gZWxlbWVudEZ1bmN0aW9uLnByb2plY3Q7XG4gICAgfVxuICAgIGVsc2UgaWYgKG91dHB1dEZ1bmN0aW9uICYmIFwicHJvamVjdFwiIGluIG91dHB1dEZ1bmN0aW9uKSB7XG4gICAgICAgIHByb2plY3RvciA9IG91dHB1dEZ1bmN0aW9uLnByb2plY3Q7XG4gICAgfVxuICAgIGxldCBlcXVhbGl6ZXI7XG4gICAgaWYgKGNvbXBhcmVyICYmIHR5cGVvZiBjb21wYXJlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGVxdWFsaXplciA9IElFcXVhbGl0eUNvbXBhcmVyXzEuZXh0cmFjdEVxdWFsaXR5Q29tcGFyZXIoY29tcGFyZXIpO1xuICAgIH1cbiAgICBlbHNlIGlmIChlbGVtZW50RnVuY3Rpb24gJiYgXCJlcXVhbHNcIiBpbiBlbGVtZW50RnVuY3Rpb24pIHtcbiAgICAgICAgZXF1YWxpemVyID0gZWxlbWVudEZ1bmN0aW9uLmVxdWFscztcbiAgICB9XG4gICAgZWxzZSBpZiAob3V0cHV0RnVuY3Rpb24gJiYgXCJlcXVhbHNcIiBpbiBvdXRwdXRGdW5jdGlvbikge1xuICAgICAgICBlcXVhbGl6ZXIgPSBvdXRwdXRGdW5jdGlvbi5lcXVhbHM7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNvbXBhcmVyICYmIFwiZXF1YWxzXCIgaW4gY29tcGFyZXIpIHtcbiAgICAgICAgZXF1YWxpemVyID0gY29tcGFyZXIuZXF1YWxzO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfZ3JvdXBCeShkYXRhKSB7XG4gICAgICAgIC8vIEV2ZW4gdGhvdWdoIHRoaXMgaXMgcmV0dXJuaW5nIGFzIGlmIGl0J3MgZGVmZXJyZWQgZXhlY3V0aW9uLCBpdCdzIG5vdCByZWFsbHkgZGVmZXJyZWQuIEl0IGhhcyB0byBwcm9jZXNzIHRoZSBmdWxsIGxpc3RcbiAgICAgICAgLy8gdG8ga25vdyB3aGF0IHRpbWVzIGVhY2ggaW5kaXZpZHVhbCBrZXkgYXBwZWFycy5cbiAgICAgICAgY29uc3QgY2FjaGUgPSBuZXcgTWFwKCk7XG4gICAgICAgIGZvciAoY29uc3Qgcm93IG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IGV4dHJhY3RlZEtleSA9IGdyb3VwRnVuY3Rpb24ocm93KTtcbiAgICAgICAgICAgIGxldCBtYXRjaDtcbiAgICAgICAgICAgIGlmIChlcXVhbGl6ZXIpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGlubmVySXRlbSBvZiBjYWNoZS5rZXlzKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVxdWFsaXplcihpbm5lckl0ZW0sIGV4dHJhY3RlZEtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoID0gY2FjaGUuZ2V0KGlubmVySXRlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG1hdGNoID0gY2FjaGUuZ2V0KGV4dHJhY3RlZEtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgICAgICBtYXRjaC5hZGQocm93KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhY2hlLnNldChleHRyYWN0ZWRLZXksIG5ldyBHcm91cGluZ18xLkdyb3VwaW5nKGV4dHJhY3RlZEtleSwgcm93LCBlbGVtZW50b3IpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IHJvdyBvZiBjYWNoZS5lbnRyaWVzKCkpIHtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0b3IpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBwcm9qZWN0b3Iocm93WzBdLCByb3dbMV0udmFsdWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGVsZW1lbnRvcikge1xuICAgICAgICAgICAgICAgIHlpZWxkIHJvd1sxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHlpZWxkIHJvd1sxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5ncm91cEJ5ID0gZ3JvdXBCeTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgUmVzdGFydGFibGVHZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuLi9HZW5lcmF0b3JzL1Jlc3RhcnRhYmxlR2VuZXJhdG9yXCIpO1xuY29uc3QgR3JvdXBpbmdfMSA9IHJlcXVpcmUoXCIuLi9UeXBlcy9Hcm91cGluZ1wiKTtcbmNvbnN0IElFcXVhbGl0eUNvbXBhcmVyXzEgPSByZXF1aXJlKFwiLi4vVHlwZXMvSUVxdWFsaXR5Q29tcGFyZXJcIik7XG4vKipcbiAqIGdyb3VwSm9pbl9xXzogQ29ycmVsYXRlcyB0aGUgZWxlbWVudHMgb2YgdHdvIHNlcXVlbmNlcyBiYXNlZCBvbiBrZXkgZXF1YWxpdHkgYW5kIGdyb3VwcyB0aGUgcmVzdWx0cy5cbiAqXG4gKiBUaGlzIGlzIGEgc29ydCBvZiBhIGNvbWJpbmF0aW9uIG9mIG91dGVyIGpvaW4gYW5kIGhhbGYgYSBncm91cCBieSAob25seSB0aGUgc2Vjb25kIHNlcXVlbmNlIGlzIGdyb3VwZWQpLlxuICogVGhlIG91dHB1dCBmdW5jdGlvbiwgd2hpY2ggZGV0ZXJtaW5lcyB0aGUgb3V0cHV0LCBpcyByZXF1aXJlZC4gVGhpcyBkb2Vzbid0IHNlZW0gdXNlZnVsIGVub3VnaCBmb3IgbWUgdG8gY29tZSB1cCB3aXRoIGEgZGVmYXVsdCBvdXRwdXQuXG4gKi9cbmZ1bmN0aW9uIGdyb3VwSm9pbihzZWNvbmQsIGZpcnN0S2V5U2VsZWN0b3IsIHNlY29uZEtleVNlbGVjdG9yLCBvdXRwdXRGdW5jdGlvbiwgY29tcGFyZXIpIHtcbiAgICBpZiAoIXNlY29uZCB8fCAhZmlyc3RLZXlTZWxlY3RvciB8fCAhc2Vjb25kS2V5U2VsZWN0b3IgfHwgIW91dHB1dEZ1bmN0aW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIGNvbnN0IGNvbXBhcmUgPSBJRXF1YWxpdHlDb21wYXJlcl8xLmV4dHJhY3RFcXVhbGl0eUNvbXBhcmVyKGNvbXBhcmVyKTtcbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfZ3JvdXBKb2luKGRhdGEpIHtcbiAgICAgICAgLy8gV2UgbmVlZCB0aGUgYWJpbGl0eSB0byBjaGVjayB0aGUgcmlnaHQgc2lkZSBhZ2FpbnN0IGV2ZXJ5IGxlZnQgc2lkZS4gXG4gICAgICAgIC8vIElmIGl0IGlzIGEgZ2VuZXJhdG9yLCBpdCBjYW4ndCBiZSByZXN0YXJ0ZWQgdG8gYWxsb3cgdGhhdC5cbiAgICAgICAgY29uc3QgcmlnaHRHZW4gPSBuZXcgUmVzdGFydGFibGVHZW5lcmF0b3JfMS5SZXN0YXJ0YWJsZUdlbmVyYXRvcihzZWNvbmQpO1xuICAgICAgICBjb25zdCByaWdodCA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGxlZnRJdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGxldCBncm91cGluZztcbiAgICAgICAgICAgIGZvciAoY29uc3QgcmlnaHRJdGVtIG9mIHJpZ2h0R2VuKSB7XG4gICAgICAgICAgICAgICAgbGV0IG1hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY29uc3QgbGVmdEtleSA9IGZpcnN0S2V5U2VsZWN0b3IobGVmdEl0ZW0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJpZ2h0S2V5ID0gc2Vjb25kS2V5U2VsZWN0b3IocmlnaHRJdGVtKTtcbiAgICAgICAgICAgICAgICBpZiAoY29tcGFyZSkge1xuICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IGNvbXBhcmUobGVmdEtleSwgcmlnaHRLZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSBsZWZ0S2V5ID09PSByaWdodEtleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChncm91cGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBpbmcuYWRkKHJpZ2h0SXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cGluZyA9IG5ldyBHcm91cGluZ18xLkdyb3VwaW5nKGxlZnRLZXksIHJpZ2h0SXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZ3JvdXBpbmcpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBvdXRwdXRGdW5jdGlvbihsZWZ0SXRlbSwgZ3JvdXBpbmcudmFsdWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHlpZWxkIG91dHB1dEZ1bmN0aW9uKGxlZnRJdGVtLCBbXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByaWdodEdlbi5yZXN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuZ3JvdXBKb2luID0gZ3JvdXBKb2luO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBSZXN0YXJ0YWJsZUdlbmVyYXRvcl8xID0gcmVxdWlyZShcIi4uL0dlbmVyYXRvcnMvUmVzdGFydGFibGVHZW5lcmF0b3JcIik7XG4vKipcbiAqIGlubmVySm9pbl9xXzogQSBmcmllbmRseSBoZWxwZXIgdG8gY3JlYXRlIGEgc2ltcGxlIGlubmVyIGpvaW4uIFRoaXMgY29tYmluZXMgdGhlIHR3byBrZXkgbG9va3VwcyBhbmQgdGhlIGN1c3RvbSBlcXVhbGl0eSBjb21wYXJlciBpbnRvIGFcbiAqIHNpbmdsZSBmdW5jdGlvbiBpbnB1dC4gRm9yIG1vc3QgcHJvZ3JhbW1lcnMsIHRoaXMgaXMgYWxsIHRoZSBjb21wbGV4aXR5IHlvdSdsbCBuZWVkLlxuICovXG5mdW5jdGlvbiBpbm5lckpvaW4oc2Vjb25kLCBvbiwgc2VsZWN0RnVuY3Rpb24pIHtcbiAgICBpZiAoIXNlY29uZCB8fCAhb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgbGV0IG91dHB1dDtcbiAgICBpZiAoc2VsZWN0RnVuY3Rpb24pIHtcbiAgICAgICAgb3V0cHV0ID0gc2VsZWN0RnVuY3Rpb247XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBJZiBzZWxlY3RGdW5jdGlvbiBpcyBtaXNzaW5nLCBUUmVzdWx0IGlzIFtULCBUU2Vjb25kXS4gQ2FuJ3QgbWFrZSBUeXBlU2NyaXB0IHVuZGVyc3RhbmQgdGhhdCwgdGhvdWdoLlxuICAgICAgICBvdXRwdXQgPSAoKGwsIHIpID0+IFtsLCByXSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF9pbm5lckpvaW4oZGF0YSkge1xuICAgICAgICAvLyBTaW1wbGUgbmVzdGVkIGxvb3BzIGpvaW5cbiAgICAgICAgLy8gSWYgdGhpcyB3ZXJlIFNRTCBzZXJ2ZXIsIHNvbWUgYW5hbHlzaXMgYW5kIHByZS1maWx0ZXJpbmcgY291bGQgYmUgZG9uZSBiZWZvcmUgY29tcGFyaXNvbi5cbiAgICAgICAgLy8gVGhpcyBpc24ndCBTUUwgU2VydmVyLiBXZSBjYW4ndCBldmVuIGZpbHRlciBvdXQgTlVMTHMsIGJlY2F1c2Ugd2hhdCBpZiB0aGUgam9pbiBmdW5jdGlvbiBzYXlzIFwibGVmdCA9PSBudWxsICYmIHJpZ2h0ID09IG51bGxcIiwgbGlrZSBzb21lIGxpbnEgdG8gZW50aXR5IHF1ZXJpZXMgZG8/XG4gICAgICAgIC8vIFRoZSByaWdodCBzaWRlIGNhbiB0aGVvcmV0aWNhbGx5IGJlIGEgZ2VuZXJhdG9yLiBXZSBkb24ndCBrbm93LCBidXQgd2UgaGF2ZSB0byB0YWtlIHRoYXQgY2hhbmNlLlxuICAgICAgICAvLyBKUyBkb2Vzbid0IGdpdmUgYSB3YXkgdG8gcmVzdGFydCBhIGdlbmVyYXRvciwgc28gd2UgY2FuIG9ubHkgY2hlY2sgcmlnaHQgb25jZSB3aXRob3V0IHNvbWUgZXh0cmEgQlMgdG8gYWxsb3cgaXQgdG8gcmVzdGFydFxuICAgICAgICBjb25zdCByaWdodEdlbiA9IG5ldyBSZXN0YXJ0YWJsZUdlbmVyYXRvcl8xLlJlc3RhcnRhYmxlR2VuZXJhdG9yKHNlY29uZCk7XG4gICAgICAgIGZvciAoY29uc3QgbGVmdEl0ZW0gb2YgZGF0YSkge1xuICAgICAgICAgICAgZm9yIChjb25zdCByaWdodEl0ZW0gb2YgcmlnaHRHZW4pIHtcbiAgICAgICAgICAgICAgICBpZiAob24obGVmdEl0ZW0sIHJpZ2h0SXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgb3V0cHV0KGxlZnRJdGVtLCByaWdodEl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJpZ2h0R2VuLnJlc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5pbm5lckpvaW4gPSBpbm5lckpvaW47XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IElFcXVhbGl0eUNvbXBhcmVyXzEgPSByZXF1aXJlKFwiLi4vVHlwZXMvSUVxdWFsaXR5Q29tcGFyZXJcIik7XG4vKipcbiAqIGludGVyc2VjdF9xXzogUHJvZHVjZXMgdGhlIHNldCBpbnRlcnNlY3Rpb24gb2YgdHdvIHNlcXVlbmNlcy5cbiAqIG9wdGlvbmFsIGVxdWFsaXR5IGNvbXBhcmVyIGNhbiBiZSBwcm92aWRlZFxuICovXG5mdW5jdGlvbiBpbnRlcnNlY3Qoc2Vjb25kLCBjb21wYXJlcikge1xuICAgIGlmICghc2Vjb25kKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIGNvbnN0IGNvbXBhcmUgPSBJRXF1YWxpdHlDb21wYXJlcl8xLmV4dHJhY3RFcXVhbGl0eUNvbXBhcmVyKGNvbXBhcmVyKTtcbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfaW50ZXJzZWN0KGRhdGEpIHtcbiAgICAgICAgY29uc3Qgc2Vjb25kU2V0ID0gbmV3IFNldCgpO1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygc2Vjb25kKSB7XG4gICAgICAgICAgICBzZWNvbmRTZXQuYWRkKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIE5vIHdheSBhcm91bmQgdGhpcywgYnV0IHdlIG5lZWQgdG8ga2VlcCBhIGhpc3Rvcnkgb2YgZXZlcnkgaXRlbSByZXR1cm5lZC4gQm90aCB0aGUgZmlyc3QgYW5kIHNlY29uZCBsaXN0cy5cbiAgICAgICAgY29uc3QgaGlzdG9yeSA9IG5ldyBTZXQoKTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChjb21wYXJlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBpbm5lckl0ZW0gb2Ygc2Vjb25kU2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21wYXJlKGl0ZW0sIGlubmVySXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEl0J3MgaW4gYm90aCBzZXRzLi4uXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBpbm5lckl0ZW0gb2YgaGlzdG9yeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBhcmUoaXRlbSwgaW5uZXJJdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJ1dCBpZiBpdCdzIGJlZW4gc2VudCBhbHJlYWR5LCBkb24ndCBzZW5kIGl0IGFnYWluLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gSWYgZm91bmQsIHRyYWNrIGFuZCBzZW5kIGl0XG4gICAgICAgICAgICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpc3RvcnkuYWRkKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChzZWNvbmRTZXQuaGFzKGl0ZW0pICYmXG4gICAgICAgICAgICAgICAgICAgICFoaXN0b3J5LmhhcyhpdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LmFkZChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuaW50ZXJzZWN0ID0gaW50ZXJzZWN0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBJRXF1YWxpdHlDb21wYXJlcl8xID0gcmVxdWlyZShcIi4uL1R5cGVzL0lFcXVhbGl0eUNvbXBhcmVyXCIpO1xuLyoqXG4gKiBpbnRlcnNlY3RCeV9xXzogUHJvZHVjZXMgdGhlIHNldCBpbnRlcnNlY3Rpb24gb2YgdHdvIHNlcXVlbmNlcyBiYXNlZCBvbiBrZXlzIHJldHVybmVkIGJ5IGEga2V5IHNlbGVjdG9yIGZ1bmN0aW9uLlxuICogb3B0aW9uYWwgZXF1YWxpdHkgY29tcGFyZXIgY2FuIGJlIHByb3ZpZGVkXG4gKi9cbmZ1bmN0aW9uIGludGVyc2VjdEJ5KHNlY29uZCwga2V5U2VsZWN0b3IsIGNvbXBhcmVyKSB7XG4gICAgaWYgKCFzZWNvbmQgfHwgIWtleVNlbGVjdG9yKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIGNvbnN0IGNvbXBhcmUgPSBJRXF1YWxpdHlDb21wYXJlcl8xLmV4dHJhY3RFcXVhbGl0eUNvbXBhcmVyKGNvbXBhcmVyKTtcbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfaW50ZXJzZWN0QnkoZGF0YSkge1xuICAgICAgICBjb25zdCBzZWNvbmRTZXQgPSBuZXcgU2V0KCk7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBzZWNvbmQpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGtleVNlbGVjdG9yKGl0ZW0pO1xuICAgICAgICAgICAgc2Vjb25kU2V0LmFkZChrZXkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIE5vIHdheSBhcm91bmQgdGhpcywgYnV0IHdlIG5lZWQgdG8ga2VlcCBhIGhpc3Rvcnkgb2YgZXZlcnkgaXRlbSByZXR1cm5lZC4gQm90aCB0aGUgZmlyc3QgYW5kIHNlY29uZCBsaXN0cy5cbiAgICAgICAgY29uc3QgaGlzdG9yeSA9IG5ldyBTZXQoKTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGtleVNlbGVjdG9yKGl0ZW0pO1xuICAgICAgICAgICAgaWYgKGNvbXBhcmUpIHtcbiAgICAgICAgICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGlubmVySXRlbSBvZiBzZWNvbmRTZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBhcmUoa2V5LCBpbm5lckl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJdCdzIGluIGJvdGggc2V0cy4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaW5uZXJJdGVtIG9mIGhpc3RvcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb21wYXJlKGtleSwgaW5uZXJJdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJ1dCBpZiBpdCdzIGJlZW4gc2VudCBhbHJlYWR5LCBkb24ndCBzZW5kIGl0IGFnYWluLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gSWYgZm91bmQsIHRyYWNrIGFuZCBzZW5kIGl0XG4gICAgICAgICAgICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpc3RvcnkuYWRkKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlY29uZFNldC5oYXMoa2V5KSAmJlxuICAgICAgICAgICAgICAgICAgICAhaGlzdG9yeS5oYXMoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LmFkZChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5pbnRlcnNlY3RCeSA9IGludGVyc2VjdEJ5O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBSZXN0YXJ0YWJsZUdlbmVyYXRvcl8xID0gcmVxdWlyZShcIi4uL0dlbmVyYXRvcnMvUmVzdGFydGFibGVHZW5lcmF0b3JcIik7XG4vKipcbiAqIGpvaW5fcV86IENvcnJlbGF0ZXMgdGhlIGVsZW1lbnRzIG9mIHR3byBzZXF1ZW5jZXMgYmFzZWQgb24gbWF0Y2hpbmcga2V5cy4gT25seSByZWNvcmRzIGFyZSByZXR1cm5lZCB3aGVuIGJvdGggc2lkZXMgbWF0Y2guXG4gKiBvcHRpb25hbCBlcXVhbGl0eSBjb21wYXJlciBjYW4gYmUgdXNlZCB0byBjb21wYXJlIGtleXMuXG4gKlxuICogSWYgdGhlIG91dHB1dCBzZWxlY3RvciBpcyBsZWZ0IG91dCwgcmVzdWx0cyBhcmUgcmV0dXJuZWQgYXMgW2ZpcnN0IHJvdywgc2Vjb25kIHJvd10uIFRoaXMgaXMgYSBjaGFuZ2UgZnJvbSBDIywgd2hpY2ggcmVxdWlyZXMgdGhlIG91dHB1dCBzZWxlY3Rvci5cbiAqXG4gKiBMZWF2aW5nIHRoZSBvdXRwdXQgc2VsZWN0b3Igb3V0IHJlcXVpcmVzIHBhc3NpbmcgY29tcGFyZXIgaW4gYXMgeyBlcXVhbHM6IGNvbXBhcmVyIH0gaWYgeW91IHdhbnQgdG8gdXNlIGl0LiBTZWUgdGhlIGxvbmcgZGlzY3Vzc2lvblxuICogaW4gR3JvdXBCeSBmb3IgZGV0YWlscy5cbiAqL1xuZnVuY3Rpb24gam9pbihzZWNvbmQsIGZpcnN0S2V5U2VsZWN0b3IsIHNlY29uZEtleVNlbGVjdG9yLCBvdXRwdXRGdW5jdGlvbiwgY29tcGFyZXIpIHtcbiAgICBpZiAoIXNlY29uZCB8fCAhZmlyc3RLZXlTZWxlY3RvciB8fCAhc2Vjb25kS2V5U2VsZWN0b3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgbGV0IG91dHB1dDtcbiAgICBsZXQgZXF1YWxpemVyO1xuICAgIGlmIChjb21wYXJlciAmJiB0eXBlb2YgY29tcGFyZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBlcXVhbGl6ZXIgPSBjb21wYXJlcjtcbiAgICB9XG4gICAgZWxzZSBpZiAoY29tcGFyZXIgJiYgXCJlcXVhbHNcIiBpbiBjb21wYXJlcikge1xuICAgICAgICBlcXVhbGl6ZXIgPSBjb21wYXJlci5lcXVhbHM7XG4gICAgfVxuICAgIGVsc2UgaWYgKG91dHB1dEZ1bmN0aW9uICYmIFwiZXF1YWxzXCIgaW4gb3V0cHV0RnVuY3Rpb24pIHtcbiAgICAgICAgZXF1YWxpemVyID0gb3V0cHV0RnVuY3Rpb24uZXF1YWxzO1xuICAgIH1cbiAgICBpZiAob3V0cHV0RnVuY3Rpb24gJiYgdHlwZW9mIG91dHB1dEZ1bmN0aW9uID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0RnVuY3Rpb247XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBJZiBvdXRwdXRGdW5jdGlvbiBpcyBtaXNzaW5nLCBUUmVzdWx0IGlzIFtULCBUU2Vjb25kXS4gQ2FuJ3QgbWFrZSBUeXBlU2NyaXB0IHVuZGVyc3RhbmQgdGhhdCwgdGhvdWdoLlxuICAgICAgICBvdXRwdXQgPSAoKGwsIHIpID0+IFtsLCByXSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF9qb2luKGRhdGEpIHtcbiAgICAgICAgLy8gU2ltcGxlIG5lc3RlZCBsb29wcyBqb2luXG4gICAgICAgIC8vIElmIHRoaXMgd2VyZSBTUUwgc2VydmVyLCBzb21lIHN0YXRpc3RpY3MgYW5kIGluZGV4IGFuYWx5c2lzIGFuZCBwcmUtZmlsdGVyaW5nIGNvdWxkIGJlIGRvbmUgYmVmb3JlIGNvbXBhcmlzb24uXG4gICAgICAgIC8vIFRoaXMgaXNuJ3QgU1FMIFNlcnZlci4gV2UgY2FuJ3QgZXZlbiBmaWx0ZXIgb3V0IE5VTExzLCBiZWNhdXNlIHdoYXQgaWYgdGhlIGpvaW4gZnVuY3Rpb24gc2F5cyBcImxlZnQgPT0gbnVsbCAmJiByaWdodCA9PSBudWxsXCIsIGxpa2Ugc29tZSBsaW5xIHRvIGVudGl0eSBxdWVyaWVzIGRvP1xuICAgICAgICAvLyBXZSBuZWVkIHRoZSBhYmlsaXR5IHRvIGNoZWNrIHRoZSByaWdodCBzaWRlIGFnYWluc3QgZXZlcnkgbGVmdCBzaWRlLlxuICAgICAgICAvLyBJZiBpdCBpcyBhIGdlbmVyYXRvciwgaXQgY2FuJ3QgYmUgcmVzdGFydGVkIHRvIGFsbG93IHRoYXQuXG4gICAgICAgIGNvbnN0IHJpZ2h0R2VuID0gbmV3IFJlc3RhcnRhYmxlR2VuZXJhdG9yXzEuUmVzdGFydGFibGVHZW5lcmF0b3Ioc2Vjb25kKTtcbiAgICAgICAgZm9yIChjb25zdCBsZWZ0SXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJpZ2h0SXRlbSBvZiByaWdodEdlbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxlZnRLZXkgPSBmaXJzdEtleVNlbGVjdG9yKGxlZnRJdGVtKTtcbiAgICAgICAgICAgICAgICBjb25zdCByaWdodEtleSA9IHNlY29uZEtleVNlbGVjdG9yKHJpZ2h0SXRlbSk7XG4gICAgICAgICAgICAgICAgbGV0IG1hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKGVxdWFsaXplcikge1xuICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IGVxdWFsaXplcihsZWZ0S2V5LCByaWdodEtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IGxlZnRLZXkgPT09IHJpZ2h0S2V5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgb3V0cHV0KGxlZnRJdGVtLCByaWdodEl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJpZ2h0R2VuLnJlc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5qb2luID0gam9pbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBsYXN0X3FfOiBSZXR1cm5zIHRoZSBsYXN0IGVsZW1lbnQgaW4gYSBzZXF1ZW5jZS4gVGFrZXMgYW4gb3B0aW9uYWwgZmlsdGVyIGNvbmRpdGlvbi5cbiAqL1xuZnVuY3Rpb24gbGFzdChtYXRjaEZ1bmN0aW9uKSB7XG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgbGV0IGxhc3RJdGVtO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzKSB7XG4gICAgICAgIGlmICghbWF0Y2hGdW5jdGlvbikge1xuICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgbGFzdEl0ZW0gPSBpdGVtO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1hdGNoRnVuY3Rpb24oaXRlbSkpIHtcbiAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIGxhc3RJdGVtID0gaXRlbTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgLy8gQ2FuJ3QgY2hlY2sgaWYgbGFzdEl0ZW0gaXMgbm90IHVuZGVmaW5lZCwgYmVjYXVzZSB0aGUgbGFzdCBpdGVtIGNvdWxkIGFjdHVhbGx5IGJlIFwidW5kZWZpbmVkXCIuXG4gICAgICAgIC8vIFR5cGVTY3JpcHQgY2FuJ3QgdGVsbCB0aGF0IGV2ZXJ5IHBsYWNlIGZvdW5kIHdhcyB0cnVlLCBsYXN0SXRlbSB3YXMgYWxzbyBzZXQ7XG4gICAgICAgIHJldHVybiBsYXN0SXRlbTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiU2VxdWVuY2UgaGFzIG5vIGVsZW1lbnRzLlwiKTtcbn1cbmV4cG9ydHMubGFzdCA9IGxhc3Q7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogbGFzdE9yRGVmYXVsdF9xXzogUmV0dXJucyB0aGUgbGFzdCBlbGVtZW50IGluIGEgc2VxdWVuY2UsIHRha2luZyBhbiBvcHRpb25hbCBmaWx0ZXIgY29uZGl0aW9uLlxuICogSWYgdGhlIGZpbHRlcmVkIHNlcXVlbmNlIGlzIGVtcHR5LCBpdCByZXR1cm5zIHRoZSBkZWZhdWx0IHZhbHVlLlxuICogVGhlIGRlZmF1bHQgdmFsdWUgaXMgcHJvdmlkZWQgYnkgYSBwYXJhbWV0ZXIgb3IgaXMgdW5kZWZpbmVkLlxuICpcbiAqIChOb3RlIHRoYXQgaW4gSmF2YVNjcmlwdCwgdW5saWtlIEMjLCB0aGVyZSdzIG5vIHdheSB0byBrbm93IHdoYXQgdHlwZSBhIHNlcXVlbmNlIGlzIHN1cHBvc2VkIHRvIGhhdmUsIGVzcGVjaWFsbHkgbm90IGFuIGVtcHR5IHNlcXVlbmNlLilcbiAqXG4gKiBJbiBKYXZhU2NyaXB0LCBpZiB5b3UgY2FsbCB0aGUgbWV0aG9kIHdpdGggYSBzaW5nbGUgcGFyYW1ldGVyIGFuZCB3YW50IGl0IHRvIGJlIHRoZSBkZWZhdWx0LCB0aGVyZSdzIG5vIGNsZWFuIHdheSB0byBpbmRpY2F0ZSB0aGF0IHRoaXNcbiAqIGlzIHdoYXQgeW91IHdhbnQsIGJlY2F1c2UgaXQgYnJlYWtzIHRoZSBjYXNlIHdoZXJlIHlvdSBwYXNzIGEgZmlsdGVyIGNvbmRpdGlvbi4gQSBzaW5nbGUgcHJlZGljYXRlIGNvdWxkIGJlIGEgZmlsdGVyIGNvbmRpdGlvbiBvciBpdFxuICogY291bGQgYmUgdGhlIGRlZmF1bHQgZm9yIGFuIGFycmF5IG9mIHByZWRpY2F0ZXMgLi4uIHlvdSBkb24ndCBrbm93LiBUaGVyZWZvcmUsIGlmIHlvdSB3YW50IHRvIHBhc3Mgb25seSBhIGRlZmF1bHQgdmFsdWUsIGNhbGwgbGlrZVxuICogdGhpczogZmlyc3RPckRlZmF1bHRfcV8oeyBkZWZhdWx0VmFsdWU6IFwiTk9UIEZPVU5EXCIgfSlcbiAqL1xuZnVuY3Rpb24gbGFzdE9yRGVmYXVsdChtYXRjaEZ1bmN0aW9uLCBkZWZhdWx0VmFsdWUpIHtcbiAgICBsZXQgdGVzdGVyO1xuICAgIGlmIChtYXRjaEZ1bmN0aW9uICYmIHR5cGVvZiBtYXRjaEZ1bmN0aW9uID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGVzdGVyID0gbWF0Y2hGdW5jdGlvbjtcbiAgICB9XG4gICAgbGV0IGRlZjtcbiAgICBpZiAobWF0Y2hGdW5jdGlvbiAmJiBcImRlZmF1bHRWYWx1ZVwiIGluIG1hdGNoRnVuY3Rpb24pIHtcbiAgICAgICAgZGVmID0gbWF0Y2hGdW5jdGlvbi5kZWZhdWx0VmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBkZWYgPSBkZWZhdWx0VmFsdWU7XG4gICAgfVxuICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuICAgIGxldCBsYXN0SXRlbTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcykge1xuICAgICAgICBpZiAoIXRlc3Rlcikge1xuICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgbGFzdEl0ZW0gPSBpdGVtO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRlc3RlcihpdGVtKSkge1xuICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgbGFzdEl0ZW0gPSBpdGVtO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChmb3VuZCkge1xuICAgICAgICAvLyBDYW4ndCBjaGVjayBpZiBsYXN0SXRlbSBpcyBub3QgdW5kZWZpbmVkLCBiZWNhdXNlIHRoZSBsYXN0IGl0ZW0gY291bGQgYWN0dWFsbHkgYmUgXCJ1bmRlZmluZWRcIi5cbiAgICAgICAgLy8gVHlwZVNjcmlwdCBjYW4ndCB0ZWxsIHRoYXQgZXZlcnkgcGxhY2UgZm91bmQgd2FzIHRydWUsIGxhc3RJdGVtIHdhcyBhbHNvIHNldDtcbiAgICAgICAgcmV0dXJuIGxhc3RJdGVtO1xuICAgIH1cbiAgICByZXR1cm4gZGVmO1xufVxuZXhwb3J0cy5sYXN0T3JEZWZhdWx0ID0gbGFzdE9yRGVmYXVsdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgUmVzdGFydGFibGVHZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuLi9HZW5lcmF0b3JzL1Jlc3RhcnRhYmxlR2VuZXJhdG9yXCIpO1xuLyoqXG4gKiBsZWZ0Sm9pbl9xXzogQSBmcmllbmRseSBoZWxwZXIgdG8gY3JlYXRlIGEgc2ltcGxlIGxlZnQgb3V0ZXIgam9pbi4gVGhpcyBmb2xsb3dzIHRoZSBwYXR0ZXJuIG9mIGlubmVySm9pbl9xXygpLCB3aGljaCBjb21iaW5lcyB0aGUgdHdvXG4gKiBrZXkgbG9va3VwcyBhbmQgZXF1YWxpdHkgY29tcGFyZXIgaW50byBhIHNpbmdsZSBmdW5jdGlvbiBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gbGVmdEpvaW4oc2Vjb25kLCBvbiwgc2VsZWN0RnVuY3Rpb24pIHtcbiAgICBpZiAoIXNlY29uZCB8fCAhb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgbGV0IG91dHB1dDtcbiAgICBpZiAoc2VsZWN0RnVuY3Rpb24pIHtcbiAgICAgICAgb3V0cHV0ID0gc2VsZWN0RnVuY3Rpb247XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBJZiBzZWxlY3RGdW5jdGlvbiBpcyBtaXNzaW5nLCBUUmVzdWx0IGlzIFtULCBUU2Vjb25kXS4gQ2FuJ3QgbWFrZSBUeXBlU2NyaXB0IHVuZGVyc3RhbmQgdGhhdCwgdGhvdWdoLlxuICAgICAgICBvdXRwdXQgPSAoKGwsIHIpID0+IFtsLCByXSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF9sZWZ0Sm9pbihkYXRhKSB7XG4gICAgICAgIC8vIFNpbXBsZSBuZXN0ZWQgbG9vcHMgam9pblxuICAgICAgICAvLyBJZiB0aGlzIHdlcmUgU1FMIHNlcnZlciwgc29tZSBhbmFseXNpcyBhbmQgcHJlLWZpbHRlcmluZyBjb3VsZCBiZSBkb25lIGJlZm9yZSBjb21wYXJpc29uLlxuICAgICAgICAvLyBUaGlzIGlzbid0IFNRTCBTZXJ2ZXIuIFdlIGNhbid0IGV2ZW4gZmlsdGVyIG91dCBOVUxMcywgYmVjYXVzZSB3aGF0IGlmIHRoZSBqb2luIGZ1bmN0aW9uIHNheXMgXCJsZWZ0ID09IG51bGwgJiYgcmlnaHQgPT0gbnVsbFwiLCBsaWtlIHNvbWUgbGlucSB0byBlbnRpdHkgcXVlcmllcyBkbz9cbiAgICAgICAgLy8gV2UgbmVlZCB0aGUgYWJpbGl0eSB0byBjaGVjayB0aGUgcmlnaHQgc2lkZSBhZ2FpbnN0IGV2ZXJ5IGxlZnQgc2lkZS5cbiAgICAgICAgLy8gSWYgaXQgaXMgYSBnZW5lcmF0b3IsIGl0IGNhbid0IGJlIHJlc3RhcnRlZCB0byBhbGxvdyB0aGF0LlxuICAgICAgICBjb25zdCByaWdodEdlbiA9IG5ldyBSZXN0YXJ0YWJsZUdlbmVyYXRvcl8xLlJlc3RhcnRhYmxlR2VuZXJhdG9yKHNlY29uZCk7XG4gICAgICAgIGZvciAoY29uc3QgbGVmdEl0ZW0gb2YgZGF0YSkge1xuICAgICAgICAgICAgbGV0IGxlZnRNYXRjaGVkID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJpZ2h0SXRlbSBvZiByaWdodEdlbikge1xuICAgICAgICAgICAgICAgIGlmIChvbihsZWZ0SXRlbSwgcmlnaHRJdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0TWF0Y2hlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIG91dHB1dChsZWZ0SXRlbSwgcmlnaHRJdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWxlZnRNYXRjaGVkKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgb3V0cHV0KGxlZnRJdGVtLCB1bmRlZmluZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmlnaHRHZW4ucmVzdGFydCgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLmxlZnRKb2luID0gbGVmdEpvaW47XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGxvbmdDb3VudChjb25kaXRpb24pIHtcbiAgICBsZXQgY3RyID0gQmlnSW50KDApO1xuICAgIGNvbnN0IG9uZSA9IEJpZ0ludCgxKTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcykge1xuICAgICAgICBpZiAoY29uZGl0aW9uKSB7XG4gICAgICAgICAgICBpZiAoY29uZGl0aW9uKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgY3RyID0gY3RyICsgb25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY3RyID0gY3RyICsgb25lO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjdHI7XG59XG5leHBvcnRzLmxvbmdDb3VudCA9IGxvbmdDb3VudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgSUNvbXBhcmVyXzEgPSByZXF1aXJlKFwiLi8uLi9UeXBlcy9JQ29tcGFyZXJcIik7XG4vKipcbiAqIG1heF9xXzogUmV0dXJucyB0aGUgbWF4aW11bSB2YWx1ZSBpbiBhIHNlcXVlbmNlLlxuICogVGFrZXMgYW4gb3B0aW9uYWwgdHJhbnNmb3JtYXRpb24gZnVuY3Rpb24uIElmIHN1cHBsaWVkLCB0aGlzIHRyYW5zZm9ybWF0aW9uIGlzIGFwcGxpZWQgdG8gYWxsIHZhbHVlcyBhbmQgdGhlIG1heCByZXN1bHQgcmV0dXJuZWQuXG4gKlxuICogVGFrZXMgYW4gb3B0aW9uYWwgY29tcGFyZXIsIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0d28gaW5wdXRzIGFuZCByZXR1cm5zIDEgaWYgdGhlIGZpcnN0IGlzIGhpZ2hlciwgLTEgaXMgdGhlIHNlY29uZCBpcyBoaWdoZXIsXG4gKiBlbHNlIDAuXG4gKiBJZiB5b3Ugd2FudCB0byBzZW5kIG9ubHkgdGhlIGNvbXBhcmVyIGluIHRoZSBmaXJzdCBwYXJhbWV0ZXIsIGl0IG11c3QgYmUgZW5jbG9zZWQgaW4gYW4gb2JqZWN0IGxpa2Ugc286IHsgY29tcGFyZTogbXlDb21wYXJlckZ1bmN0aW9uIH1cbiAqL1xuZnVuY3Rpb24gbWF4KHRyYW5zZm9ybSwgY29tcGFyZXIpIHtcbiAgICBsZXQgY29tcGFyZTtcbiAgICBpZiAoY29tcGFyZXIpIHtcbiAgICAgICAgY29tcGFyZSA9IElDb21wYXJlcl8xLmV4dHJhY3RDb21wYXJlcihjb21wYXJlcik7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRyYW5zZm9ybSAmJiBcImNvbXBhcmVcIiBpbiB0cmFuc2Zvcm0pIHtcbiAgICAgICAgY29tcGFyZSA9IHRyYW5zZm9ybS5jb21wYXJlO1xuICAgIH1cbiAgICBsZXQgeGZvcm07XG4gICAgaWYgKHRyYW5zZm9ybSAmJiB0eXBlb2YgdHJhbnNmb3JtID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgeGZvcm0gPSB0cmFuc2Zvcm07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBUeXBlc2NyaXB0IGRvZXNuJ3Qga25vdyB0aGF0IFQgPSBUUmVzdWx0IGluIHRoaXMgY2FzZVxuICAgICAgICB4Zm9ybSA9ICh2YWwpID0+IHZhbDtcbiAgICB9XG4gICAgbGV0IGZpcnN0ID0gZmFsc2U7XG4gICAgbGV0IG1heHZhbDtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcykge1xuICAgICAgICBjb25zdCBjdXJyZW50ID0geGZvcm0oaXRlbSk7XG4gICAgICAgIGlmICghZmlyc3QpIHtcbiAgICAgICAgICAgIG1heHZhbCA9IGN1cnJlbnQ7XG4gICAgICAgICAgICBmaXJzdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29tcGFyZSkge1xuICAgICAgICAgICAgaWYgKGNvbXBhcmUoY3VycmVudCwgbWF4dmFsKSA+IDApIHtcbiAgICAgICAgICAgICAgICBtYXh2YWwgPSBjdXJyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnQgPiBtYXh2YWwpIHtcbiAgICAgICAgICAgICAgICBtYXh2YWwgPSBjdXJyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghZmlyc3QpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2VxdWVuY2UgY29udGFpbnMgbm8gZWxlbWVudHNcIik7XG4gICAgfVxuICAgIHJldHVybiBtYXh2YWw7XG59XG5leHBvcnRzLm1heCA9IG1heDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgSUNvbXBhcmVyXzEgPSByZXF1aXJlKFwiLi8uLi9UeXBlcy9JQ29tcGFyZXJcIik7XG4vKipcbiAqIG1heEJ5X3FfOiBSZXR1cm5zIHRoZSBtYXhpbXVtIHZhbHVlIGluIGEgc2VxdWVuY2UgdXNpbmcgYSBrZXkgc2VsZWN0b3IgZnVuY3Rpb24uXG4gKiBUYWtlcyBhbiBvcHRpb25hbCBjb21wYXJlciwgYSBmdW5jdGlvbiB0aGF0IHRha2VzIHR3byBpbnB1dHMgYW5kIHJldHVybnMgMSBpZiB0aGUgZmlyc3QgaXMgaGlnaGVyLCAtMSBpcyB0aGUgc2Vjb25kIGlzIGhpZ2hlcixcbiAqIGVsc2UgMC5cbiAqXG4gKiBUaGUgZGlmZmVyZW5jZSBiZXR3ZWVuIE1heEJ5IGFuZCBNYXggd2l0aCBhIHRyYW5zZm9ybWF0aW9uIGZ1bmN0aW9uIGlzIHRoYXQgTWF4IHJldHVybnMgdGhlIG91dHB1dCBvZiB0aGUgdHJhbnNmb3JtYXRpb24gd2hpbGUgTWF4QnlcbiAqIHJldHVybnMgdGhlIG9yaWdpbmFsIHZhbHVlLiBUaGlzIHNhbWUgcmVzdWx0IGNvdWxkIGJlIGFjaGlldmVkIHdpdGggTWF4IGFuZCBhIHdlbGwtZGVzaWduZWQgY29tcGFyZXIgZnVuY3Rpb24sIG9mIGNvdXJzZS5cbiAqL1xuZnVuY3Rpb24gbWF4Qnkoa2V5U2VsZWN0b3IsIGNvbXBhcmVyKSB7XG4gICAgaWYgKCFrZXlTZWxlY3Rvcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICBjb25zdCBjb21wYXJlID0gSUNvbXBhcmVyXzEuZXh0cmFjdENvbXBhcmVyKGNvbXBhcmVyKTtcbiAgICBsZXQgZmlyc3QgPSBmYWxzZTtcbiAgICBsZXQgbWF4O1xuICAgIGxldCBtYXhWYWx1ZTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcykge1xuICAgICAgICBjb25zdCBjdXJyZW50ID0ga2V5U2VsZWN0b3IoaXRlbSk7XG4gICAgICAgIGlmICghZmlyc3QpIHtcbiAgICAgICAgICAgIG1heCA9IGN1cnJlbnQ7XG4gICAgICAgICAgICBtYXhWYWx1ZSA9IGl0ZW07XG4gICAgICAgICAgICBmaXJzdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29tcGFyZSkge1xuICAgICAgICAgICAgaWYgKGNvbXBhcmUoY3VycmVudCwgbWF4KSA+IDApIHtcbiAgICAgICAgICAgICAgICBtYXggPSBjdXJyZW50O1xuICAgICAgICAgICAgICAgIG1heFZhbHVlID0gaXRlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50ID4gbWF4KSB7XG4gICAgICAgICAgICAgICAgbWF4ID0gY3VycmVudDtcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSA9IGl0ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFmaXJzdCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTZXF1ZW5jZSBjb250YWlucyBubyBlbGVtZW50c1wiKTtcbiAgICB9XG4gICAgcmV0dXJuIG1heFZhbHVlO1xufVxuZXhwb3J0cy5tYXhCeSA9IG1heEJ5O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBJQ29tcGFyZXJfMSA9IHJlcXVpcmUoXCIuLy4uL1R5cGVzL0lDb21wYXJlclwiKTtcbi8qKlxuICogbWF4T3JEZWZhdWx0X3FfOiBSZXR1cm5zIHRoZSBtYXhpbXVtIHZhbHVlIGluIGEgc2VxdWVuY2UuIElmIHNlcXVlbmNlIGlzIGVtcHR5LCByZXR1cm5zIHRoZSBkZWZhdWx0IHZhbHVlIG9yIHVuZGVmaW5lZC5cbiAqIFRha2VzIGFuIG9wdGlvbmFsIHRyYW5zZm9ybWF0aW9uIGZ1bmN0aW9uLiBJZiBzdXBwbGllZCwgdGhpcyB0cmFuc2Zvcm1hdGlvbiBpcyBhcHBsaWVkIHRvIGFsbCB2YWx1ZXMgYW5kIHRoZSBtYXggcmVzdWx0IHJldHVybmVkLlxuICogVGhpcyBpcyBhIEpPSU4tc3BlY2lmaWMgbWV0aG9kLiBUaGVyZSBpcyBubyBlcXVpdmFsZW50IGluIEMjLlxuICpcbiAqIFRha2VzIGFuIG9wdGlvbmFsIGNvbXBhcmVyLCBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgdHdvIGlucHV0cyBhbmQgcmV0dXJucyAxIGlmIHRoZSBmaXJzdCBpcyBoaWdoZXIsIC0xIGlzIHRoZSBzZWNvbmQgaXMgaGlnaGVyLFxuICogZWxzZSAwLlxuICogSWYgeW91IHdhbnQgdG8gc2VuZCB0aGUgY29tcGFyZXIgaW4gdGhlIGZpcnN0IHBhcmFtZXRlciwgaXQgbXVzdCBiZSBlbmNsb3NlZCBpbiBhbiBvYmplY3QgbGlrZSBzbzogeyBjb21wYXJlOiBteUNvbXBhcmVyRnVuY3Rpb24gfVxuICogSWYgeW91IHdhbnQgdG8gc2VuZCB0aGUgZGVmYXVsdFZhbHVlIGluIGFueXRoaW5nIGJ1dCB0aGUgZmluYWwgdmFsdWUsIGl0IG11c3QgYmUgZW5jbG9zZWQgbGlrZSBzbzogeyBkZWZhdWx0VmFsdWUgfVxuICovXG5mdW5jdGlvbiBtYXhPckRlZmF1bHQodHJhbnNmb3JtLCBjb21wYXJlciwgZGVmYXVsdFZhbHVlKSB7XG4gICAgbGV0IGRlZjtcbiAgICBpZiAoZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIGRlZiA9IGRlZmF1bHRWYWx1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoY29tcGFyZXIgJiYgXCJkZWZhdWx0VmFsdWVcIiBpbiBjb21wYXJlcikge1xuICAgICAgICBkZWYgPSBjb21wYXJlci5kZWZhdWx0VmFsdWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRyYW5zZm9ybSAmJiBcImRlZmF1bHRWYWx1ZVwiIGluIHRyYW5zZm9ybSkge1xuICAgICAgICBkZWYgPSB0cmFuc2Zvcm0uZGVmYXVsdFZhbHVlO1xuICAgIH1cbiAgICBsZXQgY29tcGFyZTtcbiAgICBpZiAoY29tcGFyZXIgJiYgIShcImRlZmF1bHRWYWx1ZVwiIGluIGNvbXBhcmVyKSkge1xuICAgICAgICBjb21wYXJlID0gSUNvbXBhcmVyXzEuZXh0cmFjdENvbXBhcmVyKGNvbXBhcmVyKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHJhbnNmb3JtICYmIFwiY29tcGFyZVwiIGluIHRyYW5zZm9ybSkge1xuICAgICAgICBjb21wYXJlID0gdHJhbnNmb3JtLmNvbXBhcmU7XG4gICAgfVxuICAgIGxldCB4Zm9ybTtcbiAgICBpZiAodHJhbnNmb3JtICYmIHR5cGVvZiB0cmFuc2Zvcm0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB4Zm9ybSA9IHRyYW5zZm9ybTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIFR5cGVzY3JpcHQgZG9lc24ndCBrbm93IHRoYXQgVCA9IFRSZXN1bHQgaW4gdGhpcyBjYXNlXG4gICAgICAgIHhmb3JtID0gKHZhbCkgPT4gdmFsO1xuICAgIH1cbiAgICBsZXQgZmlyc3QgPSBmYWxzZTtcbiAgICBsZXQgbWF4dmFsO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSB4Zm9ybShpdGVtKTtcbiAgICAgICAgaWYgKCFmaXJzdCkge1xuICAgICAgICAgICAgbWF4dmFsID0gY3VycmVudDtcbiAgICAgICAgICAgIGZpcnN0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb21wYXJlKSB7XG4gICAgICAgICAgICBpZiAoY29tcGFyZShjdXJyZW50LCBtYXh2YWwpID4gMCkge1xuICAgICAgICAgICAgICAgIG1heHZhbCA9IGN1cnJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudCA+IG1heHZhbCkge1xuICAgICAgICAgICAgICAgIG1heHZhbCA9IGN1cnJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFmaXJzdCkge1xuICAgICAgICByZXR1cm4gZGVmO1xuICAgIH1cbiAgICByZXR1cm4gbWF4dmFsO1xufVxuZXhwb3J0cy5tYXhPckRlZmF1bHQgPSBtYXhPckRlZmF1bHQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IElDb21wYXJlcl8xID0gcmVxdWlyZShcIi4vLi4vVHlwZXMvSUNvbXBhcmVyXCIpO1xuLyoqXG4gKiBtaW5fcV86IFJldHVybnMgdGhlIG1pbmltdW0gdmFsdWUgaW4gYSBzZXF1ZW5jZS5cbiAqIFRha2VzIGFuIG9wdGlvbmFsIHRyYW5zZm9ybWF0aW9uIGZ1bmN0aW9uLiBJZiBzdXBwbGllZCwgdGhpcyB0cmFuc2Zvcm1hdGlvbiBpcyBhcHBsaWVkIHRvIGFsbCB2YWx1ZXMgYW5kIHRoZSBtaW4gcmVzdWx0IHJldHVybmVkLlxuICpcbiAqIFRha2VzIGFuIG9wdGlvbmFsIGNvbXBhcmVyLCBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgdHdvIGlucHV0cyBhbmQgcmV0dXJucyAxIGlmIHRoZSBmaXJzdCBpcyBoaWdoZXIsIC0xIGlzIHRoZSBzZWNvbmQgaXMgaGlnaGVyLFxuICogZWxzZSAwLlxuICogSWYgeW91IHdhbnQgdG8gc2VuZCBvbmx5IHRoZSBjb21wYXJlciBpbiB0aGUgZmlyc3QgcGFyYW1ldGVyLCBpdCBtdXN0IGJlIGVuY2xvc2VkIGluIGFuIG9iamVjdCBsaWtlIHNvOiB7IGNvbXBhcmU6IG15Q29tcGFyZXJGdW5jdGlvbiB9XG4gKi9cbmZ1bmN0aW9uIG1pbih0cmFuc2Zvcm0sIGNvbXBhcmVyKSB7XG4gICAgbGV0IGNvbXBhcmU7XG4gICAgaWYgKGNvbXBhcmVyKSB7XG4gICAgICAgIGNvbXBhcmUgPSBJQ29tcGFyZXJfMS5leHRyYWN0Q29tcGFyZXIoY29tcGFyZXIpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0cmFuc2Zvcm0gJiYgXCJjb21wYXJlXCIgaW4gdHJhbnNmb3JtKSB7XG4gICAgICAgIGNvbXBhcmUgPSB0cmFuc2Zvcm0uY29tcGFyZTtcbiAgICB9XG4gICAgbGV0IHhmb3JtO1xuICAgIGlmICh0cmFuc2Zvcm0gJiYgdHlwZW9mIHRyYW5zZm9ybSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHhmb3JtID0gdHJhbnNmb3JtO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gVHlwZXNjcmlwdCBkb2Vzbid0IGtub3cgdGhhdCBUID0gVFJlc3VsdCBpbiB0aGlzIGNhc2VcbiAgICAgICAgeGZvcm0gPSAodmFsKSA9PiB2YWw7XG4gICAgfVxuICAgIGxldCBmaXJzdCA9IGZhbHNlO1xuICAgIGxldCBtaW52YWw7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IHhmb3JtKGl0ZW0pO1xuICAgICAgICBpZiAoIWZpcnN0KSB7XG4gICAgICAgICAgICBtaW52YWwgPSBjdXJyZW50O1xuICAgICAgICAgICAgZmlyc3QgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbXBhcmUpIHtcbiAgICAgICAgICAgIGlmIChjb21wYXJlKGN1cnJlbnQsIG1pbnZhbCkgPCAwKSB7XG4gICAgICAgICAgICAgICAgbWludmFsID0gY3VycmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50IDwgbWludmFsKSB7XG4gICAgICAgICAgICAgICAgbWludmFsID0gY3VycmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWZpcnN0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNlcXVlbmNlIGNvbnRhaW5zIG5vIGVsZW1lbnRzXCIpO1xuICAgIH1cbiAgICByZXR1cm4gbWludmFsO1xufVxuZXhwb3J0cy5taW4gPSBtaW47XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IElDb21wYXJlcl8xID0gcmVxdWlyZShcIi4vLi4vVHlwZXMvSUNvbXBhcmVyXCIpO1xuLyoqXG4gKiBtaW5CeV9xXzogUmV0dXJucyB0aGUgbWF4aW11bSB2YWx1ZSBpbiBhIHNlcXVlbmNlIHVzaW5nIGEga2V5IHNlbGVjdG9yIGZ1bmN0aW9uLlxuICogVGFrZXMgYW4gb3B0aW9uYWwgY29tcGFyZXIsIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0d28gaW5wdXRzIGFuZCByZXR1cm5zIDEgaWYgdGhlIGZpcnN0IGlzIGhpZ2hlciwgLTEgaXMgdGhlIHNlY29uZCBpcyBoaWdoZXIsXG4gKiBlbHNlIDAuXG4gKlxuICogVGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBNaW5CeSBhbmQgTWluIHdpdGggYSB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbiBpcyB0aGF0IE1pbiByZXR1cm5zIHRoZSBvdXRwdXQgb2YgdGhlIHRyYW5zZm9ybWF0aW9uIHdoaWxlIE1pbkJ5XG4gKiByZXR1cm5zIHRoZSBvcmlnaW5hbCB2YWx1ZS4gVGhpcyBzYW1lIHJlc3VsdCBjb3VsZCBiZSBhY2hpZXZlZCB3aXRoIE1pbiBhbmQgYSB3ZWxsLWRlc2lnbmVkIGNvbXBhcmVyIGZ1bmN0aW9uLCBvZiBjb3Vyc2UuXG4gKi9cbmZ1bmN0aW9uIG1pbkJ5KGtleVNlbGVjdG9yLCBjb21wYXJlcikge1xuICAgIGlmICgha2V5U2VsZWN0b3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgY29uc3QgY29tcGFyZSA9IElDb21wYXJlcl8xLmV4dHJhY3RDb21wYXJlcihjb21wYXJlcik7XG4gICAgbGV0IGZpcnN0ID0gZmFsc2U7XG4gICAgbGV0IG1pbjtcbiAgICBsZXQgbWluVmFsdWU7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IGtleVNlbGVjdG9yKGl0ZW0pO1xuICAgICAgICBpZiAoIWZpcnN0KSB7XG4gICAgICAgICAgICBtaW4gPSBjdXJyZW50O1xuICAgICAgICAgICAgbWluVmFsdWUgPSBpdGVtO1xuICAgICAgICAgICAgZmlyc3QgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbXBhcmUpIHtcbiAgICAgICAgICAgIGlmIChjb21wYXJlKGN1cnJlbnQsIG1pbikgPCAwKSB7XG4gICAgICAgICAgICAgICAgbWluID0gY3VycmVudDtcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZSA9IGl0ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudCA8IG1pbikge1xuICAgICAgICAgICAgICAgIG1pbiA9IGN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgbWluVmFsdWUgPSBpdGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghZmlyc3QpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2VxdWVuY2UgY29udGFpbnMgbm8gZWxlbWVudHNcIik7XG4gICAgfVxuICAgIHJldHVybiBtaW5WYWx1ZTtcbn1cbmV4cG9ydHMubWluQnkgPSBtaW5CeTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgSUNvbXBhcmVyXzEgPSByZXF1aXJlKFwiLi8uLi9UeXBlcy9JQ29tcGFyZXJcIik7XG4vKipcbiAqIG1pbk9yRGVmYXVsdF9xXzogUmV0dXJucyB0aGUgbWluaW11bSB2YWx1ZSBpbiBhIHNlcXVlbmNlLiBJZiBzZXF1ZW5jZSBpcyBlbXB0eSwgcmV0dXJucyB0aGUgZGVmYXVsdCB2YWx1ZSBvciB1bmRlZmluZWQuXG4gKiBUYWtlcyBhbiBvcHRpb25hbCB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbi4gSWYgc3VwcGxpZWQsIHRoaXMgdHJhbnNmb3JtYXRpb24gaXMgYXBwbGllZCB0byBhbGwgdmFsdWVzIGFuZCB0aGUgbWluIHJlc3VsdCByZXR1cm5lZC5cbiAqIFRoaXMgaXMgYSBKT0lOLXNwZWNpZmljIG1ldGhvZC4gVGhlcmUgaXMgbm8gZXF1aXZhbGVudCBpbiBDIy5cbiAqXG4gKiBUYWtlcyBhbiBvcHRpb25hbCBjb21wYXJlciwgYSBmdW5jdGlvbiB0aGF0IHRha2VzIHR3byBpbnB1dHMgYW5kIHJldHVybnMgMSBpZiB0aGUgZmlyc3QgaXMgaGlnaGVyLCAtMSBpcyB0aGUgc2Vjb25kIGlzIGhpZ2hlcixcbiAqIGVsc2UgMC5cbiAqIElmIHlvdSB3YW50IHRvIHNlbmQgdGhlIGNvbXBhcmVyIGluIHRoZSBmaXJzdCBwYXJhbWV0ZXIsIGl0IG11c3QgYmUgZW5jbG9zZWQgaW4gYW4gb2JqZWN0IGxpa2Ugc286IHsgY29tcGFyZTogbXlDb21wYXJlckZ1bmN0aW9uIH1cbiAqIElmIHlvdSB3YW50IHRvIHNlbmQgdGhlIGRlZmF1bHRWYWx1ZSBpbiBhbnl0aGluZyBidXQgdGhlIGZpbmFsIHZhbHVlLCBpdCBtdXN0IGJlIGVuY2xvc2VkIGxpa2Ugc286IHsgZGVmYXVsdFZhbHVlIH1cbiAqL1xuZnVuY3Rpb24gbWluT3JEZWZhdWx0KHRyYW5zZm9ybSwgY29tcGFyZXIsIGRlZmF1bHRWYWx1ZSkge1xuICAgIGxldCBkZWY7XG4gICAgaWYgKGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICBkZWYgPSBkZWZhdWx0VmFsdWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNvbXBhcmVyICYmIFwiZGVmYXVsdFZhbHVlXCIgaW4gY29tcGFyZXIpIHtcbiAgICAgICAgZGVmID0gY29tcGFyZXIuZGVmYXVsdFZhbHVlO1xuICAgIH1cbiAgICBlbHNlIGlmICh0cmFuc2Zvcm0gJiYgXCJkZWZhdWx0VmFsdWVcIiBpbiB0cmFuc2Zvcm0pIHtcbiAgICAgICAgZGVmID0gdHJhbnNmb3JtLmRlZmF1bHRWYWx1ZTtcbiAgICB9XG4gICAgbGV0IGNvbXBhcmU7XG4gICAgaWYgKGNvbXBhcmVyICYmICEoXCJkZWZhdWx0VmFsdWVcIiBpbiBjb21wYXJlcikpIHtcbiAgICAgICAgY29tcGFyZSA9IElDb21wYXJlcl8xLmV4dHJhY3RDb21wYXJlcihjb21wYXJlcik7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRyYW5zZm9ybSAmJiBcImNvbXBhcmVcIiBpbiB0cmFuc2Zvcm0pIHtcbiAgICAgICAgY29tcGFyZSA9IHRyYW5zZm9ybS5jb21wYXJlO1xuICAgIH1cbiAgICBsZXQgeGZvcm07XG4gICAgaWYgKHRyYW5zZm9ybSAmJiB0eXBlb2YgdHJhbnNmb3JtID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgeGZvcm0gPSB0cmFuc2Zvcm07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBUeXBlc2NyaXB0IGRvZXNuJ3Qga25vdyB0aGF0IFQgPSBUUmVzdWx0IGluIHRoaXMgY2FzZVxuICAgICAgICB4Zm9ybSA9ICh2YWwpID0+IHZhbDtcbiAgICB9XG4gICAgbGV0IGZpcnN0ID0gZmFsc2U7XG4gICAgbGV0IG1pbnZhbDtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcykge1xuICAgICAgICBjb25zdCBjdXJyZW50ID0geGZvcm0oaXRlbSk7XG4gICAgICAgIGlmICghZmlyc3QpIHtcbiAgICAgICAgICAgIG1pbnZhbCA9IGN1cnJlbnQ7XG4gICAgICAgICAgICBmaXJzdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29tcGFyZSkge1xuICAgICAgICAgICAgaWYgKGNvbXBhcmUoY3VycmVudCwgbWludmFsKSA8IDApIHtcbiAgICAgICAgICAgICAgICBtaW52YWwgPSBjdXJyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnQgPCBtaW52YWwpIHtcbiAgICAgICAgICAgICAgICBtaW52YWwgPSBjdXJyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghZmlyc3QpIHtcbiAgICAgICAgcmV0dXJuIGRlZjtcbiAgICB9XG4gICAgcmV0dXJuIG1pbnZhbDtcbn1cbmV4cG9ydHMubWluT3JEZWZhdWx0ID0gbWluT3JEZWZhdWx0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIG9mVHlwZV9xXzogRmlsdGVycyB0aGUgZWxlbWVudHMgb2YgYW4gSUVudW1lcmFibGUgYmFzZWQgb24gYSBzcGVjaWZpZWQgdHlwZS5cbiAqXG4gKiBJbiBKUyB0aGlzIGlzIGtpbmQgb2YgbWVhbmluZ2xlc3MuIElmIHlvdSBwcm92aWRlIGEgc3RyaW5nLCBpdCBkb2VzIGEgdHlwZW9mLiBJZiB5b3UgcHJvdmlkZSBhIGNsYXNzLCBpdCBkb2VzIGFuIGluc3RhbmNlb2YuXG4gKi9cbmZ1bmN0aW9uIG9mVHlwZShmaWx0ZXIpIHtcbiAgICBpZiAoIWZpbHRlcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfb2ZUeXBlKGRhdGEpIHtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZmlsdGVyID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBpdGVtID09PSBmaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2UncmUganVzdCB0YWtpbmcgaXQgb24gdGhlIGNvZGVyJ3MgaG9ub3IgdGhhdCBmaWx0ZXIgbWF0Y2hlcyBSLiBObyB3YXkgdG8gYWN0dWFsbHkgdGVzdCBpdC5cbiAgICAgICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSBpbnN0YW5jZW9mIGZpbHRlcikge1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5vZlR5cGUgPSBvZlR5cGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IE9yZGVyZWRFbnVtZXJhYmxlXzEgPSByZXF1aXJlKFwiLi4vRW51bWVyYWJsZS9PcmRlcmVkRW51bWVyYWJsZVwiKTtcbi8vIFdBUk5JTkchXG4vLyBUaGVzZSB0d28gbWV0aG9kcyBtdXN0IGJlIGFkZGVkIHRvIEVudW1lcmFibGUgdXNpbmcgcHJvdG90eXBlIG1vZGlmaWNhdGlvbiwgYmVjYXVzZSBkZWNsYXJpbmcgdGhlbSBpbiB0aGUgRW51bWVyYWJsZSBjbGFzcyBtYWtlcyB0aGVcbi8vIGJyb3dzZXIgYmxvdyB1cC4gSXQncyBiZWNhdXNlIG9mIHRoZSBcIm5ldyBPcmRlcmVkRW51bWVyYWJsZVwiICh3aGljaCBkZXJpdmVzIGZyb20gRW51bWVyYWJsZSkgYmVpbmcgcmVmZXJlbmNlZC5cbi8qKlxuICogb3JkZXJCeV9xXzogU29ydHMgdGhlIGVsZW1lbnRzIG9mIGEgc2VxdWVuY2UgaW4gYXNjZW5kaW5nIG9yZGVyIGFjY29yZGluZyB0byBhIGtleSBmdW5jdGlvbi5cbiAqIFRha2VzIGFuIG9wdGlvbmFsIGNvbXBhcmVyLCBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgdHdvIGlucHV0cyBhbmQgcmV0dXJucyAxIGlmIHRoZSBmaXJzdCBpcyBoaWdoZXIsIC0xIGlzIHRoZSBzZWNvbmQgaXMgaGlnaGVyLFxuICogZWxzZSAwLlxuICogVGhlIGtleSBmdW5jdGlvbiBpcyBhbHNvIG9wdGlvbmFsLiBJZiB5b3UgbGVhdmUgaXQgb3V0LCBpdCdsbCBkZWZhdWx0IHRvIHRoZSBpZGVudGl0eS4gSSBnb3QgdGlyZWQgb2Ygd3JpdGluZyAub3JkZXJCeV9xXyhvID0+IG8pXG4gKiB3aGVuIHNvcnRpbmcgbnVtYmVycyBvciBzdHJpbmdzLiBUaGlzIGlzIGEgY2hhbmdlIGZyb20gQyMuXG4gKlxuICogSWYgeW91IHdhbnQgdG8gdXNlIHRoZSBjb21wYXJlciwgeW91J2xsIG5lZWQgdG8gaW5jbHVkZSB0aGUga2V5IHNlbGVjdG9yLiBJdCdzIG5vdCB3b3J0aCBteSB3aGlsZSB0byBtYWtlIGEge2NvbXBhcmVyfSBvYmplY3QgdG8gYWxsb3dcbiAqIG9ubHkgb25lIHBhcmFtZXRlciBmb3IgdGhpcyByYXJlIGNhc2UuXG4gKi9cbmZ1bmN0aW9uIG9yZGVyQnkoa2V5U2VsZWN0b3IsIGNvbXBhcmVyKSB7XG4gICAgaWYgKCFrZXlTZWxlY3Rvcikge1xuICAgICAgICBrZXlTZWxlY3RvciA9ICgobykgPT4gbyk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgT3JkZXJlZEVudW1lcmFibGVfMS5PcmRlcmVkRW51bWVyYWJsZSh0aGlzLCBrZXlTZWxlY3RvciwgY29tcGFyZXIpO1xufVxuZXhwb3J0cy5vcmRlckJ5ID0gb3JkZXJCeTtcbi8qKlxuICogb3JkZXJCeURlc2NlbmRpbmdfcV86IFNvcnRzIHRoZSBlbGVtZW50cyBvZiBhIHNlcXVlbmNlIGluIGRlc2NlbmRpbmcgb3JkZXIgYWNjb3JkaW5nIHRvIGEga2V5IGZ1bmN0aW9uLlxuICogVGFrZXMgYW4gb3B0aW9uYWwgY29tcGFyZXIsIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0d28gaW5wdXRzIGFuZCByZXR1cm5zIDEgaWYgdGhlIGZpcnN0IGlzIGhpZ2hlciwgLTEgaXMgdGhlIHNlY29uZCBpcyBoaWdoZXIsXG4gKiBlbHNlIDAuXG4gKiBUaGUga2V5IGZ1bmN0aW9uIGlzIGFsc28gb3B0aW9uYWwuIElmIHlvdSBsZWF2ZSBpdCBvdXQsIGl0J2xsIGRlZmF1bHQgdG8gdGhlIGlkZW50aXR5LiBJIGdvdCB0aXJlZCBvZiB3cml0aW5nIC5vcmRlckJ5X3FfKG8gPT4gbylcbiAqIHdoZW4gc29ydGluZyBudW1iZXJzIG9yIHN0cmluZ3MuIFRoaXMgaXMgYSBjaGFuZ2UgZnJvbSBDIy5cbiAqXG4gKiBJZiB5b3Ugd2FudCB0byB1c2UgdGhlIGNvbXBhcmVyLCB5b3UnbGwgbmVlZCB0byBpbmNsdWRlIHRoZSBrZXkgc2VsZWN0b3IuIEl0J3Mgbm90IHdvcnRoIG15IHdoaWxlIHRvIG1ha2UgYSB7Y29tcGFyZXJ9IG9iamVjdCB0byBhbGxvd1xuICogb25seSBvbmUgcGFyYW1ldGVyIGZvciB0aGlzIHJhcmUgY2FzZS5cbiAqL1xuZnVuY3Rpb24gb3JkZXJCeURlc2NlbmRpbmcoa2V5U2VsZWN0b3IsIGNvbXBhcmVyKSB7XG4gICAgaWYgKCFrZXlTZWxlY3Rvcikge1xuICAgICAgICBrZXlTZWxlY3RvciA9ICgobykgPT4gbyk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgT3JkZXJlZEVudW1lcmFibGVfMS5PcmRlcmVkRW51bWVyYWJsZSh0aGlzLCBrZXlTZWxlY3RvciwgY29tcGFyZXIsIHRydWUpO1xufVxuZXhwb3J0cy5vcmRlckJ5RGVzY2VuZGluZyA9IG9yZGVyQnlEZXNjZW5kaW5nO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBSZXN0YXJ0YWJsZUdlbmVyYXRvcl8xID0gcmVxdWlyZShcIi4uL0dlbmVyYXRvcnMvUmVzdGFydGFibGVHZW5lcmF0b3JcIik7XG4vKipcbiAqIG91dGVySm9pbl9xXzogQ29ycmVsYXRlcyB0aGUgZWxlbWVudHMgb2YgdHdvIHNlcXVlbmNlcyBiYXNlZCBvbiBtYXRjaGluZyBrZXlzLiBJZiBubyBtYXRjaGluZyByZWNvcmQgaXMgZmluZCBpbiB0aGUgc2Vjb25kIHNlcXVlbmNlLCB1bmRlZmluZWQgaXMgc2VudCB0byB0aGUgb3V0cHV0IHNlbGVjdG9yLlxuICogT3V0ZXIgSm9pbnMgYXJlIG5vdCBwcm92aWRlZCBpbiBMSU5RLiBUaGlzIGlzIGEgbmV3IGZ1bmN0aW9uLCBmb2xsb3dpbmcgdGhlIHBhdHRlcm4gb2Ygam9pbl9xXygpO1xuICogb3B0aW9uYWwgZXF1YWxpdHkgY29tcGFyZXIgY2FuIGJlIHVzZWQgdG8gY29tcGFyZSBrZXlzXG4gKiBJZiB0aGUgb3V0cHV0IHNlbGVjdG9yIGlzIGxlZnQgb3V0LCByZXN1bHRzIGFyZSByZXR1cm5lZCBhcyBbZmlyc3Qgcm93LCBzZWNvbmQgcm93XS5cbiAqIExlYXZpbmcgdGhlIG91dHB1dCBzZWxlY3RvciBvdXQgcmVxdWlyZXMgcGFzc2luZyBjb21wYXJlciBpbiBhcyB7IGVxdWFsczogY29tcGFyZXIgfSBpZiB5b3Ugd2FudCB0byB1c2UgaXQuXG4gKi9cbmZ1bmN0aW9uIG91dGVySm9pbihzZWNvbmQsIGZpcnN0S2V5U2VsZWN0b3IsIHNlY29uZEtleVNlbGVjdG9yLCBvdXRwdXRGdW5jdGlvbiwgY29tcGFyZXIpIHtcbiAgICBpZiAoIXNlY29uZCB8fCAhZmlyc3RLZXlTZWxlY3RvciB8fCAhc2Vjb25kS2V5U2VsZWN0b3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgbGV0IG91dHB1dDtcbiAgICBsZXQgZXF1YWxpemVyO1xuICAgIGlmIChjb21wYXJlciAmJiB0eXBlb2YgY29tcGFyZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBlcXVhbGl6ZXIgPSBjb21wYXJlcjtcbiAgICB9XG4gICAgZWxzZSBpZiAoY29tcGFyZXIgJiYgXCJlcXVhbHNcIiBpbiBjb21wYXJlcikge1xuICAgICAgICBlcXVhbGl6ZXIgPSBjb21wYXJlci5lcXVhbHM7XG4gICAgfVxuICAgIGVsc2UgaWYgKG91dHB1dEZ1bmN0aW9uICYmIFwiZXF1YWxzXCIgaW4gb3V0cHV0RnVuY3Rpb24pIHtcbiAgICAgICAgZXF1YWxpemVyID0gb3V0cHV0RnVuY3Rpb24uZXF1YWxzO1xuICAgIH1cbiAgICBpZiAob3V0cHV0RnVuY3Rpb24gJiYgdHlwZW9mIG91dHB1dEZ1bmN0aW9uID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0RnVuY3Rpb247XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBJZiBvdXRwdXRGdW5jdGlvbiBpcyBtaXNzaW5nLCBUUmVzdWx0IGlzIFtULCBUU2Vjb25kXS4gQ2FuJ3QgbWFrZSBUeXBlU2NyaXB0IHVuZGVyc3RhbmQgdGhhdCwgdGhvdWdoLlxuICAgICAgICBvdXRwdXQgPSAoKGwsIHIpID0+IFtsLCByXSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF9vdXRlckpvaW4oZGF0YSkge1xuICAgICAgICAvLyBTaW1wbGUgbmVzdGVkIGxvb3BzIGpvaW5cbiAgICAgICAgLy8gSWYgdGhpcyB3ZXJlIFNRTCBzZXJ2ZXIsIHNvbWUgc3RhdGlzdGljcyBhbmQgaW5kZXggYW5hbHlzaXMgYW5kIHByZS1maWx0ZXJpbmcgY291bGQgYmUgZG9uZSBiZWZvcmUgY29tcGFyaXNvbi5cbiAgICAgICAgLy8gVGhpcyBpc24ndCBTUUwgU2VydmVyLiBXZSBjYW4ndCBldmVuIGZpbHRlciBvdXQgTlVMTHMsIGJlY2F1c2Ugd2hhdCBpZiB0aGUgam9pbiBmdW5jdGlvbiBzYXlzIFwibGVmdCA9PSBudWxsICYmIHJpZ2h0ID09IG51bGxcIiwgbGlrZSBzb21lIGxpbnEgdG8gZW50aXR5IHF1ZXJpZXMgZG8/XG4gICAgICAgIC8vIFdlIG5lZWQgdGhlIGFiaWxpdHkgdG8gY2hlY2sgdGhlIHJpZ2h0IHNpZGUgYWdhaW5zdCBldmVyeSBsZWZ0IHNpZGUuIFxuICAgICAgICAvLyBJZiBpdCBpcyBhIGdlbmVyYXRvciwgaXQgY2FuJ3QgYmUgcmVzdGFydGVkIHRvIGFsbG93IHRoYXQuXG4gICAgICAgIGNvbnN0IHJpZ2h0R2VuID0gbmV3IFJlc3RhcnRhYmxlR2VuZXJhdG9yXzEuUmVzdGFydGFibGVHZW5lcmF0b3Ioc2Vjb25kKTtcbiAgICAgICAgZm9yIChjb25zdCBsZWZ0SXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICBsZXQgbGVmdE1hdGNoZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcmlnaHRJdGVtIG9mIHJpZ2h0R2VuKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGVmdEtleSA9IGZpcnN0S2V5U2VsZWN0b3IobGVmdEl0ZW0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJpZ2h0S2V5ID0gc2Vjb25kS2V5U2VsZWN0b3IocmlnaHRJdGVtKTtcbiAgICAgICAgICAgICAgICBsZXQgbWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAoZXF1YWxpemVyKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoID0gZXF1YWxpemVyKGxlZnRLZXksIHJpZ2h0S2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoID0gbGVmdEtleSA9PT0gcmlnaHRLZXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0TWF0Y2hlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIG91dHB1dChsZWZ0SXRlbSwgcmlnaHRJdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWxlZnRNYXRjaGVkKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgb3V0cHV0KGxlZnRJdGVtLCB1bmRlZmluZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmlnaHRHZW4ucmVzdGFydCgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLm91dGVySm9pbiA9IG91dGVySm9pbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBwcmVwZW5kX3FfOiBBcHBlbmRzIGEgdmFsdWUgdG8gdGhlIHN0YXJ0IG9mIHRoZSBzZXF1ZW5jZVxuICovXG5mdW5jdGlvbiBwcmVwZW5kKG5ld0l0ZW0pIHtcbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfcHJlcGVuZChkYXRhKSB7XG4gICAgICAgIHlpZWxkIG5ld0l0ZW07XG4gICAgICAgIHlpZWxkKiBkYXRhO1xuICAgIH0pO1xufVxuZXhwb3J0cy5wcmVwZW5kID0gcHJlcGVuZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgUmVzdGFydGFibGVHZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuLi9HZW5lcmF0b3JzL1Jlc3RhcnRhYmxlR2VuZXJhdG9yXCIpO1xuLyoqXG4gKiByZXBsaWNhdGVfcV86IFJlcGVhdCB0aGUgaXRlbXMgaW4gYSBzZXF1ZW5jZSBhIHNwZWNpZmllZCBudW1iZXIgb2YgdGltZXMuXG4gKi9cbmZ1bmN0aW9uIHJlcGxpY2F0ZSh0aW1lcykge1xuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF90YWtlKGRhdGEpIHtcbiAgICAgICAgY29uc3QgbG9vcCA9IG5ldyBSZXN0YXJ0YWJsZUdlbmVyYXRvcl8xLlJlc3RhcnRhYmxlR2VuZXJhdG9yKGRhdGEpO1xuICAgICAgICB3aGlsZSAodGltZXMgPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgbG9vcCkge1xuICAgICAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsb29wLnJlc3RhcnQoKTtcbiAgICAgICAgICAgIHRpbWVzLS07XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMucmVwbGljYXRlID0gcmVwbGljYXRlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIHJldmVyc2VfcV86IEludmVydHMgdGhlIG9yZGVyIG9mIHRoZSBlbGVtZW50cyBpbiBhIHNlcXVlbmNlXG4gKlxuICogUmV2ZXJzZSBpcyByZWFsbHkgcG9pbnRsZXNzLiBJdCBpcyBhbHJlYWR5IGZvdW5kIG9uIHRoZSBhcnJheSBjbGFzcywgYW5kIHdoaWxlIHRoaXMgaXMgdGVjaG5pY2FsbHlcbiAqIGRlbGF5ZWQgZXhlY3V0aW9uLCBpdCBjYW4gb25seSB3b3JrIGJ5IGdvaW5nIHRocm91Z2ggdG8gdGhlIGVuZCBvZiB0aGUgZW51bWVyYWJsZS5cbiAqL1xuZnVuY3Rpb24gcmV2ZXJzZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfcmV2ZXJzZShkYXRhKSB7XG4gICAgICAgIC8vIFdoaWxlIHRoaXMgaXMgdGVjaG5pY2FsbHkgZGVsYXllZCBleGVjdXRpb24sIGl0IG9idmlvdXNseSBuZWVkcyB0byBwcm9jZXNzIHRoZSBlbnRpcmUgZGF0YXNldFxuICAgICAgICAvLyBiZWNhdXNlIGl0IGhhcyB0byBnZXQgYWxsIHRoZSB3YXkgdG8gdGhlIGxhc3QgaXRlbSBiZWZvcmUgcmV0dXJuaW5nIGEgcm93LlxuICAgICAgICBjb25zdCB0b1JldHVybiA9IFsuLi5kYXRhXTtcbiAgICAgICAgd2hpbGUgKHRvUmV0dXJuLmxlbmd0aCkge1xuICAgICAgICAgICAgeWllbGQgdG9SZXR1cm4ucG9wKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMucmV2ZXJzZSA9IHJldmVyc2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFJlc3RhcnRhYmxlR2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi4vR2VuZXJhdG9ycy9SZXN0YXJ0YWJsZUdlbmVyYXRvclwiKTtcbi8qKlxuICogcmlnaHRKb2luX3FfOiBBIGZyaWVuZGx5IGhlbHBlciB0byBjcmVhdGUgYSByaWdodCBsZWZ0IG91dGVyIGpvaW4uIFRoaXMgZm9sbG93cyB0aGUgcGF0dGVybiBvZiBpbm5lckpvaW5fcV8oKSwgd2hpY2ggY29tYmluZXMgdGhlIHR3b1xuICoga2V5IGxvb2t1cHMgYW5kIGVxdWFsaXR5IGNvbXBhcmVyIGludG8gYSBzaW5nbGUgZnVuY3Rpb24gaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHJpZ2h0Sm9pbihzZWNvbmQsIG9uLCBzZWxlY3RGdW5jdGlvbikge1xuICAgIGlmICghc2Vjb25kIHx8ICFvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICBsZXQgb3V0cHV0O1xuICAgIGlmIChzZWxlY3RGdW5jdGlvbikge1xuICAgICAgICBvdXRwdXQgPSBzZWxlY3RGdW5jdGlvbjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIElmIHNlbGVjdEZ1bmN0aW9uIGlzIG1pc3NpbmcsIFRSZXN1bHQgaXMgW1QsIFRTZWNvbmRdLiBDYW4ndCBtYWtlIFR5cGVTY3JpcHQgdW5kZXJzdGFuZCB0aGF0LCB0aG91Z2guXG4gICAgICAgIG91dHB1dCA9ICgobCwgcikgPT4gW2wsIHJdKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX2xlZnRKb2luKGRhdGEpIHtcbiAgICAgICAgLy8gU2ltcGxlIG5lc3RlZCBsb29wcyBqb2luXG4gICAgICAgIC8vIElmIHRoaXMgd2VyZSBTUUwgc2VydmVyLCBzb21lIGFuYWx5c2lzIGFuZCBwcmUtZmlsdGVyaW5nIGNvdWxkIGJlIGRvbmUgYmVmb3JlIGNvbXBhcmlzb24uXG4gICAgICAgIC8vIFRoaXMgaXNuJ3QgU1FMIFNlcnZlci4gV2UgY2FuJ3QgZXZlbiBmaWx0ZXIgb3V0IE5VTExzLCBiZWNhdXNlIHdoYXQgaWYgdGhlIGpvaW4gZnVuY3Rpb24gc2F5cyBcImxlZnQgPT0gbnVsbCAmJiByaWdodCA9PSBudWxsXCIsIGxpa2Ugc29tZSBsaW5xIHRvIGVudGl0eSBxdWVyaWVzIGRvP1xuICAgICAgICAvLyBXZSBuZWVkIHRoZSBhYmlsaXR5IHRvIGNoZWNrIHRoZSBsZWZ0IHNpZGUgYWdhaW5zdCBldmVyeSByaWdodCBzaWRlLlxuICAgICAgICAvLyBJZiBpdCBpcyBhIGdlbmVyYXRvciwgaXQgY2FuJ3QgYmUgcmVzdGFydGVkIHRvIGFsbG93IHRoYXQuXG4gICAgICAgIGNvbnN0IGxlZnRHZW4gPSBuZXcgUmVzdGFydGFibGVHZW5lcmF0b3JfMS5SZXN0YXJ0YWJsZUdlbmVyYXRvcihkYXRhKTtcbiAgICAgICAgZm9yIChjb25zdCByaWdodEl0ZW0gb2Ygc2Vjb25kKSB7XG4gICAgICAgICAgICBsZXQgcmlnaHRNYXRjaGVkID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGxlZnRJdGVtIG9mIGxlZnRHZW4pIHtcbiAgICAgICAgICAgICAgICBpZiAob24obGVmdEl0ZW0sIHJpZ2h0SXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRNYXRjaGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgb3V0cHV0KGxlZnRJdGVtLCByaWdodEl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcmlnaHRNYXRjaGVkKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgb3V0cHV0KHVuZGVmaW5lZCwgcmlnaHRJdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxlZnRHZW4ucmVzdGFydCgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnJpZ2h0Sm9pbiA9IHJpZ2h0Sm9pbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBzZWxlY3RfcV86IHByb2plY3RzIGVhY2ggZWxlbWVudCBvZiBhIHNlcXVlbmNlIGludG8gYSBuZXcgZm9ybSBieSBjYWxsaW5nIGEgdHJhbnNmb3JtYXRpb24gZnVuY3Rpb24gb24gZWFjaCBlbGVtZW50LlxuICogT3B0aW9uYWxseSwgdGhlIHRyYW5zZm9ybWF0aW9uIGZ1bmN0aW9uIGNhbiByZWNlaXZlIHRoZSBpbmRleCBhcyBhIHNlY29uZCBhcmd1bWVudFxuICpcbiAqIGNhc3QoKSBpcyBtYXBwZWQgdG8gc2VsZWN0KCkgYmVjYXVzZSBpbiBqYXZhc2NyaXB0L3R5cGVzY3JpcHQsIHJ1bnRpbWUgY2FzdCgpIGRvZXNuJ3QgZXhpc3RcbiAqL1xuZnVuY3Rpb24gc2VsZWN0KHNlbGVjdEZ1bmN0aW9uKSB7XG4gICAgaWYgKCFzZWxlY3RGdW5jdGlvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfc2VsZWN0KGRhdGEpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIC8vIENhc3QgbmVlZGVkIHRvIGFsbG93IGNsZWFuIGludGVyZmFjZSBvdmVybG9hZHNcbiAgICAgICAgICAgIHlpZWxkIHNlbGVjdEZ1bmN0aW9uKGl0ZW0sIGluZGV4KyspO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnNlbGVjdCA9IHNlbGVjdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBzZWxlY3RNYW55X3FfOiBQcm9qZWN0cyBlYWNoIGVsZW1lbnQgb2YgYSBzZXF1ZW5jZSB0byBhbiBJRW51bWVyYWJsZTxUPiwgYW5kIGZsYXR0ZW5zIHRoZSByZXN1bHRpbmcgc2VxdWVuY2VzIGludG8gb25lIHNlcXVlbmNlIHVzaW5nIGEgc2VsZWN0b3IgZnVuY3Rpb25cbiAqIG9wdGlvbmFsbHksIHRoZSB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbiBjYW4gcmVjZWl2ZSB0aGUgaW5kZXggYXMgYSBzZWNvbmQgYXJndW1lbnRcbiAqIGFuIG9wdGlvbmFsIG91dHB1dCB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbiBwcm9jZXNzZXMgdGhlIG91dHB1dCBvZiB0aGUgc2VsZWN0b3IgZnVuY3Rpb24gdG8gcHJvZHVjZSBhbiBvdXRwdXRcbiAqL1xuZnVuY3Rpb24gc2VsZWN0TWFueShzdWJTZWxlY3RGdW5jdGlvbiwgb3V0cHV0RnVuY3Rpb24pIHtcbiAgICBpZiAoIXN1YlNlbGVjdEZ1bmN0aW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIGlmICghb3V0cHV0RnVuY3Rpb24pIHtcbiAgICAgICAgLy8gVHlwZXNjcmlwdCBkb2Vzbid0IGtub3cgdGhhdCBpZiBSIGlzIGxlZnQgb3V0LCBpdCdzIHRoZSBzYW1lIGFzIFRFbGVtZW50LlxuICAgICAgICAvLyBUaGlzIHdvdWxkIGFsbCBiZSBlYXNpZXIgaWYgdHlwZXNjcmlwdCBoYWQgcHJvcGVyIG92ZXJsb2Fkcy5cbiAgICAgICAgb3V0cHV0RnVuY3Rpb24gPSAoKHNyYywgcm93KSA9PiByb3cpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfc2VsZWN0TWFueShkYXRhKSB7XG4gICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICAvLyBDYXN0IG5lZWRlZCB0byBhbGxvdyBjbGVhbiBpbnRlcmZhY2Ugb3ZlcmxvYWRzXG4gICAgICAgICAgICBjb25zdCBpdGVyID0gc3ViU2VsZWN0RnVuY3Rpb24oaXRlbSwgaW5kZXgrKyk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHN1Ykl0ZW0gb2YgaXRlcikge1xuICAgICAgICAgICAgICAgIHlpZWxkIG91dHB1dEZ1bmN0aW9uKGl0ZW0sIHN1Ykl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnNlbGVjdE1hbnkgPSBzZWxlY3RNYW55O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBJRXF1YWxpdHlDb21wYXJlcl8xID0gcmVxdWlyZShcIi4vLi4vVHlwZXMvSUVxdWFsaXR5Q29tcGFyZXJcIik7XG4vKipcbiAqIHNlcXVlbmNlRXF1YWxfcV86IERldGVybWluZXMgd2hldGhlciB0d28gc2VxdWVuY2VzIGFyZSBlcXVhbCBieSBjb21wYXJpbmcgdGhlaXIgZWxlbWVudHMuXG4gKiBvcHRpb25hbCBlcXVhbGl0eSBjb21wYXJlciBjYW4gYmUgc3VwcGxpZWRcbiAqL1xuZnVuY3Rpb24gc2VxdWVuY2VFcXVhbChzZWNvbmQsIGNvbXBhcmVyKSB7XG4gICAgaWYgKCFzZWNvbmQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgY29uc3QgY29tcGFyZSA9IElFcXVhbGl0eUNvbXBhcmVyXzEuZXh0cmFjdEVxdWFsaXR5Q29tcGFyZXIoY29tcGFyZXIpO1xuICAgIGNvbnN0IGl0ZXIgPSBzZWNvbmRbU3ltYm9sLml0ZXJhdG9yXSgpO1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIGNvbnN0IHZhbDEgPSB0aGlzLm5leHQoKTtcbiAgICAgICAgY29uc3QgdmFsMiA9IGl0ZXIubmV4dCgpO1xuICAgICAgICBpZiAodmFsMS5kb25lICE9PSB2YWwyLmRvbmUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8gbm90IHRoZSBzYW1lIGxlbmd0aFxuICAgICAgICB9XG4gICAgICAgIGlmICh2YWwxLmRvbmUpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb21wYXJlKSB7XG4gICAgICAgICAgICBpZiAoIWNvbXBhcmUodmFsMS52YWx1ZSwgdmFsMi52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIG5vdCB0aGUgc2FtZSB2YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHZhbDEudmFsdWUgIT09IHZhbDIudmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIG5vdCB0aGUgc2FtZSB2YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHNhbWUgbGVuZ3RoIGFuZCBhbGwgaXRlbXMgaGF2ZSBzYW1lIHZhbHVlc1xuICAgIHJldHVybiB0cnVlO1xufVxuZXhwb3J0cy5zZXF1ZW5jZUVxdWFsID0gc2VxdWVuY2VFcXVhbDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBzaW5nbGVfcV86IFJldHVybnMgdGhlIGZpcnN0IGVsZW1lbnQgaW4gYSBzZXF1ZW5jZSwgdGhyb3dpbmcgYW4gZXhjZXB0aW9uIGlmIHRoZSBzZXF1ZW5jZSBpcyBlbXB0eSBvciBoYXMgbW9yZSB0aGFuIG9uZSBpdGVtLlxuICogVGFrZXMgYW4gb3B0aW9uYWwgZmlsdGVyIGNvbmRpdGlvbi5cbiAqL1xuZnVuY3Rpb24gc2luZ2xlKG1hdGNoRnVuY3Rpb24pIHtcbiAgICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgICBsZXQgZm91bmRJdGVtO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzKSB7XG4gICAgICAgIGlmICghbWF0Y2hGdW5jdGlvbikge1xuICAgICAgICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2VxdWVuY2UgY29udGFpbnMgbW9yZSB0aGFuIG9uZSBlbGVtZW50LlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvdW5kSXRlbSA9IGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobWF0Y2hGdW5jdGlvbihpdGVtKSkge1xuICAgICAgICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2VxdWVuY2UgY29udGFpbnMgbW9yZSB0aGFuIG9uZSBlbGVtZW50LlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvdW5kSXRlbSA9IGl0ZW07XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICAgIHJldHVybiBmb3VuZEl0ZW07XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihcIlNlcXVlbmNlIGhhcyBubyBlbGVtZW50cy5cIik7XG59XG5leHBvcnRzLnNpbmdsZSA9IHNpbmdsZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBzaW5nbGVPckRlZmF1bHRfcV86IFJldHVybnMgdGhlIGZpcnN0IGVsZW1lbnQgaW4gYSBzZXF1ZW5jZSwgdGhyb3dpbmcgYW4gZXhjZXB0aW9uIGlmIHRoZSBzZXF1ZW5jZSBoYXMgbW9yZSB0aGFuIG9uZSBpdGVtLlxuICogVGFrZXMgYW4gb3B0aW9uYWwgZmlsdGVyIGNvbmRpdGlvbi5cbiAqXG4gKiBJZiB0aGUgZmlsdGVyZWQgc2VxdWVuY2UgaXMgZW1wdHksIGl0IHJldHVybnMgdGhlIGRlZmF1bHQgdmFsdWUuXG4gKiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBwcm92aWRlZCBieSBhIHBhcmFtZXRlciBvciBpcyB1bmRlZmluZWQuXG4gKlxuICogKE5vdGUgdGhhdCBpbiBKYXZhU2NyaXB0LCB1bmxpa2UgQyMsIHRoZXJlJ3Mgbm8gd2F5IHRvIGtub3cgd2hhdCB0eXBlIGEgc2VxdWVuY2UgaXMgc3VwcG9zZWQgdG8gaGF2ZSwgZXNwZWNpYWxseSBub3QgYW4gZW1wdHkgc2VxdWVuY2UuKVxuICpcbiAqIEluIEphdmFTY3JpcHQsIGlmIHlvdSBjYWxsIHRoZSBtZXRob2Qgd2l0aCBhIHNpbmdsZSBwYXJhbWV0ZXIgYW5kIHdhbnQgaXQgdG8gYmUgdGhlIGRlZmF1bHQsIHRoZXJlJ3Mgbm8gY2xlYW4gd2F5IHRvIGluZGljYXRlIHRoYXQgdGhpc1xuICogaXMgd2hhdCB5b3Ugd2FudCwgYmVjYXVzZSBpdCBicmVha3MgdGhlIGNhc2Ugd2hlcmUgeW91IHBhc3MgYSBmaWx0ZXIgY29uZGl0aW9uLiBBIHNpbmdsZSBwcmVkaWNhdGUgY291bGQgYmUgYSBmaWx0ZXIgY29uZGl0aW9uIG9yIGl0XG4gKiBjb3VsZCBiZSB0aGUgZGVmYXVsdCBmb3IgYW4gYXJyYXkgb2YgcHJlZGljYXRlcyAuLi4geW91IGRvbid0IGtub3cuIFRoZXJlZm9yZSwgaWYgeW91IHdhbnQgdG8gcGFzcyBvbmx5IGEgZGVmYXVsdCB2YWx1ZSwgY2FsbCBsaWtlXG4gKiB0aGlzOiBzaW5nbGVPckRlZmF1bHRfcV8oeyBkZWZhdWx0VmFsdWU6IFwiTk9UIEZPVU5EXCIgfSlcbiAqL1xuZnVuY3Rpb24gc2luZ2xlT3JEZWZhdWx0KG1hdGNoRnVuY3Rpb24sIGRlZmF1bHRWYWx1ZSkge1xuICAgIGxldCB0ZXN0ZXI7XG4gICAgaWYgKG1hdGNoRnVuY3Rpb24gJiYgdHlwZW9mIG1hdGNoRnVuY3Rpb24gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB0ZXN0ZXIgPSBtYXRjaEZ1bmN0aW9uO1xuICAgIH1cbiAgICBsZXQgZGVmO1xuICAgIGlmIChtYXRjaEZ1bmN0aW9uICYmIFwiZGVmYXVsdFZhbHVlXCIgaW4gbWF0Y2hGdW5jdGlvbikge1xuICAgICAgICBkZWYgPSBtYXRjaEZ1bmN0aW9uLmRlZmF1bHRWYWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGRlZiA9IGRlZmF1bHRWYWx1ZTtcbiAgICB9XG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgbGV0IGZvdW5kSXRlbTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcykge1xuICAgICAgICBpZiAoIXRlc3Rlcikge1xuICAgICAgICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2VxdWVuY2UgY29udGFpbnMgbW9yZSB0aGFuIG9uZSBlbGVtZW50LlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvdW5kSXRlbSA9IGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGVzdGVyKGl0ZW0pKSB7XG4gICAgICAgICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTZXF1ZW5jZSBjb250YWlucyBtb3JlIHRoYW4gb25lIGVsZW1lbnQuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgZm91bmRJdGVtID0gaXRlbTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgcmV0dXJuIGZvdW5kSXRlbTtcbiAgICB9XG4gICAgcmV0dXJuIGRlZjtcbn1cbmV4cG9ydHMuc2luZ2xlT3JEZWZhdWx0ID0gc2luZ2xlT3JEZWZhdWx0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIHNraXBfcV86IEJ5cGFzc2VzIGEgc3BlY2lmaWVkIG51bWJlciBvZiBlbGVtZW50cyBpbiBhIHNlcXVlbmNlIGFuZCB0aGVuIHJldHVybnMgdGhlIHJlbWFpbmluZyBlbGVtZW50c1xuICovXG5mdW5jdGlvbiBza2lwKGNvdW50KSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX3NraXAoZGF0YSkge1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xuICAgICAgICAgICAgaWYgKGNvdW50IDw9IDApIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5za2lwID0gc2tpcDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBza2lwTGFzdF9xXzogUmV0dXJucyBhIG5ldyBlbnVtZXJhYmxlIGNvbGxlY3Rpb24gdGhhdCBjb250YWlucyB0aGUgZWxlbWVudHMgZnJvbSBzb3VyY2Ugd2l0aCB0aGUgbGFzdCBjb3VudCBlbGVtZW50cyBvZiB0aGUgc291cmNlIGNvbGxlY3Rpb24gb21pdHRlZFxuICovXG5mdW5jdGlvbiBza2lwTGFzdChjb3VudCkge1xuICAgIC8vIFRoaXMgaXMgYW5vdGhlciBvbmUgd2hpY2ggaXMgdGVjaG5pY2FsbHkgZGVmZXJyZWQgZXhlY3V0aW9uLCBidXQgdGhlcmUncyBubyB3YXkgdG8gc2tpcCB0aGUgbGFzdCBuIGl0ZW1zXG4gICAgLy8gaWYgeW91IGRvbid0IGNvdW50IHRoZSBsaXN0LlxuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF9za2lwTGFzdChkYXRhKSB7XG4gICAgICAgIGxldCB0b1JldHVybjtcbiAgICAgICAgaWYgKGNvdW50IDw9IDApIHtcbiAgICAgICAgICAgIHRvUmV0dXJuID0gZGF0YTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRvUmV0dXJuID0gWy4uLmRhdGFdLnNsaWNlKDAsIC0xICogY291bnQpO1xuICAgICAgICB9XG4gICAgICAgIHlpZWxkKiB0b1JldHVybjtcbiAgICB9KTtcbn1cbmV4cG9ydHMuc2tpcExhc3QgPSBza2lwTGFzdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBza2lwV2hpbGVfcV86IEJ5cGFzc2VzIGVsZW1lbnRzIGluIGEgc2VxdWVuY2UgYXMgbG9uZyBhcyBhIHNwZWNpZmllZCBjb25kaXRpb24gaXMgdHJ1ZSBhbmQgdGhlbiByZXR1cm5zIHRoZSByZW1haW5pbmcgZWxlbWVudHMuXG4gKiAgb3B0aW9uYWxseSwgdGhlIGZpbHRlciBmdW5jdGlvbiBjYW4gcmVjZWl2ZSB0aGUgaW5kZXggYXMgYSBzZWNvbmQgYXJndW1lbnRcbiAqL1xuZnVuY3Rpb24gc2tpcFdoaWxlKGZpbHRlcikge1xuICAgIGlmICghZmlsdGVyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF9za2lwV2hpbGUoZGF0YSkge1xuICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICBsZXQgdHJpZ2dlcmVkID0gZmFsc2U7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICAvLyBXaGVuZXZlciB0aGUgZmlsdGVyIGdvZXMgZmFsc2UsIHRyaWdnZXJlZCBuZWVkcyB0byBnbyB0cnVlLCBhbmQgaXQgaGFzIHRvIGJlIHN0aWNreVxuICAgICAgICAgICAgdHJpZ2dlcmVkID0gdHJpZ2dlcmVkIHx8ICFmaWx0ZXIoaXRlbSwgaW5kZXgrKyk7XG4gICAgICAgICAgICBpZiAodHJpZ2dlcmVkKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5za2lwV2hpbGUgPSBza2lwV2hpbGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogc3RlcF9xXzogcmV0dXJucyBldmVyeSBcInN0ZXBcIiBpdGVtcyBmcm9tIGEgc2VxdWVuY2VcbiAqXG4gKiBUaGlzIGlzIGEgbmV3IGl0ZW0gdGhhdCBJIGFkZGVkIGJlY2F1c2UgSSB0aG91Z2h0IGl0IG1pZ2h0IGJlIHVzZWZ1bC5cbiAqL1xuZnVuY3Rpb24gc3RlcChzdGVwQ291bnQpIHtcbiAgICBpZiAoc3RlcENvdW50IDw9IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgaW52YWxpZFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX3N0ZXAoZGF0YSkge1xuICAgICAgICBsZXQgdG1wU3RlcCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICBpZiAodG1wU3RlcCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBIYW5kbGUgc3RlcFxuICAgICAgICAgICAgdG1wU3RlcCsrO1xuICAgICAgICAgICAgaWYgKHRtcFN0ZXAgPT09IHN0ZXBDb3VudCkge1xuICAgICAgICAgICAgICAgIHRtcFN0ZXAgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnN0ZXAgPSBzdGVwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIHN1bV9xXzogQ29tcHV0ZXMgdGhlIHN1bSBvZiB0aGUgc2VxdWVuY2Ugb2YgdmFsdWVzIHRoYXQgYXJlIG9idGFpbmVkIGJ5IGludm9raW5nIGFuIG9wdGlvbmFsIHRyYW5zZm9ybSBmdW5jdGlvbiBvbiBlYWNoIGVsZW1lbnQgb2YgdGhlIHNlcXVlbmNlXG4gKi9cbmZ1bmN0aW9uIHN1bShzZWxlY3RGdW5jdGlvbikge1xuICAgIGxldCBzdW12YWwgPSAwO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzKSB7XG4gICAgICAgIGlmIChzZWxlY3RGdW5jdGlvbikge1xuICAgICAgICAgICAgY29uc3QgdmFsdWVUb0FkZCA9ICtzZWxlY3RGdW5jdGlvbihpdGVtKTtcbiAgICAgICAgICAgIGlmIChpc05hTih2YWx1ZVRvQWRkKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNlcXVlbmNlIGNvbnRhaW5zIGludmFsaWQgbnVtYmVyIGFmdGVyIHRyYW5zZm9ybWF0aW9uXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3VtdmFsID0gc3VtdmFsICsgdmFsdWVUb0FkZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaXRlbSAhPT0gJ251bWJlcicgfHwgaXNOYU4oaXRlbSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTZXF1ZW5jZSBjb250YWlucyBpbnZhbGlkIG51bWJlclwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN1bXZhbCA9IHN1bXZhbCArIGl0ZW07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN1bXZhbDtcbn1cbmV4cG9ydHMuc3VtID0gc3VtO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIHRha2VfcV86IFJldHVybnMgYSBzcGVjaWZpZWQgbnVtYmVyIG9mIGNvbnRpZ3VvdXMgZWxlbWVudHMgZnJvbSB0aGUgc3RhcnQgb2YgYSBzZXF1ZW5jZS5cbiAqIFRoZSBza2lwIHBhcmFtZXRlciBpcyBhIEpTLXNwZWNpZmljIG1vZGlmaWNhdGlvbiB0byBpbXBsZW1lbnQgUmFuZ2UsIHdoaWNoIGlzIGEgQyMtb25seSBvYmplY3QgKHdpdGggYW4gb2RkIHN5bnRheClcbiAqL1xuZnVuY3Rpb24gdGFrZShjb3VudCwgc2tpcCA9IDApIHtcbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfdGFrZShkYXRhKSB7XG4gICAgICAgIGlmIChza2lwIDwgMCkge1xuICAgICAgICAgICAgc2tpcCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChza2lwID4gMCkge1xuICAgICAgICAgICAgICAgIHNraXAtLTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMudGFrZSA9IHRha2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogc2tpcExhc3RfcV86IFJldHVybnMgYSBuZXcgZW51bWVyYWJsZSBjb2xsZWN0aW9uIHRoYXQgY29udGFpbnMgdGhlIGxhc3QgY291bnQgZWxlbWVudHMgZnJvbSBzb3VyY2VcbiAqL1xuZnVuY3Rpb24gdGFrZUxhc3QoY291bnQpIHtcbiAgICAvLyBUaGlzIGlzIGFub3RoZXIgb25lIHdoaWNoIGlzIHRlY2huaWNhbGx5IGRlZmVycmVkIGV4ZWN1dGlvbiwgYnV0IHRoZXJlJ3Mgbm8gd2F5IHRvIHRha2UgdGhlIGxhc3QgbiBpdGVtc1xuICAgIC8vIGlmIHlvdSBkb24ndCBjb3VudCB0aGUgbGlzdC5cbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfdGFrZUxhc3QoZGF0YSkge1xuICAgICAgICBpZiAoY291bnQgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHlpZWxkKiBbLi4uZGF0YV0uc2xpY2UoLTEgKiBjb3VudCk7XG4gICAgfSk7XG59XG5leHBvcnRzLnRha2VMYXN0ID0gdGFrZUxhc3Q7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogdGFrZVdoaWxlX3FfOiBSZXR1cm5zIGVsZW1lbnRzIGZyb20gYSBzZXF1ZW5jZSBhcyBsb25nIGFzIGEgc3BlY2lmaWVkIGNvbmRpdGlvbiBpcyB0cnVlLlxuICogT3B0aW9uYWxseSwgdGhlIGZpbHRlciBmdW5jdGlvbiBjYW4gcmVjZWl2ZSB0aGUgaW5kZXggYXMgYSBzZWNvbmQgYXJndW1lbnRcbiAqL1xuZnVuY3Rpb24gdGFrZVdoaWxlKGZpbHRlcikge1xuICAgIGlmICghZmlsdGVyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF90YWtlV2hpbGUoZGF0YSkge1xuICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICBsZXQgdHJpZ2dlcmVkID0gZmFsc2U7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICAvLyBXaGVuZXZlciB0aGUgZmlsdGVyIGdvZXMgZmFsc2UsIHRyaWdnZXJlZCBuZWVkcyB0byBnbyB0cnVlLCBhbmQgaXQgaGFzIHRvIGJlIHN0aWNreVxuICAgICAgICAgICAgdHJpZ2dlcmVkID0gdHJpZ2dlcmVkIHx8ICFmaWx0ZXIoaXRlbSwgaW5kZXgrKyk7XG4gICAgICAgICAgICBpZiAoIXRyaWdnZXJlZCkge1xuICAgICAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMudGFrZVdoaWxlID0gdGFrZVdoaWxlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBMb29rdXBfMSA9IHJlcXVpcmUoXCIuLi9UeXBlcy9Mb29rdXBcIik7XG4vKipcbiAqIHRvQXJyYXlfcV86IFJldHVybnMgYSBqYXZhc2NyaXB0IGFycmF5IGNvbnRhaW5pbmcgdGhlIHNlcXVlbmNlIHZhbHVlcy5cbiAqIEFsaWFzZWQgdG8gdG9MaXN0X3FfIGFzIHdlbGwuXG4gKi9cbmZ1bmN0aW9uIHRvQXJyYXkoKSB7XG4gICAgcmV0dXJuIFsuLi50aGlzXTtcbn1cbmV4cG9ydHMudG9BcnJheSA9IHRvQXJyYXk7XG4vKipcbiAqIHRvSGFzaFNldF9xXzogUmV0dXJucyBhIFNldCBmcm9tIGFuIGVudW1lcmFibGUuXG4gKiBUaGUgQyMgYWJpbGl0eSB0byBzZW5kIGEgbm9uLWRlZmF1bHQgZXF1YWxpdHkgY29tcGFyZXIgaXMgbm90IGluY2x1ZGVkIGJlY2F1c2UgamF2YXNjcmlwdCBzZXRzIGRvIG5vdCBhbGxvdyBjdXN0b20gZXF1YWxpdHkuXG4gKi9cbmZ1bmN0aW9uIHRvSGFzaFNldCgpIHtcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgU2V0KCk7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgcmVzdWx0LmFkZChpdGVtKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMudG9IYXNoU2V0ID0gdG9IYXNoU2V0O1xuLyoqXG4gKiB0b0RpY3Rpb25hcnlfcV86IFJldHVybnMgYSBqYXZhc2NyaXB0IG9iamVjdCB3aXRoIHN0cmluZyBrZXlzIGFuZCB2YWx1ZXMsIGJhc2VkIG9uIGEga2V5U2VsZWN0b3IgZnVuY3Rpb24gYW5kIGFuIG9wdGlvbmFsIGVsZW1lbnRcbiAqIHNlbGVjdG9yIGZ1bmN0aW9uLlxuICpcbiAqIFRoZSBDIyBhYmlsaXR5IHRvIHNlbmQgYSBub24tZGVmYXVsdCBlcXVhbGl0eSBjb21wYXJlciBpcyBub3QgaW5jbHVkZWQgYmVjYXVzZSBqYXZhc2NyaXB0IG9iamVjdHMgZG8gbm90IGFsbG93IGN1c3RvbSBlcXVhbGl0eS5cbiAqL1xuZnVuY3Rpb24gdG9EaWN0aW9uYXJ5KGtleVNlbGVjdG9yLCBlbGVtZW50U2VsZWN0b3IpIHtcbiAgICBpZiAoIWtleVNlbGVjdG9yKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIC8vIEluIEMjLCB0b0RpY3Rpb25hcnkoKSBjYW4gcHJvZHVjZSBkaWN0aW9uYXJpZXMgd2l0aCBuby1zdHJpbmcga2V5cy5cbiAgICAvLyBUaGlzIGlzIGlsbGVnYWwgaW4gamF2YXNjcmlwdCwgc28gdG9EaWN0aW9uYXJ5KCkgaGFzIHRvIGJlIGxpbWl0ZWQuXG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgY29uc3Qga2V5ID0ga2V5U2VsZWN0b3IoaXRlbSk7XG4gICAgICAgIGlmIChrZXkgaW4gcmVzdWx0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTZXF1ZW5jZSBjb250YWlucyBkdXBsaWNhdGUga2V5c1wiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudFNlbGVjdG9yKSB7XG4gICAgICAgICAgICByZXN1bHRba2V5XSA9IGVsZW1lbnRTZWxlY3RvcihpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIFRFbGVtZW50ID0gVCBidXQgdHlwZXNjcmlwdCBkb2Vzbid0IGtub3cgdGhhdCBiZWNhdXNlIHdlYWsgb3ZlcmxvYWRzXG4gICAgICAgICAgICByZXN1bHRba2V5XSA9IGl0ZW07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMudG9EaWN0aW9uYXJ5ID0gdG9EaWN0aW9uYXJ5O1xuLyoqXG4gKiB0b01hcF9xXzogUmV0dXJucyBhIGphdmFzY3JpcHQgTWFwIHdpdGggc3BlY2lmaWVkIGtleXMgYW5kIHZhbHVlcywgYmFzZWQgb24gYSBrZXlTZWxlY3RvciBmdW5jdGlvbiBhbmQgYW4gb3B0aW9uYWwgZWxlbWVudFxuICogc2VsZWN0b3IgZnVuY3Rpb24uXG4gKlxuICogTm90ZSB0aGF0IGluIGdlbmVyYWwsIG9iamVjdHMgZG9uJ3QgbWFrZSBnb29kIE1hcCBrZXlzLlxuICpcbiAqIFRoZSBDIyBhYmlsaXR5IHRvIHNlbmQgYSBub24tZGVmYXVsdCBlcXVhbGl0eSBjb21wYXJlciBpcyBub3QgaW5jbHVkZWQgYmVjYXVzZSBqYXZhc2NyaXB0IG1hcHMgZG8gbm90IGFsbG93IGN1c3RvbSBlcXVhbGl0eS5cbiAqL1xuZnVuY3Rpb24gdG9NYXAoa2V5U2VsZWN0b3IsIGVsZW1lbnRTZWxlY3Rvcikge1xuICAgIGlmICgha2V5U2VsZWN0b3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgLy8gSW4gQyMsIHRvRGljdGlvbmFyeSgpIGNhbiBwcm9kdWNlIGRpY3Rpb25hcmllcyB3aXRoIG5vbi1zdHJpbmcga2V5cy5cbiAgICAvLyBUaGlzIGlzIGlsbGVnYWwgaW4gamF2YXNjcmlwdCwgc28gdG9EaWN0aW9uYXJ5KCkgaGFzIHRvIGJlIGxpbWl0ZWQuXG4gICAgLy8gVG9NYXAoKSBtZXRob2QgY292ZXJzIHRoZSBnYXAuXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IE1hcCgpO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IGtleVNlbGVjdG9yKGl0ZW0pO1xuICAgICAgICBpZiAocmVzdWx0LmhhcyhrZXkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTZXF1ZW5jZSBjb250YWlucyBkdXBsaWNhdGUga2V5c1wiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudFNlbGVjdG9yKSB7XG4gICAgICAgICAgICByZXN1bHQuc2V0KGtleSwgZWxlbWVudFNlbGVjdG9yKGl0ZW0pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIFRFbGVtZW50ID0gVCBidXQgdHlwZXNjcmlwdCBkb2Vzbid0IGtub3cgdGhhdCBiZWNhdXNlIHdlYWsgb3ZlcmxvYWRzXG4gICAgICAgICAgICByZXN1bHQuc2V0KGtleSwgaXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMudG9NYXAgPSB0b01hcDtcbi8qKlxuICogdG9Mb29rdXBfcV86IFJldHVybnMgYSBMb29rdXAgKGN1c3RvbSBjbGFzcykgTWFwIHdpdGggc3BlY2lmaWVkIGtleXMgYW5kIHZhbHVlcywgYmFzZWQgb24gYSBrZXlTZWxlY3RvciBmdW5jdGlvbiBhbmQgYW4gb3B0aW9uYWwgZWxlbWVudFxuICogc2VsZWN0b3IgZnVuY3Rpb24uIEEgTG9va3VwIGlzIGxpa2UgYSBNYXAgZXhjZXB0IGl0IGFsbG93cyBtdWx0aXBsZSB2YWx1ZXMgdG8gYmUgc2V0IGZvciBhIGdpdmVuIGtleS5cbiAqXG4gKiBUaGUgQyMgYWJpbGl0eSB0byBzZW5kIGEgbm9uLWRlZmF1bHQgZXF1YWxpdHkgY29tcGFyZXIgaXMgbm90IGluY2x1ZGVkIGJlY2F1c2UgamF2YXNjcmlwdCBtYXBzIGRvIG5vdCBhbGxvdyBjdXN0b20gZXF1YWxpdHkuIEJlaGluZCB0aGVcbiAqIHNjZW5lcywgdGhpcyBpcyB0aWxsIHVzaW5nIGEgbWFwLlxuICpcbiAqIE5vdGUgdGhhdCBpbiBnZW5lcmFsLCBvYmplY3RzIGRvbid0IG1ha2UgZ29vZCBNYXAga2V5cy5cbiAqL1xuZnVuY3Rpb24gdG9Mb29rdXAoa2V5U2VsZWN0b3IsIGVsZW1lbnRTZWxlY3Rvcikge1xuICAgIGlmICgha2V5U2VsZWN0b3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IExvb2t1cF8xLkxvb2t1cCgpO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IGtleVNlbGVjdG9yKGl0ZW0pO1xuICAgICAgICBpZiAoZWxlbWVudFNlbGVjdG9yKSB7XG4gICAgICAgICAgICByZXN1bHQuc2V0KGtleSwgZWxlbWVudFNlbGVjdG9yKGl0ZW0pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIFRFbGVtZW50ID0gVCBidXQgdHlwZXNjcmlwdCBkb2Vzbid0IGtub3cgdGhhdCBiZWNhdXNlIHdlYWsgb3ZlcmxvYWRzXG4gICAgICAgICAgICByZXN1bHQuc2V0KGtleSwgaXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMudG9Mb29rdXAgPSB0b0xvb2t1cDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgSUVxdWFsaXR5Q29tcGFyZXJfMSA9IHJlcXVpcmUoXCIuLi9UeXBlcy9JRXF1YWxpdHlDb21wYXJlclwiKTtcbi8qKlxuICogdW5pb25fcV86IGNvbmNhdGVuYXRlcyB0d28gc2VxdWVuY2VzIHJldHVybmluZyB0aGUgc2V0IHNlcXVlbmNlLlxuICogb3B0aW9uYWwgZXF1YWxpdHkgY29tcGFyZXIgY2FuIGJlIHN1cHBsaWVkIHRvIGNvbXBhcmUgdmFsdWVzXG4gKi9cbmZ1bmN0aW9uIHVuaW9uKHNlY29uZCwgY29tcGFyZXIpIHtcbiAgICBpZiAoIXNlY29uZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICBjb25zdCBjb21wYXJlID0gSUVxdWFsaXR5Q29tcGFyZXJfMS5leHRyYWN0RXF1YWxpdHlDb21wYXJlcihjb21wYXJlcik7XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX3VuaW9uKGRhdGEpIHtcbiAgICAgICAgLy8gTm8gd2F5IGFyb3VuZCB0aGlzLCBidXQgd2UgbmVlZCB0byBrZWVwIGEgaGlzdG9yeSBvZiBldmVyeSBpdGVtIHJldHVybmVkLiBCb3RoIHRoZSBmaXJzdCBhbmQgc2Vjb25kIGxpc3RzLlxuICAgICAgICBjb25zdCBoaXN0b3J5ID0gbmV3IFNldCgpO1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xuICAgICAgICAgICAgaWYgKGNvbXBhcmUpIHtcbiAgICAgICAgICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGlubmVySXRlbSBvZiBoaXN0b3J5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21wYXJlKGl0ZW0sIGlubmVySXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5hZGQoaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCFoaXN0b3J5LmhhcyhpdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LmFkZChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gYSBsaXR0bGUgYml0IG9mIGNvcHlwYXN0YSBoZXJlIGJ1dCBpdCdzIG5vdCB3b3J0aCBtYWtpbmcgYSBzdWItZnVuY3Rpb24gZm9yIGEgc2luZ2xlIG9jY3VycmVuY2VcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHNlY29uZCkge1xuICAgICAgICAgICAgaWYgKGNvbXBhcmUpIHtcbiAgICAgICAgICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGlubmVySXRlbSBvZiBoaXN0b3J5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21wYXJlKGl0ZW0sIGlubmVySXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5hZGQoaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCFoaXN0b3J5LmhhcyhpdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LmFkZChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMudW5pb24gPSB1bmlvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgSUVxdWFsaXR5Q29tcGFyZXJfMSA9IHJlcXVpcmUoXCIuLi9UeXBlcy9JRXF1YWxpdHlDb21wYXJlclwiKTtcbi8qKlxuICogdW5pb25fcV86IGNvbmNhdGVuYXRlcyB0d28gc2VxdWVuY2VzIHJldHVybmluZyB0aGUgc2V0IHNlcXVlbmNlICBiYXNlZCBvbiBrZXlzIHJldHVybmVkIGJ5IGEga2V5IHNlbGVjdG9yIGZ1bmN0aW9uLlxuICogb3B0aW9uYWwgZXF1YWxpdHkgY29tcGFyZXIgY2FuIGJlIHN1cHBsaWVkIHRvIGNvbXBhcmUgdmFsdWVzXG4gKi9cbmZ1bmN0aW9uIHVuaW9uQnkoc2Vjb25kLCBrZXlTZWxlY3RvciwgY29tcGFyZXIpIHtcbiAgICBpZiAoIXNlY29uZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICBjb25zdCBjb21wYXJlID0gSUVxdWFsaXR5Q29tcGFyZXJfMS5leHRyYWN0RXF1YWxpdHlDb21wYXJlcihjb21wYXJlcik7XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX3VuaW9uQnkoZGF0YSkge1xuICAgICAgICAvLyBObyB3YXkgYXJvdW5kIHRoaXMsIGJ1dCB3ZSBuZWVkIHRvIGtlZXAgYSBoaXN0b3J5IG9mIGV2ZXJ5IGl0ZW0gcmV0dXJuZWQuIEJvdGggdGhlIGZpcnN0IGFuZCBzZWNvbmQgbGlzdHMuXG4gICAgICAgIGNvbnN0IGhpc3RvcnkgPSBuZXcgU2V0KCk7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBrZXlTZWxlY3RvcihpdGVtKTtcbiAgICAgICAgICAgIGlmIChjb21wYXJlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBpbm5lckl0ZW0gb2YgaGlzdG9yeSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGFyZShrZXksIGlubmVySXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5hZGQoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIWhpc3RvcnkuaGFzKGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5hZGQoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gYSBsaXR0bGUgYml0IG9mIGNvcHlwYXN0YSBoZXJlIGJ1dCBpdCdzIG5vdCB3b3J0aCBtYWtpbmcgYSBzdWItZnVuY3Rpb24gZm9yIGEgc2luZ2xlIG9jY3VycmVuY2VcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHNlY29uZCkge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0ga2V5U2VsZWN0b3IoaXRlbSk7XG4gICAgICAgICAgICBpZiAoY29tcGFyZSkge1xuICAgICAgICAgICAgICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaW5uZXJJdGVtIG9mIGhpc3RvcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBhcmUoa2V5LCBpbm5lckl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpc3RvcnkuYWRkKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCFoaXN0b3J5LmhhcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpc3RvcnkuYWRkKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnVuaW9uQnkgPSB1bmlvbkJ5O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIHdoZXJlX3FfOiBGaWx0ZXJzIGEgc2VxdWVuY2Ugb2YgdmFsdWVzIGJhc2VkIG9uIGEgcHJlZGljYXRlLlxuICogT3B0aW9uYWxseSwgdGhlIGZpbHRlciBmdW5jdGlvbiBjYW4gcmVjZWl2ZSB0aGUgaW5kZXggYXMgYSBzZWNvbmQgYXJndW1lbnRcbiAqL1xuZnVuY3Rpb24gd2hlcmUoZmlsdGVyKSB7XG4gICAgaWYgKCFmaWx0ZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX3doZXJlKGRhdGEpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChmaWx0ZXIoaXRlbSwgaW5kZXgrKykpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLndoZXJlID0gd2hlcmU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogemlwX3FfOiBQcm9kdWNlcyBhIHNlcXVlbmNlIG9mIHR1cGxlcyB3aXRoIGVsZW1lbnRzIGZyb20gdHdvIG9yIHRocmVlIHNwZWNpZmllZCBzZXF1ZW5jZXMuXG4gKiBJbiBwbGFjZSBvZiBhIHRoaXJkIHNlcXVlbmNlLCBhIGZ1bmN0aW9uIGNhbiBiZSBwcm92aWRlZCB0aGF0IGNvbWJpbmVzIHRoZSBmaXJzdCB0d28uXG4gKi9cbmZ1bmN0aW9uIHppcChzZWNvbmQsIHRoaXJkKSB7XG4gICAgaWYgKCFzZWNvbmQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX3ppcChkYXRhKSB7XG4gICAgICAgIGNvbnN0IGl0ZXIyID0gc2Vjb25kW1N5bWJvbC5pdGVyYXRvcl0oKTtcbiAgICAgICAgbGV0IGl0ZXIzO1xuICAgICAgICBsZXQgZnVuYzM7XG4gICAgICAgIGxldCBkb25lMyA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcmQgJiYgdHlwZW9mIHRoaXJkID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGZ1bmMzID0gdGhpcmQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcmQpIHtcbiAgICAgICAgICAgIGl0ZXIzID0gdGhpcmRbU3ltYm9sLml0ZXJhdG9yXSgpO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICBjb25zdCB2YWwxID0gZGF0YS5uZXh0KCk7XG4gICAgICAgICAgICBjb25zdCB2YWwyID0gaXRlcjIubmV4dCgpO1xuICAgICAgICAgICAgbGV0IHZhbDM7XG4gICAgICAgICAgICBpZiAoaXRlcjMpIHtcbiAgICAgICAgICAgICAgICB2YWwzID0gaXRlcjMubmV4dCgpO1xuICAgICAgICAgICAgICAgIGRvbmUzID0gdmFsMy5kb25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQXMgc29vbiBhcyBhbnkgb2YgdGhlIHNlcXVlbmNlcyBydW5zIG91dCBvZiBkYXRhLCB3ZSBoYWx0LlxuICAgICAgICAgICAgaWYgKHZhbDEuZG9uZSB8fCB2YWwyLmRvbmUgfHwgZG9uZTMpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpdGVyMyAmJiB2YWwzKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgW3ZhbDEudmFsdWUsIHZhbDIudmFsdWUsIHZhbDMudmFsdWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZnVuYzMpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBbdmFsMS52YWx1ZSwgdmFsMi52YWx1ZSwgZnVuYzModmFsMS52YWx1ZSwgdmFsMi52YWx1ZSldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgeWllbGQgW3ZhbDEudmFsdWUsIHZhbDIudmFsdWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnppcCA9IHppcDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgR3JvdXBpbmcge1xuICAgIGNvbnN0cnVjdG9yKGtleSwgdmFsdWUsIGVsZW1lbnRTZWxlY3RGdW5jdGlvbikge1xuICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICAgICAgdGhpcy5fdmFsdWVzID0gW3ZhbHVlXTtcbiAgICAgICAgaWYgKGVsZW1lbnRTZWxlY3RGdW5jdGlvbikge1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0b3IgPSBlbGVtZW50U2VsZWN0RnVuY3Rpb247XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RvciA9IGsgPT4gaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgdmFsdWVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWVzLm1hcCh2ID0+IHRoaXMuX3NlbGVjdG9yKHYpKTtcbiAgICB9XG4gICAgZ2V0IFtTeW1ib2wuaXRlcmF0b3JdKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWVzLm1hcCh2ID0+IHRoaXMuX3NlbGVjdG9yKHYpKTtcbiAgICB9XG4gICAgYWRkKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXM7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXMudG9TdHJpbmcoKTtcbiAgICB9XG59XG5leHBvcnRzLkdyb3VwaW5nID0gR3JvdXBpbmc7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGV4dHJhY3RDb21wYXJlcihvYmopIHtcbiAgICBpZiAoIW9iaikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb2JqID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG4gICAgaWYgKFwiY29tcGFyZVwiIGluIG9iaikge1xuICAgICAgICByZXR1cm4gb2JqLmNvbXBhcmU7XG4gICAgfVxufVxuZXhwb3J0cy5leHRyYWN0Q29tcGFyZXIgPSBleHRyYWN0Q29tcGFyZXI7XG5mdW5jdGlvbiBkZWZhdWx0Q29tcGFyZXIoeCwgeSkge1xuICAgIGlmICh4ID4geSkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgaWYgKHggPCB5KSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG59XG5leHBvcnRzLmRlZmF1bHRDb21wYXJlciA9IGRlZmF1bHRDb21wYXJlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gZXh0cmFjdEVxdWFsaXR5Q29tcGFyZXIob2JqKSB7XG4gICAgaWYgKCFvYmopIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICAgIGlmIChcImVxdWFsc1wiIGluIG9iaikge1xuICAgICAgICByZXR1cm4gb2JqLmVxdWFscztcbiAgICB9XG59XG5leHBvcnRzLmV4dHJhY3RFcXVhbGl0eUNvbXBhcmVyID0gZXh0cmFjdEVxdWFsaXR5Q29tcGFyZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogQSBsb29rdXAgaXMgYSBNYXAgdGhhdCBhbGxvd3MgbXVsdGlwbGUgdmFsdWVzIGZvciBlYWNoIGtleS4gVGhlcmUgaXMgbm8gYnVpbHQtaW4gSmF2YXNjcmlwdCBhbmFsb2d1ZS5cbiAqL1xuY2xhc3MgTG9va3VwIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fZGF0YSA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgZ2V0IHNpemUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhLnNpemU7XG4gICAgfVxuICAgIFtTeW1ib2wuaXRlcmF0b3JdKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVtTeW1ib2wuaXRlcmF0b3JdKCk7XG4gICAgfVxuICAgIGVudHJpZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhLmVudHJpZXMoKTtcbiAgICB9XG4gICAga2V5cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGEua2V5cygpO1xuICAgIH1cbiAgICB2YWx1ZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhLnZhbHVlcygpO1xuICAgIH1cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5fZGF0YS5jbGVhcigpO1xuICAgIH1cbiAgICBkZWxldGUoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhLmRlbGV0ZShrZXkpO1xuICAgIH1cbiAgICBmb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcpIHtcbiAgICAgICAgdGhpcy5fZGF0YS5mb3JFYWNoKGNhbGxiYWNrZm4pO1xuICAgIH1cbiAgICBnZXQoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhLmdldChrZXkpO1xuICAgIH1cbiAgICBoYXMoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhLmhhcyhrZXkpO1xuICAgIH1cbiAgICBzZXQoa2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5fZGF0YS5oYXMoa2V5KSkge1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuX2RhdGEuZ2V0KGtleSk7XG4gICAgICAgICAgICBpdGVtLnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fZGF0YS5zZXQoa2V5LCBbdmFsdWVdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgICB9XG59XG5leHBvcnRzLkxvb2t1cCA9IExvb2t1cDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gaXNOb25lKHRlc3QpIHtcbiAgICByZXR1cm4gKHRlc3QgPT0gbnVsbCB8fCB0ZXN0ID09PSB1bmRlZmluZWQpO1xufVxuZXhwb3J0cy5pc05vbmUgPSBpc05vbmU7XG4iXX0=
