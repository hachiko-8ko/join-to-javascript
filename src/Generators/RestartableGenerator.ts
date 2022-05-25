import { Enumerable } from '../Enumerable/Enumerable';
import { makeGenerator } from "./MakeGenerator";

/**
 * JS doesn't give a way to restart a generator, which causes a great deal of trouble when you need to check it multiple times.
 * For example, if you do an inner join, you need to check each element of the left with each element of the right.
 * You need the ability to rebuild the generator from the original iterable. But there isn't a reference to the original iterable ANYWHERE.
 * As a result, the only way to make this work is to make a copy of the data as you iterate it.
 * This could double the amount of space needed, but it's a limitation of the technology.
 * We don't actually know if a generator is being used. The type is "object." So you could be wasting memory by using this. No way to know.
 */
export class RestartableGenerator<T> implements Iterable<T> {
    iterator: Iterable<T>;
    private backup: T[];
    private flexMemory: boolean; // If this is true, restarting will clear backup. Memory should briefly go down, with a cost in cycles.
    constructor(iterable: Iterable<T>, flexMemory: boolean = false) {
        this.backup = [];
        this.iterator = cycleGenerator(iterable, this.backup);
        this.flexMemory = flexMemory;
    }
    [Symbol.iterator](): Iterator<T> {
        return this.iterator[Symbol.iterator]();
    }
    asQueryable(): Enumerable<T> {
        return this.iterator.asQueryable();
    }
    restart(): void {
        if (this.flexMemory) {
            const i = this.backup.slice(0);
            this.backup = [];
            this.iterator = cycleGenerator(i, this.backup);
        }
        else {
            this.iterator = makeGenerator(this.backup);
        }
    }
}
export function* cycleGenerator<T>(iter: Iterable<T>, backup: T[]): IterableIterator<T> {
    for (const x of iter) {
        yield x;
        backup.push(x);
    }
}
