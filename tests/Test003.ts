import { TestCaseViewModel } from './TestCaseViewModel';
import { assert } from './assert';
import { TestCaseView } from './TestCaseView';

class TestViewModel extends TestCaseViewModel {
    constructor() {
        super({
            name: 'Basic Single-Sequence Queries',
            descriptionHtml: `<p>The meat of JOIN to javascript is taken up by basic query operations that everyone who works with arrays is used to: filtering elements, projecting results, slicing and skipping, and so on.</p>`
        });
    }
}

// tslint:disable-next-line:max-classes-per-file
export class Test003 extends TestCaseView {
    constructor() {
        super(new TestViewModel());
    }

    testCase() {
        try {
            // Do your testing here

            // We need this function for testing.
            assert(![1, 2, 3].sequenceEqual_q_([2, 3]), 'Not equal: different length 1');
            assert(![1, 3].sequenceEqual_q_([2, 3, 1]), 'Not equal: different length 2');
            assert(![1, 2, 3].sequenceEqual_q_([2, 3, 1]), 'Not equal: different items');
            assert([1, 2, 3].sequenceEqual_q_([1, 2, 3]), 'Are equal');

            this.log('Every lesson in queries starts with select. Select projects a function onto every entry in the enumerable.');
            this.log('');
            this.log(`[1, 2, 3, 4, 5].select_q_(s => s * s) // 1,4,9,16,25`);
            const test01 = [1, 2, 3, 4, 5].select_q_(s => s * s).toArray_q_();
            this.log(test01, true);
            assert(test01.sequenceEqual_q_([1, 4, 9, 16, 25]), 'Select squares');

            this.log("[1, 2, 3, 4].select_q_((s: number, idx: number) => `${idx}^2=${s}`) // function can take index as 2nd parameter");
            // Typescript is annoying about the argument types. It can't figure them out automatically like usual.
            const test02 = [1, 2, 3, 4].select_q_((s: number, idx: number) => `${idx + 1}^2=${s * s}`).toArray_q_();
            this.log(test02, true);
            assert(test02.sequenceEqual_q_(["1^2=1", "2^2=4", "3^2=9", "4^2=16"]), "Select with index");

            this.log('The second step in every lesson in queries is "where."');
            this.log(`[1, 2, 3, 4, 5, 6, 7, 8].where_q_(q => q % 2 === 0) // 2,4,6,8`);
            const test03 = [1, 2, 3, 4, 5, 6, 7, 8].where_q_(q => q % 2 === 0).toArray_q_();
            this.log(test03, true);
            assert(test03.sequenceEqual_q_([2, 4, 6, 8]), 'Where even');

            this.log(`[1, 2, 3, 4, 5, 6, 7, 8].where_q_((q: number, idx: number) => idx < 3) // function can take index as 2nd parameter`);
            const test04 = [1, 2, 3, 4, 5, 6, 7, 8].where_q_((q: number, idx: number) => idx < 3).toArray_q_();
            this.log(test04, true);
            assert(test04.sequenceEqual_q_([1, 2, 3]), 'Where with index');

            this.log("You now know 90% of everything you'll need. But here are some more functions.");
            this.log('');

            this.log(`[1, 2, 3, 4, 5].skip_q_(2) // 3,4,5`);
            const test05 = [1, 2, 3, 4, 5].skip_q_(2).toArray_q_();
            this.log(test05, true);
            assert(test05.sequenceEqual_q_([3, 4, 5]), 'Skip first 2');

            this.log(`[1, 2, 3, 4, 5].skipLast_q_(2) // 1,2,3`);
            const test06 = [1, 2, 3, 4, 5].skipLast_q_(2).toArray_q_();
            this.log(test06, true);
            assert(test06.sequenceEqual_q_([1, 2, 3]), 'Skip last 2');

            this.log(`[1, 2, 3, 4, 5].skipWhile_q_(q => q !== 3) // skip as long as condition is false, then take rest`);
            const test07 = [1, 2, 3, 4, 5].skipWhile_q_(q => q !== 3).toArray_q_();
            this.log(test07, true);
            assert(test07.sequenceEqual_q_([3, 4, 5]), 'Skip until 3');

            this.log(`[1, 2, 3, 4, 5].skipWhile_q_((q: number, idx: number) => idx !== 3) // function can take index as 2nd parameter`);
            const test08 = [1, 2, 3, 4, 5].skipWhile_q_((q: number, idx: number) => idx !== 3).toArray_q_();
            this.log(test08, true);
            assert(test08.sequenceEqual_q_([4, 5]), 'SkipWhile with index');

            this.log(`[1, 2, 3, 4, 5].take_q_(2) // 1,2`);
            const test09 = [1, 2, 3, 4, 5].take_q_(2).toArray_q_();
            this.log(test09, true);
            assert(test09.sequenceEqual_q_([1, 2]), 'Take first 2');

            this.log(`[1, 2, 3, 4, 5].take_q_(3,1) // 2,3,4`);
            const test09skip1 = [1, 2, 3, 4, 5].take_q_(3, 1).toArray_q_();
            this.log(test09skip1, true);
            assert(test09skip1.sequenceEqual_q_([2, 3, 4]), 'Take first 3 after skip 1');

            this.log("LINQ doesn't have the ability to iterate through the list skipping every n steps. So I added it.");

            this.log(`[1, 2, 3, 4, 5].step_q_(2) // 1, 3, 5`);
            const test09step1 = [1, 2, 3, 4, 5].step_q_(2).toArray_q_();
            this.log(test09step1, true);
            assert(test09step1.sequenceEqual_q_([1, 3, 5]), 'Step every 2');

            this.log(`[1, 2, 3, 4, 5, 6, 7].step_q_(3) // 1, 4, 7`);
            const test09step2 = [1, 2, 3, 4, 5, 6, 7].step_q_(3).toArray_q_();
            this.log(test09step2, true);
            assert(test09step2.sequenceEqual_q_([1, 4, 7]), 'Step every 3');

            this.log(`[1, 2, 3, 4, 5].takeLast_q_(2) // 4,5`);
            const test10 = [1, 2, 3, 4, 5].takeLast_q_(2).toArray_q_();
            this.log(test10, true);
            assert(test10.sequenceEqual_q_([4, 5]), 'Take last 2');

            this.log(`[1, 2, 3, 4, 5].takeWhile_q_(q => q !== 3) // Return rows until condition is true, then stop`);
            const test11 = [1, 2, 3, 4, 5].takeWhile_q_(q => q !== 3).toArray_q_();
            this.log(test11, true);
            assert(test11.sequenceEqual_q_([1, 2]), 'TakeWhile not 3');

            this.log(`[1, 2, 3, 4, 5].takeWhile_q_((q: number, idx: number) => idx !== 3) // function can take index as 2nd parameter`);
            const test12 = [1, 2, 3, 4, 5].takeWhile_q_((q: number, idx: number) => idx !== 3).toArray_q_();
            this.log(test12, true);
            assert(test12.sequenceEqual_q_([1, 2, 3]), 'TakeWhile with index');

            this.log(`[1, 1, 2, 2, 2, 3, 3, 3, 3].distinct_q_() // 1,2,3`);
            const test13 = [1, 1, 2, 2, 2, 3, 3, 3, 3].distinct_q_().toArray_q_();
            this.log(test13, true);
            assert(test13.sequenceEqual_q_([1, 2, 3]), 'Get distinct entries');

            this.log(`[{ a: 1 }, { a: 1 }, { a: 2 }, { a: 2 }, { a: 3 }, { a: 3 }, { a: 3 }].distinct_q_((q, r) => q.a === r.a) // a custom equality comparer can be passed e.g. to allow comparison by key`);
            const test14 = [{ a: 1 }, { a: 1 }, { a: 2 }, { a: 2 }, { a: 3 }, { a: 3 }, { a: 3 }]
                .distinct_q_((q, r) => q.a === r.a)
                .toArray_q_();
            this.log(test14, true);
            assert(test14.map(m => m.a).sequenceEqual_q_([1, 2, 3]), 'Distinct with custom equality');

            this.log(`[{ a: 1 }, { a: 1 }, { a: 2 }, { a: 2 }, { a: 3 }, { a: 3 }, { a: 3 }].distinctBy_q_(q => q.a) // distinctBy() does its check based on a key selector function`);
            this.log("(I know this is almost the same as the previous, but it was added in .Net 6)");
            const test15 = [{ a: 1 }, { a: 1 }, { a: 2 }, { a: 2 }, { a: 3 }, { a: 3 }, { a: 3 }]
                .distinctBy_q_(q => q.a)
                .toArray_q_();
            this.log(test15, true);
            assert(test15.map(m => m.a).sequenceEqual_q_([1, 2, 3]), 'Distinct by key');

            this.log(`[{ a: 1 }, { a: 1 }, { a: 2 }, { a: 2 }, { a: 3 }, { a: 3 }, { a: 3 }].distinctBy_q_(q => q.a, (q, r) => q % 2 === r % 2) // also takes a custom equality comparer`);
            const test16 = [{ a: 1 }, { a: 1 }, { a: 2 }, { a: 2 }, { a: 3 }, { a: 3 }, { a: 3 }]
                .distinctBy_q_(q => q.a, (q, r) => q % 2 === r % 2)
                .toArray_q_();
            this.log(test16, true);
            assert(test16.map(m => m.a).sequenceEqual_q_([1, 2]), 'Distinct by key: one even & one odd');

            this.log("SelectMany() loops through the first level, flattens an array within that level, and returns it at the top level.");
            this.log("const numberSets = [{ type: 'odd', numbers: [1, 3, 5] }, { type: 'even', numbers: [2, 4, 6] }, { type: 'prime', numbers: [2, 5, 7, 11] }]; // several examples will work with this");
            this.log(`numberSets.selectMany_q_(q => q.numbers) // 1,3,5,2,4,6,2,5,7,11`);
            const test17 = [{ type: 'odd', numbers: [1, 3, 5] }, { type: 'even', numbers: [2, 4, 6] }, { type: 'prime', numbers: [2, 5, 7, 11] }].selectMany_q_(q => q.numbers).toArray_q_();
            this.log(test17, true);
            assert(test17.sequenceEqual_q_([1, 3, 5, 2, 4, 6, 2, 5, 7, 11]), 'Select many flattens inside arrays');

            this.log("numberSets.selectMany_q_((q: { type: string, numbers: number[] }, idx: number) => q.numbers.map(m => `${idx}: ${m}`) // function to get iterable can take index as 2nd parameter");
            // typescript really doesn't want to do any auto-typemapping here
            const test18 = [{ type: 'odd', numbers: [1, 3, 5] }, { type: 'even', numbers: [2, 4, 6] }, { type: 'prime', numbers: [2, 5, 7, 11] }].selectMany_q_((q: { type: string, numbers: number[] }, idx: number) => q.numbers.map(m => `${idx}: ${m}`)).toArray_q_();
            this.log(test18, true);
            assert(test18.sequenceEqual_q_(["0: 1", "0: 3", "0: 5", "1: 2", "1: 4", "1: 6", "2: 2", "2: 5", "2: 7", "2: 11"]), 'SelectMany with index');

            this.log("numberSets.selectMany_q_(q => q.numbers, (s, res) => `${s.type}: ${res}`) // an output function can be provided to project onto the flattened results, letting you combine parent and child");
            const test19 = [{ type: 'odd', numbers: [1, 3, 5] }, { type: 'even', numbers: [2, 4, 6] }, { type: 'prime', numbers: [2, 5, 7, 11] }].selectMany_q_(q => q.numbers, (s, res) => `${s.type}: ${res}`).toArray_q_();
            this.log(test19, true);
            assert(test19.sequenceEqual_q_(["odd: 1", "odd: 3", "odd: 5", "even: 2", "even: 4", "even: 6", "prime: 2", "prime: 5", "prime: 7", "prime: 11"]), 'SelectMany with output function');

            this.log("numberSets.selectMany_q_((q: { type: string, numbers: number[] }, idx: number) => q.numbers.map(m => `(#${idx}) ${m}`), (s, res) => `${s.type} ${res}`) // output function can take index as 2nd parameter");
            const test20 = [{ type: 'odd', numbers: [1, 3, 5] }, { type: 'even', numbers: [2, 4, 6] }, { type: 'prime', numbers: [2, 5, 7, 11] }].selectMany_q_((q: { type: string, numbers: number[] }, idx: number) => q.numbers.map(m => `(#${idx}) ${m}`), (s, res) => `${s.type} ${res}`).toArray_q_();
            this.log(test20, true);
            assert(test20.sequenceEqual_q_(["odd (#0) 1", "odd (#0) 3", "odd (#0) 5", "even (#1) 2", "even (#1) 4", "even (#1) 6", "prime (#2) 2", "prime (#2) 5", "prime (#2) 7", "prime (#2) 11"]), "SelectMany with index in output");

            this.log(`[1, 2, 3].cast_q_(num => num.toString()) // Cast() is impossible in JS, so cast_q_() is just an alias for select_q_()`);
            const test21 = [1, 2, 3].cast_q_(num => num.toString()).toArray_q_();
            this.log(test21, true);
            assert(test21.sequenceEqual_q_(["1", "2", "3"]), "Cast runs conversion function");

            this.log(`[2, 'two', 3, 'three', 4, 'four'].ofType_q_('number') // OfType() is also nonsense in JS, so this either does typeof (if a string is passed) or instanceof (if anything else)`);
            const test22 = [2, 'two', 3, 'three', 4, 'four'].ofType_q_('number').toArray_q_();
            this.log(test22, true);
            assert(test22.sequenceEqual_q_([2, 3, 4]), 'OfType number');

            this.log(`TEST ${this.viewModel.testNumber}: Test successful`);
        } catch (err) {
            this.log(err.toString());
        }
    }
}
