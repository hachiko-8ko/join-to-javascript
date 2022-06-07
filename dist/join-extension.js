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
const Enumerable_1 = require("../Enumerable/Enumerable");
/**
 * empty_q_: Returns an empty IEnumerable<T> that has the specified type argument.
 * Note that types are typescript-only fictitious entities that aren't emitted.
 */
function empty() {
    return new Enumerable_1.Enumerable([]);
}
exports.empty = empty;

},{"../Enumerable/Enumerable":1}],23:[function(require,module,exports){
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
 * takeLast_q_: Returns a new enumerable collection that contains the last count elements from source
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL25wbV9nbG9iYWwvbGliL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvRW51bWVyYWJsZS9FbnVtZXJhYmxlLmpzIiwic3JjL0VudW1lcmFibGUvT3JkZXJlZEVudW1lcmFibGUuanMiLCJzcmMvRXh0ZW5kLmpzIiwic3JjL0dlbmVyYXRvcnMvTWFrZUdlbmVyYXRvci5qcyIsInNyYy9HZW5lcmF0b3JzL1Jlc3RhcnRhYmxlR2VuZXJhdG9yLmpzIiwic3JjL1Byb3RvdHlwZUV4dGVuc2lvbi5qcyIsInNyYy9RdWVyeWFibGUvQWdncmVnYXRlLmpzIiwic3JjL1F1ZXJ5YWJsZS9BbGwuanMiLCJzcmMvUXVlcnlhYmxlL0FueS5qcyIsInNyYy9RdWVyeWFibGUvQXBwZW5kLmpzIiwic3JjL1F1ZXJ5YWJsZS9BdmVyYWdlLmpzIiwic3JjL1F1ZXJ5YWJsZS9DaHVuay5qcyIsInNyYy9RdWVyeWFibGUvQ29uY2F0LmpzIiwic3JjL1F1ZXJ5YWJsZS9Db250YWlucy5qcyIsInNyYy9RdWVyeWFibGUvQ291bnQuanMiLCJzcmMvUXVlcnlhYmxlL0Nyb3NzSm9pbi5qcyIsInNyYy9RdWVyeWFibGUvRGVmYXVsdElmRW1wdHkuanMiLCJzcmMvUXVlcnlhYmxlL0Rpc3RpbmN0LmpzIiwic3JjL1F1ZXJ5YWJsZS9EaXN0aW5jdEJ5LmpzIiwic3JjL1F1ZXJ5YWJsZS9FbGVtZW50QXQuanMiLCJzcmMvUXVlcnlhYmxlL0VsZW1lbnRBdE9yRGVmYXVsdC5qcyIsInNyYy9RdWVyeWFibGUvRW1wdHkuanMiLCJzcmMvUXVlcnlhYmxlL0V4Y2VwdC5qcyIsInNyYy9RdWVyeWFibGUvRXhjZXB0QnkuanMiLCJzcmMvUXVlcnlhYmxlL0ZpcnN0LmpzIiwic3JjL1F1ZXJ5YWJsZS9GaXJzdE9yRGVmYXVsdC5qcyIsInNyYy9RdWVyeWFibGUvRm9yRWFjaC5qcyIsInNyYy9RdWVyeWFibGUvRnVsbEpvaW4uanMiLCJzcmMvUXVlcnlhYmxlL0dyb3VwQnkuanMiLCJzcmMvUXVlcnlhYmxlL0dyb3VwSm9pbi5qcyIsInNyYy9RdWVyeWFibGUvSW5uZXJKb2luLmpzIiwic3JjL1F1ZXJ5YWJsZS9JbnRlcnNlY3QuanMiLCJzcmMvUXVlcnlhYmxlL0ludGVyc2VjdEJ5LmpzIiwic3JjL1F1ZXJ5YWJsZS9Kb2luLmpzIiwic3JjL1F1ZXJ5YWJsZS9MYXN0LmpzIiwic3JjL1F1ZXJ5YWJsZS9MYXN0T3JEZWZhdWx0LmpzIiwic3JjL1F1ZXJ5YWJsZS9MZWZ0Sm9pbi5qcyIsInNyYy9RdWVyeWFibGUvTG9uZ0NvdW50LmpzIiwic3JjL1F1ZXJ5YWJsZS9NYXguanMiLCJzcmMvUXVlcnlhYmxlL01heEJ5LmpzIiwic3JjL1F1ZXJ5YWJsZS9NYXhPckRlZmF1bHQuanMiLCJzcmMvUXVlcnlhYmxlL01pbi5qcyIsInNyYy9RdWVyeWFibGUvTWluQnkuanMiLCJzcmMvUXVlcnlhYmxlL01pbk9yRGVmYXVsdC5qcyIsInNyYy9RdWVyeWFibGUvT2ZUeXBlLmpzIiwic3JjL1F1ZXJ5YWJsZS9PcmRlckJ5LmpzIiwic3JjL1F1ZXJ5YWJsZS9PdXRlckpvaW4uanMiLCJzcmMvUXVlcnlhYmxlL1ByZXBlbmQuanMiLCJzcmMvUXVlcnlhYmxlL1JlcGxpY2F0ZS5qcyIsInNyYy9RdWVyeWFibGUvUmV2ZXJzZS5qcyIsInNyYy9RdWVyeWFibGUvUmlnaHRKb2luLmpzIiwic3JjL1F1ZXJ5YWJsZS9TZWxlY3QuanMiLCJzcmMvUXVlcnlhYmxlL1NlbGVjdE1hbnkuanMiLCJzcmMvUXVlcnlhYmxlL1NlcXVlbmNlRXF1YWwuanMiLCJzcmMvUXVlcnlhYmxlL1NpbmdsZS5qcyIsInNyYy9RdWVyeWFibGUvU2luZ2xlT3JEZWZhdWx0LmpzIiwic3JjL1F1ZXJ5YWJsZS9Ta2lwLmpzIiwic3JjL1F1ZXJ5YWJsZS9Ta2lwTGFzdC5qcyIsInNyYy9RdWVyeWFibGUvU2tpcFdoaWxlLmpzIiwic3JjL1F1ZXJ5YWJsZS9TdGVwLmpzIiwic3JjL1F1ZXJ5YWJsZS9TdW0uanMiLCJzcmMvUXVlcnlhYmxlL1Rha2UuanMiLCJzcmMvUXVlcnlhYmxlL1Rha2VMYXN0LmpzIiwic3JjL1F1ZXJ5YWJsZS9UYWtlV2hpbGUuanMiLCJzcmMvUXVlcnlhYmxlL1RvQ29udmVyc2lvbnMuanMiLCJzcmMvUXVlcnlhYmxlL1VuaW9uLmpzIiwic3JjL1F1ZXJ5YWJsZS9VbmlvbkJ5LmpzIiwic3JjL1F1ZXJ5YWJsZS9XaGVyZS5qcyIsInNyYy9RdWVyeWFibGUvWmlwLmpzIiwic3JjL1R5cGVzL0dyb3VwaW5nLmpzIiwic3JjL1R5cGVzL0lDb21wYXJlci5qcyIsInNyYy9UeXBlcy9JRXF1YWxpdHlDb21wYXJlci5qcyIsInNyYy9UeXBlcy9Mb29rdXAuanMiLCJzcmMvVHlwZXMvTm9uZVR5cGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDek9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgTWFrZUdlbmVyYXRvcl8xID0gcmVxdWlyZShcIi4uL0dlbmVyYXRvcnMvTWFrZUdlbmVyYXRvclwiKTtcbmNvbnN0IEFnZ3JlZ2F0ZV8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9BZ2dyZWdhdGVcIik7XG5jb25zdCBBbGxfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvQWxsXCIpO1xuY29uc3QgQW55XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0FueVwiKTtcbmNvbnN0IEFwcGVuZF8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9BcHBlbmRcIik7XG5jb25zdCBBdmVyYWdlXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0F2ZXJhZ2VcIik7XG5jb25zdCBDaHVua18xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9DaHVua1wiKTtcbmNvbnN0IENvbmNhdF8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9Db25jYXRcIik7XG5jb25zdCBDb250YWluc18xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9Db250YWluc1wiKTtcbmNvbnN0IENvdW50XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0NvdW50XCIpO1xuY29uc3QgQ3Jvc3NKb2luXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0Nyb3NzSm9pblwiKTtcbmNvbnN0IERlZmF1bHRJZkVtcHR5XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0RlZmF1bHRJZkVtcHR5XCIpO1xuY29uc3QgRGlzdGluY3RfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvRGlzdGluY3RcIik7XG5jb25zdCBEaXN0aW5jdEJ5XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0Rpc3RpbmN0QnlcIik7XG5jb25zdCBFbGVtZW50QXRfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvRWxlbWVudEF0XCIpO1xuY29uc3QgRWxlbWVudEF0T3JEZWZhdWx0XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0VsZW1lbnRBdE9yRGVmYXVsdFwiKTtcbmNvbnN0IEVtcHR5XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0VtcHR5XCIpO1xuY29uc3QgRXhjZXB0XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0V4Y2VwdFwiKTtcbmNvbnN0IEV4Y2VwdEJ5XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0V4Y2VwdEJ5XCIpO1xuY29uc3QgRmlyc3RfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvRmlyc3RcIik7XG5jb25zdCBGaXJzdE9yRGVmYXVsdF8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9GaXJzdE9yRGVmYXVsdFwiKTtcbmNvbnN0IEZvckVhY2hfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvRm9yRWFjaFwiKTtcbmNvbnN0IEZ1bGxKb2luXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0Z1bGxKb2luXCIpO1xuY29uc3QgR3JvdXBCeV8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9Hcm91cEJ5XCIpO1xuY29uc3QgR3JvdXBKb2luXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0dyb3VwSm9pblwiKTtcbmNvbnN0IElubmVySm9pbl8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9Jbm5lckpvaW5cIik7XG5jb25zdCBJbnRlcnNlY3RfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvSW50ZXJzZWN0XCIpO1xuY29uc3QgSW50ZXJzZWN0QnlfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvSW50ZXJzZWN0QnlcIik7XG5jb25zdCBKb2luXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0pvaW5cIik7XG5jb25zdCBMYXN0XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0xhc3RcIik7XG5jb25zdCBMYXN0T3JEZWZhdWx0XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL0xhc3RPckRlZmF1bHRcIik7XG5jb25zdCBMZWZ0Sm9pbl8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9MZWZ0Sm9pblwiKTtcbmNvbnN0IExvbmdDb3VudF8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9Mb25nQ291bnRcIik7XG5jb25zdCBNYXhfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvTWF4XCIpO1xuY29uc3QgTWF4QnlfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvTWF4QnlcIik7XG5jb25zdCBNYXhPckRlZmF1bHRfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvTWF4T3JEZWZhdWx0XCIpO1xuY29uc3QgTWluXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL01pblwiKTtcbmNvbnN0IE1pbkJ5XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL01pbkJ5XCIpO1xuY29uc3QgTWluT3JEZWZhdWx0XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL01pbk9yRGVmYXVsdFwiKTtcbmNvbnN0IE9mVHlwZV8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9PZlR5cGVcIik7XG5jb25zdCBPdXRlckpvaW5fMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvT3V0ZXJKb2luXCIpO1xuY29uc3QgUHJlcGVuZF8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9QcmVwZW5kXCIpO1xuY29uc3QgUmVwbGljYXRlXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL1JlcGxpY2F0ZVwiKTtcbmNvbnN0IFJldmVyc2VfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvUmV2ZXJzZVwiKTtcbmNvbnN0IFJpZ2h0Sm9pbl8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9SaWdodEpvaW5cIik7XG5jb25zdCBTZWxlY3RfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvU2VsZWN0XCIpO1xuY29uc3QgU2VsZWN0TWFueV8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9TZWxlY3RNYW55XCIpO1xuY29uc3QgU2VxdWVuY2VFcXVhbF8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9TZXF1ZW5jZUVxdWFsXCIpO1xuY29uc3QgU2luZ2xlXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL1NpbmdsZVwiKTtcbmNvbnN0IFNpbmdsZU9yRGVmYXVsdF8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9TaW5nbGVPckRlZmF1bHRcIik7XG5jb25zdCBTa2lwXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL1NraXBcIik7XG5jb25zdCBTa2lwTGFzdF8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9Ta2lwTGFzdFwiKTtcbmNvbnN0IFNraXBXaGlsZV8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9Ta2lwV2hpbGVcIik7XG5jb25zdCBTdGVwXzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL1N0ZXBcIik7XG5jb25zdCBTdW1fMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvU3VtXCIpO1xuY29uc3QgVGFrZV8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9UYWtlXCIpO1xuY29uc3QgVGFrZUxhc3RfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvVGFrZUxhc3RcIik7XG5jb25zdCBUYWtlV2hpbGVfMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvVGFrZVdoaWxlXCIpO1xuY29uc3QgVG9Db252ZXJzaW9uc18xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9Ub0NvbnZlcnNpb25zXCIpO1xuY29uc3QgVW5pb25fMSA9IHJlcXVpcmUoXCIuLi9RdWVyeWFibGUvVW5pb25cIik7XG5jb25zdCBVbmlvbkJ5XzEgPSByZXF1aXJlKFwiLi4vUXVlcnlhYmxlL1VuaW9uQnlcIik7XG5jb25zdCBXaGVyZV8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9XaGVyZVwiKTtcbmNvbnN0IFppcF8xID0gcmVxdWlyZShcIi4uL1F1ZXJ5YWJsZS9aaXBcIik7XG5jbGFzcyBFbnVtZXJhYmxlIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgICAgIC8vIFRoaXMgaXMgaGFja3kgYnV0IGxldHMgbWUgc3BsaXQgdGhpcyBHSUFOVCBjbGFzcyB1cCBpbnRvIGEgZmV3IGRvemVuIGZpbGVzLlxuICAgICAgICB0aGlzLmFnZ3JlZ2F0ZV9xXyA9IEFnZ3JlZ2F0ZV8xLmFnZ3JlZ2F0ZTtcbiAgICAgICAgdGhpcy5hbGxfcV8gPSBBbGxfMS5hbGw7XG4gICAgICAgIHRoaXMuYW55X3FfID0gQW55XzEuYW55X3FfO1xuICAgICAgICB0aGlzLmFwcGVuZF9xXyA9IEFwcGVuZF8xLmFwcGVuZDtcbiAgICAgICAgdGhpcy5hdmVyYWdlX3FfID0gQXZlcmFnZV8xLmF2ZXJhZ2U7XG4gICAgICAgIC8vIFRoZXJlJ3Mgbm8gd2F5IHRvIGRvIChOdW1iZXIpZm9vIGluIEphdmFTY3JpcHQsIGFuZCBjYXN0aW5nIGluIFR5cGVTY3JpcHQgaXNuJ3QgZW1pdHRlZC5cbiAgICAgICAgLy8gU28gdGhlIGNhc3QgaXMgYmVpbmcgYWxpYXNlZCB0byBzZWxlY3Qgc28geW91IGNhbiBkbyBmb28uY2FzdChudW0gPT4gTnVtYmVyKG51bSkpXG4gICAgICAgIHRoaXMuY2FzdF9xXyA9IFNlbGVjdF8xLnNlbGVjdDtcbiAgICAgICAgdGhpcy5jaHVua19xXyA9IENodW5rXzEuY2h1bms7XG4gICAgICAgIHRoaXMuY29uY2F0X3FfID0gQ29uY2F0XzEuY29uY2F0O1xuICAgICAgICB0aGlzLmNvbnRhaW5zX3FfID0gQ29udGFpbnNfMS5jb250YWlucztcbiAgICAgICAgdGhpcy5jb3VudF9xXyA9IENvdW50XzEuY291bnQ7XG4gICAgICAgIHRoaXMuY3Jvc3NKb2luX3FfID0gQ3Jvc3NKb2luXzEuY3Jvc3NKb2luO1xuICAgICAgICB0aGlzLmRlZmF1bHRJZkVtcHR5X3FfID0gRGVmYXVsdElmRW1wdHlfMS5kZWZhdWx0SWZFbXB0eTtcbiAgICAgICAgdGhpcy5kaXN0aW5jdF9xXyA9IERpc3RpbmN0XzEuZGlzdGluY3Q7XG4gICAgICAgIHRoaXMuZGlzdGluY3RCeV9xXyA9IERpc3RpbmN0QnlfMS5kaXN0aW5jdEJ5O1xuICAgICAgICB0aGlzLmVsZW1lbnRBdF9xXyA9IEVsZW1lbnRBdF8xLmVsZW1lbnRBdDtcbiAgICAgICAgdGhpcy5lbGVtZW50QXRPckRlZmF1bHRfcV8gPSBFbGVtZW50QXRPckRlZmF1bHRfMS5lbGVtZW50QXRPckRlZmF1bHQ7XG4gICAgICAgIHRoaXMuZW1wdHlfcV8gPSBFbXB0eV8xLmVtcHR5O1xuICAgICAgICB0aGlzLmV4Y2VwdF9xXyA9IEV4Y2VwdF8xLmV4Y2VwdDtcbiAgICAgICAgdGhpcy5leGNlcHRCeV9xXyA9IEV4Y2VwdEJ5XzEuZXhjZXB0Qnk7XG4gICAgICAgIHRoaXMuZmlyc3RfcV8gPSBGaXJzdF8xLmZpcnN0O1xuICAgICAgICB0aGlzLmZpcnN0T3JEZWZhdWx0X3FfID0gRmlyc3RPckRlZmF1bHRfMS5maXJzdE9yRGVmYXVsdDtcbiAgICAgICAgdGhpcy5mb3JFYWNoX3FfID0gRm9yRWFjaF8xLmZvckVhY2g7XG4gICAgICAgIHRoaXMuZnVsbEpvaW5fcV8gPSBGdWxsSm9pbl8xLmZ1bGxKb2luO1xuICAgICAgICB0aGlzLmdyb3VwQnlfcV8gPSBHcm91cEJ5XzEuZ3JvdXBCeTtcbiAgICAgICAgdGhpcy5ncm91cEpvaW5fcV8gPSBHcm91cEpvaW5fMS5ncm91cEpvaW47XG4gICAgICAgIHRoaXMuaW5uZXJKb2luX3FfID0gSW5uZXJKb2luXzEuaW5uZXJKb2luO1xuICAgICAgICB0aGlzLmludGVyc2VjdF9xXyA9IEludGVyc2VjdF8xLmludGVyc2VjdDtcbiAgICAgICAgdGhpcy5pbnRlcnNlY3RCeV9xXyA9IEludGVyc2VjdEJ5XzEuaW50ZXJzZWN0Qnk7XG4gICAgICAgIHRoaXMuam9pbl9xXyA9IEpvaW5fMS5qb2luO1xuICAgICAgICB0aGlzLmxhc3RfcV8gPSBMYXN0XzEubGFzdDtcbiAgICAgICAgdGhpcy5sYXN0T3JEZWZhdWx0X3FfID0gTGFzdE9yRGVmYXVsdF8xLmxhc3RPckRlZmF1bHQ7XG4gICAgICAgIHRoaXMubGVmdEpvaW5fcV8gPSBMZWZ0Sm9pbl8xLmxlZnRKb2luO1xuICAgICAgICB0aGlzLmxvbmdDb3VudF9xXyA9IExvbmdDb3VudF8xLmxvbmdDb3VudDtcbiAgICAgICAgdGhpcy5tYXhfcV8gPSBNYXhfMS5tYXg7XG4gICAgICAgIHRoaXMubWF4QnlfcV8gPSBNYXhCeV8xLm1heEJ5O1xuICAgICAgICB0aGlzLm1heE9yRGVmYXVsdF9xXyA9IE1heE9yRGVmYXVsdF8xLm1heE9yRGVmYXVsdDtcbiAgICAgICAgdGhpcy5taW5fcV8gPSBNaW5fMS5taW47XG4gICAgICAgIHRoaXMubWluQnlfcV8gPSBNaW5CeV8xLm1pbkJ5O1xuICAgICAgICB0aGlzLm1pbk9yRGVmYXVsdF9xXyA9IE1pbk9yRGVmYXVsdF8xLm1pbk9yRGVmYXVsdDtcbiAgICAgICAgdGhpcy5vZlR5cGVfcV8gPSBPZlR5cGVfMS5vZlR5cGU7XG4gICAgICAgIHRoaXMub3V0ZXJKb2luX3FfID0gT3V0ZXJKb2luXzEub3V0ZXJKb2luO1xuICAgICAgICB0aGlzLnByZXBlbmRfcV8gPSBQcmVwZW5kXzEucHJlcGVuZDtcbiAgICAgICAgdGhpcy5yZXBsaWNhdGVfcV8gPSBSZXBsaWNhdGVfMS5yZXBsaWNhdGU7XG4gICAgICAgIHRoaXMucmV2ZXJzZV9xXyA9IFJldmVyc2VfMS5yZXZlcnNlO1xuICAgICAgICB0aGlzLnJpZ2h0Sm9pbl9xXyA9IFJpZ2h0Sm9pbl8xLnJpZ2h0Sm9pbjtcbiAgICAgICAgdGhpcy5zZWxlY3RfcV8gPSBTZWxlY3RfMS5zZWxlY3Q7XG4gICAgICAgIHRoaXMuc2VsZWN0TWFueV9xXyA9IFNlbGVjdE1hbnlfMS5zZWxlY3RNYW55O1xuICAgICAgICB0aGlzLnNlcXVlbmNlRXF1YWxfcV8gPSBTZXF1ZW5jZUVxdWFsXzEuc2VxdWVuY2VFcXVhbDtcbiAgICAgICAgdGhpcy5zaW5nbGVfcV8gPSBTaW5nbGVfMS5zaW5nbGU7XG4gICAgICAgIHRoaXMuc2luZ2xlT3JEZWZhdWx0X3FfID0gU2luZ2xlT3JEZWZhdWx0XzEuc2luZ2xlT3JEZWZhdWx0O1xuICAgICAgICB0aGlzLnNraXBfcV8gPSBTa2lwXzEuc2tpcDtcbiAgICAgICAgdGhpcy5za2lwTGFzdF9xXyA9IFNraXBMYXN0XzEuc2tpcExhc3Q7XG4gICAgICAgIHRoaXMuc2tpcFdoaWxlX3FfID0gU2tpcFdoaWxlXzEuc2tpcFdoaWxlO1xuICAgICAgICB0aGlzLnN0ZXBfcV8gPSBTdGVwXzEuc3RlcDtcbiAgICAgICAgdGhpcy5zdW1fcV8gPSBTdW1fMS5zdW07XG4gICAgICAgIHRoaXMudGFrZV9xXyA9IFRha2VfMS50YWtlO1xuICAgICAgICB0aGlzLnRha2VMYXN0X3FfID0gVGFrZUxhc3RfMS50YWtlTGFzdDtcbiAgICAgICAgdGhpcy50YWtlV2hpbGVfcV8gPSBUYWtlV2hpbGVfMS50YWtlV2hpbGU7XG4gICAgICAgIHRoaXMudG9BcnJheV9xXyA9IFRvQ29udmVyc2lvbnNfMS50b0FycmF5O1xuICAgICAgICB0aGlzLnRvRGljdGlvbmFyeV9xXyA9IFRvQ29udmVyc2lvbnNfMS50b0RpY3Rpb25hcnk7XG4gICAgICAgIHRoaXMudG9IYXNoU2V0X3FfID0gVG9Db252ZXJzaW9uc18xLnRvSGFzaFNldDtcbiAgICAgICAgdGhpcy50b0xpc3RfcV8gPSBUb0NvbnZlcnNpb25zXzEudG9BcnJheTtcbiAgICAgICAgdGhpcy50b0xvb2t1cF9xXyA9IFRvQ29udmVyc2lvbnNfMS50b0xvb2t1cDtcbiAgICAgICAgdGhpcy50b01hcF9xXyA9IFRvQ29udmVyc2lvbnNfMS50b01hcDtcbiAgICAgICAgdGhpcy51bmlvbl9xXyA9IFVuaW9uXzEudW5pb247XG4gICAgICAgIHRoaXMudW5pb25CeV9xXyA9IFVuaW9uQnlfMS51bmlvbkJ5O1xuICAgICAgICB0aGlzLndoZXJlX3FfID0gV2hlcmVfMS53aGVyZTtcbiAgICAgICAgdGhpcy56aXBfcV8gPSBaaXBfMS56aXA7XG4gICAgICAgIHRoaXMuX2NhY2hlID0gW107XG4gICAgICAgIHRoaXMuX2lzQ2xvc2VkID0gZmFsc2U7XG4gICAgICAgIC8vIE5vcm1hbGx5LCB3ZSdkIGdvIGFoZWFkIGFuZCBzYXkgdGhlIGRhdGEgc2hvdWxkIGJlIGFuIGFycmF5LCBub3RoaW5nIGJ1dC5cbiAgICAgICAgLy8gQnV0IGxldCdzIGJlIGZsZXhpYmxlIGFuZCBhbGxvdyBhbnl0aGluZy4gSWYgaXQncyBub3QgaXRlcmFibGUsIHRoZW4gaXQnbGwgYmVjb21lIGEgb25lLWl0ZW0gaXRlcmF0b3IuXG4gICAgICAgIHRoaXMuX3NvdXJjZSA9IHRoaXMuX2Vuc3VyZUJhY2t1cChNYWtlR2VuZXJhdG9yXzEubWFrZUdlbmVyYXRvcihkYXRhKSk7XG4gICAgfVxuICAgIHN0YXRpYyByYW5nZV9xXyhzdGFydCwgbGVuKSB7XG4gICAgICAgIGlmIChsZW4gPCAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBcmd1bWVudCBvdXQgb2YgcmFuZ2UuXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEl0J3MgYSBwYWluIHRvIHJlbWVtYmVyIHRoZSBmdW5jdGlvbip7fSgpIHN5bnRheCBoZXJlLlxuICAgICAgICByZXR1cm4gbmV3IEVudW1lcmFibGUoZnVuY3Rpb24qIF9yYW5nZSgpIHtcbiAgICAgICAgICAgIGxldCBpID0gc3RhcnQ7XG4gICAgICAgICAgICBjb25zdCBtYXh2YWwgPSBzdGFydCArIGxlbjtcbiAgICAgICAgICAgIHdoaWxlIChpIDwgbWF4dmFsKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgaTtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0oKSk7XG4gICAgfVxuICAgIHN0YXRpYyByZXBlYXRfcV8oZWxlbWVudCwgbGVuKSB7XG4gICAgICAgIGlmIChsZW4gPCAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBcmd1bWVudCBvdXQgb2YgcmFuZ2UuXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEl0J3MgYSBwYWluIHRvIHJlbWVtYmVyIHRoZSBmdW5jdGlvbip7fSgpIHN5bnRheCBoZXJlLlxuICAgICAgICByZXR1cm4gbmV3IEVudW1lcmFibGUoZnVuY3Rpb24qIF9yZXBlYXQoKSB7XG4gICAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgICB3aGlsZSAoaSA8IGxlbikge1xuICAgICAgICAgICAgICAgIHlpZWxkIGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KCkpO1xuICAgIH1cbiAgICBnZXQgX2RhdGEoKSB7XG4gICAgICAgIC8vIFRoZXJlJ3Mgbm90IGEgbG90IG9mIGNhbGwgZm9yIHNlbGVjdGluZyBmcm9tIGFuIGVudW1lcmFibGUgbW9yZSB0aGFuIG9uY2UsIGJ1dCBzb21lb25lIG1pZ2h0XG4gICAgICAgIC8vIHdhbnQgdG8gZG8gaXQuIEluIEMjIHRoZSBvbmx5IHJlYWwgdGltZSB0aGlzIGhhcHBlbnMgaXMgd2hlbiB5b3UgdXNlIHRoZSBkZWJ1Z2dlciwgYnV0IGl0IGRvZXMgaGFwcGVuLlxuICAgICAgICAvLyBCdXQgd2hlbiBkYXRhIGhhcyBiZWVuIGZldGNoZWQgZnJvbSB0aGUgZ2VuZXJhdG9yLCBpdCBiZWNvbWVzIGNsb3NlZCwgYW5kIGV2ZXJ5IGdlbmVyYXRvciBpbiBpdHNcbiAgICAgICAgLy8gc291cmNlIGlzIGFsc28gY2xvc2VkLiBUaGlzIGlzIGJ1aWx0IGluIHRvIEpTIGFuZCBub3Qgc29tZXRoaW5nIHdlIGNhbiBjaGFuZ2UuXG4gICAgICAgIC8vIEJ1dCB3ZSBjYW4gY2FjaGUgdGhlIGRhdGEgd2hlbiB3ZSBmZXRjaCBpdCBhbmQgcmV0dXJuIHRoZSBjYWNoZSBpZiBjbG9zZWQuXG4gICAgICAgIGlmICh0aGlzLl9pc0Nsb3NlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9zb3VyY2U7XG4gICAgfVxuICAgICpbU3ltYm9sLml0ZXJhdG9yXSgpIHtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMuX2RhdGEpIHtcbiAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuKHZhbHVlKSB7XG4gICAgICAgIC8vIEZvciBzb21lIHJlYXNvbiwgVHlwZVNjcmlwdCBkb2VzIG5vdCBsaWtlIHRoaXMuIEl0IHRoaW5rcyBbU3ltYm9sLml0ZXJhdG9yXSgpIG1pZ2h0IGJlIHVuZGVmaW5lZCxcbiAgICAgICAgLy8gZXZlbiB3aGVuIGl0IGlzIGNsZWFybHkgZGVmaW5lZCBhIGZldyBsaW5lcyB1cC5cbiAgICAgICAgY29uc3QgaW50ZXJuYWxJdGVyYXRvciA9IHRoaXNbU3ltYm9sLml0ZXJhdG9yXSgpO1xuICAgICAgICByZXR1cm4gaW50ZXJuYWxJdGVyYXRvci5yZXR1cm4odmFsdWUpO1xuICAgIH1cbiAgICB0aHJvdyhlKSB7XG4gICAgICAgIC8vIEZvciBzb21lIHJlYXNvbiwgVHlwZXNjcmlwdCBkb2VzIG5vdCBsaWtlIHRoaXMuIEl0IHRoaW5rcyBbU3ltYm9sLml0ZXJhdG9yXSgpIG1pZ2h0IGJlIHVuZGVmaW5lZCxcbiAgICAgICAgLy8gZXZlbiB3aGVuIGl0IGlzIGNsZWFybHkgZGVmaW5lZCBhIGZldyBsaW5lcyB1cC5cbiAgICAgICAgY29uc3QgaW50ZXJuYWxJdGVyYXRvciA9IHRoaXNbU3ltYm9sLml0ZXJhdG9yXSgpO1xuICAgICAgICByZXR1cm4gaW50ZXJuYWxJdGVyYXRvci50aHJvdyhlKTtcbiAgICB9XG4gICAgbmV4dCgpIHtcbiAgICAgICAgLy8gQnV0IGl0J3Mgb2sgd2l0aCB0aGUgZXhhY3Qgc2FtZSBjb2RlIGhlcmUuIEdvIGZpZ3VyZS5cbiAgICAgICAgY29uc3QgaW50ZXJuYWxJdGVyYXRvciA9IHRoaXNbU3ltYm9sLml0ZXJhdG9yXSgpO1xuICAgICAgICByZXR1cm4gaW50ZXJuYWxJdGVyYXRvci5uZXh0KCk7XG4gICAgfVxuICAgIHRvSlNPTigpIHtcbiAgICAgICAgLy8gV3JpdGluZyBhbiBFbnVtZXJhYmxlIHRvIEpTT04gZXhoYXVzdHMgdGhlIGVudW1lcmF0b3IuXG4gICAgICAgIHJldHVybiBbLi4udGhpc107XG4gICAgfVxuICAgIHRyeUdldE5vbkVudW1lcmF0ZWRDb3VudF9xXyhvYmopIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzQ2xvc2VkKSB7XG4gICAgICAgICAgICAvLyBXZSBkb24ndCBoYXZlIG91dCB2YXJzIGluIEpTIHNvIHdlIGhhdmUgdG8gdXNlIGFuIG9iamVjdCByZWZlcmVuY2UuXG4gICAgICAgICAgICBpZiAob2JqKSB7XG4gICAgICAgICAgICAgICAgb2JqLnZhbHVlID0gdGhpcy5fY2FjaGUubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgbm90IGNsb3NlZCwgdGhpcyBpcyBhIGdlbmVyYXRvciwgYW5kIHdlIGNhbid0IGNvdW50IGl0IHdpdGhvdXQgZW51bWVyYXRpbmcgaXQuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gVGhpcyBoZWxwZXIgYWxsb3dzIG1ldGhvZHMgZGVjbGFyZWQgaW4gb3RoZXIgZmlsZXMgdG8gdXNlIGdlbmVyYXRvciBmdW5jdGlvbnMgd2l0aG91dCByZWZlcmVuY2luZyB0aGlzLl9kYXRhIChyZXF1aXJpbmcgaXRcbiAgICAvLyB0byBiZSBwdWJsaWMpIG9yIHVzaW5nIHRoZSAoZnVuY3Rpb24qKCkge30pKGRhdGEpIHN5bnRheCwgd2hpY2ggaXMgdWdseS5cbiAgICBfZXh0ZW5kKGZ1bmMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFbnVtZXJhYmxlKGZ1bmModGhpcykpO1xuICAgIH1cbiAgICAqX2Vuc3VyZUJhY2t1cChkYXRhKSB7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLl9jYWNoZS5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9pc0Nsb3NlZCA9IHRydWU7XG4gICAgfVxufVxuZXhwb3J0cy5FbnVtZXJhYmxlID0gRW51bWVyYWJsZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgSUNvbXBhcmVyXzEgPSByZXF1aXJlKFwiLi8uLi9UeXBlcy9JQ29tcGFyZXJcIik7XG5jb25zdCBFbnVtZXJhYmxlXzEgPSByZXF1aXJlKFwiLi9FbnVtZXJhYmxlXCIpO1xuY2xhc3MgT3JkZXJlZEVudW1lcmFibGUgZXh0ZW5kcyBFbnVtZXJhYmxlXzEuRW51bWVyYWJsZSB7XG4gICAgY29uc3RydWN0b3IoZGF0YSwgb3JkZXJCeSwgY29tcGFyZXIsIGRlc2NlbmRpbmcgPSBmYWxzZSkge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgdGhpcy5fc29ydGVycyA9IFtdO1xuICAgICAgICB0aGlzLl9zb3J0ZXJzLnB1c2goeyBvcmRlckJ5LCBjb21wYXJlciwgZGVzY2VuZGluZzogZGVzY2VuZGluZyB9KTtcbiAgICB9XG4gICAgKltTeW1ib2wuaXRlcmF0b3JdKCkge1xuICAgICAgICAvLyBOZWVkIHRvIHNvcnQgdGhlIGRhdGEuIFRoaXMgbmVlZHMgdG8gcHJvY2VzcyB0aGUgZnVsbCBsaXN0LCBiZWNhdXNlIHRoZSBsYXN0IHJlY29yZCBjb3VsZCBiZSB0aGUgb25lXG4gICAgICAgIC8vIHRoYXQgbmVlZHMgdG8gZ28gZmlyc3QuXG4gICAgICAgIC8vIFR3byBwb3NzaWJsZSBhcHByb2FjaGVzIGhlcmUuIE9uZSBpcyB0byByZXBlYXRlZGx5IGF0dGFjayB0aGUgbGlzdCwgZ29pbmcgYWZ0ZXIgdGhlIG1pbiByZWNvcmQgYW5kXG4gICAgICAgIC8vIHJldHVybmluZyBpdCwgd2hpY2ggaXMgaGVhdnkgb24gdGhlIENQVSBidXQgbGlnaHQgb24gbWVtb3J5LCBvciB3aGF0IEknbSBnb2luZyB0byBkbywgd2hpY2ggaXMgbG9hZFxuICAgICAgICAvLyBhbiBhcnJheSBhbmQgdXNlIHRoZSBidWlsdC1pbiBzb3J0KCkgbWV0aG9kLCB3aGljaCBpcyBoZWF2eSBvbiBtZW1vcnkgYnV0IGxpZ2h0IG9uIENQVS5cbiAgICAgICAgbGV0IHNvcnRpbmdGdW5jdGlvbjtcbiAgICAgICAgZm9yIChjb25zdCBoYXQgb2YgdGhpcy5fc29ydGVycykge1xuICAgICAgICAgICAgc29ydGluZ0Z1bmN0aW9uID0gYnVpbGRTb3J0ZXIoaGF0Lm9yZGVyQnksIGhhdC5jb21wYXJlciwgaGF0LmRlc2NlbmRpbmcsIHNvcnRpbmdGdW5jdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc29ydGVkRGF0YSA9IFsuLi50aGlzLl9kYXRhXS5zb3J0KHNvcnRpbmdGdW5jdGlvbik7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBzb3J0ZWREYXRhKSB7XG4gICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRoZW5CeV9xXyhvcmRlckJ5LCBjb21wYXJlcikge1xuICAgICAgICBpZiAoIW9yZGVyQnkpIHtcbiAgICAgICAgICAgIG9yZGVyQnkgPSAoKG8pID0+IG8pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3NvcnRlcnMucHVzaCh7IG9yZGVyQnksIGNvbXBhcmVyLCBkZXNjZW5kaW5nOiBmYWxzZSB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHRoZW5CeURlc2NlbmRpbmdfcV8ob3JkZXJCeSwgY29tcGFyZXIpIHtcbiAgICAgICAgaWYgKCFvcmRlckJ5KSB7XG4gICAgICAgICAgICBvcmRlckJ5ID0gKChvKSA9PiBvKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zb3J0ZXJzLnB1c2goeyBvcmRlckJ5LCBjb21wYXJlciwgZGVzY2VuZGluZzogdHJ1ZSB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuZXhwb3J0cy5PcmRlcmVkRW51bWVyYWJsZSA9IE9yZGVyZWRFbnVtZXJhYmxlO1xuZnVuY3Rpb24gYnVpbGRTb3J0ZXIoa2V5U2VsZWN0b3IsIGNvbXBhcmVyLCBkZXNjZW5kaW5nID0gZmFsc2UsIGluaXRpYWwpIHtcbiAgICBsZXQgY29tcGFyZSA9IElDb21wYXJlcl8xLmV4dHJhY3RDb21wYXJlcihjb21wYXJlcik7XG4gICAgaWYgKCFjb21wYXJlKSB7XG4gICAgICAgIGNvbXBhcmUgPSBJQ29tcGFyZXJfMS5kZWZhdWx0Q29tcGFyZXI7XG4gICAgfVxuICAgIGlmIChpbml0aWFsKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBfdGhlbkJ5KHgsIHkpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleTEgPSBrZXlTZWxlY3Rvcih4KTtcbiAgICAgICAgICAgIGNvbnN0IGtleTIgPSBrZXlTZWxlY3Rvcih5KTtcbiAgICAgICAgICAgIGlmIChkZXNjZW5kaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluaXRpYWwoeCwgeSkgfHwgY29tcGFyZShrZXkyLCBrZXkxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpbml0aWFsKHgsIHkpIHx8IGNvbXBhcmUoa2V5MSwga2V5Mik7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gX29yZGVyQnkoeCwgeSkge1xuICAgICAgICAgICAgY29uc3Qga2V5MSA9IGtleVNlbGVjdG9yKHgpO1xuICAgICAgICAgICAgY29uc3Qga2V5MiA9IGtleVNlbGVjdG9yKHkpO1xuICAgICAgICAgICAgaWYgKGRlc2NlbmRpbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tcGFyZShrZXkyLCBrZXkxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb21wYXJlKGtleTEsIGtleTIpO1xuICAgICAgICB9O1xuICAgIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgRW51bWVyYWJsZV8xID0gcmVxdWlyZShcIi4vRW51bWVyYWJsZS9FbnVtZXJhYmxlXCIpO1xuLyoqXG4gKiBIZWxwZXIgdG8gYWRkIGV4dGVuc2lvbiBtZXRob2RzIHRvIEFycmF5IGFuZCBTZXQuIFRoZXNlIG1ldGhvZHMgZHVwbGljYXRlIHRoZSBuYW1lcyBpbiBFbnVtZXJhYmxlLCBidXQgd2hhdCB0aGV5IGRvIGlzIGNyZWF0ZSBhIG5ld1xuICogRW51bWVyYWJsZSBhbmQgdGhlbiBwYXNzIHRoZSBjYWxsIG9ud2FyZCwgc28gaXQgc2VlbXMgYXMgaWYgdGhlIGFycmF5IGlzIEVudW1lcmFibGUuXG4gKlxuICogVGhpcyBjYW4gYmUgbW9kaWZpZWQgdG8gc3VwcG9ydCBhbnkgb2JqZWN0LiBJZiB5b3UgZG8gc28sIHJlbWVtYmVyIHRvIHNldCB3cml0YWJsZTogdHJ1ZSBzbyBFbnVtZXJhYmxlIGNhbiBoYXZlIGl0cyBvd25cbiAqIGltcGxlbWVudGF0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZXh0ZW5kKG5hbWUsIGV4dGVuc2lvbikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsIG5hbWUsIHtcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9jb252ZXJ0VG9FbnVtZXJhYmxlKCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFbnVtZXJhYmxlXzEuRW51bWVyYWJsZSh0aGlzKVtuYW1lXSguLi5hcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNldC5wcm90b3R5cGUsIG5hbWUsIHtcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9jb252ZXJ0VG9FbnVtZXJhYmxlKCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFbnVtZXJhYmxlXzEuRW51bWVyYWJsZSh0aGlzKVtuYW1lXSguLi5hcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLmV4dGVuZCA9IGV4dGVuZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24qIG1ha2VHZW5lcmF0b3IoaXRlcikge1xuICAgIGlmICh0eXBlb2YgaXRlciA9PT0gXCJzdHJpbmdcIiB8fCBpdGVyYWJsZUd1YXJkKGl0ZXIpKSB7XG4gICAgICAgIHlpZWxkKiBpdGVyO1xuICAgIH1cbiAgICBlbHNlIGlmIChhcnJheUxpa2VHdWFyZChpdGVyKSkge1xuICAgICAgICB5aWVsZCogQXJyYXkuZnJvbShpdGVyKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHlpZWxkIGl0ZXI7XG4gICAgfVxufVxuZXhwb3J0cy5tYWtlR2VuZXJhdG9yID0gbWFrZUdlbmVyYXRvcjtcbmZ1bmN0aW9uIGl0ZXJhYmxlR3VhcmQob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwib2JqZWN0XCIgJiYgb2JqICYmIFN5bWJvbC5pdGVyYXRvciBpbiBvYmo7XG59XG5mdW5jdGlvbiBhcnJheUxpa2VHdWFyZChvYmopIHtcbiAgICAvLyBJIGRvbid0IHRoaW5rIHRoaXMgaXMgcGVyZmVjdCBidXQgSSBjYW4ndCBmaW5kIGEgd2F5IHRvIHZhbGlkYXRlIHRoZSBvdGhlciBwYXJ0IG9mIEFycmF5TGlrZSwgdGhlIGtleS5cbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJvYmplY3RcIiAmJiBvYmogJiZcbiAgICAgICAgXCJsZW5ndGhcIiBpbiBvYmogJiYgdHlwZW9mIG9iai5sZW5ndGggPT09IFwibnVtYmVyXCIgJiZcbiAgICAgICAgb2JqLmxlbmd0aCA+PSAwO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBNYWtlR2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi9NYWtlR2VuZXJhdG9yXCIpO1xuLyoqXG4gKiBKUyBkb2Vzbid0IGdpdmUgYSB3YXkgdG8gcmVzdGFydCBhIGdlbmVyYXRvciwgd2hpY2ggY2F1c2VzIGEgZ3JlYXQgZGVhbCBvZiB0cm91YmxlIHdoZW4geW91IG5lZWQgdG8gY2hlY2sgaXQgbXVsdGlwbGUgdGltZXMuXG4gKiBGb3IgZXhhbXBsZSwgaWYgeW91IGRvIGFuIGlubmVyIGpvaW4sIHlvdSBuZWVkIHRvIGNoZWNrIGVhY2ggZWxlbWVudCBvZiB0aGUgbGVmdCB3aXRoIGVhY2ggZWxlbWVudCBvZiB0aGUgcmlnaHQuXG4gKiBZb3UgbmVlZCB0aGUgYWJpbGl0eSB0byByZWJ1aWxkIHRoZSBnZW5lcmF0b3IgZnJvbSB0aGUgb3JpZ2luYWwgaXRlcmFibGUuIEJ1dCB0aGVyZSBpc24ndCBhIHJlZmVyZW5jZSB0byB0aGUgb3JpZ2luYWwgaXRlcmFibGUgQU5ZV0hFUkUuXG4gKiBBcyBhIHJlc3VsdCwgdGhlIG9ubHkgd2F5IHRvIG1ha2UgdGhpcyB3b3JrIGlzIHRvIG1ha2UgYSBjb3B5IG9mIHRoZSBkYXRhIGFzIHlvdSBpdGVyYXRlIGl0LlxuICogVGhpcyBjb3VsZCBkb3VibGUgdGhlIGFtb3VudCBvZiBzcGFjZSBuZWVkZWQsIGJ1dCBpdCdzIGEgbGltaXRhdGlvbiBvZiB0aGUgdGVjaG5vbG9neS5cbiAqIFdlIGRvbid0IGFjdHVhbGx5IGtub3cgaWYgYSBnZW5lcmF0b3IgaXMgYmVpbmcgdXNlZC4gVGhlIHR5cGUgaXMgXCJvYmplY3QuXCIgU28geW91IGNvdWxkIGJlIHdhc3RpbmcgbWVtb3J5IGJ5IHVzaW5nIHRoaXMuIE5vIHdheSB0byBrbm93LlxuICovXG5jbGFzcyBSZXN0YXJ0YWJsZUdlbmVyYXRvciB7XG4gICAgY29uc3RydWN0b3IoaXRlcmFibGUsIGZsZXhNZW1vcnkgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLmJhY2t1cCA9IFtdO1xuICAgICAgICB0aGlzLml0ZXJhdG9yID0gY3ljbGVHZW5lcmF0b3IoaXRlcmFibGUsIHRoaXMuYmFja3VwKTtcbiAgICAgICAgdGhpcy5mbGV4TWVtb3J5ID0gZmxleE1lbW9yeTtcbiAgICB9XG4gICAgW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0oKTtcbiAgICB9XG4gICAgYXNRdWVyeWFibGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZXJhdG9yLmFzUXVlcnlhYmxlKCk7XG4gICAgfVxuICAgIHJlc3RhcnQoKSB7XG4gICAgICAgIGlmICh0aGlzLmZsZXhNZW1vcnkpIHtcbiAgICAgICAgICAgIGNvbnN0IGkgPSB0aGlzLmJhY2t1cC5zbGljZSgwKTtcbiAgICAgICAgICAgIHRoaXMuYmFja3VwID0gW107XG4gICAgICAgICAgICB0aGlzLml0ZXJhdG9yID0gY3ljbGVHZW5lcmF0b3IoaSwgdGhpcy5iYWNrdXApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pdGVyYXRvciA9IE1ha2VHZW5lcmF0b3JfMS5tYWtlR2VuZXJhdG9yKHRoaXMuYmFja3VwKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuUmVzdGFydGFibGVHZW5lcmF0b3IgPSBSZXN0YXJ0YWJsZUdlbmVyYXRvcjtcbmZ1bmN0aW9uKiBjeWNsZUdlbmVyYXRvcihpdGVyLCBiYWNrdXApIHtcbiAgICBmb3IgKGNvbnN0IHggb2YgaXRlcikge1xuICAgICAgICBiYWNrdXAucHVzaCh4KTtcbiAgICAgICAgeWllbGQgeDtcbiAgICB9XG59XG5leHBvcnRzLmN5Y2xlR2VuZXJhdG9yID0gY3ljbGVHZW5lcmF0b3I7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IEVudW1lcmFibGVfMSA9IHJlcXVpcmUoXCIuL0VudW1lcmFibGUvRW51bWVyYWJsZVwiKTtcbmNvbnN0IEV4dGVuZF8xID0gcmVxdWlyZShcIi4vRXh0ZW5kXCIpO1xuY29uc3QgQWdncmVnYXRlXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvQWdncmVnYXRlXCIpO1xuY29uc3QgQWxsXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvQWxsXCIpO1xuY29uc3QgQW55XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvQW55XCIpO1xuY29uc3QgQXBwZW5kXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvQXBwZW5kXCIpO1xuY29uc3QgQXZlcmFnZV8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0F2ZXJhZ2VcIik7XG5jb25zdCBDaHVua18xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0NodW5rXCIpO1xuY29uc3QgQ29uY2F0XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvQ29uY2F0XCIpO1xuY29uc3QgQ29udGFpbnNfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9Db250YWluc1wiKTtcbmNvbnN0IENvdW50XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvQ291bnRcIik7XG5jb25zdCBDcm9zc0pvaW5fMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9Dcm9zc0pvaW5cIik7XG5jb25zdCBEZWZhdWx0SWZFbXB0eV8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0RlZmF1bHRJZkVtcHR5XCIpO1xuY29uc3QgRGlzdGluY3RfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9EaXN0aW5jdFwiKTtcbmNvbnN0IERpc3RpbmN0QnlfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9EaXN0aW5jdEJ5XCIpO1xuY29uc3QgRWxlbWVudEF0XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvRWxlbWVudEF0XCIpO1xuY29uc3QgRWxlbWVudEF0T3JEZWZhdWx0XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvRWxlbWVudEF0T3JEZWZhdWx0XCIpO1xuY29uc3QgRW1wdHlfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9FbXB0eVwiKTtcbmNvbnN0IEV4Y2VwdF8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0V4Y2VwdFwiKTtcbmNvbnN0IEV4Y2VwdEJ5XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvRXhjZXB0QnlcIik7XG5jb25zdCBGaXJzdF8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0ZpcnN0XCIpO1xuY29uc3QgRmlyc3RPckRlZmF1bHRfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9GaXJzdE9yRGVmYXVsdFwiKTtcbmNvbnN0IEZvckVhY2hfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9Gb3JFYWNoXCIpO1xuY29uc3QgRnVsbEpvaW5fMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9GdWxsSm9pblwiKTtcbmNvbnN0IEdyb3VwQnlfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9Hcm91cEJ5XCIpO1xuY29uc3QgR3JvdXBKb2luXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvR3JvdXBKb2luXCIpO1xuY29uc3QgSW5uZXJKb2luXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvSW5uZXJKb2luXCIpO1xuY29uc3QgSW50ZXJzZWN0XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvSW50ZXJzZWN0XCIpO1xuY29uc3QgSW50ZXJzZWN0QnlfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9JbnRlcnNlY3RCeVwiKTtcbmNvbnN0IEpvaW5fMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9Kb2luXCIpO1xuY29uc3QgTGFzdF8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0xhc3RcIik7XG5jb25zdCBMYXN0T3JEZWZhdWx0XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvTGFzdE9yRGVmYXVsdFwiKTtcbmNvbnN0IExvbmdDb3VudF8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL0xvbmdDb3VudFwiKTtcbmNvbnN0IE1heF8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL01heFwiKTtcbmNvbnN0IE1heEJ5XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvTWF4QnlcIik7XG5jb25zdCBNYXhPckRlZmF1bHRfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9NYXhPckRlZmF1bHRcIik7XG5jb25zdCBNaW5fMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9NaW5cIik7XG5jb25zdCBNaW5CeV8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL01pbkJ5XCIpO1xuY29uc3QgTWluT3JEZWZhdWx0XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvTWluT3JEZWZhdWx0XCIpO1xuY29uc3QgT2ZUeXBlXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvT2ZUeXBlXCIpO1xuY29uc3QgT3JkZXJCeV8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL09yZGVyQnlcIik7XG5jb25zdCBPdXRlckpvaW5fMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9PdXRlckpvaW5cIik7XG5jb25zdCBQcmVwZW5kXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvUHJlcGVuZFwiKTtcbmNvbnN0IFJlcGxpY2F0ZV8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL1JlcGxpY2F0ZVwiKTtcbmNvbnN0IFJldmVyc2VfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9SZXZlcnNlXCIpO1xuY29uc3QgUmlnaHRKb2luXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvUmlnaHRKb2luXCIpO1xuY29uc3QgU2VsZWN0XzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvU2VsZWN0XCIpO1xuY29uc3QgU2VsZWN0TWFueV8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL1NlbGVjdE1hbnlcIik7XG5jb25zdCBTZXF1ZW5jZUVxdWFsXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvU2VxdWVuY2VFcXVhbFwiKTtcbmNvbnN0IFNpbmdsZV8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL1NpbmdsZVwiKTtcbmNvbnN0IFNpbmdsZU9yRGVmYXVsdF8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL1NpbmdsZU9yRGVmYXVsdFwiKTtcbmNvbnN0IFNraXBfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9Ta2lwXCIpO1xuY29uc3QgU2tpcExhc3RfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9Ta2lwTGFzdFwiKTtcbmNvbnN0IFNraXBXaGlsZV8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL1NraXBXaGlsZVwiKTtcbmNvbnN0IFN0ZXBfMSA9IHJlcXVpcmUoXCIuL1F1ZXJ5YWJsZS9TdGVwXCIpO1xuY29uc3QgU3VtXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvU3VtXCIpO1xuY29uc3QgVGFrZV8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL1Rha2VcIik7XG5jb25zdCBUYWtlTGFzdF8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL1Rha2VMYXN0XCIpO1xuY29uc3QgVGFrZVdoaWxlXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvVGFrZVdoaWxlXCIpO1xuY29uc3QgVG9Db252ZXJzaW9uc18xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL1RvQ29udmVyc2lvbnNcIik7XG5jb25zdCBVbmlvbl8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL1VuaW9uXCIpO1xuY29uc3QgVW5pb25CeV8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL1VuaW9uQnlcIik7XG5jb25zdCBXaGVyZV8xID0gcmVxdWlyZShcIi4vUXVlcnlhYmxlL1doZXJlXCIpO1xuY29uc3QgWmlwXzEgPSByZXF1aXJlKFwiLi9RdWVyeWFibGUvWmlwXCIpO1xuQXJyYXkucHJvdG90eXBlLnRyeUdldE5vbkVudW1lcmF0ZWRDb3VudF9xXyA9IGZ1bmN0aW9uIF90cnlHZXROb25FbnVtZXJhdGVkQ291bnRfcV8ob2JqKSB7XG4gICAgLy8gdGhlcmUgYXJlIG5vIG91dCB2YXJpYWJsZXMgaW4gSlMsIHNvIHdlIGhhdmUgdG8gcHV0IGl0IGluIGFuIG9iamVjdCByZWZlcmVuY2UuXG4gICAgaWYgKG9iaikge1xuICAgICAgICBvYmoudmFsdWUgPSB0aGlzLmxlbmd0aDtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59O1xuU2V0LnByb3RvdHlwZS50cnlHZXROb25FbnVtZXJhdGVkQ291bnRfcV8gPSBmdW5jdGlvbiBfdHJ5R2V0Tm9uRW51bWVyYXRlZENvdW50X3FfKG9iaikge1xuICAgIC8vIHRoZXJlIGFyZSBubyBvdXQgdmFyaWFibGVzIGluIEpTLCBzbyB3ZSBoYXZlIHRvIHB1dCBpdCBpbiBhbiBvYmplY3QgcmVmZXJlbmNlLlxuICAgIGlmIChvYmopIHtcbiAgICAgICAgb2JqLnZhbHVlID0gdGhpcy5zaXplO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5PYmplY3QucHJvdG90eXBlLmFzUXVlcnlhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIElmIHRoZSBvYmplY3QgaXMgaXRlcmFibGUsIHRoaXMgd2lsbCBiZSBhbiBvcmRpbmFyeSBnZW5lcmF0b3IuIElmIGl0IGlzIG5vdCxcbiAgICAvLyB0aGlzIHdpbGwgYmUgYW4gaXRlcmFibGUgd2l0aCBhIHNpbmdsZSBpdGVtLiBUaGlzIG1ha2VzIGl0IHNvIEkgZG9uJ3QgaGF2ZSB0b1xuICAgIC8vIGd1ZXNzIHdoYXQgcHJvdG90eXBlcyBuZWVkIHRvIGJlIG1vZGlmaWVkLlxuICAgIHJldHVybiBuZXcgRW51bWVyYWJsZV8xLkVudW1lcmFibGUodGhpcyk7XG59O1xuU3RyaW5nLnByb3RvdHlwZS5hc1F1ZXJ5YWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTdHJpbmdzIGFyZSBpdGVyYWJsZSwgYnV0IEkgZGlkbid0IHdhbnQgdG8gYWRkIGFsbCB0aGUgZW51bWVyYWJsZSBtZXRob2RzIHRvIHRoZW0uXG4gICAgcmV0dXJuIG5ldyBFbnVtZXJhYmxlXzEuRW51bWVyYWJsZSh0aGlzKTtcbn07XG5OdW1iZXIucHJvdG90eXBlLmFzUXVlcnlhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIC8vICg0KS5hc1F1ZXJ5YWJsZSgpIGlzIHRyZWF0ZWQgbGlrZSByYW5nZSgpXG4gICAgcmV0dXJuIEVudW1lcmFibGVfMS5FbnVtZXJhYmxlLnJhbmdlX3FfKDAsIHRoaXMpO1xufTtcbkJvb2xlYW4ucHJvdG90eXBlLmFzUXVlcnlhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzKSB7XG4gICAgICAgIC8vIHRydWUuYXNRdWVyeWFibGUoKSBpcyBwcmV0dHkgdXNlbGVzczogW2ZhbHNlLCB0cnVlXSBhc2NlbmRpbmcuIE1pZ2h0IGJlIHVzZWZ1bC5cbiAgICAgICAgcmV0dXJuIG5ldyBFbnVtZXJhYmxlXzEuRW51bWVyYWJsZShbZmFsc2UsIHRydWVdKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIGZhbHNlLmFzUXVlcnlhYmxlKCkgaXMgYWxzbyBwcmV0dHkgdXNlbGVzczogW3RydWUsIGZhbHNlXSBkZXNjZW5kaW5nLiBNaWdodCBiZSB1c2VmdWwuXG4gICAgICAgIHJldHVybiBuZXcgRW51bWVyYWJsZV8xLkVudW1lcmFibGUoW3RydWUsIGZhbHNlXSk7XG4gICAgfVxufTtcbi8vIEFkZCBzdHViIGZ1bmN0aW9ucyBvbnRvIEFycmF5LnByb3RvdHlwZSBhbmQgU2V0LnByb3RvdHlwZSB0byBtYWtlIHRoZSBvYmplY3QgaW50byBhbiBFbnVtZXJhYmxlXG4vLyBhbmQgdGhlbiBjYWxsIHRoZSBFbnVtZXJhYmxlIG1ldGhvZFxuRXh0ZW5kXzEuZXh0ZW5kKFwiYWdncmVnYXRlX3FfXCIsIEFnZ3JlZ2F0ZV8xLmFnZ3JlZ2F0ZSk7XG5FeHRlbmRfMS5leHRlbmQoXCJhbGxfcV9cIiwgQWxsXzEuYWxsKTtcbkV4dGVuZF8xLmV4dGVuZChcImFueV9xX1wiLCBBbnlfMS5hbnlfcV8pO1xuRXh0ZW5kXzEuZXh0ZW5kKFwiYXBwZW5kX3FfXCIsIEFwcGVuZF8xLmFwcGVuZCk7XG5FeHRlbmRfMS5leHRlbmQoXCJhdmVyYWdlX3FfXCIsIEF2ZXJhZ2VfMS5hdmVyYWdlKTtcbkV4dGVuZF8xLmV4dGVuZChcImNhc3RfcV9cIiwgU2VsZWN0XzEuc2VsZWN0KTtcbkV4dGVuZF8xLmV4dGVuZChcImNodW5rX3FfXCIsIENodW5rXzEuY2h1bmspO1xuRXh0ZW5kXzEuZXh0ZW5kKFwiY29uY2F0X3FfXCIsIENvbmNhdF8xLmNvbmNhdCk7XG5FeHRlbmRfMS5leHRlbmQoXCJjb250YWluc19xX1wiLCBDb250YWluc18xLmNvbnRhaW5zKTtcbkV4dGVuZF8xLmV4dGVuZChcImNvdW50X3FfXCIsIENvdW50XzEuY291bnQpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwiY3Jvc3NKb2luX3FfXCIsIENyb3NzSm9pbl8xLmNyb3NzSm9pbik7XG5FeHRlbmRfMS5leHRlbmQoXCJkZWZhdWx0SWZFbXB0eV9xX1wiLCBEZWZhdWx0SWZFbXB0eV8xLmRlZmF1bHRJZkVtcHR5KTtcbkV4dGVuZF8xLmV4dGVuZChcImRpc3RpbmN0X3FfXCIsIERpc3RpbmN0XzEuZGlzdGluY3QpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwiZGlzdGluY3RCeV9xX1wiLCBEaXN0aW5jdEJ5XzEuZGlzdGluY3RCeSk7XG5FeHRlbmRfMS5leHRlbmQoXCJlbGVtZW50QXRfcV9cIiwgRWxlbWVudEF0XzEuZWxlbWVudEF0KTtcbkV4dGVuZF8xLmV4dGVuZChcImVsZW1lbnRBdE9yRGVmYXVsdF9xX1wiLCBFbGVtZW50QXRPckRlZmF1bHRfMS5lbGVtZW50QXRPckRlZmF1bHQpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwiZW1wdHlfcV9cIiwgRW1wdHlfMS5lbXB0eSk7XG5FeHRlbmRfMS5leHRlbmQoXCJleGNlcHRfcV9cIiwgRXhjZXB0XzEuZXhjZXB0KTtcbkV4dGVuZF8xLmV4dGVuZChcImV4Y2VwdEJ5X3FfXCIsIEV4Y2VwdEJ5XzEuZXhjZXB0QnkpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwiZmlyc3RfcV9cIiwgRmlyc3RfMS5maXJzdCk7XG5FeHRlbmRfMS5leHRlbmQoXCJmaXJzdE9yRGVmYXVsdF9xX1wiLCBGaXJzdE9yRGVmYXVsdF8xLmZpcnN0T3JEZWZhdWx0KTtcbkV4dGVuZF8xLmV4dGVuZChcImZvckVhY2hfcV9cIiwgRm9yRWFjaF8xLmZvckVhY2gpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwiZnVsbEpvaW5fcV9cIiwgRnVsbEpvaW5fMS5mdWxsSm9pbik7XG5FeHRlbmRfMS5leHRlbmQoXCJncm91cEJ5X3FfXCIsIEdyb3VwQnlfMS5ncm91cEJ5KTtcbkV4dGVuZF8xLmV4dGVuZChcImdyb3VwSm9pbl9xX1wiLCBHcm91cEpvaW5fMS5ncm91cEpvaW4pO1xuRXh0ZW5kXzEuZXh0ZW5kKFwiaW5uZXJKb2luX3FfXCIsIElubmVySm9pbl8xLmlubmVySm9pbik7XG5FeHRlbmRfMS5leHRlbmQoXCJpbnRlcnNlY3RfcV9cIiwgSW50ZXJzZWN0XzEuaW50ZXJzZWN0KTtcbkV4dGVuZF8xLmV4dGVuZChcImludGVyc2VjdEJ5X3FfXCIsIEludGVyc2VjdEJ5XzEuaW50ZXJzZWN0QnkpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwiam9pbl9xX1wiLCBKb2luXzEuam9pbik7XG5FeHRlbmRfMS5leHRlbmQoXCJsYXN0X3FfXCIsIExhc3RfMS5sYXN0KTtcbkV4dGVuZF8xLmV4dGVuZChcImxhc3RPckRlZmF1bHRfcV9cIiwgTGFzdE9yRGVmYXVsdF8xLmxhc3RPckRlZmF1bHQpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwibGVmdEpvaW5fcV9cIiwgTGFzdE9yRGVmYXVsdF8xLmxhc3RPckRlZmF1bHQpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwibG9uZ0NvdW50X3FfXCIsIExvbmdDb3VudF8xLmxvbmdDb3VudCk7XG5FeHRlbmRfMS5leHRlbmQoXCJtYXhfcV9cIiwgTWF4XzEubWF4KTtcbkV4dGVuZF8xLmV4dGVuZChcIm1heEJ5X3FfXCIsIE1heEJ5XzEubWF4QnkpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwibWF4T3JEZWZhdWx0X3FfXCIsIE1heE9yRGVmYXVsdF8xLm1heE9yRGVmYXVsdCk7XG5FeHRlbmRfMS5leHRlbmQoXCJtaW5fcV9cIiwgTWluXzEubWluKTtcbkV4dGVuZF8xLmV4dGVuZChcIm1pbkJ5X3FfXCIsIE1pbkJ5XzEubWluQnkpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwibWluT3JEZWZhdWx0X3FfXCIsIE1pbk9yRGVmYXVsdF8xLm1pbk9yRGVmYXVsdCk7XG5FeHRlbmRfMS5leHRlbmQoXCJvZlR5cGVfcV9cIiwgT2ZUeXBlXzEub2ZUeXBlKTtcbkV4dGVuZF8xLmV4dGVuZChcIm9yZGVyQnlfcV9cIiwgT3JkZXJCeV8xLm9yZGVyQnkpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwib3JkZXJCeURlc2NlbmRpbmdfcV9cIiwgT3JkZXJCeV8xLm9yZGVyQnlEZXNjZW5kaW5nKTtcbkV4dGVuZF8xLmV4dGVuZChcIm91dGVySm9pbl9xX1wiLCBPdXRlckpvaW5fMS5vdXRlckpvaW4pO1xuRXh0ZW5kXzEuZXh0ZW5kKFwicHJlcGVuZF9xX1wiLCBQcmVwZW5kXzEucHJlcGVuZCk7XG5FeHRlbmRfMS5leHRlbmQoXCJyZXBsaWNhdGVfcV9cIiwgUmVwbGljYXRlXzEucmVwbGljYXRlKTtcbkV4dGVuZF8xLmV4dGVuZChcInJldmVyc2VfcV9cIiwgUmV2ZXJzZV8xLnJldmVyc2UpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwicmlnaHRKb2luX3FfXCIsIFJpZ2h0Sm9pbl8xLnJpZ2h0Sm9pbik7XG5FeHRlbmRfMS5leHRlbmQoXCJzZWxlY3RfcV9cIiwgU2VsZWN0XzEuc2VsZWN0KTtcbkV4dGVuZF8xLmV4dGVuZChcInNlbGVjdE1hbnlfcV9cIiwgU2VsZWN0TWFueV8xLnNlbGVjdE1hbnkpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwic2VxdWVuY2VFcXVhbF9xX1wiLCBTZXF1ZW5jZUVxdWFsXzEuc2VxdWVuY2VFcXVhbCk7XG5FeHRlbmRfMS5leHRlbmQoXCJzaW5nbGVfcV9cIiwgU2luZ2xlXzEuc2luZ2xlKTtcbkV4dGVuZF8xLmV4dGVuZChcInNpbmdsZU9yRGVmYXVsdF9xX1wiLCBTaW5nbGVPckRlZmF1bHRfMS5zaW5nbGVPckRlZmF1bHQpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwic2tpcF9xX1wiLCBTa2lwXzEuc2tpcCk7XG5FeHRlbmRfMS5leHRlbmQoXCJza2lwTGFzdF9xX1wiLCBTa2lwTGFzdF8xLnNraXBMYXN0KTtcbkV4dGVuZF8xLmV4dGVuZChcInNraXBXaGlsZV9xX1wiLCBTa2lwV2hpbGVfMS5za2lwV2hpbGUpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwic3RlcF9xX1wiLCBTdGVwXzEuc3RlcCk7XG5FeHRlbmRfMS5leHRlbmQoXCJzdW1fcV9cIiwgU3VtXzEuc3VtKTtcbkV4dGVuZF8xLmV4dGVuZChcInRha2VfcV9cIiwgVGFrZV8xLnRha2UpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwidGFrZUxhc3RfcV9cIiwgVGFrZUxhc3RfMS50YWtlTGFzdCk7XG5FeHRlbmRfMS5leHRlbmQoXCJ0YWtlV2hpbGVfcV9cIiwgVGFrZVdoaWxlXzEudGFrZVdoaWxlKTtcbkV4dGVuZF8xLmV4dGVuZChcInRvQXJyYXlfcV9cIiwgVG9Db252ZXJzaW9uc18xLnRvQXJyYXkpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwidG9EaWN0aW9uYXJ5X3FfXCIsIFRvQ29udmVyc2lvbnNfMS50b0RpY3Rpb25hcnkpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwidG9MaXN0X3FfXCIsIFRvQ29udmVyc2lvbnNfMS50b0FycmF5KTtcbkV4dGVuZF8xLmV4dGVuZChcInRvTG9va3VwX3FfXCIsIFRvQ29udmVyc2lvbnNfMS50b0xvb2t1cCk7XG5FeHRlbmRfMS5leHRlbmQoXCJ0b0hhc2hTZXRfcV9cIiwgVG9Db252ZXJzaW9uc18xLnRvSGFzaFNldCk7XG5FeHRlbmRfMS5leHRlbmQoXCJ0b01hcF9xX1wiLCBUb0NvbnZlcnNpb25zXzEudG9NYXApO1xuRXh0ZW5kXzEuZXh0ZW5kKFwidW5pb25fcV9cIiwgVW5pb25fMS51bmlvbik7XG5FeHRlbmRfMS5leHRlbmQoXCJ1bmlvbkJ5X3FfXCIsIFVuaW9uQnlfMS51bmlvbkJ5KTtcbkV4dGVuZF8xLmV4dGVuZChcIndoZXJlX3FfXCIsIFdoZXJlXzEud2hlcmUpO1xuRXh0ZW5kXzEuZXh0ZW5kKFwiemlwX3FfXCIsIFppcF8xLnppcCk7XG4vLyBBcyBhIHdvcmthcm91bmQgZm9yIG9yZGVyYnkgKGphdmFzY3JpcHQgY2FuJ3QgY3JlYXRlIGEgY2xhc3MgdGhhdCByZWZlcmVuY2VzIGEgZGVzY2VuZGFudCBjbGFzcyksXG4vLyBhZGQgdGhlc2UgdG8gdGhlIEVudW1lcmFibGUgY2xhc3MgaW4gYSB3YXkgdGhhdCBkb2Vzbid0IGV4cGxvZGVcbkVudW1lcmFibGVfMS5FbnVtZXJhYmxlLnByb3RvdHlwZS5vcmRlckJ5X3FfID0gT3JkZXJCeV8xLm9yZGVyQnk7XG5FbnVtZXJhYmxlXzEuRW51bWVyYWJsZS5wcm90b3R5cGUub3JkZXJCeURlc2NlbmRpbmdfcV8gPSBPcmRlckJ5XzEub3JkZXJCeURlc2NlbmRpbmc7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogYWdncmVnYXRlX3FfOiBBcHBsaWVzIGFuIGFjY3VtdWxhdG9yIGZ1bmN0aW9uIG92ZXIgYSBzZXF1ZW5jZS5cbiAqIG9wdGlvbmFsIGluaXRpYWwgdmFsdWUgYWN0cyBhcyBzZWVkIHZhbHVlXG4gKiBvcHRpb25hbCBzZWxlY3RGdW5jdGlvbiBzZWxlY3RzIHRoZSByZXN1bHRcbiAqL1xuZnVuY3Rpb24gYWdncmVnYXRlKGluaXRpYWxPckFjY3VtdWxhdG9yLCBhY2N1bXVsYXRvckZ1bmN0aW9uLCBzZWxlY3RGdW5jdGlvbikge1xuICAgIGxldCBpbml0aWFsVmFsdWVQcm92aWRlZCA9IGZhbHNlO1xuICAgIGxldCBzZWVkZWQgPSBmYWxzZTtcbiAgICBsZXQgdmFsdWU7XG4gICAgbGV0IGFjY3VtdWxhdG9yO1xuICAgIGxldCBzZWxlY3RvcjtcbiAgICAvLyBUaGlzIGlzIGJhc2ljYWxseSB0aGUgc2FtZSBhcyByZWR1Y2UsIGV4Y2VwdCBpdCBkb2Vzbid0IHJlcXVpcmUgY29weWluZyB0aGUgd2hvbGUgdGhpbmcgdG8gYW4gYXJyYXkgZmlyc3RcbiAgICAvLyBUaGUgd2FjayB3YXkgdGhhdCB0eXBlc2NyaXB0IGRvZXMgb3ZlcmxvYWRzIHJlYWxseSBzbG9wcyB1cCB0aGUgY29kZSBmb3Iga2VlcGluZyBhIGxpbnEgYXBpXG4gICAgLy8gSXQgYWxzbyByZXF1aXJlZCB0d28gdXNlIG9mIFwiYW55XCIgYWJvdmUgdGhhdCBJIGRpZCBub3QgbGlrZSBkb2luZy5cbiAgICBpZiAoIWFjY3VtdWxhdG9yRnVuY3Rpb24pIHtcbiAgICAgICAgYWNjdW11bGF0b3IgPSBpbml0aWFsT3JBY2N1bXVsYXRvcjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGluaXRpYWxWYWx1ZVByb3ZpZGVkID0gdHJ1ZTtcbiAgICAgICAgc2VlZGVkID0gdHJ1ZTtcbiAgICAgICAgdmFsdWUgPSBpbml0aWFsT3JBY2N1bXVsYXRvcjtcbiAgICAgICAgYWNjdW11bGF0b3IgPSBhY2N1bXVsYXRvckZ1bmN0aW9uO1xuICAgICAgICBzZWxlY3RvciA9IHNlbGVjdEZ1bmN0aW9uO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcykge1xuICAgICAgICAvLyBJZiB0aGVyZSBpcyBubyBzZWVkLCB0aGVuIHRoZSBmaXJzdCB2YWx1ZSBpcyB1c2VkIGFzIHRoZSBzZWVkXG4gICAgICAgIC8vIEFmdGVyIHRoZSBmaXJzdCBpdGVtLCBpdCBpcyBwb3B1bGF0ZWQuIEJ1dCB0eXBlc2NyaXB0IGRvZXNuJ3Qga25vdyB1bmRlcnN0YW5kIHRoYXQsIHNvIGFueSBuZWVkcyB0byBiZSB1c2VkIHNvbWV0aW1lcy5cbiAgICAgICAgaWYgKCFzZWVkZWQpIHtcbiAgICAgICAgICAgIHZhbHVlID0gaXRlbTtcbiAgICAgICAgICAgIHNlZWRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGFjY3VtdWxhdG9yKHZhbHVlLCBpdGVtKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBDIyBvbmx5IHRocm93cyBhbiBlcnJvciBpbiB0aGUgb3ZlcmxvYWQgd2l0aG91dCBhIHNlZWQgdmFsdWUuXG4gICAgaWYgKCFzZWVkZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2VxdWVuY2UgY29udGFpbnMgbm8gZWxlbWVudHNcIik7XG4gICAgfVxuICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gc2VsZWN0b3IodmFsdWUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gVHlwZXNjcmlwdCBkb2Vzbid0IHVuZGVyc3RhbmQgdGhhdCBfdmFsdWUgaXMgbm90IHVuZGVmaW5lZCBhZnRlciB0aGUgX3ZhbHVlID0gaXRlbSBsaW5lICh1bmxlc3MgdGhlIGl0ZXJhYmxlIHR5cGUgYWxsb3dzIGl0KVxuICAgICAgICAvLyBVbmxlc3MgdGhlIGl0ZXJhdG9yIGNvbnRhaW5zIHVuZGVmaW5lZCwgb2YgY291cnNlLiBUaGF0J3MgdG90YWxseSBsZWdhbCBpbiBKU1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxufVxuZXhwb3J0cy5hZ2dyZWdhdGUgPSBhZ2dyZWdhdGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogYWxsX3FfOiBEZXRlcm1pbmVzIHdoZXRoZXIgYWxsIGVsZW1lbnRzIG9mIGEgc2VxdWVuY2Ugc2F0aXNmeSBhIGNvbmRpdGlvbi5cbiAqIFRoaXMgY29uZGl0aW9uIGNhbiBvcHRpb25hbGx5IHRha2UgdGhlIGluZGV4IGFzIHRoZSBzZWNvbmQgYXJndW1lbnQgKHRoaXMgaXMgbm90IHByb3ZpZGVkIGJ5IHRoZSBDIyB2ZXJzaW9uKVxuICovXG5mdW5jdGlvbiBhbGwoZmlsdGVyKSB7XG4gICAgaWYgKCFmaWx0ZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcykge1xuICAgICAgICBpZiAoIWZpbHRlcihpdGVtLCBpbmRleCsrKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuZXhwb3J0cy5hbGwgPSBhbGw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogYW55X3FfOiBEZXRlcm1pbmVzIHdoZXRoZXIgYW55IGVsZW1lbnRzIG9mIGEgc2VxdWVuY2Ugc2F0aXNmeSBhbiBvcHRpb25hbCBjb25kaXRpb25cbiAqL1xuZnVuY3Rpb24gYW55X3FfKGZpbHRlcikge1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzKSB7XG4gICAgICAgIGlmICghZmlsdGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZmlsdGVyKGl0ZW0pKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnRzLmFueV9xXyA9IGFueV9xXztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBhcHBlbmRfcV86IEFwcGVuZHMgYSB2YWx1ZSB0byB0aGUgZW5kIG9mIHRoZSBzZXF1ZW5jZVxuICovXG5mdW5jdGlvbiBhcHBlbmQobmV3SXRlbSkge1xuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF9hcHBlbmQoZGF0YSkge1xuICAgICAgICB5aWVsZCogZGF0YTtcbiAgICAgICAgeWllbGQgbmV3SXRlbTtcbiAgICB9KTtcbn1cbmV4cG9ydHMuYXBwZW5kID0gYXBwZW5kO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBOb25lVHlwZV8xID0gcmVxdWlyZShcIi4uL1R5cGVzL05vbmVUeXBlXCIpO1xuLyoqXG4gKiBhdmVyYWdlX3FfOiBjb21wdXRlcyB0aGUgYXZlcmFnZSBvZiBhIHNlcXVlbmNlIG9mIG51bWJlcnMuXG4gKiBvcHRpb25hbCB0cmFuc2Zvcm0gZnVuY3Rpb24gbGV0cyB1cyBjYWxjdWxhdGUgdXNpbmcgdmFsdWVzIG9idGFpbmVkIGJ5IGludm9raW5nIGFmdW5jdGlvbiBvbiBlYWNoIGVsZW1lbnQgb2YgdGhlIHNlcXVlbmNlLlxuICovXG5mdW5jdGlvbiBhdmVyYWdlKHNlbGVjdEZ1bmN0aW9uKSB7XG4gICAgbGV0IHN1bSA9IDA7XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcykge1xuICAgICAgICBsZXQgdG1wO1xuICAgICAgICBpZiAoc2VsZWN0RnVuY3Rpb24pIHtcbiAgICAgICAgICAgIHRtcCA9IHNlbGVjdEZ1bmN0aW9uKGl0ZW0pO1xuICAgICAgICAgICAgLy8gTnVsbGFibGUgbnVtYmVyIGJlaGF2aW91cjogaWYgbnVsbCwgc2tpcCBpdFxuICAgICAgICAgICAgaWYgKE5vbmVUeXBlXzEuaXNOb25lKHRtcCkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIE51bGxhYmxlIG51bWJlciBiZWhhdmlvdXI6IGlmIG51bGwsIHNraXAgaXRcbiAgICAgICAgICAgIGlmIChOb25lVHlwZV8xLmlzTm9uZShpdGVtKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRtcCA9IE51bWJlcihpdGVtKTtcbiAgICAgICAgaWYgKGlzTmFOKHRtcCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZGF0YSB0eXBlIGZvciBhdmVyYWdlLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBzdW0gPSBzdW0gKyB0bXA7XG4gICAgICAgIGNvdW50Kys7XG4gICAgfVxuICAgIGlmICghY291bnQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2VxdWVuY2UgY29udGFpbnMgbm8gZWxlbWVudHNcIik7XG4gICAgfVxuICAgIHJldHVybiBzdW0gLyBjb3VudDtcbn1cbmV4cG9ydHMuYXZlcmFnZSA9IGF2ZXJhZ2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogY2h1bmtfcV86IHNwbGl0cyB0aGUgZWxlbWVudHMgb2YgYSBzZXF1ZW5jZSBpbnRvIGNodW5rcyBvZiBzaXplIGF0IG1vc3Qgc2l6ZVxuICovXG5mdW5jdGlvbiBjaHVuayhzaXplKSB7XG4gICAgY29uc3QgbmV3ZW51bSA9IHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX2NodW5rKGRhdGEpIHtcbiAgICAgICAgaWYgKCFzaXplIHx8IHNpemUgPD0gMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQXJndW1lbnQgb3V0IG9mIHJhbmdlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjb3VudGVyID0gc2l6ZTtcbiAgICAgICAgbGV0IHRtcCA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xuICAgICAgICAgICAgdG1wLnB1c2goaXRlbSk7XG4gICAgICAgICAgICBjb3VudGVyLS07XG4gICAgICAgICAgICBpZiAoY291bnRlciA8PSAwKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgdG1wO1xuICAgICAgICAgICAgICAgIHRtcCA9IFtdO1xuICAgICAgICAgICAgICAgIGNvdW50ZXIgPSBzaXplO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0bXAubGVuZ3RoKSB7XG4gICAgICAgICAgICB5aWVsZCB0bXA7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbmV3ZW51bTtcbn1cbmV4cG9ydHMuY2h1bmsgPSBjaHVuaztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBjb25jYXRfcV86IGNvbmNhdGVuYXRlcyB0d28gc2VxdWVuY2VzXG4gKi9cbmZ1bmN0aW9uIGNvbmNhdChzZWNvbmQpIHtcbiAgICBpZiAoIXNlY29uZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfY29uY2F0KGRhdGEpIHtcbiAgICAgICAgeWllbGQqIGRhdGE7XG4gICAgICAgIHlpZWxkKiBzZWNvbmQ7XG4gICAgfSk7XG59XG5leHBvcnRzLmNvbmNhdCA9IGNvbmNhdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgSUVxdWFsaXR5Q29tcGFyZXJfMSA9IHJlcXVpcmUoXCIuLi9UeXBlcy9JRXF1YWxpdHlDb21wYXJlclwiKTtcbi8qKlxuICogY29udGFpbnNfcV86IGRldGVybWluZXMgd2hldGhlciBhIHNlcXVlbmNlIGNvbnRhaW5zIGEgc3BlY2lmaWVkIGVsZW1lbnRcbiAqIG9wdGlvbmFsIGVxdWFsaXR5Q29tcGFyZXIgZnVuY3Rpb24gdG8gaW5kaWNhdGUgaWYgcmVjb3JkIG1hdGNoZXNcbiAqL1xuZnVuY3Rpb24gY29udGFpbnModmFsdWUsIGNvbXBhcmVyKSB7XG4gICAgY29uc3QgY29tcGFyZSA9IElFcXVhbGl0eUNvbXBhcmVyXzEuZXh0cmFjdEVxdWFsaXR5Q29tcGFyZXIoY29tcGFyZXIpO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzKSB7XG4gICAgICAgIGlmICghY29tcGFyZSkge1xuICAgICAgICAgICAgaWYgKGl0ZW0gPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoKGNvbXBhcmUoaXRlbSwgdmFsdWUpKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydHMuY29udGFpbnMgPSBjb250YWlucztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBjb3VudF9xXzogcmV0dXJucyBhIG51bWJlciB0aGF0IHJlcHJlc2VudHMgaG93IG1hbnkgZWxlbWVudHMgaW4gdGhlIHNwZWNpZmllZCBzZXF1ZW5jZSBzYXRpc2Z5IGFuIG9wdGlvbmFsIGNvbmRpdGlvblxuICovXG5mdW5jdGlvbiBjb3VudChjb25kaXRpb24pIHtcbiAgICBsZXQgY3RyID0gMDtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcykge1xuICAgICAgICBpZiAoY29uZGl0aW9uKSB7XG4gICAgICAgICAgICBpZiAoY29uZGl0aW9uKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgY3RyKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjdHIrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY3RyO1xufVxuZXhwb3J0cy5jb3VudCA9IGNvdW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBSZXN0YXJ0YWJsZUdlbmVyYXRvcl8xID0gcmVxdWlyZShcIi4uL0dlbmVyYXRvcnMvUmVzdGFydGFibGVHZW5lcmF0b3JcIik7XG4vKipcbiAqIGNyb3NzSm9pbl9xXzogQ3JlYXRlIGEgc2ltcGxlIGNhcnRlc2lhbiBqb2luIChldmVyeSByZWNvcmQgZnJvbSB0YWJsZSAxIGFsb25nIHdpdGggZXZlcnkgcmVjb3JkIGZyb20gdGFibGUgMilcbiAqL1xuZnVuY3Rpb24gY3Jvc3NKb2luKHNlY29uZCwgc2VsZWN0RnVuY3Rpb24pIHtcbiAgICBpZiAoIXNlY29uZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICBsZXQgb3V0cHV0O1xuICAgIGlmIChzZWxlY3RGdW5jdGlvbikge1xuICAgICAgICBvdXRwdXQgPSBzZWxlY3RGdW5jdGlvbjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIElmIHNlbGVjdEZ1bmN0aW9uIGlzIG1pc3NpbmcsIFRSZXN1bHQgaXMgW1QsIFRTZWNvbmRdLiBDYW4ndCBtYWtlIFR5cGVTY3JpcHQgdW5kZXJzdGFuZCB0aGF0LCB0aG91Z2guXG4gICAgICAgIG91dHB1dCA9ICgobCwgcikgPT4gW2wsIHJdKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX2Nyb3NzSm9pbihkYXRhKSB7XG4gICAgICAgIC8vIFdlIG5lZWQgdGhlIGFiaWxpdHkgdG8gbWF0Y2ggdGhlIHJpZ2h0IHNpZGUgYWdhaW5zdCBldmVyeSBsZWZ0IHNpZGUuXG4gICAgICAgIC8vIElmIGl0IGlzIGEgZ2VuZXJhdG9yLCBpdCBjYW4ndCBiZSByZXN0YXJ0ZWQgdG8gYWxsb3cgdGhhdC5cbiAgICAgICAgY29uc3QgcmlnaHRHZW4gPSBuZXcgUmVzdGFydGFibGVHZW5lcmF0b3JfMS5SZXN0YXJ0YWJsZUdlbmVyYXRvcihzZWNvbmQpO1xuICAgICAgICBmb3IgKGNvbnN0IGxlZnRJdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcmlnaHRJdGVtIG9mIHJpZ2h0R2VuKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgb3V0cHV0KGxlZnRJdGVtLCByaWdodEl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmlnaHRHZW4ucmVzdGFydCgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLmNyb3NzSm9pbiA9IGNyb3NzSm9pbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBkZWZhdWx0SWZFbXB0eV9xXzogcmV0dXJucyB0aGUgc2VxdWVuY2Ugb3IgdGhlIChvcHRpb25hbCkgZGVmYXVsdCB2YWx1ZSBpZiB0aGUgc2VxdWVuY2UgaXMgZW1wdHkuXG4gKiBEZWZhdWx0IGluIGlzIGEgcGFyYW10ZXIuIElGIGl0IGlzIGxlZnQgb3V0LCB1bmRlZmluZWQgaXMgcmV0dXJuZWQuXG4gKlxuICogKE5vdGUgdGhhdCBpbiBKYXZhU2NyaXB0LCB1bmxpa2UgQyMsIHRoZXJlJ3Mgbm8gd2F5IHRvIGtub3cgd2hhdCB0eXBlIGEgc2VxdWVuY2UgaXMgc3VwcG9zZWQgdG8gaGF2ZSwgZXNwZWNpYWxseSBhbiBlbXB0eSBvbmUuKVxuICovXG5mdW5jdGlvbiBkZWZhdWx0SWZFbXB0eShkZWZhdWx0VmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfZGVmYXVsdElmRW1wdHkoZGF0YSkge1xuICAgICAgICBsZXQgZW1wdHkgPSB0cnVlO1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xuICAgICAgICAgICAgZW1wdHkgPSBmYWxzZTtcbiAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVtcHR5KSB7XG4gICAgICAgICAgICB5aWVsZCBkZWZhdWx0VmFsdWU7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuZGVmYXVsdElmRW1wdHkgPSBkZWZhdWx0SWZFbXB0eTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgSUVxdWFsaXR5Q29tcGFyZXJfMSA9IHJlcXVpcmUoXCIuLy4uL1R5cGVzL0lFcXVhbGl0eUNvbXBhcmVyXCIpO1xuLyoqXG4gKiBkaXN0aW5jdF9xXzogUmV0dXJucyBkaXN0aW5jdCBlbGVtZW50cyBmcm9tIGEgc2VxdWVuY2UgYnkgdXNpbmcgYW4gb3B0aW9uYWwgZXF1YWxpdHkgY29tcGFyZXIgdG8gY29tcGFyZSB2YWx1ZXNcbiAqL1xuZnVuY3Rpb24gZGlzdGluY3QoY29tcGFyZXIpIHtcbiAgICBjb25zdCBjb21wYXJlID0gSUVxdWFsaXR5Q29tcGFyZXJfMS5leHRyYWN0RXF1YWxpdHlDb21wYXJlcihjb21wYXJlcik7XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX2Rpc3RpbmN0KGRhdGEpIHtcbiAgICAgICAgLy8gS2VlcCBhIGhpc3Rvcnkgb2YgZXZlcnkgaXRlbSByZXR1cm5lZCAobm8gd2F5IGFyb3VuZCB0aGF0KSBhbmQgb25seSByZXR1cm4gaWYgbm90IGluIHRoZSBsaXN0LlxuICAgICAgICBjb25zdCBoaXN0b3J5ID0gbmV3IFNldCgpO1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xuICAgICAgICAgICAgaWYgKGNvbXBhcmUpIHtcbiAgICAgICAgICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGlubmVySXRlbSBvZiBoaXN0b3J5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21wYXJlKGl0ZW0sIGlubmVySXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5hZGQoaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCEoaGlzdG9yeS5oYXMoaXRlbSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpc3RvcnkuYWRkKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5kaXN0aW5jdCA9IGRpc3RpbmN0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBJRXF1YWxpdHlDb21wYXJlcl8xID0gcmVxdWlyZShcIi4vLi4vVHlwZXMvSUVxdWFsaXR5Q29tcGFyZXJcIik7XG4vKipcbiAqIGRpc3RpbmN0QnlfcV86IFJldHVybnMgZGlzdGluY3QgZWxlbWVudHMgZnJvbSBhIHNlcXVlbmNlIGJhc2VkIG9uIGtleXMgcmV0dXJuZWQgYnkgYSBrZXkgc2VsZWN0b3IgZnVuY3Rpb24uXG4gKiBvcHRpb25hbCBlcXVhbGl0eSBjb21wYXJlciBjYW4gYmUgc3VwcGxpZWQgdG8gY29tcGFyZSB2YWx1ZXNcbiAqL1xuZnVuY3Rpb24gZGlzdGluY3RCeShrZXlTZWxlY3RvciwgY29tcGFyZXIpIHtcbiAgICBpZiAoIWtleVNlbGVjdG9yKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIGNvbnN0IGNvbXBhcmUgPSBJRXF1YWxpdHlDb21wYXJlcl8xLmV4dHJhY3RFcXVhbGl0eUNvbXBhcmVyKGNvbXBhcmVyKTtcbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfZGlzdGluY3RCeShkYXRhKSB7XG4gICAgICAgIC8vIEtlZXAgYSBoaXN0b3J5IG9mIGV2ZXJ5IGl0ZW0gcmV0dXJuZWQgKG5vIHdheSBhcm91bmQgdGhhdCkgYW5kIG9ubHkgcmV0dXJuIGlmIG5vdCBpbiB0aGUgbGlzdC5cbiAgICAgICAgY29uc3QgaGlzdG9yeSA9IG5ldyBTZXQoKTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGtleVNlbGVjdG9yKGl0ZW0pO1xuICAgICAgICAgICAgaWYgKGNvbXBhcmUpIHtcbiAgICAgICAgICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGlubmVySXRlbSBvZiBoaXN0b3J5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21wYXJlKGtleSwgaW5uZXJJdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFmb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LmFkZChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghKGhpc3RvcnkuaGFzKGtleSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpc3RvcnkuYWRkKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLmRpc3RpbmN0QnkgPSBkaXN0aW5jdEJ5O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIGVsZW1lbnRBdF9xXzogUmV0dXJucyB0aGUgZWxlbWVudCBhdCBhIHNwZWNpZmllZCBpbmRleCBpbiBhIHNlcXVlbmNlXG4gKi9cbmZ1bmN0aW9uIGVsZW1lbnRBdChpbmRleCkge1xuICAgIGxldCBpID0gMDtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcykge1xuICAgICAgICBpZiAoaSA9PT0gaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9XG4gICAgICAgIGkrKztcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiSW5kZXggb3V0IG9mIHJhbmdlLlwiKTtcbn1cbmV4cG9ydHMuZWxlbWVudEF0ID0gZWxlbWVudEF0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIGVsZW1lbnRBdE9yRGVmYXVsdF9xXzogUmV0dXJucyB0aGUgZWxlbWVudCBhdCBhIHNwZWNpZmllZCBpbmRleCBpbiBhIHNlcXVlbmNlLlxuICogUmV0dXJucyBhbiBvcHRpb25hbCBkZWZhdWx0IHZhbHVlIGlmIGluZGV4IGlzIG91dCBvZiByYW5nZSwgb3IgdW5kZWZpbmVkIGlmIG5vdCBzdXBwbGllZC5cbiAqXG4gKiAoTm90ZSB0aGF0IGluIEphdmFTY3JpcHQsIHVubGlrZSBDIywgdGhlcmUncyBubyB3YXkgdG8ga25vdyB3aGF0IHR5cGUgYSBzZXF1ZW5jZSBpcyBzdXBwb3NlZCB0byBoYXZlLilcbiAqL1xuZnVuY3Rpb24gZWxlbWVudEF0T3JEZWZhdWx0KGluZGV4LCBkZWZhdWx0VmFsdWUpIHtcbiAgICBsZXQgaSA9IDA7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgaWYgKGkgPT09IGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfVxuICAgICAgICBpKys7XG4gICAgfVxuICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG59XG5leHBvcnRzLmVsZW1lbnRBdE9yRGVmYXVsdCA9IGVsZW1lbnRBdE9yRGVmYXVsdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgRW51bWVyYWJsZV8xID0gcmVxdWlyZShcIi4uL0VudW1lcmFibGUvRW51bWVyYWJsZVwiKTtcbi8qKlxuICogZW1wdHlfcV86IFJldHVybnMgYW4gZW1wdHkgSUVudW1lcmFibGU8VD4gdGhhdCBoYXMgdGhlIHNwZWNpZmllZCB0eXBlIGFyZ3VtZW50LlxuICogTm90ZSB0aGF0IHR5cGVzIGFyZSB0eXBlc2NyaXB0LW9ubHkgZmljdGl0aW91cyBlbnRpdGllcyB0aGF0IGFyZW4ndCBlbWl0dGVkLlxuICovXG5mdW5jdGlvbiBlbXB0eSgpIHtcbiAgICByZXR1cm4gbmV3IEVudW1lcmFibGVfMS5FbnVtZXJhYmxlKFtdKTtcbn1cbmV4cG9ydHMuZW1wdHkgPSBlbXB0eTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgSUVxdWFsaXR5Q29tcGFyZXJfMSA9IHJlcXVpcmUoXCIuLy4uL1R5cGVzL0lFcXVhbGl0eUNvbXBhcmVyXCIpO1xuLyoqXG4gKiBleGNlcHRfcV86IFByb2R1Y2VzIHRoZSBzZXQgZGlmZmVyZW5jZSAoZGlzdGluY3QpIG9mIHR3byBzZXF1ZW5jZXMuXG4gKiBvcHRpb25hbCBlcXVhbGl0eSBjb21wYXJlciBjYW4gYmUgdXNlZCB0byBjb21wYXJlIHZhbHVlc1xuICovXG5mdW5jdGlvbiBleGNlcHQoc2Vjb25kLCBjb21wYXJlcikge1xuICAgIGlmICghc2Vjb25kKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIGNvbnN0IGNvbXBhcmUgPSBJRXF1YWxpdHlDb21wYXJlcl8xLmV4dHJhY3RFcXVhbGl0eUNvbXBhcmVyKGNvbXBhcmVyKTtcbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfZXhjZXB0KGRhdGEpIHtcbiAgICAgICAgLy8gTm8gd2F5IGFyb3VuZCB0aGlzLCBidXQgd2UgbmVlZCB0byBrZWVwIGEgaGlzdG9yeSBvZiBldmVyeSBpdGVtIHJldHVybmVkLiBCb3RoIHRoZSBmaXJzdCBhbmQgc2Vjb25kIGxpc3RzLlxuICAgICAgICAvLyBBbmQgdGhlIHNlY29uZCBtaWdodCBhbHNvIGJlIGEgZ2VuZXJhdG9yLCBzbyB3ZSBuZWVkIHRvIGV4aGF1c3QgaXRzIHZhbHVlcy5cbiAgICAgICAgLy8gU3RhcnQgYnkgbG9hZGluZyB0aGUgaGlzdG9yeSB3aXRoIHRoZSBzZWNvbmQgc2V0LiBUaGVuLCB3ZSBjYW4gZG8gd2hhdCB3ZSBhbHJlYWR5IGRpZCBmb3IgZGlzdGluY3QoKSBhbmQgaXQnbGwgcHVsbCBvdXQgdGhlIG1hdGNoZXNcbiAgICAgICAgY29uc3QgaGlzdG9yeSA9IG5ldyBTZXQoKTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHNlY29uZCkge1xuICAgICAgICAgICAgaGlzdG9yeS5hZGQoaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChjb21wYXJlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBpbm5lckl0ZW0gb2YgaGlzdG9yeSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGFyZShpdGVtLCBpbm5lckl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpc3RvcnkuYWRkKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghKGhpc3RvcnkuaGFzKGl0ZW0pKSkge1xuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LmFkZChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuZXhjZXB0ID0gZXhjZXB0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBJRXF1YWxpdHlDb21wYXJlcl8xID0gcmVxdWlyZShcIi4vLi4vVHlwZXMvSUVxdWFsaXR5Q29tcGFyZXJcIik7XG4vKipcbiAqIGV4Y2VwdF9xXzogUHJvZHVjZXMgdGhlIHNldCBkaWZmZXJlbmNlIG9mIHR3byBzZXF1ZW5jZXMgYmFzZWQgb24ga2V5cyAoZGlzdGluY3Qga2V5cykgcmV0dXJuZWQgYnkgYSBrZXkgc2VsZWN0b3IgZnVuY3Rpb24uXG4gKiBvcHRpb25hbCBlcXVhbGl0eSBjb21wYXJlciBjYW4gYmUgdXNlZCB0byBjb21wYXJlIHZhbHVlc1xuICovXG5mdW5jdGlvbiBleGNlcHRCeShzZWNvbmQsIGtleVNlbGVjdG9yLCBjb21wYXJlcikge1xuICAgIGlmICghc2Vjb25kIHx8ICFrZXlTZWxlY3Rvcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICBjb25zdCBjb21wYXJlID0gSUVxdWFsaXR5Q29tcGFyZXJfMS5leHRyYWN0RXF1YWxpdHlDb21wYXJlcihjb21wYXJlcik7XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX2V4Y2VwdEJ5KGRhdGEpIHtcbiAgICAgICAgLy8gTm8gd2F5IGFyb3VuZCB0aGlzLCBidXQgd2UgbmVlZCB0byBrZWVwIGEgaGlzdG9yeSBvZiBldmVyeSBpdGVtIHJldHVybmVkLiBCb3RoIHRoZSBmaXJzdCBhbmQgc2Vjb25kIGxpc3RzLlxuICAgICAgICAvLyBBbmQgdGhlIHNlY29uZCBtaWdodCBhbHNvIGJlIGEgZ2VuZXJhdG9yLCBzbyB3ZSBuZWVkIHRvIGV4aGF1c3QgaXRzIHZhbHVlcy5cbiAgICAgICAgY29uc3QgaGlzdG9yeSA9IG5ldyBTZXQoKTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHNlY29uZCkge1xuICAgICAgICAgICAgaGlzdG9yeS5hZGQoa2V5U2VsZWN0b3IoaXRlbSkpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBrZXlTZWxlY3RvcihpdGVtKTtcbiAgICAgICAgICAgIGlmIChjb21wYXJlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBpbm5lckl0ZW0gb2YgaGlzdG9yeSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGFyZShrZXksIGlubmVySXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5hZGQoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIShoaXN0b3J5LmhhcyhrZXkpKSkge1xuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LmFkZChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5leGNlcHRCeSA9IGV4Y2VwdEJ5O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIGZpcnN0X3FfOiBSZXR1cm5zIHRoZSBmaXJzdCBlbGVtZW50IGluIGEgc2VxdWVuY2UsIHRocm93aW5nIGFuIGV4Y2VwdGlvbiBpZiB0aGUgc2VxdWVuY2UgaXMgZW1wdHkuXG4gKiBvcHRpb25hbCBmaWx0ZXIgY29uZGl0aW9uIGNhbiBiZSBzdXBwbGllZFxuICovXG5mdW5jdGlvbiBmaXJzdChtYXRjaEZ1bmN0aW9uKSB7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgaWYgKCFtYXRjaEZ1bmN0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChtYXRjaEZ1bmN0aW9uKGl0ZW0pKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJTZXF1ZW5jZSBoYXMgbm8gZWxlbWVudHMuXCIpO1xufVxuZXhwb3J0cy5maXJzdCA9IGZpcnN0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIGZpcnN0T3JEZWZhdWx0X3FfOiBSZXR1cm5zIHRoZSBmaXJzdCBlbGVtZW50IGluIGEgc2VxdWVuY2UuXG4gKiBvcHRpb25hbCBmaWx0ZXIgY29uZGl0aW9uIGNhbiBiZSBzdXBwbGllZFxuICogSWYgdGhlIGZpbHRlcmVkIHNlcXVlbmNlIGlzIGVtcHR5LCBpdCByZXR1cm5zIHRoZSBkZWZhdWx0IHZhbHVlLlxuICogVGhlIGRlZmF1bHQgdmFsdWUgaXMgcHJvdmlkZWQgYnkgYSBwYXJhbWV0ZXIgb3IgaXMgdW5kZWZpbmVkLlxuICpcbiAqIChOb3RlIHRoYXQgaW4gSmF2YVNjcmlwdCwgdW5saWtlIEMjLCB0aGVyZSdzIG5vIHdheSB0byBrbm93IHdoYXQgdHlwZSBhIHNlcXVlbmNlIGlzIHN1cHBvc2VkIHRvIGhhdmUsIGVzcGVjaWFsbHkgbm90IGFuIGVtcHR5IHNlcXVlbmNlLilcbiAqXG4gKiBUaGUgZm9sbG93aW5nIG1ldGhvZCBleHBsYWluZWQ6IGZpcnN0T3JEZWZhdWx0X3FfKHsgZGVmYXVsdFZhbHVlIH06IHsgZGVmYXVsdFZhbHVlOiBUIH0pOiBUO1xuICogSW4gSmF2YVNjcmlwdCwgaWYgeW91IGNhbGwgdGhlIG1ldGhvZCB3aXRoIGEgc2luZ2xlIHBhcmFtZXRlciBhbmQgd2FudCBpdCB0byBiZSB0aGUgZGVmYXVsdCwgdGhlcmUncyBubyBjbGVhbiB3YXkgdG8gaW5kaWNhdGUgdGhhdCB0aGlzXG4gKiBpcyB3aGF0IHlvdSB3YW50LCBpdCBicmVha3MgdGhlIHN0YW5kYXJkIGNhc2UuXG4gKlxuICogQ29uc2lkZXIgdGhlIGZvbGxvd2luZzogYXJyYXlPZlByZWRpY2F0ZXMuZmlyc3RPckRlZmF1bHRfcV8obXlGdW5jKVxuICogSXMgdGhpcyBzdXBwb3NlZCB0byBiZVxuICogICAgICBhcnJheU9mUHJlZGljYXRlcy53aGVyZV9xXyhteUZ1bmMpLmZpcnN0T3JEZWZhdWx0X3FfKClcbiAqIG9yXG4gKiAgICAgIGFycmF5T2ZQcmVkaWNhdGVzLmZpcnN0T3JEZWZhdWx0X3FfKCkgfHwgbXlGdW5jXG4gKlxuICogVGhlIG9ubHkgdG8gbWFrZSBpdCB3b3JrIGlzIHRvIGNhbGwgbGlrZSB0aGlzOlxuICogICAgICBhcnJheU9mUHJlZGljYXRlcy5maXJzdE9yRGVmYXVsdF9xXyh7IGRlZmF1bHRWYWx1ZTogc29tZXRoaW5nIH0pXG4gKi9cbmZ1bmN0aW9uIGZpcnN0T3JEZWZhdWx0KG1hdGNoRnVuY3Rpb24sIGRlZmF1bHRWYWx1ZSkge1xuICAgIGxldCB0ZXN0ZXI7XG4gICAgaWYgKG1hdGNoRnVuY3Rpb24gJiYgdHlwZW9mIG1hdGNoRnVuY3Rpb24gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB0ZXN0ZXIgPSBtYXRjaEZ1bmN0aW9uO1xuICAgIH1cbiAgICBsZXQgZGVmO1xuICAgIGlmIChtYXRjaEZ1bmN0aW9uICYmIFwiZGVmYXVsdFZhbHVlXCIgaW4gbWF0Y2hGdW5jdGlvbikge1xuICAgICAgICBkZWYgPSBtYXRjaEZ1bmN0aW9uLmRlZmF1bHRWYWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGRlZiA9IGRlZmF1bHRWYWx1ZTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgaWYgKCF0ZXN0ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRlc3RlcihpdGVtKSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRlZjtcbn1cbmV4cG9ydHMuZmlyc3RPckRlZmF1bHQgPSBmaXJzdE9yRGVmYXVsdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBmb3JFYWNoX3FfOiBFeGVjdXRlIGEgY2FsbGJhY2sgZnVuY3Rpb24gb24gZWFjaCByb3cgaW4gdGhlIGVudW1lcmFibGUsIHJldHVybmluZyBubyByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcpIHtcbiAgICBpZiAoIWNhbGxiYWNrZm4pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcykge1xuICAgICAgICBjYWxsYmFja2ZuLmNhbGwodGhpc0FyZywgaXRlbSwgaW5kZXgrKyk7XG4gICAgfVxufVxuZXhwb3J0cy5mb3JFYWNoID0gZm9yRWFjaDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgUmVzdGFydGFibGVHZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuLi9HZW5lcmF0b3JzL1Jlc3RhcnRhYmxlR2VuZXJhdG9yXCIpO1xuLyoqXG4gKiBmdWxsSm9pbl9xXzogQSBmcmllbmRseSBoZWxwZXIgdG8gY3JlYXRlIGEgc2ltcGxlIGZ1bGwgb3V0ZXIgam9pbi4gVGhpcyBmb2xsb3dzIHRoZSBwYXR0ZXJuIG9mIGlubmVySm9pbl9xXygpLCB3aGljaCBjb21iaW5lcyB0aGUgdHdvXG4gKiBrZXkgbG9va3VwcyBhbmQgZXF1YWxpdHkgY29tcGFyZXIgaW50byBhIHNpbmdsZSBmdW5jdGlvbiBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gZnVsbEpvaW4oc2Vjb25kLCBvbiwgc2VsZWN0RnVuY3Rpb24pIHtcbiAgICBpZiAoIXNlY29uZCB8fCAhb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgbGV0IG91dHB1dDtcbiAgICBpZiAoc2VsZWN0RnVuY3Rpb24pIHtcbiAgICAgICAgb3V0cHV0ID0gc2VsZWN0RnVuY3Rpb247XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBJZiBzZWxlY3RGdW5jdGlvbiBpcyBtaXNzaW5nLCBUUmVzdWx0IGlzIFtULCBUU2Vjb25kXS4gQ2FuJ3QgbWFrZSBUeXBlU2NyaXB0IHVuZGVyc3RhbmQgdGhhdCwgdGhvdWdoLlxuICAgICAgICBvdXRwdXQgPSAoKGwsIHIpID0+IFtsLCByXSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF9sZWZ0Sm9pbihkYXRhKSB7XG4gICAgICAgIC8vIFNpbXBsZSBuZXN0ZWQgbG9vcHMgam9pblxuICAgICAgICAvLyBJZiB0aGlzIHdlcmUgU1FMIHNlcnZlciwgc29tZSBhbmFseXNpcyBhbmQgcHJlLWZpbHRlcmluZyBjb3VsZCBiZSBkb25lIGJlZm9yZSBjb21wYXJpc29uLlxuICAgICAgICAvLyBUaGlzIGlzbid0IFNRTCBTZXJ2ZXIuIFdlIGNhbid0IGV2ZW4gZmlsdGVyIG91dCBOVUxMcywgYmVjYXVzZSB3aGF0IGlmIHRoZSBqb2luIGZ1bmN0aW9uIHNheXMgXCJsZWZ0ID09IG51bGwgJiYgcmlnaHQgPT0gbnVsbFwiLCBsaWtlIHNvbWUgbGlucSB0byBlbnRpdHkgcXVlcmllcyBkbz9cbiAgICAgICAgLy8gV2UgbmVlZCBhIHBsYWNlIHRvIHRyYWNrIGE7bCBpdGVtcyBpbiB0aGUgcmlnaHQgdGhhdCBnb3Qgc2VudFxuICAgICAgICBjb25zdCBzZW50UmlnaHRzID0gbmV3IFNldCgpO1xuICAgICAgICAvLyBXZSBuZWVkIHRoZSBhYmlsaXR5IHRvIGNoZWNrIHRoZSByaWdodCBzaWRlIGFnYWluc3QgZXZlcnkgbGVmdCBzaWRlLlxuICAgICAgICAvLyBJZiBpdCBpcyBhIGdlbmVyYXRvciwgaXQgY2FuJ3QgYmUgcmVzdGFydGVkIHRvIGFsbG93IHRoYXQuXG4gICAgICAgIGNvbnN0IHJpZ2h0R2VuID0gbmV3IFJlc3RhcnRhYmxlR2VuZXJhdG9yXzEuUmVzdGFydGFibGVHZW5lcmF0b3Ioc2Vjb25kKTtcbiAgICAgICAgZm9yIChjb25zdCBsZWZ0SXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICBsZXQgbGVmdE1hdGNoZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcmlnaHRJdGVtIG9mIHJpZ2h0R2VuKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9uKGxlZnRJdGVtLCByaWdodEl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnRNYXRjaGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgc2VudFJpZ2h0cy5hZGQocmlnaHRJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgb3V0cHV0KGxlZnRJdGVtLCByaWdodEl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbGVmdE1hdGNoZWQpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBvdXRwdXQobGVmdEl0ZW0sIHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByaWdodEdlbi5yZXN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTm93IGdvIHRocm91Z2ggdGhlIHJpZ2h0IHNpZGUgb25jZSBtb3JlIGFuZCBzZW5kIGFueXRoaW5nIHRoYXQgZGlkbid0IGdldCBzZW50XG4gICAgICAgIGZvciAoY29uc3QgcmlnaHRJdGVtIG9mIHJpZ2h0R2VuKSB7XG4gICAgICAgICAgICBpZiAoIXNlbnRSaWdodHMuaGFzKHJpZ2h0SXRlbSkpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBvdXRwdXQodW5kZWZpbmVkLCByaWdodEl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLmZ1bGxKb2luID0gZnVsbEpvaW47XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IElFcXVhbGl0eUNvbXBhcmVyXzEgPSByZXF1aXJlKFwiLi8uLi9UeXBlcy9JRXF1YWxpdHlDb21wYXJlclwiKTtcbmNvbnN0IEdyb3VwaW5nXzEgPSByZXF1aXJlKFwiLi4vVHlwZXMvR3JvdXBpbmdcIik7XG4vKipcbiAqIEdyb3VwcyB0aGUgZWxlbWVudHMgb2YgYSBzZXF1ZW5jZSBhY2NvcmRpbmcgdG8gYSBzcGVjaWZpZWQga2V5IHNlbGVjdG9yIGZ1bmN0aW9uIGFuZCBjcmVhdGVzIGEgcmVzdWx0IHZhbHVlIGZyb20gZWFjaCBncm91cCBhbmQgaXRzIGtleS5cbiAqIG9wdGlvbmFsIGVsZW1lbnQgc2VsZWN0aW9uIGZ1bmN0aW9uIChlaXRoZXIgc2Vjb25kIGFyZ3VtZW50IG9yIGVuY2xvc2VkIGluIGEgeyBlbGVtZW50OiBmdW5jIH0gb2JqZWN0KVxuICogb3B0aW9uYWwgb3V0cHV0IHByb2plY3Rpb24gZnVuY3Rpb24gKGVpdGhlciB0aGlyZCBhcmd1bWVudCBvciBlbmNsb3NlZCBpbiBhIHsgcHJvamVjdDogZnVuYyB9IG9iamVjdClcbiAqIG9wdGlvbmFsIGVxdWFsaXR5IGNvbXBhcmVyIGZ1bmN0aW9uIChlaXRoZXIgZm91cnRoIGFyZ3VtZW50IG9yIGVuY2xvc2VkIGluIGEgeyBlcXVhbHM6IGZ1bmMgfSBvYmplY3QpXG4gKlxuICogVGhlIG51bWJlciBvZiBvdmVybG9hZHMgaW4gQyMgaXMgSFVHRS4gSWYgSSB3ZXJlIG1pY3Jvc29mdCwgSSB3b3VsZG4ndCBoYXZlIGRvbmUgdGhpcywgYXMgZWxlbWVudEZ1bmN0aW9uIGNvdWxkIGJlXG4gKiBoYW5kbGVkIGluIGtleVNlbGVjdG9yIGFuZCBvdXRwdXRGdW50aW9uIGNvdWxkIGJlIGhhbmRsZWQgYnkgYSBzZWxlY3QoKSBmb2xsb3dpbmcgdGhlIGdyb3VwQnkoKS5cbiAqIFRoZXJlJ3MgYSBwb2ludCBiZXlvbmQgd2hpY2ggbW9yZSBvcHRpb25zIGJlY29tZXMgbGVzcyBoZWxwZnVsIHJhdGhlciB0aGFuIG1vcmUuXG4gKiBTZWUgam9pbigpIGZvciBhbm90aGVyIGV4YW1wbGUgb2YgZnVuY3Rpb25zIHBlb3BsZSBoYXZlIHRvIGdvb2dsZSBiZWZvcmUgdXNpbmcuXG4gKlxuICogVGhlIHdlYWtuZXNzZXMgb2YgdGhlIHR5cGVzY3JpcHQgdHlwaW5nIGFuZCBvdmVybG9hZCBzeXN0ZW1zIHJlYWxseSBzaGluZSB0aHJvdWdoIGluIGEgZ2lhbnQgbGlrZSB0aGlzLlxuICogSWluIGphdmFzY3JpcHQgaXQncyBub3QgcG9zc2libGUgdG8ga25vdyB3aGF0IGlucHV0cyBhcmUgcHJvdmlkZWQgaW4gYSBsb3Qgb2YgcGxhY2VzLiBUaGUgZGlmZmVyZW5jZSBiZXR3ZWVuXG4gKiBhIHByb2plY3Rpb24gZnVuY3Rpb24gYW5kIGEga2V5IHNlbGVjdG9yIGZ1bmN0aW9uIGlzIHRoYXQgb25lIHRha2VzIG9uZSBpbnB1dCBhbmQgb25lIHRha2VzIHR3by4gVGhpcyBpcyBlYXN5IGZvclxuICogQyMgdG8gZGV0ZWN0LCBidXQgaW4gamF2YXNjcmlwdCwgYWxsIGZ1bmN0aW9ucyBhcmUganVzdCBmdW5jdGlvbigpIHRoYXQgdGFrZSBhbnkgbnVtYmVyIG9mIGlucHV0cy4gVHlwZXNjcmlwdFxuICogY2FuIGtub3cgd2hpY2ggb25lIHlvdSdyZSB1c2luZywgYnV0IHRoZSBlbWl0dGVkIGphdmFzY3JpcHQgY29kZSBoYXMgbm8gaWRlYS5cbiAqXG4gKiBUaGlzIG92ZXJsb2FkIHNldHVwIGlzIGltcG9zc2libGUgaW4gSlM6XG4gKiAgICAgIGZ1bmN0aW9uIGdyb3VwQnlfcV8oa2V5U2VsZWN0b3IsIGVsZW1lbnRGdW5jdGlvbj86IGZ1bmN0aW9uKTtcbiAqICAgICAgZnVuY3Rpb24gZ3JvdXBCeV9xXyhrZXlTZWxlY3Rvciwgb3V0cHV0RnVuY3Rpb24/OiBmdW5jdGlvbik7XG4gKiBiZWNhdXNlIEpTIHNlZXMgb25seTpcbiAqICAgICAgZnVuY3Rpb24gZ3JvdXBCeV9xXyhmdW5jdGlvbiwgZnVuY3Rpb24pXG4gKiBXaGljaCBvbmUgd2FzIGl0PyBObyBjbHVlLlxuICpcbiAqIEJlY2F1c2Ugb2YgdGhpcywgYXMgbG9uZyBhcyB5b3UgcGFzc1xuICogIG9ubHkga2V5U2VsZWN0b3IsIG9yXG4gKiAgb25seSBrZXlTZWxlY3RvciBhbmQgZWxlbWVudEZ1bmN0aW9uLCBvXG4gKiAgb25seSBrZXlTZWxlY3RvciwgZWxlbWVudEZ1bmN0aW9uLCBvdXRwdXRGdW5jdGlvbiwgb3JcbiAqICBvbmx5IGtleVNlbGVjdG9yLCBlbGVtZW50RnVuY3Rpb24sIG91dHB1dEZ1bmN0aW9uIGFuZCBjb21wYXJlcixcbiAqIHlvdSBkb24ndCBoYXZlIHRvIGRvIGFueXRoaW5nIHNwZWNpYWwsIGJ1dCBhbnkgb3ZlcmxvYWQgd2hpY2ggb21pdHMgYSBwcmV2aW91cyB2YWx1ZSBtdXN0IGJlIGluIHRoZSBmb3JtIG9mXG4gKiAgICAgIGNvbnN0IHJlc3VsdCA9IGFyci5ncm91cEJ5X3FfKGtleVNlbGVjdG9yLCB7IHBhcmFtMzogdmFsdWUgfSlcbiAqIHdoaWNoIHRyYW5zbGF0ZXMgdG9cbiAqICAgICAgIGNvbnN0IHJlc3VsdCA9IGFyci5ncm91cEJ5X3FfKGtleVNlbGVjdG9yLCB1bmRlZmluZWQsIHZhbHVlKVxuICovXG5mdW5jdGlvbiBncm91cEJ5KGdyb3VwRnVuY3Rpb24sIGVsZW1lbnRGdW5jdGlvbiwgb3V0cHV0RnVuY3Rpb24sIGNvbXBhcmVyKSB7XG4gICAgaWYgKCFncm91cEZ1bmN0aW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIGxldCBlbGVtZW50b3I7XG4gICAgaWYgKGVsZW1lbnRGdW5jdGlvbiAmJiB0eXBlb2YgZWxlbWVudEZ1bmN0aW9uID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZWxlbWVudG9yID0gZWxlbWVudEZ1bmN0aW9uO1xuICAgIH1cbiAgICBlbHNlIGlmIChlbGVtZW50RnVuY3Rpb24gJiYgXCJlbGVtZW50XCIgaW4gZWxlbWVudEZ1bmN0aW9uKSB7XG4gICAgICAgIGVsZW1lbnRvciA9IGVsZW1lbnRGdW5jdGlvbi5lbGVtZW50O1xuICAgIH1cbiAgICBsZXQgcHJvamVjdG9yO1xuICAgIGlmIChvdXRwdXRGdW5jdGlvbiAmJiB0eXBlb2Ygb3V0cHV0RnVuY3Rpb24gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBwcm9qZWN0b3IgPSBvdXRwdXRGdW5jdGlvbjtcbiAgICB9XG4gICAgZWxzZSBpZiAoZWxlbWVudEZ1bmN0aW9uICYmIFwicHJvamVjdFwiIGluIGVsZW1lbnRGdW5jdGlvbikge1xuICAgICAgICBwcm9qZWN0b3IgPSBlbGVtZW50RnVuY3Rpb24ucHJvamVjdDtcbiAgICB9XG4gICAgZWxzZSBpZiAob3V0cHV0RnVuY3Rpb24gJiYgXCJwcm9qZWN0XCIgaW4gb3V0cHV0RnVuY3Rpb24pIHtcbiAgICAgICAgcHJvamVjdG9yID0gb3V0cHV0RnVuY3Rpb24ucHJvamVjdDtcbiAgICB9XG4gICAgbGV0IGVxdWFsaXplcjtcbiAgICBpZiAoY29tcGFyZXIgJiYgdHlwZW9mIGNvbXBhcmVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZXF1YWxpemVyID0gSUVxdWFsaXR5Q29tcGFyZXJfMS5leHRyYWN0RXF1YWxpdHlDb21wYXJlcihjb21wYXJlcik7XG4gICAgfVxuICAgIGVsc2UgaWYgKGVsZW1lbnRGdW5jdGlvbiAmJiBcImVxdWFsc1wiIGluIGVsZW1lbnRGdW5jdGlvbikge1xuICAgICAgICBlcXVhbGl6ZXIgPSBlbGVtZW50RnVuY3Rpb24uZXF1YWxzO1xuICAgIH1cbiAgICBlbHNlIGlmIChvdXRwdXRGdW5jdGlvbiAmJiBcImVxdWFsc1wiIGluIG91dHB1dEZ1bmN0aW9uKSB7XG4gICAgICAgIGVxdWFsaXplciA9IG91dHB1dEZ1bmN0aW9uLmVxdWFscztcbiAgICB9XG4gICAgZWxzZSBpZiAoY29tcGFyZXIgJiYgXCJlcXVhbHNcIiBpbiBjb21wYXJlcikge1xuICAgICAgICBlcXVhbGl6ZXIgPSBjb21wYXJlci5lcXVhbHM7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF9ncm91cEJ5KGRhdGEpIHtcbiAgICAgICAgLy8gRXZlbiB0aG91Z2ggdGhpcyBpcyByZXR1cm5pbmcgYXMgaWYgaXQncyBkZWZlcnJlZCBleGVjdXRpb24sIGl0J3Mgbm90IHJlYWxseSBkZWZlcnJlZC4gSXQgaGFzIHRvIHByb2Nlc3MgdGhlIGZ1bGwgbGlzdFxuICAgICAgICAvLyB0byBrbm93IHdoYXQgdGltZXMgZWFjaCBpbmRpdmlkdWFsIGtleSBhcHBlYXJzLlxuICAgICAgICBjb25zdCBjYWNoZSA9IG5ldyBNYXAoKTtcbiAgICAgICAgZm9yIChjb25zdCByb3cgb2YgZGF0YSkge1xuICAgICAgICAgICAgY29uc3QgZXh0cmFjdGVkS2V5ID0gZ3JvdXBGdW5jdGlvbihyb3cpO1xuICAgICAgICAgICAgbGV0IG1hdGNoO1xuICAgICAgICAgICAgaWYgKGVxdWFsaXplcikge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaW5uZXJJdGVtIG9mIGNhY2hlLmtleXMoKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXF1YWxpemVyKGlubmVySXRlbSwgZXh0cmFjdGVkS2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSBjYWNoZS5nZXQoaW5uZXJJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbWF0Y2ggPSBjYWNoZS5nZXQoZXh0cmFjdGVkS2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgICAgIG1hdGNoLmFkZChyb3cpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FjaGUuc2V0KGV4dHJhY3RlZEtleSwgbmV3IEdyb3VwaW5nXzEuR3JvdXBpbmcoZXh0cmFjdGVkS2V5LCByb3csIGVsZW1lbnRvcikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3Qgcm93IG9mIGNhY2hlLmVudHJpZXMoKSkge1xuICAgICAgICAgICAgaWYgKHByb2plY3Rvcikge1xuICAgICAgICAgICAgICAgIHlpZWxkIHByb2plY3Rvcihyb3dbMF0sIHJvd1sxXS52YWx1ZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZWxlbWVudG9yKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgcm93WzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgeWllbGQgcm93WzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLmdyb3VwQnkgPSBncm91cEJ5O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBSZXN0YXJ0YWJsZUdlbmVyYXRvcl8xID0gcmVxdWlyZShcIi4uL0dlbmVyYXRvcnMvUmVzdGFydGFibGVHZW5lcmF0b3JcIik7XG5jb25zdCBHcm91cGluZ18xID0gcmVxdWlyZShcIi4uL1R5cGVzL0dyb3VwaW5nXCIpO1xuY29uc3QgSUVxdWFsaXR5Q29tcGFyZXJfMSA9IHJlcXVpcmUoXCIuLi9UeXBlcy9JRXF1YWxpdHlDb21wYXJlclwiKTtcbi8qKlxuICogZ3JvdXBKb2luX3FfOiBDb3JyZWxhdGVzIHRoZSBlbGVtZW50cyBvZiB0d28gc2VxdWVuY2VzIGJhc2VkIG9uIGtleSBlcXVhbGl0eSBhbmQgZ3JvdXBzIHRoZSByZXN1bHRzLlxuICpcbiAqIFRoaXMgaXMgYSBzb3J0IG9mIGEgY29tYmluYXRpb24gb2Ygb3V0ZXIgam9pbiBhbmQgaGFsZiBhIGdyb3VwIGJ5IChvbmx5IHRoZSBzZWNvbmQgc2VxdWVuY2UgaXMgZ3JvdXBlZCkuXG4gKiBUaGUgb3V0cHV0IGZ1bmN0aW9uLCB3aGljaCBkZXRlcm1pbmVzIHRoZSBvdXRwdXQsIGlzIHJlcXVpcmVkLiBUaGlzIGRvZXNuJ3Qgc2VlbSB1c2VmdWwgZW5vdWdoIGZvciBtZSB0byBjb21lIHVwIHdpdGggYSBkZWZhdWx0IG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gZ3JvdXBKb2luKHNlY29uZCwgZmlyc3RLZXlTZWxlY3Rvciwgc2Vjb25kS2V5U2VsZWN0b3IsIG91dHB1dEZ1bmN0aW9uLCBjb21wYXJlcikge1xuICAgIGlmICghc2Vjb25kIHx8ICFmaXJzdEtleVNlbGVjdG9yIHx8ICFzZWNvbmRLZXlTZWxlY3RvciB8fCAhb3V0cHV0RnVuY3Rpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgY29uc3QgY29tcGFyZSA9IElFcXVhbGl0eUNvbXBhcmVyXzEuZXh0cmFjdEVxdWFsaXR5Q29tcGFyZXIoY29tcGFyZXIpO1xuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF9ncm91cEpvaW4oZGF0YSkge1xuICAgICAgICAvLyBXZSBuZWVkIHRoZSBhYmlsaXR5IHRvIGNoZWNrIHRoZSByaWdodCBzaWRlIGFnYWluc3QgZXZlcnkgbGVmdCBzaWRlLiBcbiAgICAgICAgLy8gSWYgaXQgaXMgYSBnZW5lcmF0b3IsIGl0IGNhbid0IGJlIHJlc3RhcnRlZCB0byBhbGxvdyB0aGF0LlxuICAgICAgICBjb25zdCByaWdodEdlbiA9IG5ldyBSZXN0YXJ0YWJsZUdlbmVyYXRvcl8xLlJlc3RhcnRhYmxlR2VuZXJhdG9yKHNlY29uZCk7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gW107XG4gICAgICAgIGZvciAoY29uc3QgbGVmdEl0ZW0gb2YgZGF0YSkge1xuICAgICAgICAgICAgbGV0IGdyb3VwaW5nO1xuICAgICAgICAgICAgZm9yIChjb25zdCByaWdodEl0ZW0gb2YgcmlnaHRHZW4pIHtcbiAgICAgICAgICAgICAgICBsZXQgbWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBjb25zdCBsZWZ0S2V5ID0gZmlyc3RLZXlTZWxlY3RvcihsZWZ0SXRlbSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmlnaHRLZXkgPSBzZWNvbmRLZXlTZWxlY3RvcihyaWdodEl0ZW0pO1xuICAgICAgICAgICAgICAgIGlmIChjb21wYXJlKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoID0gY29tcGFyZShsZWZ0S2V5LCByaWdodEtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IGxlZnRLZXkgPT09IHJpZ2h0S2V5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdyb3VwaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cGluZy5hZGQocmlnaHRJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwaW5nID0gbmV3IEdyb3VwaW5nXzEuR3JvdXBpbmcobGVmdEtleSwgcmlnaHRJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChncm91cGluZykge1xuICAgICAgICAgICAgICAgIHlpZWxkIG91dHB1dEZ1bmN0aW9uKGxlZnRJdGVtLCBncm91cGluZy52YWx1ZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgeWllbGQgb3V0cHV0RnVuY3Rpb24obGVmdEl0ZW0sIFtdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJpZ2h0R2VuLnJlc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5ncm91cEpvaW4gPSBncm91cEpvaW47XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFJlc3RhcnRhYmxlR2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi4vR2VuZXJhdG9ycy9SZXN0YXJ0YWJsZUdlbmVyYXRvclwiKTtcbi8qKlxuICogaW5uZXJKb2luX3FfOiBBIGZyaWVuZGx5IGhlbHBlciB0byBjcmVhdGUgYSBzaW1wbGUgaW5uZXIgam9pbi4gVGhpcyBjb21iaW5lcyB0aGUgdHdvIGtleSBsb29rdXBzIGFuZCB0aGUgY3VzdG9tIGVxdWFsaXR5IGNvbXBhcmVyIGludG8gYVxuICogc2luZ2xlIGZ1bmN0aW9uIGlucHV0LiBGb3IgbW9zdCBwcm9ncmFtbWVycywgdGhpcyBpcyBhbGwgdGhlIGNvbXBsZXhpdHkgeW91J2xsIG5lZWQuXG4gKi9cbmZ1bmN0aW9uIGlubmVySm9pbihzZWNvbmQsIG9uLCBzZWxlY3RGdW5jdGlvbikge1xuICAgIGlmICghc2Vjb25kIHx8ICFvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICBsZXQgb3V0cHV0O1xuICAgIGlmIChzZWxlY3RGdW5jdGlvbikge1xuICAgICAgICBvdXRwdXQgPSBzZWxlY3RGdW5jdGlvbjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIElmIHNlbGVjdEZ1bmN0aW9uIGlzIG1pc3NpbmcsIFRSZXN1bHQgaXMgW1QsIFRTZWNvbmRdLiBDYW4ndCBtYWtlIFR5cGVTY3JpcHQgdW5kZXJzdGFuZCB0aGF0LCB0aG91Z2guXG4gICAgICAgIG91dHB1dCA9ICgobCwgcikgPT4gW2wsIHJdKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX2lubmVySm9pbihkYXRhKSB7XG4gICAgICAgIC8vIFNpbXBsZSBuZXN0ZWQgbG9vcHMgam9pblxuICAgICAgICAvLyBJZiB0aGlzIHdlcmUgU1FMIHNlcnZlciwgc29tZSBhbmFseXNpcyBhbmQgcHJlLWZpbHRlcmluZyBjb3VsZCBiZSBkb25lIGJlZm9yZSBjb21wYXJpc29uLlxuICAgICAgICAvLyBUaGlzIGlzbid0IFNRTCBTZXJ2ZXIuIFdlIGNhbid0IGV2ZW4gZmlsdGVyIG91dCBOVUxMcywgYmVjYXVzZSB3aGF0IGlmIHRoZSBqb2luIGZ1bmN0aW9uIHNheXMgXCJsZWZ0ID09IG51bGwgJiYgcmlnaHQgPT0gbnVsbFwiLCBsaWtlIHNvbWUgbGlucSB0byBlbnRpdHkgcXVlcmllcyBkbz9cbiAgICAgICAgLy8gVGhlIHJpZ2h0IHNpZGUgY2FuIHRoZW9yZXRpY2FsbHkgYmUgYSBnZW5lcmF0b3IuIFdlIGRvbid0IGtub3csIGJ1dCB3ZSBoYXZlIHRvIHRha2UgdGhhdCBjaGFuY2UuXG4gICAgICAgIC8vIEpTIGRvZXNuJ3QgZ2l2ZSBhIHdheSB0byByZXN0YXJ0IGEgZ2VuZXJhdG9yLCBzbyB3ZSBjYW4gb25seSBjaGVjayByaWdodCBvbmNlIHdpdGhvdXQgc29tZSBleHRyYSBCUyB0byBhbGxvdyBpdCB0byByZXN0YXJ0XG4gICAgICAgIGNvbnN0IHJpZ2h0R2VuID0gbmV3IFJlc3RhcnRhYmxlR2VuZXJhdG9yXzEuUmVzdGFydGFibGVHZW5lcmF0b3Ioc2Vjb25kKTtcbiAgICAgICAgZm9yIChjb25zdCBsZWZ0SXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJpZ2h0SXRlbSBvZiByaWdodEdlbikge1xuICAgICAgICAgICAgICAgIGlmIChvbihsZWZ0SXRlbSwgcmlnaHRJdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBvdXRwdXQobGVmdEl0ZW0sIHJpZ2h0SXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmlnaHRHZW4ucmVzdGFydCgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLmlubmVySm9pbiA9IGlubmVySm9pbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgSUVxdWFsaXR5Q29tcGFyZXJfMSA9IHJlcXVpcmUoXCIuLi9UeXBlcy9JRXF1YWxpdHlDb21wYXJlclwiKTtcbi8qKlxuICogaW50ZXJzZWN0X3FfOiBQcm9kdWNlcyB0aGUgc2V0IGludGVyc2VjdGlvbiBvZiB0d28gc2VxdWVuY2VzLlxuICogb3B0aW9uYWwgZXF1YWxpdHkgY29tcGFyZXIgY2FuIGJlIHByb3ZpZGVkXG4gKi9cbmZ1bmN0aW9uIGludGVyc2VjdChzZWNvbmQsIGNvbXBhcmVyKSB7XG4gICAgaWYgKCFzZWNvbmQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgY29uc3QgY29tcGFyZSA9IElFcXVhbGl0eUNvbXBhcmVyXzEuZXh0cmFjdEVxdWFsaXR5Q29tcGFyZXIoY29tcGFyZXIpO1xuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF9pbnRlcnNlY3QoZGF0YSkge1xuICAgICAgICBjb25zdCBzZWNvbmRTZXQgPSBuZXcgU2V0KCk7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBzZWNvbmQpIHtcbiAgICAgICAgICAgIHNlY29uZFNldC5hZGQoaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTm8gd2F5IGFyb3VuZCB0aGlzLCBidXQgd2UgbmVlZCB0byBrZWVwIGEgaGlzdG9yeSBvZiBldmVyeSBpdGVtIHJldHVybmVkLiBCb3RoIHRoZSBmaXJzdCBhbmQgc2Vjb25kIGxpc3RzLlxuICAgICAgICBjb25zdCBoaXN0b3J5ID0gbmV3IFNldCgpO1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xuICAgICAgICAgICAgaWYgKGNvbXBhcmUpIHtcbiAgICAgICAgICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGlubmVySXRlbSBvZiBzZWNvbmRTZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBhcmUoaXRlbSwgaW5uZXJJdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSXQncyBpbiBib3RoIHNldHMuLi5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGlubmVySXRlbSBvZiBoaXN0b3J5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGFyZShpdGVtLCBpbm5lckl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQnV0IGlmIGl0J3MgYmVlbiBzZW50IGFscmVhZHksIGRvbid0IHNlbmQgaXQgYWdhaW4uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBJZiBmb3VuZCwgdHJhY2sgYW5kIHNlbmQgaXRcbiAgICAgICAgICAgICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5hZGQoaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlY29uZFNldC5oYXMoaXRlbSkgJiZcbiAgICAgICAgICAgICAgICAgICAgIWhpc3RvcnkuaGFzKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpc3RvcnkuYWRkKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5pbnRlcnNlY3QgPSBpbnRlcnNlY3Q7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IElFcXVhbGl0eUNvbXBhcmVyXzEgPSByZXF1aXJlKFwiLi4vVHlwZXMvSUVxdWFsaXR5Q29tcGFyZXJcIik7XG4vKipcbiAqIGludGVyc2VjdEJ5X3FfOiBQcm9kdWNlcyB0aGUgc2V0IGludGVyc2VjdGlvbiBvZiB0d28gc2VxdWVuY2VzIGJhc2VkIG9uIGtleXMgcmV0dXJuZWQgYnkgYSBrZXkgc2VsZWN0b3IgZnVuY3Rpb24uXG4gKiBvcHRpb25hbCBlcXVhbGl0eSBjb21wYXJlciBjYW4gYmUgcHJvdmlkZWRcbiAqL1xuZnVuY3Rpb24gaW50ZXJzZWN0Qnkoc2Vjb25kLCBrZXlTZWxlY3RvciwgY29tcGFyZXIpIHtcbiAgICBpZiAoIXNlY29uZCB8fCAha2V5U2VsZWN0b3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgY29uc3QgY29tcGFyZSA9IElFcXVhbGl0eUNvbXBhcmVyXzEuZXh0cmFjdEVxdWFsaXR5Q29tcGFyZXIoY29tcGFyZXIpO1xuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF9pbnRlcnNlY3RCeShkYXRhKSB7XG4gICAgICAgIGNvbnN0IHNlY29uZFNldCA9IG5ldyBTZXQoKTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHNlY29uZCkge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0ga2V5U2VsZWN0b3IoaXRlbSk7XG4gICAgICAgICAgICBzZWNvbmRTZXQuYWRkKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTm8gd2F5IGFyb3VuZCB0aGlzLCBidXQgd2UgbmVlZCB0byBrZWVwIGEgaGlzdG9yeSBvZiBldmVyeSBpdGVtIHJldHVybmVkLiBCb3RoIHRoZSBmaXJzdCBhbmQgc2Vjb25kIGxpc3RzLlxuICAgICAgICBjb25zdCBoaXN0b3J5ID0gbmV3IFNldCgpO1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0ga2V5U2VsZWN0b3IoaXRlbSk7XG4gICAgICAgICAgICBpZiAoY29tcGFyZSkge1xuICAgICAgICAgICAgICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaW5uZXJJdGVtIG9mIHNlY29uZFNldCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGFyZShrZXksIGlubmVySXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEl0J3MgaW4gYm90aCBzZXRzLi4uXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBpbm5lckl0ZW0gb2YgaGlzdG9yeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBhcmUoa2V5LCBpbm5lckl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQnV0IGlmIGl0J3MgYmVlbiBzZW50IGFscmVhZHksIGRvbid0IHNlbmQgaXQgYWdhaW4uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBJZiBmb3VuZCwgdHJhY2sgYW5kIHNlbmQgaXRcbiAgICAgICAgICAgICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5hZGQoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoc2Vjb25kU2V0LmhhcyhrZXkpICYmXG4gICAgICAgICAgICAgICAgICAgICFoaXN0b3J5LmhhcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpc3RvcnkuYWRkKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLmludGVyc2VjdEJ5ID0gaW50ZXJzZWN0Qnk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFJlc3RhcnRhYmxlR2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi4vR2VuZXJhdG9ycy9SZXN0YXJ0YWJsZUdlbmVyYXRvclwiKTtcbi8qKlxuICogam9pbl9xXzogQ29ycmVsYXRlcyB0aGUgZWxlbWVudHMgb2YgdHdvIHNlcXVlbmNlcyBiYXNlZCBvbiBtYXRjaGluZyBrZXlzLiBPbmx5IHJlY29yZHMgYXJlIHJldHVybmVkIHdoZW4gYm90aCBzaWRlcyBtYXRjaC5cbiAqIG9wdGlvbmFsIGVxdWFsaXR5IGNvbXBhcmVyIGNhbiBiZSB1c2VkIHRvIGNvbXBhcmUga2V5cy5cbiAqXG4gKiBJZiB0aGUgb3V0cHV0IHNlbGVjdG9yIGlzIGxlZnQgb3V0LCByZXN1bHRzIGFyZSByZXR1cm5lZCBhcyBbZmlyc3Qgcm93LCBzZWNvbmQgcm93XS4gVGhpcyBpcyBhIGNoYW5nZSBmcm9tIEMjLCB3aGljaCByZXF1aXJlcyB0aGUgb3V0cHV0IHNlbGVjdG9yLlxuICpcbiAqIExlYXZpbmcgdGhlIG91dHB1dCBzZWxlY3RvciBvdXQgcmVxdWlyZXMgcGFzc2luZyBjb21wYXJlciBpbiBhcyB7IGVxdWFsczogY29tcGFyZXIgfSBpZiB5b3Ugd2FudCB0byB1c2UgaXQuIFNlZSB0aGUgbG9uZyBkaXNjdXNzaW9uXG4gKiBpbiBHcm91cEJ5IGZvciBkZXRhaWxzLlxuICovXG5mdW5jdGlvbiBqb2luKHNlY29uZCwgZmlyc3RLZXlTZWxlY3Rvciwgc2Vjb25kS2V5U2VsZWN0b3IsIG91dHB1dEZ1bmN0aW9uLCBjb21wYXJlcikge1xuICAgIGlmICghc2Vjb25kIHx8ICFmaXJzdEtleVNlbGVjdG9yIHx8ICFzZWNvbmRLZXlTZWxlY3Rvcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICBsZXQgb3V0cHV0O1xuICAgIGxldCBlcXVhbGl6ZXI7XG4gICAgaWYgKGNvbXBhcmVyICYmIHR5cGVvZiBjb21wYXJlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGVxdWFsaXplciA9IGNvbXBhcmVyO1xuICAgIH1cbiAgICBlbHNlIGlmIChjb21wYXJlciAmJiBcImVxdWFsc1wiIGluIGNvbXBhcmVyKSB7XG4gICAgICAgIGVxdWFsaXplciA9IGNvbXBhcmVyLmVxdWFscztcbiAgICB9XG4gICAgZWxzZSBpZiAob3V0cHV0RnVuY3Rpb24gJiYgXCJlcXVhbHNcIiBpbiBvdXRwdXRGdW5jdGlvbikge1xuICAgICAgICBlcXVhbGl6ZXIgPSBvdXRwdXRGdW5jdGlvbi5lcXVhbHM7XG4gICAgfVxuICAgIGlmIChvdXRwdXRGdW5jdGlvbiAmJiB0eXBlb2Ygb3V0cHV0RnVuY3Rpb24gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBvdXRwdXQgPSBvdXRwdXRGdW5jdGlvbjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIElmIG91dHB1dEZ1bmN0aW9uIGlzIG1pc3NpbmcsIFRSZXN1bHQgaXMgW1QsIFRTZWNvbmRdLiBDYW4ndCBtYWtlIFR5cGVTY3JpcHQgdW5kZXJzdGFuZCB0aGF0LCB0aG91Z2guXG4gICAgICAgIG91dHB1dCA9ICgobCwgcikgPT4gW2wsIHJdKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX2pvaW4oZGF0YSkge1xuICAgICAgICAvLyBTaW1wbGUgbmVzdGVkIGxvb3BzIGpvaW5cbiAgICAgICAgLy8gSWYgdGhpcyB3ZXJlIFNRTCBzZXJ2ZXIsIHNvbWUgc3RhdGlzdGljcyBhbmQgaW5kZXggYW5hbHlzaXMgYW5kIHByZS1maWx0ZXJpbmcgY291bGQgYmUgZG9uZSBiZWZvcmUgY29tcGFyaXNvbi5cbiAgICAgICAgLy8gVGhpcyBpc24ndCBTUUwgU2VydmVyLiBXZSBjYW4ndCBldmVuIGZpbHRlciBvdXQgTlVMTHMsIGJlY2F1c2Ugd2hhdCBpZiB0aGUgam9pbiBmdW5jdGlvbiBzYXlzIFwibGVmdCA9PSBudWxsICYmIHJpZ2h0ID09IG51bGxcIiwgbGlrZSBzb21lIGxpbnEgdG8gZW50aXR5IHF1ZXJpZXMgZG8/XG4gICAgICAgIC8vIFdlIG5lZWQgdGhlIGFiaWxpdHkgdG8gY2hlY2sgdGhlIHJpZ2h0IHNpZGUgYWdhaW5zdCBldmVyeSBsZWZ0IHNpZGUuXG4gICAgICAgIC8vIElmIGl0IGlzIGEgZ2VuZXJhdG9yLCBpdCBjYW4ndCBiZSByZXN0YXJ0ZWQgdG8gYWxsb3cgdGhhdC5cbiAgICAgICAgY29uc3QgcmlnaHRHZW4gPSBuZXcgUmVzdGFydGFibGVHZW5lcmF0b3JfMS5SZXN0YXJ0YWJsZUdlbmVyYXRvcihzZWNvbmQpO1xuICAgICAgICBmb3IgKGNvbnN0IGxlZnRJdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcmlnaHRJdGVtIG9mIHJpZ2h0R2VuKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGVmdEtleSA9IGZpcnN0S2V5U2VsZWN0b3IobGVmdEl0ZW0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJpZ2h0S2V5ID0gc2Vjb25kS2V5U2VsZWN0b3IocmlnaHRJdGVtKTtcbiAgICAgICAgICAgICAgICBsZXQgbWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAoZXF1YWxpemVyKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoID0gZXF1YWxpemVyKGxlZnRLZXksIHJpZ2h0S2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoID0gbGVmdEtleSA9PT0gcmlnaHRLZXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBvdXRwdXQobGVmdEl0ZW0sIHJpZ2h0SXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmlnaHRHZW4ucmVzdGFydCgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLmpvaW4gPSBqb2luO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIGxhc3RfcV86IFJldHVybnMgdGhlIGxhc3QgZWxlbWVudCBpbiBhIHNlcXVlbmNlLiBUYWtlcyBhbiBvcHRpb25hbCBmaWx0ZXIgY29uZGl0aW9uLlxuICovXG5mdW5jdGlvbiBsYXN0KG1hdGNoRnVuY3Rpb24pIHtcbiAgICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgICBsZXQgbGFzdEl0ZW07XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgaWYgKCFtYXRjaEZ1bmN0aW9uKSB7XG4gICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICBsYXN0SXRlbSA9IGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobWF0Y2hGdW5jdGlvbihpdGVtKSkge1xuICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgbGFzdEl0ZW0gPSBpdGVtO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChmb3VuZCkge1xuICAgICAgICAvLyBDYW4ndCBjaGVjayBpZiBsYXN0SXRlbSBpcyBub3QgdW5kZWZpbmVkLCBiZWNhdXNlIHRoZSBsYXN0IGl0ZW0gY291bGQgYWN0dWFsbHkgYmUgXCJ1bmRlZmluZWRcIi5cbiAgICAgICAgLy8gVHlwZVNjcmlwdCBjYW4ndCB0ZWxsIHRoYXQgZXZlcnkgcGxhY2UgZm91bmQgd2FzIHRydWUsIGxhc3RJdGVtIHdhcyBhbHNvIHNldDtcbiAgICAgICAgcmV0dXJuIGxhc3RJdGVtO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJTZXF1ZW5jZSBoYXMgbm8gZWxlbWVudHMuXCIpO1xufVxuZXhwb3J0cy5sYXN0ID0gbGFzdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBsYXN0T3JEZWZhdWx0X3FfOiBSZXR1cm5zIHRoZSBsYXN0IGVsZW1lbnQgaW4gYSBzZXF1ZW5jZSwgdGFraW5nIGFuIG9wdGlvbmFsIGZpbHRlciBjb25kaXRpb24uXG4gKiBJZiB0aGUgZmlsdGVyZWQgc2VxdWVuY2UgaXMgZW1wdHksIGl0IHJldHVybnMgdGhlIGRlZmF1bHQgdmFsdWUuXG4gKiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBwcm92aWRlZCBieSBhIHBhcmFtZXRlciBvciBpcyB1bmRlZmluZWQuXG4gKlxuICogKE5vdGUgdGhhdCBpbiBKYXZhU2NyaXB0LCB1bmxpa2UgQyMsIHRoZXJlJ3Mgbm8gd2F5IHRvIGtub3cgd2hhdCB0eXBlIGEgc2VxdWVuY2UgaXMgc3VwcG9zZWQgdG8gaGF2ZSwgZXNwZWNpYWxseSBub3QgYW4gZW1wdHkgc2VxdWVuY2UuKVxuICpcbiAqIEluIEphdmFTY3JpcHQsIGlmIHlvdSBjYWxsIHRoZSBtZXRob2Qgd2l0aCBhIHNpbmdsZSBwYXJhbWV0ZXIgYW5kIHdhbnQgaXQgdG8gYmUgdGhlIGRlZmF1bHQsIHRoZXJlJ3Mgbm8gY2xlYW4gd2F5IHRvIGluZGljYXRlIHRoYXQgdGhpc1xuICogaXMgd2hhdCB5b3Ugd2FudCwgYmVjYXVzZSBpdCBicmVha3MgdGhlIGNhc2Ugd2hlcmUgeW91IHBhc3MgYSBmaWx0ZXIgY29uZGl0aW9uLiBBIHNpbmdsZSBwcmVkaWNhdGUgY291bGQgYmUgYSBmaWx0ZXIgY29uZGl0aW9uIG9yIGl0XG4gKiBjb3VsZCBiZSB0aGUgZGVmYXVsdCBmb3IgYW4gYXJyYXkgb2YgcHJlZGljYXRlcyAuLi4geW91IGRvbid0IGtub3cuIFRoZXJlZm9yZSwgaWYgeW91IHdhbnQgdG8gcGFzcyBvbmx5IGEgZGVmYXVsdCB2YWx1ZSwgY2FsbCBsaWtlXG4gKiB0aGlzOiBmaXJzdE9yRGVmYXVsdF9xXyh7IGRlZmF1bHRWYWx1ZTogXCJOT1QgRk9VTkRcIiB9KVxuICovXG5mdW5jdGlvbiBsYXN0T3JEZWZhdWx0KG1hdGNoRnVuY3Rpb24sIGRlZmF1bHRWYWx1ZSkge1xuICAgIGxldCB0ZXN0ZXI7XG4gICAgaWYgKG1hdGNoRnVuY3Rpb24gJiYgdHlwZW9mIG1hdGNoRnVuY3Rpb24gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB0ZXN0ZXIgPSBtYXRjaEZ1bmN0aW9uO1xuICAgIH1cbiAgICBsZXQgZGVmO1xuICAgIGlmIChtYXRjaEZ1bmN0aW9uICYmIFwiZGVmYXVsdFZhbHVlXCIgaW4gbWF0Y2hGdW5jdGlvbikge1xuICAgICAgICBkZWYgPSBtYXRjaEZ1bmN0aW9uLmRlZmF1bHRWYWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGRlZiA9IGRlZmF1bHRWYWx1ZTtcbiAgICB9XG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgbGV0IGxhc3RJdGVtO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzKSB7XG4gICAgICAgIGlmICghdGVzdGVyKSB7XG4gICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICBsYXN0SXRlbSA9IGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGVzdGVyKGl0ZW0pKSB7XG4gICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICBsYXN0SXRlbSA9IGl0ZW07XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICAgIC8vIENhbid0IGNoZWNrIGlmIGxhc3RJdGVtIGlzIG5vdCB1bmRlZmluZWQsIGJlY2F1c2UgdGhlIGxhc3QgaXRlbSBjb3VsZCBhY3R1YWxseSBiZSBcInVuZGVmaW5lZFwiLlxuICAgICAgICAvLyBUeXBlU2NyaXB0IGNhbid0IHRlbGwgdGhhdCBldmVyeSBwbGFjZSBmb3VuZCB3YXMgdHJ1ZSwgbGFzdEl0ZW0gd2FzIGFsc28gc2V0O1xuICAgICAgICByZXR1cm4gbGFzdEl0ZW07XG4gICAgfVxuICAgIHJldHVybiBkZWY7XG59XG5leHBvcnRzLmxhc3RPckRlZmF1bHQgPSBsYXN0T3JEZWZhdWx0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBSZXN0YXJ0YWJsZUdlbmVyYXRvcl8xID0gcmVxdWlyZShcIi4uL0dlbmVyYXRvcnMvUmVzdGFydGFibGVHZW5lcmF0b3JcIik7XG4vKipcbiAqIGxlZnRKb2luX3FfOiBBIGZyaWVuZGx5IGhlbHBlciB0byBjcmVhdGUgYSBzaW1wbGUgbGVmdCBvdXRlciBqb2luLiBUaGlzIGZvbGxvd3MgdGhlIHBhdHRlcm4gb2YgaW5uZXJKb2luX3FfKCksIHdoaWNoIGNvbWJpbmVzIHRoZSB0d29cbiAqIGtleSBsb29rdXBzIGFuZCBlcXVhbGl0eSBjb21wYXJlciBpbnRvIGEgc2luZ2xlIGZ1bmN0aW9uIGlucHV0LlxuICovXG5mdW5jdGlvbiBsZWZ0Sm9pbihzZWNvbmQsIG9uLCBzZWxlY3RGdW5jdGlvbikge1xuICAgIGlmICghc2Vjb25kIHx8ICFvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICBsZXQgb3V0cHV0O1xuICAgIGlmIChzZWxlY3RGdW5jdGlvbikge1xuICAgICAgICBvdXRwdXQgPSBzZWxlY3RGdW5jdGlvbjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIElmIHNlbGVjdEZ1bmN0aW9uIGlzIG1pc3NpbmcsIFRSZXN1bHQgaXMgW1QsIFRTZWNvbmRdLiBDYW4ndCBtYWtlIFR5cGVTY3JpcHQgdW5kZXJzdGFuZCB0aGF0LCB0aG91Z2guXG4gICAgICAgIG91dHB1dCA9ICgobCwgcikgPT4gW2wsIHJdKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX2xlZnRKb2luKGRhdGEpIHtcbiAgICAgICAgLy8gU2ltcGxlIG5lc3RlZCBsb29wcyBqb2luXG4gICAgICAgIC8vIElmIHRoaXMgd2VyZSBTUUwgc2VydmVyLCBzb21lIGFuYWx5c2lzIGFuZCBwcmUtZmlsdGVyaW5nIGNvdWxkIGJlIGRvbmUgYmVmb3JlIGNvbXBhcmlzb24uXG4gICAgICAgIC8vIFRoaXMgaXNuJ3QgU1FMIFNlcnZlci4gV2UgY2FuJ3QgZXZlbiBmaWx0ZXIgb3V0IE5VTExzLCBiZWNhdXNlIHdoYXQgaWYgdGhlIGpvaW4gZnVuY3Rpb24gc2F5cyBcImxlZnQgPT0gbnVsbCAmJiByaWdodCA9PSBudWxsXCIsIGxpa2Ugc29tZSBsaW5xIHRvIGVudGl0eSBxdWVyaWVzIGRvP1xuICAgICAgICAvLyBXZSBuZWVkIHRoZSBhYmlsaXR5IHRvIGNoZWNrIHRoZSByaWdodCBzaWRlIGFnYWluc3QgZXZlcnkgbGVmdCBzaWRlLlxuICAgICAgICAvLyBJZiBpdCBpcyBhIGdlbmVyYXRvciwgaXQgY2FuJ3QgYmUgcmVzdGFydGVkIHRvIGFsbG93IHRoYXQuXG4gICAgICAgIGNvbnN0IHJpZ2h0R2VuID0gbmV3IFJlc3RhcnRhYmxlR2VuZXJhdG9yXzEuUmVzdGFydGFibGVHZW5lcmF0b3Ioc2Vjb25kKTtcbiAgICAgICAgZm9yIChjb25zdCBsZWZ0SXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICBsZXQgbGVmdE1hdGNoZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcmlnaHRJdGVtIG9mIHJpZ2h0R2VuKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9uKGxlZnRJdGVtLCByaWdodEl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnRNYXRjaGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgb3V0cHV0KGxlZnRJdGVtLCByaWdodEl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbGVmdE1hdGNoZWQpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBvdXRwdXQobGVmdEl0ZW0sIHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByaWdodEdlbi5yZXN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMubGVmdEpvaW4gPSBsZWZ0Sm9pbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gbG9uZ0NvdW50KGNvbmRpdGlvbikge1xuICAgIGxldCBjdHIgPSBCaWdJbnQoMCk7XG4gICAgY29uc3Qgb25lID0gQmlnSW50KDEpO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzKSB7XG4gICAgICAgIGlmIChjb25kaXRpb24pIHtcbiAgICAgICAgICAgIGlmIChjb25kaXRpb24oaXRlbSkpIHtcbiAgICAgICAgICAgICAgICBjdHIgPSBjdHIgKyBvbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjdHIgPSBjdHIgKyBvbmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGN0cjtcbn1cbmV4cG9ydHMubG9uZ0NvdW50ID0gbG9uZ0NvdW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBJQ29tcGFyZXJfMSA9IHJlcXVpcmUoXCIuLy4uL1R5cGVzL0lDb21wYXJlclwiKTtcbi8qKlxuICogbWF4X3FfOiBSZXR1cm5zIHRoZSBtYXhpbXVtIHZhbHVlIGluIGEgc2VxdWVuY2UuXG4gKiBUYWtlcyBhbiBvcHRpb25hbCB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbi4gSWYgc3VwcGxpZWQsIHRoaXMgdHJhbnNmb3JtYXRpb24gaXMgYXBwbGllZCB0byBhbGwgdmFsdWVzIGFuZCB0aGUgbWF4IHJlc3VsdCByZXR1cm5lZC5cbiAqXG4gKiBUYWtlcyBhbiBvcHRpb25hbCBjb21wYXJlciwgYSBmdW5jdGlvbiB0aGF0IHRha2VzIHR3byBpbnB1dHMgYW5kIHJldHVybnMgMSBpZiB0aGUgZmlyc3QgaXMgaGlnaGVyLCAtMSBpcyB0aGUgc2Vjb25kIGlzIGhpZ2hlcixcbiAqIGVsc2UgMC5cbiAqIElmIHlvdSB3YW50IHRvIHNlbmQgb25seSB0aGUgY29tcGFyZXIgaW4gdGhlIGZpcnN0IHBhcmFtZXRlciwgaXQgbXVzdCBiZSBlbmNsb3NlZCBpbiBhbiBvYmplY3QgbGlrZSBzbzogeyBjb21wYXJlOiBteUNvbXBhcmVyRnVuY3Rpb24gfVxuICovXG5mdW5jdGlvbiBtYXgodHJhbnNmb3JtLCBjb21wYXJlcikge1xuICAgIGxldCBjb21wYXJlO1xuICAgIGlmIChjb21wYXJlcikge1xuICAgICAgICBjb21wYXJlID0gSUNvbXBhcmVyXzEuZXh0cmFjdENvbXBhcmVyKGNvbXBhcmVyKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHJhbnNmb3JtICYmIFwiY29tcGFyZVwiIGluIHRyYW5zZm9ybSkge1xuICAgICAgICBjb21wYXJlID0gdHJhbnNmb3JtLmNvbXBhcmU7XG4gICAgfVxuICAgIGxldCB4Zm9ybTtcbiAgICBpZiAodHJhbnNmb3JtICYmIHR5cGVvZiB0cmFuc2Zvcm0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB4Zm9ybSA9IHRyYW5zZm9ybTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIFR5cGVzY3JpcHQgZG9lc24ndCBrbm93IHRoYXQgVCA9IFRSZXN1bHQgaW4gdGhpcyBjYXNlXG4gICAgICAgIHhmb3JtID0gKHZhbCkgPT4gdmFsO1xuICAgIH1cbiAgICBsZXQgZmlyc3QgPSBmYWxzZTtcbiAgICBsZXQgbWF4dmFsO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSB4Zm9ybShpdGVtKTtcbiAgICAgICAgaWYgKCFmaXJzdCkge1xuICAgICAgICAgICAgbWF4dmFsID0gY3VycmVudDtcbiAgICAgICAgICAgIGZpcnN0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb21wYXJlKSB7XG4gICAgICAgICAgICBpZiAoY29tcGFyZShjdXJyZW50LCBtYXh2YWwpID4gMCkge1xuICAgICAgICAgICAgICAgIG1heHZhbCA9IGN1cnJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudCA+IG1heHZhbCkge1xuICAgICAgICAgICAgICAgIG1heHZhbCA9IGN1cnJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFmaXJzdCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTZXF1ZW5jZSBjb250YWlucyBubyBlbGVtZW50c1wiKTtcbiAgICB9XG4gICAgcmV0dXJuIG1heHZhbDtcbn1cbmV4cG9ydHMubWF4ID0gbWF4O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBJQ29tcGFyZXJfMSA9IHJlcXVpcmUoXCIuLy4uL1R5cGVzL0lDb21wYXJlclwiKTtcbi8qKlxuICogbWF4QnlfcV86IFJldHVybnMgdGhlIG1heGltdW0gdmFsdWUgaW4gYSBzZXF1ZW5jZSB1c2luZyBhIGtleSBzZWxlY3RvciBmdW5jdGlvbi5cbiAqIFRha2VzIGFuIG9wdGlvbmFsIGNvbXBhcmVyLCBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgdHdvIGlucHV0cyBhbmQgcmV0dXJucyAxIGlmIHRoZSBmaXJzdCBpcyBoaWdoZXIsIC0xIGlzIHRoZSBzZWNvbmQgaXMgaGlnaGVyLFxuICogZWxzZSAwLlxuICpcbiAqIFRoZSBkaWZmZXJlbmNlIGJldHdlZW4gTWF4QnkgYW5kIE1heCB3aXRoIGEgdHJhbnNmb3JtYXRpb24gZnVuY3Rpb24gaXMgdGhhdCBNYXggcmV0dXJucyB0aGUgb3V0cHV0IG9mIHRoZSB0cmFuc2Zvcm1hdGlvbiB3aGlsZSBNYXhCeVxuICogcmV0dXJucyB0aGUgb3JpZ2luYWwgdmFsdWUuIFRoaXMgc2FtZSByZXN1bHQgY291bGQgYmUgYWNoaWV2ZWQgd2l0aCBNYXggYW5kIGEgd2VsbC1kZXNpZ25lZCBjb21wYXJlciBmdW5jdGlvbiwgb2YgY291cnNlLlxuICovXG5mdW5jdGlvbiBtYXhCeShrZXlTZWxlY3RvciwgY29tcGFyZXIpIHtcbiAgICBpZiAoIWtleVNlbGVjdG9yKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIGNvbnN0IGNvbXBhcmUgPSBJQ29tcGFyZXJfMS5leHRyYWN0Q29tcGFyZXIoY29tcGFyZXIpO1xuICAgIGxldCBmaXJzdCA9IGZhbHNlO1xuICAgIGxldCBtYXg7XG4gICAgbGV0IG1heFZhbHVlO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSBrZXlTZWxlY3RvcihpdGVtKTtcbiAgICAgICAgaWYgKCFmaXJzdCkge1xuICAgICAgICAgICAgbWF4ID0gY3VycmVudDtcbiAgICAgICAgICAgIG1heFZhbHVlID0gaXRlbTtcbiAgICAgICAgICAgIGZpcnN0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb21wYXJlKSB7XG4gICAgICAgICAgICBpZiAoY29tcGFyZShjdXJyZW50LCBtYXgpID4gMCkge1xuICAgICAgICAgICAgICAgIG1heCA9IGN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgbWF4VmFsdWUgPSBpdGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnQgPiBtYXgpIHtcbiAgICAgICAgICAgICAgICBtYXggPSBjdXJyZW50O1xuICAgICAgICAgICAgICAgIG1heFZhbHVlID0gaXRlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWZpcnN0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNlcXVlbmNlIGNvbnRhaW5zIG5vIGVsZW1lbnRzXCIpO1xuICAgIH1cbiAgICByZXR1cm4gbWF4VmFsdWU7XG59XG5leHBvcnRzLm1heEJ5ID0gbWF4Qnk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IElDb21wYXJlcl8xID0gcmVxdWlyZShcIi4vLi4vVHlwZXMvSUNvbXBhcmVyXCIpO1xuLyoqXG4gKiBtYXhPckRlZmF1bHRfcV86IFJldHVybnMgdGhlIG1heGltdW0gdmFsdWUgaW4gYSBzZXF1ZW5jZS4gSWYgc2VxdWVuY2UgaXMgZW1wdHksIHJldHVybnMgdGhlIGRlZmF1bHQgdmFsdWUgb3IgdW5kZWZpbmVkLlxuICogVGFrZXMgYW4gb3B0aW9uYWwgdHJhbnNmb3JtYXRpb24gZnVuY3Rpb24uIElmIHN1cHBsaWVkLCB0aGlzIHRyYW5zZm9ybWF0aW9uIGlzIGFwcGxpZWQgdG8gYWxsIHZhbHVlcyBhbmQgdGhlIG1heCByZXN1bHQgcmV0dXJuZWQuXG4gKiBUaGlzIGlzIGEgSk9JTi1zcGVjaWZpYyBtZXRob2QuIFRoZXJlIGlzIG5vIGVxdWl2YWxlbnQgaW4gQyMuXG4gKlxuICogVGFrZXMgYW4gb3B0aW9uYWwgY29tcGFyZXIsIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0d28gaW5wdXRzIGFuZCByZXR1cm5zIDEgaWYgdGhlIGZpcnN0IGlzIGhpZ2hlciwgLTEgaXMgdGhlIHNlY29uZCBpcyBoaWdoZXIsXG4gKiBlbHNlIDAuXG4gKiBJZiB5b3Ugd2FudCB0byBzZW5kIHRoZSBjb21wYXJlciBpbiB0aGUgZmlyc3QgcGFyYW1ldGVyLCBpdCBtdXN0IGJlIGVuY2xvc2VkIGluIGFuIG9iamVjdCBsaWtlIHNvOiB7IGNvbXBhcmU6IG15Q29tcGFyZXJGdW5jdGlvbiB9XG4gKiBJZiB5b3Ugd2FudCB0byBzZW5kIHRoZSBkZWZhdWx0VmFsdWUgaW4gYW55dGhpbmcgYnV0IHRoZSBmaW5hbCB2YWx1ZSwgaXQgbXVzdCBiZSBlbmNsb3NlZCBsaWtlIHNvOiB7IGRlZmF1bHRWYWx1ZSB9XG4gKi9cbmZ1bmN0aW9uIG1heE9yRGVmYXVsdCh0cmFuc2Zvcm0sIGNvbXBhcmVyLCBkZWZhdWx0VmFsdWUpIHtcbiAgICBsZXQgZGVmO1xuICAgIGlmIChkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgZGVmID0gZGVmYXVsdFZhbHVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChjb21wYXJlciAmJiBcImRlZmF1bHRWYWx1ZVwiIGluIGNvbXBhcmVyKSB7XG4gICAgICAgIGRlZiA9IGNvbXBhcmVyLmRlZmF1bHRWYWx1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHJhbnNmb3JtICYmIFwiZGVmYXVsdFZhbHVlXCIgaW4gdHJhbnNmb3JtKSB7XG4gICAgICAgIGRlZiA9IHRyYW5zZm9ybS5kZWZhdWx0VmFsdWU7XG4gICAgfVxuICAgIGxldCBjb21wYXJlO1xuICAgIGlmIChjb21wYXJlciAmJiAhKFwiZGVmYXVsdFZhbHVlXCIgaW4gY29tcGFyZXIpKSB7XG4gICAgICAgIGNvbXBhcmUgPSBJQ29tcGFyZXJfMS5leHRyYWN0Q29tcGFyZXIoY29tcGFyZXIpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0cmFuc2Zvcm0gJiYgXCJjb21wYXJlXCIgaW4gdHJhbnNmb3JtKSB7XG4gICAgICAgIGNvbXBhcmUgPSB0cmFuc2Zvcm0uY29tcGFyZTtcbiAgICB9XG4gICAgbGV0IHhmb3JtO1xuICAgIGlmICh0cmFuc2Zvcm0gJiYgdHlwZW9mIHRyYW5zZm9ybSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHhmb3JtID0gdHJhbnNmb3JtO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gVHlwZXNjcmlwdCBkb2Vzbid0IGtub3cgdGhhdCBUID0gVFJlc3VsdCBpbiB0aGlzIGNhc2VcbiAgICAgICAgeGZvcm0gPSAodmFsKSA9PiB2YWw7XG4gICAgfVxuICAgIGxldCBmaXJzdCA9IGZhbHNlO1xuICAgIGxldCBtYXh2YWw7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IHhmb3JtKGl0ZW0pO1xuICAgICAgICBpZiAoIWZpcnN0KSB7XG4gICAgICAgICAgICBtYXh2YWwgPSBjdXJyZW50O1xuICAgICAgICAgICAgZmlyc3QgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbXBhcmUpIHtcbiAgICAgICAgICAgIGlmIChjb21wYXJlKGN1cnJlbnQsIG1heHZhbCkgPiAwKSB7XG4gICAgICAgICAgICAgICAgbWF4dmFsID0gY3VycmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50ID4gbWF4dmFsKSB7XG4gICAgICAgICAgICAgICAgbWF4dmFsID0gY3VycmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWZpcnN0KSB7XG4gICAgICAgIHJldHVybiBkZWY7XG4gICAgfVxuICAgIHJldHVybiBtYXh2YWw7XG59XG5leHBvcnRzLm1heE9yRGVmYXVsdCA9IG1heE9yRGVmYXVsdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgSUNvbXBhcmVyXzEgPSByZXF1aXJlKFwiLi8uLi9UeXBlcy9JQ29tcGFyZXJcIik7XG4vKipcbiAqIG1pbl9xXzogUmV0dXJucyB0aGUgbWluaW11bSB2YWx1ZSBpbiBhIHNlcXVlbmNlLlxuICogVGFrZXMgYW4gb3B0aW9uYWwgdHJhbnNmb3JtYXRpb24gZnVuY3Rpb24uIElmIHN1cHBsaWVkLCB0aGlzIHRyYW5zZm9ybWF0aW9uIGlzIGFwcGxpZWQgdG8gYWxsIHZhbHVlcyBhbmQgdGhlIG1pbiByZXN1bHQgcmV0dXJuZWQuXG4gKlxuICogVGFrZXMgYW4gb3B0aW9uYWwgY29tcGFyZXIsIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0d28gaW5wdXRzIGFuZCByZXR1cm5zIDEgaWYgdGhlIGZpcnN0IGlzIGhpZ2hlciwgLTEgaXMgdGhlIHNlY29uZCBpcyBoaWdoZXIsXG4gKiBlbHNlIDAuXG4gKiBJZiB5b3Ugd2FudCB0byBzZW5kIG9ubHkgdGhlIGNvbXBhcmVyIGluIHRoZSBmaXJzdCBwYXJhbWV0ZXIsIGl0IG11c3QgYmUgZW5jbG9zZWQgaW4gYW4gb2JqZWN0IGxpa2Ugc286IHsgY29tcGFyZTogbXlDb21wYXJlckZ1bmN0aW9uIH1cbiAqL1xuZnVuY3Rpb24gbWluKHRyYW5zZm9ybSwgY29tcGFyZXIpIHtcbiAgICBsZXQgY29tcGFyZTtcbiAgICBpZiAoY29tcGFyZXIpIHtcbiAgICAgICAgY29tcGFyZSA9IElDb21wYXJlcl8xLmV4dHJhY3RDb21wYXJlcihjb21wYXJlcik7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRyYW5zZm9ybSAmJiBcImNvbXBhcmVcIiBpbiB0cmFuc2Zvcm0pIHtcbiAgICAgICAgY29tcGFyZSA9IHRyYW5zZm9ybS5jb21wYXJlO1xuICAgIH1cbiAgICBsZXQgeGZvcm07XG4gICAgaWYgKHRyYW5zZm9ybSAmJiB0eXBlb2YgdHJhbnNmb3JtID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgeGZvcm0gPSB0cmFuc2Zvcm07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBUeXBlc2NyaXB0IGRvZXNuJ3Qga25vdyB0aGF0IFQgPSBUUmVzdWx0IGluIHRoaXMgY2FzZVxuICAgICAgICB4Zm9ybSA9ICh2YWwpID0+IHZhbDtcbiAgICB9XG4gICAgbGV0IGZpcnN0ID0gZmFsc2U7XG4gICAgbGV0IG1pbnZhbDtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcykge1xuICAgICAgICBjb25zdCBjdXJyZW50ID0geGZvcm0oaXRlbSk7XG4gICAgICAgIGlmICghZmlyc3QpIHtcbiAgICAgICAgICAgIG1pbnZhbCA9IGN1cnJlbnQ7XG4gICAgICAgICAgICBmaXJzdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29tcGFyZSkge1xuICAgICAgICAgICAgaWYgKGNvbXBhcmUoY3VycmVudCwgbWludmFsKSA8IDApIHtcbiAgICAgICAgICAgICAgICBtaW52YWwgPSBjdXJyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnQgPCBtaW52YWwpIHtcbiAgICAgICAgICAgICAgICBtaW52YWwgPSBjdXJyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghZmlyc3QpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2VxdWVuY2UgY29udGFpbnMgbm8gZWxlbWVudHNcIik7XG4gICAgfVxuICAgIHJldHVybiBtaW52YWw7XG59XG5leHBvcnRzLm1pbiA9IG1pbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgSUNvbXBhcmVyXzEgPSByZXF1aXJlKFwiLi8uLi9UeXBlcy9JQ29tcGFyZXJcIik7XG4vKipcbiAqIG1pbkJ5X3FfOiBSZXR1cm5zIHRoZSBtYXhpbXVtIHZhbHVlIGluIGEgc2VxdWVuY2UgdXNpbmcgYSBrZXkgc2VsZWN0b3IgZnVuY3Rpb24uXG4gKiBUYWtlcyBhbiBvcHRpb25hbCBjb21wYXJlciwgYSBmdW5jdGlvbiB0aGF0IHRha2VzIHR3byBpbnB1dHMgYW5kIHJldHVybnMgMSBpZiB0aGUgZmlyc3QgaXMgaGlnaGVyLCAtMSBpcyB0aGUgc2Vjb25kIGlzIGhpZ2hlcixcbiAqIGVsc2UgMC5cbiAqXG4gKiBUaGUgZGlmZmVyZW5jZSBiZXR3ZWVuIE1pbkJ5IGFuZCBNaW4gd2l0aCBhIHRyYW5zZm9ybWF0aW9uIGZ1bmN0aW9uIGlzIHRoYXQgTWluIHJldHVybnMgdGhlIG91dHB1dCBvZiB0aGUgdHJhbnNmb3JtYXRpb24gd2hpbGUgTWluQnlcbiAqIHJldHVybnMgdGhlIG9yaWdpbmFsIHZhbHVlLiBUaGlzIHNhbWUgcmVzdWx0IGNvdWxkIGJlIGFjaGlldmVkIHdpdGggTWluIGFuZCBhIHdlbGwtZGVzaWduZWQgY29tcGFyZXIgZnVuY3Rpb24sIG9mIGNvdXJzZS5cbiAqL1xuZnVuY3Rpb24gbWluQnkoa2V5U2VsZWN0b3IsIGNvbXBhcmVyKSB7XG4gICAgaWYgKCFrZXlTZWxlY3Rvcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICBjb25zdCBjb21wYXJlID0gSUNvbXBhcmVyXzEuZXh0cmFjdENvbXBhcmVyKGNvbXBhcmVyKTtcbiAgICBsZXQgZmlyc3QgPSBmYWxzZTtcbiAgICBsZXQgbWluO1xuICAgIGxldCBtaW5WYWx1ZTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcykge1xuICAgICAgICBjb25zdCBjdXJyZW50ID0ga2V5U2VsZWN0b3IoaXRlbSk7XG4gICAgICAgIGlmICghZmlyc3QpIHtcbiAgICAgICAgICAgIG1pbiA9IGN1cnJlbnQ7XG4gICAgICAgICAgICBtaW5WYWx1ZSA9IGl0ZW07XG4gICAgICAgICAgICBmaXJzdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29tcGFyZSkge1xuICAgICAgICAgICAgaWYgKGNvbXBhcmUoY3VycmVudCwgbWluKSA8IDApIHtcbiAgICAgICAgICAgICAgICBtaW4gPSBjdXJyZW50O1xuICAgICAgICAgICAgICAgIG1pblZhbHVlID0gaXRlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50IDwgbWluKSB7XG4gICAgICAgICAgICAgICAgbWluID0gY3VycmVudDtcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZSA9IGl0ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFmaXJzdCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTZXF1ZW5jZSBjb250YWlucyBubyBlbGVtZW50c1wiKTtcbiAgICB9XG4gICAgcmV0dXJuIG1pblZhbHVlO1xufVxuZXhwb3J0cy5taW5CeSA9IG1pbkJ5O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBJQ29tcGFyZXJfMSA9IHJlcXVpcmUoXCIuLy4uL1R5cGVzL0lDb21wYXJlclwiKTtcbi8qKlxuICogbWluT3JEZWZhdWx0X3FfOiBSZXR1cm5zIHRoZSBtaW5pbXVtIHZhbHVlIGluIGEgc2VxdWVuY2UuIElmIHNlcXVlbmNlIGlzIGVtcHR5LCByZXR1cm5zIHRoZSBkZWZhdWx0IHZhbHVlIG9yIHVuZGVmaW5lZC5cbiAqIFRha2VzIGFuIG9wdGlvbmFsIHRyYW5zZm9ybWF0aW9uIGZ1bmN0aW9uLiBJZiBzdXBwbGllZCwgdGhpcyB0cmFuc2Zvcm1hdGlvbiBpcyBhcHBsaWVkIHRvIGFsbCB2YWx1ZXMgYW5kIHRoZSBtaW4gcmVzdWx0IHJldHVybmVkLlxuICogVGhpcyBpcyBhIEpPSU4tc3BlY2lmaWMgbWV0aG9kLiBUaGVyZSBpcyBubyBlcXVpdmFsZW50IGluIEMjLlxuICpcbiAqIFRha2VzIGFuIG9wdGlvbmFsIGNvbXBhcmVyLCBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgdHdvIGlucHV0cyBhbmQgcmV0dXJucyAxIGlmIHRoZSBmaXJzdCBpcyBoaWdoZXIsIC0xIGlzIHRoZSBzZWNvbmQgaXMgaGlnaGVyLFxuICogZWxzZSAwLlxuICogSWYgeW91IHdhbnQgdG8gc2VuZCB0aGUgY29tcGFyZXIgaW4gdGhlIGZpcnN0IHBhcmFtZXRlciwgaXQgbXVzdCBiZSBlbmNsb3NlZCBpbiBhbiBvYmplY3QgbGlrZSBzbzogeyBjb21wYXJlOiBteUNvbXBhcmVyRnVuY3Rpb24gfVxuICogSWYgeW91IHdhbnQgdG8gc2VuZCB0aGUgZGVmYXVsdFZhbHVlIGluIGFueXRoaW5nIGJ1dCB0aGUgZmluYWwgdmFsdWUsIGl0IG11c3QgYmUgZW5jbG9zZWQgbGlrZSBzbzogeyBkZWZhdWx0VmFsdWUgfVxuICovXG5mdW5jdGlvbiBtaW5PckRlZmF1bHQodHJhbnNmb3JtLCBjb21wYXJlciwgZGVmYXVsdFZhbHVlKSB7XG4gICAgbGV0IGRlZjtcbiAgICBpZiAoZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIGRlZiA9IGRlZmF1bHRWYWx1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoY29tcGFyZXIgJiYgXCJkZWZhdWx0VmFsdWVcIiBpbiBjb21wYXJlcikge1xuICAgICAgICBkZWYgPSBjb21wYXJlci5kZWZhdWx0VmFsdWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRyYW5zZm9ybSAmJiBcImRlZmF1bHRWYWx1ZVwiIGluIHRyYW5zZm9ybSkge1xuICAgICAgICBkZWYgPSB0cmFuc2Zvcm0uZGVmYXVsdFZhbHVlO1xuICAgIH1cbiAgICBsZXQgY29tcGFyZTtcbiAgICBpZiAoY29tcGFyZXIgJiYgIShcImRlZmF1bHRWYWx1ZVwiIGluIGNvbXBhcmVyKSkge1xuICAgICAgICBjb21wYXJlID0gSUNvbXBhcmVyXzEuZXh0cmFjdENvbXBhcmVyKGNvbXBhcmVyKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHJhbnNmb3JtICYmIFwiY29tcGFyZVwiIGluIHRyYW5zZm9ybSkge1xuICAgICAgICBjb21wYXJlID0gdHJhbnNmb3JtLmNvbXBhcmU7XG4gICAgfVxuICAgIGxldCB4Zm9ybTtcbiAgICBpZiAodHJhbnNmb3JtICYmIHR5cGVvZiB0cmFuc2Zvcm0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB4Zm9ybSA9IHRyYW5zZm9ybTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIFR5cGVzY3JpcHQgZG9lc24ndCBrbm93IHRoYXQgVCA9IFRSZXN1bHQgaW4gdGhpcyBjYXNlXG4gICAgICAgIHhmb3JtID0gKHZhbCkgPT4gdmFsO1xuICAgIH1cbiAgICBsZXQgZmlyc3QgPSBmYWxzZTtcbiAgICBsZXQgbWludmFsO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSB4Zm9ybShpdGVtKTtcbiAgICAgICAgaWYgKCFmaXJzdCkge1xuICAgICAgICAgICAgbWludmFsID0gY3VycmVudDtcbiAgICAgICAgICAgIGZpcnN0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb21wYXJlKSB7XG4gICAgICAgICAgICBpZiAoY29tcGFyZShjdXJyZW50LCBtaW52YWwpIDwgMCkge1xuICAgICAgICAgICAgICAgIG1pbnZhbCA9IGN1cnJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudCA8IG1pbnZhbCkge1xuICAgICAgICAgICAgICAgIG1pbnZhbCA9IGN1cnJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFmaXJzdCkge1xuICAgICAgICByZXR1cm4gZGVmO1xuICAgIH1cbiAgICByZXR1cm4gbWludmFsO1xufVxuZXhwb3J0cy5taW5PckRlZmF1bHQgPSBtaW5PckRlZmF1bHQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogb2ZUeXBlX3FfOiBGaWx0ZXJzIHRoZSBlbGVtZW50cyBvZiBhbiBJRW51bWVyYWJsZSBiYXNlZCBvbiBhIHNwZWNpZmllZCB0eXBlLlxuICpcbiAqIEluIEpTIHRoaXMgaXMga2luZCBvZiBtZWFuaW5nbGVzcy4gSWYgeW91IHByb3ZpZGUgYSBzdHJpbmcsIGl0IGRvZXMgYSB0eXBlb2YuIElmIHlvdSBwcm92aWRlIGEgY2xhc3MsIGl0IGRvZXMgYW4gaW5zdGFuY2VvZi5cbiAqL1xuZnVuY3Rpb24gb2ZUeXBlKGZpbHRlcikge1xuICAgIGlmICghZmlsdGVyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF9vZlR5cGUoZGF0YSkge1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBmaWx0ZXIgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGl0ZW0gPT09IGZpbHRlcikge1xuICAgICAgICAgICAgICAgICAgICAvLyBXZSdyZSBqdXN0IHRha2luZyBpdCBvbiB0aGUgY29kZXIncyBob25vciB0aGF0IGZpbHRlciBtYXRjaGVzIFIuIE5vIHdheSB0byBhY3R1YWxseSB0ZXN0IGl0LlxuICAgICAgICAgICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtIGluc3RhbmNlb2YgZmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLm9mVHlwZSA9IG9mVHlwZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgT3JkZXJlZEVudW1lcmFibGVfMSA9IHJlcXVpcmUoXCIuLi9FbnVtZXJhYmxlL09yZGVyZWRFbnVtZXJhYmxlXCIpO1xuLy8gV0FSTklORyFcbi8vIFRoZXNlIHR3byBtZXRob2RzIG11c3QgYmUgYWRkZWQgdG8gRW51bWVyYWJsZSB1c2luZyBwcm90b3R5cGUgbW9kaWZpY2F0aW9uLCBiZWNhdXNlIGRlY2xhcmluZyB0aGVtIGluIHRoZSBFbnVtZXJhYmxlIGNsYXNzIG1ha2VzIHRoZVxuLy8gYnJvd3NlciBibG93IHVwLiBJdCdzIGJlY2F1c2Ugb2YgdGhlIFwibmV3IE9yZGVyZWRFbnVtZXJhYmxlXCIgKHdoaWNoIGRlcml2ZXMgZnJvbSBFbnVtZXJhYmxlKSBiZWluZyByZWZlcmVuY2VkLlxuLyoqXG4gKiBvcmRlckJ5X3FfOiBTb3J0cyB0aGUgZWxlbWVudHMgb2YgYSBzZXF1ZW5jZSBpbiBhc2NlbmRpbmcgb3JkZXIgYWNjb3JkaW5nIHRvIGEga2V5IGZ1bmN0aW9uLlxuICogVGFrZXMgYW4gb3B0aW9uYWwgY29tcGFyZXIsIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0d28gaW5wdXRzIGFuZCByZXR1cm5zIDEgaWYgdGhlIGZpcnN0IGlzIGhpZ2hlciwgLTEgaXMgdGhlIHNlY29uZCBpcyBoaWdoZXIsXG4gKiBlbHNlIDAuXG4gKiBUaGUga2V5IGZ1bmN0aW9uIGlzIGFsc28gb3B0aW9uYWwuIElmIHlvdSBsZWF2ZSBpdCBvdXQsIGl0J2xsIGRlZmF1bHQgdG8gdGhlIGlkZW50aXR5LiBJIGdvdCB0aXJlZCBvZiB3cml0aW5nIC5vcmRlckJ5X3FfKG8gPT4gbylcbiAqIHdoZW4gc29ydGluZyBudW1iZXJzIG9yIHN0cmluZ3MuIFRoaXMgaXMgYSBjaGFuZ2UgZnJvbSBDIy5cbiAqXG4gKiBJZiB5b3Ugd2FudCB0byB1c2UgdGhlIGNvbXBhcmVyLCB5b3UnbGwgbmVlZCB0byBpbmNsdWRlIHRoZSBrZXkgc2VsZWN0b3IuIEl0J3Mgbm90IHdvcnRoIG15IHdoaWxlIHRvIG1ha2UgYSB7Y29tcGFyZXJ9IG9iamVjdCB0byBhbGxvd1xuICogb25seSBvbmUgcGFyYW1ldGVyIGZvciB0aGlzIHJhcmUgY2FzZS5cbiAqL1xuZnVuY3Rpb24gb3JkZXJCeShrZXlTZWxlY3RvciwgY29tcGFyZXIpIHtcbiAgICBpZiAoIWtleVNlbGVjdG9yKSB7XG4gICAgICAgIGtleVNlbGVjdG9yID0gKChvKSA9PiBvKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBPcmRlcmVkRW51bWVyYWJsZV8xLk9yZGVyZWRFbnVtZXJhYmxlKHRoaXMsIGtleVNlbGVjdG9yLCBjb21wYXJlcik7XG59XG5leHBvcnRzLm9yZGVyQnkgPSBvcmRlckJ5O1xuLyoqXG4gKiBvcmRlckJ5RGVzY2VuZGluZ19xXzogU29ydHMgdGhlIGVsZW1lbnRzIG9mIGEgc2VxdWVuY2UgaW4gZGVzY2VuZGluZyBvcmRlciBhY2NvcmRpbmcgdG8gYSBrZXkgZnVuY3Rpb24uXG4gKiBUYWtlcyBhbiBvcHRpb25hbCBjb21wYXJlciwgYSBmdW5jdGlvbiB0aGF0IHRha2VzIHR3byBpbnB1dHMgYW5kIHJldHVybnMgMSBpZiB0aGUgZmlyc3QgaXMgaGlnaGVyLCAtMSBpcyB0aGUgc2Vjb25kIGlzIGhpZ2hlcixcbiAqIGVsc2UgMC5cbiAqIFRoZSBrZXkgZnVuY3Rpb24gaXMgYWxzbyBvcHRpb25hbC4gSWYgeW91IGxlYXZlIGl0IG91dCwgaXQnbGwgZGVmYXVsdCB0byB0aGUgaWRlbnRpdHkuIEkgZ290IHRpcmVkIG9mIHdyaXRpbmcgLm9yZGVyQnlfcV8obyA9PiBvKVxuICogd2hlbiBzb3J0aW5nIG51bWJlcnMgb3Igc3RyaW5ncy4gVGhpcyBpcyBhIGNoYW5nZSBmcm9tIEMjLlxuICpcbiAqIElmIHlvdSB3YW50IHRvIHVzZSB0aGUgY29tcGFyZXIsIHlvdSdsbCBuZWVkIHRvIGluY2x1ZGUgdGhlIGtleSBzZWxlY3Rvci4gSXQncyBub3Qgd29ydGggbXkgd2hpbGUgdG8gbWFrZSBhIHtjb21wYXJlcn0gb2JqZWN0IHRvIGFsbG93XG4gKiBvbmx5IG9uZSBwYXJhbWV0ZXIgZm9yIHRoaXMgcmFyZSBjYXNlLlxuICovXG5mdW5jdGlvbiBvcmRlckJ5RGVzY2VuZGluZyhrZXlTZWxlY3RvciwgY29tcGFyZXIpIHtcbiAgICBpZiAoIWtleVNlbGVjdG9yKSB7XG4gICAgICAgIGtleVNlbGVjdG9yID0gKChvKSA9PiBvKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBPcmRlcmVkRW51bWVyYWJsZV8xLk9yZGVyZWRFbnVtZXJhYmxlKHRoaXMsIGtleVNlbGVjdG9yLCBjb21wYXJlciwgdHJ1ZSk7XG59XG5leHBvcnRzLm9yZGVyQnlEZXNjZW5kaW5nID0gb3JkZXJCeURlc2NlbmRpbmc7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFJlc3RhcnRhYmxlR2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi4vR2VuZXJhdG9ycy9SZXN0YXJ0YWJsZUdlbmVyYXRvclwiKTtcbi8qKlxuICogb3V0ZXJKb2luX3FfOiBDb3JyZWxhdGVzIHRoZSBlbGVtZW50cyBvZiB0d28gc2VxdWVuY2VzIGJhc2VkIG9uIG1hdGNoaW5nIGtleXMuIElmIG5vIG1hdGNoaW5nIHJlY29yZCBpcyBmaW5kIGluIHRoZSBzZWNvbmQgc2VxdWVuY2UsIHVuZGVmaW5lZCBpcyBzZW50IHRvIHRoZSBvdXRwdXQgc2VsZWN0b3IuXG4gKiBPdXRlciBKb2lucyBhcmUgbm90IHByb3ZpZGVkIGluIExJTlEuIFRoaXMgaXMgYSBuZXcgZnVuY3Rpb24sIGZvbGxvd2luZyB0aGUgcGF0dGVybiBvZiBqb2luX3FfKCk7XG4gKiBvcHRpb25hbCBlcXVhbGl0eSBjb21wYXJlciBjYW4gYmUgdXNlZCB0byBjb21wYXJlIGtleXNcbiAqIElmIHRoZSBvdXRwdXQgc2VsZWN0b3IgaXMgbGVmdCBvdXQsIHJlc3VsdHMgYXJlIHJldHVybmVkIGFzIFtmaXJzdCByb3csIHNlY29uZCByb3ddLlxuICogTGVhdmluZyB0aGUgb3V0cHV0IHNlbGVjdG9yIG91dCByZXF1aXJlcyBwYXNzaW5nIGNvbXBhcmVyIGluIGFzIHsgZXF1YWxzOiBjb21wYXJlciB9IGlmIHlvdSB3YW50IHRvIHVzZSBpdC5cbiAqL1xuZnVuY3Rpb24gb3V0ZXJKb2luKHNlY29uZCwgZmlyc3RLZXlTZWxlY3Rvciwgc2Vjb25kS2V5U2VsZWN0b3IsIG91dHB1dEZ1bmN0aW9uLCBjb21wYXJlcikge1xuICAgIGlmICghc2Vjb25kIHx8ICFmaXJzdEtleVNlbGVjdG9yIHx8ICFzZWNvbmRLZXlTZWxlY3Rvcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICBsZXQgb3V0cHV0O1xuICAgIGxldCBlcXVhbGl6ZXI7XG4gICAgaWYgKGNvbXBhcmVyICYmIHR5cGVvZiBjb21wYXJlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGVxdWFsaXplciA9IGNvbXBhcmVyO1xuICAgIH1cbiAgICBlbHNlIGlmIChjb21wYXJlciAmJiBcImVxdWFsc1wiIGluIGNvbXBhcmVyKSB7XG4gICAgICAgIGVxdWFsaXplciA9IGNvbXBhcmVyLmVxdWFscztcbiAgICB9XG4gICAgZWxzZSBpZiAob3V0cHV0RnVuY3Rpb24gJiYgXCJlcXVhbHNcIiBpbiBvdXRwdXRGdW5jdGlvbikge1xuICAgICAgICBlcXVhbGl6ZXIgPSBvdXRwdXRGdW5jdGlvbi5lcXVhbHM7XG4gICAgfVxuICAgIGlmIChvdXRwdXRGdW5jdGlvbiAmJiB0eXBlb2Ygb3V0cHV0RnVuY3Rpb24gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBvdXRwdXQgPSBvdXRwdXRGdW5jdGlvbjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIElmIG91dHB1dEZ1bmN0aW9uIGlzIG1pc3NpbmcsIFRSZXN1bHQgaXMgW1QsIFRTZWNvbmRdLiBDYW4ndCBtYWtlIFR5cGVTY3JpcHQgdW5kZXJzdGFuZCB0aGF0LCB0aG91Z2guXG4gICAgICAgIG91dHB1dCA9ICgobCwgcikgPT4gW2wsIHJdKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX291dGVySm9pbihkYXRhKSB7XG4gICAgICAgIC8vIFNpbXBsZSBuZXN0ZWQgbG9vcHMgam9pblxuICAgICAgICAvLyBJZiB0aGlzIHdlcmUgU1FMIHNlcnZlciwgc29tZSBzdGF0aXN0aWNzIGFuZCBpbmRleCBhbmFseXNpcyBhbmQgcHJlLWZpbHRlcmluZyBjb3VsZCBiZSBkb25lIGJlZm9yZSBjb21wYXJpc29uLlxuICAgICAgICAvLyBUaGlzIGlzbid0IFNRTCBTZXJ2ZXIuIFdlIGNhbid0IGV2ZW4gZmlsdGVyIG91dCBOVUxMcywgYmVjYXVzZSB3aGF0IGlmIHRoZSBqb2luIGZ1bmN0aW9uIHNheXMgXCJsZWZ0ID09IG51bGwgJiYgcmlnaHQgPT0gbnVsbFwiLCBsaWtlIHNvbWUgbGlucSB0byBlbnRpdHkgcXVlcmllcyBkbz9cbiAgICAgICAgLy8gV2UgbmVlZCB0aGUgYWJpbGl0eSB0byBjaGVjayB0aGUgcmlnaHQgc2lkZSBhZ2FpbnN0IGV2ZXJ5IGxlZnQgc2lkZS4gXG4gICAgICAgIC8vIElmIGl0IGlzIGEgZ2VuZXJhdG9yLCBpdCBjYW4ndCBiZSByZXN0YXJ0ZWQgdG8gYWxsb3cgdGhhdC5cbiAgICAgICAgY29uc3QgcmlnaHRHZW4gPSBuZXcgUmVzdGFydGFibGVHZW5lcmF0b3JfMS5SZXN0YXJ0YWJsZUdlbmVyYXRvcihzZWNvbmQpO1xuICAgICAgICBmb3IgKGNvbnN0IGxlZnRJdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGxldCBsZWZ0TWF0Y2hlZCA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yIChjb25zdCByaWdodEl0ZW0gb2YgcmlnaHRHZW4pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsZWZ0S2V5ID0gZmlyc3RLZXlTZWxlY3RvcihsZWZ0SXRlbSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmlnaHRLZXkgPSBzZWNvbmRLZXlTZWxlY3RvcihyaWdodEl0ZW0pO1xuICAgICAgICAgICAgICAgIGxldCBtYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmIChlcXVhbGl6ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSBlcXVhbGl6ZXIobGVmdEtleSwgcmlnaHRLZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSBsZWZ0S2V5ID09PSByaWdodEtleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnRNYXRjaGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgb3V0cHV0KGxlZnRJdGVtLCByaWdodEl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbGVmdE1hdGNoZWQpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBvdXRwdXQobGVmdEl0ZW0sIHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByaWdodEdlbi5yZXN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMub3V0ZXJKb2luID0gb3V0ZXJKb2luO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIHByZXBlbmRfcV86IEFwcGVuZHMgYSB2YWx1ZSB0byB0aGUgc3RhcnQgb2YgdGhlIHNlcXVlbmNlXG4gKi9cbmZ1bmN0aW9uIHByZXBlbmQobmV3SXRlbSkge1xuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF9wcmVwZW5kKGRhdGEpIHtcbiAgICAgICAgeWllbGQgbmV3SXRlbTtcbiAgICAgICAgeWllbGQqIGRhdGE7XG4gICAgfSk7XG59XG5leHBvcnRzLnByZXBlbmQgPSBwcmVwZW5kO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBSZXN0YXJ0YWJsZUdlbmVyYXRvcl8xID0gcmVxdWlyZShcIi4uL0dlbmVyYXRvcnMvUmVzdGFydGFibGVHZW5lcmF0b3JcIik7XG4vKipcbiAqIHJlcGxpY2F0ZV9xXzogUmVwZWF0IHRoZSBpdGVtcyBpbiBhIHNlcXVlbmNlIGEgc3BlY2lmaWVkIG51bWJlciBvZiB0aW1lcy5cbiAqL1xuZnVuY3Rpb24gcmVwbGljYXRlKHRpbWVzKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX3Rha2UoZGF0YSkge1xuICAgICAgICBjb25zdCBsb29wID0gbmV3IFJlc3RhcnRhYmxlR2VuZXJhdG9yXzEuUmVzdGFydGFibGVHZW5lcmF0b3IoZGF0YSk7XG4gICAgICAgIHdoaWxlICh0aW1lcyA+IDApIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBsb29wKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxvb3AucmVzdGFydCgpO1xuICAgICAgICAgICAgdGltZXMtLTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5yZXBsaWNhdGUgPSByZXBsaWNhdGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogcmV2ZXJzZV9xXzogSW52ZXJ0cyB0aGUgb3JkZXIgb2YgdGhlIGVsZW1lbnRzIGluIGEgc2VxdWVuY2VcbiAqXG4gKiBSZXZlcnNlIGlzIHJlYWxseSBwb2ludGxlc3MuIEl0IGlzIGFscmVhZHkgZm91bmQgb24gdGhlIGFycmF5IGNsYXNzLCBhbmQgd2hpbGUgdGhpcyBpcyB0ZWNobmljYWxseVxuICogZGVsYXllZCBleGVjdXRpb24sIGl0IGNhbiBvbmx5IHdvcmsgYnkgZ29pbmcgdGhyb3VnaCB0byB0aGUgZW5kIG9mIHRoZSBlbnVtZXJhYmxlLlxuICovXG5mdW5jdGlvbiByZXZlcnNlKCkge1xuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF9yZXZlcnNlKGRhdGEpIHtcbiAgICAgICAgLy8gV2hpbGUgdGhpcyBpcyB0ZWNobmljYWxseSBkZWxheWVkIGV4ZWN1dGlvbiwgaXQgb2J2aW91c2x5IG5lZWRzIHRvIHByb2Nlc3MgdGhlIGVudGlyZSBkYXRhc2V0XG4gICAgICAgIC8vIGJlY2F1c2UgaXQgaGFzIHRvIGdldCBhbGwgdGhlIHdheSB0byB0aGUgbGFzdCBpdGVtIGJlZm9yZSByZXR1cm5pbmcgYSByb3cuXG4gICAgICAgIGNvbnN0IHRvUmV0dXJuID0gWy4uLmRhdGFdO1xuICAgICAgICB3aGlsZSAodG9SZXR1cm4ubGVuZ3RoKSB7XG4gICAgICAgICAgICB5aWVsZCB0b1JldHVybi5wb3AoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5yZXZlcnNlID0gcmV2ZXJzZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgUmVzdGFydGFibGVHZW5lcmF0b3JfMSA9IHJlcXVpcmUoXCIuLi9HZW5lcmF0b3JzL1Jlc3RhcnRhYmxlR2VuZXJhdG9yXCIpO1xuLyoqXG4gKiByaWdodEpvaW5fcV86IEEgZnJpZW5kbHkgaGVscGVyIHRvIGNyZWF0ZSBhIHJpZ2h0IGxlZnQgb3V0ZXIgam9pbi4gVGhpcyBmb2xsb3dzIHRoZSBwYXR0ZXJuIG9mIGlubmVySm9pbl9xXygpLCB3aGljaCBjb21iaW5lcyB0aGUgdHdvXG4gKiBrZXkgbG9va3VwcyBhbmQgZXF1YWxpdHkgY29tcGFyZXIgaW50byBhIHNpbmdsZSBmdW5jdGlvbiBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gcmlnaHRKb2luKHNlY29uZCwgb24sIHNlbGVjdEZ1bmN0aW9uKSB7XG4gICAgaWYgKCFzZWNvbmQgfHwgIW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIGxldCBvdXRwdXQ7XG4gICAgaWYgKHNlbGVjdEZ1bmN0aW9uKSB7XG4gICAgICAgIG91dHB1dCA9IHNlbGVjdEZ1bmN0aW9uO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gSWYgc2VsZWN0RnVuY3Rpb24gaXMgbWlzc2luZywgVFJlc3VsdCBpcyBbVCwgVFNlY29uZF0uIENhbid0IG1ha2UgVHlwZVNjcmlwdCB1bmRlcnN0YW5kIHRoYXQsIHRob3VnaC5cbiAgICAgICAgb3V0cHV0ID0gKChsLCByKSA9PiBbbCwgcl0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfbGVmdEpvaW4oZGF0YSkge1xuICAgICAgICAvLyBTaW1wbGUgbmVzdGVkIGxvb3BzIGpvaW5cbiAgICAgICAgLy8gSWYgdGhpcyB3ZXJlIFNRTCBzZXJ2ZXIsIHNvbWUgYW5hbHlzaXMgYW5kIHByZS1maWx0ZXJpbmcgY291bGQgYmUgZG9uZSBiZWZvcmUgY29tcGFyaXNvbi5cbiAgICAgICAgLy8gVGhpcyBpc24ndCBTUUwgU2VydmVyLiBXZSBjYW4ndCBldmVuIGZpbHRlciBvdXQgTlVMTHMsIGJlY2F1c2Ugd2hhdCBpZiB0aGUgam9pbiBmdW5jdGlvbiBzYXlzIFwibGVmdCA9PSBudWxsICYmIHJpZ2h0ID09IG51bGxcIiwgbGlrZSBzb21lIGxpbnEgdG8gZW50aXR5IHF1ZXJpZXMgZG8/XG4gICAgICAgIC8vIFdlIG5lZWQgdGhlIGFiaWxpdHkgdG8gY2hlY2sgdGhlIGxlZnQgc2lkZSBhZ2FpbnN0IGV2ZXJ5IHJpZ2h0IHNpZGUuXG4gICAgICAgIC8vIElmIGl0IGlzIGEgZ2VuZXJhdG9yLCBpdCBjYW4ndCBiZSByZXN0YXJ0ZWQgdG8gYWxsb3cgdGhhdC5cbiAgICAgICAgY29uc3QgbGVmdEdlbiA9IG5ldyBSZXN0YXJ0YWJsZUdlbmVyYXRvcl8xLlJlc3RhcnRhYmxlR2VuZXJhdG9yKGRhdGEpO1xuICAgICAgICBmb3IgKGNvbnN0IHJpZ2h0SXRlbSBvZiBzZWNvbmQpIHtcbiAgICAgICAgICAgIGxldCByaWdodE1hdGNoZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbGVmdEl0ZW0gb2YgbGVmdEdlbikge1xuICAgICAgICAgICAgICAgIGlmIChvbihsZWZ0SXRlbSwgcmlnaHRJdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICByaWdodE1hdGNoZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBvdXRwdXQobGVmdEl0ZW0sIHJpZ2h0SXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFyaWdodE1hdGNoZWQpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBvdXRwdXQodW5kZWZpbmVkLCByaWdodEl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGVmdEdlbi5yZXN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMucmlnaHRKb2luID0gcmlnaHRKb2luO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIHNlbGVjdF9xXzogcHJvamVjdHMgZWFjaCBlbGVtZW50IG9mIGEgc2VxdWVuY2UgaW50byBhIG5ldyBmb3JtIGJ5IGNhbGxpbmcgYSB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbiBvbiBlYWNoIGVsZW1lbnQuXG4gKiBPcHRpb25hbGx5LCB0aGUgdHJhbnNmb3JtYXRpb24gZnVuY3Rpb24gY2FuIHJlY2VpdmUgdGhlIGluZGV4IGFzIGEgc2Vjb25kIGFyZ3VtZW50XG4gKlxuICogY2FzdCgpIGlzIG1hcHBlZCB0byBzZWxlY3QoKSBiZWNhdXNlIGluIGphdmFzY3JpcHQvdHlwZXNjcmlwdCwgcnVudGltZSBjYXN0KCkgZG9lc24ndCBleGlzdFxuICovXG5mdW5jdGlvbiBzZWxlY3Qoc2VsZWN0RnVuY3Rpb24pIHtcbiAgICBpZiAoIXNlbGVjdEZ1bmN0aW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF9zZWxlY3QoZGF0YSkge1xuICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xuICAgICAgICAgICAgLy8gQ2FzdCBuZWVkZWQgdG8gYWxsb3cgY2xlYW4gaW50ZXJmYWNlIG92ZXJsb2Fkc1xuICAgICAgICAgICAgeWllbGQgc2VsZWN0RnVuY3Rpb24oaXRlbSwgaW5kZXgrKyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuc2VsZWN0ID0gc2VsZWN0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIHNlbGVjdE1hbnlfcV86IFByb2plY3RzIGVhY2ggZWxlbWVudCBvZiBhIHNlcXVlbmNlIHRvIGFuIElFbnVtZXJhYmxlPFQ+LCBhbmQgZmxhdHRlbnMgdGhlIHJlc3VsdGluZyBzZXF1ZW5jZXMgaW50byBvbmUgc2VxdWVuY2UgdXNpbmcgYSBzZWxlY3RvciBmdW5jdGlvblxuICogb3B0aW9uYWxseSwgdGhlIHRyYW5zZm9ybWF0aW9uIGZ1bmN0aW9uIGNhbiByZWNlaXZlIHRoZSBpbmRleCBhcyBhIHNlY29uZCBhcmd1bWVudFxuICogYW4gb3B0aW9uYWwgb3V0cHV0IHRyYW5zZm9ybWF0aW9uIGZ1bmN0aW9uIHByb2Nlc3NlcyB0aGUgb3V0cHV0IG9mIHRoZSBzZWxlY3RvciBmdW5jdGlvbiB0byBwcm9kdWNlIGFuIG91dHB1dFxuICovXG5mdW5jdGlvbiBzZWxlY3RNYW55KHN1YlNlbGVjdEZ1bmN0aW9uLCBvdXRwdXRGdW5jdGlvbikge1xuICAgIGlmICghc3ViU2VsZWN0RnVuY3Rpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgaWYgKCFvdXRwdXRGdW5jdGlvbikge1xuICAgICAgICAvLyBUeXBlc2NyaXB0IGRvZXNuJ3Qga25vdyB0aGF0IGlmIFIgaXMgbGVmdCBvdXQsIGl0J3MgdGhlIHNhbWUgYXMgVEVsZW1lbnQuXG4gICAgICAgIC8vIFRoaXMgd291bGQgYWxsIGJlIGVhc2llciBpZiB0eXBlc2NyaXB0IGhhZCBwcm9wZXIgb3ZlcmxvYWRzLlxuICAgICAgICBvdXRwdXRGdW5jdGlvbiA9ICgoc3JjLCByb3cpID0+IHJvdyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF9zZWxlY3RNYW55KGRhdGEpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIC8vIENhc3QgbmVlZGVkIHRvIGFsbG93IGNsZWFuIGludGVyZmFjZSBvdmVybG9hZHNcbiAgICAgICAgICAgIGNvbnN0IGl0ZXIgPSBzdWJTZWxlY3RGdW5jdGlvbihpdGVtLCBpbmRleCsrKTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc3ViSXRlbSBvZiBpdGVyKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgb3V0cHV0RnVuY3Rpb24oaXRlbSwgc3ViSXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuc2VsZWN0TWFueSA9IHNlbGVjdE1hbnk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IElFcXVhbGl0eUNvbXBhcmVyXzEgPSByZXF1aXJlKFwiLi8uLi9UeXBlcy9JRXF1YWxpdHlDb21wYXJlclwiKTtcbi8qKlxuICogc2VxdWVuY2VFcXVhbF9xXzogRGV0ZXJtaW5lcyB3aGV0aGVyIHR3byBzZXF1ZW5jZXMgYXJlIGVxdWFsIGJ5IGNvbXBhcmluZyB0aGVpciBlbGVtZW50cy5cbiAqIG9wdGlvbmFsIGVxdWFsaXR5IGNvbXBhcmVyIGNhbiBiZSBzdXBwbGllZFxuICovXG5mdW5jdGlvbiBzZXF1ZW5jZUVxdWFsKHNlY29uZCwgY29tcGFyZXIpIHtcbiAgICBpZiAoIXNlY29uZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICBjb25zdCBjb21wYXJlID0gSUVxdWFsaXR5Q29tcGFyZXJfMS5leHRyYWN0RXF1YWxpdHlDb21wYXJlcihjb21wYXJlcik7XG4gICAgY29uc3QgaXRlciA9IHNlY29uZFtTeW1ib2wuaXRlcmF0b3JdKCk7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgY29uc3QgdmFsMSA9IHRoaXMubmV4dCgpO1xuICAgICAgICBjb25zdCB2YWwyID0gaXRlci5uZXh0KCk7XG4gICAgICAgIGlmICh2YWwxLmRvbmUgIT09IHZhbDIuZG9uZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBub3QgdGhlIHNhbWUgbGVuZ3RoXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbDEuZG9uZSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbXBhcmUpIHtcbiAgICAgICAgICAgIGlmICghY29tcGFyZSh2YWwxLnZhbHVlLCB2YWwyLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8gbm90IHRoZSBzYW1lIHZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodmFsMS52YWx1ZSAhPT0gdmFsMi52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8gbm90IHRoZSBzYW1lIHZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gc2FtZSBsZW5ndGggYW5kIGFsbCBpdGVtcyBoYXZlIHNhbWUgdmFsdWVzXG4gICAgcmV0dXJuIHRydWU7XG59XG5leHBvcnRzLnNlcXVlbmNlRXF1YWwgPSBzZXF1ZW5jZUVxdWFsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIHNpbmdsZV9xXzogUmV0dXJucyB0aGUgZmlyc3QgZWxlbWVudCBpbiBhIHNlcXVlbmNlLCB0aHJvd2luZyBhbiBleGNlcHRpb24gaWYgdGhlIHNlcXVlbmNlIGlzIGVtcHR5IG9yIGhhcyBtb3JlIHRoYW4gb25lIGl0ZW0uXG4gKiBUYWtlcyBhbiBvcHRpb25hbCBmaWx0ZXIgY29uZGl0aW9uLlxuICovXG5mdW5jdGlvbiBzaW5nbGUobWF0Y2hGdW5jdGlvbikge1xuICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuICAgIGxldCBmb3VuZEl0ZW07XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgaWYgKCFtYXRjaEZ1bmN0aW9uKSB7XG4gICAgICAgICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTZXF1ZW5jZSBjb250YWlucyBtb3JlIHRoYW4gb25lIGVsZW1lbnQuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgZm91bmRJdGVtID0gaXRlbTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChtYXRjaEZ1bmN0aW9uKGl0ZW0pKSB7XG4gICAgICAgICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTZXF1ZW5jZSBjb250YWlucyBtb3JlIHRoYW4gb25lIGVsZW1lbnQuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgZm91bmRJdGVtID0gaXRlbTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgcmV0dXJuIGZvdW5kSXRlbTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiU2VxdWVuY2UgaGFzIG5vIGVsZW1lbnRzLlwiKTtcbn1cbmV4cG9ydHMuc2luZ2xlID0gc2luZ2xlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIHNpbmdsZU9yRGVmYXVsdF9xXzogUmV0dXJucyB0aGUgZmlyc3QgZWxlbWVudCBpbiBhIHNlcXVlbmNlLCB0aHJvd2luZyBhbiBleGNlcHRpb24gaWYgdGhlIHNlcXVlbmNlIGhhcyBtb3JlIHRoYW4gb25lIGl0ZW0uXG4gKiBUYWtlcyBhbiBvcHRpb25hbCBmaWx0ZXIgY29uZGl0aW9uLlxuICpcbiAqIElmIHRoZSBmaWx0ZXJlZCBzZXF1ZW5jZSBpcyBlbXB0eSwgaXQgcmV0dXJucyB0aGUgZGVmYXVsdCB2YWx1ZS5cbiAqIFRoZSBkZWZhdWx0IHZhbHVlIGlzIHByb3ZpZGVkIGJ5IGEgcGFyYW1ldGVyIG9yIGlzIHVuZGVmaW5lZC5cbiAqXG4gKiAoTm90ZSB0aGF0IGluIEphdmFTY3JpcHQsIHVubGlrZSBDIywgdGhlcmUncyBubyB3YXkgdG8ga25vdyB3aGF0IHR5cGUgYSBzZXF1ZW5jZSBpcyBzdXBwb3NlZCB0byBoYXZlLCBlc3BlY2lhbGx5IG5vdCBhbiBlbXB0eSBzZXF1ZW5jZS4pXG4gKlxuICogSW4gSmF2YVNjcmlwdCwgaWYgeW91IGNhbGwgdGhlIG1ldGhvZCB3aXRoIGEgc2luZ2xlIHBhcmFtZXRlciBhbmQgd2FudCBpdCB0byBiZSB0aGUgZGVmYXVsdCwgdGhlcmUncyBubyBjbGVhbiB3YXkgdG8gaW5kaWNhdGUgdGhhdCB0aGlzXG4gKiBpcyB3aGF0IHlvdSB3YW50LCBiZWNhdXNlIGl0IGJyZWFrcyB0aGUgY2FzZSB3aGVyZSB5b3UgcGFzcyBhIGZpbHRlciBjb25kaXRpb24uIEEgc2luZ2xlIHByZWRpY2F0ZSBjb3VsZCBiZSBhIGZpbHRlciBjb25kaXRpb24gb3IgaXRcbiAqIGNvdWxkIGJlIHRoZSBkZWZhdWx0IGZvciBhbiBhcnJheSBvZiBwcmVkaWNhdGVzIC4uLiB5b3UgZG9uJ3Qga25vdy4gVGhlcmVmb3JlLCBpZiB5b3Ugd2FudCB0byBwYXNzIG9ubHkgYSBkZWZhdWx0IHZhbHVlLCBjYWxsIGxpa2VcbiAqIHRoaXM6IHNpbmdsZU9yRGVmYXVsdF9xXyh7IGRlZmF1bHRWYWx1ZTogXCJOT1QgRk9VTkRcIiB9KVxuICovXG5mdW5jdGlvbiBzaW5nbGVPckRlZmF1bHQobWF0Y2hGdW5jdGlvbiwgZGVmYXVsdFZhbHVlKSB7XG4gICAgbGV0IHRlc3RlcjtcbiAgICBpZiAobWF0Y2hGdW5jdGlvbiAmJiB0eXBlb2YgbWF0Y2hGdW5jdGlvbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHRlc3RlciA9IG1hdGNoRnVuY3Rpb247XG4gICAgfVxuICAgIGxldCBkZWY7XG4gICAgaWYgKG1hdGNoRnVuY3Rpb24gJiYgXCJkZWZhdWx0VmFsdWVcIiBpbiBtYXRjaEZ1bmN0aW9uKSB7XG4gICAgICAgIGRlZiA9IG1hdGNoRnVuY3Rpb24uZGVmYXVsdFZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZGVmID0gZGVmYXVsdFZhbHVlO1xuICAgIH1cbiAgICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgICBsZXQgZm91bmRJdGVtO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzKSB7XG4gICAgICAgIGlmICghdGVzdGVyKSB7XG4gICAgICAgICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTZXF1ZW5jZSBjb250YWlucyBtb3JlIHRoYW4gb25lIGVsZW1lbnQuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgZm91bmRJdGVtID0gaXRlbTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0ZXN0ZXIoaXRlbSkpIHtcbiAgICAgICAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNlcXVlbmNlIGNvbnRhaW5zIG1vcmUgdGhhbiBvbmUgZWxlbWVudC5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICBmb3VuZEl0ZW0gPSBpdGVtO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChmb3VuZCkge1xuICAgICAgICByZXR1cm4gZm91bmRJdGVtO1xuICAgIH1cbiAgICByZXR1cm4gZGVmO1xufVxuZXhwb3J0cy5zaW5nbGVPckRlZmF1bHQgPSBzaW5nbGVPckRlZmF1bHQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogc2tpcF9xXzogQnlwYXNzZXMgYSBzcGVjaWZpZWQgbnVtYmVyIG9mIGVsZW1lbnRzIGluIGEgc2VxdWVuY2UgYW5kIHRoZW4gcmV0dXJucyB0aGUgcmVtYWluaW5nIGVsZW1lbnRzXG4gKi9cbmZ1bmN0aW9uIHNraXAoY291bnQpIHtcbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfc2tpcChkYXRhKSB7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICBpZiAoY291bnQgPD0gMCkge1xuICAgICAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnNraXAgPSBza2lwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIHNraXBMYXN0X3FfOiBSZXR1cm5zIGEgbmV3IGVudW1lcmFibGUgY29sbGVjdGlvbiB0aGF0IGNvbnRhaW5zIHRoZSBlbGVtZW50cyBmcm9tIHNvdXJjZSB3aXRoIHRoZSBsYXN0IGNvdW50IGVsZW1lbnRzIG9mIHRoZSBzb3VyY2UgY29sbGVjdGlvbiBvbWl0dGVkXG4gKi9cbmZ1bmN0aW9uIHNraXBMYXN0KGNvdW50KSB7XG4gICAgLy8gVGhpcyBpcyBhbm90aGVyIG9uZSB3aGljaCBpcyB0ZWNobmljYWxseSBkZWZlcnJlZCBleGVjdXRpb24sIGJ1dCB0aGVyZSdzIG5vIHdheSB0byBza2lwIHRoZSBsYXN0IG4gaXRlbXNcbiAgICAvLyBpZiB5b3UgZG9uJ3QgY291bnQgdGhlIGxpc3QuXG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX3NraXBMYXN0KGRhdGEpIHtcbiAgICAgICAgbGV0IHRvUmV0dXJuO1xuICAgICAgICBpZiAoY291bnQgPD0gMCkge1xuICAgICAgICAgICAgdG9SZXR1cm4gPSBkYXRhO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdG9SZXR1cm4gPSBbLi4uZGF0YV0uc2xpY2UoMCwgLTEgKiBjb3VudCk7XG4gICAgICAgIH1cbiAgICAgICAgeWllbGQqIHRvUmV0dXJuO1xuICAgIH0pO1xufVxuZXhwb3J0cy5za2lwTGFzdCA9IHNraXBMYXN0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIHNraXBXaGlsZV9xXzogQnlwYXNzZXMgZWxlbWVudHMgaW4gYSBzZXF1ZW5jZSBhcyBsb25nIGFzIGEgc3BlY2lmaWVkIGNvbmRpdGlvbiBpcyB0cnVlIGFuZCB0aGVuIHJldHVybnMgdGhlIHJlbWFpbmluZyBlbGVtZW50cy5cbiAqICBvcHRpb25hbGx5LCB0aGUgZmlsdGVyIGZ1bmN0aW9uIGNhbiByZWNlaXZlIHRoZSBpbmRleCBhcyBhIHNlY29uZCBhcmd1bWVudFxuICovXG5mdW5jdGlvbiBza2lwV2hpbGUoZmlsdGVyKSB7XG4gICAgaWYgKCFmaWx0ZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX3NraXBXaGlsZShkYXRhKSB7XG4gICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIGxldCB0cmlnZ2VyZWQgPSBmYWxzZTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIC8vIFdoZW5ldmVyIHRoZSBmaWx0ZXIgZ29lcyBmYWxzZSwgdHJpZ2dlcmVkIG5lZWRzIHRvIGdvIHRydWUsIGFuZCBpdCBoYXMgdG8gYmUgc3RpY2t5XG4gICAgICAgICAgICB0cmlnZ2VyZWQgPSB0cmlnZ2VyZWQgfHwgIWZpbHRlcihpdGVtLCBpbmRleCsrKTtcbiAgICAgICAgICAgIGlmICh0cmlnZ2VyZWQpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnNraXBXaGlsZSA9IHNraXBXaGlsZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBzdGVwX3FfOiByZXR1cm5zIGV2ZXJ5IFwic3RlcFwiIGl0ZW1zIGZyb20gYSBzZXF1ZW5jZVxuICpcbiAqIFRoaXMgaXMgYSBuZXcgaXRlbSB0aGF0IEkgYWRkZWQgYmVjYXVzZSBJIHRob3VnaHQgaXQgbWlnaHQgYmUgdXNlZnVsLlxuICovXG5mdW5jdGlvbiBzdGVwKHN0ZXBDb3VudCkge1xuICAgIGlmIChzdGVwQ291bnQgPD0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBpbnZhbGlkXCIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfc3RlcChkYXRhKSB7XG4gICAgICAgIGxldCB0bXBTdGVwID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGlmICh0bXBTdGVwID09PSAwKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEhhbmRsZSBzdGVwXG4gICAgICAgICAgICB0bXBTdGVwKys7XG4gICAgICAgICAgICBpZiAodG1wU3RlcCA9PT0gc3RlcENvdW50KSB7XG4gICAgICAgICAgICAgICAgdG1wU3RlcCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuc3RlcCA9IHN0ZXA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogc3VtX3FfOiBDb21wdXRlcyB0aGUgc3VtIG9mIHRoZSBzZXF1ZW5jZSBvZiB2YWx1ZXMgdGhhdCBhcmUgb2J0YWluZWQgYnkgaW52b2tpbmcgYW4gb3B0aW9uYWwgdHJhbnNmb3JtIGZ1bmN0aW9uIG9uIGVhY2ggZWxlbWVudCBvZiB0aGUgc2VxdWVuY2VcbiAqL1xuZnVuY3Rpb24gc3VtKHNlbGVjdEZ1bmN0aW9uKSB7XG4gICAgbGV0IHN1bXZhbCA9IDA7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgaWYgKHNlbGVjdEZ1bmN0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZVRvQWRkID0gK3NlbGVjdEZ1bmN0aW9uKGl0ZW0pO1xuICAgICAgICAgICAgaWYgKGlzTmFOKHZhbHVlVG9BZGQpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2VxdWVuY2UgY29udGFpbnMgaW52YWxpZCBudW1iZXIgYWZ0ZXIgdHJhbnNmb3JtYXRpb25cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdW12YWwgPSBzdW12YWwgKyB2YWx1ZVRvQWRkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBpdGVtICE9PSAnbnVtYmVyJyB8fCBpc05hTihpdGVtKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNlcXVlbmNlIGNvbnRhaW5zIGludmFsaWQgbnVtYmVyXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3VtdmFsID0gc3VtdmFsICsgaXRlbTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3VtdmFsO1xufVxuZXhwb3J0cy5zdW0gPSBzdW07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogdGFrZV9xXzogUmV0dXJucyBhIHNwZWNpZmllZCBudW1iZXIgb2YgY29udGlndW91cyBlbGVtZW50cyBmcm9tIHRoZSBzdGFydCBvZiBhIHNlcXVlbmNlLlxuICogVGhlIHNraXAgcGFyYW1ldGVyIGlzIGEgSlMtc3BlY2lmaWMgbW9kaWZpY2F0aW9uIHRvIGltcGxlbWVudCBSYW5nZSwgd2hpY2ggaXMgYSBDIy1vbmx5IG9iamVjdCAod2l0aCBhbiBvZGQgc3ludGF4KVxuICovXG5mdW5jdGlvbiB0YWtlKGNvdW50LCBza2lwID0gMCkge1xuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF90YWtlKGRhdGEpIHtcbiAgICAgICAgaWYgKHNraXAgPCAwKSB7XG4gICAgICAgICAgICBza2lwID0gMDtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xuICAgICAgICAgICAgaWYgKHNraXAgPiAwKSB7XG4gICAgICAgICAgICAgICAgc2tpcC0tO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50IDw9IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy50YWtlID0gdGFrZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiB0YWtlTGFzdF9xXzogUmV0dXJucyBhIG5ldyBlbnVtZXJhYmxlIGNvbGxlY3Rpb24gdGhhdCBjb250YWlucyB0aGUgbGFzdCBjb3VudCBlbGVtZW50cyBmcm9tIHNvdXJjZVxuICovXG5mdW5jdGlvbiB0YWtlTGFzdChjb3VudCkge1xuICAgIC8vIFRoaXMgaXMgYW5vdGhlciBvbmUgd2hpY2ggaXMgdGVjaG5pY2FsbHkgZGVmZXJyZWQgZXhlY3V0aW9uLCBidXQgdGhlcmUncyBubyB3YXkgdG8gdGFrZSB0aGUgbGFzdCBuIGl0ZW1zXG4gICAgLy8gaWYgeW91IGRvbid0IGNvdW50IHRoZSBsaXN0LlxuICAgIHJldHVybiB0aGlzLl9leHRlbmQoZnVuY3Rpb24qIF90YWtlTGFzdChkYXRhKSB7XG4gICAgICAgIGlmIChjb3VudCA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgeWllbGQqIFsuLi5kYXRhXS5zbGljZSgtMSAqIGNvdW50KTtcbiAgICB9KTtcbn1cbmV4cG9ydHMudGFrZUxhc3QgPSB0YWtlTGFzdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiB0YWtlV2hpbGVfcV86IFJldHVybnMgZWxlbWVudHMgZnJvbSBhIHNlcXVlbmNlIGFzIGxvbmcgYXMgYSBzcGVjaWZpZWQgY29uZGl0aW9uIGlzIHRydWUuXG4gKiBPcHRpb25hbGx5LCB0aGUgZmlsdGVyIGZ1bmN0aW9uIGNhbiByZWNlaXZlIHRoZSBpbmRleCBhcyBhIHNlY29uZCBhcmd1bWVudFxuICovXG5mdW5jdGlvbiB0YWtlV2hpbGUoZmlsdGVyKSB7XG4gICAgaWYgKCFmaWx0ZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZChmdW5jdGlvbiogX3Rha2VXaGlsZShkYXRhKSB7XG4gICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIGxldCB0cmlnZ2VyZWQgPSBmYWxzZTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIC8vIFdoZW5ldmVyIHRoZSBmaWx0ZXIgZ29lcyBmYWxzZSwgdHJpZ2dlcmVkIG5lZWRzIHRvIGdvIHRydWUsIGFuZCBpdCBoYXMgdG8gYmUgc3RpY2t5XG4gICAgICAgICAgICB0cmlnZ2VyZWQgPSB0cmlnZ2VyZWQgfHwgIWZpbHRlcihpdGVtLCBpbmRleCsrKTtcbiAgICAgICAgICAgIGlmICghdHJpZ2dlcmVkKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy50YWtlV2hpbGUgPSB0YWtlV2hpbGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IExvb2t1cF8xID0gcmVxdWlyZShcIi4uL1R5cGVzL0xvb2t1cFwiKTtcbi8qKlxuICogdG9BcnJheV9xXzogUmV0dXJucyBhIGphdmFzY3JpcHQgYXJyYXkgY29udGFpbmluZyB0aGUgc2VxdWVuY2UgdmFsdWVzLlxuICogQWxpYXNlZCB0byB0b0xpc3RfcV8gYXMgd2VsbC5cbiAqL1xuZnVuY3Rpb24gdG9BcnJheSgpIHtcbiAgICByZXR1cm4gWy4uLnRoaXNdO1xufVxuZXhwb3J0cy50b0FycmF5ID0gdG9BcnJheTtcbi8qKlxuICogdG9IYXNoU2V0X3FfOiBSZXR1cm5zIGEgU2V0IGZyb20gYW4gZW51bWVyYWJsZS5cbiAqIFRoZSBDIyBhYmlsaXR5IHRvIHNlbmQgYSBub24tZGVmYXVsdCBlcXVhbGl0eSBjb21wYXJlciBpcyBub3QgaW5jbHVkZWQgYmVjYXVzZSBqYXZhc2NyaXB0IHNldHMgZG8gbm90IGFsbG93IGN1c3RvbSBlcXVhbGl0eS5cbiAqL1xuZnVuY3Rpb24gdG9IYXNoU2V0KCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBTZXQoKTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcykge1xuICAgICAgICByZXN1bHQuYWRkKGl0ZW0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy50b0hhc2hTZXQgPSB0b0hhc2hTZXQ7XG4vKipcbiAqIHRvRGljdGlvbmFyeV9xXzogUmV0dXJucyBhIGphdmFzY3JpcHQgb2JqZWN0IHdpdGggc3RyaW5nIGtleXMgYW5kIHZhbHVlcywgYmFzZWQgb24gYSBrZXlTZWxlY3RvciBmdW5jdGlvbiBhbmQgYW4gb3B0aW9uYWwgZWxlbWVudFxuICogc2VsZWN0b3IgZnVuY3Rpb24uXG4gKlxuICogVGhlIEMjIGFiaWxpdHkgdG8gc2VuZCBhIG5vbi1kZWZhdWx0IGVxdWFsaXR5IGNvbXBhcmVyIGlzIG5vdCBpbmNsdWRlZCBiZWNhdXNlIGphdmFzY3JpcHQgb2JqZWN0cyBkbyBub3QgYWxsb3cgY3VzdG9tIGVxdWFsaXR5LlxuICovXG5mdW5jdGlvbiB0b0RpY3Rpb25hcnkoa2V5U2VsZWN0b3IsIGVsZW1lbnRTZWxlY3Rvcikge1xuICAgIGlmICgha2V5U2VsZWN0b3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgYXJndW1lbnQgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgLy8gSW4gQyMsIHRvRGljdGlvbmFyeSgpIGNhbiBwcm9kdWNlIGRpY3Rpb25hcmllcyB3aXRoIG5vLXN0cmluZyBrZXlzLlxuICAgIC8vIFRoaXMgaXMgaWxsZWdhbCBpbiBqYXZhc2NyaXB0LCBzbyB0b0RpY3Rpb25hcnkoKSBoYXMgdG8gYmUgbGltaXRlZC5cbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcykge1xuICAgICAgICBjb25zdCBrZXkgPSBrZXlTZWxlY3RvcihpdGVtKTtcbiAgICAgICAgaWYgKGtleSBpbiByZXN1bHQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNlcXVlbmNlIGNvbnRhaW5zIGR1cGxpY2F0ZSBrZXlzXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGVtZW50U2VsZWN0b3IpIHtcbiAgICAgICAgICAgIHJlc3VsdFtrZXldID0gZWxlbWVudFNlbGVjdG9yKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gVEVsZW1lbnQgPSBUIGJ1dCB0eXBlc2NyaXB0IGRvZXNuJ3Qga25vdyB0aGF0IGJlY2F1c2Ugd2VhayBvdmVybG9hZHNcbiAgICAgICAgICAgIHJlc3VsdFtrZXldID0gaXRlbTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy50b0RpY3Rpb25hcnkgPSB0b0RpY3Rpb25hcnk7XG4vKipcbiAqIHRvTWFwX3FfOiBSZXR1cm5zIGEgamF2YXNjcmlwdCBNYXAgd2l0aCBzcGVjaWZpZWQga2V5cyBhbmQgdmFsdWVzLCBiYXNlZCBvbiBhIGtleVNlbGVjdG9yIGZ1bmN0aW9uIGFuZCBhbiBvcHRpb25hbCBlbGVtZW50XG4gKiBzZWxlY3RvciBmdW5jdGlvbi5cbiAqXG4gKiBOb3RlIHRoYXQgaW4gZ2VuZXJhbCwgb2JqZWN0cyBkb24ndCBtYWtlIGdvb2QgTWFwIGtleXMuXG4gKlxuICogVGhlIEMjIGFiaWxpdHkgdG8gc2VuZCBhIG5vbi1kZWZhdWx0IGVxdWFsaXR5IGNvbXBhcmVyIGlzIG5vdCBpbmNsdWRlZCBiZWNhdXNlIGphdmFzY3JpcHQgbWFwcyBkbyBub3QgYWxsb3cgY3VzdG9tIGVxdWFsaXR5LlxuICovXG5mdW5jdGlvbiB0b01hcChrZXlTZWxlY3RvciwgZWxlbWVudFNlbGVjdG9yKSB7XG4gICAgaWYgKCFrZXlTZWxlY3Rvcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICAvLyBJbiBDIywgdG9EaWN0aW9uYXJ5KCkgY2FuIHByb2R1Y2UgZGljdGlvbmFyaWVzIHdpdGggbm9uLXN0cmluZyBrZXlzLlxuICAgIC8vIFRoaXMgaXMgaWxsZWdhbCBpbiBqYXZhc2NyaXB0LCBzbyB0b0RpY3Rpb25hcnkoKSBoYXMgdG8gYmUgbGltaXRlZC5cbiAgICAvLyBUb01hcCgpIG1ldGhvZCBjb3ZlcnMgdGhlIGdhcC5cbiAgICBjb25zdCByZXN1bHQgPSBuZXcgTWFwKCk7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgY29uc3Qga2V5ID0ga2V5U2VsZWN0b3IoaXRlbSk7XG4gICAgICAgIGlmIChyZXN1bHQuaGFzKGtleSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNlcXVlbmNlIGNvbnRhaW5zIGR1cGxpY2F0ZSBrZXlzXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGVtZW50U2VsZWN0b3IpIHtcbiAgICAgICAgICAgIHJlc3VsdC5zZXQoa2V5LCBlbGVtZW50U2VsZWN0b3IoaXRlbSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gVEVsZW1lbnQgPSBUIGJ1dCB0eXBlc2NyaXB0IGRvZXNuJ3Qga25vdyB0aGF0IGJlY2F1c2Ugd2VhayBvdmVybG9hZHNcbiAgICAgICAgICAgIHJlc3VsdC5zZXQoa2V5LCBpdGVtKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy50b01hcCA9IHRvTWFwO1xuLyoqXG4gKiB0b0xvb2t1cF9xXzogUmV0dXJucyBhIExvb2t1cCAoY3VzdG9tIGNsYXNzKSBNYXAgd2l0aCBzcGVjaWZpZWQga2V5cyBhbmQgdmFsdWVzLCBiYXNlZCBvbiBhIGtleVNlbGVjdG9yIGZ1bmN0aW9uIGFuZCBhbiBvcHRpb25hbCBlbGVtZW50XG4gKiBzZWxlY3RvciBmdW5jdGlvbi4gQSBMb29rdXAgaXMgbGlrZSBhIE1hcCBleGNlcHQgaXQgYWxsb3dzIG11bHRpcGxlIHZhbHVlcyB0byBiZSBzZXQgZm9yIGEgZ2l2ZW4ga2V5LlxuICpcbiAqIFRoZSBDIyBhYmlsaXR5IHRvIHNlbmQgYSBub24tZGVmYXVsdCBlcXVhbGl0eSBjb21wYXJlciBpcyBub3QgaW5jbHVkZWQgYmVjYXVzZSBqYXZhc2NyaXB0IG1hcHMgZG8gbm90IGFsbG93IGN1c3RvbSBlcXVhbGl0eS4gQmVoaW5kIHRoZVxuICogc2NlbmVzLCB0aGlzIGlzIHRpbGwgdXNpbmcgYSBtYXAuXG4gKlxuICogTm90ZSB0aGF0IGluIGdlbmVyYWwsIG9iamVjdHMgZG9uJ3QgbWFrZSBnb29kIE1hcCBrZXlzLlxuICovXG5mdW5jdGlvbiB0b0xvb2t1cChrZXlTZWxlY3RvciwgZWxlbWVudFNlbGVjdG9yKSB7XG4gICAgaWYgKCFrZXlTZWxlY3Rvcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSBuZXcgTG9va3VwXzEuTG9va3VwKCk7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMpIHtcbiAgICAgICAgY29uc3Qga2V5ID0ga2V5U2VsZWN0b3IoaXRlbSk7XG4gICAgICAgIGlmIChlbGVtZW50U2VsZWN0b3IpIHtcbiAgICAgICAgICAgIHJlc3VsdC5zZXQoa2V5LCBlbGVtZW50U2VsZWN0b3IoaXRlbSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gVEVsZW1lbnQgPSBUIGJ1dCB0eXBlc2NyaXB0IGRvZXNuJ3Qga25vdyB0aGF0IGJlY2F1c2Ugd2VhayBvdmVybG9hZHNcbiAgICAgICAgICAgIHJlc3VsdC5zZXQoa2V5LCBpdGVtKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy50b0xvb2t1cCA9IHRvTG9va3VwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBJRXF1YWxpdHlDb21wYXJlcl8xID0gcmVxdWlyZShcIi4uL1R5cGVzL0lFcXVhbGl0eUNvbXBhcmVyXCIpO1xuLyoqXG4gKiB1bmlvbl9xXzogY29uY2F0ZW5hdGVzIHR3byBzZXF1ZW5jZXMgcmV0dXJuaW5nIHRoZSBzZXQgc2VxdWVuY2UuXG4gKiBvcHRpb25hbCBlcXVhbGl0eSBjb21wYXJlciBjYW4gYmUgc3VwcGxpZWQgdG8gY29tcGFyZSB2YWx1ZXNcbiAqL1xuZnVuY3Rpb24gdW5pb24oc2Vjb25kLCBjb21wYXJlcikge1xuICAgIGlmICghc2Vjb25kKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIGNvbnN0IGNvbXBhcmUgPSBJRXF1YWxpdHlDb21wYXJlcl8xLmV4dHJhY3RFcXVhbGl0eUNvbXBhcmVyKGNvbXBhcmVyKTtcbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfdW5pb24oZGF0YSkge1xuICAgICAgICAvLyBObyB3YXkgYXJvdW5kIHRoaXMsIGJ1dCB3ZSBuZWVkIHRvIGtlZXAgYSBoaXN0b3J5IG9mIGV2ZXJ5IGl0ZW0gcmV0dXJuZWQuIEJvdGggdGhlIGZpcnN0IGFuZCBzZWNvbmQgbGlzdHMuXG4gICAgICAgIGNvbnN0IGhpc3RvcnkgPSBuZXcgU2V0KCk7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICBpZiAoY29tcGFyZSkge1xuICAgICAgICAgICAgICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaW5uZXJJdGVtIG9mIGhpc3RvcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBhcmUoaXRlbSwgaW5uZXJJdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFmb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LmFkZChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIWhpc3RvcnkuaGFzKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpc3RvcnkuYWRkKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBhIGxpdHRsZSBiaXQgb2YgY29weXBhc3RhIGhlcmUgYnV0IGl0J3Mgbm90IHdvcnRoIG1ha2luZyBhIHN1Yi1mdW5jdGlvbiBmb3IgYSBzaW5nbGUgb2NjdXJyZW5jZVxuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygc2Vjb25kKSB7XG4gICAgICAgICAgICBpZiAoY29tcGFyZSkge1xuICAgICAgICAgICAgICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaW5uZXJJdGVtIG9mIGhpc3RvcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBhcmUoaXRlbSwgaW5uZXJJdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFmb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LmFkZChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIWhpc3RvcnkuaGFzKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpc3RvcnkuYWRkKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy51bmlvbiA9IHVuaW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBJRXF1YWxpdHlDb21wYXJlcl8xID0gcmVxdWlyZShcIi4uL1R5cGVzL0lFcXVhbGl0eUNvbXBhcmVyXCIpO1xuLyoqXG4gKiB1bmlvbl9xXzogY29uY2F0ZW5hdGVzIHR3byBzZXF1ZW5jZXMgcmV0dXJuaW5nIHRoZSBzZXQgc2VxdWVuY2UgIGJhc2VkIG9uIGtleXMgcmV0dXJuZWQgYnkgYSBrZXkgc2VsZWN0b3IgZnVuY3Rpb24uXG4gKiBvcHRpb25hbCBlcXVhbGl0eSBjb21wYXJlciBjYW4gYmUgc3VwcGxpZWQgdG8gY29tcGFyZSB2YWx1ZXNcbiAqL1xuZnVuY3Rpb24gdW5pb25CeShzZWNvbmQsIGtleVNlbGVjdG9yLCBjb21wYXJlcikge1xuICAgIGlmICghc2Vjb25kKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmVkIGFyZ3VtZW50IGlzIG51bGxcIik7XG4gICAgfVxuICAgIGNvbnN0IGNvbXBhcmUgPSBJRXF1YWxpdHlDb21wYXJlcl8xLmV4dHJhY3RFcXVhbGl0eUNvbXBhcmVyKGNvbXBhcmVyKTtcbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfdW5pb25CeShkYXRhKSB7XG4gICAgICAgIC8vIE5vIHdheSBhcm91bmQgdGhpcywgYnV0IHdlIG5lZWQgdG8ga2VlcCBhIGhpc3Rvcnkgb2YgZXZlcnkgaXRlbSByZXR1cm5lZC4gQm90aCB0aGUgZmlyc3QgYW5kIHNlY29uZCBsaXN0cy5cbiAgICAgICAgY29uc3QgaGlzdG9yeSA9IG5ldyBTZXQoKTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGtleVNlbGVjdG9yKGl0ZW0pO1xuICAgICAgICAgICAgaWYgKGNvbXBhcmUpIHtcbiAgICAgICAgICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGlubmVySXRlbSBvZiBoaXN0b3J5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21wYXJlKGtleSwgaW5uZXJJdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFmb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LmFkZChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghaGlzdG9yeS5oYXMoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LmFkZChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBpdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBhIGxpdHRsZSBiaXQgb2YgY29weXBhc3RhIGhlcmUgYnV0IGl0J3Mgbm90IHdvcnRoIG1ha2luZyBhIHN1Yi1mdW5jdGlvbiBmb3IgYSBzaW5nbGUgb2NjdXJyZW5jZVxuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygc2Vjb25kKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBrZXlTZWxlY3RvcihpdGVtKTtcbiAgICAgICAgICAgIGlmIChjb21wYXJlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBpbm5lckl0ZW0gb2YgaGlzdG9yeSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGFyZShrZXksIGlubmVySXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5hZGQoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIWhpc3RvcnkuaGFzKGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5hZGQoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMudW5pb25CeSA9IHVuaW9uQnk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogd2hlcmVfcV86IEZpbHRlcnMgYSBzZXF1ZW5jZSBvZiB2YWx1ZXMgYmFzZWQgb24gYSBwcmVkaWNhdGUuXG4gKiBPcHRpb25hbGx5LCB0aGUgZmlsdGVyIGZ1bmN0aW9uIGNhbiByZWNlaXZlIHRoZSBpbmRleCBhcyBhIHNlY29uZCBhcmd1bWVudFxuICovXG5mdW5jdGlvbiB3aGVyZShmaWx0ZXIpIHtcbiAgICBpZiAoIWZpbHRlcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfd2hlcmUoZGF0YSkge1xuICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xuICAgICAgICAgICAgaWYgKGZpbHRlcihpdGVtLCBpbmRleCsrKSkge1xuICAgICAgICAgICAgICAgIHlpZWxkIGl0ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMud2hlcmUgPSB3aGVyZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiB6aXBfcV86IFByb2R1Y2VzIGEgc2VxdWVuY2Ugb2YgdHVwbGVzIHdpdGggZWxlbWVudHMgZnJvbSB0d28gb3IgdGhyZWUgc3BlY2lmaWVkIHNlcXVlbmNlcy5cbiAqIEluIHBsYWNlIG9mIGEgdGhpcmQgc2VxdWVuY2UsIGEgZnVuY3Rpb24gY2FuIGJlIHByb3ZpZGVkIHRoYXQgY29tYmluZXMgdGhlIGZpcnN0IHR3by5cbiAqL1xuZnVuY3Rpb24gemlwKHNlY29uZCwgdGhpcmQpIHtcbiAgICBpZiAoIXNlY29uZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBhcmd1bWVudCBpcyBudWxsXCIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kKGZ1bmN0aW9uKiBfemlwKGRhdGEpIHtcbiAgICAgICAgY29uc3QgaXRlcjIgPSBzZWNvbmRbU3ltYm9sLml0ZXJhdG9yXSgpO1xuICAgICAgICBsZXQgaXRlcjM7XG4gICAgICAgIGxldCBmdW5jMztcbiAgICAgICAgbGV0IGRvbmUzID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlyZCAmJiB0eXBlb2YgdGhpcmQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgZnVuYzMgPSB0aGlyZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlyZCkge1xuICAgICAgICAgICAgaXRlcjMgPSB0aGlyZFtTeW1ib2wuaXRlcmF0b3JdKCk7XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbDEgPSBkYXRhLm5leHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHZhbDIgPSBpdGVyMi5uZXh0KCk7XG4gICAgICAgICAgICBsZXQgdmFsMztcbiAgICAgICAgICAgIGlmIChpdGVyMykge1xuICAgICAgICAgICAgICAgIHZhbDMgPSBpdGVyMy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgZG9uZTMgPSB2YWwzLmRvbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBcyBzb29uIGFzIGFueSBvZiB0aGUgc2VxdWVuY2VzIHJ1bnMgb3V0IG9mIGRhdGEsIHdlIGhhbHQuXG4gICAgICAgICAgICBpZiAodmFsMS5kb25lIHx8IHZhbDIuZG9uZSB8fCBkb25lMykge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGl0ZXIzICYmIHZhbDMpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBbdmFsMS52YWx1ZSwgdmFsMi52YWx1ZSwgdmFsMy52YWx1ZV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChmdW5jMykge1xuICAgICAgICAgICAgICAgIHlpZWxkIFt2YWwxLnZhbHVlLCB2YWwyLnZhbHVlLCBmdW5jMyh2YWwxLnZhbHVlLCB2YWwyLnZhbHVlKV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBbdmFsMS52YWx1ZSwgdmFsMi52YWx1ZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuemlwID0gemlwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBHcm91cGluZyB7XG4gICAgY29uc3RydWN0b3Ioa2V5LCB2YWx1ZSwgZWxlbWVudFNlbGVjdEZ1bmN0aW9uKSB7XG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xuICAgICAgICB0aGlzLl92YWx1ZXMgPSBbdmFsdWVdO1xuICAgICAgICBpZiAoZWxlbWVudFNlbGVjdEZ1bmN0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RvciA9IGVsZW1lbnRTZWxlY3RGdW5jdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdG9yID0gayA9PiBrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCB2YWx1ZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZXMubWFwKHYgPT4gdGhpcy5fc2VsZWN0b3IodikpO1xuICAgIH1cbiAgICBnZXQgW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZXMubWFwKHYgPT4gdGhpcy5fc2VsZWN0b3IodikpO1xuICAgIH1cbiAgICBhZGQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fdmFsdWVzLnB1c2godmFsdWUpO1xuICAgIH1cbiAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlcztcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlcy50b1N0cmluZygpO1xuICAgIH1cbn1cbmV4cG9ydHMuR3JvdXBpbmcgPSBHcm91cGluZztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gZXh0cmFjdENvbXBhcmVyKG9iaikge1xuICAgIGlmICghb2JqKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvYmogPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cbiAgICBpZiAoXCJjb21wYXJlXCIgaW4gb2JqKSB7XG4gICAgICAgIHJldHVybiBvYmouY29tcGFyZTtcbiAgICB9XG59XG5leHBvcnRzLmV4dHJhY3RDb21wYXJlciA9IGV4dHJhY3RDb21wYXJlcjtcbmZ1bmN0aW9uIGRlZmF1bHRDb21wYXJlcih4LCB5KSB7XG4gICAgaWYgKHggPiB5KSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICBpZiAoeCA8IHkpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbn1cbmV4cG9ydHMuZGVmYXVsdENvbXBhcmVyID0gZGVmYXVsdENvbXBhcmVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBleHRyYWN0RXF1YWxpdHlDb21wYXJlcihvYmopIHtcbiAgICBpZiAoIW9iaikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb2JqID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG4gICAgaWYgKFwiZXF1YWxzXCIgaW4gb2JqKSB7XG4gICAgICAgIHJldHVybiBvYmouZXF1YWxzO1xuICAgIH1cbn1cbmV4cG9ydHMuZXh0cmFjdEVxdWFsaXR5Q29tcGFyZXIgPSBleHRyYWN0RXF1YWxpdHlDb21wYXJlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBBIGxvb2t1cCBpcyBhIE1hcCB0aGF0IGFsbG93cyBtdWx0aXBsZSB2YWx1ZXMgZm9yIGVhY2gga2V5LiBUaGVyZSBpcyBubyBidWlsdC1pbiBKYXZhc2NyaXB0IGFuYWxvZ3VlLlxuICovXG5jbGFzcyBMb29rdXAge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9kYXRhID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICBnZXQgc2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGEuc2l6ZTtcbiAgICB9XG4gICAgW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhW1N5bWJvbC5pdGVyYXRvcl0oKTtcbiAgICB9XG4gICAgZW50cmllcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGEuZW50cmllcygpO1xuICAgIH1cbiAgICBrZXlzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YS5rZXlzKCk7XG4gICAgfVxuICAgIHZhbHVlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGEudmFsdWVzKCk7XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLl9kYXRhLmNsZWFyKCk7XG4gICAgfVxuICAgIGRlbGV0ZShrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGEuZGVsZXRlKGtleSk7XG4gICAgfVxuICAgIGZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZykge1xuICAgICAgICB0aGlzLl9kYXRhLmZvckVhY2goY2FsbGJhY2tmbik7XG4gICAgfVxuICAgIGdldChrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGEuZ2V0KGtleSk7XG4gICAgfVxuICAgIGhhcyhrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGEuaGFzKGtleSk7XG4gICAgfVxuICAgIHNldChrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLl9kYXRhLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5fZGF0YS5nZXQoa2V5KTtcbiAgICAgICAgICAgIGl0ZW0ucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9kYXRhLnNldChrZXksIFt2YWx1ZV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICAgIH1cbn1cbmV4cG9ydHMuTG9va3VwID0gTG9va3VwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBpc05vbmUodGVzdCkge1xuICAgIHJldHVybiAodGVzdCA9PSBudWxsIHx8IHRlc3QgPT09IHVuZGVmaW5lZCk7XG59XG5leHBvcnRzLmlzTm9uZSA9IGlzTm9uZTtcbiJdfQ==
