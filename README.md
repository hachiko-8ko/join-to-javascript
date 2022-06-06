# JOIN to Javascript
## Implemention of LINQ to Objects in Javascript/Typescript

JOIN to Javascript allows you to join javascript arrays to other javascript arrays, select, order, etc. It also adds a few methods that I wanted to do myself (outer joins are painful and hacky in LINQ so I made better methods).

Many of these features already exist on the array class, so this is providing little that is new. The difference is that when possible, JOIN defers execution in the same way that LINQ provides deferred execution, waiting until you fetch the data by iterating it, calling toArray(), or fetching a single item. This means, for example, if you fetch `integers.where(row => isPrime(row)).first()` it will halt on the first prime, unlike `integers.filter(row => isPrime(row))[0]` which processes every row in the array.

Only LINQs fluent syntax is included. You would need to be able to make custom operators to do query syntax, and that's not allowed in JS.

[System.Linq Documentation](https://docs.microsoft.com/sv-SE/dotnet/api/system.linq.enumerable?view=net-6.0)

### Caveats

Arrays have had prototype modifications to allow the same methods found on the Enumerable class to appear. This makes it easier to code, but creates a problem. Arrays already have their own methods like join() and concat() and sometimes they don't even do the same thing, so I had to use my own names. To whit, \_q\_ has 
been added to the end of the C# methods. So you have join_q_() and concat_q_() as well as append_q_(), orderBy_q_(), etc.

Also, there are array-like objects, such as arguments and NodeLists. If you want to use them, you'll need to either do Array.from() on them or call the
extension method .asQueryable(). I could have supported them, but to do that I would need to add all these dozens of methods to Object.prototype, meaning they'd
appear on every object. I could limit visibility in typescript to only the iterables, but they'd still be there. I really don't want to do that. There really
isn't a clean way to only update the iterables, because there are a ton of undocumented iterable classes all with their own prototypes.

### Unit tests

I tried to get jest and ts-jest working on this machine so I could run unit tests. I couldn't even get them to install. So to make unit tests, I wrote a simple test page. You can find it in the tests and tests_out directories. It's very simple, very primitive, but it was frankly easier to do than the full system rebuild that would be required to get NPM to function.

The TypeScript version is currently still at 2.7, because read the previous paragraph.

### Installation

_Option 1: Precompiled Scripts_

The prototype extension scripts are found in the dist directory.

`<script src="join-extension.min.js"></script>`

_Option 2: Modules_

Import ExtensionLoader.js to patch prototypes with extension methods.

### Examples of use

I put my test bench up on my ichigo page, because it's not worth making a separate demo site just for this one thing. See the test/demo page [here](https://hachiko-8ko.github.io/ichigo-demo/demo/join-to-javascript/).
