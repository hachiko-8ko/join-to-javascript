import { IFunc2 } from './DelegateInterfaces';

export type CompareResult = 0 | -1 | 1;

export type ICompareFunction<T> = IFunc2<T, T, CompareResult>;

export interface ICompareObject<T> {
    compare: ICompareFunction<T>;
}

export type IComparer<T> = ICompareFunction<T> | ICompareObject<T>;

export function extractComparer<T>(obj?: IComparer<T>): IFunc2<T, T, CompareResult> | undefined {
    if (!obj) {
        return;
    }
    if (typeof obj === "function") {
        return obj;
    }
    if ("compare" in obj) {
        return obj.compare;
    }
}

export function defaultComparer(x: any, y: any): CompareResult {
    if (x > y) {
        return 1;
    }
    if (x < y) {
        return -1;
    }
    return 0;
}
