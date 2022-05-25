import { Enumerable } from './Enumerable/Enumerable';
import { makeGenerator } from './Generators/MakeGenerator';
import { OrderedEnumerable } from './Enumerable/OrderedEnumerable';

/**
 * Helper to add extension methods to Array and Set. These methods duplicate the names in Enumerable, but what they do is create a new
 * Enumerable and then pass the call onward, so it seems as if the array is Enumerable.
 *
 * This can be modified to support any object. If you do so, remember to set writable: true so Enumerable can have its own
 * implementations.
 */
export function extend(name: string, extension: any) {
    Object.defineProperty(Array.prototype, name, {
        value: function _convertToEnumerable(this: any) {
            return (new Enumerable(this) as any)[name](...arguments);
        }
    });
    Object.defineProperty(Set.prototype, name, {
        value: function _convertToEnumerable(this: any) {
            return (new Enumerable(this) as any)[name](...arguments);
        }
    });
}
