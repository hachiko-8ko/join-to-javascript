export function makeGenerator<T>(iter: Iterable<T>): IterableIterator<T>;
export function makeGenerator<T>(iter: ArrayLike<T>): IterableIterator<T>;
export function makeGenerator<T extends object | string>(iter: T): IterableIterator<T>;
export function* makeGenerator<T>(iter: any): IterableIterator<T | string> {
    if (typeof iter === "string" || iterableGuard<T>(iter)) {
        yield* iter;
    }
    // Catch things that are array-like but not arrays.
    else if (arrayLikeGuard<T>(iter)) {
        yield* Array.from(iter);
    }
    // Turn random non-iterables into apparent one-element iterables.
    else {
        yield iter;
    }
}
function iterableGuard<T>(obj: any): obj is IterableIterator<T> {
    return typeof obj === "object" && obj && Symbol.iterator in obj;
}
function arrayLikeGuard<T>(obj: any): obj is ArrayLike<T> {
    // I don't think this is perfect but I can't find a way to validate the other part of ArrayLike, the key.
    return typeof obj === "object" && obj &&
        "length" in obj && typeof obj.length === "number" &&
        obj.length >= 0;
}
