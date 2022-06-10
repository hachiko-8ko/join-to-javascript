import { TestCaseViewModel } from './TestCaseViewModel';
import { assert } from './assert';
import { TestCaseView } from './TestCaseView';

class TestViewModel extends TestCaseViewModel {
    constructor() {
        super({
            name: 'Singleton Results',
            descriptionHtml: `<p>Once you have a query, you might want to process that query to get a result, whether it be counting the rows, finding the min or max value, or picking the first or last. These operations will enumerate the dataset (materializing the enumerable) to find the result.</p>`
        });
    }
}

// tslint:disable-next-line:max-classes-per-file
export class Test005 extends TestCaseView {
    constructor() {
        super(new TestViewModel());
    }

    testCase() {
        try {
            // Do your testing here

            this.log(`['loser', 'loser', 'loser', 'winner', 'loser'].elementAt_q_(3) // like array[3]`);
            const test01 = ['loser', 'loser', 'loser', 'winner', 'loser'].elementAt_q_(3);
            this.log(test01, true);
            assert(test01 === 'winner', 'Element at 3rd');

            this.log(`['loser', 'loser', 'loser', 'winner', 'loser'].elementAtOrDefault_q_(3) // works the same way ...`);
            const test02 = ['loser', 'loser', 'loser', 'winner', 'loser'].elementAtOrDefault_q_(3);
            this.log(test02, true);
            assert(test02 === 'winner', 'ElementAtDefault 3rd');

            this.log(`['loser', 'loser', 'loser', 'winner', 'loser'].elementAtOrDefault_q_(13, 'default') // elementAt_q_(13) would have thrown`);
            const test03 = ['loser', 'loser', 'loser', 'winner', 'loser'].elementAtOrDefault_q_(13, 'default');
            this.log(test03, true);
            assert(test03 === 'default', 'ElementAt with default');

            this.log(`[1, 3, 4, 5].all_q_(num => num % 2 === 1) // check if all are odd`);
            const test04 = [1, 3, 4, 5].all_q_(num => num % 2 === 1);
            this.log(test04, true);
            assert(!test04, 'All is false');

            this.log(`[1, 3, 5].all_q_(num => num % 2 === 1) // check if all are odd`);
            const test05 = [1, 3, 5].all_q_(num => num % 2 === 1);
            this.log(test05, true);
            assert(test05, 'All is true');

            this.log(`[1, 3, 5].all_q_((num: number, idx: number) => idx < 1) // check if index of all is less than 1 (kind of BS test)`);
            const test05a = [1, 3, 5].all_q_((num: number, idx: number) => idx < 1);
            this.log(test05a, true);
            assert(!test05a, 'All is false with index');

            this.log(`[1, 2, 3].any_q_() // does sequence have anything`);
            const test06 = [1, 2, 3].any_q_();
            this.log(test06, true);
            assert(test06, 'Any with full array');

            this.log(`[1, 2, 3].any_q_(num => num % 2 === 0) // Any can take a filter function, same as where(func).any()`);
            const test07 = [1, 2, 3].any_q_(num => num % 2 === 0);
            this.log(test07, true);
            assert(test07, 'Any with filter');

            this.log(`[1, 3].any_q_(num => num % 2 === 0) // should be false`);
            const test08 = [1, 3].any_q_(num => num % 2 === 0);
            this.log(test08, true);
            assert(!test08, 'Any with filter and no match');

            this.log(`[1, 3].any_q_((num: number, idx: number) => idx > 10) check if index on any is greater than 10 (kind of BS test)`);
            const test08a = [1, 3].any_q_((num: number, idx: number) => idx > 10);
            this.log(test08a, true);
            assert(!test08a, 'Any with filter and index');

            this.log(`[1, 2, 3].contains_q_(3) // is element in sequence`);
            const test09 = [1, 2, 3].contains_q_(3);
            this.log(test09, true);
            assert(test09, 'Contains with match');

            this.log(`["a", "b", "c"].contains_q_("B") // no match`);
            const test10 = ["a", "b", "c"].contains_q_("B");
            this.log(test10, true);
            assert(!test10, 'Contains with no match');

            this.log(`["a", "b", "c"].contains_q_("B") // no match`);
            const test10a = ["a", "b", "c"].contains_q_("B", (x, y) => x.toUpperCase() === y.toUpperCase());
            this.log(test10a, true);
            assert(test10a, 'Contains with custom equality');

            this.log(`[1, 2, 2, -2].count_q_() // 4`);
            const test11 = [1, 2, 2, -2].count_q_();
            this.log(test11, true);
            assert(test11 === 4, 'Count a sequence');

            this.log(`[1, 2, 3, 4, 5, 6, 7].count_q_(num => num % 2 === 0) // count can take a filter condition, same as where(func).count()`);
            const test12 = [1, 2, 3, 4, 5, 6, 7].count_q_(num => num % 2 === 0);
            this.log(test12, true);
            assert(test12 === 3, 'Count with filter');

            this.log(`["x", "y", "z"].longCount_q_() // use longcount to count more than max integer ... only works in ECMAScript 2020 or newer ... probably takes a long time`);
            const test13 = ["x", "y", "z"].longCount_q_();
            this.log(test13.toString(), true); // built-in toJSON can't serialize bigint
            assert(test13.toString() === "3", "LongCount a sequence");

            this.log(`["x", "y", "z", "X"].longCount_q_(q => q.toLowerCase() === "x") // also takes a filter`);
            const test14 = ["x", "y", "z", "X"].longCount_q_(q => q.toLowerCase() === "x");
            this.log(test14.toString(), true); // built-in toJSON can't serialize bigint
            assert(test14.toString() === "2", "LongCount with filter");

            this.log(`[1, 2, 3, 4, 5].sum_q_() // sum the values`);
            const test15 = [1, 2, 3, 4, 5].sum_q_();
            this.log(test15, true);
            assert(test15 === 15, 'Sum sequence values');

            this.log(`[1, 2, 3, 4, 5].sum_q_(q => q * 2) // can apply a transformation function before summing`);
            const test16 = [1, 2, 3, 4, 5].sum_q_(q => q * 2);
            this.log(test16, true);
            assert(test16 === 30, 'Sum with transformation');

            this.log(`[1, 3, 4, 4, , undefined].average_q_() // 3 ... throws if empty, can't divide by zero`);
            const test17 = [1, 3, 4, 4, , undefined].average_q_();
            this.log(test17, true);
            assert(test17 === 3, 'Average sequence');

            this.log(`[undefined].average_q_() // LINQ says to ignore nulls in nullable numbers, and if all are null, return null`);
            const test17a = [undefined].average_q_();
            this.log(test17a, true);
            assert(test17a === undefined, 'Average a null sequence');

            this.log(`[2, 3, 4].first_q_() // 2`);
            const test18 = [2, 3, 4].first_q_();
            this.log(test18, true);
            assert(test18 === 2, 'First in sequence');

            // should return 4
            this.log(`[2, 3, 4].first_q_(q => q > 3) // can take a filter function, same as where(func).first()`);
            const test19 = [2, 3, 4].first_q_(q => q > 3);
            this.log(test19, true);
            assert(test19 === 4, 'First with filter');

            this.log(`[1, 1, 2, 3, 4].first_q_((q: number, idx: number) => idx === 3) // the filter condition can take index as a parameter (another BS test)`);
            const test19a = [1, 1, 2, 3, 4].first_q_((q: number, idx: number) => idx === 3);
            this.log(test19a, true);
            assert(test19a === 3, 'First with filter on index');

            this.log(`[2, 3, 4].first_q_(q => q > 100) // this will throw because there are no matches`);
            let throw1 = false;
            try {
                [2, 3, 4].first_q_(q => q > 100);
            } catch {
                throw1 = true;
            }
            assert(throw1, 'First threw');

            this.log(`[2, 3, 4].firstOrDefault_q_(q => q > 100, -1) // this will return the value provided (or undefined if none) instead of throwing`);
            const test20 = [2, 3, 4].firstOrDefault_q_((q: number) => q > 100, -1);
            this.log(test20, true);
            assert(test20 === -1, 'FirstOrDefault with default');

            this.log(`[1, 1, 2, 3, 4].firstOrDefault_q_((q: number, idx: number) => idx === 3) // also takes filter with index`);
            const test20a = [1, 1, 2, 3, 4].firstOrDefault_q_((q: number, idx: number) => idx === 3);
            this.log(test20a, true);
            assert(test20a === 3, 'FirstOrDefault with filter on index');

            this.log("Sometimes this API isn't as clean as the C# API because type checking in JS is ambiguous and because parameters don't actually have names.");
            this.log("In this case, when called with a single input, it's not possible if this is the optional filter or the optional default. It's assumed to be the filter.");
            this.log(`[].firstOrDefault_q_({ defaultValue: -2 }) // Use this format to pass default but no filter.`);
            const test21 = ([] as number[]).firstOrDefault_q_({ defaultValue: -2 });
            this.log(test21, true);
            assert(test21 === -2, "FirstOrDefault with only default");

            this.log(`['first', 'second', 'third', 'fourth', 'last'].last_q_() // can't have first without last`);
            const test22 = ['first', 'second', 'third', 'fourth', 'last'].last_q_();
            this.log(test22, true);
            assert(test22 === 'last', 'Last of sequence');

            // should be "fourth"
            this.log(`['first', 'second', 'third', 'fourth', 'last'].last_q_(q => q[0] === "f") // last can also take filter, same as where(func).last()`);
            const test23 = ['first', 'second', 'third', 'fourth', 'last'].last_q_(q => q[0] === "f");
            this.log(test23, true);
            assert(test23 === 'fourth', 'Last with filter');

            this.log(`['first', 'second', 'third', 'fourth', 'last'].last_q_((q: string, idx: number) => idx < 3) // last filter also allows index`);
            const test23a = ['first', 'second', 'third', 'fourth', 'last'].last_q_((q: string, idx: number) => idx < 3);
            this.log(test23a, true);
            assert(test23a === 'third', 'Last with filter and index');

            this.log(`['first', 'second', 'third'].last_q_(q => q.length > 100) // just like with first() this will throw`);
            let throw2 = false;
            try {
                ['first', 'second', 'third'].last_q_(q => q.length > 100);
            } catch {
                throw2 = true;
            }
            assert(throw2, "Last throws on empty sequence");

            this.log(`['first', 'second', 'third', 'fourth', 'last'].lastOrDefault_q_(q => q[0] === "X", "default") // doesn't throw, instead returns default`);
            const test24 = ['first', 'second', 'third', 'fourth', 'last'].lastOrDefault_q_((q: string) => q[0] === "X", "default");
            this.log(test24, true);
            assert(test24 === 'default', 'LastOrDefault with default');

            this.log(`['first', 'second', 'third', 'fourth', 'last'].lastOrDefault_q_((q: string, idx: number) => idx < 3) // filter also allows index`);
            const test24a = ['first', 'second', 'third', 'fourth', 'last'].lastOrDefault_q_((q: string, idx: number) => idx < 3);
            this.log(test24a, true);
            assert(test24a === 'third', 'Last with filter and index');

            this.log(`[].lastOrDefault_q_({ defaultValue: "default" }) // just like with first, passing only default value`);
            const test25 = ([] as string[]).lastOrDefault_q_({ defaultValue: "default" });
            this.log(test25, true);
            assert(test25 === 'default', 'LastOrDefault with only default');

            // should be 1
            this.log(`[1].single_q_() // returns record if there is exactly one, throwing if 0 or more than one`);
            const test26 = [1].single_q_();
            this.log(test26, true);
            assert(test26 === 1, 'Single record in sequence');

            this.log(`[1, 2].single_q_(q => q % 2 === 0) // takes a filter function, same as where(func).single()`);
            const test27 = [1, 2].single_q_(q => q % 2 === 0);
            this.log(test27, true);
            assert(test27 === 2, 'Single with filter');

            this.log(`[1, 2].single_q_((q: number, idx: number) => idx === 0) // filter function can take index`);
            const test27a = [1, 2].single_q_((q: number, idx: number) => idx === 0);
            this.log(test27a, true);
            assert(test27a === 1, 'Single with filter and index');

            this.log(`[1, 2, 3, 4].single_q_(q => q < 3) // single throws if there are multiple matches`);
            let throw4 = false;
            try {
                [1, 2, 3, 4].single_q_(q => q < 3);
            } catch {
                throw4 = true;
            }
            assert(throw4, 'Single throws when multiple returned');

            this.log(`[].single_q_() // Like first() and last(), single() throws on an empty sequence`);
            let throw3 = false;
            try {
                [].single_q_();
            } catch {
                throw3 = true;
            }
            assert(throw3, 'Single throws on empty sequence');

            let throw5 = false;
            try {
                [1, 2, 3, 4].single_q_(q => q > 10000);
            } catch {
                throw5 = true;
            }
            assert(throw5, 'Single throws on empty sequence with filter');

            this.log(`[1, 2, 3, 4].singleOrDefault_q_(q => q > 1000, -1) // singleOrDefault supplies default value for empty sequence, still throws if multiple`);
            const test28 = [1, 2, 3, 4].singleOrDefault_q_((q: number) => q > 1000, -1);
            this.log(test28, true);
            assert(test28 === -1, "Default returned for singleOrDefault");

            this.log(`[1, 2].singleOrDefault_q_((q: number, idx: number) => idx === 0) // filter function can take index`);
            const test28a = [1, 2].singleOrDefault_q_((q: number, idx: number) => idx === 0);
            this.log(test28a, true);
            assert(test28a === 1, 'Single with filter and index');

            let throw6 = false;
            try {
                [1, 2, 3, 4].singleOrDefault_q_((q: number) => q % 2 === 0);
            } catch {
                throw6 = true;
            }
            assert(throw6, "SingleOrDefault still throws on multiple");

            this.log(`[2, 3, 5, 7, 6, 4, 1].max_q_() // 7 is maximum`);
            const test29 = [2, 3, 5, 7, 6, 4, 1].max_q_();
            this.log(test29, true);
            assert(test29 === 7, 'Max returns maximum');

            this.log(`[2, 3, 5, 6, 4, 1].max_q_(q => q * q) // can take a transformation function applied before maximum, same as select(func).max()`);
            const test30 = [2, 3, 5, 6, 4, 1].max_q_(q => q * q);
            this.log(test30, true);
            assert(test30 === 36, 'Max returned with function');

            this.log("Max can take a custom comparer that returns 1 if the first value is greater, -1 is the second, else 0");
            this.log(`const ignoreEvenComparer = (x, y) => {
                x = x % 2 === 0 ? 0 : x;
                y = y % 2 === 0 ? 0 : y;
                if (x > y) {
                    return 1;
                } else if (x < y) {
                    return -1;
                } else {
                    return 0;
                }
            }`);
            const ignoreEvenComparer = (x: number, y: number) => {
                x = x % 2 === 0 ? 0 : x;
                y = y % 2 === 0 ? 0 : y;
                if (x > y) {
                    return 1;
                } else if (x < y) {
                    return -1;
                } else {
                    return 0;
                }
            };
            this.log(`[{ n: 2 }, { n: 3 }, { n: 5 }, { n: 6 }, { n: 4 }].max_q_(q => q.n, ignoreEvenComparer) // max not counting evens`);
            const test31 = [{ n: 2 }, { n: 3 }, { n: 5 }, { n: 6 }, { n: 4 }].max_q_(q => q.n, ignoreEvenComparer);
            this.log(test31, true);
            assert(test31 === 5, 'Max with custom comparer and transformation');

            this.log(`[2, 3, 5, 6, 4, 1].max_q_({compare: ignoreEvenComparer }) // custom comparer can be sent as first parameter by putting in IComparer`);
            const test32 = [2, 3, 5, 6, 4, 1].max_q_({
                compare: ignoreEvenComparer
            });
            this.log(test32, true);
            assert(test32 === 5, 'Max with custom comparer');

            this.log(`[{ n: 2 }, { n: 3 }, { n: 5 }, { n: 6 }, { n: 4 }].maxBy_q_(q => q.n) // maxBy uses a key selector function, compares the keys, but returns the element`);
            const test33 = [{ n: 2 }, { n: 3 }, { n: 5 }, { n: 6 }, { n: 4 }].maxBy_q_(q => q.n);
            this.log(test33, true);
            assert(test33.n === 6, "MaxBy with key lookup");

            this.log(`[{ n: 2 }, { n: 3 }, { n: 5 }, { n: 6 }, { n: 4 }].maxBy_q_(q => q.n, ignoreEvenComparer) // maxBy also takes custom comparer`);
            const test34 = [{ n: 2 }, { n: 3 }, { n: 5 }, { n: 6 }, { n: 4 }].maxBy_q_(q => q.n, ignoreEvenComparer);
            this.log(test34, true);
            assert(test34.n === 5, 'MaxBy with custom comparer');

            this.log(`[2, 3, 5, 7, 6, 4, 1].min_q_() // 1 is minimum`);
            const test35 = [2, 3, 5, 7, 6, 4, 1].min_q_();
            this.log(test35, true);
            assert(test35 === 1, 'Min returns minimum');

            this.log(`[2, 3, 5, 6, 4].min_q_(q => q * q) // min also takes transformation function, same as select(func).min()`);
            const test36 = [2, 3, 5, 6, 4].min_q_(q => q * q);
            this.log(test36, true);
            assert(test36 === 4, 'Min with filter');

            const ignoreEvenComparer2 = (x: number, y: number) => {
                x = x % 2 === 0 ? 110 : x;
                y = y % 2 === 0 ? 110 : y;
                if (x > y) {
                    return 1;
                } else if (x < y) {
                    return -1;
                } else {
                    return 0;
                }
            };

            // should be 3 (the custom comparer filters out evens)
            this.log(`[{ n: 2 }, { n: 3 }, { n: 5 }, { n: 6 }, { n: 4 }].min_q_(q => q.n, ignoreEvenComparer2) // min also takes custom comparer`);
            const test37 = [{ n: 2 }, { n: 3 }, { n: 5 }, { n: 6 }, { n: 4 }].min_q_(q => q.n, ignoreEvenComparer2);
            this.log(test37, true);
            assert(test37 === 3, "Min with custom comparer and transformation");

            this.log(`[2, 3, 5, 6, 4].min_q_({ compare: ignoreEvenComparer2 })`);
            const test38 = [2, 3, 5, 6, 4].min_q_({
                compare: ignoreEvenComparer2
            });
            this.log(test38, true);
            assert(test38 === 3, "Min with custom comparer only");

            this.log(`[{ n: 2 }, { n: 3 }, { n: 5 }, { n: 6 }, { n: 4 }].minBy_q_(q => q.n) // also a minBy that takes a key selector`);
            const test39 = [{ n: 2 }, { n: 3 }, { n: 5 }, { n: 6 }, { n: 4 }].minBy_q_(q => q.n);
            this.log(test39, true);
            assert(test39.n === 2, "MinBy returns min with key lookup");

            this.log(`[{ n: 2 }, { n: 3 }, { n: 5 }, { n: 6 }, { n: 4 }].minBy_q_(q => q.n, ignoreEvenComparer2) // minBy also takes a custom comparer`);
            const test40 = [{ n: 2 }, { n: 3 }, { n: 5 }, { n: 6 }, { n: 4 }].minBy_q_(q => q.n, ignoreEvenComparer2);
            this.log(test40, true);
            assert(test40.n === 3, 'MinBy with custom comparer');

            this.log("Max() and Min() throw when called on an empty sequence. To handle that, I created 2 JOIN-specific methods.");
            this.log("Because of the way overloads work in JS, if you aren't using all inputs, enclose in { defaultValue }.");
            this.log('');
            this.log(`[].maxOrDefault_q_({ defaultValue: 'default' }) // same as defaultIfEmpty('default').max()`);
            const test41 = ([] as string[]).maxOrDefault_q_({ defaultValue: 'default' });
            this.log(test41, true);
            assert(test41 === 'default', 'max value or default');

            this.log(`[].minOrDefault_q_({ defaultValue: 'default' }) // same as defaultIfEmpty('default').min()`);
            const test42 = ([] as string[]).minOrDefault_q_({ defaultValue: 'default' });
            this.log(test42, true);
            assert(test42 === 'default', 'min value or default');

            this.log(`['apple', 'mango', 'orange', 'passionfruit', 'grape'].aggregate_q_(
                (longest, next) => next.length > longest.length ? next : longest
                ) // aggregate acts like reduce(), in this case tracking the max length but it could sum up the results, etc`);
            const test43 = ['apple', 'mango', 'orange', 'passionfruit', 'grape'].aggregate_q_(
                (longest, next) => next.length > longest.length ? next : longest
            );
            this.log(test43, true);
            assert(test43 === 'passionfruit', 'Aggregate with only functon');

            this.log(`['apple', 'mango', 'orange', 'passionfruit', 'grape'].aggregate_q_('banana',
                (longest, next) => Array.from(next).filter(f => f === 'n').length > Array.from(longest).filter(f => f === 'n').length ? next : longest
            ) // initial value can be provided`);
            const test44 = ['apple', 'mango', 'orange', 'passionfruit', 'grape'].aggregate_q_('banana',
                (longest, next) => Array.from(next).filter(f => f === 'n').length > Array.from(longest).filter(f => f === 'n').length ? next : longest
            );
            this.log(test44, true);
            assert(test44 === 'banana', 'Aggregate with initial value');

            this.log(`['apple', 'mango', 'orange', 'passionfruit', 'grape'].aggregate_q_('banana',
                (longest, next) => next.length > longest.length ? next : longest,
                fruit => fruit.toUpperCase()
            ) // can take initial value and a function called upon the final result`);
            const test45 = ['apple', 'mango', 'orange', 'passionfruit', 'grape'].aggregate_q_('banana',
                (longest, next) => next.length > longest.length ? next : longest,
                fruit => fruit.toUpperCase()
            );
            this.log(test45, true);
            assert(test45 === 'PASSIONFRUIT', 'Aggregate with initial value and output function');

            this.log(`TEST ${this.viewModel.testNumber}: Test successful`);
        } catch (err) {
            this.log(err.toString());
        }
    }
}
