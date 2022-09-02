import { SortingEnum } from '../types';
export declare function getPaginationObject<T extends {
    pageSize?: number;
    pageNumber?: number;
}>(filter: T, total: number): {
    pageSize: number;
    pageNumber: number;
    total: number;
    pageCount: number;
};
export declare function preparePagination<T extends {
    pageSize?: number;
    pageNumber?: number;
}>(filter: T): {
    take: number;
    kip: number;
} | undefined;
export declare function prepareSorting<T extends {
    sortOrder?: SortingEnum;
    sortField?: string;
}>(filter: T): {
    order: {
        [x: string]: SortingEnum;
    };
};
export declare function prepareLike<T>(value?: T): import("typeorm").FindOperator<string> | undefined;
export declare function prepareBetween(from?: number, to?: number): import("typeorm").FindOperator<number>;
