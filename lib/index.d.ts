export interface RandomEnsureOptions {
    random?: () => number;
    ensure?: number;
}
export declare class RandomEnsure<T> {
    list: T[];
    pos: number;
    options: RandomEnsureOptions;
    constructor(arr: T[], options?: RandomEnsureOptions);
    shuffle(first?: boolean): void;
    next(): T;
}
