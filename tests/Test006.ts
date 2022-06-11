import { TestCaseViewModel } from './TestCaseViewModel';
import { assert } from './assert';
import { TestCaseView } from './TestCaseView';

class TestViewModel extends TestCaseViewModel {
    constructor() {
        super({
            name: 'Multi-Sequence Queries',
            descriptionHtml: `<p>These functions, which include inner joins, outer joins, concatenation, and semi-joins, compare and/or combine multiple iterables.</p>`
        });
    }
}

// tslint:disable-next-line:max-classes-per-file
export class Test006 extends TestCaseView {
    constructor() {
        super(new TestViewModel());
    }

    testCase() {
        try {
            // Do your testing here

            this.log(`To be equal two sequences need to be the same length and have the same items in the same order.`);
            this.log('');
            this.log(`[1, 2, 3].sequenceEqual_q_([2, 3]) // different lengths`);
            const test01 = [1, 2, 3].sequenceEqual_q_([2, 3]);
            this.log(test01, true);
            assert(!test01, "SequenceEqual tests length 1");

            this.log(`[1, 3].sequenceEqual_q_([2, 3, 1]) // different lengths`);
            const test02 = [1, 3].sequenceEqual_q_([2, 3, 1]);
            this.log(test02, true);
            assert(!test02, "SequenceEqual tests length 2");

            this.log(`[1, 2, 3].sequenceEqual_q_([2, 3, 1]) // order matters`);
            const test03 = [1, 2, 3].sequenceEqual_q_([2, 3, 1]);
            this.log(test03, true);
            assert(!test03, "SequenceEqual tests items");

            this.log(`[1, 2, 3].sequenceEqual_q_([1, 2, 3]) // this is good`);
            const test04 = [1, 2, 3].sequenceEqual_q_([1, 2, 3]);
            this.log(test04, true);
            assert(test04, "SequenceEqual matches items and length");

            this.log(`[1, 2, 3].sequenceEqual_q_([-2, -3], (x, y) => Math.abs(x) === Math.abs(y)) // with a custom equality comparer`);
            const test05 = [1, 2, 3].sequenceEqual_q_([-2, -3], (x, y) => Math.abs(x) === Math.abs(y));
            this.log(test05, true);
            assert(!test05, 'SequenceEqual with custom comparer tests length 1');

            this.log(`[1, 3].sequenceEqual_q_([-2, -3, -1], (x, y) => Math.abs(x) === Math.abs(y)) // with a custom equality comparer`);
            const test06 = [1, 3].sequenceEqual_q_([-2, -3, -1], (x, y) => Math.abs(x) === Math.abs(y));
            this.log(test06, true);
            assert(!test06, 'SequenceEqual with custom comparer tests length 2');

            // should be false
            this.log(`[1, 2, 3].sequenceEqual_q_([-2, -3, -1], (x, y) => Math.abs(x) === Math.abs(y)) // with a custom equality comparer`);
            const test07 = [1, 2, 3].sequenceEqual_q_([-2, -3, -1], (x, y) => Math.abs(x) === Math.abs(y));
            this.log(test07, true);
            assert(!test07, 'SequenceEqual with custom comparer tests items');

            // should be true
            this.log(`[1, 2, 3].sequenceEqual_q_([-1, -2, -3], (x, y) => Math.abs(x) === Math.abs(y)) // with a custom equality comparer`);
            const test08 = [1, 2, 3].sequenceEqual_q_([-1, -2, -3], (x, y) => Math.abs(x) === Math.abs(y));
            this.log(test08, true);
            assert(test08, 'SequenceEqual with custom comparer to equate absolute values');

            this.log(`[1, 2].concat_q_([3, 4]) // 1,2,3,4`);
            const test09 = [1, 2].concat_q_([3, 4]).toArray_q_();
            this.log(test09, true);
            assert(test09.sequenceEqual_q_([1, 2, 3, 4]), "Concat concatenates sequences");

            this.log(`[1, 2, 3, 3, 4, 2].union_q_([2, 3, 4, 5, 6, 6]) // 1,2,3,4,5,6 (concatenates and dedupes)`);
            const test10 = [1, 2, 3, 3, 4, 2].union_q_([2, 3, 4, 5, 6, 6]).toArray_q_();
            this.log(test10, true);
            assert(test10.sequenceEqual_q_([1, 2, 3, 4, 5, 6]), "Union concatenates and removes duplicates");

            this.log(`[1, 2, 3, 3, 4, 2].union_q_([2, 3, 4, 5, 6, 6], (x, y) => x % 2 === y % 2) // custom even/odd comparer`);
            const test11 = [1, 2, 3, 3, 4, 2].union_q_([2, 3, 4, 5, 6, 6], (x, y) => x % 2 === y % 2).toArray_q_();
            this.log(test11, true);
            assert(test11.sequenceEqual_q_([1, 2]), 'union with custom comparer to match evens/odds');

            this.log(`[{ x: 1 }, { x: 2 }, { x: 3 }, { x: 3 }, { x: 4 }, { x: 2 }].unionBy_q_([{ x: 2 }, { x: 3 }, { x: 4 }, { x: 5 }, { x: 6 }, { x: 6 }], q => q.x) // does a union on keys returned by key selector function, returning the items`);
            const test12 = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 3 }, { x: 4 }, { x: 2 }].unionBy_q_([{ x: 2 }, { x: 3 }, { x: 4 }, { x: 5 }, { x: 6 }, { x: 6 }], q => q.x).toArray_q_();
            this.log(test12, true);
            assert(JSON.stringify(test12) === `[{"x":1},{"x":2},{"x":3},{"x":4},{"x":5},{"x":6}]`, "unionBy returns one item for each unique key");

            this.log(`[{ x: 1 }, { x: 2 }, { x: 3 }, { x: 3 }, { x: 4 }, { x: 2 }].unionBy_q_([{ x: 2 }, { x: 3 }, { x: 4 }, { x: 5 }, { x: 6 }, { x: 6 }], q => q.x, (x, y) => x % 2 === y % 2) // custom even/odd comparer`);
            const test13 = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 3 }, { x: 4 }, { x: 2 }].unionBy_q_([{ x: 2 }, { x: 3 }, { x: 4 }, { x: 5 }, { x: 6 }, { x: 6 }], q => q.x, (x, y) => x % 2 === y % 2).toArray_q_();
            this.log(test13, true);
            assert(test13.length === 2 && test13[0].x === 1 && test13[1].x === 2, "UnionBy with custom comparer to match evens/odds");

            this.log(`['A', 'A', 'C', 'Q', 'B', 'D', 'X'].intersect_q_(['W', 'A', 'C', 'B', 'M']) // deduped records that are in both sequences`);
            const test14 = ['A', 'A', 'C', 'Q', 'B', 'D', 'X'].intersect_q_(['W', 'A', 'C', 'B', 'M']).toArray_q_();
            this.log(test14, true);
            assert(test14.sequenceEqual_q_(["A", "C", "B"]), "Intersection returns set result of items in 2 sequences");

            this.log(`['Apple', 'Artichoke', 'Canteloupe', 'Quince', 'Banana', 'Date', 'Xigua'].intersect_q_(['Watermelon', 'Avocado', 'Cucumber', 'Berry', 'Mango', 'b-wrong']) // can take a custom equality`);
            const test14a = ['Apple', 'Artichoke', 'Canteloupe', 'Quince', 'Banana', 'Date', 'Xigua'].intersect_q_(['Watermelon', 'Avocado', 'Cucumber', 'Berry', 'Mango', 'b-wrong'], (l, r) => l[0] === r[0]).toArray_q_();
            this.log(test14a, true);
            assert(test14a.sequenceEqual_q_(["Apple", "Canteloupe", "Banana"]), "Intersection with custom equality");

            // redundant with the previous but it's in .net 6
            this.log(`['Apple', 'Artichoke', 'Canteloupe', 'Quince', 'Banana', 'Date', 'Xigua'].intersectBy_q_(['Watermelon', 'Avocado', 'Cucumber', 'Berry', 'Mango', 'b-wrong'], q => q[0]) // find deduped keys that are in both sequences and return first item for each`);
            const test15 = ['Apple', 'Artichoke', 'Canteloupe', 'Quince', 'Banana', 'Date', 'Xigua'].intersectBy_q_(['Watermelon', 'Avocado', 'Cucumber', 'Berry', 'Mango', 'b-wrong'], q => q[0]).toArray_q_();
            this.log(test15, true);
            assert(test15.sequenceEqual_q_(["Apple", "Canteloupe", "Banana"]), "intersectBy returns intersection by key selected");

            this.log(`['Apple', 'Artichoke', 'Canteloupe', 'Quince', 'Banana', 'Date', 'Xigua'].intersectBy_q_(['watermelon', 'avocado', 'cucumber', 'Berry', 'mango'], q => q[0], (x, y) => x.toLowerCase() === y.toLowerCase()) // custom equality comparer`);
            const test16 = ['Apple', 'Artichoke', 'Canteloupe', 'Quince', 'Banana', 'Date', 'Xigua'].intersectBy_q_(['watermelon', 'avocado', 'cucumber', 'Berry', 'mango'], q => q[0], (x, y) => x.toLowerCase() === y.toLowerCase()).toArray_q_();
            this.log(test16, true);
            assert(test16.sequenceEqual_q_(["Apple", "Canteloupe", "Banana"]));

            this.log(`[2.0, 2.0, 2.1, 2.2, 2.3, 2.4, 2.5].except_q_([2.2]) // deduped items from first not in second`);
            const test17 = [2.0, 2.0, 2.1, 2.2, 2.3, 2.4, 2.5].except_q_([2.2]).toArray_q_();
            this.log(test17, true);
            assert(test17.sequenceEqual_q_([2, 2.1, 2.3, 2.4, 2.5]), 'Except removes items from second sequence');

            this.log(`[{ a: 2.0 }, { a: 2.0 }, { a: 2.1 }, { a: 2.2 }, { a: 2.3 }, { a: 2.4 }, { a: 2.5 }].except_q_([{ a: 2.2 }], (q, r) => q.a === r.a) // custom equality comparer`);
            const test18 = [{ a: 2.0 }, { a: 2.0 }, { a: 2.1 }, { a: 2.2 }, { a: 2.3 }, { a: 2.4 }, { a: 2.5 }].except_q_([{ a: 2.2 }],
                (q, r) => q.a === r.a)
                .toArray_q_();
            this.log(test18, true);
            assert(test18.map(m => m.a).sequenceEqual_q_([2, 2.1, 2.3, 2.4, 2.5]), 'Except with custom equality');

            this.log(`[{ a: 2.0 }, { a: 2.0 }, { a: 2.1 }, { a: 2.2 }, { a: 2.3 }, { a: 2.4 }, { a: 2.5 }].exceptBy_q_([{ a: 2.2 }], q => q.a) // exceptBy returns exception by key selector`);
            const test19 = [{ a: 2.0 }, { a: 2.0 }, { a: 2.1 }, { a: 2.2 }, { a: 2.3 }, { a: 2.4 }, { a: 2.5 }].exceptBy_q_([{ a: 2.2 }],
                q => q.a).toArray_q_();
            this.log(test19, true);
            assert(test19.map(m => m.a).sequenceEqual_q_([2, 2.1, 2.3, 2.4, 2.5]), 'ExceptBy uses key selector');

            this.log(`[{ a: 1 }, { a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 5 }].exceptBy_q_([{ a: 2 }],
                q => q.a, (q, r) => q % 2 === r % 2) // custom equality to make all evens and all odds look the same`);
            const test20 = [{ a: 1 }, { a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 5 }].exceptBy_q_([{ a: 2 }],
                q => q.a,
                (q, r) => q % 2 === r % 2)
                .toArray_q_();
            this.log(test20, true);
            assert(test20.map(m => m.a).sequenceEqual_q_([1]), 'ExceptBy with custom equality');

            this.log("Anyone with SQL experience should know what an Inner Join is.");
            this.log("An inner join matches every item in the first sequence with every item in the second sequence by matching keys, and returns those records where the key match is true, both in the same row");
            this.log("The LINQ join requires you to send two sequences, a key selector for sequence 1, a key selector for sequence 2, and an output projection function to produce the rows to return.");
            this.log('');

            this.log('["Apricot", "Banana", "Cucumber"].join_q_(["Apple", "Canteloupe Island", "Durian", "b-wrong", "Avocado"], l => l[0], r => r[0], (l, r) => `${l[0]} is for ${r}`) // joining on first letter, returning left first letter and right full word');
            const test21 = ["Apricot", "Banana", "Cucumber"].join_q_(["Apple", "Canteloupe Island", "Durian", "b-wrong", "Avocado"], l => l[0], r => r[0], (l, r) => `${l[0]} is for ${r}`).toArray_q_();
            this.log(test21, true);
            assert(test21.sequenceEqual_q_(["A is for Apple", "A is for Avocado", "C is for Canteloupe Island"]), 'Join combines two sequences row-wise');

            this.log('["Apricot", "Banana", "Cucumber"].join_q_(["apple", "canteloupe Island", "durian", "avocado"], l => l[0], r => r[0], (l, r) => `${l[0]} is for ${r}`, { equals: (x, y) => x.toLowerCase() === y.toLowerCase() }) // can take a custom equality comparer');
            const test22 = ["Apricot", "Banana", "Cucumber"].join_q_(["apple", "canteloupe Island", "durian", "avocado"], l => l[0], r => r[0], (l, r) => `${l[0]} is for ${r}`, { equals: (x, y) => x.toLowerCase() === y.toLowerCase() }).toArray_q_();
            this.log(test22, true);
            assert(test22.sequenceEqual_q_(["A is for apple", "A is for avocado", "C is for canteloupe Island"]), 'Join can take custom equality');

            this.log("In LINQ's join, the output function is required. In JOIN, you can ignore it. If you do so, simple tuples are returned.");
            this.log(`["Apricot", "Banana"].join_q_(["apple", "Canteloupe Island", "Durian", "Avocado"], l => l[0], r => r[0], { equals: (x, y) => x.toLowerCase() === y.toLowerCase() }) // skipping the output function`);
            const test23 = ["Apricot", "Banana"].join_q_(["apple", "Canteloupe Island", "Durian", "Avocado"], l => l[0], r => r[0], { equals: (x, y) => x.toLowerCase() === y.toLowerCase() });
            this.log(test23, true);
            assert(JSON.stringify(test23) === `[["Apricot","apple"],["Apricot","Avocado"]]`, 'Join() with tuple output');

            this.log(`LINQ does not provide an outer join operator. It can be done (in a truly ugly way) in the query syntax, but not in fluent methods`);
            this.log(`["Apple", "Apricot", "Banana", "Canteloupe"].outerJoin_q_(["Berry", "Watermelon", "Avocado"], l => l[0], r => r[0], (l, r) => ({ l, r })) // but JOIN does have an outer join`);
            const test24 = ["Apple", "Apricot", "Banana", "Canteloupe"].outerJoin_q_(["Berry", "Watermelon", "Avocado"], l => l[0], r => r[0], (l, r) => ({ l, r })).toArray_q_();
            this.log(test24, true);
            assert(JSON.stringify(test24) === `[{"l":"Apple","r":"Avocado"},{"l":"Apricot","r":"Avocado"},{"l":"Banana","r":"Berry"},{"l":"Canteloupe"}]`, 'outerJoin matching Join() syntax');

            this.log(`["Apple", "Apricot", "Banana", "Canteloupe"].outerJoin_q_(["Berry", "Watermelon", "Avocado", "Apple"], l => l[0], r => r[0]) // default tuple output from join_q_() is also here`);
            const test25 = ["Apple", "Apricot", "Banana", "Canteloupe"].outerJoin_q_(["Berry", "Watermelon", "Avocado", "Apple"], l => l[0], r => r[0]).toArray_q_();
            this.log(test25, true);
            assert(JSON.stringify(test25) === `[["Apple","Avocado"],["Apple","Apple"],["Apricot","Avocado"],["Apricot","Apple"],["Banana","Berry"],["Canteloupe",null]]`, 'outerJoin with tuple output');

            this.log(`["Apple", "Apple", "Apricot", "Banana", "Canteloupe"].outerJoin_q_(["berry", "watermelon", "avocado", "apple"], l => l[0], r => r[0], (l, r) => ({ l, r }), (x, y) => x.toLowerCase() === y.toLowerCase()) // custom equality`);
            const test26 = ["Apple", "Apple", "Apricot", "Banana", "Canteloupe"].outerJoin_q_(["berry", "watermelon", "avocado", "apple"], l => l[0], r => r[0], (l, r) => ({ l, r }), (x, y) => x.toLowerCase() === y.toLowerCase()).toArray_q_();
            this.log(test26, true);
            assert(JSON.stringify(test26) === `[{"l":"Apple","r":"avocado"},{"l":"Apple","r":"apple"},{"l":"Apple","r":"avocado"},{"l":"Apple","r":"apple"},{"l":"Apricot","r":"avocado"},{"l":"Apricot","r":"apple"},{"l":"Banana","r":"berry"},{"l":"Canteloupe"}]`, 'outerJoin with custom equality');

            this.log(`["Apple", "Apple", "Apricot", "Banana", "Canteloupe"].outerJoin_q_(["berry", "watermelon", "avocado", "apple"], l => l[0], r => r[0], { equals: (x, y) => x.toLowerCase() === y.toLowerCase() }) // custom equality and tuple output`);
            const test27 = ["Apple", "Apple", "Apricot", "Banana", "Canteloupe"].outerJoin_q_(["berry", "watermelon", "avocado", "apple"], l => l[0], r => r[0], { equals: (x, y) => x.toLowerCase() === y.toLowerCase() }).toArray_q_();
            this.log(test27, true);
            assert(JSON.stringify(test27) === `[["Apple","avocado"],["Apple","apple"],["Apple","avocado"],["Apple","apple"],["Apricot","avocado"],["Apricot","apple"],["Banana","berry"],["Canteloupe",null]]`, 'outerJoin with custom equality and tuple output');

            this.log("The join() in LINQ is kind of a pain. I always find myself wondering what are the inputs, which is the first, which is the second, why did they use 'inner' and 'outer' for things that aren't inner or outer, etc. I keep having to google it. So JOIN contains a friendly version that combines two key selectors and custom equality into a single function.");
            this.log('');

            this.log(`["Apple", "Apricot", "Banana", "Canteloupe"].innerJoin_q_(["Berry", "Watermelon", "Avocado"], (l, r) => l[0] === r[0], (l, r) => ({ l, r })) // join on first letter and return objects`);
            const test28 = ["Apple", "Apricot", "Banana", "Canteloupe"].innerJoin_q_(["Berry", "Watermelon", "Avocado"], (l, r) => l[0] === r[0], (l, r) => ({ l, r })).toArray_q_();
            this.log(test28, true);
            assert(JSON.stringify(test28) === `[{"l":"Apple","r":"Avocado"},{"l":"Apricot","r":"Avocado"},{"l":"Banana","r":"Berry"}]`, "Basic innerJoin helper");

            this.log(`["Apple", "Apricot", "Banana", "Canteloupe"].innerJoin_q_(["Berry", "Watermelon", "Avocado"], (l, r) => l[0] === r[0]) // returns tuples, output function is optional`);
            const test29 = ["Apple", "Apricot", "Banana", "Canteloupe"].innerJoin_q_(["Berry", "Watermelon", "Avocado"], (l, r) => l[0] === r[0]).toArray_q_();
            this.log(test29, true);
            assert(JSON.stringify(test29) === `[["Apple","Avocado"],["Apricot","Avocado"],["Banana","Berry"]]`, 'InnerJoin helper with tuple output');

            this.log(`["Apple", "Apricot", "Banana", "Canteloupe"].leftJoin_q_(["Berry", "Watermelon", "Avocado"], (l, r) => l[0] === r[0], (l, r) => ({ l, r })) // there's also a left outer join`);
            const test30 = ["Apple", "Apricot", "Banana", "Canteloupe"].leftJoin_q_(["Berry", "Watermelon", "Avocado"], (l, r) => l[0] === r[0], (l, r) => ({ l, r })).toArray_q_();
            this.log(test30, true);
            assert(JSON.stringify(test30) === `[{"l":"Apple","r":"Avocado"},{"l":"Apricot","r":"Avocado"},{"l":"Banana","r":"Berry"},{"l":"Canteloupe"}]`, 'LeftJoin helper');

            this.log(`["Apple", "Apricot", "Banana", "Canteloupe"].leftJoin_q_(["Berry", "Watermelon", "Avocado"], (l, r) => l[0] === r[0]) // also allows tuple output`);
            const test31 = ["Apple", "Apricot", "Banana", "Canteloupe"].leftJoin_q_(["Berry", "Watermelon", "Avocado"], (l, r) => l[0] === r[0]).toArray_q_();
            this.log(test31, true);
            assert(JSON.stringify(test31) === `[["Apple","Avocado"],["Apricot","Avocado"],["Banana","Berry"],["Canteloupe",null]]`, 'LeftJoin helper with tuple output');

            this.log(`["Apple", "Apricot", "Banana", "Canteloupe"].rightJoin_q_(["Berry", "Watermelon", "Avocado"], (l, r) => l[0] === r[0], (l, r) => ({ l, r })) // there's also a right outer join`);
            const test32 = ["Apple", "Apricot", "Banana", "Canteloupe"].rightJoin_q_(["Berry", "Watermelon", "Avocado"], (l, r) => l[0] === r[0], (l, r) => ({ l, r })).toArray_q_();
            this.log(test32, true);
            assert(JSON.stringify(test32) === `[{"l":"Banana","r":"Berry"},{"r":"Watermelon"},{"l":"Apple","r":"Avocado"},{"l":"Apricot","r":"Avocado"}]`, 'RightJoin helper');

            this.log(`["Apple", "Apricot", "Banana", "Canteloupe"].fullJoin_q_(["Berry", "Watermelon", "Avocado"], (l, r) => l[0] === r[0], (l, r) => ({ l, r })) // there's also a full outer join`);
            const test33 = ["Apple", "Apricot", "Banana", "Canteloupe"].fullJoin_q_(["Berry", "Watermelon", "Avocado"], (l, r) => l[0] === r[0], (l, r) => ({ l, r })).toArray_q_();
            this.log(test33, true);
            assert(JSON.stringify(test33) === `[{"l":"Apple","r":"Avocado"},{"l":"Apricot","r":"Avocado"},{"l":"Banana","r":"Berry"},{"l":"Canteloupe"},{"r":"Watermelon"}]`, 'FullJoin helper');

            this.log(`[2, 3].crossJoin_q_([5, 6], (l, r) => ({ l, r })) // the join collection isn't complete without a cross join`);
            const test34 = [2, 3].crossJoin_q_([5, 6], (l, r) => ({ l, r })).toArray_q_();
            this.log(test34, true);
            assert(JSON.stringify(test34) === `[{"l":2,"r":5},{"l":2,"r":6},{"l":3,"r":5},{"l":3,"r":6}]`, 'CrossJoin helper');

            this.log("GroupJoin is a weird one that sounds like another custom method, but this one comes from Microsoft. A group join is like a combination of outer join and half a groupBy. The left and right side are joined and then the right side is grouped on the joining key. If nothing is on the right, the group list is empty");
            this.log('');
            this.log(`['Apple', 'Banana', 'Apple', 'Canteloupe'].groupJoin_q_(['Average', 'Alphabet', 'Cartographer', 'c-wrong'], q => q[0], q => q[0], (word, alsoMatching) => ({ word, alsoMatching })) // join on first letters and group right`);
            const test35 = ['Apple', 'Banana', 'Apple', 'Canteloupe'].groupJoin_q_(['Average', 'Alphabet', 'Cartographer', 'c-wrong'], q => q[0], q => q[0], (word, alsoMatching) => ({ word, alsoMatching })).toArray_q_();
            this.log(test35, true);
            assert(JSON.stringify(test35) === `[{"word":"Apple","alsoMatching":["Average","Alphabet"]},{"word":"Banana","alsoMatching":[]},{"word":"Apple","alsoMatching":["Average","Alphabet"]},{"word":"Canteloupe","alsoMatching":["Cartographer"]}]`, 'GroupJoin joins and groups');

            this.log(`['Apple', 'Banana', 'Apple', 'Canteloupe'].groupJoin_q_(['average', 'Alphabet', 'cartographer'], q => q[0], q => q[0], (word, alsoMatching) => ({ word, alsoMatching }), { equals: (x, y) => x.toUpperCase() === y.toUpperCase() }) // can take a custom equality`);
            const test36 = ['Apple', 'Banana', 'Apple', 'Canteloupe'].groupJoin_q_(['average', 'Alphabet', 'cartographer'], q => q[0], q => q[0], (word, alsoMatching) => ({ word, alsoMatching }), { equals: (x, y) => x.toUpperCase() === y.toUpperCase() }).toArray_q_();
            this.log(test36, true);
            assert(JSON.stringify(test36) === `[{"word":"Apple","alsoMatching":["average","Alphabet"]},{"word":"Banana","alsoMatching":[]},{"word":"Apple","alsoMatching":["average","Alphabet"]},{"word":"Canteloupe","alsoMatching":["cartographer"]}]`, 'Group join with custom equality');

            this.log(`[1, 2, 3, 4].zip_q_([5, 6, 7]) // will return 3 tuples, [1,5], [2,6], and [3,7], one from each sequence in order`);
            const test37 = [1, 2, 3, 4].zip_q_([5, 6, 7]).toArray_q_();
            this.log(test37, true);
            assert(JSON.stringify(test37) === `[[1,5],[2,6],[3,7]]`, 'Zip two sequences into a sequence of tuples');

            this.log(`[1, 2, 3, 4].zip_q_([5, 6, 7], [8, 9, 10, 11]) // can zip a third tuple`);
            const test38 = [1, 2, 3, 4].zip_q_([5, 6, 7], [8, 9, 10, 11]).toArray_q_();
            this.log(test38, true);
            assert(JSON.stringify(test38) === `[[1,5,8],[2,6,9],[3,7,10]]`, 'Zip three sequences');

            this.log(`[1, 2, 3, 4].zip_q_([5, 6, 7], (x, y) => x * y) // in place of the third tuple you can send a function that combines the first 2`);
            const test39 = [1, 2, 3, 4].zip_q_([5, 6, 7], (x, y) => x * y).toArray_q_();
            this.log(test39, true);
            assert(JSON.stringify(test39) === `[[1,5,5],[2,6,12],[3,7,21]]`, 'Zip two sequences and a virtual sequence');

            this.log(`TEST ${this.viewModel.testNumber}: Test successful`);
        } catch (err) {
            this.log(err.toString());
        }
    }
}
