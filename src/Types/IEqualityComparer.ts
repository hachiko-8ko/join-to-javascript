import { IPredicate2 } from './DelegateInterfaces';

export type IEqualityCompareFunction<T> = IPredicate2<T, T>;

export interface IEqualityCompareObject<T> {
    equals: IEqualityCompareFunction<T>;
}

export type IEqualityComparer<T> = IEqualityCompareFunction<T> | IEqualityCompareObject<T>;

export function extractEqualityComparer<T>(obj?: IEqualityComparer<T>): IEqualityCompareFunction<T> | undefined {
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
