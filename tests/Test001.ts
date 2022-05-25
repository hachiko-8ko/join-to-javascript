import { Enumerable } from '../src/Enumerable/Enumerable';
import { TestCaseViewModel } from './TestCaseViewModel';
import { assert } from './assert';
import { TestCaseView } from './TestCaseView';
import { forEach } from '../src/Queryable/ForEach';

class TestViewModel extends TestCaseViewModel {
    constructor() {
        super({
            name: 'The Basics',
            descriptionHtml: `<p>
                JOIN to Javascript offers various operations such as filtering, projection, and counting on iterables such as arrays. The JOIN extension methods can be found on arrays, so you can call them directly as in the example <code>people.select_q_(q => q.firstName)</code>. This creates an Enumerable, which is the class behind every JOIN operation. Iterable non-arrays, such as NodeList, must be converted first to an enumerable using the asQueryable extension, as in the example <code>elements.asQueryable().where_q_(q => q.tagName === 'div')</code>.
            </p>
            <p>
                Most of the methods found in JOIN to Javascript are similar to methods found on arrays, but there is an important difference. Methods called on arrays execute when you call them. Methods in JOIN that return the Enumerable class only create the enumerable. They are not executed until you iterate them or call a method that produces a non-enumerable result. This is known as deferred execution.
            </p>
            <p>
                Deferred execution in JOIN is managed through the use of javascript generators, which produce records one by one while you iterate the generator, meaning that they both defer the start of the process and they halt when iteration is completed.
            </p>
            <p>
                To show by way of example, the statements<br/>
                <code>arr.filter(filterFunction).map(mapFunction).slice(0,5)</code><br/>
                and<br/>
                <code>arr.where_q_(filterFunction).select_q_(mapFunction).take_q_(5)</code></br>
                produce the exact same results, but they have these differences:
                <ul>
                    <li>the records in the array are processed that moment, while the records in the enumerable are not processed until you iterate them, such as using a for-of loop</li>
                    <li>filterFunction is called on every record of the array, while in the enumerable it is called only on enough records to produce 5 that match</li>
                    <li>mapFunction is called on every matching record of the array, while in the enumerable it is called at most 5 times</li>
                </ul>
            </p>
            <p>
                Methods that return a single result, such as count_q_() or min_q_() or first_q_() or toArray_q_() or toDictionary_q_() will enumerate the array, the same as looping through with a for-of loop will. Another operation that will materialize the iterable is calling JSON.stringify() on it.
            </p>
            <p>
                Once you iterate an Enumerable, the query will be processed, and the generator providing the data is closed. In C# LINQ to Objects if you want to re-use query data, you call ToArray() on the query and capture the result, but JOIN to Javascript will cache the data returned so later iterations return from the cache. It's still good coding practice to be explicit and use toArray_q_(), but you don't have to.
            </p>
            `
        });
    }
}

// tslint:disable-next-line:max-classes-per-file
export class Test001 extends TestCaseView {
    constructor() {
        super(new TestViewModel());
    }

    testCase() {
        try {
            // Do your testing here

            // Create a simple enumerable but do not trigger execution.
            this.log(`const queryable1 = [1, 2, 3].select_q_(a => 3 * a); // created but not executed`);
            const queryable1 = [1, 2, 3].select_q_(a => 3 * a);

            // The status of the generator is hidden in typescript, so to get at private
            // fields we have to cast as any. You can look at this in debug tools:
            // tslint:disable-next-line:no-console
            console.log((queryable1 as any)._source);

            this.log(`console.log(queryable1._isClosed); // should be false`);
            // There seems to be no way in code to view the generator status (just red squiggles under [[GeneratorStatus]])
            // so we check the _isClosed flag set on generator close.
            const test01 = (queryable1 as any)._isClosed;
            this.log(test01, true);
            assert(!test01, 'Queryable is not closed when created');

            this.log(`queryable1.toArray_q_(); // materializes the enumerable`);
            this.log(queryable1.toArray_q_(), true);
            this.log(`console.log(queryable1._isClosed); // should be true`);
            const test02 = (queryable1 as any)._isClosed;
            this.log(test02, true);
            assert(test02, 'Queryable is closed after iteration');

            // Generators can only produce data once. If not for the cache, you'd have to specify the whole code
            // [1, 2, 3].select_q_(a => 3 * a) each time, or just store the array output.
            // But the Enumerable class caches the results when you pull them, so when the generator is closed, you pull from the cache.
            this.log(`queryable1.toArray_q_(); // pulls from the cache. in a default generator, this would be {}`);
            const test03 = queryable1.toArray_q_();
            this.log(test03, true);
            assert(test03.length === 3, 'toArray still works after close');

            this.log(`['foo', 'bar', 'baz'].asQueryable() // takes an array, converts it to a queryable`);
            const test04 = ['foo', 'bar', 'baz'].asQueryable().toArray_q_();
            this.log(test04, true);
            assert(test04[0] === 'foo' && test04[1] === 'bar' && test04[2] === 'baz', 'Enumerate an array');

            this.log(`'abc'.asQueryable() // calling asQueryable() on a string produces a character enumerable ... this has a,b,c`);
            const test05 = 'abc'.asQueryable().toArray_q_();
            this.log(test05, true);
            assert(test05[0] === 'a' && test05[1] === 'b' && test05[2] === 'c', 'Strings can be converted to queryable');

            this.log(`(5).asQueryable() // calling asQueryable() on a number produces a range of numbers ... this is a 5-item enumerable having 0,1,2,3,4`);
            const test06 = (5).asQueryable().toArray_q_();
            this.log(test06, true);
            assert(test06.length === 5 && test06.all_q_((q: number, idx: number) => q === idx), 'Numbers can be converted to queryable');

            this.log(`randomGenerator().asQueryable() // any iterable can be converted to a queryable`);
            // anything can be turned into a queryable, which enables the JOIN methods
            function* randomGenerator(): IterableIterator<number> {
                yield 1;
                yield 4;
                yield 16;
            }
            const queryable2 = randomGenerator().asQueryable();
            const test07 = queryable2.toArray_q_();
            this.log(test07, true);
            assert(test07[0] === 1 && test07[1] === 4 && test07[2] === 16, 'Iterables can be converted to a queryable');

            this.log(`{name}.asQueryable() // though it's useless, non-iterable objects can be made queryable ... this is a length 1 enumerable containing {name} as its only element`);
            const item = { name: 'Foo' };
            const test08 = item.asQueryable().toArray_q_();
            this.log(test08, true);
            assert(test08.length === 1 && test08[0] === item, 'any object can be converted to a queryable');

            this.log(`TEST ${this.viewModel.testNumber}: Test successful`);
        } catch (err) {
            this.log(err.toString());
        }
    }
}
