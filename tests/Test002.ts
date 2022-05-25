import { TestCaseViewModel } from './TestCaseViewModel';
import { assert } from './assert';
import { TestCaseView } from './TestCaseView';

class TestViewModel extends TestCaseViewModel {
    constructor() {
        super({
            name: 'Conversions',
            descriptionHtml: `<p>These methods are used to convert enumerables into ordinary objects: arrays, maps, sets, lookups</p>`
        });
    }
}

// tslint:disable-next-line:max-classes-per-file
export class Test002 extends TestCaseView {
    constructor() {
        super(new TestViewModel());
    }

    testCase() {
        try {
            // Do your testing here

            const test01 = [1, 3, 5].toArray_q_();
            this.log(`[1, 3, 5].toArray_q_() // an extremely redundant example ... makes an array`);
            this.log(test01, true);
            assert(test01[0] === 1 && test01[1] === 3 && test01[2] === 5, 'Array is created');

            const test02 = [1, 3, 5].toList_q_();
            this.log(`[1, 3, 5].toList_q_() // toList_q_() is aliased to toArray_q_()`);
            this.log(test02, true);
            assert(test02[0] === 1 && test02[1] === 3 && test02[2] === 5, 'Array is created by ToList()');

            this.log(`[{ name: 'Bob', wins: 20 }, { name: 'Carol', wins: 34 }].toDictionary_q_(q => q.name); // produces an object where keys are Bob and Carol and the values are the object e.g. { name: 'Bob', wins: 20 }`);
            const test03 = [{ name: 'Bob', wins: 20 }, { name: 'Carol', wins: 34 }].toDictionary_q_<any>(q => q.name);
            this.log(test03, true);
            assert(test03['Bob'].wins === 20, 'Object dictionary is created');

            this.log(`[{ name: 'Bob', wins: 20 }, { name: 'Carol', wins: 34 }].toDictionary_q_(q => q.name, q => q.wins) // produces {"Bob":20,"Carol":34}`);
            const test04 = [{ name: 'Bob', wins: 20 }, { name: 'Carol', wins: 34 }].toDictionary_q_(q => q.name, q => q.wins);
            this.log(test04, true);
            assert(test04['Bob'] === 20, 'Number dictionary is created');

            // Helper function for maps
            function replacer(key: any, value: any) {
                if (value instanceof Map) {
                    return Array.from(value.entries().asQueryable().prepend_q_("<- MAP ->"));
                } else {
                    return value;
                }
            }

            this.log('Normal JS objects cannot have keys that are not strings, so if you want object keys you must use Map. This is not exceedingly useful because objects do not make good keys.');
            this.log(`[{ name: 'Bob', wins: 20 }, { name: 'Carol', wins: 34 }].toMap_q_(q => ({ name: q.name })); // produces a map with { name } keys`);
            const test05 = [{ name: 'Bob', wins: 20 }, { name: 'Carol', wins: 34 }].toMap_q_(q => ({ name: q.name }));
            this.log(JSON.stringify(test05, replacer), true);
            assert(test05.size === 2 && !![...test05.keys()].find(m => m.name === 'Carol'), 'Object map is created');

            this.log(`[{ name: 'Bob', wins: 20 }, { name: 'Carol', wins: 34 }].toMap_q_(q => ({ name: q.name }), q => q.wins) // produces a map with { name } keys and wins as value`);
            const test06 = [{ name: 'Bob', wins: 20 }, { name: 'Carol', wins: 34 }].toMap_q_(q => ({ name: q.name }), q => q.wins);
            this.log(JSON.stringify(test06, replacer), true);
            assert(test06.size === 2 && [...test06.entries()].find(m => m[0].name === 'Carol')![1] === 34, 'Object map is created with element selector');

            this.log('JS objects and Map do not allow multiple values for a key, so JOIN produces a Lookup, which does.');
            this.log('When you call set() on a lookup, it appends the value instead of overwriting it.');
            this.log('');
            this.log(`[{ name: 'Bob', wins: 20 }, { name: 'Carol', wins: 34 }, { name: 'Carol', wins: 10 }].toLookup_q_(q => q.name) // Creates a lookup with name as key, helpful when names are duplicated`);
            const test07 = [{ name: 'Bob', wins: 20 }, { name: 'Carol', wins: 34 }, { name: 'Carol', wins: 10 }].toLookup_q_<string, any>(q => q.name);
            this.log(JSON.stringify(test07, replacer), true);
            assert(test07.size === 2 && test07.get('Carol')!.length === 2 && !!test07.get('Carol')!.find(f => f.wins === 10), 'Lookup is created');

            this.log(`[{ name: 'Bob', wins: 20 }, { name: 'Carol', wins: 34 }, { name: 'Carol', wins: 10 }].toLookup_q_(q => q.name, q => q.wins) // Creates a lookup with name as key and wins as value`);
            const test08 = [{ name: 'Bob', wins: 20 }, { name: 'Carol', wins: 34 }, { name: 'Carol', wins: 10 }].toLookup_q_<string, number>(q => q.name, q => q.wins);
            this.log(JSON.stringify(test08, replacer), true);
            assert(test08.size === 2 && test08.get('Carol')!.length === 2 && !!test08.get('Carol')!.find(f => f === 10), 'Lookup is created');

            this.log(`[1, 2, 2, 3, 4, 1].toHashSet_q_() // produces Set() of its unique values`);
            const test09 = [1, 2, 2, 3, 4, 1].toHashSet_q_();
            this.log([...test09], true);
            assert(test09.size === 4 && test09.has(1) && test09.has(2) && test09.has(3) && test09.has(4), 'Set is created');

            this.log(`TEST ${this.viewModel.testNumber}: Test successful`);
        } catch (err) {
            this.log(err.toString());
        }
    }
}
